import React from 'react';
import { STag } from './RiaTag.styled';

export type RiaTagProps = {
  text: string;
  Icon?: new () => React.Component<any, any>;
};

const RiaTag = ({ text }: RiaTagProps): JSX.Element => <STag>{text}</STag>;

export default RiaTag;
