import styled from 'styled-components';

import addIcon from 'assets/images/icon-board-add.svg';
import joinIcon from 'assets/images/icon-board-join.svg';
import userIcon from 'assets/images/icon-user.svg';
import notificationIcon from 'assets/images/icon-notification.svg';
import chatIcon from 'assets/images/icon-chat.svg';

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

  .nav-buttons {
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
  }

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

    .board-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      width: 100%;
      height: 100%;

      list-style-type: none;

      .board-name {
        display: flex;
        gap: 1rem;

        width: 100%;

        font-weight: 300;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        cursor: pointer;

        &.is-active {
          font-weight: 500;
        }
      }
    }
  }

  .user-actions {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 2.5rem;

    .user-profile-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      width: 100%;

      &::before {
        content: '';

        width: 1.5rem;
        height: 1.5rem;

        background-image: url('${userIcon}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .username {
        font-family: 'Inter';
        font-weight: 500;

        color: rgb(var(--color-primary));

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .notification-wrapper {
      display: flex;
      gap: 1rem;

      width: 100%;

      .notification {
        width: 1.5rem;
        height: 1.5rem;

        position: relative;

        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        &::after {
          content: '2';

          display: flex;
          justify-content: center;
          align-items: center;

          width: 1rem;
          height: 1rem;

          position: absolute;
          bottom: 0;
          right: 0;
          transform: translate(25%, 25%);

          font-family: 'Inter';
          font-size: 0.75rem;
          font-weight: 300;
          line-height: 0;

          color: rgb(var(--color-background));
          background: rgb(var(--color-primary));
          border-radius: 50%;
        }
      }

      .global-notifications {
        background-image: url('${notificationIcon}');
      }

      .chat-notifications {
        background-image: url('${chatIcon}');
      }
    }
  }

  .copyright {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;

export default StyledNavbar;
