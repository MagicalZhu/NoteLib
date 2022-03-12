// @ts-check

const themeConfigs = require("./themeConfig")
const pluginConfigs = require("./plugin")
const presetConfig = require("./presetConfig")
const customConfig = require("./configCustom")

/** 
 * @type {import('@docusaurus/types').Config} 
 */
const config = {
  title: '花裤衩',
  tagline: 'To see the world as it is and to love it',
  url: 'https://huakucha.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav.ico',
  organizationName: 'MagicalZhu', 
  projectName: 'XDocs',
  presets: [
    [
      'classic',
      presetConfig
    ],
  ],
  customFields: customConfig,
  themeConfig: themeConfigs,
  staticDirectories: ['static'],
  titleDelimiter: '🦖',
  // plugins: pluginConfigs,
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
}

module.exports = config
