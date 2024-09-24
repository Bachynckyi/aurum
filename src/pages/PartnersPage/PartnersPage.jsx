import scss from './PartnersPage.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Partners from 'components/Partners/Partners';

const PartnersPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>Наші партнери</h1>
          <Partners/>
        </div>
        <Footer/>
    </div>
        
  )
};

export default PartnersPage;

