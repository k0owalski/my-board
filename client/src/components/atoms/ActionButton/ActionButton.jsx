import PropTypes from 'prop-types';

import StyledActionButton from './StyledActionButton';

const ActionButton = ({ label, alternative, handleClick }) => (
  <StyledActionButton
    type="button"
    alternative={alternative}
    onClick={handleClick}
  >
    {label}
  </StyledActionButton>
);

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  alternative: PropTypes.bool,
  handleClick: PropTypes.func,
};

ActionButton.defaultProps = {
  alternative: false,
  handleClick: null,
};

export default ActionButton;
