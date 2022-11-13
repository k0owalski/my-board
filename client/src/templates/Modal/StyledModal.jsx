import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(var(--color-text), 0.16);
  backdrop-filter: blur(4px);

  .modal-inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;

    background: rgb(var(--color-background));
    border-radius: 2px;
    box-shadow: 0 0 12px -4px rgba(var(--color-text), 0.24);
  }
`;

export default StyledModal;
