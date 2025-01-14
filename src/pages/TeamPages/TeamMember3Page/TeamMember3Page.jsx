import scss from './TeamMember3Page.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../../images/team/team_member_3.jpg';

const TeamMember3Page = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <img src={photo} alt="team_member" className={scss.image}/>
            <h1 className={scss.title}>{t("TeamMember3_name")}</h1>
            <h2>{t("TeamMember3_position")}</h2>
            <span>{t("TeamMember3_achievment1")}</span>
            <span>{t("TeamMember3_achievment2")}</span>
            <span>{t("TeamMember3_text1")}</span>
            <span>{t("TeamMember3_text2")}</span>
            <span>{t("TeamMember3_text3")}</span>
            <span>{t("TeamMember3_text4")}</span>
            <span>{t("TeamMember3_text5")}</span>
            <span>{t("TeamMember3_text6")}</span>
            <span>{t("TeamMember3_text7")}</span>
            <span>{t("TeamMember3_publication1")}</span>
            <span>{t("TeamMember3_publication2")}</span>
        </div>
    </div>  
  )
};

export default TeamMember3Page;