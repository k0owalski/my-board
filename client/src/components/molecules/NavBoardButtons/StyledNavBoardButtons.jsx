import styled from 'styled-components';

import addIcon from 'assets/images/icon-board-add.svg';
import joinIcon from 'assets/images/icon-board-join.svg';

const StyledNavBoardButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .button {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;

    padding: 0.5rem;

    font-weight: 500;

    color: rgb(var(--color-primary));
    background: rgb(var(--color-background));
    border: 1px solid rgb(var(--color-primary));
    border-radius: 2px;

    &::before {
      content: '';

      width: 1rem;
      height: 1rem;

      background-image: url('${joinIcon}');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &--filled {
      color: rgb(var(--color-background));
      background: rgb(var(--color-primary));

      &::before {
        background-image: url('${addIcon}');
      }
    }
  }
`;

export default StyledNavBoardButtons;
