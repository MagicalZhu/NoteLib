
const  {
  Type
} = require('../../utils/dirUtil')


// 操作系统相关
const OSPart =  [
  {
    type: "doc",
    id: "操作系统/OS",
    label: "简介"
  },
  {
    type: "category",
    label: "操作系统概念",
    items: ["操作系统/操作系统概念/OSBaisc"],
    collapsed: true,
    link: {
      type: "generated-index"
    }
  }
]

  module.exports = OSPart;