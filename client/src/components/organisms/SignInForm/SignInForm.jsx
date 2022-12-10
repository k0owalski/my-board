/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from 'components/atoms/Input/Input';

import useAuth from 'utils/useAuth';
import useCookies from 'utils/useCookies';

import logo from 'assets/images/my-board-logo.svg';

import { setInfo } from 'store/ui/ui.slice';

import StyledForm from './StyledSignInForm';

const SignInForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();
  const { setCookie } = useCookies();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { success, accessToken, refreshToken, error } = await signIn(
      email,
      password
    );

    if (success) {
      setCookie('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      dispatch(setInfo({ isVisible: false, message: '', variant: 'info' }));
      navigate('/', { replace: true, state: { from: location } });
    } else
      dispatch(
        setInfo({ isVisible: true, message: error.message, variant: 'error' })
      );
  };

  return (
    <StyledForm>
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
