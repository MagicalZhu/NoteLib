const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const netWorkSidebar = [
  {
      type: Type.DOC,
      id: "计算机网络/networrk-basic",
      label: "简介"
  },
  {
      type: Type.DOC,
      id: "计算机网络/HTTP/http-protocol",
      label: "HTTP协议"
  },
  {
      type: Type.CAT,
      label: "TCP/IP",
      items: [
          "计算机网络/TCP-IP/net-basic"
      ],
      collapsed: true,
      link: {
          type: "generated-index"
      }
  }
]

module.exports = netWorkSidebar;