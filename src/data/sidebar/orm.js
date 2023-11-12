const {
  Type
} = require('../../utils/dirUtil')


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const springSideBar = [
  {
		type: Type.DOC,
		id: "ORM/ORM",
		label: "简介"
  },
	{
		type: Type.CATEGORY,
		label: "Mybatis",
		items: [
			{
					type: Type.CATEGORY,
					label: "Mybatis基础",
					items: [
							"ORM/Mybatis基础/基础知识",
					],
					collapsed: true,
					link: {
						type: "generated-index",
						description: 'Mybatis 的使用笔记'
					}
			},
		],
		collapsed: true,
		link: {
				type: "generated-index"
		}
  }
]

module.exports = springSideBar;