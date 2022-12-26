import { Link } from 'react-router-dom';

import IconButton from 'components/atoms/IconButton/IconButton';
import ProfileButton from 'components/atoms/ProfileButton/ProfileButton';
import Boards from 'components/molecules/Boards/Boards';

import NavBoardButtons from 'components/molecules/NavBoardButtons/NavBoardButtons';

import logoImg from 'assets/images/my-board-logo.svg';
import notificationIcon from 'assets/images/icon-notification.svg';

import StyledNavbar from './StyledNavbar';

const Navbar = () => (
  <StyledNavbar>
    <Link to="/">
      <img src={logoImg} alt="myBoard logo" className="logo" />
    </Link>
    <NavBoardButtons />
    <div className="board-list-wrapper">
      <div className="section-heading">Boards</div>
      <Boards />
    </div>
    <div className="user-actions">
      <ProfileButton username="Konrad" />
      <IconButton icon={notificationIcon} variant="notification" />
    </div>
    <span className="copyright">
      2022 &copy; myBoard by Konrad Kowalik. All rights reserved.
    </span>
  </StyledNavbar>
);

export default Navbar;
