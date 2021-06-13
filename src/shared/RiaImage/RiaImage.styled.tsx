import styled from 'styled-components';
import { IBaseTheme } from '../../features/Themes/Base';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type SImageProps = {
  width: number | string;
  height: number | string;
  theme: IBaseTheme;
};

const SImage = withRiaTheme(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid ${({ theme }: SImageProps) => theme.complementaryColor2};
  padding: 22px;
  min-height: ${({ height }: SImageProps) => height};
  min-width: ${({ width }: SImageProps) => width};
`);

const SImageElement = withRiaTheme(styled.img`
  box-sizing: border-box;
  aspect-ratio: 16 / 20;
`);

const SImageLoading = withRiaTheme(styled.img`
  width: 30%;
  height: auto;
  box-sizing: border-box;
  aspect-ratio: 16 / 20;
  opacity: 0.3;
`);

export { SImage, SImageElement, SImageLoading };
