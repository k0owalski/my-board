import IconButton from 'components/atoms/IconButton/IconButton';
import ProfileButton from 'components/atoms/ProfileButton/ProfileButton';
import Boards from 'components/molecules/Boards/Boards';

import logoImg from 'assets/images/my-board-logo.svg';
import notificationIcon from 'assets/images/icon-notification.svg';
import chatIcon from 'assets/images/icon-chat.svg';

import StyledNavbar from './StyledNavbar';

const Navbar = () => (
  <StyledNavbar>
    <img src={logoImg} alt="myBoard logo" className="logo" />
    <div className="nav-buttons">
      <button className="button" type="button">
        Join a board
      </button>
      <button className="button button--filled" type="button">
        A new board
      </button>
    </div>
    <div className="board-list-wrapper">
      <div className="section-heading">Boards</div>
      <Boards />
    </div>
    <div className="user-actions">
      <ProfileButton username="Konrad" />
      <div className="notification-wrapper">
        <IconButton icon={notificationIcon} variant="notification" />
        <IconButton icon={chatIcon} variant="notification" />
      </div>
    </div>
    <span className="copyright">
      2022 &copy; myBoard by Konrad Kowalik. All rights reserved.
    </span>
  </StyledNavbar>
);

export default Navbar;
