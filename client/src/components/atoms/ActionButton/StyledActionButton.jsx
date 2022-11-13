import styled, { css } from 'styled-components';

const StyledActionButton = styled.button`
  padding: 0.5rem 1rem;

  border: 1px solid rgba(var(--color-primary), 0.5);

  ${({ alternative }) =>
    alternative
      ? css`
          color: rgb(var(--color-background));
          background: rgb(var(--color-primary));
          border: none;
        `
      : null}
`;

export default StyledActionButton;
