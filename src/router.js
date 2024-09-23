import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutVideoPage = lazy(() => import('./pages/AboutVideoPage/AboutVideoPage'));
const AboutHonorsPage = lazy(() => import('./pages/AboutHonorsPage/AboutHonorsPage'));
const AboutPresentationPage = lazy(() => import('./pages/AboutPresentationPage/AboutPresentationPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));

const UserRoutes = () => {
  const location = useLocation();;

  return (
    <>
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage/>}></Route>
            <Route path="/about/video" element={<AboutVideoPage/>}/>
            <Route path="/about/honors" element={<AboutHonorsPage/>}/>
            <Route path="/about/presentation" element={<AboutPresentationPage/>}/>
            <Route path="/news" element={<NewsPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;