import scss from './AboutPresentationPage.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Link } from 'react-router-dom';
import { PiDownloadSimple } from "react-icons/pi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const AboutPresentationPage = () => {
  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Наша презентація</h1>
            <div className={scss.buttons_wrapper}>
              <Link 
                to="/assets/Презентація Аурум.pdf" 
                target="_blank" 
                download
                className={scss.button_download}
              >
              <PiDownloadSimple className={scss.icon}/>
              <span className={scss.button_download_text}>Завантажити презентацію</span>
              </Link>
              <Link 
                to="/assets/Презентація Аурум.pdf" 
                target="_blank" 
                // download
                className={scss.button_download}
              >
              <MdOutlineScreenSearchDesktop className={scss.icon}/>
              <span className={scss.button_download_text}>Переглянути презентацію</span>
              </Link>
            </div>
        </div>
        <Footer/>
    </div>
        
  )
};

export default AboutPresentationPage;

