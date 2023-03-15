const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const jvmSideBar = [
  {
      type: Type.DOC,
      id: "JVM/JVM",
      label: "简介"
  },
  {
      type: Type.CAT,
      label: "理解JVM",
      items: [
          {
              type: Type.CAT,
              label: "内存与垃圾回收",
              items: [
                  "JVM/内存与垃圾回收/JVM-Intro",
                  "JVM/内存与垃圾回收/类加载子系统",
                  "JVM/内存与垃圾回收/运行时数据区"
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
      label: "JVM优化",
      items: [
          {
              type: Type.CAT,
              label: "性能监控和调优入门",
              items: [
                  "JVM/性能监控和调优入门/基于JDK命令行工具的监控"
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

module.exports = jvmSideBar;