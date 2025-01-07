import scss from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import teamPhoto1 from '../../images/team_photo1.jpg';
import teamPhoto2 from '../../images/team_photo2.jpg';
import teamPhoto3 from '../../images/team_photo3.jpg';
import Footer from 'components/Footer/Footer';
import { ReactComponent as BackgroundLeft1} from "../../images/background_left1.svg";
import { ReactComponent as BackgroundLeft2} from "../../images/background_left2.svg";
import { ReactComponent as BackgroundRight1} from "../../images/background_right1.svg";
import { ReactComponent as BackgroundRight2} from "../../images/background_right2.svg";
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';
import NewsSlider from 'components/NewsSlider/NewsSlider';
import ServicesSlider from 'components/ServicesSlider/ServicesSlider';
import Partners from 'components/Partners/Partners';
import { ReactComponent as UaFlag} from "../../images/ua_flag.svg";
import { ReactComponent as DeFlag} from "../../images/germany_flag.svg";
import { ReactComponent as ButtonMore} from "../../images/button_more.svg";
import { ReactComponent as Logo} from "../../images/Aurum_logo.svg";
import { ReactComponent as Handshake} from "../../images/handshake.svg";
import { ReactComponent as ParzivalZentrum} from "../../images/parzival-zentrum.svg";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";
import { motion } from 'framer-motion';

const HomePage = () => {

  return (
    <motion.div
    transition={{ duration: 1.1}}
    initial={{opacity: 0.1}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <div className={scss.container}>
            <div className={scss.background_wrapper1}></div>
            <div className={scss.background_wrapper3}></div>
            <div className={scss.gradient_wrapper1}></div>
            <BackgroundLeft1 className={scss.background_left1}/>
            <BackgroundLeft2 className={scss.background_left2}/>
            <BackgroundRight1 className={scss.background_right1}/>
            <BackgroundRight2 className={scss.background_right2}/>
            <ScrollToTop 
                smooth
                className={scss.scroll_button}
                component={<IoIosArrowDropup className={scss.arrowUp}/>}
            />
            <div className={scss.content_container}>
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
                                <Link className={scss.supported_link}>Міжнародний проект</Link>
                                <ul className={scss.supported_list}>
                                    <li>
                                        <span>PARZIVAL-ZENTRUM</span>
                                        <DeFlag className={scss.flags}/>
                                    </li>
                                    <li>
                                        <span>МЕДИЧНОГО ЦЕНТРУ АУРУМ</span>
                                        <UaFlag className={scss.flags}/>
                                    </li>
                                    <li>
                                        <span>ВСЕУКРАЇНСЬКОЇ АСОЦІАЦІЇ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</span>
                                        <UaFlag className={scss.flags}/>
                                    </li>
                                </ul>
                                <ButtonMore className={scss.button_more}/>
                            </div>
                    </div>
                    <div className={scss.buttons_container}>
                        <Link className={scss.button_support}>
                            <Handshake className={scss.handshake}/>
                            <span>Підтримати проект</span>
                        </Link>
                        <Link className={scss.button_read}>Дізнатись більше</Link>
                    </div>
                </div>
                </div>
                <div className={scss.services_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>Наші </span>
                        <span className={scss.container_title2}>послуги</span>
                    </div>
                    <ServicesSlider/>
                </div>
                <div className={scss.about_container}>
                    <span className={scss.about_title}>Aurum — це реабілітаційний центр, заснований на принципах єдності, довіри, інновацій та цілісності</span>
                    <div className={scss.about_image_container}>
                        <img src={teamPhoto1} alt='team_photo' className={scss.about_teamPhoto1}/>
                        <img src={teamPhoto2} alt='team_photo' className={scss.about_teamPhoto2}/>
                        <img src={teamPhoto3} alt='team_photo' className={scss.about_teamPhoto3}/>
                    </div>
                    <div className={scss.about_text_wrapper}>
                        <span className={scss.about_title_desktop}>Aurum — це реабілітаційний центр, заснований на принципах єдності, довіри, інновацій та цілісності</span>
                        <span className={scss.about_text}>Внаслідок бойових дій на території України потреба в реабілітації серед військових та цивільних проявлена вкрай гостро. З 2014 року проблема посттравматичного синдрому є однією з найбільших. Активна участь у комплексному вирішенні цієї проблематики у командній роботі з фахівцями – є головним завданням центру.</span>
                        <Link className={scss.about_link} to="/about/presentation">Дізнатись більше</Link>
                    </div>
                </div>
                <div className={scss.partners_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>Наші </span>
                        <span className={scss.container_title2}>партнери</span>
                    </div>
                    <Partners/>
                </div>
                <div className={scss.team_container}>
                    <div className={scss.background_wrapper2}></div>
                    <div className={scss.gradient_wrapper2}></div>
                    <div className={scss.gradient_wrapper3}></div>
                    <div className={scss.container_title}>
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
                                <span className={scss.team_list_name}>Юрій </span>
                                <span className={scss.team_list_surname}>Коросько</span>
                            </div>
                            <span className={scss.team_list_job}>Психолог, Остеопат</span>
                            <div className={scss.team_list_layer}></div>
                        </li>
                        <li className={scss.team_list_item4}>
                            <div className={scss.team_list_names}>
                                <span className={scss.team_list_name}>Ірина </span>
                                <span className={scss.team_list_surname}>Сергійчук</span>
                            </div>
                            <span className={scss.team_list_job}>Остеопат</span>
                            <div className={scss.team_list_layer}></div>
                        </li>
                        <li className={scss.team_list_item5}>
                            <div className={scss.team_list_names}>
                                <span className={scss.team_list_name}>Наталія </span>
                                <span className={scss.team_list_surname}>Дмитрієва</span>
                            </div>
                            <span className={scss.team_list_job}>Директор Центру</span>
                            <div className={scss.team_list_layer}></div>
                        </li>
                        <li className={scss.team_list_item6}>
                            <div className={scss.team_list_names}>
                                <span className={scss.team_list_name}>Марина </span>
                                <span className={scss.team_list_surname}>Сидоренко</span>
                            </div>
                            <span className={scss.team_list_job}>Адміністратор Центру</span>
                            <div className={scss.team_list_layer}></div>
                        </li>
                    </ul>
                </div>
                <div className={scss.news_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>Останні </span>
                        <span className={scss.container_title2}>новини</span>
                    </div>
                    <NewsSlider/>
                    <Link className={scss.news_button} to="/news">Більше новин</Link>
                </div>  
                <div className={scss.reviews_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>Відгуки </span>
                        <span className={scss.container_title2}>пацієнтів</span>
                    </div>
                    <ReviewsSlider/>
                </div>
            </div>
            <Footer/>
        </div>
    </motion.div>    
  )
};

export default HomePage;

