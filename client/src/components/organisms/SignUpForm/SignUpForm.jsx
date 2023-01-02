import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from 'components/atoms/Input/Input';
import Steps from 'components/atoms/Steps/Steps';

import useAuth from 'utils/useAuth';
import useCookies from 'utils/useCookies';

import logo from 'assets/images/my-board-logo.svg';

import { setInfo } from 'store/ui/ui.slice';

import StyledForm from './StyledSignUpForm';

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { signUp } = useAuth();
  const { setCookie } = useCookies();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;

    const { success, error, nextStep, accessToken, refreshToken } =
      await signUp(email, password, repeatPassword, currentStep);

    if (success) {
      setCookie('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      dispatch(setInfo({ isVisible: false, message: '', variant: 'info' }));
      navigate('/', { replace: true, state: { from: location } });
    } else {
      if (error.message)
        dispatch(
          setInfo({ isVisible: true, message: error.message, variant: 'error' })
        );
      setCurrentStep(nextStep);
    }
  };

  return (
    <StyledForm>
      <form className="form" onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="myBoard" />

        <Steps current={currentStep} setCurrent={setCurrentStep} />

        <div className={`fields ${currentStep === 0 ? 'current-step' : ''}`}>
          <Input
            inputId="email"
            label="E-mail"
            inputRef={emailRef}
            type="email"
          />
        </div>

        <div className={`fields ${currentStep === 1 ? 'current-step' : ''}`}>
          <Input
            inputId="password"
            label="Password"
            inputRef={passwordRef}
            type="password"
          />
          <Input
            inputId="repeatPassword"
            label="Repeat password"
            inputRef={repeatPasswordRef}
            type="password"
          />
        </div>

        <button className="submit" type="submit">
          {currentStep ? 'Sign in' : 'Next step'}
        </button>

        <div className="actions">
          <Link className="action-link sign-in" to="/sign-in">
            Have an account? Sign in!
          </Link>
        </div>
      </form>
    </StyledForm>
  );
};

export default SignUpForm;
