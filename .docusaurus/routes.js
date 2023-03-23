import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c5d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '495'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b7a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b6d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'dc7'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2fe'),
    exact: true
  },
  {
    path: '/blog/aliSeata',
    component: ComponentCreator('/blog/aliSeata', '5f1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a54'),
    exact: true
  },
  {
    path: '/blog/gotConcurrencyAli',
    component: ComponentCreator('/blog/gotConcurrencyAli', '941'),
    exact: true
  },
  {
    path: '/blog/internal-navigation',
    component: ComponentCreator('/blog/internal-navigation', '13b'),
    exact: true
  },
  {
    path: '/blog/juejinPost',
    component: ComponentCreator('/blog/juejinPost', 'c6b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'caa'),
    exact: true
  },
  {
    path: '/blog/tags/alibaba',
    component: ComponentCreator('/blog/tags/alibaba', '9c6'),
    exact: true
  },
  {
    path: '/blog/tags/分享',
    component: ComponentCreator('/blog/tags/分享', '80a'),
    exact: true
  },
  {
    path: '/blog/tags/学习',
    component: ComponentCreator('/blog/tags/学习', '105'),
    exact: true
  },
  {
    path: '/blog/tags/掘金',
    component: ComponentCreator('/blog/tags/掘金', 'ecf'),
    exact: true
  },
  {
    path: '/blog/tags/高并发',
    component: ComponentCreator('/blog/tags/高并发', 'b3e'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '1fe'),
    exact: true
  },
  {
    path: '/website/BE/',
    component: ComponentCreator('/website/BE/', '14d'),
    exact: true
  },
  {
    path: '/website/COM/',
    component: ComponentCreator('/website/COM/', 'b17'),
    exact: true
  },
  {
    path: '/website/FE/',
    component: ComponentCreator('/website/FE/', '539'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c2c'),
    routes: [
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about', '0b0'),
        exact: true
      },
      {
        path: '/docs/category/docker-cli',
        component: ComponentCreator('/docs/category/docker-cli', '92e'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/category/docker-手册',
        component: ComponentCreator('/docs/category/docker-手册', '06c'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/category/docker-指南',
        component: ComponentCreator('/docs/category/docker-指南', '3db'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/category/docker入门',
        component: ComponentCreator('/docs/category/docker入门', '8eb'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/category/gradle',
        component: ComponentCreator('/docs/category/gradle', '8de'),
        exact: true,
        sidebar: "gradle"
      },
      {
        path: '/docs/category/jvm优化',
        component: ComponentCreator('/docs/category/jvm优化', 'f51'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/category/mycat',
        component: ComponentCreator('/docs/category/mycat', 'b78'),
        exact: true,
        sidebar: "mycat"
      },
      {
        path: '/docs/category/mysql基础与高级',
        component: ComponentCreator('/docs/category/mysql基础与高级', '79e'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/spring5',
        component: ComponentCreator('/docs/category/spring5', '8ec'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/category/springcloud-alibaba',
        component: ComponentCreator('/docs/category/springcloud-alibaba', 'aad'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/category/springcloud-netflix',
        component: ComponentCreator('/docs/category/springcloud-netflix', 'a5e'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/category/spring基础',
        component: ComponentCreator('/docs/category/spring基础', '41d'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/category/spring注解',
        component: ComponentCreator('/docs/category/spring注解', 'a1f'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/category/spring编程思想',
        component: ComponentCreator('/docs/category/spring编程思想', '0c8'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/category/spring进阶',
        component: ComponentCreator('/docs/category/spring进阶', '784'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/category/tcpip',
        component: ComponentCreator('/docs/category/tcpip', 'ab0'),
        exact: true,
        sidebar: "netWork"
      },
      {
        path: '/docs/category/vue基础',
        component: ComponentCreator('/docs/category/vue基础', '676'),
        exact: true,
        sidebar: "vue"
      },
      {
        path: '/docs/category/vue学习笔记',
        component: ComponentCreator('/docs/category/vue学习笔记', '99f'),
        exact: true,
        sidebar: "vue"
      },
      {
        path: '/docs/category/一致性算法',
        component: ComponentCreator('/docs/category/一致性算法', 'f6b'),
        exact: true,
        sidebar: "distribute"
      },
      {
        path: '/docs/category/事务与锁',
        component: ComponentCreator('/docs/category/事务与锁', 'dda'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/内存与垃圾回收',
        component: ComponentCreator('/docs/category/内存与垃圾回收', 'ffe'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/category/分布式算法',
        component: ComponentCreator('/docs/category/分布式算法', '2c4'),
        exact: true,
        sidebar: "distribute"
      },
      {
        path: '/docs/category/动漫分享',
        component: ComponentCreator('/docs/category/动漫分享', 'b28'),
        exact: true,
        sidebar: "share"
      },
      {
        path: '/docs/category/基础',
        component: ComponentCreator('/docs/category/基础', 'fa2'),
        exact: true,
        sidebar: "gradle"
      },
      {
        path: '/docs/category/基础知识',
        component: ComponentCreator('/docs/category/基础知识', '5d4'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/基础知识-1',
        component: ComponentCreator('/docs/category/基础知识-1', 'c4e'),
        exact: true,
        sidebar: "mycat"
      },
      {
        path: '/docs/category/基础知识-2',
        component: ComponentCreator('/docs/category/基础知识-2', '522'),
        exact: true,
        sidebar: "dataStruct"
      },
      {
        path: '/docs/category/存储结构与索引',
        component: ComponentCreator('/docs/category/存储结构与索引', 'fb0'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/并发基础',
        component: ComponentCreator('/docs/category/并发基础', 'c65'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/category/并发安全',
        component: ComponentCreator('/docs/category/并发安全', 'cbd'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/category/并发控制',
        component: ComponentCreator('/docs/category/并发控制', '915'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/category/微服务基础',
        component: ComponentCreator('/docs/category/微服务基础', '53f'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/category/性能优化',
        component: ComponentCreator('/docs/category/性能优化', 'aef'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/性能分析工具',
        component: ComponentCreator('/docs/category/性能分析工具', 'ea0'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/性能监控和调优入门',
        component: ComponentCreator('/docs/category/性能监控和调优入门', 'add'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/category/操作系统概念',
        component: ComponentCreator('/docs/category/操作系统概念', 'baf'),
        exact: true,
        sidebar: "os"
      },
      {
        path: '/docs/category/数据库管理',
        component: ComponentCreator('/docs/category/数据库管理', 'a58'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/数据结构与算法基础',
        component: ComponentCreator('/docs/category/数据结构与算法基础', '11a'),
        exact: true,
        sidebar: "dataStruct"
      },
      {
        path: '/docs/category/构建',
        component: ComponentCreator('/docs/category/构建', '877'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/category/架构与引擎',
        component: ComponentCreator('/docs/category/架构与引擎', '088'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/category/理解jvm',
        component: ComponentCreator('/docs/category/理解jvm', 'd61'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/category/运维',
        component: ComponentCreator('/docs/category/运维', 'e3a'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/currency',
        component: ComponentCreator('/docs/currency', '097'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/dataStructure',
        component: ComponentCreator('/docs/dataStructure', 'ec0'),
        exact: true,
        sidebar: "dataStruct"
      },
      {
        path: '/docs/distribute/basicTech',
        component: ComponentCreator('/docs/distribute/basicTech', '72c'),
        exact: true
      },
      {
        path: '/docs/distribute/protol',
        component: ComponentCreator('/docs/distribute/protol', 'd40'),
        exact: true,
        sidebar: "distribute"
      },
      {
        path: '/docs/docker',
        component: ComponentCreator('/docs/docker', '1ad'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/FeThird',
        component: ComponentCreator('/docs/FeThird', 'a4c'),
        exact: true
      },
      {
        path: '/docs/front/Vue',
        component: ComponentCreator('/docs/front/Vue', 'b36'),
        exact: true,
        sidebar: "vue"
      },
      {
        path: '/docs/gradle',
        component: ComponentCreator('/docs/gradle', '115'),
        exact: true,
        sidebar: "gradle"
      },
      {
        path: '/docs/JVM',
        component: ComponentCreator('/docs/JVM', '755'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/JVM/内存与垃圾回收/JVM-Intro',
        component: ComponentCreator('/docs/JVM/内存与垃圾回收/JVM-Intro', '2d9'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/JVM/内存与垃圾回收/类加载子系统',
        component: ComponentCreator('/docs/JVM/内存与垃圾回收/类加载子系统', '75d'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/JVM/内存与垃圾回收/运行时数据区',
        component: ComponentCreator('/docs/JVM/内存与垃圾回收/运行时数据区', '7f7'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/JVM/性能监控和调优入门/基于JDK命令行工具的监控',
        component: ComponentCreator('/docs/JVM/性能监控和调优入门/基于JDK命令行工具的监控', 'e78'),
        exact: true,
        sidebar: "jvm"
      },
      {
        path: '/docs/leetCode',
        component: ComponentCreator('/docs/leetCode', 'e93'),
        exact: true,
        sidebar: "leetCode"
      },
      {
        path: '/docs/LeetCode刷题笔记/illustrationOfAlgorithm',
        component: ComponentCreator('/docs/LeetCode刷题笔记/illustrationOfAlgorithm', '012'),
        exact: true,
        sidebar: "leetCode"
      },
      {
        path: '/docs/linuxCommand',
        component: ComponentCreator('/docs/linuxCommand', '896'),
        exact: true,
        sidebar: "linux"
      },
      {
        path: '/docs/middleware/basicMiddleware',
        component: ComponentCreator('/docs/middleware/basicMiddleware', '924'),
        exact: true
      },
      {
        path: '/docs/middleware/cache',
        component: ComponentCreator('/docs/middleware/cache', '194'),
        exact: true
      },
      {
        path: '/docs/middleware/database',
        component: ComponentCreator('/docs/middleware/database', '8a6'),
        exact: true,
        sidebar: "mycat"
      },
      {
        path: '/docs/middleware/job',
        component: ComponentCreator('/docs/middleware/job', 'bc7'),
        exact: true
      },
      {
        path: '/docs/middleware/messageQueue',
        component: ComponentCreator('/docs/middleware/messageQueue', '1ad'),
        exact: true
      },
      {
        path: '/docs/middleware/searchEngine',
        component: ComponentCreator('/docs/middleware/searchEngine', 'fb2'),
        exact: true
      },
      {
        path: '/docs/MyCat',
        component: ComponentCreator('/docs/MyCat', '179'),
        exact: true
      },
      {
        path: '/docs/mysql',
        component: ComponentCreator('/docs/mysql', 'ad4'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/MySQL参数与命令',
        component: ComponentCreator('/docs/Mysql/MySQL参数与命令', '2bf'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/基础/MySQL函数与聚合',
        component: ComponentCreator('/docs/Mysql/基础/MySQL函数与聚合', '769'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/基础/MySQL基础查询',
        component: ComponentCreator('/docs/Mysql/基础/MySQL基础查询', 'e90'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/基础/MySQL子查询',
        component: ComponentCreator('/docs/Mysql/基础/MySQL子查询', 'edd'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/基础/MySQL库对象',
        component: ComponentCreator('/docs/Mysql/基础/MySQL库对象', '4ef'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/Explain',
        component: ComponentCreator('/docs/Mysql/高级特性/Explain', 'd26'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/InnoDB数据页结构',
        component: ComponentCreator('/docs/Mysql/高级特性/InnoDB数据页结构', '2c0'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/InnoDB表空间',
        component: ComponentCreator('/docs/Mysql/高级特性/InnoDB表空间', 'f47'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/MVCC',
        component: ComponentCreator('/docs/Mysql/高级特性/MVCC', '64e'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/MySQL 部署',
        component: ComponentCreator('/docs/Mysql/高级特性/MySQL 部署', 'ae7'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/MySQL逻辑架构',
        component: ComponentCreator('/docs/Mysql/高级特性/MySQL逻辑架构', 'f03'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/Redo日志',
        component: ComponentCreator('/docs/Mysql/高级特性/Redo日志', '903'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/Undo日志',
        component: ComponentCreator('/docs/Mysql/高级特性/Undo日志', '121'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/主从复制',
        component: ComponentCreator('/docs/Mysql/高级特性/主从复制', 'ba7'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/事务基础',
        component: ComponentCreator('/docs/Mysql/高级特性/事务基础', 'ade'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/其他日志',
        component: ComponentCreator('/docs/Mysql/高级特性/其他日志', 'a8c'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/基本分析工具',
        component: ComponentCreator('/docs/Mysql/高级特性/基本分析工具', '270'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/性能监控工具',
        component: ComponentCreator('/docs/Mysql/高级特性/性能监控工具', 'e3c'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/数据库其他调优策略',
        component: ComponentCreator('/docs/Mysql/高级特性/数据库其他调优策略', '0d8'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/数据库设计规范',
        component: ComponentCreator('/docs/Mysql/高级特性/数据库设计规范', '692'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/用户权限管理',
        component: ComponentCreator('/docs/Mysql/高级特性/用户权限管理', 'c5d'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/索引',
        component: ComponentCreator('/docs/Mysql/高级特性/索引', 'fe4'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/索引与查询优化',
        component: ComponentCreator('/docs/Mysql/高级特性/索引与查询优化', '7b2'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/索引的应用',
        component: ComponentCreator('/docs/Mysql/高级特性/索引的应用', 'd1a'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/缓冲池',
        component: ComponentCreator('/docs/Mysql/高级特性/缓冲池', '927'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/设计索引',
        component: ComponentCreator('/docs/Mysql/高级特性/设计索引', '668'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/Mysql/高级特性/锁',
        component: ComponentCreator('/docs/Mysql/高级特性/锁', '427'),
        exact: true,
        sidebar: "mysql"
      },
      {
        path: '/docs/networrk-basic',
        component: ComponentCreator('/docs/networrk-basic', '0c3'),
        exact: true,
        sidebar: "netWork"
      },
      {
        path: '/docs/OS',
        component: ComponentCreator('/docs/OS', '686'),
        exact: true,
        sidebar: "os"
      },
      {
        path: '/docs/source/acg/acgShare_2022',
        component: ComponentCreator('/docs/source/acg/acgShare_2022', 'ed8'),
        exact: true,
        sidebar: "share"
      },
      {
        path: '/docs/source/devSource',
        component: ComponentCreator('/docs/source/devSource', '74a'),
        exact: true,
        sidebar: "share"
      },
      {
        path: '/docs/spring',
        component: ComponentCreator('/docs/spring', 'cc7'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/Spring5/IOC容器',
        component: ComponentCreator('/docs/Spring/Spring5/IOC容器', '02e'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/Spring编程思想/Bean',
        component: ComponentCreator('/docs/Spring/Spring编程思想/Bean', '25f'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/Spring编程思想/IOC容器',
        component: ComponentCreator('/docs/Spring/Spring编程思想/IOC容器', '431'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/Spring编程思想/依赖查找',
        component: ComponentCreator('/docs/Spring/Spring编程思想/依赖查找', '4c1'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/Spring编程思想/依赖注入',
        component: ComponentCreator('/docs/Spring/Spring编程思想/依赖注入', 'c37'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/Spring编程思想/基础知识',
        component: ComponentCreator('/docs/Spring/Spring编程思想/基础知识', '017'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/Spring/注解驱动开发/组件注册',
        component: ComponentCreator('/docs/Spring/注解驱动开发/组件注册', '7f7'),
        exact: true,
        sidebar: "spring"
      },
      {
        path: '/docs/springCloud',
        component: ComponentCreator('/docs/springCloud', '5e6'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Alibaba/Nacos',
        component: ComponentCreator('/docs/SpringCloud/Alibaba/Nacos', '303'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Alibaba/Sentinel',
        component: ComponentCreator('/docs/SpringCloud/Alibaba/Sentinel', 'e27'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/Bus',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Bus', '101'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/Config',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Config', '354'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/eureka_config',
        component: ComponentCreator('/docs/SpringCloud/Netflix/eureka_config', 'cad'),
        exact: true
      },
      {
        path: '/docs/SpringCloud/Netflix/Eureka&Consul',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Eureka&Consul', 'ecf'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/GateWay',
        component: ComponentCreator('/docs/SpringCloud/Netflix/GateWay', '921'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/Hystrix',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Hystrix', 'aca'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/OpenFeign',
        component: ComponentCreator('/docs/SpringCloud/Netflix/OpenFeign', '5ce'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/Ribbon',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Ribbon', '081'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/Sleuth',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Sleuth', '131'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/Netflix/Stream',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Stream', 'e22'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/SpringCloud/微服务技术栈',
        component: ComponentCreator('/docs/SpringCloud/微服务技术栈', '198'),
        exact: true,
        sidebar: "springCloud"
      },
      {
        path: '/docs/中间件/数据库/MyCat/基础/MyCat基础',
        component: ComponentCreator('/docs/中间件/数据库/MyCat/基础/MyCat基础', 'e5b'),
        exact: true,
        sidebar: "mycat"
      },
      {
        path: '/docs/分布式/分布式理论/分布式一致性算法/paxos',
        component: ComponentCreator('/docs/分布式/分布式理论/分布式一致性算法/paxos', 'a72'),
        exact: true,
        sidebar: "distribute"
      },
      {
        path: '/docs/前端/Vue/基础特性',
        component: ComponentCreator('/docs/前端/Vue/基础特性', 'a1e'),
        exact: true,
        sidebar: "vue"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Dockerfile',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Dockerfile', 'd0e'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker基础',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker基础', '682'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker容器命令',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker容器命令', 'bf1'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker工具',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker工具', '8a4'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker数据持久化',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker数据持久化', '4d9'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker网络',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker网络', '1fa'),
        exact: true
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker通用命令',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker通用命令', 'fe5'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker镜像命令',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker镜像命令', 'f35'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Manuals/docker-build/about',
        component: ComponentCreator('/docs/工具/Docker/Manuals/docker-build/about', 'b15'),
        exact: true
      },
      {
        path: '/docs/工具/Docker/Manuals/docker-build/build-cache',
        component: ComponentCreator('/docs/工具/Docker/Manuals/docker-build/build-cache', '572'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Manuals/docker-engine/about',
        component: ComponentCreator('/docs/工具/Docker/Manuals/docker-engine/about', 'e44'),
        exact: true
      },
      {
        path: '/docs/工具/Docker/Reference/command-line/daemon-cli',
        component: ComponentCreator('/docs/工具/Docker/Reference/command-line/daemon-cli', '5d2'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Docker/Reference/command-line/docker-cli/docker-build',
        component: ComponentCreator('/docs/工具/Docker/Reference/command-line/docker-cli/docker-build', 'f91'),
        exact: true,
        sidebar: "docker"
      },
      {
        path: '/docs/工具/Gradle/基础/Gradle基础',
        component: ComponentCreator('/docs/工具/Gradle/基础/Gradle基础', '31e'),
        exact: true,
        sidebar: "gradle"
      },
      {
        path: '/docs/并发编程/juc基础',
        component: ComponentCreator('/docs/并发编程/juc基础', '37e'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发安全/dead_lock',
        component: ComponentCreator('/docs/并发编程/并发安全/dead_lock', '15e'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发安全/jmm',
        component: ComponentCreator('/docs/并发编程/并发安全/jmm', 'ce4'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发安全/volatile',
        component: ComponentCreator('/docs/并发编程/并发安全/volatile', 'a25'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发安全/线程安全',
        component: ComponentCreator('/docs/并发编程/并发安全/线程安全', 'ab2'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/AQS',
        component: ComponentCreator('/docs/并发编程/并发控制/AQS', 'b7e'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/Atomic&CAS',
        component: ComponentCreator('/docs/并发编程/并发控制/Atomic&CAS', '45d'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/final',
        component: ComponentCreator('/docs/并发编程/并发控制/final', 'ea6'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/FutureTask',
        component: ComponentCreator('/docs/并发编程/并发控制/FutureTask', '331'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/Lock锁',
        component: ComponentCreator('/docs/并发编程/并发控制/Lock锁', 'd8c'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/ThreadLocal',
        component: ComponentCreator('/docs/并发编程/并发控制/ThreadLocal', 'e66'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/并发集合与阻塞队列',
        component: ComponentCreator('/docs/并发编程/并发控制/并发集合与阻塞队列', '656'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/线程协作',
        component: ComponentCreator('/docs/并发编程/并发控制/线程协作', '10a'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/线程池',
        component: ComponentCreator('/docs/并发编程/并发控制/线程池', 'fdb'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/并发编程/并发控制/缓存实战',
        component: ComponentCreator('/docs/并发编程/并发控制/缓存实战', '52d'),
        exact: true,
        sidebar: "concurrency"
      },
      {
        path: '/docs/操作系统/操作系统概念/OSBaisc',
        component: ComponentCreator('/docs/操作系统/操作系统概念/OSBaisc', '101'),
        exact: true,
        sidebar: "os"
      },
      {
        path: '/docs/数据结构与算法/基础/前提基础知识',
        component: ComponentCreator('/docs/数据结构与算法/基础/前提基础知识', '0db'),
        exact: true,
        sidebar: "dataStruct"
      },
      {
        path: '/docs/计算机网络/HTTP/http-protocol',
        component: ComponentCreator('/docs/计算机网络/HTTP/http-protocol', 'd4b'),
        exact: true,
        sidebar: "netWork"
      },
      {
        path: '/docs/计算机网络/TCP-IP/net-basic',
        component: ComponentCreator('/docs/计算机网络/TCP-IP/net-basic', 'a2d'),
        exact: true,
        sidebar: "netWork"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ed4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
