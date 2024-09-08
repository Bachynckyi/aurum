import scss from './NewsSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import newsImage from '../../images/news_image.jpg';
import { ReactComponent as CalendarIcon} from "../../images/calendar_icon.svg";

const NewsSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "newsSlider",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchThreshold: 100,
    centerMode: false,
    centerPadding: '0',
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '22%',
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '12%',
        }
      },
      {
        breakpoint: 613,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '30%',
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '25%',
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '20%',
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '12%',
        }
      },
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