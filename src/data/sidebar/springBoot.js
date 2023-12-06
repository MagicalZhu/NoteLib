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
					label: "SpringBoot基础",
					items: [
							"SpringBoot/基础/基础知识",
							"SpringBoot/基础/核心功能",
					],
					collapsed: true,
					link: {
						type: "generated-index",
						description: '尚硅谷 SpringBoot 的学习笔记'
					}
				},
				{
						type: Type.CATEGORY,
						label: "理解 SpringBoot",
						items: [
								"SpringBoot/基础入门/基础知识",
								"SpringBoot/基础入门/自动装配",
								"SpringBoot/基础入门/理解 SpringApplication",
								"SpringBoot/基础入门/Web MVC 核心",
								"SpringBoot/基础入门/Web MVC 视图应用",
						],
						collapsed: true,
						link: {
							type: "generated-index",
							description: '小马哥的 SpringBoot 学习笔记'
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