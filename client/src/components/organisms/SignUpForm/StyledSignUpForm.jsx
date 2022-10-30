import styled from 'styled-components';

import signUpIcon from 'assets/images/icon-sign-up.svg';
import forgotIcon from 'assets/images/icon-forgot-password.svg';
import errorIcon from 'assets/images/icon-error.svg';

const StyledForm = styled.div`
  width: 90%;
  max-width: 25rem;

  position: relative;

  .error {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    width: 100%;
    height: 3rem;

    position: absolute;
    top: -2rem;
    transform: translateY(2rem);

    padding: 0 3rem;

    color: rgb(var(--color-background));
    background: rgb(var(--color-error));
    border-radius: 2px;

    transition: transform 0.16s ease;
    z-index: -1;

    &.is-active {
      transform: translateY(-100%);
    }

    &::before {
      content: '';

      display: block;
      width: 1.25rem;
      height: 1.25rem;

      background-image: url('${errorIcon}');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 3rem;

    background: rgb(var(--color-background));
    border-radius: 2px;
    box-shadow: 0 0 12px 2px rgba(var(--color-text), 0.24);

    .logo {
      width: 64%;
      min-width: 9rem;

      margin: 0 auto 5rem;
    }

    .fields {
      display: none;
      flex-direction: column;
      gap: 2rem;

      margin: 0 0 2rem;

      &.current-step {
        display: flex;
      }
    }

    .submit {
      width: 100%;
      height: 3rem;

      margin: 0 0 2rem;

      font-family: 'Inter';
      font-size: 1.25rem;
      font-weight: 500;

      color: rgb(var(--color-background));
      background: rgb(var(--color-primary));

      &:hover {
        background: rgba(var(--color-primary), 0.9);
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .action-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.9rem;
        text-decoration: none;

        color: rgb(var(--color-text));

        &::before {
          content: '';

          width: 1.25rem;
          height: 1.25rem;

          background-image: url('${signUpIcon}');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        &.forgot-password::before {
          background-image: url('${forgotIcon}');
        }
      }
    }
  }
`;

export default StyledForm;
