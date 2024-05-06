import { ReactNode } from 'react';
import { Header } from '../Header';

import {
  HeaderButtonsType,
  HeaderPagesType,
  HeaderSettingsType,
} from '../../types';

export interface LayoutProps {
  children: ReactNode;
  pages?: HeaderPagesType;
  buttons?: HeaderButtonsType;
  settings?: HeaderSettingsType;
  Logo?: React.ComponentType;
  onLogoClick?: () => void;
}

export function Layout({
  children,
  pages,
  buttons,
  Logo,
  onLogoClick,
}: LayoutProps) {
  return (
    <>
      <Header
        title="Access Management"
        pages={pages}
        buttons={buttons}
        // Logo={Logo}
        onLogoClick={onLogoClick}
      />
      {children}
    </>
  );
}

export default Layout;
