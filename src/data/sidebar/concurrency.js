
const  {
    Type,
  } = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const concurrencyPart = [
    {
      type: Type.DOC,
      id: "并发编程/currency_about",
      label: "简介"
    },
    {
      type: Type.DOC,
      id: "并发编程/juc基础",
      label: "并发包基础"
    },
    {
      type: Type.CAT,
      label: "并发基础",
      items: [
        {
          type: Type.CAT,
          label: "并发安全",
          items: [
            "并发编程/并发安全/线程安全",
            "并发编程/并发安全/jmm",
            "并发编程/并发安全/volatile",
            "并发编程/并发安全/dead_lock"
          ],
          collapsed: true,
          link: {
            type: "generated-index"
          }
        },
        {
          type: Type.CAT,
          label: "并发控制",
          items: [
            "并发编程/并发控制/线程池",
            "并发编程/并发控制/ThreadLocal",
            "并发编程/并发控制/Lock锁",
            "并发编程/并发控制/Atomic&CAS",
            "并发编程/并发控制/final",
            "并发编程/并发控制/并发集合与阻塞队列",
            "并发编程/并发控制/线程协作",
            "并发编程/并发控制/AQS",
            "并发编程/并发控制/FutureTask",
            "并发编程/并发控制/缓存实战"
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
  

module.exports = concurrencyPart;