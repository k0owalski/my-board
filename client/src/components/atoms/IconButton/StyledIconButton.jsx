import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledIconButton = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;

  position: relative;

  background-image: url('${({ icon }) => icon}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 1rem;
      height: 1rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 2rem;
      height: 2rem;
    `}

  ${({ variant }) =>
    variant === 'notification' &&
    css`
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
    `}
`;

export default StyledIconButton;
