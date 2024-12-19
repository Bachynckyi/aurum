import scss from './AboutVideoPage.module.scss';
import ReactPlayer from 'react-player'

const AboutVideoPage = () => {

  return (
    <div className={scss.container}>
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
          <div className={scss.video_wrapper}>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=O8hW6GgZ6v4' 
              controls={true}
              width="100%"
              height="100%"
              className={scss.react_player}
              />
          </div>
          <div className={scss.video_wrapper}>
            <ReactPlayer 
              url='https://youtu.be/mzYagWGKGlw' 
              controls={true}
              width="100%"
              height="100%"
              className={scss.react_player}
              />
          </div>
        </div>
    </div>
        
  )
};

export default AboutVideoPage;

