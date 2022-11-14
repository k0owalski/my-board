import styled from 'styled-components';

const StyledAddBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .main {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .input {
      min-width: 12rem;
      width: 100%;
      height: 2.5rem;

      padding: 0 0 0 1rem;

      background: rgba(var(--color-text), 0.12);
      border-bottom: 1px solid rgb(var(--color-text));

      &.is-invalid {
        border-bottom: 1px solid rgb(var(--color-error));
      }
    }
  }
`;

export default StyledAddBoard;
