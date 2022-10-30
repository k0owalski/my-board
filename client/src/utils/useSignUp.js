const API_SIGN_UP = 'http://localhost:3072/api/auth/sign-up';

const useSignUp = async (email, password, repeatPassword) => {
  try {
    await fetch(API_SIGN_UP, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ email, password, repeatPassword }),
    });
    return null;
  } catch (err) {
    return err;
  }
};

export default useSignUp;
