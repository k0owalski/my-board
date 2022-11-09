import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { setAuth } from 'store/auth/auth.slice';

import Loading from 'views/Loading/Loading';

import useAuth from 'utils/useAuth';

const Auth = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const location = useLocation();

  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth()
      .then(({ success }) => {
        dispatch(setAuth(success));
        setIsLoading(false);
      })
      .catch();
  }, []);

  if (isLoading) return <Loading />;

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default Auth;
