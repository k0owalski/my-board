import PropTypes from 'prop-types';

import ActionButton from 'components/atoms/ActionButton/ActionButton';

import StyledModalActions from './StyledModalActions';

const ModalActions = ({
  cancelLabel,
  successLabel,
  handleCancel,
  handleSuccess,
}) => (
  <StyledModalActions>
    <ActionButton label={cancelLabel} handleClick={handleCancel} />
    <ActionButton
      label={successLabel}
      alternative
      handleClick={handleSuccess}
    />
  </StyledModalActions>
);

ModalActions.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func.isRequired,
  cancelLabel: PropTypes.string,
  successLabel: PropTypes.string,
};

ModalActions.defaultProps = {
  cancelLabel: 'Cancel',
  successLabel: 'OK',
};

export default ModalActions;
