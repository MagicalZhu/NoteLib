
const  {
  Type,
  Category,
  createDoc,
  createRef,
  createLink,
  createAuto
} = require('./src/utils/dirUtil.js')




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

// 操作系统相关
const OSPart =  new Category('操作系统概念')
    .setNoLabelItem('操作系统/操作系统概念',[
      'OSBaisc',
    ])
  const OSSiderBar = [
    createDoc('操作系统/OS', '简介'),
    OSPart
  ]


// Mysql入门
const mysqlPart =  new Category('MySQL基础与高级')
    .createSubCaregory('基础知识', 'Mysql/基础', [
      'MySQL基础查询',
      'MySQL函数与聚合',
      'MySQL子查询',
      'MySQL库对象'
    ])
    .createSubCaregory('数据库管理','Mysql/高级特性', [
      'MySQL 部署',
      '用户权限管理',
    ])
    .createSubCaregory('架构与引擎','Mysql/高级特性', [
      'MySQL逻辑架构',
      '缓冲池'
    ])
    .createSubCaregory('存储结构与索引','Mysql/高级特性', [
      '索引',
      '索引的应用',
      '设计索引',
      'InnoDB数据页结构',
      'InnoDB表空间'
    ])
    .createSubCaregory('性能优化','Mysql/高级特性', [
      new Category('性能分析工具').setNoLabelItem('Mysql/高级特性',[
        '基本分析工具',
        'Explain'
      ]),
      '性能监控工具',
      '索引与查询优化',
      '数据库设计规范',
      '数据库其他调优策略',
    ])
    .createSubCaregory('事务与锁', 'Mysql/高级特性', [
      '事务基础',
      'Redo日志',
      'Undo日志',
      '锁',
      'MVCC',
    ])
    .createSubCaregory('运维', 'Mysql/高级特性', [
      '其他日志',
      '主从复制',
    ])


const mysqlSideBar = [
  createDoc('Mysql/mysql', '简介'),
  mysqlPart,
  createDoc('Mysql/MySQL参数与命令', 'MySQL参数与命令')
]


// MyCat
const myCatPart =  new Category('MyCat')
.createSubCaregory('基础知识', '中间件/数据库/MyCat/基础', [
  'MyCat基础',
])

const myCatSideBar = [
  createDoc('中间件/数据库/database', '简介'),
  myCatPart,
]

// 分布式理论
const distributePart = new Category('分布式算法')
.createSubCaregory('一致性算法', '分布式/分布式理论/分布式一致性算法', [
  'paxos',
])

const distributeSiderBar = [
  createDoc('分布式/分布式理论/distribute', '简介'),
  distributePart
]

// TCP部分
const tcpipPart = new Category('TCP/IP')
.setNoLabelItem('计算机网络/TCP-IP', [
  'net-basic',
])


// 计算机网络相关
const netWorkSidebar = [
  createDoc('计算机网络/networrk-basic', '简介'),
  createDoc('计算机网络/HTTP/http-protocol', 'HTTP协议'),
  tcpipPart
]

// Linux相关  
const linuxSideBar = [
  createDoc('Linux/linuxCommand', 'Linux命令'),
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
const springCode = new Category('Spring基础')
  .createSubCaregory('Spring5', 'Spring/Spring5', [
    'IOC容器'
  ])
  .createSubCaregory('Spring注解', 'Spring/注解驱动开发', [
    '组件注册'
  ])


const springAdvance = new Category('Spring进阶')
  .createSubCaregory('Spring编程思想','Spring/Spring编程思想',[
    '基础知识',
    'IOC容器',
    'Bean',
    '依赖查找',
    '依赖注入'
  ])

const springSideBar = [
  createDoc('Spring/spring', '简介'),
  springCode,
  springAdvance
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

// JVM
const jvmPart =  new Category('JVM优化')
    .createSubCaregory('性能监控和调优入门', 'JVM/性能监控和调优入门', [
      '基于JDK命令行工具的监控',
    ])

const jvmPart2 =  new Category('理解JVM')
.createSubCaregory('内存与垃圾回收', 'JVM/内存与垃圾回收', [
  'JVM-Intro',
  '类加载子系统',
  '运行时数据区',
])

const jvmSideBar = [
  createDoc('JVM/JVM', '简介'),
  jvmPart2,
  jvmPart
]

// Gradle
const gradlePart =  new Category('Gradle')
    .createSubCaregory('基础', '工具/Gradle/基础', [
      'Gradle基础',
    ])

const gradleSideBar = [
  createDoc('工具/Gradle/gradle', '简介'),
  gradlePart
]


// Docker
const dockerPart = new Category('Docker入门')
.setNoLabelItem('工具/Docker/Docker入门', [
  'Docker基础',
  'Docker镜像命令',
  'Docker容器命令',
  'Docker数据持久化',
  'DockerFile',
  'Docker通用命令'
])

// Docker CLI
const dockerCliPart = new Category('Docker CLI')
.setNoLabelItem('工具/Docker/Command/Docker-CLI', [
  'docker-build'
])


const dockerSideBar = [
  createDoc('工具/Docker/docker', '简介'),
  dockerCliPart,
  dockerPart
]

const sidebars = {
  basicSideBar,
  linuxSideBar,
  sourceSideBar,
  springSideBar,
  springCloudSideBar,
  netWorkSidebar,
  mysqlSideBar,
  vueSideBar,
  dataStructureSidebar,
  leetCodeSidebar,
  jvmSideBar,
  myCatSideBar,
  gradleSideBar,
  distributeSiderBar,
  OSSiderBar,
  dockerSideBar
}

module.exports = sidebars;
