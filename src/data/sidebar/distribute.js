const  {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const distributePart = [
  {
      type: Type.DOC,
      id: "分布式/分布式理论/distribute",
      label: "简介"
  },
  {
      type: Type.CATEGORY,
      label: "分布式算法",
      items: [
          {
              type: Type.CATEGORY,
              label: "一致性算法",
              items: [
                  "分布式/分布式理论/分布式一致性算法/paxos"
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

module.exports = distributePart;