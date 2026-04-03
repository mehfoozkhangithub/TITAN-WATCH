import { Routes, Route } from 'react-router-dom';

import { Signup } from '../Pages/Signup';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { PrivateRoutes } from '../Components/PrivateRoutes';
import { Products } from '../Pages/Products';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<h1>Page not found!!</h1>}></Route>
    </Routes>
  );
};
