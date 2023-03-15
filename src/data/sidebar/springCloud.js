const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */



const springCloudSideBar = [
  {
      type: Type.DOC,
      id: "SpringCloud/springCloud",
      label: "简介"
  },
  {
      type: Type.CAT,
      label: "微服务基础",
      items: [
          "SpringCloud/微服务技术栈",
          {
              type: Type.CAT,
              label: "SpringCloud-Netflix",
              items: [
                  "SpringCloud/Netflix/Eureka&Consul",
                  "SpringCloud/Netflix/Ribbon",
                  "SpringCloud/Netflix/OpenFeign",
                  "SpringCloud/Netflix/Hystrix",
                  "SpringCloud/Netflix/GateWay",
                  "SpringCloud/Netflix/Config",
                  "SpringCloud/Netflix/Bus",
                  "SpringCloud/Netflix/Stream",
                  "SpringCloud/Netflix/Sleuth"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "SpringCloud-Alibaba",
              items: [
                  "SpringCloud/Alibaba/Nacos",
                  "SpringCloud/Alibaba/Sentinel"
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

module.exports = springCloudSideBar;