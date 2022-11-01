import PropTypes from 'prop-types';

import StyledIconButton from './StyledIconButton';

const IconButton = ({ icon, size, variant }) => (
  <StyledIconButton icon={icon} variant={variant} size={size} type="button" />
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

IconButton.defaultProps = {
  size: 'normal',
  variant: 'normal',
};

export default IconButton;
