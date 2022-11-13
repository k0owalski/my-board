import PropTypes from 'prop-types';

import StyledModal from './StyledModal';

const Modal = ({ children }) => (
  <StyledModal>
    <div className="modal-inner">{children}</div>
  </StyledModal>
);

Modal.propTypes = {
  children: PropTypes.element,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
