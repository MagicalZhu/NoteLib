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
  title: '花裤衩',
  logo: {
    alt: '花裤衩的博客',
    src: 'img/logo.svg',
  },
  // 自动隐藏的粘性导航条
  // hideOnScroll: true,
  // 导航条的样式
  // style: 'primary',

  // 设置导航条上的元素
  items: [
    {
      label: "🤖基础知识",
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
      label: "👨‍💻后端框架",
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
      label: "🚀分布式系统",
      position: "left",
      items: [
        {
          label: "分布式基础技术",
          to: 'docs/basicTech',
        },
        {
          label: "基础中间件",
          to: 'docs/basicMiddleware',
        },
        {
          label: "定时任务",
          to: 'docs/job',
        },
        {
          label: "缓存",
          to: 'docs/cache',
        },
        {
          label: "搜索引擎",
          to: 'docs/searchEngine',
        },
        {
          label: "消息队列",
          to: 'docs/messageQueue',
        },{
          label: "数据库",
          to: 'docs/database'
        }
      ]
    },
    {
      label: "👩‍💻前端技术",
      position: "left",
      items: [
        {
          label: "Vue",
          to: 'docs/front/Vue',
        }
      ]
    },
    {
      label: "👋其他",
      position: "left",
      items: [
        { to: '/blog', label: '博客' },
        { to: '/website', label: '网址导航'},
      ]
    },
    {
      position: "right",
      href: '/docs/source/devSource',
      className: 'header-share-link','aria-label': 'GitHub repository',
    },
    // 社交账号
    {
      href: 'https://github.com/MagicalZhu',
      position: 'right',
      className: 'header-github-link','aria-label': 'GitHub repository',
    }
  ]
}

module.exports = nav
