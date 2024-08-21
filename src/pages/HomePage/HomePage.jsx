import scss from './HomePage.module.scss';
import Header from 'components/Header/Header';
import { ReactComponent as Logo} from "../../images/Aurum_logo.svg";
import { ReactComponent as Handshake} from "../../images/handshake.svg";
import { ReactComponent as ParzivalZentrum} from "../../images/parzival-zentrum.svg";
import { ReactComponent as Line} from "../../images/line.svg";
import { Link } from 'react-router-dom';
import teamPhoto from '../../images/team_photo.png';
import parzivalLogo from '../../images/logo_parzival-zentrum.png';
import { ReactComponent as Partner1} from "../../images/partners/partner1.svg";
import { ReactComponent as Partner5} from "../../images/partners/partner5.svg";
import { ReactComponent as Partner6} from "../../images/partners/partner6.svg";
import { ReactComponent as Partner7} from "../../images/partners/partner7.svg";
import { ReactComponent as Partner8} from "../../images/partners/partner8.svg";
import { ReactComponent as Partner9} from "../../images/partners/partner9.svg";
import Partner2 from '../../images/partners/partner2.png';
import Partner3 from '../../images/partners/partner3.png';
import Partner4 from '../../images/partners/partner4.png';
import Partner10 from '../../images/partners/partner10.png';
import Footer from 'components/Footer/Footer';
import { ReactComponent as UaFlag} from "../../images/ua_flag.svg";
import { ReactComponent as DeFlag} from "../../images/germany_flag.svg";
import ReviewSlider from 'components/ReviewSlider/ReviewSlider';

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
                <p className={scss.supported_text}>МЕДИЧНОГО ЦЕНТРУ АУРУМ <UaFlag className={scss.flags}/></p>
                <p className={scss.supported_text1}>АСОЦІАЦІЇ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</p>
                <p className={scss.supported_text}>PARZIVAL-ZENTRUM <DeFlag className={scss.flags}/></p>
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
            <div className={scss.partners_container}>
                <div>
                    <span className={scss.container_title1}>Наші </span>
                    <span className={scss.container_title2}>партнери</span>
                </div>
                <ul className={scss.partners_list}>
                    <li className={scss.partners_list_item}><Partner1/></li>
                    <li className={scss.partners_list_item}><img src={Partner2} alt="logo" className={scss.partners_logo2}/></li>
                    <li className={scss.partners_list_item}><img src={Partner3} alt="logo" className={scss.partners_logo3}/></li>
                    <li className={scss.partners_list_item}><img src={Partner4} alt="logo" className={scss.partners_logo4}/></li>
                    <li className={scss.partners_list_item}><Partner5/></li>
                    <li className={scss.partners_list_item}><Partner6/></li>
                    <li className={scss.partners_list_item}><Partner7/></li>
                    <li className={scss.partners_list_item}><Partner8/></li>
                    <li className={scss.partners_list_item}><Partner9/></li>
                    <li className={scss.partners_list_item}><img src={Partner10} alt="logo" className={scss.partners_logo10}/></li>
                    <li className={scss.partners_list_item}></li>
                    <li className={scss.partners_list_item}></li>
                    <li className={scss.partners_list_item}></li>
                    <li className={scss.partners_list_item}></li>
                </ul>
            </div>
            <div className={scss.team_container}>
                <div>
                    <span className={scss.container_title1}>Наша </span>
                    <span className={scss.container_title2}>команда</span>
                </div>
                <ul className={scss.team_list}>
                    <li className={scss.team_list_item1}>
                        <div className={scss.team_list_names}>
                            <span className={scss.team_list_name}>Євген </span>
                            <span className={scss.team_list_surname}>Волченко</span>
                        </div>
                        <span className={scss.team_list_job}>Терапевт-реабілітолог</span>
                        <div className={scss.team_list_layer}></div>
                    </li>
                    <li className={scss.team_list_item2}>
                        <div className={scss.team_list_names}>
                            <span className={scss.team_list_name}>Сніжана </span>
                            <span className={scss.team_list_surname}>Щербакова</span>
                        </div>
                        <span className={scss.team_list_job}>Лікар</span>
                        <div className={scss.team_list_layer}></div>
                    </li>
                    <li className={scss.team_list_item3}>
                        <div className={scss.team_list_names}>
                            <span className={scss.team_list_name}>Тамара </span>
                            <span className={scss.team_list_surname}>Блекот</span>
                        </div>
                        <span className={scss.team_list_job}>Психолог</span>
                        <div className={scss.team_list_layer}></div>
                    </li>
                    <li className={scss.team_list_item4}>
                        <div className={scss.team_list_names}>
                            <span className={scss.team_list_name}>Дар’я </span>
                            <span className={scss.team_list_surname}>Масло</span>
                        </div>
                        <span className={scss.team_list_job}>Фізичний реабілітолог</span>
                        <div className={scss.team_list_layer}></div>
                    </li>
                </ul>
            </div>
            <div className={scss.review_container}>
                <div>
                    <span className={scss.container_title1}>Відгуки </span>
                    <span className={scss.container_title2}>пацієнтів</span>
                </div>
                <ReviewSlider/>
            </div>  
        </div>
        <Footer/>
    </div>
        
  )
};

export default HomePage;

