import scss from './Header.module.scss';
import React, { useState } from 'react';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { ReactComponent as HandshakeWhite} from "../../images/handshake_white.svg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../images/facebook_icon.svg';
import { ReactComponent as TelegramIcon } from '../../images/telegram_icon.svg';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isActiveMenuLang, setIsActiveMenuLang] = useState(false);
  const [isActiveMenuMobileLang, setIsActiveMenuMobileLang] = useState(false);
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const [aboutSubmenuMobile, setAboutSubmenuMobile] = useState(false);
  const [servicesSubmenuMobile, setServicesSubmenuMobile] = useState(false);

  const toggleAboutSubmenuMobile = (e) => {
    e.preventDefault();
    setAboutSubmenuMobile(!aboutSubmenuMobile);
  };

  const toggleServicesSubmenuMobile = (e) => {
    e.preventDefault();
    setServicesSubmenuMobile(!servicesSubmenuMobile);
  };

  const toggleLangMenu = () => {
    setIsActiveMenuLang(!isActiveMenuLang);
  };

  const openMobileMenu = () => {
    document.body.style.cssText = `overflow-y: hidden`;
    setIsActiveMobileMenu(true);
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
  };

  const closeMobileMenu = () => {
    document.body.style.cssText = `overflow-y: auto`;
    setIsActiveMobileMenu(false);
    setTimeout(() => {
      setIsActiveMenuLang(false);
      setIsActiveMenuMobileLang(false);
      setAboutSubmenuMobile(false);
      setServicesSubmenuMobile(false);
    }, 1000)
  };

  const toggleLangMenuMobile = () => {
    setIsActiveMenuMobileLang(!isActiveMenuMobileLang);
  };

  const disableNavLink = (e) => {
    e.preventDefault();
  };

  return (
    <header className={scss.header}>
      <div className={scss.menu_container}>
        <nav>
          <ul className={scss.nav_list}>
            <li className={scss.nav_item}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/">Головна</NavLink>
            </li>
            <li className={scss.nav_item_about}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/about" onClick={disableNavLink}>Про нас</NavLink>
              <IoIosArrowDown className={scss.arrow_icon}/>
              <div className={scss.about_submenu}>
                  <NavLink to="/about/video" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>Відео про нас</NavLink>
                  <NavLink to="/about/honors" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>Наші відзнаки</NavLink>
                  <NavLink to="/about/presentation" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>Презентація</NavLink>
              </div>
            </li>
            <li className={scss.nav_item_services}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/services" onClick={disableNavLink}>Реабілітаційна програма</NavLink>
              <IoIosArrowDown className={scss.arrow_icon}/>
              <div className={scss.services_submenu}>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini">Консультація лікаря фізичної та реабілітаційної медицини</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/konsultaciya-psihologa">Консультація психолога</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/postizometrichna-relaksaciya">Постізометрична релаксація</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/refleksoterapiya">Рефлексотерапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/manualna-terapiya-hrebta-ta-suglobiv">Мануальна терапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/ritmichne-vtirannya">Ритмічне втирання</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/kinezioterapiya">Кінезіотерапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/gidrokinezioterapiya">Гідрокінезіотерапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/maslyano-dispersijni-vanni">Масляно-дисперсійні ванни</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/aparatna-presoterapiya">Апаратна пресотерапія</NavLink>
              </div>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/news">
                Новини
              </NavLink>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/reviews">
                Відгуки
              </NavLink>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/partners">
                Наші партнери
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={scss.header_wrapper}>
          <Link className={scss.header_button}>
            <HandshakeWhite/>
            <span className={scss.header_button_text}>Підтримати проект</span>
          </Link>
          <div className={scss.lang_switcher_container} >
            <button type="button" onClick={toggleLangMenu} className={scss.lang_switcher}>
              <span className={scss.lang}>UK</span>
              <Polygon className={isActiveMenuLang ? (scss.polygon_reverse) : (scss.polygon)}/>
            </button>
            <div className={isActiveMenuLang ? (scss.lang_menu_active) : (scss.lang_menu)}> 
              <span className={scss.lang}>EN</span>
              <span className={scss.lang}>DE</span>
            </div>
          </div>
          <button type="button" className={scss.menu_button} onClick={openMobileMenu}><IoMdMenu className={scss.menu_icon}/></button>
          <div className={scss.socials}>
            <FacebookIcon className={scss.socials_icon_facebook}/>
            <Link to="https://t.me/centeraurum" target='_blank'><TelegramIcon className={scss.socials_icon_telegram}/></Link>
          </div>
        </div>
      </div>
      <div className={isActiveMobileMenu ? (scss.mobile_menu_active) : (scss.mobile_menu)}>
          <div className={scss.mobile_menu_buttons}>
            <div className={scss.mobile_lang_container}>
              <button className={scss.mobile_lang_switcher} onClick={toggleLangMenuMobile}>
                  <span className={scss.lang}>UK</span>
                  <Polygon className={isActiveMenuMobileLang ? (scss.polygon_reverse) : (scss.polygon)}/>
              </button>
              <div className={isActiveMenuMobileLang ? (scss.lang_mobile_active) : (scss.lang_mobile_menu)}> 
              <span className={scss.lang}>EN</span>
              <span className={scss.lang}>DE</span>
              </div>
            </div>
            <button className={scss.close_menu} onClick={closeMobileMenu}>
              <IoMdClose className={isActiveMobileMenu ? (scss.close_menu_icon_active) : (scss.close_menu_icon)}/></button>
          </div>
          <nav>
            <ul className={scss.mobile_nav_list}>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/" onClick={closeMobileMenu}>Головна</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={toggleAboutSubmenuMobile} to="/about">
                  <span>Про нас</span>
                  <IoIosArrowDown className={aboutSubmenuMobile === true ? (scss.mobile_arrow_reverse) : (scss.mobile_arrow)}/>
                </NavLink>
                <div className={aboutSubmenuMobile === true ? (scss.about_mobile_submenu_active) : (scss.about_mobile_submenu)}>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/video" onClick={closeMobileMenu}>Відео про нас</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/honors" onClick={closeMobileMenu}>Наші відзнаки</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/presentation" onClick={closeMobileMenu}>Презентація</NavLink>
                </div>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={toggleServicesSubmenuMobile} to="/services">
                  <span>Реабілітаційна програма</span>
                  <IoIosArrowDown className={servicesSubmenuMobile === true ? (scss.mobile_arrow_reverse) : (scss.mobile_arrow)}/>
                </NavLink>
                <div className={servicesSubmenuMobile === true ? (scss.services_mobile_submenu_active) : (scss.services_mobile_submenu)}>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini">Консультація лікаря фізичної та реабілітаційної медицини</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/konsultaciya-psihologa">Консультація психолога</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/postizometrichna-relaksaciya">Постізометрична релаксація</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/refleksoterapiya">Рефлексотерапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/manualna-terapiya-hrebta-ta-suglobiv">Мануальна терапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/ritmichne-vtirannya">Ритмічне втирання</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/kinezioterapiya">Кінезіотерапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/gidrokinezioterapiya">Гідрокінезіотерапія</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/maslyano-dispersijni-vanni">Масляно-дисперсійні ванни</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/aparatna-presoterapiya">Апаратна пресотерапія</NavLink>
                </div>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={closeMobileMenu} to='/news'>Новини</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/reviews" onClick={closeMobileMenu}>Відгуки</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/partners" onClick={closeMobileMenu}>Наші партнери</NavLink>
              </li>
            </ul>
          </nav>
          <Link className={scss.button_support}>
              <HandshakeWhite/>
              <span>Підтримати проєкт</span>
          </Link>
      </div>
    </header>
  )
};

export default Header;
