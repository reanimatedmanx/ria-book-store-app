import styled from 'styled-components';
import { IBaseTheme } from '../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type STypographyProps = {
  theme: IBaseTheme;
};

const STypography = withRiaTheme(styled.span`
  font-size: inherit;
  font-family: ${({ theme }: STypographyProps) => theme.fontFamily};
`);

const STypographyHeading = withRiaTheme(styled.h1`
  font-size: 22px;
  font-family: ${({ theme }: STypographyProps) => theme.fontFamily};
`);

export { STypography, STypographyHeading };
