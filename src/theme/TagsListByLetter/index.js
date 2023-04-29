import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


function TagItem({ permalink, label, count }) {
  return (
    <Link
      href={permalink}
      className={clsx(
        styles.tagItem,
        styles.tagItemRegular,
      )}>
      {label}
      {count && <span className={styles.tagCount}>{count}</span>}
    </Link>
  );
}

export default function TagsListByLetter({ tags }) {
  return (
      <>
      <ul className={clsx(styles.tagUl, 'padding--none', 'margin-left--sm')}>
          {tags.map(({label, permalink: tagPermalink, count}) => (
            <li key={tagPermalink} className={styles.tagCat}>
              <TagItem label={label} permalink={tagPermalink} count={count}/>
            </li>
          ))}
        </ul>
      </>
    );
}

