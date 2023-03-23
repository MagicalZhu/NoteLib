// navbar的类型定义
const Type = {
  dropdown: 'dropdown',
  doc: 'doc',
  docVersionDropdown: 'docsVersionDropdown',
  docVersion: 'docsVersion',
  localeDropdown: 'localeDropdown',
  search: 'search',
  docSidebar: 'docSidebar'
}

const nav = {
  title: 'Athu',
  logo: {
    alt: 'Athu',
    src: 'img/logo.svg',
  },
  // 自动隐藏的粘性导航条
  // hideOnScroll: true,
  // 导航条的样式
  // style: 'primary',

  // 设置导航条上的元素
  items: [
    {
      label: "基础知识",
      position: "left",
      items: [
        {
          label: "并发编程",
          to: 'docs/currency',
        },
        {
          label: "计算机网络",
          to: 'docs/networrk-basic',
        },
        {
          label: "Linux",
          to: 'docs/linuxCommand',
        },
        {
          label: "数据结构与算法",
          to: 'docs/dataStructure',
        },
        {
          label: "LeetCode",
          to: 'docs/leetCode',
        },
        {
          label: "MySQL",
          to: 'docs/mysql',
        }
      ]
    },
    {
      label: "后端框架👨",
      position: "left",
      items: [
        {
          label: "Spring",
          to: 'docs/spring',
        },
        {
          label: "SpringCloud",
          to: 'docs/springCloud',
        }
      ]
    },
    {
      label: "方法论",
      position: "left",
      items: [
        {
          label: "分布式理论",
          to: 'docs/distribute/protol',
        },
        {
          label: "分布式技术点",
          to: 'docs/distribute/basicTech',
        }
      ]
    },
    {
      label: "中间件",
      position: "left",
      items: [
        {
          label: "基础中间件",
          to: 'docs/middleware/basicMiddleware',
        },
        {
          label: "定时任务",
          to: 'docs/middleware/job',
        },
        {
          label: "缓存",
          to: 'docs/middleware/cache',
        },
        {
          label: "搜索引擎",
          to: 'docs/middleware/searchEngine',
        },
        {
          label: "消息队列",
          to: 'docs/middleware/messageQueue',
        },{
          label: "数据库",
          to: 'docs/middleware/database'
        }
      ]
    },
    {
      label:"底层",
      position: "left",
      items: [
        {
          label: "JVM",
          to: 'docs/JVM',
        },
        {
          label: "操作系统",
          to: 'docs/OS',
        }
      ]
    },
    {
      label: "前端技术👩",
      position: "left",
      items: [
        {
          label: "Vue",
          to: 'docs/front/Vue',
        }
      ]
    },
    {
      label:"其他工具",
      position: "left",
      items: [
        {
          label: "Gradle",
          to: 'docs/Gradle',
        },
        {
          label: "Docker",
          to: 'docs/docker',
        }
      ]
    },
    {
      label: '物料中心',
      position: "left",
      items: [
        { to: '/website/BE', label: '后端产品' },
        { to: '/website/COM', label: '其他产品' },
        { to: '/website/FE', label: '前端产品' },
      ]
    },
    {
      label: "博客",
      position: "left",
      to: '/blog', label: '博客'
    },
    /*
    {
      label: "关于",
      position: "right",
      href: 'https://blog.huakucha.top'
    },
      // i18n
      {
        type: Type.localeDropdown,
        position: 'right',
      },
      // 社交账号
      {
        href: 'https://github.com/MagicalZhu',
        position: 'right',
        className: 'header-github-link','aria-label': 'GitHub repository',
      }
      */
  ]
}

module.exports = nav
