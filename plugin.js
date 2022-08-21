const docusauruTailwindcssLoader  = require('./plugins/docusaurus-tailwindcss-loader/index')
const plugin = [
  // '@docusaurus/plugin-debug',
  'plugin-image-zoom',
  docusauruTailwindcssLoader
]
module.exports = plugin