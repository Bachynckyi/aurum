import scss from "./ServicePage.module.scss";
import service8 from '../../images/services/service8.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";

const ServicePage8 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("Service_title8")}</title>
        <meta name="description" content={t("Service_title8")}/>
        <link rel="canonical" href="https://www.clinic-aurum.com/services"></link>
      </Helmet>
      <div className={scss.container}>
          <div className={scss.main_wrapper}>
              <h1 className={scss.title}>{t("Service_title9")}</h1>
              <div className={scss.content_wrapper}>
                <img src={service8} alt='serviceImage' className={scss.image}/>
                <span className={scss.description}>{t("Service_text9.1")}<br/>
                    {t("Service_text9.2")}<br/>
                    {t("Service_text9.3")}<br/>
                    {t("Service_text9.4")}<br/>
                    {t("Service_text9.5")}
                </span>
              </div>
          </div>
      </div>
    </>
  )
};

export default ServicePage8;