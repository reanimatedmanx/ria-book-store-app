import styled from 'styled-components';
import { IBaseTheme } from '../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type STypographyProps = {
  theme: IBaseTheme;
};

const STypography = withRiaTheme(styled.span`
  margin:0;
  padding: 40px 0;
  font-size: inherit;
  font-family: ${({ theme }: STypographyProps) => theme.fontFamily};
  color: ${({ theme }: STypographyProps) => theme.textColor};
`);

const STypographyHeading = withRiaTheme(styled.h1`
  margin:0;
  padding: 40px 0;
  font-size: 22px;
  font-family: ${({ theme }: STypographyProps) => theme.fontFamily};
  color: ${({ theme }: STypographyProps) => theme.textColor};
`);

export { STypography, STypographyHeading };
