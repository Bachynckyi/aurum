import scss from './SupportPage.module.scss';
import { useTranslation } from 'react-i18next';

const SupportPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Support_title")}</h1>

          </div>
    </div> 
  )
};

export default SupportPage;

