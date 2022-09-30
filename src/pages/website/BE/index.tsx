import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import WebsiteCard from '../../../components/WebSiteCard/index'
import { websiteData } from '../../../data/website'
import styles from './style.module.css'
import { BE_MAP, websiteData as pageData } from '../../../data/webSite/queryData'
import { type Tag } from '../../../data/webSite/type'
import union from 'lodash/union'


let totalTags:Tag[] = []

/**
 * 获取Tags
 */
const getTags = () => {
  pageData.forEach((item) => {
    totalTags = union(totalTags, item.tags)
  }) 
}


function TagButtonList() {
  getTags()
  return (
    <>
      <div className={styles.navpage}>
        <div className={styles.tagContainer}>
          <div className={styles.tagBox}>
             {
              totalTags.map((tag) => (
                <button>{tag.name}</button>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

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
            <TagButtonList />
            <main className='col col--6 margin-left--lg'>
              <CategoryList/>
            </main>
          </div>
        </div>
      </Layout>
    </>
  )
}
