import scss from './NewsSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { ReactComponent as CalendarIcon} from "../../images/calendar_icon.svg";
import { useEffect, useState } from 'react';
import { news } from 'news';
import { MdArrowOutward } from "react-icons/md";

const NewsSlider = () => {
  const lang = localStorage.getItem("i18nextLng");
  const [currentLang, setCurrentLang] = useState("");

  useEffect(() => {
    const currentLang = localStorage.getItem("i18nextLng").toUpperCase();
    if(currentLang.includes("UK" || "UA" || "RU")) {
        setCurrentLang("UA");
      }
      else if(currentLang.includes("DE")) {
        setCurrentLang("DE");
      }
      else {
        setCurrentLang("EN");
      }
  }, [lang]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "newsSlider",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchThreshold: 50,
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

  const elements = news.map(({ id, ...props }) => {
    return (
        <div className={scss.slider_card} key={id}>
          <img src={props.image1} alt='newsImage' className={scss.slider_image}/>
          <div className={scss.slider_text_wrapper}>
              {currentLang === "UA" && (<span className={scss.slider_text}>{props.titleUK}</span>)}
              {currentLang === "EN" && (<span className={scss.slider_text}>{props.titleEN}</span>)}
              {currentLang === "DE" && (<span className={scss.slider_text}>{props.titleDE}</span>)}
              <div className={scss.bottom_wrapper}>
                <div className={scss.slider_date_wrapper}>
                  <CalendarIcon/>
                  <span className={scss.slider_date}><span className={scss.slider_date_decor}>| </span> {props.date}</span>
                </div>
                <MdArrowOutward className={scss.icon}/>
              </div>
          </div>
        </div>
    );
    });

  return (
    <div className={scss.slider}>
        <Slider {...settings}>
              {elements}
        </Slider>
    </div>
  )
};

export default NewsSlider ;