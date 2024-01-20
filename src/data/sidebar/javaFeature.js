const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */



const gradleSideBar = [
  {
      type: Type.DOC,
      id: "Java特性/java-feature",
      label: "简介"
  },
  {
      type: Type.CATEGORY,
      label: "Java9",
      items: [
        {
          type: Type.DOC,
          id: "Java特性/Java9/Java9 概述",
          label: "基本概述"
        }
      ],
      collapsed: true,
      link: {
          type: "generated-index"
      }
  }
]

module.exports = gradleSideBar;