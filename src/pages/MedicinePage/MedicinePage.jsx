import scss from './MedicinePage.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const MedicinePage = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Medicine_title")}</h1>
            <div className={scss.list_wrapper}>
                <Link to={"/assets/Anthroposophy_in_the_WHO_system.pdf"} target="_blank" className={scss.button_download}>
                    <MdOutlineScreenSearchDesktop className={scss.icon}/>
                    <span className={scss.button_download_text}>{t("Medicine_presentation1")}</span>
                </Link>
                <Link to={"/assets/Homeopathy_in_the_WHO_system.pdf"} target="_blank" className={scss.button_download}>
                    <MdOutlineScreenSearchDesktop className={scss.icon}/>
                    <span className={scss.button_download_text}>{t("Medicine_presentation2")}</span>
                </Link>
                <Link to={"/assets/WHO_Report_2019.pdf"} target="_blank" className={scss.button_download}>
                    <MdOutlineScreenSearchDesktop className={scss.icon}/>
                    <span className={scss.button_download_text}>{t("Medicine_presentation3")}</span>
                </Link>
                <Link to={"/assets/About_Anthroposophical_Medicine.pdf"} target="_blank" className={scss.button_download}>
                    <MdOutlineScreenSearchDesktop className={scss.icon}/>
                    <span className={scss.button_download_text}>{t("Medicine_presentation4")}</span>
                </Link>
                <Link to={"https://iris.who.int/discover?query=anthroposophic+medicine"} target="_blank" className={scss.button_download}>
                    <MdArrowOutward className={scss.icon}/>
                    <span className={scss.button_download_text}>{t("Medicine_link")}</span>
                </Link>
            </div>
          </div>
    </div> 
  )
};

export default MedicinePage;

