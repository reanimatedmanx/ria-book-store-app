import React, { ComponentType, KeyboardEvent } from 'react';
import { SInput, SInputIconContainer, SInputControl } from './RiaInput.styled';

type RiaInputProps = {
  placeholder: string;
  value?: string;
  type: string;
  Icon?: ComponentType;
  onKeyPressed: (value: string) => void;
};

const RiaInput = ({
  value,
  placeholder,
  type,
  Icon,
  onKeyPressed,
}: RiaInputProps): JSX.Element => {
  const handleKeyPressed = (event: KeyboardEvent<InputEvent>) => {
    // @ts-ignore
    onKeyPressed(event.target.value);
  };

  return (
    <SInput>
      <SInputControl
        type={type}
        placeholder={placeholder}
        value={value}
        onKeyDown={handleKeyPressed}
        onKeyUp={handleKeyPressed}
      />
      {Icon && (
        <SInputIconContainer>
          <Icon />
        </SInputIconContainer>
      )}
    </SInput>
  );
};

RiaInput.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default RiaInput;
