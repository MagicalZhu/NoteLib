import React from 'react';
import {composeProviders} from '@docusaurus/theme-common';
import {
  ColorModeProvider,
  TabGroupChoiceProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';
const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  TabGroupChoiceProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
]);
export default function LayoutProvider({children}) {
  return <Provider>{children}</Provider>;
}
