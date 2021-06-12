import styled, { css } from 'styled-components';
import withRiaTheme from '../../core/hocs/withRiaTheme';

type SCardType = {
  orientation: 'vertical' | 'horizontal';
};

const SCard = withRiaTheme(styled.div`
  display: flex;

  ${({ orientation }: SCardType) =>
    orientation === 'vertical'
      ? css`
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
        `
      : css`
          flex-direction: row;
          justify-content: space-between;
        `}
  cursor: pointer;
  padding: 22px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: 0.4s all;

  &:hover {
    transform: scale(1.08);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`);

export { SCard };
