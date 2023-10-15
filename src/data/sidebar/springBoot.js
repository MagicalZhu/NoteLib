const {
  Type
} = require('../../utils/dirUtil')


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const springSideBar = [
  {
		type: Type.DOC,
		id: "SpringBoot/SpringBoot",
		label: "简介"
  },
	{
		type: Type.CATEGORY,
		label: "SpringBoot基础",
		items: [
				{
						type: Type.CATEGORY,
						label: "SpringBoot3",
						items: [
								"SpringBoot/基础入门/基础知识",
								"SpringBoot/基础入门/自动装配",
								"SpringBoot/基础入门/理解 SpringApplication",
						],
						collapsed: true,
						link: {
							type: "generated-index",
							description: 'SpringBoot学习笔记'
						}
				}
		],
		collapsed: true,
		link: {
				type: "generated-index"
		}
  }
]

module.exports = springSideBar;