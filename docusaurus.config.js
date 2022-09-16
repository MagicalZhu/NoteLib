// @ts-check

const themeConfigs = require("./themeConfig")
const pluginConfigs = require("./plugin")
const presetConfig = require("./presetConfig")
const customConfig = require("./configCustom")

/** 
 * @type {import('@docusaurus/types').Config} 
 */
const config = {
  title: '花裤衩Wiki',
  tagline: '👨‍💻永远保持好奇',
  url: 'https://huakucha.com',
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
      presetConfig
    ],
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
    // {
    //   href: "/katex/katex.min.css",
    //   type: "text/css",
    //   integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
    //   crossorigin: "anonymous",
    // },
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
