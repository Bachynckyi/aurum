import scss from "./ServicePage.module.scss";
import service6 from '../../images/services/service6.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage6 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title6")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service6} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text6.1")}<br/>{t("Service_text6.2")}</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage6;