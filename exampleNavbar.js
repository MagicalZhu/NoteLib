const nav = {
  hideOnScroll: true,
  title: 'Docusaurus',
  logo: {
    alt: 'Docusaurus Logo',
    src: 'img/docusaurus.svg',
    srcDark: 'img/docusaurus_keytar.svg',
    width: 32,
    height: 32,
  },
  items: [
    {
      type: 'doc',
      position: 'left',
      docId: 'introduction',
      label: 'Docs',
    },
    {
      type: 'docSidebar',
      position: 'left',
      sidebarId: 'api',
      label: 'API',
    },
    {to: 'blog', label: 'Blog', position: 'left'},
    {to: 'showcase', label: 'Showcase', position: 'left'},
    {
      to: '/community/support',
      label: 'Community',
      position: 'left',
      activeBaseRegex: `/community/`,
    },
    // right
    {
      type: 'docsVersionDropdown',
      position: 'right',
      dropdownActiveClassDisabled: true,
      dropdownItemsAfter: [
        ...ArchivedVersionsDropdownItems.map(
          ([versionName, versionUrl]) => ({
            label: versionName,
            href: versionUrl,
          }),
        ),
        {
          href: 'https://v1.docusaurus.io',
          label: '1.x.x',
        },
        {
          to: '/versions',
          label: 'All versions',
        },
      ],
    },
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsAfter: [
        {
          href: 'https://github.com/facebook/docusaurus/issues/3526',
          label: 'Help Us Translate',
        },
      ],
    },
    {
      href: 'https://github.com/facebook/docusaurus',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository',
    }
  ],
}
