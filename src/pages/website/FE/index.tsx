import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import WebsiteCard from '../../../components/WebSiteCard/index'
import { websiteData } from '../../../data/website'
import styles from './style.module.css'


function CategoryList() {
  return (
    <>
      <div className={styles.category}>
        {websiteData.map((cate) => (
          <div key={cate.name}>
            {/* <div className={styles.cateHeader}>
              <h2 id={cate.name} className='anchor'>
                {cate.name}
                <a className='hash-link' href={`#${cate.name}`} title={cate.name}></a>
              </h2>
            </div> */}
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
    </>
  )
}

export default function Websites() {
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
