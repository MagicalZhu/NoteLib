

import { type Tag, type WebSite } from './type'



/**
 * 前端站点
 */
const FE_MAP = {
	FE_BLOG: {
		name: '博客教程',
		fontColor: '#39ca30',
		description: '不错的前端学习资源'
	},
	FE_SITE_GEN:{
		name: '静态站点生成器',
		fontColor: '#AAC98E',
		description: '简单快速的构建出个人文档'
	},
	FE_CSS:{
		name: 'CSS',
		fontColor: '#6FDABE',
		description: 'CSS相关的框架与资源'
	},
	FE_TOOL:{
		name: '前端工具库',
		fontColor: '#6FDABE',
		description: '常用的一些前端工具'
	},
	FE_RUNTIME:{
		name: 'JS运行时',
		fontColor: '#6FDABE',
		description: 'JavaScript的运行时环境'
	},
	FE_DESK_APP:{
		name: '桌面应用',
		fontColor: '#6FDABE',
		description: '用JavaScript构建桌面应用'
	},
	FE_UI_LIB:{
		name: 'UI库',
		fontColor: '#6FDABE',
		description: '现代Web站点使用的UI库'
	},
	FE_COMIC_LIB:{
		name: '动画库',
		fontColor: '#6FDABE',
		description: '快速构建动画效果'
	},
	FE_BUILD:{
		name: '构建工具',
		fontColor: '#6FDABE',
		description: '对Web应用进行构建'
	},
	FE_TEST:{
		name: 'Web测试',
		fontColor: '#6FDABE',
		description: '测试Web应用的工具'
	},
	FE_DEV_TOOL:{
		name: '开发工具',
		fontColor: '#6FDABE',
		description: '开发Web应用中的工具插件'
	},
	FE_SERVER:{
		name: '服务端',
		fontColor: '#6FDABE',
		description: 'JavaScript基于服务端的框架工具'
	},
	FE_WEB_FRAMEWORK:{
		name: 'Web框架',
		fontColor: '#6FDABE',
		description: '利用Web框架快速的构建Web应用'
	}
}

/**
 * 后端站点
 */
const BE_MAP= {
	BE_BLOG:{
		name: '博客教程',
		fontColor: '#39ca30',
		description: '不错的后端学习资源'
	},
	BE_BAISC:{
		name: '基础',
		fontColor: '#39ca30',
		description: '一些基础的学习资源'
	},
	BE_ARCH:{
		name: '架构',
		fontColor: '#39ca30',
		description: '关于分布式、微服务架构说明'
	},
	BE_CLOUD_NATIVE:{
		name: '云原生',
		fontColor: '#39ca30',
		description: '关于云原生的说明'
	},
	BE_CONTAINER:{
		name: '容器化',
		fontColor: '#39ca30',
		description: '使用容器化构建系统'
	},
	BE_FRAMEWOKR:{
		name: '后端框架',
		fontColor: '#39ca30',
		description: '开发中常用的框架'
	},
	BE_TOOL_LIB:{
		name: '后端工具包',
		fontColor: '#39ca30',
		description: '开发中常用的工具包'
	},
	BE_MIDDLEWARE:{
		name: '中间件',
		fontColor: '#39ca30',
		description: '开发中常用的中间件'
	},
	BE_PLATFORM:{
		name: '平台',
		fontColor: '#39ca30',
		description: '常见的存储组件'
	},
	BE_BUILD:{
		name: '构建工具',
		fontColor: '#6FDABE',
		description: '对应用进行构建'
	},
}

/**
 * 通用资源
 */
const COM = {
	COM_BOOK:{
		name: '开源书籍',
		fontColor: '#39ca30',
		description: '一些开源的书籍'
	},
	COM_TOOL_SOURCE:{
		name: '工具资源',
		fontColor: '#39ca30',
		description: '一些常用的工具'
	},
	COM_DEV_LAN:{
		name: '开发语言',
		fontColor: '#39ca30',
		description: '最常使用的开发语言'
	},
	COM_OTHER:{
		name: '其他',
		fontColor: '#39ca30',
		description: '其他资源'
	}
}



