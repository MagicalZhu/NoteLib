import React from 'react';


const linkClassName = 'table-of-contents__link'


function SiteSiderbar({ toc}) {
  if (!toc.length) {
    return null;
  }
  return (
    <ul>
      {toc.map((heading) => (
        <li key={heading.headingId}>
          <a
            href={`#${heading.headingId}`}
            className={linkClassName ?? undefined}
            dangerouslySetInnerHTML={{ __html: heading.title }}
          />
        </li>
      ))}
    </ul>
  );
}
export default React.memo(SiteSiderbar);
