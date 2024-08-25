import scss from './NewsSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import newsImage from '../../images/news_image.png';
import { ReactComponent as CalendarIcon} from "../../images/calendar_icon.svg";

const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "newsSlider",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={scss.slider}>
        <Slider {...settings}>
          <div className={scss.slider_card}>
            <img src={newsImage} alt='newsImage' className={scss.slider_image}/>
            <div className={scss.slider_text_wrapper}>
                <span className={scss.slider_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що</span>
                <div className={scss.slider_date_wrapper}>
                    <CalendarIcon/>
                    <span className={scss.slider_date}>12:39 <span className={scss.slider_date_decor}>|</span> 6 березня</span>
                </div>
            </div>
          </div>
          <div className={scss.slider_card}>
            <img src={newsImage} alt='newsImage' className={scss.slider_image}/>
            <div className={scss.slider_text_wrapper}>
                <span className={scss.slider_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що</span>
                <div className={scss.slider_date_wrapper}>
                    <CalendarIcon/>
                    <span className={scss.slider_date}>12:39 <span className={scss.slider_date_decor}>|</span> 7 березня</span>
                </div>
            </div>
          </div>
          <div className={scss.slider_card}>
            <img src={newsImage} alt='newsImage' className={scss.slider_image}/>
            <div className={scss.slider_text_wrapper}>
                <span className={scss.slider_text}>Дуже задоволений реабілітаційним центром “Аурум”. Професійний та індивідуальний підхід до кожного пацієнта. Відчувається турбота лікарів та небайдужість до тебе, що</span>
                <div className={scss.slider_date_wrapper}>
                    <CalendarIcon/>
                    <span className={scss.slider_date}>12:39 <span className={scss.slider_date_decor}>|</span> 8 березня</span>
                </div>
            </div>
          </div>
        </Slider>
    </div>
  )
};

export default NewsSlider ;