export const websiteData:WebSite[] = [
	{
		name: 'Java程序员进阶之路',
		icon: 'http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/logo.png',
		href: 'https://tobebetterjavaer.com/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '一份通俗易懂、风趣幽默的Java学习指南，内容涵盖Java基础、Java并发编程、Java虚拟机、Java企业级开发、Java面试等核心知识点',
		rate: 2,
		lang: 'Java',
	},
	{
		name: '虫洞栈',
		icon: 'https://bugstack.cn/favicon.ico',
  	href: 'https://bugstack.cn/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: 'Java 基础、面经手册、Netty4.x、手写Spring、用Java实现JVM、重学Java设计模式、SpringBoot中间件开发、DDD系统架构项目开发、字节码编程...',
		rate: 2,
		lang: 'Java'
	},
	{
		name: 'Java 全栈知识体系',
		icon: 'https://pdai.tech/favicon.ico',
		href: 'https://pdai.tech/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL...',
		rate: 3,
		lang: 'Java'
	}, 
	{
		name: 'JavaGuide',
		icon: 'https://javaguide.cn/logo.svg',
		href: 'https://javaguide.cn/',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识',
		rate: 2,
		lang: 'Java'
	}, {
		name: 'Doocs',
		icon: 'https://avatars.githubusercontent.com/u/43716716?s=200&v=4',
		href: 'https://doocs.github.io/#/README_CN',
		isOpenSource: true,
		tags: [BE_MAP.BE_BLOG, BE_MAP.BE_BAISC],
		description: '专注于分享技术领域相关知识的技术社区',
		rate: 1,
		lang: 'Java'
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
		icon: '"/img/website/nodeTech.jpeg',
		href: 'https://www.nodejs.red/',
		isOpenSource: true,
		tags: [FE_MAP.FE_BLOG],
		description: '是作者五月君从事 Node.js 开发以来的学习历程，希望这些分享能帮助到正在学习、使用 Node.js 的朋友们',
		rate: 1,
		lang: 'Node'
	}, {
		name: 'Road To Coding',
		icon: '/img/website/roadMap.ico',
		href: 'https://r2coding.com/',
		isOpenSource: true,
		tags: [COM.COM_OTHER],
		description: 'Road To Coding，意为「编程自学之路」，是自学编程以来所用资源和分享内容的大聚合',
		rate: 1
	}, {
		name: 'ES6 入门教程',
		icon: '/img/website/es6.png',
		href: 'https://es6.ruanyifeng.com/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '《ECMAScript 6 入门教程》阮一峰老师开源的一本 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
		rate: 3,
		lang: 'JavaScript'
	}, {
		name: '深入理解 TypeScript',
		icon: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
		href: 'https://jkchao.github.io/typescript-book-chinese/',
		isOpenSource: true,
		tags: [COM.COM_BOOK],
		description: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你。',
		rate: 2,
		lang: 'TypeScript'
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
		description: '《分布式系统模式》是 Unmesh Joshi 编写的一系列关于分布式系统实现的文章。这个系列的文章采用模式的格式，介绍了像 Kafka、Zookeeper 这种分布式系统在实现过程采用的通用模式，是学习分布式系统实现的基础。',
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
		description: '程序员一站式编程导航，专注于程序员学习编程提效，官网',
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
		description: '开源聊天机器人，可以用来做一些自动化任务，如部署网站，翻译语言等等',
		rate: 1
	}, {
		name: 'ZFile',
		icon: 'https://docs.zfile.vip/img/favicon.ico',
		href: 'https://docs.zfile.vip/',
		isOpenSource: true,
		tags: [COM.COM_TOOL_SOURCE],
		description: '基于 Java 的在线网盘程序，支持对接 S3、OneDrive、SharePoint、又拍云、本地存储、FTP 等存储源，支持在线浏览图片、播放音视频，文本文件等文件类型。',
		rate: 2
	}, {
		name: 'OpenJDK',
		icon: 'https://avatars.githubusercontent.com/u/41768318',
		href: 'https://openjdk.org/projects/',
		isOpenSource: false,
		tags: [COM.COM_DEV_LAN],
		description: 'Open Jdk项目',
		rate: 2,
		lang: 'Java'
	}, {
		name: 'Quarkus',
		icon: 'https://avatars.githubusercontent.com/u/47638783',
		href: 'https://cn.quarkus.io/guides/',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR, BE_MAP.BE_CLOUD_NATIVE],
		description: 'Quarkus 为 GraalVM 和 HotSpot 量身定制用程序...',
		rate: 3,
		lang: 'Java'
	}, {
		name: 'Spring',
		icon: '/img/website/Spring.png',
		href: 'https://spring.io/',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR],
		description: 'Spring',
		rate: 3,
		lang: 'Java'
	}, {
		name: 'Mybatis',
		icon: '/img/website/mybatis.png',
		href: 'https://mybatis.org/mybatis-3/zh/index.html',
		isOpenSource: true,
		tags: [BE_MAP.BE_FRAMEWOKR],
		description: 'Mybatis是一个很好用的ORM框架',
		rate: 3,
		lang: 'Java'
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
		description: 'Know Streaming脱胎于互联网公司内部多年的Kafka运营实践经验，是面向Kafka用户、Kafka运维人员打造的共享多租户Kafka管控平台',
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
	}
]

