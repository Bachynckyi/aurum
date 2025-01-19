import scss from './HonorsPage.module.scss';
import honor1 from '../../images/honors/honor1.jpg';
import honor2 from '../../images/honors/honor2.jpg';
import honor3 from '../../images/honors/honor3.jpg';
import honor4 from '../../images/honors/honor4.jpg';
import honor5 from '../../images/honors/honor5.jpg';
import honor6 from '../../images/honors/honor6.jpg';
import honor7 from '../../images/honors/honor7.jpg';
import honor8 from '../../images/honors/honor8.jpg';
import honor9 from '../../images/honors/honor9.jpg';
import honor10 from '../../images/honors/honor10.jpg';
import honor11 from '../../images/honors/honor11.jpg';
import { useTranslation } from 'react-i18next';

const HonorsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Honors_title")}</h1>
            <div className={scss.photo_wrapper}>    
                <img src={honor1} alt="imageHonor" className={scss.photo}/>
                <img src={honor2} alt="imageHonor" className={scss.photo}/>
                <img src={honor3} alt="imageHonor" className={scss.photo}/>
                <img src={honor4} alt="imageHonor" className={scss.photo}/>
                <img src={honor5} alt="imageHonor" className={scss.photo}/>
                <img src={honor6} alt="imageHonor" className={scss.photo}/>
                <img src={honor7} alt="imageHonor" className={scss.photo}/>
                <img src={honor8} alt="imageHonor" className={scss.photo}/>
                <img src={honor9} alt="imageHonor" className={scss.photo}/>
                <img src={honor10} alt="imageHonor" className={scss.photo}/>
                <img src={honor11} alt="imageHonor" className={scss.photo}/>
            </div>
        </div>
    </div>
        
  )
};

export default HonorsPage;

