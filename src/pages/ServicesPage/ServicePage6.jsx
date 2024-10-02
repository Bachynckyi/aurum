import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service6 from '../../images/services/service6.jpg';

const ServicePage6 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Ритмічне втирання</h1>
            <img src={service6} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Ритмічні втирання – робота з пацієнтом, яка включає об’єднане використання в терапії, як лікувальних засобів, так і спеціально приготовані для цього мазей і масла. Застосовуємо методики зовнішнього їх використання через втирання в тіло рухами певної спрямованості, які засновані на анатомо-фізіологічних особливостях формування людського організму.<br/>
                У терапії враховуються як конституційні особливості пацієнта, що допомагає у виборі впливу на органосистему відповідно до його конституції (серцевий тип, нирковий тип, печінковий тип, легеневий тип), так і локація симптомів виявлених порушень. Виходячи з цього для терапії вибираються відповідні зони тіла.
            </span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage6;