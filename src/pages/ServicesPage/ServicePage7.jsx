import scss from "./ServicePage.module.scss";
import service7 from '../../images/services/service7.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage7 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title7")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service7} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text7")}</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage7;