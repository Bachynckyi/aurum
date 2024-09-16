import scss from './Intro.module.scss';
import { ReactComponent as UaFlag} from "../../images/ua_flag.svg";
import { ReactComponent as DeFlag} from "../../images/germany_flag.svg";
import { ReactComponent as ButtonMore} from "../../images/button_more.svg";
import { ReactComponent as Logo} from "../../images/Aurum_logo.svg";
import { ReactComponent as Handshake} from "../../images/handshake.svg";
import { ReactComponent as ParzivalZentrum} from "../../images/parzival-zentrum.svg";
import { Link } from 'react-router-dom';

const Intro = () => {

  return (
    <div className={scss.intro_container_wrapper}>
        <div className={scss.intro_container}>
            <div className={scss.intro_wrapper}>
                <div className={scss.logo_container}>
                    <Logo className={scss.logo}/>
                    <p className={scss.logo_text1}>Реабілітація та допомога</p>
                    <p className={scss.logo_text2}>військовим і цивільним</p>
                </div>
                <div className={scss.supported_container}>
                    <p className={scss.supported_text}>За підтримкою:</p>
                    <div className={scss.supported_logo}>
                        <ParzivalZentrum className={scss.special_logo}/>
                    </div>
                    <Link className={scss.supported_link}>Міжнародний проект Parzival Zentrum</Link>
                    <p className={scss.supported_text}>МЕДИЧНОГО ЦЕНТРУ АУРУМ <UaFlag className={scss.flags}/></p>
                    <p className={scss.supported_text1}>АСОЦІАЦІЇ ГЕМОКОРЕКЦІЇ <UaFlag className={scss.flags}/></p>
                    <p className={scss.supported_text}>ТА РЕАБІЛІТАЦІЇ PARZIVAL-ZENTRUM <DeFlag className={scss.flags}/></p>
                    <ButtonMore className={scss.button_more}/>
                </div>
            </div>
            <div className={scss.buttons_container}>
                <Link className={scss.button_support}>
                    <Handshake className={scss.handshake}/>
                    <span>Підтримати проєкт</span>
                </Link>
                <Link className={scss.button_read}>Дізнатись більше</Link>
            </div>
        </div>
    </div>
        
  )
};

export default Intro;
