
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
    component: ComponentCreator('/docs','5ef'),
    routes: [
      {
        path: '/docs/并发编程/并发安全/线程安全',
        component: ComponentCreator('/docs/并发编程/并发安全/线程安全','669'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发安全/dead_lock',
        component: ComponentCreator('/docs/并发编程/并发安全/dead_lock','1c1'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发安全/jmm',
        component: ComponentCreator('/docs/并发编程/并发安全/jmm','efb'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发安全/volatile',
        component: ComponentCreator('/docs/并发编程/并发安全/volatile','f05'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/并发集合与阻塞队列',
        component: ComponentCreator('/docs/并发编程/并发控制/并发集合与阻塞队列','bf7'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/缓存实战',
        component: ComponentCreator('/docs/并发编程/并发控制/缓存实战','81e'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/线程池',
        component: ComponentCreator('/docs/并发编程/并发控制/线程池','06b'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/线程协作',
        component: ComponentCreator('/docs/并发编程/并发控制/线程协作','909'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/AQS',
        component: ComponentCreator('/docs/并发编程/并发控制/AQS','206'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/Atomic&CAS',
        component: ComponentCreator('/docs/并发编程/并发控制/Atomic&CAS','0e0'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/final',
        component: ComponentCreator('/docs/并发编程/并发控制/final','ee4'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/FutureTask',
        component: ComponentCreator('/docs/并发编程/并发控制/FutureTask','fac'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/Lock锁',
        component: ComponentCreator('/docs/并发编程/并发控制/Lock锁','8cf'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/并发编程/并发控制/ThreadLocal',
        component: ComponentCreator('/docs/并发编程/并发控制/ThreadLocal','9de'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about','0b0'),
        exact: true
      },
      {
        path: '/docs/currency',
        component: ComponentCreator('/docs/currency','564'),
        exact: true,
        'sidebar': "basicSiderBar"
      },
      {
        path: '/docs/networrk-basic',
        component: ComponentCreator('/docs/networrk-basic','aa1'),
        exact: true
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
