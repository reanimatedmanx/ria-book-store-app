import React from 'react';
import { SButton } from './RiaButton.styled';

type RiaButtonProps = {
  text: string;
  Icon?: new () => React.Component<any, any>;
};

const RiaButton = ({ text, Icon }: RiaButtonProps): JSX.Element => (
  <SButton>
    {Icon && <Icon />}
    {text}
  </SButton>
);

export default RiaButton;
