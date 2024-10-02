import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service7 from '../../images/services/service7.jpg';

const ServicePage7 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Кінезіотерапія</h1>
            <img src={service7} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Кінезітерапія або лікування рухом — напрямок фізичної терапії, який передбачає виконання активних і пасивних рухів, певних вправ лікувальної гімнастики та роботи на тренажерах для досягнення конкретного терапевтичного результату.</span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage7;