

import { type Tag, type WebSite, type queryType } from './type'


type CusTag = {
	[proName: string]: Tag
}

/**
 * 前端站点
 */
export const FE_MAP: CusTag = {
	FE_BLOG: {
		type: 'FE',
		name: '博客教程',
		fontColor: '#39ca30',
		description: '不错的前端学习资源'
	},
	FE_SITE_GEN:{
		type: 'FE',
		name: '静态站点生成器',
		fontColor: '#AAC98E',
		description: '简单快速的构建出个人文档'
	},
	FE_CSS:{
		type: 'FE',
		name: 'CSS',
		fontColor: '#6FDABE',
		description: 'CSS相关的框架与资源'
	},
	FE_TOOL_LIB:{
		type: 'FE',
		name: '前端工具库',
		fontColor: '#6FDABE',
		description: '常用的一些前端工具'
	},
	FE_RUNTIME:{
		type: 'FE',
		name: 'JS运行时',
		fontColor: '#6FDABE',
		description: 'JavaScript的运行时环境'
	},
	FE_DESK_APP:{
		type: 'FE',
		name: '桌面应用',
		fontColor: '#6FDABE',
		description: '用JavaScript构建桌面应用'
	},
	FE_UI_LIB:{
		type: 'FE',
		name: 'UI库',
		fontColor: '#6FDABE',
		description: '现代Web站点使用的UI库'
	},
	FE_COMIC_LIB:{
		type: 'FE',
		name: '动画库',
		fontColor: '#6FDABE',
		description: '快速构建动画效果'
	},
	FE_BUILD:{
		type: 'FE',
		name: '构建工具',
		fontColor: '#6FDABE',
		description: '对Web应用进行构建'
	},
	FE_TEST:{
		type: 'FE',
		name: 'Web测试',
		fontColor: '#6FDABE',
		description: '测试Web应用的工具'
	},
	FE_DEV_TOOL:{
		type: 'FE',
		name: '开发工具',
		fontColor: '#6FDABE',
		description: '开发Web应用中的工具插件'
	},
	FE_SERVER:{
		type: 'FE',
		name: '服务端',
		fontColor: '#6FDABE',
		description: 'JavaScript基于服务端的框架工具'
	},
	FE_WEB_FRAMEWORK:{
		type: 'FE',
		name: 'Web框架',
		fontColor: '#6FDABE',
		description: '利用Web框架快速的构建Web应用'
	},
	FE_WEB_EXT:{
		type: 'FE',
		name: '框架拓展',
		fontColor: '#6FDABE',
		description: '对Web框架的功能进行拓展'
	}
}

/**
 * 后端站点
 */
export const BE_MAP: CusTag = {
	BE_BLOG:{
		type: 'BE',
		name: '博客教程',
		fontColor: '#39ca30',
		description: '不错的后端学习资源'
	},
	BE_BAISC:{
		type: 'BE',
		name: '基础',
		fontColor: '#39ca30',
		description: '一些基础的学习资源'
	},
	BE_ARCH:{
		name: '架构',
		type: 'BE',
		fontColor: '#39ca30',
		description: '关于分布式、微服务架构说明'
	},
	BE_CLOUD_NATIVE:{
		name: '云原生',
		type: 'BE',
		fontColor: '#39ca30',
		description: '关于云原生的说明'
	},
	BE_CONTAINER:{
		name: '容器化',
		type: 'BE',
		fontColor: '#39ca30',
		description: '使用容器化构建系统'
	},
	BE_FRAMEWOKR:{
		name: '后端框架',
		type: 'BE',
		fontColor: '#39ca30',
		description: '开发中常用的框架'
	},
	BE_TOOL_LIB:{
		type: 'BE',
		name: '后端工具包',
		fontColor: '#39ca30',
		description: '开发中常用的工具包'
	},
	BE_MIDDLEWARE:{
		name: '中间件',
		type: 'BE',
		fontColor: '#39ca30',
		description: '开发中常用的中间件'
	},
	BE_PLATFORM:{
		name: '平台',
		type: 'BE',
		fontColor: '#39ca30',
		description: '常见的存储组件'
	},
	BE_BUILD:{
		type: 'BE',
		name: '构建工具',
		fontColor: '#6FDABE',
		description: '对应用进行构建'
	},
}

/**
 * 通用资源
 */
