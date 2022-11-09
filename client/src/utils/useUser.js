import { useDispatch } from 'react-redux';

import { getUser } from 'store/user/user.slice';

import useCookies from './useCookies';

const API_GET_USER = 'http://localhost:3072/api/users/me';

const useUser = () => {
  const dispatch = useDispatch();
  const { getCookie } = useCookies();

  return {
    getUser: async () => {
      const res = await fetch(API_GET_USER, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${getCookie('token')}`,
        },
      });

      const { success, error, user } = await res.json();

      if (success) dispatch(getUser(user));

      return { success, error };
    },
  };
};

export default useUser;
