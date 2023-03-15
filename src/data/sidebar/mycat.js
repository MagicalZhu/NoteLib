const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const myCatSideBar = [
  {
      type: Type.DOC,
      id: "中间件/数据库/database",
      label: "简介"
  },
  {
      type: Type.CAT,
      label: "MyCat",
      items: [
          {
              type: Type.CAT,
              label: "基础知识",
              items: [
                  "中间件/数据库/MyCat/基础/MyCat基础"
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

module.exports = myCatSideBar;