export const COM: CusTag = {
	COM_BOOK:{
		type: 'COM',
		name: '开源书籍',
		fontColor: '#39ca30',
		description: '一些开源的书籍'
	},
	COM_TOOL_SOURCE:{
		type: 'COM',
		name: '工具资源',
		fontColor: '#39ca30',
		description: '一些常用的工具'
	},
	COM_DEV_LAN:{
		name: '开发语言',
		type: 'COM',
		fontColor: '#39ca30',
		description: '最常使用的开发语言'
	},
	COM_OTHER:{
		type: 'COM',
		name: '其他',
		fontColor: '#39ca30',
		description: '其他资源'
	}
}


/**
 * @description 网站导航
 */

//TODO 将博客中的网站导航合并到这里
const websiteData:WebSite[] = [
	{
		name: 'Java程序员进阶之路',
		icon: 'http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/logo.png',
		href: 'https://tobebetterjavaer.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '一份通俗易懂、风趣幽默的Java学习指南,内容涵盖Java基础、Java并发编程、Java虚拟机、Java企业级开发、Java面试等核心知识点',
		rate: 2,
		lang: ['Java'],
	},
	{
		name: '虫洞栈',
		icon: 'https://bugstack.cn/favicon.ico',
		href: 'https://bugstack.cn/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: 'Java 基础、面经手册、Netty4.x、手写Spring、用Java实现JVM、重学Java设计模式、SpringBoot中间件开发、DDD系统架构项目开发、字节码编程...',
		rate: 2,
		lang: ['Java']
	},
	{
		name: 'Java 全栈知识体系',
		icon: 'https://pdai.tech/favicon.ico',
		href: 'https://pdai.tech/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL...',
		rate: 3,
		lang: ['Java']
	}, 
	{
		name: 'JavaGuide',
		icon: 'https://javaguide.cn/logo.svg',
		href: 'https://javaguide.cn/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识',
		rate: 2,
		lang: ['Java']
	}, {
		name: 'Doocs',
		icon: 'https://avatars.githubusercontent.com/u/43716716?s=200&v=4',
		href: 'https://doocs.github.io/#/README_CN',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '专注于分享技术领域相关知识的技术社区',
		rate: 1,
		lang: ['Java']
	},{
		name: 'Martin Fowler',
		icon: 'https://martinfowler.com/logo-sq.png',
		href: 'https://martinfowler.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_ARCH],
		description: 'MartinFowler的个人网站,就是那个提出微服务架构,敏捷开发的...',
		rate: 2
	},{
		name: 'LABULADONG 的算法网站',
		icon: 'https://labuladong.github.io/algo/images/avatar.png',
		href: 'https://labuladong.github.io/algo/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '一个不错的算法与数据结构的学习网站',
		rate: 3
	}, {
		name: '设计模式',
		icon: 'https://refactoringguru.cn/favicon.png',
		href: 'https://refactoringguru.cn/design-patterns',
		isOpenSource: true,
		tags: [BE_MAP.BE_BAISC],
		description: '一个不错的算法与数据结构的学习网站',
		rate: 2,
	}, {
		name: 'Node.js技术栈',
		icon: '/img/website/nodeTech.jpeg',
		href: 'https://www.nodejs.red/',
		isOpenSource: true,
		tags: [FE_MAP.FE_BLOG],
		description: '是作者五月君从事 Node.js 开发以来的学习历程,希望这些分享能帮助到正在学习、使用 Node.js 的朋友们',
		rate: 1,
		lang: ['Node']
	}, {
		name: 'Road To Coding',
		icon: '/img/website/roadMap.ico',
		href: 'https://r2coding.com/',
		isOpenSource: true,
		tags: [COM.COM_OTHER],
		description: 'Road To Coding,意为「编程自学之路」,是自学编程以来所用资源和分享内容的大聚合',
		rate: 1
	}, {
		name: 'ES6 入门教程',
		icon: '/img/website/es6.png',
		href: 'https://es6.ruanyifeng.com/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '《ECMAScript 6 入门教程》阮一峰老师开源的一本 JavaScript 语言教程,全面介绍 ECMAScript 6 新引入的语法特性。',
		rate: 3,
		lang: ['JavaScript']
	}, {
		name: '深入理解 TypeScript',
		icon: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
		href: 'https://jkchao.github.io/typescript-book-chinese/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '《TypeScript Deep Dive》 是一本很好的开源书,从基础到深入,很全面的阐述了 TypeScript 的各种魔法,不管你是新手,还是老鸟,它都将适应你。',
		rate: 2,
		lang: ['TypeScript']
	}, {
		name: '解道',
		icon: '/img/website/jdon.png',
		href: 'https://www.jdon.com/',
		isOpenSource: false,
		tags: [BE_MAP.BE_BLOG,BE_MAP.BE_ARCH],
		description: '解道jdon - 传道解惑的架构师博客',
		rate: 3
	}, {
		name: '凤凰架构',
		icon: 'https://icyfenix.cn/images/logo-color.png',
		href: 'https://icyfenix.cn/',
		isOpenSource: true,
		tags: [COM.COM_BOOK,BE_MAP.BE_ARCH],
		description: '周志明老师的架构书籍,讨论如何构建一套可靠的大型分布式系统。',
		rate: 3
	}, {
		name: '《分布式系统模式》中文版',
		icon: 'https://github.githubassets.com/favicons/favicon.svg',
		href: 'https://pds.gin.sh/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '《分布式系统模式》是 Unmesh Joshi 编写的一系列关于分布式系统实现的文章。这个系列的文章采用模式的格式,介绍了像 Kafka、Zookeeper 这种分布式系统在实现过程采用的通用模式,是学习分布式系统实现的基础。',
		rate: 3
	}, {
		name: '《设计数据密集型应用》中文版',
		icon: 'https://github.githubassets.com/favicons/favicon.svg',
		href: 'https://vonng.github.io/ddia/#/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '《Designing Data-Intensive Application》DDIA 中文翻译。',
		rate: 3
	}, {
		name: '程序员盒子',
		icon: '/img/website/codeUtil.ico',
		href: 'https://www.coderutil.com/',
		isOpenSource: false,
		tags: [COM.COM_TOOL_SOURCE],
		description: '程序员一站式编程导航,专注于程序员学习编程提效,官网',
		rate: 1
	}, {
		name: '资源下载站点',
		icon: 'https://www.cxyhub.com/wp-content/uploads/2021/06/164644eb9febdzbf33d9jv.png-1.icon_-1.ico',
		href: 'https://www.cxyhub.com/all/',
		isOpenSource: false,
		tags: [COM.COM_TOOL_SOURCE],
		description: '这应该是东半球最好用的资源下载网站...',
		rate: 1
	}, {
		name: 'ProcessOn',
		icon: 'https://processon.com/favicon.ico',
		href: 'https://processon.com/',
		isOpenSource: false,
		tags: [COM.COM_TOOL_SOURCE],
		description: '免费在线流程图思维导图',
		rate: 2
	}, {
		name: 'NGINX 配置',
		icon: '/img/website/nginxConfig.png',
		href: 'https://www.digitalocean.com/community/tools/nginx',
		isOpenSource: false,
		tags: [COM.COM_TOOL_SOURCE],
		description: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
		rate: 2
	}, {
		name: 'Hubot',
		icon: 'https://hubot.github.com/assets/images/layout/hubot-avatar@2x.png',
		href: 'https://hubot.github.com/docs',
		isOpenSource: true,
		tags: [COM.COM_TOOL_SOURCE],
		description: '开源聊天机器人,可以用来做一些自动化任务,如部署网站,翻译语言等等',
		rate: 1
	}, {
		name: 'ZFile',
		icon: 'https://docs.zfile.vip/img/favicon.ico',
		href: 'https://docs.zfile.vip/',
		isOpenSource: true,
		tags: [COM.COM_TOOL_SOURCE],
		description: '基于 Java 的在线网盘程序,支持对接 S3、OneDrive、SharePoint、又拍云、本地存储、FTP 等存储源,支持在线浏览图片、播放音视频,文本文件等文件类型。',
		rate: 2
	}, {
		name: 'OpenJDK',
		icon: 'https://avatars.githubusercontent.com/u/41768318',
		href: 'https://openjdk.org/projects/',
		isOpenSource: false,
		tags: [COM.COM_DEV_LAN],
		description: 'Open Jdk项目',
		rate: 2,
		lang: ['Java']
	}, {
		name: 'Quarkus',
		icon: 'https://avatars.githubusercontent.com/u/47638783',
		href: 'https://cn.quarkus.io/guides/',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR, BE_MAP.BE_CLOUD_NATIVE],
		description: 'Quarkus 为 GraalVM 和 HotSpot 量身定制用程序...',
		rate: 3,
		lang: ['Java']
	}, {
		name: 'Spring',
		icon: '/img/website/Spring.png',
		href: 'https://spring.io/',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR],
		description: 'Spring',
		rate: 3,
		lang: ['Java']
	}, {
		name: 'Mybatis',
		icon: '/img/website/mybatis.png',
		href: 'https://mybatis.org/mybatis-3/zh/index.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR],
		description: 'Mybatis是一个很好用的ORM框架',
		rate: 3,
		lang: ['Java']
	}, {
		name: 'Redis',
		icon: '/img/website/redis.png',
		href: 'https://redis.io/documentation',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE],
		description: 'Redis',
		rate: 3
	}, {
		name: 'Docker',
		icon: '/img/website/docker.png',
		href: 'https://docs.docker.com/get-started/',
		isOpenSource: true,
		tags: [BE_MAP.BE_CLOUD_NATIVE, BE_MAP.BE_CONTAINER],
		description: 'Docker',
		rate: 3
	}, {
		name: 'Kubernetes',
		icon: '/img/website/kubernetes.png',
		href: 'https://kubernetes.io/zh/docs/home/',
		isOpenSource: true,
		tags: [BE_MAP.BE_CLOUD_NATIVE, BE_MAP.BE_CONTAINER],
		description: 'Kubernetes',
		rate: 3
	}, {
		name: 'Nginx',
		icon: '/img/website/nginx.png',
		href: 'http://nginx.org/en/docs/',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE],
		description: 'Nginx',
		rate: 3
	}, {
		name: 'Kafka',
		icon: '/img/website/kafka.png',
		href: 'https://kafka.apache.org/documentation/#gettingStarted',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE],
		description: 'Kafka',
		rate: 3
	}, {
		name: 'KnowStreaming',
		icon: 'https://knowstreaming.com/wp-content/uploads/2022/08/cropped-KnowStreamingicon2-32x32.png',
		href: 'https://knowstreaming.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_PLATFORM],
		description: 'Know Streaming脱胎于互联网公司内部多年的Kafka运营实践经验,是面向Kafka用户、Kafka运维人员打造的共享多租户Kafka管控平台',
		rate: 2
	}, {
		name: 'RabbitMq',
		icon: '/img/website/rabbitmq.png',
		href: 'https://www.rabbitmq.com/documentation.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE],
		description: 'RabbitMq',
		rate: 3
	}, {
		name: 'Pulsar',
		icon: '/img/website/plusar.svg',
		href: 'https://pulsar.apache.org/docs/zh-CN/standalone/',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE],
		description: 'Pulsar',
		rate: 3
	}, {
		name: 'ElasticSearch',
		icon: '/img/website/elastic.svg',
		href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE],
		description: 'ElasticSearch',
		rate: 3
	}, {
		name: 'NPM',
		icon: '/img/website/npm.png',
		href: 'https://www.npmjs.com',
		isOpenSource: true,
		tags: [FE_MAP.FE_BUILD],
		description: 'NPM是世界上最大的前端包管理器',
		rate: 2,
		lang: ['JavaScript','TypeScript']
	}, {
		name: 'Yarn',
		icon: '/img/website/yarn.png',
		href: 'https://www.yarnpkg.cn',
		isOpenSource: true,
		tags: [FE_MAP.FE_BUILD],
		description: 'Yarn 是一个软件包管理器,还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos）,无论是业余爱好者还是企业用户,Yarn 都能满足你的需求。',
		rate: 2,
		lang: ['JavaScript','TypeScript']
	}, {
		name: 'Pnpm',
		icon: '/img/website/pnpm.svg',
		href: 'https://pnpm.io',
		isOpenSource: true,
		tags: [FE_MAP.FE_BUILD],
		description: '速度快、节省磁盘空间的软件包管理',
		rate: 2,
		lang: ['JavaScript','TypeScript']
	}, {
		name: 'Webpack',
		icon: '/img/website/webpack.png',
		href: 'https://www.webpackjs.com',
		isOpenSource: true,
		tags: [FE_MAP.FE_BUILD],
		description: 'webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)',
		rate: 2,
		lang: ['JavaScript','TypeScript']
	}, {
		name: 'Vite',
		icon: '/img/website/vite.svg',
		href: 'https://cn.vitejs.dev',
		isOpenSource: true,
		tags: [FE_MAP.FE_BUILD],
		description: '下一代的前端工具链,为开发提供极速响应',
		rate: 2,
		lang: ['JavaScript','TypeScript']
	}, {
		name: 'Maven',
		icon: '/img/website/Maven.png',
		href: 'https://maven.apache.org/guides/getting-started/index.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_BUILD],
		description: 'Maven',
		rate: 3,
		lang: ['Java']
	}, {
		name: 'Gradle',
		icon: '/img/website/gradle.png',
		href: 'https://docs.gradle.org/current/userguide/userguide.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_BUILD],
		description: 'Gradle',
		rate: 3,
		lang: ['Java']
	}, {
		name: 'TypeScript',
		icon: '/img/website/ts.svg',
		href: 'http://ts.xcatliu.com/',
		isOpenSource: true,
		tags: [FE_MAP.FE_BLOG],
		description: 'TypeScript',
		rate: 2,
		lang: ['TypeScript']
	}, {
		name: 'MDN',
		icon: '/img/website/mdn.svg',
		href: 'https://developer.mozilla.org/zh-CN/docs/Web',
		isOpenSource: true,
		tags: [FE_MAP.FE_BLOG],
		description: 'MDN',
		rate: 3,
		lang: ['JavaScript']
	}, {
		name: 'Fresh',
		icon: 'https://fresh.deno.dev/logo.svg',
		href: 'https://fresh.deno.dev/',
		isOpenSource: true,
		tags: [FE_MAP.FE_SERVER],
		description: '面向 JavaScript 和 TypeScript 开发者的全栈现代 Web 框架, 可以轻松创建高质量、高性能、稳定性好,以及支持定制的 Web 应用。',
		rate: 2,
		lang: ['Deno']
	}, {
		name: 'PolarDB',
		icon: 'https://www.polardbx.com/favicon.svg',
		href: 'https://www.polardbx.com/document/',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE,BE_MAP.BE_CLOUD_NATIVE],
		description: 'PolarDB-X 是一款面向超高并发、海量存储、复杂查询场景设计的云原生分布式数据库系统。',
		rate: 3
	}, {
		name: 'Vue',
		icon: '/img/website/vue.svg',
		href: 'https://cn.vuejs.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_WEB_FRAMEWORK],
		description: 'Vue',
		rate: 3,
		lang: ['Vue']
	}, {
		name: 'Element-Plus',
		icon: '/img/website/elementPlus.png',
		href: 'https://element-plus.gitee.io/zh-CN/',
		isOpenSource: true,
		tags: [FE_MAP.FE_UI_LIB],
		description: 'Element-Plus',
		rate: 3,
		lang: ['Vue']
	}, {
		name: 'Nuxt.js',
		icon: '/img/website/nuxt.svg',
		href: 'https://nuxtjs.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_SERVER],
		description: '使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序',
		rate: 2,
		lang: ['Vue']
	}, {
		name: 'Pinia',
		icon: '/img/website/pinia.svg',
		href: 'https://pinia.vuejs.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_WEB_EXT],
		description: 'Vue下一代的状态管理拓展',
		rate: 3,
		lang: ['Vue']
	}, {
		name: 'VueUse',
		icon: '/img/website/vueUse.svg',
		href: 'https://vueuse.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_WEB_EXT],
		description: '基本 Vue 合成实用程序的集合',
		rate: 3,
		lang: ['Vue']
	}, {
		name: 'React',
		icon: '/img/website/React.svg',
		href: 'https://react.docschina.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_WEB_FRAMEWORK],
		description: 'React',
		rate: 3,
		lang: ['React']
	}, {
		name: 'Ant Design',
		icon: '/img/website/AntDesign.svg',
		href: 'https://ant.design/index-cn',
		isOpenSource: true,
		tags: [FE_MAP.FE_UI_LIB],
		description: 'Ant Design',
		rate: 3,
		lang: ['React']
	}, {
		name: 'Next.js',
		icon: '/img/website/next.ico',
		href: 'https://nextjs.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_SERVER],
		description: 'Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。',
		rate: 3,
		lang: ['React']
	}, {
		name: 'UmiJS',
		icon: '/img/website/umi.png',
		href: 'https://umijs.org',
		isOpenSource: true,
		tags: [FE_MAP.FE_SERVER],
		description: '用 Umi 构建你的下一个应用,带给你简单而愉悦的 Web 开发体验',
		rate: 3,
		lang: ['React']
	}, {
		name: 'ahooks',
		icon: '/img/website/ahooks.svg',
		href: 'https://ahooks.js.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_WEB_EXT],
		description: '一个高质量和可靠的 React Hooks 库',
		rate: 3,
		lang: ['React']
	}, {
		name: 'react-spring',
		icon: '/img/website/react-spring.ico',
		href: 'https://react-spring.dev',
		isOpenSource: true,
		tags: [FE_MAP.FE_COMIC_LIB],
		description: '通过简单的动画基元使您的组件栩栩如生',
		rate: 3,
		lang: ['React']
	}, {
		name: 'Cloudscape',
		icon: 'https://avatars.githubusercontent.com/u/107056549?s=200&v=4',
		href: 'https://cloudscape.design/get-started/guides/introduction/',
		isOpenSource: true,
		tags: [FE_MAP.FE_UI_LIB],
		description: '亚马逊开源的React UI 库',
		rate: 2,
		lang: ['React']
	}, {
		name: 'Electron',
		icon: '/img/website/electron.svg',
		href: 'https://www.electronjs.org/',
		isOpenSource: true,
		tags: [FE_MAP.FE_DESK_APP],
		description: 'Electron',
		rate: 3,
		lang: ['Node']
	}, {
		name: 'Node.js',
		icon: '/img/website/node.svg',
		href: 'http://nodejs.cn/api/',
		isOpenSource: true,
		tags: [FE_MAP.FE_RUNTIME],
		description: 'Node.js',
		rate: 3,
		lang: ['Node']
	}, {
		name: 'Deno',
		icon: '/img/website/deno.svg',
		href: 'https://deno.land/',
		isOpenSource: true,
		tags: [FE_MAP.FE_RUNTIME],
		description: '一个现代的JavaScript和TypeScript运行时。',
		rate: 2,
		lang: ['Deno']
	}, {
		name: 'Sequelize',
		icon: '/img/website/sequelize.png',
		href: 'https://www.sequelize.com.cn/core-concepts/getting-started',
		isOpenSource: true,
		tags: [FE_MAP.FE_TOOL_LIB],
		description: 'Sequelize 是一个基于 promise 的 Node.js的 ORM框架',
		rate: 3,
		lang: ['Node']
	},{
		name: 'Axios',
		icon: '/img/website/axios.png',
		href: 'https://axios-http.cn/',
		isOpenSource: true,
		tags: [FE_MAP.FE_TOOL_LIB],
		description: 'Axios 是一个基于 promise 的网络请求库',
		rate: 3,
		lang: ['JavaScript']
	}, {
		name: 'Express',
		icon: '/img/website/express.png',
		href: 'https://www.expressjs.com.cn/',
		isOpenSource: true,
		tags: [FE_MAP.FE_SERVER],
		description: '基于 Node.js 平台,快速、开放、极简的 Web 开发框架',
		rate: 3,
		lang: ['Node']
	}, {
		name: 'Socket.io',
		icon: '/img/website/socketIo.png',
		href: 'https://socketio.bootcss.com',
		isOpenSource: true,
		tags: [FE_MAP.FE_TOOL_LIB],
		description: 'Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库。',
		rate: 3,
		lang: ['JavaScript']
	}, {
		name: 'Lodash',
		icon: '/img/website/lodash.png',
		href: 'https://lodash.net',
		isOpenSource: true,
		tags: [FE_MAP.FE_TOOL_LIB],
		description: '一个 JavaScript 的实用工具库, 表现一致性, 模块化, 高性能, 以及可扩展。',
		rate: 3,
		lang: ['JavaScript']
	}, {
		name: 'Docusaurus',
		icon: '/img/website/docusaurus.png',
		href: 'https://docusaurus.io/zh-CN',
		isOpenSource: true,
		tags: [FE_MAP.FE_SITE_GEN],
		description: 'Docusaurus',
		rate: 3,
		lang: ['React']
	}, {
		name: 'Vuepress',
		icon: '/img/website/vuepress.png',
		href: 'https://vuepress.vuejs.org/zh/',
		isOpenSource: true,
		tags: [FE_MAP.FE_SITE_GEN],
		description: 'Vuepress',
		rate: 3,
		lang: ['Vue']
	}, {
		name: 'CSS常用样式',
		icon: '/img/website/cssTrick.png',
		href: 'https://qishaoxuan.github.io/css_tricks/',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS],
		description: 'CSS常用样式',
		rate: 2,
	}, {
		name: 'w3schools Css 教程',
		icon: '/img/website/w3c.ico',
		href: 'https://www.w3schools.com/css',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS,FE_MAP.FE_BLOG],
		description: 'w3schools 从基础到高级的CSS教程',
		rate: 2,
	}, {
		name: 'TailwindCSS',
		icon: '/img/website/tailwind.png',
		href: 'https://www.tailwindcss.cn',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS, FE_MAP.FE_UI_LIB],
		description: 'Tailwind CSS 是一个功能类优先的 CSS 框架,它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类,它们能直接在脚本标记语言中组合起来,构建出任何设计',
		rate: 2,
	}, {
		name: 'WindiCSS',
		icon: '/img/website/windi.svg',
		href: 'https://windicss.org',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS, FE_MAP.FE_UI_LIB],
		description: 'Windi CSS 是下一代工具优先的 CSS 框架。',
		rate: 3,
	}, {
		name: 'uiverse',
		icon: '/img/website/uiverse.svg',
		href: 'https://uiverse.io/',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS],
		description: '丰富的 UI 元素助您脱颖而出,开源且免费使用',
		rate: 3,
	}, {
		name: 'iconfont',
		icon: '/img/website/iconfont.svg',
		href: 'https://www.iconfont.cn/',
		isOpenSource: false,
		tags: [FE_MAP.FE_CSS],
		description: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。',
		rate: 2
	}, {
		name: 'Font Awesome',
		icon: '/img/website/fontAw.png',
		href: 'https://fa5.dashgame.com',
		isOpenSource: false,
		tags: [FE_MAP.FE_CSS],
		description: '在您的网站上使用Font Awesome展示矢量图标和社交标志,这可是网络上最流行的图标集和工具包。',
		rate: 2
	},{
		name: 'feathericons',
		icon: '/img/website/feather.ico',
		href: 'https://feathericons.com/',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS],
		description: '简单美丽的开源图标',
		rate: 2
	},{
		name: 'undraw',
		icon: '/img/website/undraw.png',
		href: 'https://undraw.co/',
		isOpenSource: false,
		tags: [FE_MAP.FE_CSS],
		description: '一个不断更新的设计项目与美丽的SVG图像,使用完全免费',
		rate: 2
	}, {
		name: '渐变色网站',
		icon: '/img/website/grad.ico',
		href: 'https://gradihunt.com/',
		isOpenSource: false,
		tags: [FE_MAP.FE_CSS],
		description: '数百万个自动生成的渐变的网站',
		rate: 2
	}, {
		name: 'Google Fonts',
		icon: '/img/website/googleFonts.ico',
		href: 'https://googlefonts.cn/',
		isOpenSource: true,
		tags: [FE_MAP.FE_CSS],
		description: '谷歌字体',
		rate: 2
	}, 	{
		name: 'Day.js',
		icon: 'https://day.js.org/img/logo.png',
		href: 'https://day.js.org/zh-CN/',
		isOpenSource: true,
		tags: [FE_MAP.FE_TOOL_LIB],
		description: 'Day.js 是一个轻量的处理时间和日期的 JavaScript 库,和 Moment.js 的 API 设计保持完全一样',
		rate: 3,
		lang: ['JavaScript']
	}, {
		name: 'DPlayer',
		icon: 'https://dplayer.diygod.dev/logo.png',
		href: 'https://dplayer.diygod.dev/zh/guide.html',
		isOpenSource: true,
		tags: [FE_MAP.FE_TOOL_LIB],
		description: 'DPlayer是一个可爱的HTML5 弹幕视频播放器,可以帮助人们轻松构建视频和弹幕',
		rate: 2,
		lang: ['JavaScript']
	}, {
		name: 'MyBatis-Plus',
		icon: 'https://baomidou.com/img/logo.svg',
		href: 'https://baomidou.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR, BE_MAP.BE_TOOL_LIB],
		description: 'MyBatis-Plus是一个 MyBatis的增强工具,在 MyBatis 的基础上只做增强不做改变,为简化开发、提高效率而生。',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'Hutool',
		icon: 'https://www.hutool.cn/favicon.ico',
		href: 'https://www.hutool.cn/docs/#/',
		isOpenSource: true,
		tags: [BE_MAP.BE_TOOL_LIB],
		description: 'Hutool是一个小而全的Java工具类库,通过静态方法封装,降低相关API的学习成本,提高工作效率,使Java拥有函数式语言般的优雅,让Java语言也可以“甜甜的”',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'Arthas',
		icon: 'https://arthas.aliyun.com/images/favicon.ico',
		href: 'https://arthas.aliyun.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_TOOL_LIB],
		description: '一款线上监控诊断产品,通过全局视角实时查看应用 load、内存、gc、线程的状态信息,并能在不修改应用代码的情况下,对业务问题进行诊断,包括查看方法调用的出入参、异常,监测方法执行耗时,类加载信息等,大大提升线上问题排查效率',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'MyCat',
		icon: 'https://gw.alipayobjects.com/zos/bmw-prod/735cefc9-f976-4c87-8b48-85f713f5b713.svg',
		href: 'http://www.mycat.org.cn/',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE, BE_MAP.BE_TOOL_LIB],
		description: 'Mycat2是Mycat社区开发的一款分布式关系型数据库(中间件)。它支持分布式SQL查询,兼容MySQL通信协议,以Java生态支持多种后端数据库,通过数据分片提高数据查询处理能力',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'ShardingSphere',
		icon: 'https://shardingsphere.apache.org/document/current/img/favicon.png',
		href: 'https://shardingsphere.apache.org/',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE, BE_MAP.BE_TOOL_LIB],
		description: 'Apache ShardingSphere 是一款分布式的数据库生态系统, 可以将任意数据库转换为分布式数据库,并通过数据分片、弹性伸缩、加密等能力对原有数据库进行增强',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'Shenyu',
		icon: 'https://shenyu.apache.org/zh/img/favicon.svg',
		href: 'https://shenyu.apache.org/zh/',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE, BE_MAP.BE_TOOL_LIB],
		description: 'Java 原生API网关,用于服务代理、协议转换和API治理',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'Canal',
		icon: 'https://github.githubassets.com/favicons/favicon.svg',
		href: 'https://github.com/alibaba/canal/wiki',
		isOpenSource: true,
		tags: [ BE_MAP.BE_TOOL_LIB],
		description: '基于 MySQL 数据库增量日志解析,提供增量数据订阅和消费',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'Seata',
		icon: 'https://seata.io/img/seata_logo_small.jpeg',
		href: 'https://seata.io/zh-cn/index.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_MIDDLEWARE,BE_MAP.BE_TOOL_LIB],
		description: 'Seata 是一款开源的分布式事务解决方案,致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式,为用户打造一站式的分布式解决方案',
		rate: 3,
		lang: ['Java'],
	},{
		name: 'Dubbo',
		icon: 'https://dubbo.apache.org//favicons/apple-touch-icon-180x180.png',
		href: 'https://dubbo.apache.org/zh/',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR,BE_MAP.BE_TOOL_LIB],
		description: 'Apache Dubbo 是一款微服务框架,为大规模微服务实践提供高性能 RPC 通信、流量治理、可观测性等解决方案,涵盖 Java、Golang 等多种语言 SDK 实现。',
		rate: 3,
		lang: ['Java'],
	}, {
		name: 'JDK',
		icon: 'https://github.githubassets.com/favicons/favicon.svg',
		href: 'https://docs.oracle.com/en/java/javase/index.html',
		isOpenSource: true,
		tags: [COM.COM_DEV_LAN],
		description: 'JDK',
		rate: 4,
		lang: ['Java'],
	}, {
		name: '百度前端技术学园',
		icon: 'http://ife.baidu.com/assets/img/ife-logo.png',
		href: 'http://ife.baidu.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG],
		description: '面向所有自驱成长,终身学习,热爱生活的人,打造的Web前端技术学习园地',
		rate: 3
	}, {
		name: 'Source Academy',
		icon: 'https://sourceacademy.org/icons/favicon.ico',
		href: 'https://sourceacademy.org/sicpjs/index',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: 'Source Academy',
		rate: 2
	},{
		name: '现代 JavaScript 教程',
		icon: 'https://zh.javascript.info/img/favicon/apple-touch-icon-precomposed.png',
		href: 'https://zh.javascript.info/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '现代 JavaScript 教程',
		rate: 3
	},{
		name: 'Quickref',
		icon: 'https://quickref.me/images/favicon.png',
		href: 'https://quickref.me/',
		isOpenSource: true,
		tags: [COM.COM_OTHER],
		description: 'Here are some cheatsheets and quick references contributed by open source angels.',
		rate: 2
	}
]



export function getData(query: queryType):{
	tagsList: Tag[]
	sites: WebSite[]
} {
	const result = {
		tagsList:  new Array<Tag>(),
		sites: new Array<WebSite>()
	}
	const set = new Set()
	websiteData.forEach((item) => {
		let flag = false
		item.tags.forEach((tag) => {
			if (tag.type === query) {
				set.add(tag)
				flag = true
			}
		})
		if (flag) { result.sites.push(item) }
	})
	result.tagsList = Array.from(set) as Tag[]
	return result
}