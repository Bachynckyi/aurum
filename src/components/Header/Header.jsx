import scss from './Header.module.scss';
import React, { useState } from 'react';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { ReactComponent as HandshakeWhite} from "../../images/handshake_white.svg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ArrowHeader  } from '../../images/arrow_header.svg'

const Header = () => {
  const [isActiveMenuLang, setIsActiveMenuLang] = useState(false);
  const [isActiveMenuMobileLang, setIsActiveMenuMobileLang] = useState(false);
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);

  const toggleLangMenu = () => {
    setIsActiveMenuLang(!isActiveMenuLang);
  };

  const openMobileMenu = () => {
    setIsActiveMobileMenu(true);
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
  };

  const closeMobileMenu = () => {
    setIsActiveMobileMenu(false);
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
  };

  const toggleLangMenuMobile = () => {
    setIsActiveMenuMobileLang(!isActiveMenuMobileLang);
  };


  return (
    <header className={scss.header}>
      <div className={scss.menu_container}>
        <nav>
          <ul className={scss.nav_list}>
            <li className={scss.nav_item}>
              <NavLink className={scss.nav_link_current} to="/">Головна</NavLink>
            </li>
            <li className={scss.nav_item_about}>
              <NavLink className={scss.nav_link}>Про нас</NavLink>
              <ArrowHeader className={scss.arrow_icon}/>
              <div className={scss.about_submenu}>
                  <NavLink to="/about-video" className={scss.submenu_item}>Відео про нас</NavLink>
                  <NavLink to="/about-honors" className={scss.submenu_item}>Наші відзнаки</NavLink>
                  <NavLink to="/about-presentation" className={scss.submenu_item}>Презентація</NavLink>
              </div>
            </li>
            <li className={scss.nav_item_services}>
              <NavLink className={scss.nav_link}>Реабілітаційна програма</NavLink>
              <ArrowHeader className={scss.arrow_icon}/>
              <div className={scss.services_submenu}>
                  <NavLink className={scss.submenu_item}>Консультативний огляд лікаря</NavLink>
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
              <NavLink className={scss.nav_link}>
                Новини
              </NavLink>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={scss.nav_link}>
                Відгуки
              </NavLink>
            </li>
            <li className={scss.nav_item}>
              <NavLink className={scss.nav_link}>
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
          <nav className={scss.mobile_menu_nav}>
            <NavLink className={scss.current} to="/">Головна</NavLink>
            <NavLink className={scss.nav}>Про нас</NavLink>
            <NavLink className={scss.nav}>Реабілітаційна програма</NavLink>
            <NavLink className={scss.nav}>Новини</NavLink>
            <NavLink className={scss.nav}>Відгуки</NavLink>
            <NavLink className={scss.nav}>Наші партнери</NavLink>
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
