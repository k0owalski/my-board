import styled from 'styled-components';

const StyledBoards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  height: 100%;

  list-style-type: none;

  .board-name {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    gap: 1rem;

    font-weight: 300;

    cursor: pointer;

    &:hover .controlls {
      display: flex;
    }

    .board-name-button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;

      text-decoration: none;

      color: inherit;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &.is-active {
        font-weight: 500;
      }
    }

    .controlls {
      display: none;
      align-items: center;
      gap: 0.25rem;
    }
  }
`;

export default StyledBoards;
