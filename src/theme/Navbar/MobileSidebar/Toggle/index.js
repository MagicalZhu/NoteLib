import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import IconMenu from '@theme/Icon/Menu';
export default function MobileSidebarToggle() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      onClick={mobileSidebar.toggle}
      onKeyDown={mobileSidebar.toggle}
      aria-label="Navigation bar toggle"
      className="navbar__toggle clean-btn"
      type="button"
      tabIndex={0}>
      <IconMenu />
    </button>
  );
}
