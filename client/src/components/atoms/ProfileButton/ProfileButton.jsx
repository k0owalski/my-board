import PropTypes from 'prop-types';

import StyledProfileButton from './StyledProfileButton';

const ProfileButton = ({ username }) => (
  <StyledProfileButton>
    <span className="username">{username}</span>
  </StyledProfileButton>
);

ProfileButton.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileButton;
