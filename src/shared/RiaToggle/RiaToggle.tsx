import React, { ComponentType, useCallback, useEffect, useState } from 'react';
import { SToggle, SToggleButtonOn, SToggleButtonOff } from './RiaToggle.styled';

export type ToggleCustomization = {
  color?: string;
  Icon?: ComponentType;
};

type RiaToggleProps = {
  value?: boolean;
  on: ToggleCustomization;
  off: ToggleCustomization;
  onClick: (enabled: boolean) => void;
};

const RiaToggle = ({
  on: { Icon: IconOn, color: colorOn },
  off: { Icon: IconOff, color: colorOff },
  onClick,
  value,
}: RiaToggleProps): JSX.Element => {
  const handleClick = useCallback(() => {
    onClick(!value);
  }, [value]);

  return (
    <SToggle onClick={handleClick}>
      <SToggleButtonOff value={!value} color={colorOff}>
        {IconOff ? <IconOff /> : 'OFF'}
      </SToggleButtonOff>
      <SToggleButtonOn value={value} color={colorOn}>
        {IconOn ? <IconOn /> : 'ON'}
      </SToggleButtonOn>
    </SToggle>
  );
};
export default RiaToggle;
