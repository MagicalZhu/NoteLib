// const lightCodeTheme = require('prism-react-renderer/themes/github');
const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const footerConfig = require('./footer')
const navConfig = require('./navbar')

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  hideableSidebar:true,
  image: 'img/fav.png',
  announcementBar: {
    id: 'support_us',
    content: '🌟欢迎来到花裤衩的博客🌟',
    backgroundColor: '#fafbfc',
    textColor: '#091E42',
    isCloseable: true,
  },
  navbar: navConfig,
  footer: footerConfig,
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    defaultLanguage: 'java',
    additionalLanguages: ['java','sql', 'ini'],
  },
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 6,
  },
  algolia: {
    appId: '4FYW54E03N',
    apiKey: 'd5a81b60d2a122c88f05c6c71cac5f03',
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
