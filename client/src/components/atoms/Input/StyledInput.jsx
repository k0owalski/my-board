import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .label {
    font-family: 'Inter';
    font-size: 1rem;
  }

  .input {
    width: 100%;
    height: 2.5rem;

    padding: 0 0 0 1rem;

    background: rgba(var(--color-text), 0.12);
    border-bottom: 1px solid rgb(var(--color-text));
  }
`;

export default StyledInput;
