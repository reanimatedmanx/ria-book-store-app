import React, { ReactNode, PropsWithChildren } from 'react';
import styled from 'styled-components';

const SHeader = styled.header`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
`;

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => (
  <SHeader>{children}</SHeader>
);

export { Header };
