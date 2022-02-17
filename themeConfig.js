const lightCodeTheme = require('prism-react-renderer/themes/github');
// const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const footerConfig = require('./footer')
const navConfig = require('./navbar')

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    switchConfig: {
      darkIconStyle: {
        marginLeft: '2px',
      },
      lightIconStyle: {
        marginLeft: '1px',
      },
    },
  },
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
    additionalLanguages: ['java', 'markdown'],
  },
  algolia: {
    appId: '4FYW54E03N',
    apiKey: '12498725c526581616283e03d29d7456',
    indexName: 'huakucha',
    contextualSearch: true,
  }
}

module.exports = themeConfig