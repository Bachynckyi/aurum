import scss from './AboutPresentationPage.module.scss';
import { Link } from 'react-router-dom';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const AboutPresentationPage = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("");

  useEffect(() => {
    setLang(localStorage.getItem("i18nextLng"));
  }, []);

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Presentation_title")}</h1>
              <Link  to={lang === "uk" ? ("/assets/Презентація_Аурум.pdf") : ("/assets/Presentation_Aurum.pdf")} target="_blank" className={scss.button_download}>
                <MdOutlineScreenSearchDesktop className={scss.icon}/>
                <span className={scss.button_download_text}>{t("Presentation_link")}</span>
              </Link>
        </div>
    </div>
        
  )
};

export default AboutPresentationPage;

