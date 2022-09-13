// const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
// const lightCodeTheme = require('./src/prismTheme/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('./src/prismTheme/nightOwlLight');
const darkCodeTheme = require('./src/prismTheme/dracula');
const footerConfig = require('./footer')
const navConfig = require('./navbar')

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  // 色彩模式
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  image: 'img/fav.png',
  // 告示条
  announcementBar: {
    id: 'support_us',
    content: '🌟欢迎来到花裤衩的博客🌟',
    backgroundColor: '#fafbfc',
    textColor: '#091E42',
    isCloseable: true,
  },
  navbar: navConfig,
  docs:{
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    }
  },
  footer: footerConfig,
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    defaultLanguage: 'java',
    additionalLanguages: ['java', 'ini'],
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
    appId: '4FYW54E03N',
    apiKey: 'bdbf6635d35dfa0c308bb91c8b85ea01',
    indexName: 'huakucha',
    contextualSearch: true,
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
