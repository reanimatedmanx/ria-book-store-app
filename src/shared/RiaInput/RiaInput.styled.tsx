import styled from 'styled-components';
import { IBaseTheme } from '../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type SInputProps = {
  theme: IBaseTheme;
};

const SInput = withRiaTheme(styled.div`
  display: flex;
  width: 100%;
  font-weight: 600;
  border: 2px solid ${({ theme }: SInputProps) => theme.secondaryColor};
  border-radius: 4px;
  &:focus-within {
    border: 2px solid ${({ theme }: SInputProps) => theme.primaryColor};
  }
`);

const SInputIconContainer = styled.div`
  display: flex;
  max-width: 30px;
  height: inherit;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const SInputControl = withRiaTheme(styled.input`
  background-color: transparent;
  color: ${({ theme }: SInputProps) => theme.textColor};
  font-family: ${({ theme }: SInputProps) => theme.fontFamily};
  width: 100%;
  padding: 10px 40px;
  font-weight: 500;
  border: none;
  outline: none;
`);

export { SInput, SInputIconContainer, SInputControl };
