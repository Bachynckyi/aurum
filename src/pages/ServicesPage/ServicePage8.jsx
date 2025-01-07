import scss from "./ServicePage.module.scss";
import service8 from '../../images/services/service8.jpg';

const ServicePage8 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>Гідрокінезіотерапія</h1>
            <div className={scss.content_wrapper}>
              <img src={service8} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>Засіб фізичної реабілітації, який полягає у виконанні  фізичної терапії (спеціальних фізичних вправ) у водному середовищі (басейні). Особливістю гідрокінезотерапії є поєднання виконання фізичних вправ в умовах антигравітаційного середовища, хімічного та температурного фактору води з лікувальною і профілактичною метою. Заняття проводяться під наглядом лікаря фізичної та реабілітаційної медицини та/або фахівцем з фізичної реабілітації.</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage8;