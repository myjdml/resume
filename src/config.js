/**
 * 简历配置文件
 * @author CoderMing 
 * https://github.com/coderming
 */
const config = {
  /**
   * 脚标栏
   * 网页显示的时候 将会显示在页面下方（非页面上）
   * 打印时会显示在页面最下面
   * 若为空，则不显示   
   * 建议每边不超过15字
   * @param {[String]} 需要显示的内容
   */
  footer: {
    left: '',
    right: '网页版简历：coderming.com/resume'
  },
  /**
   * 顶部栏
   * 用法和footer一样
   * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
   */
  title: {
    left: '最后更新时间：2018年5月',
    right: ''
  },

  /**
   * 顶部栏的配置参数
   */
  header: {
    // 姓名
    name: '张德明',
    
    // 昵称
    // 会显示在姓名的右方
    // 在pad和手机上不会显示
    nickName: '',

    // 意向的工作
    // 建议不超过8个字
    job: 'web前端开发工程师',

    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是17， 16， 15
     * 建议区分各种信息的层级
     * 建议字数不超过15字
     */
    profiles: [
      "男 / 2020年毕业",
      "重庆邮电大学 · 计算机科学与技术",
      "一年+ 前端学习经验"
    ],
    /**
     * 练习信息栏
     * @param {[Object]} 需要显示的信息
     * 最多可显示4条
     * 在pad和手机上只会显示logo
     * address： 渲染出来的文本信息
     * 注意：请勿添加协议名，若添加，将会导致链接出错
     * type（可选）：icon的名称
     * icon目前有以下几种： tell, blog, github, mail, qq, wechat
     * 如果有更多的icon需求
     * 请提issue
     */
    contacts: [
      {address: 'coderming.com', type: 'blog'},
      {address: 'github.com/coderming', type: 'github'},
      {address: 'coderming@foxmail.com', type: 'mail'},
      {address: '1732341****', type: 'tell'},
    ],
    /**
     * @param {[Boolean]} 是否显示微信二维码
     * 二维码在pad和手机端不会显示
     * 如果为true，将自动加载 项目根目录/src/static/wechat.png 这个路径的图片
     * 注意是png格式，长宽比应为1:1
     */
    weChatQrCode: true,
  },

  /**
   * 正文部分
   * 说明：本模版采用两栏式显示
   * 分别呢 sectionLeft 和 sectionRight
   * 两栏的东西不会合并显示
   * 请自己判断并适应页面尺寸
   */
  sectionLeft: [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: '实践经历',
      content: [
        /**
         * 文章正文部分
         * left, right: 需要显示的文字，支持 b, i, a 等一切html标签，请自由配置
         * 同时提供以下几种样式配置方法
         * showDot：是否展示该段文字左边的小点。如果显示的话，这段文字将会往右缩进一丢丢
         * blod: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下blod的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          type: 'normal', 
          left: '重庆邮电大学 · 红岩网校工作站', 
          right: '2017.6 至今', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '<strong>Web 研发部干事</strong> 工作站成立于2000年，共有成员70余人( Web 研发部20+)，拥有PRD-UI-前后端开发-运营-迭代的完整开发流程。' + 
                '曾参与开发3个完整项目，同时参与上线维护，以及重构代码、增加可维护性等任务。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: '重庆邮电大学 · 计算机通信重点实验室', 
          right: '2017.1 - 2017.6', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '<strong>实验室成员</strong> 参与开发实验室的项目（前端4人后端10人）。使用实验室自建的<em>Git</em>仓库进行版本控制，注重<em>代码可读性</em>，了解了多人合作项目的开发流程与规范。', 
          right: '', 
          showDot: true,
        },
      ]
    },



    {
      title: '个人作品',
      content: [
        {
          type: 'normal', 
          left: '个人技术博客', 
          right: '<a href="https://coderming.com" target="_blank">Link</a>', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '16年12月起，开始以<em>coderming.com</em>作为个人域名，搭建并维护<em>Ghost</em>引擎的个人技术博客。' + 
                '利用<em>Nginx</em>反向代理实现了<em>https</em>站点。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: 'StrongBox-微信小游戏<small>（开发中）</small>', 
          right: '<a href="https://github.com/RedrockTeam/xyx" target="_blank">Source</a>', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '基于<em>Canvas</em>开发的微信小游戏。使用原生Canvas API开发，完全<em>OOP</em>的编程思想，' + 
                '尝试着做性能优化和长宽比适配，同时在开发过程中同步更新踩坑文章。' + 
                '截止2018年6月，<strong>在github上收获了50+ star， 15+ watch。</strong>', 
          right: '', 
          showDot: true,
        },
      ]
    },



    {
      title: '奖项证书',
      content: [
        {
          type: 'normal', 
          left: '2018.5 &nbsp&nbsp - &nbsp 蓝桥杯竞赛全国决赛C/C++ B组 · 优秀奖', 
          right: '国家级', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '2017.10 &nbsp - &nbsp 重庆邮电大学ACM校赛 · 二等奖', 
          right: '校级', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '2017.12 &nbsp - &nbsp 重庆邮电大学薪火杯科技竞赛 · 优秀奖', 
          right: '校级', 
          showDot: false,
          blod: true,
        },
      ]
    },
  ],





  sectionRight: [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: '项目经验',
      content: [
        /**
         * 文章正文部分
         * article：需要显示的文字，支持 b, i, a 等一切html标签，请自由配置
         * 同时提供以下几种样式配置方法
         * showDot：是否展示该段文字左边的小点。如果显示的话，这段文字将会往右缩进一丢丢
         * blod: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下blod的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          type: 'normal', 
          left: '重庆邮电大学招生办公室 · 微信小程序', 
          right: '2017.6', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '基于微信小程序<em>MINA框架</em>的<em>WXML</em>、<em>WXSS</em>、JS为代码语言进行开发，视图层采用<em>Flex弹性布局</em>，' + 
                '逻辑层采用模块化模式开发，减少耦合度。与后端配合采用<em>Restful API</em>进行开发，同时将配置参数抽取成单个模块文件便于修改。' + 
                '上线后进行后期维护及版本迭代。<strong>截止17年9月份共有<em>3.2w</em>用户，小程序打开次数<em>135w+</em>次，并成为“腾讯微校－高校微信排行榜西部明星”之一</strong>', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: '重邮新生专题网 · 桌面端页面', 
          right: '<a href="https://github.com/CoderMing/Welcome2017" target="_blank">Source</a> ' +
                 '<a href="http://hongyan.cqupt.edu.cn/welcome/2017" target="_blank">Link</a> 2017.8', 
          showDot: false,
          blod: true,
        },
        {
          type: 'normal', 
          left: '使用<em>HTML(5)</em>、<em>Less</em>、<em>jQuery</em>等各种技术实现的拥有完整开发流程的大型桌面端页面。' + 
                '使用<em>Less</em>作为CSS预处理器,<em>Gulp</em>实现开发流程自动化。前端开发周期15天，设计了基于<em>iframe</em>的主-子页面结构实现免刷新，便于开发。' + 
                '大量利用<em>CSS3</em>的特性，动画实现采用<em>keyframes</em>强制GPU渲染，保证了页面的流畅度。开发过程与产品视觉进行沟通，对界面进行了精细的优化。' + 
                '<strong>上线一个月UV<em>6k+</em>，PV<em>2W+</em>。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: 'hi,朋友! · SPA', 
          right: '<a href="//github.com/CoderMing/hi-friends" target="_blank">Source</a> 2017.11', 
          showDot: false,
          blod: true
        },
        {
          type: 'normal', 
          left: '基于<em>Vue.js(2.x)</em>开发的SPA。使用<em>Vue-cli</em>提供的基于<em>WebPack</em>的全尺寸开发脚手架、<em>Stylus</em>进行开发。' + 
                '采用模块化开发方式，实现了良好的<em>关注点分离</em>。', 
          right: '', 
          showDot: true,
        },
      ]
    },



    {
      title: '专业技能',
      content: [
        {
          type: 'normal', 
          left: '掌握Web前端开发的基本技能，熟悉<em>页面布局架构</em>、<em>前端语义化</em>、<em>代码可维护性</em>等，略懂<em>浏览器兼容性</em>，有<em>1年+</em>的前端开发经验。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: '对<em>jQuery</em>、<em>HTML5</em>、<em>CSS3</em>、<em>CSS预处理器</em>、<em>响应式布局</em>等有一定的理解，对<em>MV*框架</em>有简单的认知。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: '对<em>性能优化</em>、<em>前端安全</em>、<em>ES6+</em>等有一定的了解，对<em>NodeJS</em>、<em>前端调试</em>有简单的认知。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: '熟练使用<em>Git</em>进行版本控制和协作开发、<em>Markdown</em>进行文档编写，并以<em>Mac OS / Windows</em>、' + 
                '<em>Linux</em>、<em>VS Code</em>作为日常开发环境进行工作，了解项目开发流程，有多人协同开发的项目经验。', 
          right: '', 
          showDot: true,
        },
        {
          type: 'normal', 
          left: '熟悉<em>科学上网</em>，默认<em>Google</em>，能够看懂基本的英文文档。', 
          right: '', 
          showDot: true,
        },
      ]
    },

  ],
  /**
   * 是否展示界面最下方 “模版 by CoderMing” 字样
   * 如果你认为在个人的页面上显示此条消息不合适，可以通过此方法快速消除
   * 什么？你 star 没给也好意思注释这一条？？？ :(
   */
  showAboutInfo: true
}

export default config
