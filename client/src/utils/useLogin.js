const API_SIGN_IN = 'http://localhost:3072/api/auth/sign-in';

const useLogin = async (email, password) => {
  const response = await fetch(API_SIGN_IN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ email, password }),
  });

  const { success, token, refresh, errors } = await response.json();

  return { success, token, refresh, errors };
};

export default useLogin;
