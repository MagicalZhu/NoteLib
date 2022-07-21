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
          img: '/img/website/vue.svg'
        },
        { 
          label: 'Element-Plus',
          href: 'https://element-plus.gitee.io/zh-CN/', 
          img:'/img/website/element-plus.svg'
        },
        { 
          label: 'React', 
          href: 'https://react.docschina.org/', 
          img: '/img/website/React.svg'
        },
        { 
          label: 'Ant Design', 
          href: 'https://ant.design/index-cn',
          img: '/img/website/AntDesign.svg'
        },
        {
          label: 'Electron',
          href: 'https://www.electronjs.org/',
          img: '/img/website/electron.svg'
        },
        {
          label: 'Node.js',
          href: 'http://nodejs.cn/api/',
          img: '/img/website/node.svg'
        },
        {
            label: 'TypeScript',
            href: 'http://ts.xcatliu.com/',
            img: '/img/website/ts.svg'
        },
        {
            label: 'Sequelize',
            href: 'https://www.sequelize.com.cn/core-concepts/getting-started',
            img: '/img/website/sequelize.png'
        },
        { 
          label: 'MDN', 
          href: 'https://developer.mozilla.org/zh-CN/docs/Web', 
          img: '/img/website/mdn.svg' 
        },
      ],
    },
    {
      id: 2,
      title: '🔗后端链接',
      items: [
        { 
          label: 'Spring',
          href: 'https://spring.io/',
          img: '/img/website/Spring.png'
      },
        {
          label: 'Mybatis',
          href: 'https://mybatis.org/mybatis-3/zh/index.html',
          img: '/img/website/Mybatis.png'
        },
        {
          label: 'Redis',
          href: 'https://redis.io/documentation',
          img: '/img/website/redis.png'
        },
        { 
          label: 'Docker',
          href: 'https://docs.docker.com/get-started/',
          img: '/img/website/docker.png'
        },
        { 
          label: 'Kubernetes',
          href: 'https://kubernetes.io/zh/docs/home/',
          img: '/img/website/kubernetes.png'
        },
        { 
          label: 'Nginx', 
          href: 'http://nginx.org/en/docs/',
          img: '/img/website/nginx.png'
        },
        { 
          label: 'Kafka', 
          href: 'https://kafka.apache.org/documentation/#gettingStarted',
          img: '/img/website/kafka.png'
        },
        { 
          label: 'RabbitMq',
          href: 'https://www.rabbitmq.com/documentation.html',
          img: '/img/website/rabbitmq.png'
        },
        { 
          label: 'Pulsar',
          href: 'https://pulsar.apache.org/docs/zh-CN/standalone/',
          img: '/img/website/plusar.svg'},
        {
          label: 'ElasticSearch',
          href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html',
          img: '/img/website/elastic.svg'
        },
      ]
    },
    {
      id: 3,
      title: '🔨文档构建',
      items: [
        { 
          label: 'Docusaurus',
          href: 'https://www.docusaurus.cn/',
          img: '/img/website/docusaurus.png'
        },
        { 
          label: 'Vuepress',
          href: 'https://vuepress.vuejs.org/zh/', 
          img: '/img/website/vuepress.png'
        }
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
