import { Link } from 'react-router-dom';

import logoImg from 'assets/images/my-board-logo.svg';

import StyledNotFound from './StyledNotFound';

const NotFound = () => (
  <StyledNotFound>
    <div className="watermark">404</div>
    <img src={logoImg} alt="myBoard logo" className="logo" />
    <div className="message">
      We cannot find resources you’ve been looking for
    </div>
    <Link to="/" className="button">
      Back to home page
    </Link>
  </StyledNotFound>
);

export default NotFound;
