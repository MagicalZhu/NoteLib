// 用于定义首页信息
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Typer from '../components/Typer'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const avastar = useBaseUrl(siteConfig.customFields.logo)
  return (
    <div class="container margin-top--xl margin-bottom--xl " className={clsx(styles.heroBanner)}>
      <div class="avatar avatar--vertical">
        {/* <img src={avastar} style={{width: 256, borderRadius: '50%', marginBottom: '15px'}}/> */}
        <CarbonFingerprintRecognition className={clsx(styles.avastar)}/>
        {/* <h1 class="hero__title">{siteConfig.title}</h1> */}
        <div>
        <div className={clsx(styles.printContent)}>
          <Typer strings={siteConfig.customFields.profileTagline}/>
        </div>
          {/* <p class="hero__subtitle">{siteConfig.tagline}</p> */}
          <div  className={styles.buttons}>
            <Link className="button margin-top--md  button--primary button--lg"
                  to="/docs/about">
              Wiki →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


function CarbonFingerprintRecognition(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M7 5.21a.77.77 0 0 1-.46-1.38A15.46 15.46 0 0 1 16 1c2.66 0 6.48.45 9.5 2.62a.77.77 0 0 1 .18 1.07a.78.78 0 0 1-1.08.17A15 15 0 0 0 16 2.53a14 14 0 0 0-8.5 2.52a.74.74 0 0 1-.5.16Z"></path><path fill="currentColor" d="M28.23 12.26a.78.78 0 0 1-.63-.33C25.87 9.49 22.78 6.24 16 6.24a14 14 0 0 0-11.63 5.7a.77.77 0 0 1-1.07.17a.76.76 0 0 1-.15-1.11A15.54 15.54 0 0 1 16 4.71c5.61 0 9.81 2.08 12.84 6.34a.77.77 0 0 1-.19 1.07a.79.79 0 0 1-.42.14Z"></path><path fill="currentColor" d="M12.28 31a.78.78 0 0 1-.72-.49a.75.75 0 0 1 .44-1c4.37-1.68 7-5.12 7-9.21a2.8 2.8 0 0 0-3-3c-1.86 0-2.76 1-3 3.35a4.27 4.27 0 0 1-4.52 3.83a4.27 4.27 0 0 1-4.32-4.59A11.71 11.71 0 0 1 16 8.39a12 12 0 0 1 12 11.93a18.66 18.66 0 0 1-1.39 6.5a.78.78 0 0 1-1 .41a.76.76 0 0 1-.41-1a17.25 17.25 0 0 0 1.27-5.91A10.45 10.45 0 0 0 16 9.92a10.18 10.18 0 0 0-10.38 10a2.77 2.77 0 0 0 2.79 3.06a2.74 2.74 0 0 0 3-2.48c.36-3.11 1.89-4.69 4.56-4.69a4.31 4.31 0 0 1 4.52 4.56c0 4.74-3 8.72-8 10.63a.92.92 0 0 1-.21 0Z"></path><path fill="currentColor" d="M19.77 30.28a.81.81 0 0 1-.52-.2a.76.76 0 0 1 0-1.08a12.63 12.63 0 0 0 3.54-8.68c0-1.56-.48-6.65-6.7-6.65a6.83 6.83 0 0 0-4.94 1.87A6.17 6.17 0 0 0 9.32 20a.77.77 0 0 1-.77.76a.76.76 0 0 1-.77-.76A7.73 7.73 0 0 1 10 14.46a8.34 8.34 0 0 1 6-2.32c6.08 0 8.24 4.4 8.24 8.18a14.09 14.09 0 0 1-3.9 9.68a.75.75 0 0 1-.57.28Z"></path><path fill="currentColor" d="M8.66 27.74a14.14 14.14 0 0 1-1.56-.09a.76.76 0 1 1 .17-1.52c2.49.28 4.45-.16 5.84-1.32a6.37 6.37 0 0 0 2.12-4.53a.75.75 0 0 1 .82-.71a.78.78 0 0 1 .72.81A7.89 7.89 0 0 1 14.09 26a8.2 8.2 0 0 1-5.43 1.74Z"></path></svg>
  )
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
