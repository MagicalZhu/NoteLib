import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';
export default function ThemedImage(props) {
  const isBrowser = useIsBrowser();
  const {colorMode} = useColorMode();
  const {sources, className, alt, ...propsRest} = props;
  const clientThemes = colorMode === 'dark' ? ['dark'] : ['light'];
  const renderedSourceNames = isBrowser
    ? clientThemes
    : // We need to render both images on the server to avoid flash
      // See https://github.com/facebook/docusaurus/pull/3730
      ['light', 'dark'];
  return (
    <>
      {renderedSourceNames.map((sourceName) => (
        <img
          key={sourceName}
          src={sources[sourceName]}
          alt={alt}
          className={clsx(
            styles.themedImage,
            styles[`themedImage--${sourceName}`],
            className,
          )}
          {...propsRest}
        />
      ))}
    </>
  );
}
