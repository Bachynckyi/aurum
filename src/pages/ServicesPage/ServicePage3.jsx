import scss from "./ServicePage.module.scss";
import service3 from '../../images/services/service3.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage3 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title3")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service3} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text3")}</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage3;