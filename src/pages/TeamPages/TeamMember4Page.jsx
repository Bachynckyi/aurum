import scss from './TeamMemberPage.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../images/team/team_member_4.jpg';

const TeamMember4Page = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <div className={scss.image_wrapper}>
            <img src={photo} alt="team_member" className={scss.image}/>
            <h1 className={scss.title}>{t("TeamMember4_name")}</h1>
            <h2 className={scss.subtitle}>{t("TeamMember4_position")}</h2>
          </div>
          <div className={scss.list_wrapper}>
            <ul className={scss.list}>{t("TeamMember_specialization")}:
              <li className={scss.list_item}>{t("TeamMember4_specialization1")}</li>
              <li className={scss.list_item}>{t("TeamMember4_specialization2")}</li>
            </ul>
            <ul className={scss.list}>{t("TeamMember_education")}:
              <li className={scss.list_item}>{t("TeamMember4_text1")}</li>
              <li className={scss.list_item}>{t("TeamMember4_text2")}</li>
              <li className={scss.list_item}>{t("TeamMember4_text3")}</li>
            </ul>
          </div>
        </div>
    </div>  
  )
};

export default TeamMember4Page;