import scss from './NotFoundPage.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>Помилка !</h1>
          <h1 className={scss.title}>Сторінку не знайдено!</h1>
          <NavLink to="/" className={scss.button}>На головну</NavLink>
        </div>
        <Footer/>
    </div>
        
  )
};

export default NotFoundPage;

