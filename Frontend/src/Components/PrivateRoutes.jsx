import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  if (!isAuth) {
    return <Navigate to={'/login'} />;
  } /* siraj bhai ka chuchi mast h usse dudh niklna hai or sab ko batna hai */

  return children;
};
