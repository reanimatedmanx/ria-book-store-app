import React, { useContext } from 'react';
import { ReduxStore } from '../cheating/ReduxStore';

const withRiaTheme = (Component: any) => {
  const WrapperComponent = (props: any): JSX.Element => {
    const context = useContext(ReduxStore);

    return <Component {...props} theme={context.theme} />;
  };

  return WrapperComponent;
};

export default withRiaTheme;
