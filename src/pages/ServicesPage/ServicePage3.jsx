import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service3 from '../../images/services/service3.jpg';

const ServicePage3 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Постізометрична релаксація</h1>
            <img src={service3} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Методика для розслаблення м'язів, які знаходяться навіть в глибоких сегментах опорно-рухового апарату. Постізометрична релаксація основана на м'яких техніках мануального впливу для збільшення рухливості хребта і суглобів, відновлення еластичності м'язів та зв'язок.</span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage3;