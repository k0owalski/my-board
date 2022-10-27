const API_AUTH = 'http://localhost:3072/api/auth/';

const useAuth = async () => {
  const token = document.cookie.slice(6);

  const res = await fetch(API_AUTH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ token }),
  });

  const { success } = await res.json();

  return success;
};

export default useAuth;
