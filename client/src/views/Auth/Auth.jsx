import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useAuth from 'utils/useAuth';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = async () => {
      const isAuth = await useAuth();

      if (!isAuth)
        navigate('/sign-in', { replace: true, state: { from: location } });
    };

    auth();
  }, []);

  return <Outlet />;
};

export default Auth;
