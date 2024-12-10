import scss from "./ServicePage.module.scss";
import service3 from '../../images/services/service3.jpg';

const ServicePage3 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>Постізометрична релаксація</h1>
            <div className={scss.content_wrapper}>
              <img src={service3} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>Методика для розслаблення м'язів, які знаходяться навіть в глибоких сегментах опорно-рухового апарату. Постізометрична релаксація основана на м'яких техніках мануального впливу для збільшення рухливості хребта і суглобів, відновлення еластичності м'язів та зв'язок.</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage3;