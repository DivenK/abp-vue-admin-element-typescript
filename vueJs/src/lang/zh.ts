export default {
  route: {
    dashboard: '首页',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    draggableDialog: '可拖拽对话框',
    draggableKanban: '可拖拽看板',
    draggableList: '可拖拽列表',
    draggableSelect: '可拖拽选择',
    charts: '图表',
    barChart: '柱状图表',
    lineChart: '折线图',
    mixedChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单 1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    table: '表格',
    dynamicTable: '动态表格',
    draggableTable: '可拖拽表格',
    inlineEditTable: '表格内编辑',
    complexTable: '综合表格',
    tab: '分栏',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: '导出 Zip',
    theme: '换肤',
    clipboard: '粘贴板',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心',
    tasks: '任务中心',
    admin: '管理页',
    users: '用户管理',
    roles: '角色管理',
    settings: '配置管理',
    apigateway: '网关管理',
    group: '路由分组',
    global: '全局配置',
    route: '路由配置'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小',
    profile: '个人中心'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    tenantName: '租户',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    createRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用 window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    showTagsView: '显示 Tags-View',
    showSidebarLogo: '显示侧边栏 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '侧边栏文字主题色'
  },
  task: {
    title: '任务管理'
  },
  users: {
    queryFilter: '查询过滤:',
    filterString: '过滤字符',
    searchList: '搜索列表',
    createUser: '新增用户',
    userName: '用户账户',
    name: '用户名称',
    surname: '用户简称',
    email: '邮件地址',
    phoneNumber: '联系电话',
    lockoutEnd: '锁定时间',
    creationTime: '创建时间',
    operaActions: '操作方法',
    updateUser: '编辑用户',
    updateUserBy: '编辑用户  {name}',
    otherOpera: '更多操作',
    lockUser: '锁定用户',
    deleteUser: '删除用户',
    delNotRecoverData: '请注意,删除后不可恢复!',
    whetherDeleteUser: '是否删除用户 {name} ?',
    userHasBeenDeleted: '用户 {name} 已删除!',
    twoFactorEnabled: '双因素认证',
    lockoutEnabled: '登录失败锁定',
    createUserSuccess: '用户 {name} 添加成功!',
    updateUserSuccess: '用户 {name} 修改成功!'
  },
  userProfile: {
    basic: '基本信息',
    security: '安全选项',
    roles: '用户角色',
    roleList: '角色列表',
    hasRoles: '已有角色',
    permission: '分配权限',
    password: '用户密码',
    confirmPassword: '确认用户密码',
    pleaseInputName: '请输入用户名称',
    pleaseInputUserName: '请输入用户登录账户',
    pleaseInputSurname: '请输入用户简称',
    pleaseInputPhoneNumber: '请输入联系方式',
    pleaseInputEmail: '请输入邮件地址',
    pleaseInputPassword: '请输入用户密码',
    pleaseConfirmPassword: '请再次输入用户密码'
  },
  roles: {
    refreshList: '刷新列表',
    id: '角色标识',
    name: '角色名称',
    type: '角色类型',
    system: '内置角色',
    custom: '用户定义',
    isDefault: '默认角色',
    isPublic: '公共角色',
    isPrivate: '私有角色',
    operaActions: '操作方法',
    updateRole: '编辑角色',
    deleteRole: '删除角色',
    createRole: '新建角色',
    permission: '分配权限',
    otherOpera: '更多操作',
    setDefault: '设为默认',
    unSetDefault: '取消默认',
    delNotRecoverData: '请注意,删除后不可恢复!',
    whetherDeleteRole: '是否删除角色 {name} ?',
    roleHasBeenDeleted: '角色 {name} 已删除!',
    roleHasBeenSetDefault: '{name} 已设置为默认角色!',
    createRoleSuccess: '角色 {name} 添加成功!',
    pleaseInputRoleName: '请输入角色名称',
    roleNameIsRequired: '角色名称不能为空!'
  },
  operaActions: '操作方法',
  queryFilter: '查询过滤',
  filterString: '过滤字符',
  searchList: '查询列表',
  creationTime: '创建时间',
  successful: '提交成功',
  pleaseInputBy: '请输入{key}',
  pleaseSelectBy: '请选择{key}',
  none: '未定义',
  delNotRecoverData: '请注意,删除后不可恢复!',
  whetherDeleteData: '是否删除选择的记录 {name} ?',
  dataHasBeenDeleted: '选定的记录 {name} 已删除!',
  apiGateWay: {
    createGroup: '新建分组',
    updateGroup: '编辑分组',
    updateGroupByApp: '编辑分组  {name}',
    deleteGroup: '删除分组',
    createGlobal: '新建配置',
    updateGlobal: '编辑配置',
    updateGlobalByApp: '编辑配置  {name}',
    deleteGlobal: '删除路由',
    createRoute: '新建路由',
    updateRoute: '编辑路由',
    updateRouteByApp: '编辑路由  {name}',
    deleteRoute: '删除路由',
    groupName: '路由组名',
    pleaseInputGroupName: '请输入路由组名称',
    appId: '应用标识',
    pleaseInputAppId: '请输入应用标识',
    appName: '应用名称',
    pleaseInputAppName: '请输入应用名称',
    appIpAddress: '应用地址',
    description: '分组描述',
    isActive: '启用状态',
    active: '启用',
    dnActive: '禁用',
    basicOptions: '基础配置',
    httpOptions: 'Http选项',
    rateLimitOptions: '流量控制',
    qoSOptions: '服务质量',
    loadBalancerOptions: '负载均衡',
    serviceDiscovery: '服务发现',
    baseUrl: '访问路径',
    downstreamScheme: '下游协议',
    requestIdKey: '访问标识',
    maxConnectionsPerServer: '每台服务器最大连接数',
    useProxy: '使用代理',
    useTracing: '调用链追踪',
    allowAutoRedirect: '允许重定向',
    useCookieContainer: '使用Cookie容器',
    clientIdHeader: '客户端请求头',
    httpStatusCode: 'Http错误代码',
    quotaExceededMessage: '过载错误消息',
    rateLimitCounterPrefix: '速率限制器前缀',
    disableRateLimitHeaders: '禁用速率限制头',
    timeoutValue: '超时时间(ms)',
    durationOfBreak: '熔断时间(ms)',
    exceptionsAllowedBeforeBreaking: '允许的最大异常次数',
    loadBalancerType: '轮询方式',
    leastConnection: '总是空闲服务器',
    roundRobin: '服务器轮询',
    noLoadBalance: '发往首个服务器',
    loadBalancerKey: '轮询标识',
    loadBalancerExpiry: '到期时间',
    discoverType: '实例类型',
    discoverHost: '主机地址',
    discoverPort: '主机端口',
    discoverToken: '访问标识',
    configurationKey: '配置标识',
    pollingInterval: '轮询间隔',
    namespace: '命名空间',
    discoverScheme: '协议类型',
    downstreamHttpVersion: '下游服务版本',
    reRouteName: '路由名称',
    appIdHasRequired: '应用标识不能为空!',
    upstreamPathTemplate: '上游请求路径',
    upstreamHttpMethod: '上游请求方式',
    downstreamHostAndPorts: '下游请求地址',
    downstreamPathTemplate: '下游请求路径',
    serviceName: '服务名称',
    serviceNamespace: '命名空间',
    addDownHost: '添加下游主机',
    priority: '优先级',
    downHostPortFormat: '输入格式: Ip地址:端口号',
    aggrefateKey: '聚合标识',
    downstreamHttpMethod: '下游请求方法',
    changeDownstreamPathTemplate: '下游路径声明转换',
    downstreamHeaderTransform: '添加下游响应标头',
    addHeadersToRequest: '添加请求标头转换',
    addClaimsToRequest: '添加请求声明转换',
    addQueriesToRequest: '添加查询参数转换',
    upstreamHeaderTransform: '添加上游请求标头',
    routeClaimsRequirement: '路由必要声明',
    delegatingHandlers: '委托处理程序',
    reRouteIsCaseSensitive: '忽略大小写',
    dangerousAcceptAnyServerCertificateValidator: '忽略SSL错误',
    enableRateLimiting: '启用流量控制',
    rateLimitCount: '最大请求数量',
    period: '速率限制时间',
    periodTimespan: '允许错开时间重试',
    ipAllowedList: 'Ip白名单',
    ipBlockedList: 'Ip黑名单',
    authenticationProviderKey: '身份认证程序',
    allowedScopes: '允许认证范围'
  }
}