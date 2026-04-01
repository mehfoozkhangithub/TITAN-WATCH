import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Components/Navbar';
import { PrivateRoutes } from './Components/PrivateRoutes';

export const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <PrivateRoutes />
    </>
  );
};
