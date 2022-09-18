// 用于定义首页信息
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const avastar = useBaseUrl(siteConfig.themeConfig.navbar.logo.src)
  return (
    <div class="container margin-top--xl margin-bottom--xl " className={clsx(styles.heroBanner)}>
      <div class="avatar avatar--vertical">
        <img src={avastar} style={{width: 256, borderRadius: '50%', marginBottom: '15px'}}/>
        {/* <h1 class="hero__title">{siteConfig.title}</h1> */}
        <div>
        <div className={clsx('avatar__intro', styles.printTyping)}>
          <p className={clsx(styles.printContent)} style={{width: (siteConfig.tagline?.length ?? 0) + 'em'}}>
            {siteConfig.tagline}
          </p>
        </div>
          {/* <p class="hero__subtitle">{siteConfig.tagline}</p> */}
          <div  className={styles.buttons}>
            <Link className="margin-top--md button button--primary button--lg" to="/docs/about">
              Wiki →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
