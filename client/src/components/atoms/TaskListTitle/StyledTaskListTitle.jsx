import styled from 'styled-components';

const StyledTaskListTitle = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 2rem;

  width: 100%;

  margin: 0 0 1.5rem;

  .title {
    font-size: 1.25rem;
    font-weight: 500;

    color: rgba(var(--color-primary), 0.64);
  }

  &::after {
    content: '';

    display: block;

    width: 100%;
    height: 1px;

    background-color: rgba(var(--color-primary), 0.24);
    border-radius: 1rem;
  }
`;

export default StyledTaskListTitle;
