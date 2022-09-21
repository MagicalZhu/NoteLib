import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import WebsiteCard from '../../components/WebSiteCard/index'
import { websiteData } from '../../data/website'
import styles from './website.module.css'

import SiteSiderbar from '../../components/WebSiteSiderbar/SiteSiderbar'

function CategoryNav() {
  const sidebar = {
    title: '',
    items: websiteData.map((w) => ({ title: w.name, permalink: `#${w.name}`, headingId: w.name })),
  }

  return (
    <nav className={clsx(styles.sidebar, 'thin-scrollbar')}>
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>{sidebar.title}</div>
      <SiteSiderbar toc={sidebar.items}/>
    </nav>
  )
}



function CategoryList() {
  return (
    <div className={styles.category}>
      {websiteData.map((cate) => (
        <div key={cate.name}>
          <div className={styles.cateHeader}>
            <h2 id={cate.name} className='anchor'>
              {cate.name}
              <a className='hash-link' href={`#${cate.name}`} title={cate.name}></a>
            </h2>
          </div>
          <section>
            <ul className={styles.websiteList}>
              {cate.websites.map((website) => (
                <>
                  <WebsiteCard key={website.name} website={website} />
                </>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  )
}

export default function Websites() {
  const title = '网址导航'
  const description = '整合日常开发常用，推荐的网站导航页'

  return (
    <>
      <Layout>
        <div className='container'>
          <div className='row'>
            {/* <aside className='col col--2'>
              <CategoryNav />
            </aside> */}
            <main className='col col--12 margin-left--lg margin-top--xl'>
              <CategoryList/>
            </main>
          </div>
        </div>
      </Layout>
    </>
  )
}
