const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */


const leetCodeSidebar = [
  {
      type: Type.DOC,
      id: "LeetCode刷题笔记/leetCode",
      label: "简介"
  },
  {
      type: Type.DOC,
      id: "LeetCode刷题笔记/illustrationOfAlgorithm",
      label: "图解算法数据结构"
  }
]

module.exports = leetCodeSidebar;