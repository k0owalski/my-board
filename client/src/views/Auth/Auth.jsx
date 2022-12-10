import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { setAuth } from 'store/auth/auth.slice';

import Loading from 'views/Loading/Loading';

import useAuth from 'utils/useAuth';
import useCookies from 'utils/useCookies';

const Auth = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const location = useLocation();

  const { checkAuth, refreshToken } = useAuth();
  const { setCookie } = useCookies();

  useEffect(() => {
    let isCanceled = false;

    checkAuth()
      .then(({ success }) => {
        if (!isCanceled) {
          if (success) {
            dispatch(setAuth(success));
            setIsLoading(false);
          } else {
            refreshToken()
              .then(({ success: sccss, accessToken, refreshToken: rfs }) => {
                if (sccss) {
                  setCookie('accessToken', accessToken);
                  localStorage.setItem('refreshToken', rfs);
                }

                dispatch(setAuth(sccss));
                setIsLoading(false);
              })
              .catch();
          }
        }
      })
      .catch();

    return () => {
      isCanceled = true;
    };
  }, []);

  if (isLoading) return <Loading />;

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default Auth;
