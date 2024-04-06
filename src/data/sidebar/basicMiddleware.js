const  {
    Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const distributePart = [
    {
        type: Type.DOC,
        id: "中间件/基础中间件/basicMiddleware",
        label: "简介"
    },
    {
        type: Type.CATEGORY,
        label: "Nginx",
        items: [
            {
                type: Type.CATEGORY,
                label: "基础",
                items: [
                    "中间件/基础中间件/负载均衡/Nginx/基础/nginx-basic",
                ],
                collapsed: true,
                link: {
                    type: "generated-index"
                }
            },
        ],
        collapsed: true,
        link: {
            type: "generated-index"
        }
    }
]

module.exports = distributePart;