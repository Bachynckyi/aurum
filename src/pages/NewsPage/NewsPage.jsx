import scss from './NewsPage.module.scss';

const NewsPage = () => {

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>Новини</h1>
          </div>
    </div>
  )
};

export default NewsPage;
