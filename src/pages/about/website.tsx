import React from 'react';
import Layout from '@theme/Layout';
import styles from '../index.module.css'




const webSites =  [
    {
      id: 1,
      title: '🔗前端链接',
      items: [
        { label: 'Vue', 
          href: 'https://v3.cn.vuejs.org/',
          img: 'https://v3.cn.vuejs.org/logo.png'
        },
        { 
          label: 'Element-Plus',
          href: 'https://element-plus.gitee.io/zh-CN/', 
          img:'https://element-plus.org/images/element-plus-logo.svg'
        },
        { 
          label: 'React', 
          href: 'https://react.docschina.org/', 
          img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
        },
        { label: 'Ant Design', href: 'https://ant.design/index-cn', img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'},
        { label: 'Electron', href: 'https://www.electronjs.org/',img: '	https://www.electronjs.org/zh/assets/img/logo.svg'},
        { label: 'Node.js', href: 'http://nodejs.cn/api/', img: 'https://www.runoob.com/wp-content/uploads/2014/03/nodejs.jpg'},
        { label: 'TypeScript', href: 'http://ts.xcatliu.com/', img: '	https://typescript.bootcss.com/images/typescript-icon.svg'},
        { 
          label: 'MDN', 
          href: 'https://developer.mozilla.org/zh-CN/docs/Web', 
          img: 'https://www.firefox.com.cn/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg' 
        },
      ],
    },
    {
      id: 2,
      title: '🔗前端开源工具库',
      items: [
        { label: 'Lodash', href: 'https://www.lodashjs.com/'},
        { label: 'Day.js', href: 'https://dayjs.gitee.io/docs/zh-CN/installation/installation'},
        { label: 'Tailwindcss', href: 'https://www.tailwindcss.cn/docs'},
        { label: 'Sortablejs', href: 'http://www.sortablejs.com/index.html'},
        { label: 'Axios', href: 'https://www.axios-http.cn/docs/intro'},
        { label: 'Dplayer', href: 'http://dplayer.js.org/zh/'},
        { label: 'Sequelize', href: 'https://www.sequelize.com.cn/core-concepts/getting-started'},
      ],
    },
    {
      id: 3,
      title: '🔗后端链接',
      items: [
        { label: 'Spring', href: 'https://spring.io/'},
        { label: 'Mybatis', href: 'https://mybatis.org/mybatis-3/zh/index.html'},
        { label: 'Redis', href: 'https://redis.io/documentation'},
        { label: 'Docker', href: 'https://docs.docker.com/get-started/'},
        { label: 'Kubernetes', href: 'https://kubernetes.io/zh/docs/home/'},
        { label: 'Nginx', href: 'http://nginx.org/en/docs/'},
        { label: 'Kafka', href: 'https://kafka.apache.org/documentation/#gettingStarted'},
        { label: 'RabbitMq', href: 'https://www.rabbitmq.com/documentation.html'},
        { label: 'Pulsar', href: 'https://pulsar.apache.org/docs/zh-CN/standalone/'},
        { label: 'ElasticSearch', href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html'},
        { label: 'Dubbo', href: 'https://dubbo.apache.org/zh/docs/quick-start/'},
        { label: 'JVM', href: 'https://docs.oracle.com/javase/8/docs/technotes/tools/windows/index.html'},
      ]
    },
    {
      id: 4,
      title: '🔗后端开源工具库',
      items: [
        { label: 'Mybatis-plus', href: 'https://baomidou.com/'},
        { label: 'Hutool', href: 'https://www.hutool.cn/docs/#/'},
        { label: 'Arthas', href: 'https://arthas.gitee.io/index.html'},
        { label: 'Xxl Job', href: 'https://www.xuxueli.com/xxl-conf/'},
        { label: 'Mycat', href: 'http://www.mycat.org.cn/'},
        { label: 'ShardingSphere', href: 'https://shardingsphere.apache.org/document/current/cn/overview/'},
        { label: 'Shenyu', href: 'https://shenyu.apache.org/zh/docs/index'},
        { label: 'Canal', href: 'https://github.com/alibaba/canal/wiki'},
        { label: 'Seata', href: 'https://seata.io/zh-cn/docs/overview/what-is-seata.html'},
      ],
    },
    {
      id: 5,
      title: '🔨文档构建',
      items: [
        { label: 'Docusaurus', href: 'https://www.docusaurus.cn/', },
        { label: 'Vuepress', href: 'https://vuepress.vuejs.org/zh/', },
        { label: 'Obsidian', href: 'https://obsidian.md/', },
      ],
    },
]

function WebSiteListItem(props) {
  const siteItems = props.siteItems
  const itemCm = siteItems.map((item) => 
                <a href={item.href} title={item.label} target="_blank">
                  <img className={styles.img} src={item.img} alt={item.label}/>
                </a>
            )

  return (
    <div>
      {itemCm}
    </div>
  )

}

function WebSiteList(props) {
  const result = props.websites.map((group) => 
    <>
        <h3 style={{textAlign: 'center'}}>{group.title}</h3>
        <WebSiteListItem siteItems={group.items}  key={group.id.toString()}/>
      </>
    )
    return (
      <section className={styles.container}>
          {result}
      </section>
    )
  }

export default function MyReactPage() {
    return (
        <Layout title={`网站导航`}>
          <WebSiteList websites={webSites}/>
        </Layout>
    );
}
