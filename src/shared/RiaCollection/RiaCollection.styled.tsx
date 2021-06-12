import styled, { css } from 'styled-components';

type SRiaCollectionStyledProps = {
  type: 'grid' | 'list';
};

const SRiaCollection = styled.div`
  display: grid;

  ${(props: SRiaCollectionStyledProps) => {
    if (props.type === 'grid') {
      return css`
        grid-template-columns: 33% 33% 33%;
        grid-gap: 40px;
      `;
    }

    return css`
      grid-template-columns: 100%;
      grid-auto-rows: minmax(110px, max-content);
      grid-gap: 40px;
    `;
  }}
`;

export { SRiaCollection };
