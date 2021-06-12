import React, { ComponentType, useCallback, useState } from 'react';
import { SToggle, SToggleButtonOn, SToggleButtonOff } from './RiaToggle.styled';

export type ToggleCustomization = {
  color?: string;
  Icon?: ComponentType;
};

type RiaToggleProps = {
  on: ToggleCustomization;
  off: ToggleCustomization;
  onClick: (enabled: boolean) => void;
};

const RiaToggle = ({
  on: { Icon: IconOn, color: colorOn },
  off: { Icon: IconOff, color: colorOff },
  onClick,
}: RiaToggleProps): JSX.Element => {
  const [enabled, setEnabled] = useState(false);

  const handleClick = useCallback(() => {
    setEnabled(!enabled);
    onClick(enabled);
  }, [enabled]);

  return (
    <SToggle onClick={handleClick}>
      <SToggleButtonOff value={enabled} color={colorOff}>
        {IconOff ? <IconOff /> : 'OFF'}
      </SToggleButtonOff>
      <SToggleButtonOn value={enabled} color={colorOn}>
        {IconOn ? <IconOn /> : 'ON'}
      </SToggleButtonOn>
    </SToggle>
  );
};
export default RiaToggle;
