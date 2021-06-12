import styled from 'styled-components';

/**
 * Hardcoded values are bad, but I am tired xD
 */
const SShelfDetailsModal = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 20; // This should be kept in a design system and be tracked to not conflict with others :)
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

const SShelfDetailsModalWindow = styled.div`
  background: white;
  border-radius: 12px;
  width: 960px;
  max-height: calc(100vh - 400px);
`;

const SShelfDetailsModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 80;
  height: inherit;
  align-items: center;
  padding: 40px;
  gap: 40px;
`;

const SShelfDetailsModalColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SShelfDetailsModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  font-size: 28px;
  width: 50px;
  height: 50px;
  background: none;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2) rotate(7deg);
    background: #f1f1f1;
    border-radius: 50px;
  }

  &:after {
    display: block;
    content: '✘';
  }
`;

export {
  SShelfDetailsModal,
  SShelfDetailsModalWindow,
  SShelfDetailsModalContent,
  SShelfDetailsModalColumn,
  SShelfDetailsModalCloseButton,
};
