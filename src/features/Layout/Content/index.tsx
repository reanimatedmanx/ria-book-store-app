import React, { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => <main>{children}</main>;

export { Content };
