import scss from "./ServicePage.module.scss";
import service8 from '../../images/services/service8.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage8 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title8")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service8} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text8")}</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage8;