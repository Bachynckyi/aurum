import scss from "./ServicePage.module.scss";
import service9 from '../../images/services/service9.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage9 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title9")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service9} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text9.1")}<br/>
                  {t("Service_text9.2")}<br/>
                  {t("Service_text9.3")}<br/>
                  {t("Service_text9.4")}<br/>
                  {t("Service_text9.5")}
              </span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage9;