const API_AUTH = 'http://localhost:3072/api/auth/';

const useAuth = async () => {
  const res = await fetch(API_AUTH, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return res.ok;
};

export default useAuth;
