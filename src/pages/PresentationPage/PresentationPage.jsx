import scss from './PresentationPage.module.scss';
import { Link } from 'react-router-dom';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const PresentationPage = () => {
  const { t } = useTranslation();
  const [presentation, setPresentation] = useState("");

  useEffect(() => {
    const currentLang = localStorage.getItem("i18nextLng").toUpperCase();
    if(currentLang.includes("UK" || "UA" || "RU")) {
      setPresentation("/assets/Презентація_Аурум_UKR.pdf");
    }
    else if(currentLang.includes("DE")) {
      setPresentation("/assets/Präsentation_Aurum_DE.pdf");
    }
    else {
      setPresentation("/assets/Presentation_Aurum_EN.pdf");
    }
  }, []);

  return (
    <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Presentation_title")}</h1>
              <Link  to={presentation} target="_blank" className={scss.button_download}>
                <MdOutlineScreenSearchDesktop className={scss.icon}/>
                <span className={scss.button_download_text}>{t("Presentation_link")}</span>
              </Link>
        </div>
    </div>
        
  )
};

export default PresentationPage;

