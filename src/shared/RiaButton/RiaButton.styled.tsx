import styled from 'styled-components';
import Color from 'color';
import { IBaseTheme } from './../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type SButtonProps = {
  theme: IBaseTheme;
};

const SButton = withRiaTheme(styled.button`
  padding: 10px 40px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  outline: none;
  text-transform: uppercase;
  font-size: medium;
  font-family: ${({ theme }: SButtonProps) => theme.fontFamily};
  color: ${({ theme }: SButtonProps) => theme.textColor};
  background: ${({ theme }: SButtonProps) => theme.primaryColor};

  &:hover {
    background: ${({ theme }: SButtonProps) =>
      Color(theme.primaryColor).lighten(0.1).string()};
  }
`);

export { SButton };
