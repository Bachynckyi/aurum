import scss from './Header.module.scss';
import React, { useState } from 'react';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { ReactComponent as HandshakeWhite} from "../../images/handshake_white.svg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isActiveMenuLang, setIsActiveMenuLang] = useState(false);
  const [isActiveMenuMobileLang, setIsActiveMenuMobileLang] = useState(false);
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);

  const toggleLangMenu = () => {
    setIsActiveMenuLang(!isActiveMenuLang);
  };

  const toggleLangMenuMobile = () => {
    setIsActiveMenuMobileLang(!isActiveMenuMobileLang);
  };

  const toggleMobileMenu = () => {
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
    setIsActiveMobileMenu(!isActiveMobileMenu);
  };

  return (
    <>
    <header className={scss.header_container}>
        <button className={scss.lang_switcher} onClick={toggleLangMenu}>
          <span className={scss.lang}>UK</span>
          <Polygon className={isActiveMenuLang ? (scss.polygon_reverse) : (scss.polygon)}/>
        </button>
        <button className={scss.menu} onClick={toggleMobileMenu}><IoMdMenu className={scss.menu_icon}/></button>
        <div className={isActiveMenuLang ? (scss.lang_menu_active) : (scss.lang_menu)}> 
            <span className={scss.lang}>EN</span>
            <span className={scss.lang}>DE</span>
        </div>
    </header>
    <div className={isActiveMobileMenu ? (scss.mobile_menu_active) : (scss.mobile_menu)}>
        <div className={scss.mobile_menu_buttons}>
          <button className={scss.mobile_lang_switcher} onClick={toggleLangMenuMobile}>
              <span className={scss.lang}>UK</span>
              <Polygon className={isActiveMenuMobileLang ? (scss.polygon_reverse) : (scss.polygon)}/>
          </button>
          <button className={scss.close_menu} onClick={toggleMobileMenu}><IoMdClose className={scss.close_menu_icon}/></button>
        </div>
        <nav className={scss.mobile_menu_nav}>
          <NavLink className={scss.current}>Головна</NavLink>
          <NavLink className={scss.nav}>Про нас</NavLink>
          <NavLink className={scss.nav}>Ребілітаційна програма</NavLink>
          <NavLink className={scss.nav}>Новини</NavLink>
          <NavLink className={scss.nav}>Відгуки</NavLink>
          <NavLink className={scss.nav}>Наші партнери</NavLink>
        </nav>
        <Link className={scss.button_support}>
            <HandshakeWhite/>
            <span>Підтримати проєкт</span>
        </Link>
        <div className={isActiveMenuMobileLang ? (scss.lang_mobile_active) : (scss.lang_mobile_menu)}> 
            <span className={scss.lang}>EN</span>
            <span className={scss.lang}>DE</span>
        </div>
    </div>
    </>
        
  )
};

export default Header;