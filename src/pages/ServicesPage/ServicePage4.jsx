import scss from "./ServicePage.module.scss";
import service4 from '../../images/services/service4.jpg';

const ServicePage4 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>Рефлексотерапія</h1>
            <div className={scss.content_wrapper}>
              <img src={service4} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>Рефлексотерапія – це вплив на активні точки тіла людини. одна з небагатьох альтернативних терапій, яка визнана ефективною та безпечною навіть представниками офіційної медицини.
                  При цьому виникає багатоступенева рефлекторна реакція, в процесі якої організм самовідновлюється.
                  Цей метод здатний надавати потужний вплив на весь організм в цілому, запустити захисні резерви людини, нормалізувати гормональний фон, процеси обміну, підвищити імунітет, надати заспокійливу та розслаблюючу дію.
              </span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage4;