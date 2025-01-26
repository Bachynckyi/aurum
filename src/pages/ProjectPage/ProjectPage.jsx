import scss from './ProjectPage.module.scss';
import { useTranslation } from 'react-i18next';

const ProjectPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
          <h1 className={scss.title}>{t("Project_title")}</h1>
          <div>
            <p className={scss.text}>{t("Project_text1")}</p>
            <p className={scss.text}>{t("Project_text2")}</p>
            <ul className={scss.list}>{t("Project_list1_title")}
                <li>{t("Project_list1_item1")}</li>
                <li>{t("Project_list1_item2")}</li>
                <li>{t("Project_list1_item3")}</li>
                <li>{t("Project_list1_item4")}</li>
            </ul>
            <p className={scss.text}>{t("Project_text3")}</p>
            <ul className={scss.list}>{t("Project_list2_title")}
                <li>{t("Project_list2_item1")}</li>
                <li>{t("Project_list2_item2")}</li>
                <li>{t("Project_list2_item3")}</li>
                <li>{t("Project_list2_item4")}</li>
                <li>{t("Project_list2_item5")}</li>
                <li>{t("Project_list2_item6")}</li>
            </ul>
            <p className={scss.text}>{t("Project_text4")}</p>
          </div>
        </div>
    </div>
        
  )
};

export default ProjectPage;

