import scss from './PartnersPage.module.scss';
import Partners from 'components/Partners/Partners';
import { useTranslation } from 'react-i18next';

const PartnersPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Partners_title")}</h1>
            <Partners/>
          </div>
    </div> 
  )
};

export default PartnersPage;

