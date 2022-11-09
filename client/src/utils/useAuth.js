import useCookies from './useCookies';
import useValidation from './useValidation';

const API_AUTH = 'http://localhost:3072/api/auth/';
const API_SIGN_IN = 'http://localhost:3072/api/auth/sign-in';
const API_SIGN_UP = 'http://localhost:3072/api/auth/sign-up';

const useAuth = () => {
  const { getCookie } = useCookies();
  const { validateEmail, validatePassword, validateRepeatedPassword } =
    useValidation();

  return {
    checkAuth: async () => {
      const res = await fetch(API_AUTH, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${getCookie('token')}`,
        },
      });

      const { success, error } = await res.json();

      return { success, error };
    },
    signIn: async (email, password) => {
      if (!validateEmail(email) || !validatePassword(password))
        return {
          success: false,
          error: { message: 'Invalid e-mail or password.' },
        };

      const res = await fetch(API_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ email, password }),
      });

      const { success, token, refreshToken, error } = await res.json();

      return { success, token, refreshToken, error };
    },
    signUp: async (email, password, repeatPassword, currentStep = 0) => {
      if (currentStep === 0) {
        if (!validateEmail(email))
          return {
            success: false,
            error: { field: 'email', message: 'Invalid email.' },
            nextStep: 0,
          };

        return { success: false, error: {}, nextStep: 1 };
      }

      if (!validateEmail(email))
        return {
          success: false,
          error: { field: 'email', message: 'Invalid email.' },
          nextStep: 0,
        };

      if (!validatePassword(password))
        return {
          success: false,
          error: {
            field: 'password',
            message: 'Password is not strong enough.',
          },
          nextStep: 1,
        };

      if (!validateRepeatedPassword(password, repeatPassword))
        return {
          success: false,
          error: {
            field: 'repeatPassword',
            message: 'Passwords do not match.',
          },
          nextStep: 1,
        };

      const res = await fetch(API_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ email, password, repeatPassword }),
      });

      const { success, token, refreshToken, error } = await res.json();

      return { success, token, refreshToken, error };
    },
  };
};

export default useAuth;
