import styled from 'styled-components';
import Color from 'color';
import { IBaseTheme } from '../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type SToggleProps = {
  theme: IBaseTheme;
  color: string;
  value: boolean;
};

const SToggle = withRiaTheme(styled.div`
  font-weight: 600;
  border: none;
  border-radius: 6px;
  outline: none;
  text-transform: uppercase;
  font-size: medium;
  font-family: ${({ theme }: SToggleProps) => theme.fontFamily};
  color: ${({ theme }: SToggleProps) => theme.textColor};
  background: ${({ theme }: SToggleProps) => theme.complementaryColor};
  display: flex;
  padding: 8px;
`);

const SToggleButtonOn = withRiaTheme(styled.button`
  max-width: 40px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ value, theme }: SToggleProps) =>
    value ? theme.textColor : Color(theme.textColor).negate().string()};
  background: ${({ value, color }: SToggleProps) =>
    value ? color : 'transparent'};
`);

const SToggleButtonOff = withRiaTheme(styled.button`
  max-width: 40px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ value, theme }: SToggleProps) =>
    value ? theme.textColor : Color(theme.textColor).negate().string()};
  background: ${({ value, color }: SToggleProps) =>
    value ? color : 'transparent'};
`);

export { SToggle, SToggleButtonOn, SToggleButtonOff };
