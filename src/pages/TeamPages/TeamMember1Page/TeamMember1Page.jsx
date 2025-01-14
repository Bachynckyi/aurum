import scss from './TeamMember1Page.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../../images/team/team_member_1.jpg';

const TeamMember1Page = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <img src={photo} alt="team_member" className={scss.image}/>
            <h1 className={scss.title}>{t("TeamMember1_name")}</h1>
            <h2>{t("TeamMember1_position")}</h2>
            <span>{t("TeamMember1_achievment2")}</span>
            <span>{t("TeamMember1_achievment3")}</span>
            <span>{t("TeamMember1_achievment4")}</span>
            <span>{t("TeamMember1_achievment5")}</span>
            <span>{t("TeamMember1_achievment6")}</span>
            <span>{t("TeamMember1_text1")}</span>
            <span>{t("TeamMember1_text2")}</span>
            <span>{t("TeamMember1_text3")}</span>
            <span>{t("TeamMember1_text4")}</span>
            <span>{t("TeamMember1_text5")}</span>
            <span>{t("TeamMember1_text6")}</span>
            <span>{t("TeamMember1_text7")}</span>
        </div>
    </div>
        
  )
};

export default TeamMember1Page;