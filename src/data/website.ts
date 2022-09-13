export interface Website {
  name: string
  logo: string
  desc?: string
  href: string
  tags?: string[]
}

export interface WebsiteCategory {
  name: string
  websites: Website[]
}


export const websiteData: WebsiteCategory[] = [
  {
    "name": "博客站点",
    "websites": [
      {
        "name": "Java程序员进阶之路",
        "desc": "一份通俗易懂、风趣幽默的Java学习指南，内容涵盖Java基础、Java并发编程、Java虚拟机、Java企业级开发、Java面试等核心知识点",
        "logo": "http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/logo.png",
        "href": "https://tobebetterjavaer.com/",
        "tags": [""]
      },
      {
        "name": "虫洞栈",
        "desc": "包含: Java 基础，面经手册，Netty4.x，手写Spring，用Java实现JVM，重学Java设计模式，SpringBoot中间件开发，IDEA插件开发，DDD系统架构项目开发，字节码编程...",
        "logo": "https://bugstack.cn/favicon.ico",
        "href": "https://bugstack.cn/",
        "tags": [""]
      },
      {
        "name": "Java 全栈知识体系",
        "desc": "包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL...",
        "logo": "https://pdai.tech/favicon.ico",
        "href": "https://pdai.tech/",
        "tags": [""]
      },
      {
        "name": "JavaGuide",
        "desc": "「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识",
        "logo": "	https://javaguide.cn/logo.svg",
        "href": "https://javaguide.cn/",
        "tags": [""]
      },
      {
        "name": "MartinFowler",
        "desc": "MartinFowler的个人网站,就是那个提出微服务架构,敏捷开发的...",
        "logo": "https://martinfowler.com/logo-sq.png",
        "href": "https://martinfowler.com/",
        "tags": [""]
      },
      {
        "name": "LABULADONG 的算法网站",
        "desc": "一个不错的算法与数据结构的学习网站",
        "logo": "https://labuladong.github.io/algo/images/avatar.png",
        "href": "https://labuladong.github.io/algo/",
        "tags": [""]
      },
      {
        "name": "设计模式",
        "desc": "一个不错的算法与数据结构的学习网站",
        "logo": "https://refactoringguru.cn/favicon.png",
        "href": "https://refactoringguru.cn/design-patterns",
        "tags": [""]
      },
      {
        "name": "Node.js技术栈",
        "desc": "“Nodejs技术栈” 是作者 @五月君 从事 Node.js 开发以来的学习历程，希望这些分享能帮助到正在学习、使用 Node.js 的朋友们",
        "logo": "/img/website/nodeTech.jpeg",
        "href": "https://www.nodejs.red/",
        "tags": [""]
      },
      {
        "name": "Road To Coding",
        "desc": "Road To Coding，意为「编程自学之路」，是自学编程以来所用资源和分享内容的大聚合",
        "logo": "/img/website/roadMap.ico",
        "href": "https://r2coding.com/",
        "tags": [""]
      },
      {
        "name": "ES6 入门教程",
        "desc": "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。",
        "logo": "/img/website/es6.png",
        "href": "https://es6.ruanyifeng.com/",
        "tags": [""]
      },
      {
        "name": "深入理解 TypeScript",
        "desc": "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你。",
        "logo": "https://jkchao.github.io//typescript-book-chinese/logo.png",
        "href": "https://jkchao.github.io/typescript-book-chinese/",
        "tags": [""]
      },
      {
        "name": "解道",
        "desc": "解道jdon - 传道解惑的架构师博客",
        "logo": "/img/website/jdon.png",
        "href": "https://www.jdon.com/",
        "tags": [""]
      }
    ]
  },
  {
    "name": "开源书籍推荐",
    "websites": [
      {
        "name": "凤凰架构",
        "desc": "周志明大佬的架构书籍,讨论如何构建一套可靠的大型分布式系统。",
        "logo": "https://icyfenix.cn/images/logo-color.png",
        "href": "https://icyfenix.cn/",
        "tags": [""]
      },
     {
        "name": "《分布式系统模式》中文版",
        "desc": "《分布式系统模式》是 Unmesh Joshi 编写的一系列关于分布式系统实现的文章。这个系列的文章采用模式的格式，介绍了像 Kafka、Zookeeper 这种分布式系统在实现过程采用的通用模式，是学习分布式系统实现的基础。",
        "logo": "https://github.githubassets.com/favicons/favicon.svg",
        "href": "https://github.com/fenixsoft/awesome-fenix",
        "tags": [""]
      },
       {
        "name": "《设计数据密集型应用》中文版",
        "desc": "《Designing Data-Intensive Application》DDIA 中文翻译。",
        "logo": "https://github.githubassets.com/favicons/favicon.svg",
        "href": "https://vonng.github.io/ddia/#/",
        "tags": [""]
      }
    ]
  },
  {
    "name": "工具",
    "websites": [
      {
        "name": "程序员盒子",
        "desc": "程序员一站式编程导航，专注于程序员学习编程提效，官网",
        "logo": "/img/website/codeUtil.ico",
        "href": "https://www.coderutil.com/",
        "tags": [""]
      },
      {
        "name": "资源下载站点",
        "desc": "这应该是东半球最好用的资源下载网站...",
        "logo": "https://www.cxyhub.com/wp-content/uploads/2021/06/164644eb9febdzbf33d9jv.png-1.icon_-1.ico",
        "href": "https://www.cxyhub.com/all/",
        "tags": [""]
      },
      {
        "name": "ProcessOn",
        "desc": "免费在线流程图思维导图",
        "logo": "https://processon.com/favicon.ico",
        "href": "https://processon.com/",
        "tags": []
      },
      {
        "name": "NGINX 配置",
        "desc": "配置高性能、安全、稳定的NGINX服务器的最简单方法",
        "logo": "/img/website/nginxConfig.png",
        "href": "https://www.digitalocean.com/community/tools/nginx",
        "tags": []
      },
      {
        "name": "Hubot",
        "desc": "开源聊天机器人，可以用来做一些自动化任务，如部署网站，翻译语言等等",
        "logo": "https://hubot.github.com/assets/images/layout/hubot-avatar@2x.png",
        "href": "https://hubot.github.com/docs/",
        "tags": []
      }
    ]
  },
  {
    "name": "后端技术",
    "websites": [
      {
        "name": "OpenJDK",
        "desc": "OpenJDK",
        "logo": "https://avatars.githubusercontent.com/u/41768318",
        "href": "https://openjdk.org/projects/",
        "tags": [""]
      },
      {
        "name": "Quarkus",
        "desc": "Quarkus 为 GraalVM 和 HotSpot 量身定制用程序...",
        "logo": "https://avatars.githubusercontent.com/u/47638783",
        "href": "https://cn.quarkus.io/guides/",
        "tags": [""]
      },
      {
        "name": "Spring",
        "desc": "Spring",
        "logo": "/img/website/Spring.png",
        "href": "https://spring.io/",
        "tags": [""]
      },
      {
        "name": "Mybatis",
        "desc": "Mybatis",
        "logo": "/img/website/mybatis.png",
        "href": "https://mybatis.org/mybatis-3/zh/index.html",
        "tags": [""]
      },
      {
        "name": "Redis",
        "desc": "Redis",
        "logo": "/img/website/redis.png",
        "href": "https://redis.io/documentation",
        "tags": [""]
      },
      {
        "name": "Docker",
        "desc": "Docker",
        "logo": "/img/website/docker.png",
        "href": "https://docs.docker.com/get-started/",
        "tags": [""]
      },
      {
        "name": "Kubernetes",
        "desc": "Kubernetes",
        "logo": "/img/website/kubernetes.png",
        "href": "https://kubernetes.io/zh/docs/home/",
        "tags": [""]
      },
      {
        "name": "Nginx",
        "desc": "Nginx",
        "logo": "/img/website/nginx.png",
        "href": "http://nginx.org/en/docs/",
        "tags": [""]
      },
      {
        "name": "Kafka",
        "desc": "Kafka",
        "logo": "/img/website/kafka.png",
        "href": "https://kafka.apache.org/documentation/#gettingStarted",
        "tags": [""]
      },
      {
        "name": "KnowStreaming",
        "desc": "Know Streaming脱胎于互联网公司内部多年的Kafka运营实践经验，是面向Kafka用户、Kafka运维人员打造的共享多租户Kafka管控平台",
        "logo": "https://knowstreaming.com/wp-content/uploads/2022/08/cropped-KnowStreamingicon2-32x32.png",
        "href": "https://knowstreaming.com/",
        "tags": [""]
      },
      {
        "name": "RabbitMq",
        "desc": "RabbitMq",
        "logo": "/img/website/rabbitmq.png",
        "href": "https://www.rabbitmq.com/documentation.html",
        "tags": [""]
      },
      {
        "name": "Pulsar",
        "desc": "Pulsar",
        "logo": "/img/website/plusar.svg",
        "href": "https://pulsar.apache.org/docs/zh-CN/standalone/",
        "tags": [""]
      },
      {
        "name": "ElasticSearch",
        "desc": "ElasticSearch",
        "logo": "/img/website/elastic.svg",
        "href": "https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html",
        "tags": [""]
      }
    ]
  },
  
  {
    "name": "包管理",
    "websites": [
      {
        "name": "NPM",
        "desc": "NPM是世界上最大的包管理器",
        "logo": "/img/website/npm.png",
        "href": "https://www.npmjs.com",
        "tags": [""]
      },
      {
        "name": "Yarn",
        "desc": "Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求。",
        "logo": "/img/website/yarn.png",
        "href": "https://www.yarnpkg.cn",
        "tags": [""]
      },
      {
        "name": "Pnpm",
        "desc": "速度快、节省磁盘空间的软件包管理器",
        "logo": "/img/website/pnpm.svg",
        "href": "https://pnpm.io",
        "tags": [""]
      },
      {
        "name": "Webpack",
        "desc": "webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。",
        "logo": "/img/website/webpack.png",
        "href": "https://www.webpackjs.com",
        "tags": [""]
      },
      {
        "name": "Vite",
        "desc": "下一代的前端工具链，为开发提供极速响应",
        "logo": "/img/website/vite.svg",
        "href": "https://cn.vitejs.dev",
        "tags": [""]
      },
      {
        "name": "Maven",
        "desc": "Maven",
        "logo": "/img/website/Maven.png",
        "href": "https://maven.apache.org/guides/getting-started/index.html",
        "tags": [""]
      },
      {
        "name": "Gradle",
        "desc": "Gradle",
        "logo": "/img/website/gradle.png",
        "href": "https://docs.gradle.org/current/userguide/userguide.html",
        "tags": [""]
      }
    ]
  },
  {
    "name": "前端基础技术",
    "websites": [
      {
        "name": "TypeScript",
        "desc": "TypeScript",
        "logo": "/img/website/ts.svg",
        "href": "http://ts.xcatliu.com/",
        "tags": [""]
      },
      {
        "name": "MDN",
        "desc": "MDN",
        "logo": "/img/website/mdn.svg",
        "href": "https://developer.mozilla.org/zh-CN/docs/Web",
        "tags": [""]
      }
    ]
  },
  {
    "name": "全栈开发技术",
     "websites": [
        {
          "name": "Fresh",
          "desc": "面向 JavaScript 和 TypeScript 开发者的全栈现代 Web 框架, 可以轻松创建高质量、高性能、稳定性好，以及支持定制的 Web 应用。",
          "logo": "https://fresh.deno.dev/logo.svg",
          "href": "https://fresh.deno.dev/",
          "tags": [""]
        },
        {
          "name": "PolarDB",
          "desc": "PolarDB-X 是一款面向超高并发、海量存储、复杂查询场景设计的云原生分布式数据库系统。",
          "logo": "https://www.polardbx.com/favicon.svg",
          "href": "https://www.polardbx.com/document/",
          "tags": [""]
        }
     ]
  },
    {
    "name": "Vue",
    "websites": [
      {
        "name": "Vue",
        "desc": "Vue",
        "logo": "/img/website/vue.svg",
        "href": "https://staging-cn.vuejs.org/",
        "tags": [""]
      },
      {
        "name": "Element-Plus",
        "desc": "Element-Plus",
        "logo": "/img/website/elementPlus.png",
        "href": "https://element-plus.gitee.io/zh-CN/",
        "tags": [""]
      },
      {
        "name": "Nuxt.js",
        "desc": "使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。",
        "logo": "/img/website/nuxt.svg",
        "href": "https://nuxtjs.org/",
        "tags": ["前端", "Vue", "文档", "框架"]
      },
      {
        "name": "Pinia",
        "desc": "您将会喜欢使用的 Vue 状态管理",
        "logo": "/img/website/pinia.svg",
        "href": "https://pinia.vuejs.org/",
        "tags": [""]
      },
      {
        "name": "vueUse",
        "desc": "基本 Vue 合成实用程序的集合",
        "logo": "/img/website/vueUse.svg",
        "href": "https://vueuse.org/",
        "tags": [""]
      }
    ]
  },
  {
    "name": "React",
    "websites": [
      {
        "name": "React",
        "desc": "React",
        "logo": "/img/website/React.svg",
        "href": "https://react.docschina.org/",
        "tags": [""]
      },
      {
        "name": "Ant Design",
        "desc": "Ant Design",
        "logo": "/img/website/AntDesign.svg",
        "href": "https://ant.design/index-cn",
        "tags": [""]
      },
      {
        "name": "Next.js",
        "desc": "Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。",
        "logo": "/img/website/next.ico",
        "href": "https://nextjs.org/",
        "tags": [""]
      },
      {
        "name": "UmiJS",
        "desc": "用 Umi 构建你的下一个应用，带给你简单而愉悦的 Web 开发体验",
        "logo": "/img/website/umi.png",
        "href": "https://umijs.org",
        "tags": [""]
      },
      {
        "name": "ahooks",
        "desc": "一个高质量和可靠的 React Hooks 库",
        "logo": "/img/website/ahooks.svg",
        "href": "https://ahooks.js.org/",
        "tags": [""]
      },
      {
        "name": "react-spring",
        "desc": "通过简单的动画基元使您的组件栩栩如生",
        "logo": "/img/website/react-spring.ico",
        "href": "https://react-spring.dev",
        "tags": [""]
      },
      {
        "name": "Cloudscape",
        "desc": "通过简单的动画基元使您的组件栩栩如生",
        "logo": "https://avatars.githubusercontent.com/u/107056549?s=200&v=4",
        "href": "https://cloudscape.design/get-started/guides/introduction/",
        "tags": [""]
      }
    ]
  },
  {
    "name": "Node.js",
    "websites": [
      {
        "name": "Electron",
        "desc": "Electron",
        "logo": "/img/website/electron.svg",
        "href": "https://www.electronjs.org/",
        "tags": [""]
      },
      {
        "name": "Node.js",
        "desc": "Node.js",
        "logo": "/img/website/node.svg",
        "href": "http://nodejs.cn/api/",
        "tags": [""]
      },
      {
        "name": "Deno",
        "desc": "一个现代的JavaScript和TypeScript运行时。",
        "logo": "/img/website/deno.svg",
        "href": "https://deno.land/",
        "tags": []
      },
      {
        "name": "Sequelize",
        "desc": "Sequelize 是一个基于 promise 的 Node.js ORM",
        "logo": "/img/website/sequelize.png",
        "href": "https://www.sequelize.com.cn/core-concepts/getting-started",
        "tags": [""]
      },
      {
        "name": "Axios",
        "desc": "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
        "logo": "/img/website/axios.png",
        "href": "https://axios-http.cn/",
        "tags": [""]
      },
      {
        "name": "Expressjs",
        "desc": "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        "logo": "/img/website/express.png",
        "href": "https://www.expressjs.com.cn/",
        "tags": [""]
      },
      {
        "name": "Socket.io",
        "desc": "Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库。",
        "logo": "/img/website/socketIo.png",
        "href": "https://socketio.bootcss.com",
        "tags": [""]
      },
      {
        "name": "Lodash",
        "desc": "一个 JavaScript 的实用工具库, 表现一致性, 模块化, 高性能, 以及可扩展。",
        "logo": "/img/website/lodash.png",
        "href": "https://lodash.net",
        "tags": [""]
      },
      {
        "name": "WebAssembly",
        "desc": "wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新格式",
        "logo": "/img/website/webassembly.png",
        "href": "https://www.wasm.com.cn",
        "tags": [""]
      }
    ]
  },
  {
    "name": "CSS",
    "websites": [
      {
        "name": "CSS常用样式",
        "desc": "CSS常用样式",
        "logo": "/img/website/cssTrick.png",
        "href": "https://qishaoxuan.github.io/css_tricks/",
        "tags": [""]
      },
      {
        "name": "w3schools Css 教程",
        "desc": "w3schools 从基础到高级的CSS教程",
        "logo": "/img/website/w3c.ico",
        "href": "https://www.w3schools.com/css",
        "tags": [""]
      },
      {
        "name": "TailwindCSS",
        "desc": "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计",
        "logo": "/img/website/tailwind.png",
        "href": "https://www.tailwindcss.cn",
        "tags": [""]
      },
      {
        "name": "WindiCSS",
        "desc": "Windi CSS 是下一代工具优先的 CSS 框架。",
        "logo": "/img/website/windi.svg",
        "href": "https://windicss.org",
        "tags": [""]
      },
      {
        "name": "uiverse.io",
        "desc": "丰富的 UI 元素助您脱颖而出，开源且免费使用",
        "logo": "/img/website/uiverse.svg",
        "href": "https://uiverse.io/",
        "tags": [""]
      }
    ]
  },
  {
    "name": "设计资源",
    "websites": [
      {
        "name": "iconfont",
        "desc": "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。",
        "logo": "/img/website/iconfont.svg",
        "href": "https://www.iconfont.cn/",
        "tags": [""]
      },
      {
        "name": "Font Awesome",
        "desc": "在您的网站上使用Font Awesome展示矢量图标和社交标志，这可是网络上最流行的图标集和工具包。",
        "logo": "/img/website/fontAw.png",
        "href": "https://fa5.dashgame.com",
        "tags": [""]
      },
      {
        "name": "feathericons",
        "desc": "简单美丽的开源图标",
        "logo": "/img/website/feather.ico",
        "href": "https://feathericons.com/",
        "tags": [""]
      },
      {
        "name": "undraw",
        "desc": "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        "logo": "/img/website/undraw.png",
        "href": "https://undraw.co/",
        "tags": [""]
      },
      {
        "name": "渐变色网站",
        "desc": "数百万个自动生成的渐变的网站",
        "logo": "/img/website/grad.ico",
        "href": "https://gradihunt.com/",
        "tags": [""]
      },
      {
        "name": "谷歌字体",
        "desc": "一个生成渐变色背景的网站",
        "logo": "/img/website/googleFonts.ico",
        "href": "https://googlefonts.cn/",
        "tags": ["字体"]
      }
    ]
  },
  {
    "name": "文档构建",
    "websites": [
      {
        "name": "Docusaurus",
        "desc": "Docusaurus",
        "logo": "/img/website/docusaurus.png",
        "href": "https://docusaurus.io/zh-CN",
        "tags": [""]
      },
      {
        "name": "Vuepress",
        "desc": "Vuepress",
        "logo": "/img/website/vuepress.png",
        "href": "https://vuepress.vuejs.org/zh/",
        "tags": [""]
      }
    ]
  }
]
