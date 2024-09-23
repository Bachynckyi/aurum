import scss from './Header.module.scss';
import React, { useState } from 'react';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { ReactComponent as HandshakeWhite} from "../../images/handshake_white.svg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ArrowHeader } from '../../images/arrow_header.svg'
import { ReactComponent as FacebookIcon } from '../../images/facebook_icon.svg';
import { ReactComponent as TelegramIcon } from '../../images/telegram_icon.svg';


const Header = () => {
  const [isActiveMenuLang, setIsActiveMenuLang] = useState(false);
  const [isActiveMenuMobileLang, setIsActiveMenuMobileLang] = useState(false);
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const [aboutSubmenuMobile, setAboutSubmenuMobile] = useState(false);
  const [servicesSubmenuMobile, setServicesSubmenuMobile] = useState(false);

  const toggleAboutSubmenuMobile = (e) => {
    e.preventDefault()
    setAboutSubmenuMobile(!aboutSubmenuMobile);
  };

  const toggleServicesSubmenuMobile = () => {
    setServicesSubmenuMobile(!servicesSubmenuMobile);
  };

  const toggleLangMenu = () => {
    setIsActiveMenuLang(!isActiveMenuLang);
  };

  const openMobileMenu = () => {
    setIsActiveMobileMenu(true);
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
    document.body.style.cssText = `overflow-y: hidden`;
  };

  const closeMobileMenu = () => {
    document.body.style.cssText = `overflow-y: auto`;
    setIsActiveMobileMenu(false);
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
    setAboutSubmenuMobile(false);
    setServicesSubmenuMobile(false);
  };

  const toggleLangMenuMobile = () => {
    setIsActiveMenuMobileLang(!isActiveMenuMobileLang);
  };

  const disableNavLink = (e) => {
    e.preventDefault()
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
              <ArrowHeader className={scss.arrow_icon}/>
              <div className={scss.about_submenu}>
                  <NavLink to="/about/video" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>Відео про нас</NavLink>
                  <NavLink to="/about/honors" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>Наші відзнаки</NavLink>
                  <NavLink to="/about/presentation" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>Презентація</NavLink>
              </div>
            </li>
            <li className={scss.nav_item_services}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/services" onClick={disableNavLink}>Реабілітаційна програма</NavLink>
              <ArrowHeader className={scss.arrow_icon}/>
              <div className={scss.services_submenu}>
                  <NavLink className={scss.submenu_item}>Консультація лікаря фізичної та реабілітаційної медицини</NavLink>
                  <NavLink className={scss.submenu_item}>Консультація психолога</NavLink>
                  <NavLink className={scss.submenu_item}>Постізометрична релаксація</NavLink>
                  <NavLink className={scss.submenu_item}>Рефлексотерапія</NavLink>
                  <NavLink className={scss.submenu_item}>Мануальна терапія</NavLink>
                  <NavLink className={scss.submenu_item}>Ритмічне втирання</NavLink>
                  <NavLink className={scss.submenu_item}>Кінезіотерапія</NavLink>
                  <NavLink className={scss.submenu_item}>Гідрокінезіотерапія</NavLink>
                  <NavLink className={scss.submenu_item}>Масляно-дисперсійні ванни</NavLink>
                  <NavLink className={scss.submenu_item}>Апаратна пресотерапія</NavLink>
              </div>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/news">
                Новини
              </NavLink>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/feedback">
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
            <span className={scss.header_button_text}>Підтримати проєкт</span>
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
          <button className={scss.menu_button} onClick={openMobileMenu}><IoMdMenu className={scss.menu_icon}/></button>
          <div className={scss.socials}>
            <FacebookIcon className={scss.socials_icon_facebook}/>
            <TelegramIcon className={scss.socials_icon_telegram}/>
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
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/">Головна</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={toggleAboutSubmenuMobile} to="/about">
                  <span>Про нас</span>
                  <ArrowHeader className={aboutSubmenuMobile === true ? (scss.mobile_arrow_reverse) : (scss.mobile_arrow)}/>
                </NavLink>
                <div className={aboutSubmenuMobile === true ? (scss.about_mobile_submenu_active) : (scss.about_mobile_submenu)}>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/video">Відео про нас</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/honors">Наші відзнаки</NavLink>
                  <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/presentation">Презентація</NavLink>
                </div>
              </li>
              <li>
                <NavLink className={scss.nav} onClick={toggleServicesSubmenuMobile}>
                  <span>Реабілітаційна програма</span>
                  <ArrowHeader className={servicesSubmenuMobile === true ? (scss.mobile_arrow_reverse) : (scss.mobile_arrow)}/>
                </NavLink>
                <div className={servicesSubmenuMobile === true ? (scss.services_mobile_submenu_active) : (scss.services_mobile_submenu)}>
                  <NavLink className={scss.submenu_mobile_item}>Консультація лікаря фізичної та реабілітаційної медицини</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Консультація психолога</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Постізометрична релаксація</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Рефлексотерапія</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Мануальна терапія</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Ритмічне втирання</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Кінезіотерапія</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Гідрокінезіотерапія</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Масляно-дисперсійні ванни</NavLink>
                  <NavLink className={scss.submenu_mobile_item}>Апаратна пресотерапія</NavLink>
                </div>
              </li>
              <li>
                <NavLink className={scss.nav}>Новини</NavLink>
              </li>
              <li>
                <NavLink className={scss.nav}>Відгуки</NavLink>
              </li>
              <li>
                <NavLink className={scss.nav}>Наші партнери</NavLink>
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
