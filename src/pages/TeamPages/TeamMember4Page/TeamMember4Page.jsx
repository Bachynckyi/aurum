import scss from './TeamMember4Page.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../../images/team/team_member_4.jpg';

const TeamMember4Page = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <img src={photo} alt="team_member" className={scss.image}/>
            <h1 className={scss.title}>{t("TeamMember4_name")}</h1>
            <h2>{t("TeamMember4_position")}</h2>
            <span>{t("TeamMember4_achievment1")}</span>
            <span>{t("TeamMember4_achievment2")}</span>
            <span>{t("TeamMember4_text1")}</span>
            <span>{t("TeamMember4_text2")}</span>
            <span>{t("TeamMember4_text3")}</span>
        </div>
    </div>  
  )
};

export default TeamMember4Page;