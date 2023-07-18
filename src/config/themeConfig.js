const codeTheme = require('../prismTheme/dracula.js');
const navConfig = require('./navbar')
// const footerConfig = require('./footer')

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  // 色彩模式
  colorMode: {
    defaultMode: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: true,
  },
  image: 'img/fav.png',
  // 告示条
  // announcementBar: {
  //   id: 'support_us',
  //   content: '🌟欢迎来到Athu的博客🌟',
  //   backgroundColor: '#fafbfc',
  //   textColor: '#091E42',
  //   isCloseable: true,
  // },
  navbar: navConfig,
  docs:{
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    }
  },
  // footer: footerConfig,
  prism: {
    theme: codeTheme,
    darkTheme: codeTheme,
    defaultLanguage: 'java',
    additionalLanguages: ['java', 'ini', 'docker'],
    magicComments: [{
      className: 'theme-code-block-highlighted-line',
      line: 'highlight-next-line',
      block: {start: 'highlight-start', end: 'highlight-end'},
    }],
  },
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 6,
  },
  algolia: {
    appId: 'QZ9YPBGUYT',
    apiKey: '6fbdcfb4f791b5c14fe38c070c15fbfa',
    indexName: 'huakuchaDoc',
    contextualSearch: true,
    searchPagePath: 'search',
  },
  imageZoom: {
    selector: '.markdown img',
    options: {
      margin: 24,
      background: '#BADA55',
      scrollOffset: 0,
      container: '#zoom-container',
      template: '#zoom-template',
    },
  },
}

module.exports = themeConfig
