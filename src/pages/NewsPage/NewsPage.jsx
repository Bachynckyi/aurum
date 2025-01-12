import scss from './NewsPage.module.scss';
import { useTranslation } from 'react-i18next';

const NewsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("News_title")}</h1>
          </div>
    </div>
  )
};

export default NewsPage;
