import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const UserRoutes = () => {
  const location = useLocation();;

  return (
    <>
        <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage/>}></Route>
        </Routes>
    </>
  );
};

export default UserRoutes;