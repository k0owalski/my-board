import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { getUserData } from 'store/user/userSlice';
import { getBoards } from 'store/boards/boardsSlice';

import useAuth from 'utils/useAuth';

const Auth = () => {
  const { user, boards } = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = async () => {
      const isAuth = await useAuth();

      if (!isAuth) {
        navigate('/sign-in', { replace: true, state: { from: location } });
        return;
      }

      if (!user || !user?.id) dispatch(getUserData());
      if (!boards || boards?.length === 0) dispatch(getBoards());
    };

    auth();
  }, []);

  return <Outlet />;
};

export default Auth;
