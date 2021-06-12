import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';


type LayoutProps = {
  type: 'focused' | 'full';
  children: ReactNode;
};

const SLayout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Layout = ({ type, children }: LayoutProps) => (
  <SLayout>{children}</SLayout>
);

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
