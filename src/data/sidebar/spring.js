const {
  Type
} = require('../../utils/dirUtil')


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const springSideBar = [
  {
		type: Type.DOC,
		id: "Spring/spring",
		label: "简介"
  },
  {
		type: Type.CATEGORY,
		label: "Spring基础",
		items: [
			{
					type: Type.CATEGORY,
					label: "Spring注解",
					items: [
							"Spring/注解驱动开发/组件注册"
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
	},
	{
		type: Type.CATEGORY,
		label: "SpringMvc",
		items: [
			{
				type: Type.CATEGORY,
				label: "SpringMvc 基础",
				items: [
						"Spring/SpringMvc/基础/基础知识"
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
	},
	{
		type: Type.CATEGORY,
		label: "Spring进阶",
		items: [
			{
					type: Type.CATEGORY,
					label: "Spring编程思想",
					items: [
							"Spring/Spring编程思想/基础知识",
							"Spring/Spring编程思想/IOC容器",
							"Spring/Spring编程思想/Bean",
							"Spring/Spring编程思想/依赖查找",
							"Spring/Spring编程思想/依赖注入",
							"Spring/Spring编程思想/依赖来源",
							"Spring/Spring编程思想/作用域",
							"Spring/Spring编程思想/Bean生命周期",
							"Spring/Spring编程思想/配置元信息",
							"Spring/Spring编程思想/资源管理",
							"Spring/Spring编程思想/国际化",
							"Spring/Spring编程思想/数据校验",
							"Spring/Spring编程思想/数据绑定",
							"Spring/Spring编程思想/类型转换",
							"Spring/Spring编程思想/泛型处理",
							"Spring/Spring编程思想/事件编程",
							"Spring/Spring编程思想/注解处理",
							"Spring/Spring编程思想/Environment抽象",
							"Spring/Spring编程思想/上下文生命周期",
					],
					collapsed: true,
					link: {
						type: "generated-index",
						description: '极客时间小马哥的Spring核心编程思想学习笔记'
					}
			},
			{
				type: Type.CATEGORY,
				label: "Spring AOP",
				items: [
					"Spring/AOP/AOP总览",
					"Spring/AOP/AOP基础",
					"Spring/AOP/AOP设计与实现",
				],
				collapsed: true,
				link: {
					type: "generated-index",
					description: '极客时间小马哥的 Spring AOP 学习笔记'
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