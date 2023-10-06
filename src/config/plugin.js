// const docusauruTailwindcssLoader  = require('../../plugins/docusaurus-tailwindcss-loader/index')

const plugin = [
  // '@docusaurus/plugin-debug',
  'plugin-image-zoom',
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    ({
      hashed: true,
      language: ["en", "zh"],
    }),
  ],
  // docusauruTailwindcssLoader
]
module.exports = plugin