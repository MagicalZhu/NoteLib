const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const vueSideBar = [
  {
      type: Type.DOC,
      id: "前端/Vue/vueDesc",
      label: "简介"
  },
  {
      type: Type.CAT,
      label: "Vue学习笔记",
      items: [
          {
              type: Type.CAT,
              label: "Vue基础",
              items: [
                  "前端/Vue/基础特性"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          }
      ],
      collapsed: true,
      link: {
          type: "generated-index"
      }
  }
]

module.exports = vueSideBar;