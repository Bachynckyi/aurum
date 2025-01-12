import scss from './NotFoundPage.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>{t("PageNotFound_title_error")}</h1>
          <h1 className={scss.title}>{t("PageNotFound_title_text")}</h1>
          <NavLink to="/" className={scss.button}>{t("PageNotFound_title_link")}</NavLink>
        </div>
    </div>
        
  )
};

export default NotFoundPage;

