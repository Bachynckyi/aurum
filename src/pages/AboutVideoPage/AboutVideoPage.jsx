import scss from './AboutVideoPage.module.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ReactPlayer from 'react-player'

const AboutVideoPage = () => {

  return (
    <div className={scss.container}>
        <div className={scss.background_wrapper1}></div>
        <div className={scss.background_wrapper3}></div>
        <Header/>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>Відео про нас</h1>
          <div className={scss.video_wrapper}>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=wc8NOpoWYcE' 
              controls={true}
              width="100%"
              height="100%"
              className={scss.react_player}
              />
          </div>
        </div>
        <Footer/>
    </div>
        
  )
};

export default AboutVideoPage;

