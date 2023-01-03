import styled from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 20rem);
  max-width: 50rem;
  height: 100%;

  position: absolute;
  top: 0;
  left: 20rem;

  margin: 3rem 4rem;
`;

export default StyledBoard;
