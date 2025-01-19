import scss from './VideoPage.module.scss';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const VideoPage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>{t("Video_title")}</h1>
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

export default VideoPage;

