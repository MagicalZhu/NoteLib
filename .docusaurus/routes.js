
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/about/',
    component: ComponentCreator('/about/','60e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','e21'),
    routes: [
      {
        path: '/docs/并发编程/并发安全/线程安全',
        component: ComponentCreator('/docs/并发编程/并发安全/线程安全','ab9'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发安全/dead_lock',
        component: ComponentCreator('/docs/并发编程/并发安全/dead_lock','345'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发安全/jmm',
        component: ComponentCreator('/docs/并发编程/并发安全/jmm','857'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发安全/volatile',
        component: ComponentCreator('/docs/并发编程/并发安全/volatile','f25'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/并发集合与阻塞队列',
        component: ComponentCreator('/docs/并发编程/并发控制/并发集合与阻塞队列','d29'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/缓存实战',
        component: ComponentCreator('/docs/并发编程/并发控制/缓存实战','03d'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/线程池',
        component: ComponentCreator('/docs/并发编程/并发控制/线程池','525'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/线程协作',
        component: ComponentCreator('/docs/并发编程/并发控制/线程协作','e5f'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/AQS',
        component: ComponentCreator('/docs/并发编程/并发控制/AQS','cd0'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/Atomic&CAS',
        component: ComponentCreator('/docs/并发编程/并发控制/Atomic&CAS','290'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/final',
        component: ComponentCreator('/docs/并发编程/并发控制/final','e45'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/FutureTask',
        component: ComponentCreator('/docs/并发编程/并发控制/FutureTask','7ee'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/Lock锁',
        component: ComponentCreator('/docs/并发编程/并发控制/Lock锁','06e'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/并发编程/并发控制/ThreadLocal',
        component: ComponentCreator('/docs/并发编程/并发控制/ThreadLocal','70a'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/计算机网络/HTTP/http-protocol',
        component: ComponentCreator('/docs/计算机网络/HTTP/http-protocol','394'),
        exact: true,
        'sidebar': "netWorkSidebar"
      },
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about','0b0'),
        exact: true
      },
      {
        path: '/docs/basicMiddleware',
        component: ComponentCreator('/docs/basicMiddleware','fa0'),
        exact: true
      },
      {
        path: '/docs/basicTech',
        component: ComponentCreator('/docs/basicTech','6b7'),
        exact: true
      },
      {
        path: '/docs/cache',
        component: ComponentCreator('/docs/cache','0b3'),
        exact: true
      },
      {
        path: '/docs/category/并发安全',
        component: ComponentCreator('/docs/category/并发安全','95c'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/category/并发基础',
        component: ComponentCreator('/docs/category/并发基础','064'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/category/并发控制',
        component: ComponentCreator('/docs/category/并发控制','13b'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/category/高级特性',
        component: ComponentCreator('/docs/category/高级特性','9cd'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/category/基础知识',
        component: ComponentCreator('/docs/category/基础知识','2ef'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/category/微服务基础',
        component: ComponentCreator('/docs/category/微服务基础','40f'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/category/mysql基础与高级',
        component: ComponentCreator('/docs/category/mysql基础与高级','700'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/category/spring编程思想',
        component: ComponentCreator('/docs/category/spring编程思想','ab2'),
        exact: true,
        'sidebar': "springSideBar"
      },
      {
        path: '/docs/category/springcloud-alibaba',
        component: ComponentCreator('/docs/category/springcloud-alibaba','8d2'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/category/springcloud-netflix',
        component: ComponentCreator('/docs/category/springcloud-netflix','1f8'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/currency',
        component: ComponentCreator('/docs/currency','102'),
        exact: true,
        'sidebar': "basicSideBar"
      },
      {
        path: '/docs/database',
        component: ComponentCreator('/docs/database','d19'),
        exact: true
      },
      {
        path: '/docs/job',
        component: ComponentCreator('/docs/job','cd2'),
        exact: true
      },
      {
        path: '/docs/messageQueue',
        component: ComponentCreator('/docs/messageQueue','e64'),
        exact: true
      },
      {
        path: '/docs/mysql',
        component: ComponentCreator('/docs/mysql','a05'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/高级特性/MySQL高级特性',
        component: ComponentCreator('/docs/Mysql/高级特性/MySQL高级特性','4a4'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL函数与聚合',
        component: ComponentCreator('/docs/Mysql/基础/MySQL函数与聚合','91e'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL基础查询',
        component: ComponentCreator('/docs/Mysql/基础/MySQL基础查询','949'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL库对象',
        component: ComponentCreator('/docs/Mysql/基础/MySQL库对象','400'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/Mysql/基础/MySQL子查询',
        component: ComponentCreator('/docs/Mysql/基础/MySQL子查询','63b'),
        exact: true,
        'sidebar': "mysqlSideBar"
      },
      {
        path: '/docs/networrk-basic',
        component: ComponentCreator('/docs/networrk-basic','b98'),
        exact: true,
        'sidebar': "netWorkSidebar"
      },
      {
        path: '/docs/searchEngine',
        component: ComponentCreator('/docs/searchEngine','3c2'),
        exact: true
      },
      {
        path: '/docs/source/devSource',
        component: ComponentCreator('/docs/source/devSource','d6c'),
        exact: true,
        'sidebar': "sourceSideBar"
      },
      {
        path: '/docs/spring',
        component: ComponentCreator('/docs/spring','a62'),
        exact: true,
        'sidebar': "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/依赖查找',
        component: ComponentCreator('/docs/Spring/Spring编程思想/依赖查找','4ac'),
        exact: true,
        'sidebar': "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/依赖注入',
        component: ComponentCreator('/docs/Spring/Spring编程思想/依赖注入','d01'),
        exact: true,
        'sidebar': "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/Bean',
        component: ComponentCreator('/docs/Spring/Spring编程思想/Bean','fd0'),
        exact: true,
        'sidebar': "springSideBar"
      },
      {
        path: '/docs/Spring/Spring编程思想/IOC容器',
        component: ComponentCreator('/docs/Spring/Spring编程思想/IOC容器','a79'),
        exact: true,
        'sidebar': "springSideBar"
      },
      {
        path: '/docs/springCloud',
        component: ComponentCreator('/docs/springCloud','aef'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/微服务技术栈',
        component: ComponentCreator('/docs/SpringCloud/微服务技术栈','764'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Alibaba/Nacos',
        component: ComponentCreator('/docs/SpringCloud/Alibaba/Nacos','448'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Alibaba/Sentinel',
        component: ComponentCreator('/docs/SpringCloud/Alibaba/Sentinel','da2'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Bus',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Bus','92e'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Config',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Config','fad'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/eureka_config',
        component: ComponentCreator('/docs/SpringCloud/Netflix/eureka_config','cad'),
        exact: true
      },
      {
        path: '/docs/SpringCloud/Netflix/Eureka&Consul',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Eureka&Consul','1cb'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/GateWay',
        component: ComponentCreator('/docs/SpringCloud/Netflix/GateWay','c64'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Hystrix',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Hystrix','288'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/OpenFeign',
        component: ComponentCreator('/docs/SpringCloud/Netflix/OpenFeign','c59'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Ribbon',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Ribbon','a3d'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Sleuth',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Sleuth','d1c'),
        exact: true,
        'sidebar': "springCloudSideBar"
      },
      {
        path: '/docs/SpringCloud/Netflix/Stream',
        component: ComponentCreator('/docs/SpringCloud/Netflix/Stream','3be'),
        exact: true,
        'sidebar': "springCloudSideBar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
