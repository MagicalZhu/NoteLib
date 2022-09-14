import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './style.module.css'
import { type Website } from '../../data/website'


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