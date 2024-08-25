import scss from './Header.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isActiveMenuLang, setActiveMenuLang] = useState(false);
  const menuLangRef = useRef(null);

  const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
      if(ref.current && !ref.current.contains(e.target)) {
        callback();
      }
  };

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick)
      };
    });
  };

  useClickOutside(menuLangRef, () => {
    closeMenu();
  });

  const openMenu = () => {
    document.body.style.cssText = `overflow-y: hidden`
    setActiveMenuLang(true);
  };

  const closeMenu = () => {
    document.body.style.cssText = `overflow-y: auto`
    setActiveMenuLang(false);
  };

  console.log(isActiveMenuLang)

  return (
    <header className={scss.header_container}>
        <button className={scss.lang_switcher} onClick={openMenu}>
          <span className={scss.lang}>UK</span>
          <Polygon className={scss.polygon}/>
        </button>
        <button className={scss.menu}><IoMdMenu className={scss.menu_icon}/></button>
    </header>
        
  )
};

export default Header;