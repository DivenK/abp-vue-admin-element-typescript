﻿using LINGYUN.Abp.MessageService.Utils;
using LINGYUN.Abp.Notifications;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Json;
using Volo.Abp.Uow;

namespace LINGYUN.Abp.MessageService.EventBus.Distributed
{
    /// <summary>
    /// 订阅通知发布事件,统一发布消息
    /// </summary>
    /// <remarks>
    /// 作用在于SignalR客户端只会与一台服务器建立连接,
    /// 只有启用了SignlR服务端的才能真正将消息发布到客户端
    /// </remarks>
    public class NotificationEventHandler : IDistributedEventHandler<NotificationEventData>, ITransientDependency
    {
        /// <summary>
        /// Reference to <see cref="ILogger<DefaultNotificationDispatcher>"/>.
        /// </summary>
        public ILogger<NotificationEventHandler> Logger { get; set; }
        /// <summary>
        /// Reference to <see cref="AbpNotificationOptions"/>.
        /// </summary>
        protected AbpNotificationOptions Options { get; }
        /// <summary>
        /// Reference to <see cref="IJsonSerializer"/>.
        /// </summary>
        protected IJsonSerializer JsonSerializer { get; }
        /// <summary>
        /// Reference to <see cref="ISnowflakeIdGenerator"/>.
        /// </summary>
        protected ISnowflakeIdGenerator SnowflakeIdGenerator { get; }
        /// <summary>
        /// Reference to <see cref="IBackgroundJobManager"/>.
        /// </summary>
        protected IBackgroundJobManager BackgroundJobManager { get; }
        /// <summary>
        /// Reference to <see cref="INotificationStore"/>.
        /// </summary>
        protected INotificationStore NotificationStore { get; }
        /// <summary>
        /// Reference to <see cref="INotificationDefinitionManager"/>.
        /// </summary>
        protected INotificationDefinitionManager NotificationDefinitionManager { get; }
        /// <summary>
        /// Reference to <see cref="INotificationSubscriptionManager"/>.
        /// </summary>
        protected INotificationSubscriptionManager NotificationSubscriptionManager { get; }
        /// <summary>
        /// Reference to <see cref="INotificationPublishProviderManager"/>.
        /// </summary>
        protected INotificationPublishProviderManager NotificationPublishProviderManager { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationEventHandler"/> class.
        /// </summary>
        public NotificationEventHandler(
            IJsonSerializer jsonSerializer,
            IBackgroundJobManager backgroundJobManager,
            IOptions<AbpNotificationOptions> options,
            INotificationStore notificationStore,
            ISnowflakeIdGenerator snowflakeIdGenerator,
            INotificationDefinitionManager notificationDefinitionManager,
            INotificationSubscriptionManager notificationSubscriptionManager,
            INotificationPublishProviderManager notificationPublishProviderManager)
        {
            Options = options.Value;
            JsonSerializer = jsonSerializer;
            BackgroundJobManager = backgroundJobManager;
            NotificationStore = notificationStore;
            SnowflakeIdGenerator = snowflakeIdGenerator;
            NotificationDefinitionManager = notificationDefinitionManager;
            NotificationSubscriptionManager = notificationSubscriptionManager;
            NotificationPublishProviderManager = notificationPublishProviderManager;

            Logger = NullLogger<NotificationEventHandler>.Instance;
        }

        [UnitOfWork]
        public virtual async Task HandleEventAsync(NotificationEventData eventData)
        {
            var notification = NotificationDefinitionManager.Get(eventData.Name);

            var notificationInfo = new NotificationInfo
            {
                Name = notification.Name,
                CreationTime = eventData.CreationTime,
                Data = eventData.Data,
                Severity = eventData.Severity,
                Lifetime = notification.NotificationLifetime,
                TenantId = eventData.TenantId,
                Type = notification.NotificationType
            };
            notificationInfo.SetId(SnowflakeIdGenerator.Create());

            notificationInfo.Data  = NotificationDataConverter.Convert(notificationInfo.Data);

            Logger.LogDebug($"Persistent notification {notificationInfo.Name}");

            // 持久化通知
            await NotificationStore.InsertNotificationAsync(notificationInfo);

            var providers = Enumerable
                 .Reverse(NotificationPublishProviderManager.Providers);

            await PublishFromProvidersAsync(providers, eventData.Users, notificationInfo);
        }

        /// <summary>
        /// 指定提供者发布通知
        /// </summary>
        /// <param name="providers">提供者列表</param>
        /// <param name="notificationInfo">通知信息</param>
        /// <returns></returns>
        protected async Task PublishFromProvidersAsync(
            IEnumerable<INotificationPublishProvider> providers,
            IEnumerable<UserIdentifier> users,
            NotificationInfo notificationInfo)
        {
            // 检查是够已订阅消息
            Logger.LogDebug($"Gets a list of user subscriptions {notificationInfo.Name}");
            List<NotificationSubscriptionInfo> userSubscriptions;
            if (users == null)
            {
                // 获取用户订阅列表
                userSubscriptions = await NotificationSubscriptionManager
                    .GetUserSubscriptionsAsync(notificationInfo.TenantId, notificationInfo.Name);
            }
            else
            {
                // 过滤未订阅的用户
                userSubscriptions = await NotificationSubscriptionManager
                    .GetUsersSubscriptionsAsync(notificationInfo.TenantId, notificationInfo.Name, users);
            }

            users = userSubscriptions.Select(us => new UserIdentifier(us.UserId, us.UserName));

            if (users.Count() > 0)
            {
                // 持久化用户通知
                Logger.LogDebug($"Persistent user notifications {notificationInfo.Name}");
                await NotificationStore
                    .InsertUserNotificationsAsync(
                        notificationInfo,
                        users.Select(u => u.UserId));

                // 发布通知
                foreach (var provider in providers)
                {
                    await PublishAsync(provider, notificationInfo, users, async () =>
                    {
                        if (notificationInfo.Lifetime == NotificationLifetime.OnlyOne)
                        {
                            // 一次性通知在发送完成后就取消用户订阅
                            await NotificationStore
                                .DeleteUserSubscriptionAsync(
                                    notificationInfo.TenantId,
                                    users,
                                    notificationInfo.Name);
                        }
                    });
                }
            }
        }
        /// <summary>
        /// 发布通知
        /// </summary>
        /// <param name="provider">通知发布者</param>
        /// <param name="notificationInfo">通知信息</param>
        /// <param name="subscriptionUserIdentifiers">订阅用户列表</param>
        /// <returns></returns>
        protected async Task PublishAsync(
            INotificationPublishProvider provider, 
            NotificationInfo notificationInfo,
            IEnumerable<UserIdentifier> subscriptionUserIdentifiers,
            Action callback = null)
        {
            try
            {
                Logger.LogDebug($"Sending notification with provider {provider.Name}");
                var notifacationDataMapping = Options.NotificationDataMappings
                        .GetMapItemOrNull(notificationInfo.Name, provider.Name);
                if (notifacationDataMapping != null)
                {
                    notificationInfo.Data = notifacationDataMapping.MappingFunc(notificationInfo.Data);
                }
                // 发布
                await provider.PublishAsync(notificationInfo, subscriptionUserIdentifiers);

                Logger.LogDebug($"Send notification {notificationInfo.Name} with provider {provider.Name} was successful");
            }
            catch (Exception ex)
            {
                Logger.LogWarning($"Send notification error with provider {provider.Name}");
                Logger.LogWarning($"Error message:{ex.Message}");

                Logger.LogTrace(ex, $"Send notification error with provider { provider.Name}");

                Logger.LogDebug($"Send notification error, notification {notificationInfo.Name} entry queue");
                // 发送失败的消息进入后台队列
                await BackgroundJobManager.EnqueueAsync(
                    new NotificationPublishJobArgs(notificationInfo.GetId(),
                    provider.GetType().AssemblyQualifiedName,
                    subscriptionUserIdentifiers.ToList(),
                    notificationInfo.TenantId));
            }
            finally
            {
                callback?.Invoke();
            }
        }
    }
}
