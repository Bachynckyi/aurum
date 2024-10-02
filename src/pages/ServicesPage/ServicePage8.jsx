import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service7 from '../../images/services/service7.jpg';

const ServicePage8 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Гідрокінезіотерапія</h1>
            <img src={service7} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Засіб фізичної реабілітації, який полягає у виконанні  фізичної терапії (спеціальних фізичних вправ) у водному середовищі (басейні). Особливістю гідрокінезотерапії є поєднання виконання фізичних вправ в умовах антигравітаційного середовища, хімічного та температурного фактору води з лікувальною і профілактичною метою. Заняття проводяться під наглядом лікаря фізичної та реабілітаційної медицини та/або фахівцем з фізичної реабілітації.</span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage8;