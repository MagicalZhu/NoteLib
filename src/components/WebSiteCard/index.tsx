import React, { memo } from 'react'
// import clsx from 'clsx'
// import Link from '@docusaurus/Link'
import styles from './style.module.css'
import { type Website, type tagDot } from '../../data/website'

function CardTag({tags}) {
  return (
    <div>
      {
        tags.map((tag: tagDot)=> (
          <div className={styles.pluginTag}>
            <span title={tag.tagName} className={styles.pluginTagContent}>
              {tag.tagName}           
            </span>
            <span className={styles.colorLabel} style={{ backgroundColor: tag.dotColor}}></span>
          </div>
        ))
      }
    </div>
  )
}


const WebsiteCard = memo(({ website }: { website: Website }) => (
  <div className ={styles.articlesList}>
    <article className ={styles.post}>
      <a href={website.href} target="_Blank" title={website.name} className ={styles.cardLink}>
        <div className ={styles.inner}>
          <div className={styles.pluginHead}>
            <div className={styles.pluginHeadImg}>
              <img width="64" height="64" src={website.logo} alt={website.name} className={styles.cardImg}/>
            </div>
            <div className={styles.pluginHeadDesc}>
              <div title={website.name} className={styles.pluginHeadTitle}>
                {website.name}                    
              </div>
              <CardTag tags={website.tags}/>
            </div>
          </div>
            <p title={website.desc} className={styles.pluginBody}>
              {website.desc}            
            </p>
        </div>
      </a>
    </article>
  </div>
))



export default WebsiteCard