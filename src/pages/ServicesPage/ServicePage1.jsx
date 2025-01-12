import scss from "./ServicePage.module.scss";
import service1 from '../../images/services/service1.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage1 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title1")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service1} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text1")}</span>
            </div>         
        </div>
    </div>
        
  )
};

export default ServicePage1;
