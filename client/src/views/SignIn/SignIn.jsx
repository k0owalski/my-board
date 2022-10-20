import logo from 'assets/images/my-board-logo.svg';
import { Link } from 'react-router-dom';

import StyledSignIn from './StyledSignIn';

const SignIn = () => (
  <StyledSignIn>
    <div className="form-wrapper">
      <form className="form">
        <img className="logo" src={logo} alt="myBoard" />
        <div className="fields">
          <div className="input-wrapper">
            <label className="label" htmlFor="e-mail">
              E-mail
            </label>
            <input
              className="input e-mail"
              id="e-mail"
              name="e-mail"
              type="e-mail"
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input password"
              id="password"
              name="password"
              type="password"
            />
          </div>
        </div>
        <button className="submit" type="submit">
          Sign in
        </button>
        <div className="actions">
          <Link className="action-link sign-up" to="/sign-up">
            New here? Sign up!
          </Link>
          <Link className="action-link forgot-password" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  </StyledSignIn>
);

export default SignIn;
