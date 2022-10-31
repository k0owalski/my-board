import logoImg from 'assets/images/my-board-logo.svg';

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
      <ul className="board-list">
        <li className="board-name">My first created board</li>
        <li className="board-name">my second board</li>
        <li className="board-name">And the third one</li>
      </ul>
    </div>
    <div className="user-actions">
      <div className="user-profile-button">
        <span className="username">Username</span>
      </div>
      <div className="notification-wrapper">
        <button className="global-notifications notification" type="button">
          <img src="" alt="" />
        </button>
        <button className="chat-notifications notification" type="button">
          <img src="" alt="" />
        </button>
      </div>
    </div>
    <span className="copyright">
      2022 &copy; myBoard by Konrad Kowalik. All rights reserved.
    </span>
  </StyledNavbar>
);

export default Navbar;
