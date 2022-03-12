const parse = require('remark-parse');
const classicConfig = {
  /**
  * @type {import('@docusaurus/preset-classic').Options} 
  */
  // debug 在开发环境（dev）中默认为 true，在生产环境（prod）中默认为 false 
  debug: true,
 // 以下参数将被直接传递给 @docusaurus/plugin-content-docs （设置为 false 则表示禁用此插件）
  docs: {
    path: 'docs',
    sidebarPath: require.resolve("./sidebars.js"),
    editUrl: "https://github.com/MagicalZhu/XDocs/tree/main",
    showLastUpdateTime: true,
    showLastUpdateAuthor: true,
    remarkPlugins: [parse],
  },
  // 以下参数将被直接传递给 @docusaurus/theme-classic。
  theme: {
    customCss: require.resolve("./src/css/custom.css"),
  }
  // 以下参数将被直接传递给 @docusaurus/plugin-content-blog （设置为 false 则表示禁用此插件）
  // blog: {},
  // 以下参数将被直接传递给 @docusaurus/plugin-content-pages （设置为 false 则表示禁用此插件）
  // pages: {},
  // 以下参数将被直接传递给 @docusaurus/plugin-content-sitemap （设置为 false 则表示禁用此插件）
  // sitemap: {},
  // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
  // gtag: {},
  // Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
  // googleAnalytics: {},
}


module.exports = classicConfig