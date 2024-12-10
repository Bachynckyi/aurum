import scss from "./ServicePage.module.scss";
import service1 from '../../images/services/service1.jpg';

const ServicePage1 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>Консультація лікаря фізичної та реабілітаційної медицини</h1>
            <div className={scss.content_wrapper}>
              <img src={service1} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>Оцінка психоемоційного функціонального стану пацієнта на момент початку реабілітації, з урахуванням даних висновку військово-лікарської комісії, анамнезу хвороби та анамнезу життя. Встановлення індивідуального плану реабілітації, рекомендації по режиму та харчуванню в залежності від результатів огляду, конституції пацієнта та особливостей біографії.</span>
            </div>         
        </div>
    </div>
        
  )
};

export default ServicePage1;
