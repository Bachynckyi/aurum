import scss from './HomePage.module.scss';
import Header from 'components/Header/Header';
import { ReactComponent as Logo} from "../../images/Aurum_logo.svg";
import { ReactComponent as Handshake} from "../../images/handshake.svg";
import { ReactComponent as ParzivalZentrum} from "../../images/parzival-zentrum.svg";
import { ReactComponent as Line} from "../../images/line.svg";
import { Link } from 'react-router-dom';
import teamPhoto from '../../images/team_photo.png';
import parzivalLogo from '../../images/logo_parzival-zentrum.png'

const HomePage = () => {

  return (
    <div className={scss.container}>
        <Header/>
        <div className={scss.content_container}>
            <div className={scss.logo_container}>
                <Logo/>
                <p className={scss.logo_text1}>Реабілітація та допомога</p>
                <p className={scss.logo_text2}>військовим і цивільним</p>
            </div>
            <div className={scss.supported_container}>
                <p className={scss.supported_text}>За підтримкою:</p>
                <div className={scss.supported_logo}>
                    <ParzivalZentrum/>
                    <Line/>
                    <img src={parzivalLogo} alt='logo_parzival' className={scss.parzival_logo}/>
                </div>
                <Link className={scss.supported_link}>Міжнародний проект Parzival Zentrum</Link>
                <p className={scss.supported_text}>МЕДИЧНОГО ЦЕНТРУ АУРУМ 🇺🇦</p>
                <p className={scss.supported_text1}>АСОЦІАЦІЇ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ PARZIVAL-ZENTRUM 🇩🇪</p>
            </div>
            <div className={scss.buttons_container}>
            <Link className={scss.button_support}>
                <Handshake className={scss.handshake}/>
                <span>Підтримати проєкт</span>
            </Link>
            <Link className={scss.button_read}>Дізнатись більше</Link>
            </div>
            <div className={scss.about_container}>
                <span className={scss.about_title}>Aurum — це реабілітаційний центр, заснований на принципах єдності, довіри, інновацій та цілісності</span>
                <img src={teamPhoto} alt='team_photo' className={scss.about_teamPhoto1}/>
                <img src={teamPhoto} alt='team_photo' className={scss.about_teamPhoto2}/>
                <img src={teamPhoto} alt='team_photo' className={scss.about_teamPhoto3}/>
                <span className={scss.about_text}>Внаслідок бойових дій на території України потреба в реабілітації серед військових та цивільних проявлена вкрай гостро. З 2014 року проблема посттравматичного синдрому є однією з найбільших. Активна участь у комплексному вирішенні цієї проблематики у командній роботі з фахівцями – є головним завданням центру.</span>
                <Link className={scss.about_link}>Дізнатись більше</Link>
            </div>
        </div>
    </div>
        
  )
};

export default HomePage;