/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Input from 'components/atoms/Input/Input';

import useAuth from 'utils/useAuth';
import useCookies from 'utils/useCookies';

import logo from 'assets/images/my-board-logo.svg';

import StyledForm from './StyledSignInForm';

const SignInForm = () => {
  const [error, setError] = useState({ field: null, message: null });

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();
  const { setCookie } = useCookies();

  useEffect(() => {
    emailRef.current.classList.remove('is-invalid');
    passwordRef.current.classList.remove('is-invalid');

    if (error.field === 'email') emailRef.current.classList.add('is-invalid');
    else if (error.field === 'password')
      passwordRef.current.classList.add('is-invalid');
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const {
      success,
      token,
      refreshToken,
      error: err,
    } = await signIn(email, password);

    if (success) {
      setCookie('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/', { replace: true, state: { from: location } });
    } else setError(err);
  };

  return (
    <StyledForm>
      <div className={`error ${error.message ? 'is-active' : null}`}>
        {error.message}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="myBoard" />

        <div className="fields">
          <Input
            inputId="e-mail"
            label="E-mail"
            inputRef={emailRef}
            type="e-mail"
          />
          <Input
            inputId="password"
            label="Password"
            inputRef={passwordRef}
            type="password"
          />
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
    </StyledForm>
  );
};

export default SignInForm;
