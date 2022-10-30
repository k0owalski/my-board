import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 100vh;

  position: relative;

  .watermark {
    font-size: 50rem;
    font-weight: 500;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: 0.04;
    z-index: -1;
    user-select: none;
  }

  .logo {
    width: 64%;
    max-width: 20rem;
  }

  .message {
    font-size: 1.5rem;
  }

  .button {
    padding: 1rem;
    margin: 2rem 0 0;

    font-size: 1.25rem;
    font-weight: 500;

    text-decoration: none;

    color: rgb(var(--color-background));
    background: rgb(var(--color-primary));
    border-radius: 2px;

    cursor: pointer;
  }
`;

export default StyledNotFound;
