import React from 'react';
import { IBaseTheme } from '../../features/Themes/Base';
import { DayTheme } from '../../features/Themes/Day';

const withRiaTheme = (Component: any) => {
  // from state
  const theme: IBaseTheme = new DayTheme();

  const newProps = {
    theme,
  };

  const WrapperComponent = (props: any): JSX.Element => (
    <Component {...props} {...newProps} />
  );

  return WrapperComponent;
};

export default withRiaTheme;
