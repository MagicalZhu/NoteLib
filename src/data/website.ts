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
        "name": "Node.js技术栈",
        "desc": "“Nodejs技术栈” 是作者 @五月君 从事 Node.js 开发以来的学习历程，希望这些分享能帮助到正在学习、使用 Node.js 的朋友们",
        "logo": "https://nodejsred.oss-cn-shanghai.aliyuncs.com/nodejs_roadmap-logo.jpeg?x-oss-process=style/may",
        "href": "https://www.nodejs.red/",
        "tags": [""]
      },
      {
        "name": "程序员盒子",
        "desc": "程序员一站式编程导航，专注于程序员学习编程提效，官网",
        "logo": "/img/favicon.ico",
        "href": "https://www.coderutil.com/",
        "tags": [""]
      },
      {
        "name": "Road To Coding",
        "desc": "Road To Coding，意为「编程自学之路」，是自学编程以来所用资源和分享内容的大聚合",
        "logo": "https://r2coding.com/favicon.ico",
        "href": "https://r2coding.com/",
        "tags": [""]
      },
      {
        "name": "印记中文",
        "desc": "深入挖掘国外前端新领域，为中国 Web 前端开发人员提供优质文档！",
        "logo": "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/al1nd-ai8jt.png",
        "href": "https://docschina.org/",
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
        "name": "NGINX 配置",
        "desc": "配置高性能、安全、稳定的NGINX服务器的最简单方法。",
        "logo": "/img/website/digitalocean.png",
        "href": "https://www.digitalocean.com/community/tools/nginx",
        "tags": []
      },
      {
        "name": "菜鸟教程",
        "desc": "学的不仅是技术，更是梦想！",
        "logo": "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596",
        "href": "https://code.visualstudio.com/",
        "tags": []
      }
    ]
  },
  {
    "name": "工具箱",
    "websites": [
      {
        "name": "在线工具",
        "desc": "在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成",
        "logo": "https://tool.lu/favicon.ico",
        "href": "https://tool.lu/",
        "tags": []
      },
      {
        "name": "一个工具箱",
        "desc": "好用的在线工具都在这里！",
        "logo": "/img/website/atoolbox.ico",
        "href": "http://www.atoolbox.net/",
        "tags": []
      },
      {
        "name": "菜鸟工具",
        "desc": "菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。",
        "logo": "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596",
        "href": "https://c.runoob.com/",
        "tags": []
      },
      {
        "name": "ProcessOn",
        "desc": "免费在线流程图思维导图",
        "logo": "https://processon.com/favicon.ico",
        "href": "https://processon.com/",
        "tags": []
      },
      {
        "name": "transform",
        "desc": "各类数据格式与对象转换",
        "logo": "https://transform.tools/static/favicon.png",
        "href": "https://transform.tools",
        "tags": []
      }
    ]
  },
  {
    "name": "后端技术",
    "websites": [
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
        "logo": "https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png",
        "href": "https://www.npmjs.com",
        "tags": [""]
      },
      {
        "name": "Yarn",
        "desc": "Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求。",
        "logo": "https://www.yarnpkg.cn/favicon-32x32.png",
        "href": "https://www.yarnpkg.cn",
        "tags": [""]
      },
      {
        "name": "Pnpm",
        "desc": "速度快、节省磁盘空间的软件包管理器",
        "logo": "https://www.pnpm.cn/img/favicon.png",
        "href": "https://pnpm.io",
        "tags": [""]
      },
      {
        "name": "Webpack",
        "desc": "webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。",
        "logo": "https://www.webpackjs.com/assets/favicon.ico",
        "href": "https://www.webpackjs.com",
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
    "name": "Vue",
    "websites": [
      {
        "name": "Vue",
        "desc": "Vue",
        "logo": "/img/website/vue.svg",
        "href": "https://v3.cn.vuejs.org/",
        "tags": [""]
      },
      {
        "name": "Element-Plus",
        "desc": "Element-Plus",
        "logo": "/img/website/element-plus.svg",
        "href": "https://element-plus.gitee.io/zh-CN/",
        "tags": [""]
      },
      {
        "name": "Vite",
        "desc": "下一代的前端工具链，为开发提供极速响应",
        "logo": "https://cn.vitejs.dev/logo.svg",
        "href": "https://cn.vitejs.dev",
        "tags": ["前端", "Vue", "框架"]
      },
      {
        "name": "Nuxt.js",
        "desc": "使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。",
        "logo": "https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png",
        "href": "https://nuxtjs.org/",
        "tags": ["前端", "Vue", "文档", "框架"]
      },
      {
        "name": "Pinia",
        "desc": "您将会喜欢使用的 Vue 状态管理",
        "logo": "https://pinia.vuejs.org/logo.svg",
        "href": "https://pinia.vuejs.org/",
        "tags": ["前端", "Vue", "文档", "框架"]
      },
      {
        "name": "VbenAdmin",
        "desc": "Vben是一个基于Vue3、Vite、TypeScript等最新技术栈开发的后台管理框架",
        "logo": "https://vvbin.cn/doc-next/logo.png",
        "href": "https://vvbin.cn/doc-next/",
        "tags": ["前端", "Vue", "后台", "项目"]
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
        "logo": "https://nextjs.org/static/favicon/favicon.ico",
        "href": "https://nextjs.org/",
        "tags": ["前端", "React", "框架"]
      },
      {
        "name": "UmiJS",
        "desc": "用 Umi 构建你的下一个应用，带给你简单而愉悦的 Web 开发体验",
        "logo": "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        "href": "https://umijs.org",
        "tags": ["前端", "React", "脚手架"]
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
        "logo": "https://deno.land/logo.svg",
        "href": "https://deno.land/",
        "tags": ["Nodejs", "Deno", "JavaScript", "TypeScript"]
      },
      {
        "name": "Sequelize",
        "desc": "Sequelize",
        "logo": "/img/website/sequelize.png",
        "href": "https://www.sequelize.com.cn/core-concepts/getting-started",
        "tags": [""]
      },
      {
        "name": "Axios",
        "desc": "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
        "logo": "/img/website/axios.ico",
        "href": "https://axios-http.cn/",
        "tags": ["Nodejs", "HTTP"]
      },
      {
        "name": "Expressjs",
        "desc": "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        "logo": "https://www.expressjs.com.cn/images/favicon.png",
        "href": "https://www.expressjs.com.cn/",
        "tags": ["Nodejs", "后端", "框架"]
      },
      {
        "name": "Nest.js",
        "desc": "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。",
        "logo": "https://docs.nestjs.cn/_media/icon.svg",
        "href": "https://docs.nestjs.cn/",
        "tags": ["后端", "Nodejs", "框架"]
      },
      {
        "name": "Socket.io",
        "desc": "Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库。",
        "logo": "https://socket.io/images/favicon.png",
        "href": "https://socketio.bootcss.com",
        "tags": ["Nodejs", "socket"]
      },
      {
        "name": "Lodash",
        "desc": "一个 JavaScript 的实用工具库, 表现一致性, 模块化, 高性能, 以及可扩展。",
        "logo": "https://lodash.com/icons/favicon-32x32.png",
        "href": "https://lodash.net",
        "tags": ["Nodejs"]
      },
      {
        "name": "TypeORM",
        "desc": "TypeORM 是一个ORM框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)一起使用。",
        "logo": "https://typeorm.bootcss.com/favicon/favicon.ico",
        "href": "https://typeorm.bootcss.com",
        "tags": ["Nodejs"]
      },
      {
        "name": "WebAssembly",
        "desc": "wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新格式",
        "logo": "https://www.wasm.com.cn/favicon.ico",
        "href": "https://www.wasm.com.cn",
        "tags": ["Nodejs"]
      }
    ]
  },
  {
    "name": "CSS",
    "websites": [
      {
        "name": "CSS常用样式",
        "desc": "CSS常用样式",
        "logo": "https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "href": "https://github.com/QiShaoXuan/css_tricks",
        "tags": ["Css", "样式"]
      },
      {
        "name": "w3schools Css 教程",
        "desc": "w3schools 从基础到高级的CSS教程",
        "logo": "https://www.w3schools.com/favicon.ico",
        "href": "https://www.w3schools.com/css",
        "tags": ["Css", "样式"]
      },
      {
        "name": "TailwindCSS",
        "desc": "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计",
        "logo": "https://www.tailwindcss.cn/favicon-32x32.png",
        "href": "https://www.tailwindcss.cn",
        "tags": ["Css", "框架"]
      },
      {
        "name": "WindiCSS",
        "desc": "Windi CSS 是下一代工具优先的 CSS 框架。",
        "logo": "https://windicss.org/assets/logo.svg",
        "href": "https://windicss.org",
        "tags": ["Css", "框架"]
      },
      {
        "name": "Twind",
        "desc": "现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案",
        "logo": "https://camo.githubusercontent.com/8520cf430a36d4a093b3c67ef774a94758ea39adcaf3fcb46806ad878bf5318f/68747470733a2f2f7477696e642e6465762f6173736574732f7477696e642d6c6f676f2d616e696d617465642e737667",
        "href": "https://github.com/tw-in-js/twind",
        "tags": ["Css", "框架"]
      },
      {
        "name": "UnoCSS",
        "desc": "即时按需原子 CSS 引擎",
        "logo": "https://uno.antfu.me//favicon.svg",
        "href": "https://uno.antfu.me/",
        "tags": ["Css", "框架"]
      },
      {
        "name": "NES.css",
        "desc": "一个像素风格的CSS框架",
        "logo": "https://nostalgic-css.github.io/NES.css/favicon.png",
        "href": "https://nostalgic-css.github.io/NES.css/",
        "tags": ["Css", "框架"]
      },
      {
        "name": "clay.css",
        "desc": "claymorphism 泥陶态风格CSS",
        "logo": "https://codeadrian.github.io/clay.css/apple-touch-icon.png",
        "href": "https://codeadrian.github.io/clay.css/",
        "tags": ["Css", "框架"]
      },
      {
        "name": "loading.io",
        "desc": "Animation Made Easy",
        "logo": "https://loading.io/favicon.ico",
        "href": "https://loading.io/",
        "tags": ["Css"]
      },
      {
        "name": "gradienta.io",
        "desc": "Multicolor Gradients. Pure CSS Code, JPG Download, Open Source!",
        "logo": "https://gradienta.io/favicon.ico",
        "href": "https://gradienta.io/",
        "tags": ["Css"]
      },
      {
        "name": "uigradients.com",
        "desc": "一个渐变色过渡背景网站",
        "logo": "https://uigradients.com/static/images/favicon-32x32.png",
        "href": "https://uigradients.com/",
        "tags": ["Css"]
      },
      {
        "name": "uiverse.io",
        "desc": "丰富的 UI 元素助您脱颖而出，开源且免费使用",
        "logo": "https://uiverse.io/favicon.ico",
        "href": "https://uiverse.io/",
        "tags": ["Css", "动画"]
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
        "tags": ["图标"]
      },
      {
        "name": "Font Awesome",
        "desc": "在您的网站上使用Font Awesome展示矢量图标和社交标志，这可是网络上最流行的图标集和工具包。",
        "logo": "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610874224065-%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A120210117-170325@2x.png",
        "href": "https://fa5.dashgame.com",
        "tags": ["图标"]
      },
      {
        "name": "feathericons",
        "desc": "简单美丽的开源图标",
        "logo": "https://feathericons.com/favicon.ico",
        "href": "https://feathericons.com/",
        "tags": ["图标"]
      },
      {
        "name": "undraw",
        "desc": "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        "logo": "https://undraw.co/apple-touch-icon.png",
        "href": "https://undraw.co/",
        "tags": ["图标", "svg"]
      },
      {
        "name": "Shields.io",
        "desc": "为你的开源项目生成高质量小徽章图标",
        "logo": "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1617853921212-6254238.png",
        "href": "https://shields.io/",
        "tags": ["图标", "首页"]
      },
      {
        "name": "Emojiall",
        "desc": "Emoji表情大全",
        "logo": "https://www.emojiall.com/apple-touch-icon.png",
        "href": "https://www.emojiall.com/zh-hans",
        "tags": ["图标", "emoji"]
      },
      {
        "name": "渐变色网站",
        "desc": "数百万个自动生成的渐变的网站",
        "logo": "https://gradihunt.com/favicon.ico",
        "href": "https://gradihunt.com/",
        "tags": ["配色", "背景"]
      },
      {
        "name": "WebGradients",
        "desc": "WebGradients是180个线性渐变的免费集合，您可以将其用作网站任何部分的内容背景",
        "logo": "/img/website/webgradients.png",
        "href": "https://webgradients.com",
        "tags": ["配色", "背景"]
      },
      {
        "name": "谷歌字体",
        "desc": "一个生成渐变色背景的网站",
        "logo": "https://googlefonts.cn/favicon.ico",
        "href": "https://googlefonts.cn/",
        "tags": ["字体"]
      }
    ]
  },
  {
    "name": "🔨文档构建",
    "websites": [
      {
        "name": "Docusaurus",
        "desc": "Docusaurus",
        "logo": "/img/website/docusaurus.png",
        "href": "https://www.docusaurus.cn/",
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
