import scss from './PartnersPage.module.scss';
import Partners from 'components/Partners/Partners';

const PartnersPage = () => {

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Наші партнери</h1>
            <Partners/>
          </div>
    </div>
        
  )
};

export default PartnersPage;

