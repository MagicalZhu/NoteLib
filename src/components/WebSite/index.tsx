import React, {useState} from 'react';
import clsx from 'clsx'
import Layout from '@theme/Layout'
import styles from './style.module.css'
import { getData } from '../../data/webSite/queryData'
import { type WebSite } from '../../data/webSite/type'


function SiteItem (props) {
	return (
		<>
			{
				props.sites.map((site: WebSite, index) => (
						<div className={styles.item} key={index}>
							<div className={styles.content}>
								<a  href={site.href} 
										target="_blank" 
										rel='noopener noreferrer' 
										className={(clsx(styles.infoBox,styles.aLink))}>
									<div className={styles.twoCol}>
										<div className={styles.imgBox}>
											<img src={site.icon}/>
										</div>
										<div className={styles.info}>
											<span className={styles.siteName} title={site.name}>{site.name}</span>
											<p className={styles.desc} title={site.description}>
												{site.description}
											</p>
										</div>
									</div>
								</a>
								<div>
									<div className={styles.foot}>
										<div className={styles.tag}>
											{
												site.tags.map((siteEle, index) => (
													// TODO: 修改 tag 样式
													<span key={index} className={clsx(styles.tagItem)} style={{ backgroundColor: siteEle.fontColor}}>{siteEle.name}</span>
												))
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					))
			}
		</>
	)
}

export default function Sites(props) {
  const queryType =  props.queryType
	const totalTags = getData(queryType).tagsList
	const totalSites = getData(queryType).sites

	function getFilterSites (key:String) :WebSite[] {
		console.log(key)
		const tmpSites:WebSite[] = []
		totalSites.forEach((item) => {
			item.tags.forEach((tag) => {
				if (tag.name === key) {
					tmpSites.push(item)
				}
			})
		})
		return tmpSites
	}

  const [tagName, setTagName] = useState(totalTags[0].name)
  const [sites, setSites] = useState(getFilterSites(totalTags[0].name))

  function tagChangeEvent (tagName:string) {
    setTagName(tagName)
    setSites(getFilterSites(tagName))
  }

  return (
    <Layout>
      <div className={clsx(styles.navpage)}>
        <div className={styles.tagContainer}>
          <div className={styles.tagBox}>
            {
              totalTags.map((tag, index) => (
                <button onClick={() => tagChangeEvent(tag.name)}
                        key={index}
                        className={clsx(tag.name === tagName? styles.active : null)}>
                  {tag.name}
                </button>
              ))
            }
          </div>
        </div>
        </div>
      <main>
        <div className={styles.linksWrapper}>
          <section>
            <div className={styles.group}>
							<SiteItem sites={sites}/>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
