import PropTypes from 'prop-types';

import StyledIconButton from './StyledIconButton';

const IconButton = ({ icon, path, size, variant }) => (
  <StyledIconButton to={path} icon={icon} variant={variant} size={size} />
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
};

IconButton.defaultProps = {
  path: '/',
  size: 'normal',
  variant: 'normal',
};

export default IconButton;
