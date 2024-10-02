import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutVideoPage = lazy(() => import('./pages/AboutVideoPage/AboutVideoPage'));
const AboutHonorsPage = lazy(() => import('./pages/AboutHonorsPage/AboutHonorsPage'));
const AboutPresentationPage = lazy(() => import('./pages/AboutPresentationPage/AboutPresentationPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage/PartnersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const ServicePage1 = lazy(() => import('./pages/ServicesPage/ServicePage1'));
const ServicePage2 = lazy(() => import('./pages/ServicesPage/ServicePage2'));
const ServicePage3 = lazy(() => import('./pages/ServicesPage/ServicePage3'));
const ServicePage4 = lazy(() => import('./pages/ServicesPage/ServicePage4'));
const ServicePage5 = lazy(() => import('./pages/ServicesPage/ServicePage5'));
const ServicePage6 = lazy(() => import('./pages/ServicesPage/ServicePage6'));
const ServicePage7 = lazy(() => import('./pages/ServicesPage/ServicePage7'));
const ServicePage8 = lazy(() => import('./pages/ServicesPage/ServicePage8'));
const ServicePage9 = lazy(() => import('./pages/ServicesPage/ServicePage9'));
const ServicePage10 = lazy(() => import('./pages/ServicesPage/ServicePage10'));

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
            <Route path="/partners" element={<PartnersPage/>}/>
            <Route path="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini" element={<ServicePage1/>}/>
            <Route path="/services/konsultaciya-psihologa" element={<ServicePage2/>}/>
            <Route path="/services/postizometrichna-relaksaciya" element={<ServicePage3/>}/>
            <Route path="/services/refleksoterapiya" element={<ServicePage4/>}/>
            <Route path="/services/manualna-terapiya-hrebta-ta-suglobiv" element={<ServicePage5/>}/>
            <Route path="/services/ritmichne-vtirannya" element={<ServicePage6/>}/>
            <Route path="/services/kinezioterapiya" element={<ServicePage7/>}/>
            <Route path="/services/gidrokinezioterapiya" element={<ServicePage8/>}/>
            <Route path="/services/maslyano-dispersijni-vanni" element={<ServicePage9/>}/>
            <Route path="/services/aparatna-presoterapiya" element={<ServicePage10/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;