import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { IBaseTheme } from '../Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type LayoutProps = {
  children: ReactNode;
};

type SLayoutProps = {
  theme: IBaseTheme;
};

const SLayout = withRiaTheme(styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }: SLayoutProps) => theme.backgroundColor};
`);

const SLayoutWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Layout = ({ children }: LayoutProps) => (
  <SLayout>
    <SLayoutWrapper>{children}</SLayoutWrapper>
  </SLayout>
);

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
