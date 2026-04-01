import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }

  return children;
};
