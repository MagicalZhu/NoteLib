// @ts-check

const themeConfigs = require("./src/config/themeConfig")
const pluginConfigs = require("./src/config/plugin")
const presetConfig = require("./src/config/presetConfig")
const customConfig = require("./src/config/configCustom")

/** 
 * @type {import('@docusaurus/types').Config} 
 */
const config = {
  title: 'NoteBook',
  tagline: '永远保持好奇',
  url: 'https://wiki.athu.top',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MagicalZhu', 
  projectName: 'NoteLib',
  deploymentBranch: 'main',
  presets: [
    [
      'classic',
      presetConfig,
    ]
  ],
  customFields: customConfig,
  themeConfig: themeConfigs,
  staticDirectories: ['static'],
  titleDelimiter: '|',
  plugins: pluginConfigs,
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
}

module.exports = config
