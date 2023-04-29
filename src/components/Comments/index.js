import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function Comments(props) {
  const {colorMode} = useColorMode();
  let dataCategory = ''
  let dataCategoryID = ''
  let { type } = props
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
    id={dataCategory}
    repo="MagicalZhu/NoteLib"
    repoId="R_kgDOG3FwKg"
    category={dataCategory}
    categoryId={dataCategoryID}
    mapping="pathname"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme={colorMode}
    lang="en"
    loading="lazy"
    />
  );
}