import styled from 'styled-components';
import { IBaseTheme } from '../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type STagProps = {
  theme: IBaseTheme;
};

const STag = withRiaTheme(styled.button`
  padding: 10px;
  margin-right: 10px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  outline: none;
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${({ theme }: STagProps) => theme.fontFamily};
  color: ${({ theme }: STagProps) => theme.textColor};
  background: ${({ theme }: STagProps) => theme.primaryColor};
`);

export { STag };
