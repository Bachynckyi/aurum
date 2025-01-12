import scss from "./ServicePage.module.scss";
import service4 from '../../images/services/service4.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage4 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title4")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service4} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text4")}</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage4;