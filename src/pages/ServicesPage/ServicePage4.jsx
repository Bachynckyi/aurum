import scss from "./ServicePage.module.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import service3 from '../../images/services/service3.jpg';

const ServicePage4 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Рефлексотерапія</h1>
            <img src={service3} alt='serviceImage' className={scss.image}/>
            <span className={scss.description}>Рефлексотерапія – це вплив на активні точки тіла людини. одна з небагатьох альтернативних терапій, яка визнана ефективною та безпечною навіть представниками офіційної медицини.
                При цьому виникає багатоступенева рефлекторна реакція, в процесі якої організм самовідновлюється.
                Цей метод здатний надавати потужний вплив на весь організм в цілому, запустити захисні резерви людини, нормалізувати гормональний фон, процеси обміну, підвищити імунітет, надати заспокійливу та розслаблюючу дію.
            </span>
        </div>
        <Footer/>
    </div>
        
  )
};

export default ServicePage4;