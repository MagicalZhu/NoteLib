const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const dataStructureSidebar = [
  {
      type: Type.DOC,
      id: "数据结构与算法/dataStructure",
      label: "简介"
  },
  {
      type: Type.CATEGORY,
      label: "数据结构与算法基础",
      items: [
          {
              type: Type.CATEGORY,
              label: "基础知识",
              items: [
                  "数据结构与算法/基础/前提基础知识"
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

module.exports = dataStructureSidebar;