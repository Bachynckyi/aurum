import scss from './TeamMember2Page.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../../images/team/team_member_2.jpg';

const TeamMember2Page = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <img src={photo} alt="team_member" className={scss.image}/>
            <h1 className={scss.title}>{t("TeamMember2_name")}</h1>
            <h2>{t("TeamMember2_position")}</h2>
            <span>{t("TeamMember2_achievment2")}</span>
            <span>{t("TeamMember2_achievment3")}</span>
            <span>{t("TeamMember2_achievment4")}</span>
            <span>{t("TeamMember2_achievment5")}</span>
            <span>{t("TeamMember2_achievment6")}</span>
            <span>{t("TeamMember2_achievment7")}</span>
            <span>{t("TeamMember2_text1")}</span>
            <span>{t("TeamMember2_text2")}</span>
            <span>{t("TeamMember2_text3")}</span>
            <span>{t("TeamMember2_text4")}</span>
            <span>{t("TeamMember2_text5")}</span>
            <span>{t("TeamMember2_text6")}</span>
            <span>{t("TeamMember2_text7")}</span>
        </div>
    </div>
        
  )
};

export default TeamMember2Page;