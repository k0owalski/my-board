import styled from 'styled-components';

const StyledSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ count }) => count}, 1fr);
  grid-template-rows: 2px;

  width: 100%;
  height: 2px;

  margin: 0 0 3rem;

  .step {
    width: 100%;
    height: 100%;

    background: rgba(var(--color-text), 0.2);
    border-radius: 1rem;

    transition: background 0.1s ease;

    &.is-active {
      background: rgb(var(--color-accept));
    }
  }
`;

export default StyledSteps;
