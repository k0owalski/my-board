import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Input from 'components/atoms/Input/Input';
import Steps from 'components/atoms/Steps/Steps';

import useSignUp from 'utils/useSignUp';
import useValidation from 'utils/useValidation';

import logo from 'assets/images/my-board-logo.svg';

import StyledForm from './StyledSignUpForm';

const SignUpForm = () => {
  const [error, setError] = useState({ field: null, message: null });
  const [currentStep, setCurrentStep] = useState(0);

  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const { validateEmail, validatePassword, validateRepeatedPassword } =
    useValidation();

  useEffect(() => {
    emailRef.current.classList.remove('is-invalid');
    passwordRef.current.classList.remove('is-invalid');
    repeatPasswordRef.current.classList.remove('is-invalid');

    if (error.field === 'email') emailRef.current.classList.add('is-invalid');
    else if (error.field === 'password')
      passwordRef.current.classList.add('is-invalid');
    else if (error.field === 'repeatPassword')
      repeatPasswordRef.current.classList.add('is-invalid');
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;

    if (currentStep === 0) {
      if (!validateEmail(email)) {
        setError({ field: 'email', message: 'Invalid email.' });
        setCurrentStep(0);
        return;
      }

      setCurrentStep(1);
      setError({ field: null, message: null });
      return;
    }

    if (!validateEmail(email)) {
      setError({ field: 'email', message: 'Invalid email.' });
      setCurrentStep(0);
      return;
    }

    if (!validatePassword(password)) {
      setError({
        field: 'password',
        message: 'Password is not strong enough.',
      });
      setCurrentStep(1);
      return;
    }

    if (!validateRepeatedPassword(password, repeatPassword)) {
      setError({
        field: 'repeatPassword',
        message: 'Passwords do not match.',
      });
      setCurrentStep(1);
      return;
    }

    const err = await useSignUp(email, password, repeatPassword);

    if (!err) {
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
