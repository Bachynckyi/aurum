import scss from './AboutHonorsPage.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import honor1 from '../../images/honors/honor1.jpg';
import honor2 from '../../images/honors/honor2.jpg';
import honor3 from '../../images/honors/honor3.jpg';

const AboutHonorsPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>Наші відзнаки та подяки</h1>
          <div className={scss.photo_wrapper}>    
              <img src={honor1} alt="imageHonor"/>
              <img src={honor2} alt="imageHonor"/>
              <img src={honor3} alt="imageHonor"/>
          </div>
        </div>
        <Footer/>
    </div>
        
  )
};

export default AboutHonorsPage;

