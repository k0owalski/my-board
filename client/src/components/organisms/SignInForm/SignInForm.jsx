import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Input from 'components/atoms/Input/Input';

import useLogin from 'utils/useLogin';
import { validateEmail, validatePassword } from 'utils/useValidation';

import logo from 'assets/images/my-board-logo.svg';

import StyledForm from './StyledSignInForm';

const SignInForm = () => {
  const [errors, setErrors] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (validateEmail(email) && validatePassword(password)) {
      const response = await useLogin(email, password);

      if (response.success) {
        document.cookie = `token=${response.token};`;
        localStorage.setItem('refresh', response.refresh);

        navigate('/', { replace: true, state: { from: location } });
      } else setErrors(response.errors);
    } else setErrors(['Invalid e-mail or password.']);
  };

  return (
    <StyledForm>
      {errors?.map((error) => (
        <div className="error is-active">{error}</div>
      ))}
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
