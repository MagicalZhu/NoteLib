const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */



const gradleSideBar = [
  {
      type: Type.DOC,
      id: "工具/Gradle/gradle",
      label: "简介"
  },
  {
      type: Type.CATEGORY,
      label: "Gradle",
      items: [
          {
              type: Type.CATEGORY,
              label: "基础",
              items: [
                  "工具/Gradle/基础/Gradle基础"
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

module.exports = gradleSideBar;