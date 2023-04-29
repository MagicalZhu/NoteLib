const classicConfig = {
  /**
  * @type {import('@docusaurus/preset-classic').Options} 
  */
  // debug 在开发环境（dev）中默认为 true，在生产环境（prod）中默认为 false 
  debug: true,
 // 以下参数将被直接传递给 @docusaurus/plugin-content-docs （设置为 false 则表示禁用此插件）
  docs: {
    path: 'docs',
    breadcrumbs: true,
    sidebarPath: require.resolve("./sidebars.js"),
    editUrl: "https://github.com/MagicalZhu/NoteLib/tree/main",
    showLastUpdateTime: true,
    showLastUpdateAuthor: true,
    remarkPlugins: [require('mdx-mermaid')],
  },
  // 以下参数将被直接传递给 @docusaurus/theme-classic。
  theme: {
    customCss: require.resolve("./src/css/custom.css"),
  },
  // 以下参数将被直接传递给 @docusaurus/plugin-content-blog （设置为 false 则表示禁用此插件）
  blog: {
    path: 'blog',
    editUrl: 'https://github.com/MagicalZhu/NoteLib/tree/main',
    postsPerPage: 5,
    authorsMapPath: 'author.yml',
    showReadingTime: true, // 如果设置为 false，「x 分钟阅读」的文字就不会显示
    readingTime: (
      { content, frontMatter, defaultReadingTime}) =>
        defaultReadingTime({content, options: {wordsPerMinute: 300}
      }
    ),
    // 订阅源
    feedOptions: {
      type: 'all',
      copyright: `Copyright © ${new Date().getFullYear()} athu, Inc.`,
    },
  },
  // 以下参数将被直接传递给 @docusaurus/plugin-content-pages （设置为 false 则表示禁用此插件）
  pages: {
    path: 'src/pages',
    include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
  }
  // 以下参数将被直接传递给 @docusaurus/plugin-content-sitemap （设置为 false 则表示禁用此插件）
  // sitemap: {},
  // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
  // gtag: {},
  // Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
  // googleAnalytics: {},
}


module.exports = classicConfig
