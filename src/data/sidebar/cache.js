const {
  Type
} = require('../../utils/dirUtil')


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const cacheSideBar = [
  {
		type: Type.DOC,
		id: "中间件/缓存/cache",
		label: "简介"
  },
	{
		type: Type.CATEGORY,
		label: "Redis",
		items: [
			{
					type: Type.CATEGORY,
					label: "基础",
					items: [
							"中间件/缓存/Redis/基础入门/Redis基础",
					],
					collapsed: true,
					link: {
						type: "generated-index",
						description: 'Redis的一些基础知识'
					}
			},
		],
		collapsed: true,
		link: {
				type: "generated-index"
		}
  }
]

module.exports = cacheSideBar;