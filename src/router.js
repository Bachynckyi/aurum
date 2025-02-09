import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../src/helpers/scrollToTop";
import { HelmetProvider } from "react-helmet-async";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutVideoPage = lazy(() => import('./pages/VideoPage/VideoPage'));
const AboutHonorsPage = lazy(() => import('./pages/HonorsPage/HonorsPage'));
// const AboutPresentationPage = lazy(() => import('./pages/PresentationPage/PresentationPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NewsOnePage = lazy(() => import('./pages/NewsOnePage/NewsOnePage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
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
const TeamMember1Page = lazy(() => import('./pages/TeamPages/TeamMember1Page'));
const TeamMember2Page = lazy(() => import('./pages/TeamPages/TeamMember2Page'));
const TeamMember3Page = lazy(() => import('./pages/TeamPages/TeamMember3Page'));
const TeamMember4Page = lazy(() => import('./pages/TeamPages/TeamMember4Page'));
// const MedicinePage = lazy(() => import('./pages/MedicinePage/MedicinePage'));
const SupportPage = lazy(() => import('./pages/SupportPage/SupportPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'));

const UserRoutes = () => {
  const location = useLocation();;

  return (
    <>
      <HelmetProvider>
        <Suspense fallback={null}>
        <ScrollToTop/>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage/>}></Route>
                <Route element={<Layout/>}>
                  <Route path="/about/video" element={<AboutVideoPage/>}/>
                  <Route path="/about/honors" element={<AboutHonorsPage/>}/>
                  {/* <Route path="/about/presentation" element={<AboutPresentationPage/>}/>
                  <Route path="/about/anthroposophical-medicine" element={<MedicinePage/>}/> */}
                  <Route path="/news" element={<NewsPage/>}/>
                  <Route path="/news/:id" element={<NewsOnePage/>}/>
                  <Route path="/partners" element={<PartnersPage/>}/>
                  <Route path="/reviews" element={<ReviewsPage/>}/>
                  <Route path="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini" element={<ServicePage1/>}/>
                  <Route path="/services/konsultaciya-psihologa" element={<ServicePage2/>}/>
                  <Route path="/services/postizometrichna-relaksaciya" element={<ServicePage3/>}/>
                  <Route path="/services/refleksoterapiya" element={<ServicePage4/>}/>
                  <Route path="/services/manualna-terapiya-hrebta-ta-suglobiv" element={<ServicePage5/>}/>
                  <Route path="/services/ritmichne-vtirannya" element={<ServicePage6/>}/>
                  <Route path="/services/kinezioterapiya" element={<ServicePage7/>}/>
                  <Route path="/services/maslyano-dispersijni-vanni" element={<ServicePage8/>}/>
                  <Route path="/services/aparatna-presoterapiya" element={<ServicePage9/>}/>
                  <Route path="/team/yevhen-volchenko" element={<TeamMember1Page/>}/>
                  <Route path="/team/snizhana-shcherbakova" element={<TeamMember2Page/>}/>
                  <Route path="/team/yuriy-korosko" element={<TeamMember3Page/>}/>
                  <Route path="/team/irina-sergiychuk" element={<TeamMember4Page/>}/>
                  <Route path="/support-project" element={<SupportPage/>}/>
                  <Route path="/project" element={<ProjectPage/>}/>
                  <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
          </AnimatePresence>
        </Suspense>
      </HelmetProvider>
    </>
  );
};

export default UserRoutes;