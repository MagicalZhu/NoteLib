// 用于定义首页信息
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { Avatar, Space } from '@arco-design/web-react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const avastar = useBaseUrl(siteConfig.themeConfig.navbar.logo.src)
  return (
    <div class="container" className={clsx(styles.heroBanner), "margin-top--xl", "margin-bottom--xl"}>
      <div class="avatar avatar--vertical">
        <img class="avatar__photo avatar__photo--xl" src={avastar}/>
        <h1 class="hero__title">{siteConfig.title}</h1>
        <div class="avatar__intro">
          <p class="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/about">
              开始 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  console.log(JSON.stringify(siteConfig));
  return (
    <Layout title={`${siteConfig.title}`}>
      <main>
        <HomepageHeader />
      </main>
        {/* <HomepageFeatures /> */}
    </Layout>
  );
}
