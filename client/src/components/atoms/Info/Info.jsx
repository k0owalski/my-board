import PropTypes from 'prop-types';

import StyledInfo from './StyledInfo';

const Info = ({ message, variant, isActive }) => (
  <StyledInfo variant={variant} isActive={isActive}>
    <span className="message">{message}</span>
  </StyledInfo>
);

Info.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string,
  isActive: PropTypes.bool,
};

Info.defaultProps = {
  variant: 'info',
  isActive: false,
};

export default Info;
