import scss from './Footer.module.scss';
import { ReactComponent as MapIcon } from '../../images/map_icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone_icon.svg';
import { ReactComponent as EmailIcon } from '../../images/email_icon.svg';
import { ReactComponent as LogoUA } from '../../images/Aurum_logo_UA.svg';
import { ReactComponent as LogoDE } from '../../images/Aurum_logo_DE.svg';
import { ReactComponent as LogoEN } from '../../images/Aurum_logo_EN.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook_icon.svg';
import { ReactComponent as TelegramIcon } from '../../images/telegram_icon.svg';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Footer = () => {
const todayDate = new Date();
const currentYear = todayDate.getFullYear();
const { t } = useTranslation();
const [logo, setLogo] = useState("");

useEffect(() => {
    const currentLang = localStorage.getItem("i18nextLng").toUpperCase();
    setLogo(currentLang);
    if(currentLang.includes("UK" || "UA" || "RU")) {
        setLogo("UA");
      }
      else if(currentLang.includes("DE")) {
        setLogo("DE");
      }
      else {
        setLogo("EN");
      }
  }, []);

  return (
    <footer className={scss.footer_container}>
        <div className={scss.footer_wrapper}> 
            <div className={scss.main_wrapper}>
                <div className={scss.contacts_wrapper}>
                    <p className={scss.contacts_title}>{t("Footer_contacts_title")}</p>
                    <div className={scss.contacts_info}>
                        <MapIcon/>
                        <address>
                            <Link className={scss.contacts_text} 
                            to="https://www.google.com.ua/maps/place/Medychnyy+Tsentr+Aurum/@50.4352488,30.5421546,63m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40d4cf08157edd2d:0xc35f243ceeae5712!2z0YPQuy4g0KDQtdC30L3QuNGG0LrQsNGPLCAxMSwg0JrQuNC10LIsIDAyMDAw!3b1!8m2!3d50.4352612!4d30.5424696!16s%2Fg%2F1tg6nn5q!3m5!1s0x40d4cf0b82de2b71:0x5046d5f64ce3f501!8m2!3d50.4353876!4d30.5422401!16s%2Fg%2F11vlt3dn94?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                            target='_blank'
                            >{t("Footer_contacts_address")}</Link>
                        </address>
                    </div>
                    <div className={scss.contacts_info}>
                        <PhoneIcon/>
                        <a className={scss.contacts_text} href="tel: +380 (98) 419-03-43">+380 (98) 419-03-43</a>
                    </div>
                    <div className={scss.contacts_info}>
                        <EmailIcon/>
                        <a className={scss.contacts_text} href="mailto: info@clinic-aurum.com">info@clinic-aurum.com</a>
                    </div>
                    <div className={scss.contacts_services}>
                        <Link to="https://www.facebook.com/profile.php?id=61571048378069&sk=about" target='_blank'><FacebookIcon className={scss.contacts_icon_facebook}/></Link>
                        <Link to="https://t.me/centeraurum" target='_blank'><TelegramIcon className={scss.contacts_icon_telegram}/></Link>
                    </div>
                </div>
                <div className={scss.services_container}>
                    <p className={scss.services_title}>{t("Footer_services_title")}</p>
                    <ul className={scss.services_list}>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini">{t("Footer_nav1")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/konsultaciya-psihologa">{t("Footer_nav2")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/postizometrichna-relaksaciya">{t("Footer_nav3")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/refleksoterapiya">{t("Footer_nav4")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/manualna-terapiya-hrebta-ta-suglobiv">{t("Footer_nav5")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/ritmichne-vtirannya">{t("Footer_nav6")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/kinezioterapiya">{t("Footer_nav7")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/gidrokinezioterapiya">{t("Footer_nav8")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/maslyano-dispersijni-vanni">{t("Footer_nav9")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to="/services/aparatna-presoterapiya">{t("Footer_nav10")}</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={scss.logo_container}>
                    {logo === "UA" && (<LogoUA className={scss.logo}/>)}
                    {logo === "DE" && (<LogoDE className={scss.logo}/>)}
                    {logo === "EN" && (<LogoEN className={scss.logo}/>)}
                    <div className={scss.politics_license_wrapper_desktop}>
                        <p className={scss.license}>{t("Footer_license")}</p>
                        <p className={scss.license}>© {t("Footer_center_name")} {currentYear}</p>
                    </div>
                </div>
            </div>
            <div className={scss.politics}>
                <p className={scss.license}>{t("Footer_license")}</p>
                <p className={scss.license}>© {t("Footer_center_name")} {currentYear}</p>
            </div>  
        </div>
    </footer>
        
  )
};

export default Footer;