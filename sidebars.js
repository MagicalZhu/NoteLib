/**
 * 说明: 文档的请求路径与文档的实际路径一致 => 文档父目录路径+文档ID
 */
// @ts-check
const Type = {
  // 链接到文档
  DOC: 'doc',
  // 链接到文档页面，并且不归属到当前侧边栏
  REF: 'ref',
  // 链接到任意页面
  LINK: 'link',
  // 创建层级结构
  CAT: 'category',
  // 生成侧边栏
  AUTO: 'autogenerated'
}

const createDoc = (id, label) => {
  return {
    type: Type.DOC,
    // 文档 id
    id, 
    // 显示在侧边栏上的标题或标签（label）
    label, 
  }
}

const createRef = (id) => {
  return {
    type: Type.REF,
    id, // 文档 id （字符串类型）。
  }
}

const createLink = (label, href, className) => {
  const linkItem = {
    type: Type.LINK,
    label, // 为此链接设置的标题（label）
    href // 站外链接（URL）http://www.baidu.com   // 站内路径
  }
  if (className) {
    linkItem.className = className
  }
  return linkItem
}

class Category {
  /** 
   * @param {String} label 
   * @param {Object} items  sidebar items
   */
  constructor(label, items = []) {
    this.type = Type.CAT
    this.label = label
    this.items = items || []
    this.collapsed = true
    this.link = {
      type: 'generated-index',
    }
  }
  setClassName(className) {
    this.className = className
    return this
  }
  setCollapsible(collapsible) {
    this.collapsible = collapsible
    return this
  }
  setCollapsed(collapsed) {
    this.collapsed = collapsed
    return this
  }
  /**
   * @description 添加文档(route eg: Category.label + '/' + prefix + '/' + itemId)
   * @param {Array} itemIds 
   * @returns 
   */
  setCategoryRouteItem(prefix,itemIds) {
    itemIds.forEach((item) => {
      this.items.push(`${this.label}/${prefix}/${item}`)
    })
    return this
  }
  /**
   * @description 添加文档(route eg: prefix + '/' + itemId)
   * @param {Array} itemIds 
   * @returns 
   */
  setNoLabelItem( prefix,itemIds) {
    itemIds.forEach((item) => {
      this.items.push(`${prefix}/${item}`)
    })
    return this
  }
  createSubCaregory(categoryName, prefix, itemIds) {
    const subCategory = new Category(categoryName)
    subCategory.setNoLabelItem(prefix, itemIds)
    this.items.push(subCategory)
    return this
  }
}

const createAuto = (dir) => {
  return {
    type: Type.AUTO,
    dirName: dir||'.', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
  }
}

// 创建并发安全的分类
const ConcurrencySafe =  new Category('并发基础')
    .createSubCaregory('并发安全', '并发编程/并发安全', [
      '线程安全',
      'jmm',
      'volatile',
      'dead_lock',
    ])
    .createSubCaregory('并发控制', '并发编程/并发控制', [
      '线程池',
      'ThreadLocal',
      'Lock锁',
      'Atomic&CAS',
      'final',
      '并发集合与阻塞队列',
      '线程协作',
      'AQS',
      'FutureTask',
      '缓存实战'
    ])
  
// 并发编程相关  
const basicSideBar = [
  createDoc('并发编程/currency_about', '简介'),
  createDoc('并发编程/juc基础', '并发包基础'),
  ConcurrencySafe,
]

// Mysql入门
const mysqlPart =  new Category('MySQL基础与高级')
    .createSubCaregory('基础知识', 'Mysql/基础', [
      'MySQL基础查询',
      'MySQL函数与聚合',
      'MySQL子查询',
      'MySQL库对象'
    ])
    .createSubCaregory('高级特性', 'Mysql/高级特性', [
      'MySQL 部署',
      '用户权限管理',
      'MySQL逻辑架构',
      '索引',
      'InnoDB存储结构',
      '设计索引',
      '性能优化'
    ])
    

const mysqlSideBar = [
  createDoc('Mysql/mysql', '简介'),
  mysqlPart,
]

// 计算机网络相关
const netWorkSidebar = [
  createDoc('计算机网络/networrk-basic', '简介'),
  createDoc('计算机网络/HTTP/http-protocol', 'HTTP协议')
]

//LeetCode 刷题
const leetCodeSidebar = [
  createDoc('LeetCode刷题笔记/leetCode', '简介'),
  createDoc('LeetCode刷题笔记/illustrationOfAlgorithm', '图解算法数据结构')
]

const bVideoPart = new Category('数据结构与算法基础')
    .createSubCaregory('基础知识', '数据结构与算法/基础',[
      '前提基础知识'
    ])

// 数据结构与算法
const dataStructureSidebar = [
  createDoc('数据结构与算法/dataStructure', '简介'),
  bVideoPart
]


// 资源分享相关
const acgPart =  new Category('动漫分享')
    .setNoLabelItem('source/acg',[
      'acgShare_2022',
    ])
const sourceSideBar = [
  createDoc('source/devSource', '资源分享'),
  acgPart
]

// Spring相关
const springCode = new Category('Spring编程思想')
  .setNoLabelItem('Spring/Spring编程思想', [
    'IOC容器',
    'Bean',
    '依赖查找',
    '依赖注入'
  ])
const springSideBar = [
  createDoc('Spring/spring', '简介'),
  springCode
]

// SpringCloud
const springCloudCode = new Category('微服务基础')
  .setNoLabelItem('SpringCloud', [
    '微服务技术栈',
  ])
  .createSubCaregory('SpringCloud-Netflix', 'SpringCloud/Netflix', [
    'Eureka&Consul',
    'Ribbon',
    'OpenFeign',
    'Hystrix',
    'GateWay',
    'Config',
    'Bus',
    'Stream',
    'Sleuth'
  ])
  .createSubCaregory('SpringCloud-Alibaba', 'SpringCloud/Alibaba', [
    'Nacos',
    'Sentinel',
  ])
const springCloudSideBar = [
  createDoc('SpringCloud/springCloud', '简介'),
  springCloudCode
]

// Vue的学习笔记

const vuePart =  new Category('Vue学习笔记')
    .createSubCaregory('Vue基础', '前端/Vue', [
      '基础特性',
    ])

const vueSideBar = [
  createDoc('前端/Vue/vueDesc', '简介'),
  vuePart,
]

// TODO React


const sidebars = {
  basicSideBar,
  sourceSideBar,
  springSideBar,
  springCloudSideBar,
  netWorkSidebar,
  mysqlSideBar,
  vueSideBar,
  dataStructureSidebar,
  leetCodeSidebar
}

module.exports = sidebars;
