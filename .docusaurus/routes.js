import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'bd8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '780'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cb1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '92e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'eb0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '528'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '02e'),
    exact: true
  },
  {
    path: '/blog/aliSeata',
    component: ComponentCreator('/blog/aliSeata', 'e27'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3ee'),
    exact: true
  },
  {
    path: '/blog/gotConcurrencyAli',
    component: ComponentCreator('/blog/gotConcurrencyAli', '1bd'),
    exact: true
  },
  {
    path: '/blog/internal-navigation',
    component: ComponentCreator('/blog/internal-navigation', 'c25'),
    exact: true
  },
  {
    path: '/blog/juejinPost',
    component: ComponentCreator('/blog/juejinPost', '148'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '963'),
    exact: true
  },
  {
    path: '/blog/tags/分享',
    component: ComponentCreator('/blog/tags/分享', '4b3'),
    exact: true
  },
  {
    path: '/blog/tags/高并发',
    component: ComponentCreator('/blog/tags/高并发', '3b8'),
    exact: true
  },
  {
    path: '/blog/tags/掘金',
    component: ComponentCreator('/blog/tags/掘金', 'b13'),
    exact: true
  },
  {
    path: '/blog/tags/学习',
    component: ComponentCreator('/blog/tags/学习', '16b'),
    exact: true
  },
  {
    path: '/blog/tags/alibaba',
    component: ComponentCreator('/blog/tags/alibaba', '738'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '60c'),
    exact: true
  },
  {
    path: '/website/BE/',
    component: ComponentCreator('/website/BE/', '39b'),
    exact: true
  },
  {
    path: '/website/COM/',
    component: ComponentCreator('/website/COM/', '684'),
    exact: true
  },
  {
    path: '/website/FE/',
    component: ComponentCreator('/website/FE/', '313'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd1a'),
    routes: [
      {
        path: '/docs/并发编程/并发安全/线程安全',
        component: ComponentCreator('/docs/并发编程/并发安全/线程安全', 'ab9'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发安全/dead_lock',
        component: ComponentCreator('/docs/并发编程/并发安全/dead_lock', '345'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发安全/jmm',
        component: ComponentCreator('/docs/并发编程/并发安全/jmm', '857'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发安全/volatile',
        component: ComponentCreator('/docs/并发编程/并发安全/volatile', 'f25'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/并发集合与阻塞队列',
        component: ComponentCreator('/docs/并发编程/并发控制/并发集合与阻塞队列', 'd29'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/缓存实战',
        component: ComponentCreator('/docs/并发编程/并发控制/缓存实战', '03d'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/线程池',
        component: ComponentCreator('/docs/并发编程/并发控制/线程池', '525'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/线程协作',
        component: ComponentCreator('/docs/并发编程/并发控制/线程协作', 'e5f'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/AQS',
        component: ComponentCreator('/docs/并发编程/并发控制/AQS', 'cd0'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/Atomic&CAS',
        component: ComponentCreator('/docs/并发编程/并发控制/Atomic&CAS', '290'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/final',
        component: ComponentCreator('/docs/并发编程/并发控制/final', 'e45'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/FutureTask',
        component: ComponentCreator('/docs/并发编程/并发控制/FutureTask', '7ee'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/Lock锁',
        component: ComponentCreator('/docs/并发编程/并发控制/Lock锁', '06e'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/ThreadLocal',
        component: ComponentCreator('/docs/并发编程/并发控制/ThreadLocal', '70a'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/并发编程/juc基础',
        component: ComponentCreator('/docs/并发编程/juc基础', '0b3'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/操作系统/操作系统概念/OSBaisc',
        component: ComponentCreator('/docs/操作系统/操作系统概念/OSBaisc', '499'),
        exact: true,
        sidebar: "OSSiderBar"
      },
      {
        path: '/docs/分布式/分布式理论/分布式一致性算法/paxos',
        component: ComponentCreator('/docs/分布式/分布式理论/分布式一致性算法/paxos', 'acf'),
        exact: true,
        sidebar: "distributeSiderBar"
      },
      {
        path: '/docs/工具/Docker/Command/Docker-CLI/docker-build',
        component: ComponentCreator('/docs/工具/Docker/Command/Docker-CLI/docker-build', '15c'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker基础',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker基础', '69b'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker镜像命令',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker镜像命令', '979'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker容器命令',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker容器命令', '902'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker数据持久化',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker数据持久化', '32b'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Docker/Docker入门/Docker通用命令',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/Docker通用命令', '817'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Docker/Docker入门/DockerFile',
        component: ComponentCreator('/docs/工具/Docker/Docker入门/DockerFile', '5ce'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/工具/Gradle/基础/Gradle基础',
        component: ComponentCreator('/docs/工具/Gradle/基础/Gradle基础', '903'),
        exact: true,
        sidebar: "gradleSideBar"
      },
      {
        path: '/docs/计算机网络/HTTP/http-protocol',
        component: ComponentCreator('/docs/计算机网络/HTTP/http-protocol', '394'),
        exact: true,
        sidebar: "netWorkSidebar"
      },
      {
        path: '/docs/计算机网络/TCP-IP/net-basic',
        component: ComponentCreator('/docs/计算机网络/TCP-IP/net-basic', '27f'),
        exact: true,
        sidebar: "netWorkSidebar"
      },
      {
        path: '/docs/前端/Vue/基础特性',
        component: ComponentCreator('/docs/前端/Vue/基础特性', '581'),
        exact: true,
        sidebar: "vueSideBar"
      },
      {
        path: '/docs/数据结构与算法/基础/前提基础知识',
        component: ComponentCreator('/docs/数据结构与算法/基础/前提基础知识', 'c96'),
        exact: true,
        sidebar: "dataStructureSidebar"
      },
      {
        path: '/docs/中间件/数据库/MyCat/基础/MyCat基础',
        component: ComponentCreator('/docs/中间件/数据库/MyCat/基础/MyCat基础', 'e05'),
        exact: true,
        sidebar: "myCatSideBar"
      },
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about', '0b0'),
        exact: true
      },
      {
        path: '/docs/category/并发安全',
        component: ComponentCreator('/docs/category/并发安全', '95c'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/category/并发基础',
        component: ComponentCreator('/docs/category/并发基础', '064'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/category/并发控制',
        component: ComponentCreator('/docs/category/并发控制', '13b'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/category/操作系统概念',
        component: ComponentCreator('/docs/category/操作系统概念', 'b0b'),
        exact: true,
        sidebar: "OSSiderBar"
      },
      {
        path: '/docs/category/存储结构与索引',
        component: ComponentCreator('/docs/category/存储结构与索引', 'db3'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/动漫分享',
        component: ComponentCreator('/docs/category/动漫分享', '22d'),
        exact: true,
        sidebar: "sourceSideBar"
      },
      {
        path: '/docs/category/分布式算法',
        component: ComponentCreator('/docs/category/分布式算法', '65a'),
        exact: true,
        sidebar: "distributeSiderBar"
      },
      {
        path: '/docs/category/基础',
        component: ComponentCreator('/docs/category/基础', '26d'),
        exact: true,
        sidebar: "gradleSideBar"
      },
      {
        path: '/docs/category/基础知识',
        component: ComponentCreator('/docs/category/基础知识', '2ef'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/基础知识-1',
        component: ComponentCreator('/docs/category/基础知识-1', 'c75'),
        exact: true,
        sidebar: "dataStructureSidebar"
      },
      {
        path: '/docs/category/基础知识-2',
        component: ComponentCreator('/docs/category/基础知识-2', '9b1'),
        exact: true,
        sidebar: "myCatSideBar"
      },
      {
        path: '/docs/category/架构与引擎',
        component: ComponentCreator('/docs/category/架构与引擎', '0bb'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/理解jvm',
        component: ComponentCreator('/docs/category/理解jvm', '2b3'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/category/内存与垃圾回收',
        component: ComponentCreator('/docs/category/内存与垃圾回收', '47a'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/category/事务与锁',
        component: ComponentCreator('/docs/category/事务与锁', '8ff'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/数据结构与算法基础',
        component: ComponentCreator('/docs/category/数据结构与算法基础', 'a36'),
        exact: true,
        sidebar: "dataStructureSidebar"
      },
      {
        path: '/docs/category/数据库管理',
        component: ComponentCreator('/docs/category/数据库管理', '4c5'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/微服务基础',
        component: ComponentCreator('/docs/category/微服务基础', '40f'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/category/性能分析工具',
        component: ComponentCreator('/docs/category/性能分析工具', 'a23'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/性能监控和调优入门',
        component: ComponentCreator('/docs/category/性能监控和调优入门', '150'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/category/性能优化',
        component: ComponentCreator('/docs/category/性能优化', '3ba'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/一致性算法',
        component: ComponentCreator('/docs/category/一致性算法', 'e5f'),
        exact: true,
        sidebar: "distributeSiderBar"
      },
      {
        path: '/docs/category/运维',
        component: ComponentCreator('/docs/category/运维', '8a8'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/docker-cli',
        component: ComponentCreator('/docs/category/docker-cli', 'f06'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/category/docker入门',
        component: ComponentCreator('/docs/category/docker入门', 'ef5'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/category/gradle',
        component: ComponentCreator('/docs/category/gradle', 'c67'),
        exact: true,
        sidebar: "gradleSideBar"
      },
      {
        path: '/docs/category/jvm优化',
        component: ComponentCreator('/docs/category/jvm优化', '788'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/category/mycat',
        component: ComponentCreator('/docs/category/mycat', 'd92'),
        exact: true,
        sidebar: "myCatSideBar"
      },
      {
        path: '/docs/category/mysql基础与高级',
        component: ComponentCreator('/docs/category/mysql基础与高级', '700'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/category/spring5',
        component: ComponentCreator('/docs/category/spring5', '6d7'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/category/spring编程思想',
        component: ComponentCreator('/docs/category/spring编程思想', 'ab2'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/category/spring基础',
        component: ComponentCreator('/docs/category/spring基础', '0a2'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/category/spring进阶',
        component: ComponentCreator('/docs/category/spring进阶', '2f6'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/category/spring注解',
        component: ComponentCreator('/docs/category/spring注解', '7e2'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/category/springcloud-alibaba',
        component: ComponentCreator('/docs/category/springcloud-alibaba', '8d2'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/category/springcloud-netflix',
        component: ComponentCreator('/docs/category/springcloud-netflix', '1f8'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/category/tcpip',
        component: ComponentCreator('/docs/category/tcpip', '987'),
        exact: true,
        sidebar: "netWorkSidebar"
      },
      {
        path: '/docs/category/vue基础',
        component: ComponentCreator('/docs/category/vue基础', '68c'),
        exact: true,
        sidebar: "vueSideBar"
      },
      {
        path: '/docs/category/vue学习笔记',
        component: ComponentCreator('/docs/category/vue学习笔记', 'b30'),
        exact: true,
        sidebar: "vueSideBar"
      },
      {
        path: '/docs/currency',
        component: ComponentCreator('/docs/currency', '102'),
        exact: true,
        sidebar: "basicSideBar"
      },
      {
        path: '/docs/dataStructure',
        component: ComponentCreator('/docs/dataStructure', 'f02'),
        exact: true,
        sidebar: "dataStructureSidebar"
      },
      {
        path: '/docs/distribute/basicTech',
        component: ComponentCreator('/docs/distribute/basicTech', '72c'),
        exact: true
      },
      {
        path: '/docs/distribute/protol',
        component: ComponentCreator('/docs/distribute/protol', 'ec4'),
        exact: true,
        sidebar: "distributeSiderBar"
      },
      {
        path: '/docs/docker',
        component: ComponentCreator('/docs/docker', '597'),
        exact: true,
        sidebar: "dockerSideBar"
      },
      {
        path: '/docs/FeThird',
        component: ComponentCreator('/docs/FeThird', 'a4c'),
        exact: true
      },
      {
        path: '/docs/front/Vue',
        component: ComponentCreator('/docs/front/Vue', 'a4d'),
        exact: true,
        sidebar: "vueSideBar"
      },
      {
        path: '/docs/gradle',
        component: ComponentCreator('/docs/gradle', '1d9'),
        exact: true,
        sidebar: "gradleSideBar"
      },
      {
        path: '/docs/JVM',
        component: ComponentCreator('/docs/JVM', 'a24'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/JVM/内存与垃圾回收/类加载子系统',
        component: ComponentCreator('/docs/JVM/内存与垃圾回收/类加载子系统', '820'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/JVM/内存与垃圾回收/运行时数据区',
        component: ComponentCreator('/docs/JVM/内存与垃圾回收/运行时数据区', '921'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/JVM/内存与垃圾回收/JVM-Intro',
        component: ComponentCreator('/docs/JVM/内存与垃圾回收/JVM-Intro', 'e68'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/JVM/性能监控和调优入门/基于JDK命令行工具的监控',
        component: ComponentCreator('/docs/JVM/性能监控和调优入门/基于JDK命令行工具的监控', '1fd'),
        exact: true,
        sidebar: "jvmSideBar"
      },
      {
        path: '/docs/leetCode',
        component: ComponentCreator('/docs/leetCode', '3cf'),
        exact: true,
        sidebar: "leetCodeSidebar"
      },
      {
        path: '/docs/LeetCode刷题笔记/illustrationOfAlgorithm',
        component: ComponentCreator('/docs/LeetCode刷题笔记/illustrationOfAlgorithm', 'd37'),
        exact: true,
        sidebar: "leetCodeSidebar"
      },
      {
        path: '/docs/linuxCommand',
        component: ComponentCreator('/docs/linuxCommand', 'ecb'),
        exact: true,
        sidebar: "linuxSideBar"
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
        component: ComponentCreator('/docs/middleware/database', '494'),
        exact: true,
        sidebar: "myCatSideBar"
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
        component: ComponentCreator('/docs/mysql', 'a05'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/缓冲池',
        component: ComponentCreator('/docs/Mysql/高级特性/缓冲池', '7e3'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/基本分析工具',
        component: ComponentCreator('/docs/Mysql/高级特性/基本分析工具', '724'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/其他日志',
        component: ComponentCreator('/docs/Mysql/高级特性/其他日志', 'b2d'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/设计索引',
        component: ComponentCreator('/docs/Mysql/高级特性/设计索引', 'd16'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/事务基础',
        component: ComponentCreator('/docs/Mysql/高级特性/事务基础', '966'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/数据库其他调优策略',
        component: ComponentCreator('/docs/Mysql/高级特性/数据库其他调优策略', 'ef6'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/数据库设计规范',
        component: ComponentCreator('/docs/Mysql/高级特性/数据库设计规范', 'ecd'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/索引',
        component: ComponentCreator('/docs/Mysql/高级特性/索引', 'f13'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/索引的应用',
        component: ComponentCreator('/docs/Mysql/高级特性/索引的应用', '933'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/索引与查询优化',
        component: ComponentCreator('/docs/Mysql/高级特性/索引与查询优化', 'bb0'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/锁',
        component: ComponentCreator('/docs/Mysql/高级特性/锁', 'bd7'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/性能监控工具',
        component: ComponentCreator('/docs/Mysql/高级特性/性能监控工具', 'daf'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/用户权限管理',
        component: ComponentCreator('/docs/Mysql/高级特性/用户权限管理', '5a2'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/主从复制',
        component: ComponentCreator('/docs/Mysql/高级特性/主从复制', 'e5b'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/Explain',
        component: ComponentCreator('/docs/Mysql/高级特性/Explain', 'd0e'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/InnoDB表空间',
        component: ComponentCreator('/docs/Mysql/高级特性/InnoDB表空间', 'bb9'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/InnoDB数据页结构',
        component: ComponentCreator('/docs/Mysql/高级特性/InnoDB数据页结构', '0f3'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/MVCC',
        component: ComponentCreator('/docs/Mysql/高级特性/MVCC', '610'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/MySQL 部署',
        component: ComponentCreator('/docs/Mysql/高级特性/MySQL 部署', '04f'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/MySQL逻辑架构',
        component: ComponentCreator('/docs/Mysql/高级特性/MySQL逻辑架构', '161'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/Redo日志',
        component: ComponentCreator('/docs/Mysql/高级特性/Redo日志', '6f3'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/Undo日志',
        component: ComponentCreator('/docs/Mysql/高级特性/Undo日志', '863'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL函数与聚合',
        component: ComponentCreator('/docs/Mysql/基础/MySQL函数与聚合', '91e'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL基础查询',
        component: ComponentCreator('/docs/Mysql/基础/MySQL基础查询', '949'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL库对象',
        component: ComponentCreator('/docs/Mysql/基础/MySQL库对象', '400'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL子查询',
        component: ComponentCreator('/docs/Mysql/基础/MySQL子查询', '63b'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/MySQL参数与命令',
        component: ComponentCreator('/docs/Mysql/MySQL参数与命令', '98b'),
        exact: true,
        sidebar: "mysqlSideBar"
      },
      {
        path: '/docs/networrk-basic',
        component: ComponentCreator('/docs/networrk-basic', 'b98'),
        exact: true,
        sidebar: "netWorkSidebar"
      },
      {
        path: '/docs/OS',
        component: ComponentCreator('/docs/OS', '039'),
        exact: true,
        sidebar: "OSSiderBar"
      },
      {
        path: '/docs/source/acg/acgShare_2022',
        component: ComponentCreator('/docs/source/acg/acgShare_2022', 'c01'),
        exact: true,
        sidebar: "sourceSideBar"
      },
      {
        path: '/docs/source/devSource',
        component: ComponentCreator('/docs/source/devSource', 'd6c'),
        exact: true,
        sidebar: "sourceSideBar"
      },
      {
        path: '/docs/spring',
        component: ComponentCreator('/docs/spring', 'a62'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/注解驱动开发/组件注册',
        component: ComponentCreator('/docs/Spring/注解驱动开发/组件注册', 'db4'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/Spring5/IOC容器',
        component: ComponentCreator('/docs/Spring/Spring5/IOC容器', '5d9'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/基础知识',
        component: ComponentCreator('/docs/Spring/Spring编程思想/基础知识', 'a5d'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/依赖查找',
        component: ComponentCreator('/docs/Spring/Spring编程思想/依赖查找', '4ac'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/依赖注入',
        component: ComponentCreator('/docs/Spring/Spring编程思想/依赖注入', 'd01'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/Bean',
        component: ComponentCreator('/docs/Spring/Spring编程思想/Bean', 'fd0'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/IOC容器',
        component: ComponentCreator('/docs/Spring/Spring编程思想/IOC容器', 'a79'),
        exact: true,
        sidebar: "springSideBar"
      },
      {
        path: '/docs/springCloud',
        component: ComponentCreator('/docs/springCloud', 'aef'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/微服务技术栈',
        component: ComponentCreator('/docs/SpringCloud/微服务技术栈', '764'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Alibaba/Nacos',
        component: ComponentCreator('/docs/SpringCloud/Alibaba/Nacos', '448'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Alibaba/Sentinel',
        component: ComponentCreator('/docs/SpringCloud/Alibaba/Sentinel', 'da2'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Bus',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Bus', '92e'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Config',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Config', 'fad'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/eureka_config',
        component: ComponentCreator('/docs/SpringCloud/Netflix/eureka_config', 'cad'),
        exact: true
      },
      {
        path: '/docs/SpringCloud/Netflix/Eureka&Consul',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Eureka&Consul', '1cb'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/GateWay',
        component: ComponentCreator('/docs/SpringCloud/Netflix/GateWay', 'c64'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Hystrix',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Hystrix', '288'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/OpenFeign',
        component: ComponentCreator('/docs/SpringCloud/Netflix/OpenFeign', 'c59'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Ribbon',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Ribbon', 'a3d'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Sleuth',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Sleuth', 'd1c'),
        exact: true,
        sidebar: "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Stream',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Stream', '3be'),
        exact: true,
        sidebar: "springCloudSideBar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '17d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
