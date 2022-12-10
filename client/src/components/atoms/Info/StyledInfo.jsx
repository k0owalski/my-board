import styled, { css } from 'styled-components';

import infoIcon from 'assets/images/icon-error.svg';

const StyledInfo = styled.div`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, calc(-100% - 1rem));
    }

    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    to {
      opacity: 0;
      transform: translate(-50%, calc(-100% - 1rem));
    }
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 50%;

  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, calc(-100% - 1rem));

  padding: 1rem 2rem;

  color: rgb(var(--color-text));
  background: rgb(var(--color-background));
  border-radius: 2px;
  box-shadow: 0 0 12px -4px rgba(var(--color-text), 0.5);

  animation-duration: 0.32s, 0.32s;
  animation-delay: 0s, 8s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
  animation-name: slideIn, slideOut;
  animation-play-state: paused;
  z-index: 1;

  &::before {
    content: '';

    display: block;
    width: 1.25rem;
    height: 1.25rem;

    background-image: url('${infoIcon}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  ${({ variant }) =>
    variant === 'success'
      ? css`
          color: rgb(var(--color-background));
          background: rgb(var(--color-primary));
        `
      : null}

  ${({ variant }) =>
    variant === 'error'
      ? css`
          color: rgb(var(--color-background));
          background: rgb(var(--color-error));
        `
      : null}

  ${({ isActive }) =>
    isActive
      ? css`
          animation-play-state: running;
        `
      : null}
`;

export default StyledInfo;
