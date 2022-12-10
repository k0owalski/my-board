import PropTypes from 'prop-types';

import ModalActions from 'components/molecules/ModalActions/ModalActions';
import StyledModal from './StyledModal';

const Modal = ({
  children,
  actions,
  successLabel,
  handleSuccess,
  cancelLabel,
  handleCancel,
}) => (
  <StyledModal>
    <div className="modal-inner">
      <div className="modal-content">{children}</div>
      {actions ? (
        <ModalActions
          successLabel={successLabel}
          cancelLabel={cancelLabel}
          handleSuccess={handleSuccess}
          handleCancel={handleCancel}
        />
      ) : null}
    </div>
  </StyledModal>
);

Modal.propTypes = {
  children: PropTypes.element,
  actions: PropTypes.bool,
  successLabel: PropTypes.string,
  handleSuccess: PropTypes.func,
  cancelLabel: PropTypes.string,
  handleCancel: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  actions: false,
  successLabel: '',
  handleSuccess: null,
  cancelLabel: '',
  handleCancel: null,
};

export default Modal;
