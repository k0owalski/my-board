import { Navigate, useLocation } from 'react-router-dom';

const Auth = () => {
  const lctn = useLocation();

  return <Navigate to="/sign-in" state={{ from: lctn }} replace />;
};

export default Auth;
