const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */


const springSideBar = [
  {
      type: Type.DOC,
      id: "Spring/spring",
      label: "简介"
  },
  {
      type: Type.CAT,
      label: "Spring基础",
      items: [
          {
              type: Type.CAT,
              label: "Spring5",
              items: [
                  "Spring/Spring5/IOC容器"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "Spring注解",
              items: [
                  "Spring/注解驱动开发/组件注册"
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
  },
  {
      type: Type.CAT,
      label: "Spring进阶",
      items: [
          {
              type: Type.CAT,
              label: "Spring编程思想",
              items: [
                  "Spring/Spring编程思想/基础知识",
                  "Spring/Spring编程思想/IOC容器",
                  "Spring/Spring编程思想/Bean",
                  "Spring/Spring编程思想/依赖查找",
                  "Spring/Spring编程思想/依赖注入"
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

module.exports = springSideBar;