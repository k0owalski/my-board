import styled from 'styled-components';

const StyledNavbar = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr min-content min-content;
  gap: 3rem;

  width: 20rem;
  height: 100vh;

  padding: 3rem;

  background: rgb(var(--color-background));
  box-shadow: 0 0 12px -4px rgba(var(--color-text), 0.24);

  .board-list-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
    gap: 1rem;

    width: 100%;
    height: 100%;

    .section-heading {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: max-content;
      gap: 1rem;

      width: 100%;

      font-family: 'Inter';
      font-weight: 300;

      color: rgb(var(--color-primary));

      &::after {
        content: '';

        display: block;
        width: 100%;
        height: 50%;

        border-bottom: 1px solid rgba(var(--color-primary), 0.5);
      }
    }
  }

  .user-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;

export default StyledNavbar;
