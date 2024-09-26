import scss from './ServicePageOne.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const ServicePageOne = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Консультація лікаря фізичної та реабілітаційної медицини</h1>
            <span>Оцінка психоемоційного функціонального стану пацієнта на момент початку реабілітації, з урахуванням даних висновку військово-лікарської комісії, анамнезу хвороби та анамнезу життя. Встановлення індивідуального плану реабілітації, рекомендації по режиму та харчуванню в залежності від результатів огляду, конституції пацієнта та особливостей біографії.</span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePageOne;
