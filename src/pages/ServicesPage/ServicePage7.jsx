import scss from "./ServicePage.module.scss";
import service7 from '../../images/services/service7.jpg';

const ServicePage7 = () => {

  return (
    <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>Кінезіотерапія</h1>
            <div className={scss.content_wrapper}>
              <img src={service7} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>Кінезітерапія або лікування рухом — напрямок фізичної терапії, який передбачає виконання активних і пасивних рухів, певних вправ лікувальної гімнастики та роботи на тренажерах для досягнення конкретного терапевтичного результату.</span>
            </div>
        </div>
    </div>
        
  )
};

export default ServicePage7;