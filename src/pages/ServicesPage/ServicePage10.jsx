import scss from "./ServicePage.module.scss";
import service10 from '../../images/services/service10.jpg';
import { useTranslation } from 'react-i18next';

const ServicePage8 = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title10")}</h1>
            <div className={scss.content_wrapper}>
              <img src={service10} alt='serviceImage' className={scss.image}/>
              <div className={scss.subcontainer}>
                <span className={scss.description}>{t("Service_text10")}</span>
                <ul className={scss.list}>{t("Service_list")}
                    <li className={scss.item}>{t("Service_item1")}</li>
                    <li className={scss.item}>{t("Service_item2")}</li>
                    <li className={scss.item}>{t("Service_item3")}</li>
                    <li className={scss.item}>{t("Service_item4")}</li>
                    <li className={scss.item}>{t("Service_item5")}</li>
                    <li className={scss.item}>{t("Service_item6")}</li>
                    <li className={scss.item}>{t("Service_item7")}</li>
                    <li className={scss.item}>{t("Service_item8")}</li>
                    <li className={scss.item}>{t("Service_item9")}</li>
                </ul>
              </div>
            </div>
          </div>
    </div>
        
  )
};

export default ServicePage8;