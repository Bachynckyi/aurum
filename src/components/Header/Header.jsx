import scss from './Header.module.scss';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { IoMdMenu } from "react-icons/io";

const Header = () => {

  return (
    <div className={scss.header_container}>
        <button className={scss.lang_switcher}>
          <span>UK</span>
          <Polygon className={scss.polygon}/>
        </button>
        <button className={scss.menu}><IoMdMenu className={scss.menu_icon}/></button>
    </div>
        
  )
};

export default Header;