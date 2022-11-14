import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCreateBoardVisible, setJoinBoardVisible } from 'store/ui/ui.slice';

import IconButton from 'components/atoms/IconButton/IconButton';
import ProfileButton from 'components/atoms/ProfileButton/ProfileButton';
import Boards from 'components/molecules/Boards/Boards';
import AddBoard from 'components/molecules/AddBoard/AddBoard';

import logoImg from 'assets/images/my-board-logo.svg';
import notificationIcon from 'assets/images/icon-notification.svg';
import chatIcon from 'assets/images/icon-chat.svg';

import StyledNavbar from './StyledNavbar';

const Navbar = () => {
  const { createBoardVisible, joinBoardVisible } = useSelector(
    (state) => state.ui
  );

  const dispatch = useDispatch();

  const showCreateModal = () => dispatch(setCreateBoardVisible(true));
  const showJoinModal = () => dispatch(setJoinBoardVisible(true));

  return (
    <>
      <StyledNavbar>
        <Link to="/">
          <img src={logoImg} alt="myBoard logo" className="logo" />
        </Link>
        <div className="nav-buttons">
          <button className="button" type="button" onClick={showJoinModal}>
            Join a board
          </button>
          <button
            className="button button--filled"
            type="button"
            onClick={showCreateModal}
          >
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
      {createBoardVisible ? (
        <AddBoard title="Enter the board name" action="create" />
      ) : null}
      {joinBoardVisible ? (
        <AddBoard title="Enter the board code" action="join" />
      ) : null}
    </>
  );
};

export default Navbar;
