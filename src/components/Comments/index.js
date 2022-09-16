import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function Comments(props) {
  const {colorMode} = useColorMode();
  let dataCategory = ''
  let dataCategoryID = ''
  let { type, category, categoryId } = props
  if (type == 'blog') {
    dataCategory = 'Blog'
    dataCategoryID = 'DIC_kwDOG3FwKs4CReC8'
  } else if (type == 'docs') {
    dataCategory = 'Docs'
    dataCategoryID = 'DIC_kwDOG3FwKs4CReC7'
  } else {
    dataCategory = 'Announcements'
    dataCategoryID = 'DIC_kwDOG3FwKs4CRGwF'
  }

  return (
    <Giscus
      data-repo="MagicalZhu/NoteLib"
      data-repo-id="R_kgDOG3FwKg"
      data-category={dataCategory}
      data-category-id={dataCategoryID}
      data-mapping="pathname"
      data-strict="1"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="light"
      data-lang="zh-CN"
      data-loading="lazy"
      theme={colorMode}
      crossorigin="anonymous"
      async
    />
  );
}