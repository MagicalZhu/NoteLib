athuconst footer = {
  links: [
    {
      title: '前端链接',
      items: [
        {
          label: 'Vue',
          href: 'https://v3.cn.vuejs.org/'
        },
        {
          label: 'React',
          href: 'https://react.docschina.org/'
        },
        {
          label: 'TypeScript',
          href: 'http://ts.xcatliu.com/'
        },
        {
          label: 'MDN',
          href: 'https://developer.mozilla.org/zh-CN/docs/Web'
        },
      ],
    },
    {
      title: '后端链接',
      items: [
        { label: 'Spring', href: 'https://spring.io/'},
        { label: 'Docker', href: 'https://docs.docker.com/get-started/'},
        { label: 'Kubernetes', href: 'https://kubernetes.io/zh/docs/home/'},
        { label: 'JVM', href: 'https://docs.oracle.com/javase/8/docs/technotes/tools/windows/index.html'},
      ]
    },
    {
      title: '社区',
      items: [
        { label: '掘金', href: 'https://juejin.cn'},
        { label: 'InfoQ', href: 'https://www.infoq.cn/'},
        { label: 'Github', href: 'https://github.com/'},
      ],
    },
    {
      title: '文档构建',
      items: [
        {
          label: 'Docusaurus',
          href: 'https://www.docusaurus.cn/',
        },
        {
          label: 'Typora',
          href: 'https://typoraio.cn',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} athu. Built With Docusaurus.`
}
module.exports = footer
