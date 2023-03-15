const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sourceSideBar = [
  {
      type: Type.DOC,
      id: "source/devSource",
      label: "资源分享"
  },
  {
      type: Type.CATEGORY,
      label: "动漫分享",
      items: [
          "source/acg/acgShare_2022"
      ],
      collapsed: true,
      link: {
          type: "generated-index"
      }
  }
]

module.exports = sourceSideBar;