import scss from './AboutPresentationPage.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const AboutPresentationPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
            <div className={scss.content_wrapper}>
                <h1 className={scss.title}>Наша презентація</h1>

            </div>
        <Footer/>
    </div>
        
  )
};

export default AboutPresentationPage;

