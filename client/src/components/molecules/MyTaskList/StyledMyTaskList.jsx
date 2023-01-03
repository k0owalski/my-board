import styled from 'styled-components';

import checkIcon from 'assets/images/icon-check.svg';

const StyledMyTaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  list-style-type: none;

  .task {
    display: grid;
    grid-template-columns: max-content max-content 1fr max-content;
    align-items: center;
    gap: 1rem;

    .task-button {
      width: 1.25rem;
      height: 1.25rem;

      position: relative;

      border: 1px solid rgba(var(--color-primary), 0.2);
      border-radius: 0.25rem;

      &--checked {
        border: 1px solid rgba(var(--color-primary), 0.5);

        &::before {
          content: '';

          width: 100%;
          height: 100%;

          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;

          background-image: url('${checkIcon}');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }

    .task-id {
      font-weight: 500;

      opacity: 0.5;
    }

    .task-link {
      display: block;

      height: 1.25rem;

      text-decoration: none;

      color: inherit;

      text-overflow: ellipsis;
      overflow: hidden;
    }

    .task-flag {
      &-1 {
        color: rgb(var(--color-task-flag-1));
      }
    }
  }
`;

export default StyledMyTaskList;
