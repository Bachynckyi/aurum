import scss from "./ServicePage.module.scss";
import service5 from '../../images/services/service5.png';
import { useTranslation } from 'react-i18next';

const ServicePage5 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title5")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service5} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text5")}</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage5;