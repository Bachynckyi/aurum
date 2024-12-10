import scss from './NotFoundPage.module.scss';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>Помилка !</h1>
          <h1 className={scss.title}>Сторінку не знайдено!</h1>
          <NavLink to="/" className={scss.button}>На головну</NavLink>
        </div>
    </div>
        
  )
};

export default NotFoundPage;

