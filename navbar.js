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
  hideOnScroll: false,
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
        }
      ]
    },
    {
      type: Type.search,
      position: 'right',
    },
    // 社交账号
    {
      href: 'https://github.com/facebook/docusaurus',
      position: 'right',
      className: 'header-github-link','aria-label': 'GitHub repository',
    }
  ]
}

module.exports = nav