import scss from "./ServicePage.module.scss";
import service2 from '../../images/services/service2.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage2 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title2")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service2} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text2.1")}<br/>
                  {t("Service_text2.2")}<br/>
                  {t("Service_text2.3")}<br/>
                  {t("Service_text2.4")}
              </span>
            </div>     
        </div>
    </div>
        
  )
};

export default ServicePage2;