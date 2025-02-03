import scss from './NewsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward } from "react-icons/md";
import { news } from 'news';
import { useEffect, useState } from 'react';
import { ReactComponent as CalendarIcon} from "../../images/calendar_icon.svg";

const NewsPage = () => {
  const { t } = useTranslation();
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
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("News_title")}</h1>
            <div className={scss.news_wrapper}>
                {elements}
            </div>
          </div>
    </div>
  )
};

export default NewsPage;
