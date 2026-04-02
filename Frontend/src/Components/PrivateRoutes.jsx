import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { isError } = useSelector((store) => store.auth);

  if (
    (location.pathname === '/login' && isError.status === 401) ||
    isError.status === null
  ) {
    return <Navigate to="/signup" />;
  } else if (location.pathname === '/login' && isError.status === 404) {
    return <Navigate to="/login" />;
  } else if (location.pathname === '/signup' && isError.status === 404) {
    return <Navigate to="/login" />;
  }
  return children;
};
