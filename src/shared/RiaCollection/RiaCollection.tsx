import React, { ReactNode } from 'react';
import { SRiaCollection } from './RiaCollection.styled';

export type RiaCollectionProps = {
  type: 'grid' | 'list';
  children?: ReactNode;
};

const RiaCollection = ({ type, children }: RiaCollectionProps): JSX.Element => (
  <>
    <SRiaCollection type={type}>{children}</SRiaCollection>
  </>
);

RiaCollection.defaultProps = {
  type: 'grid',
};

export default RiaCollection;
