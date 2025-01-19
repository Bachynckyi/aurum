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
import { ReactComponent as NLFlag} from "../../images/netherlands_flag.svg";
import { ReactComponent as ButtonMore} from "../../images/button_more.svg";
import { ReactComponent as Logo} from "../../images/Aurum_logo_UA.svg";
import { ReactComponent as Handshake} from "../../images/handshake.svg";
import { ReactComponent as ParzivalZentrum} from "../../images/parzival-zentrum.svg";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

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
                                <p className={scss.logo_text1}>{t("Home_intro_text1")}</p>
                                <p className={scss.logo_text2}>{t("Home_intro_text2")}</p>
                            </div>
                            <div className={scss.supported_container}>
                                    <p className={scss.supported_text}>{t("Home_intro_text3")}</p>
                                    <div className={scss.supported_logo}>
                                        <ParzivalZentrum className={scss.special_logo}/>
                                    </div>
                                    <Link className={scss.supported_link}>{t("Home_intro_text4")}</Link>
                                    <ul className={scss.supported_list}>
                                        <li>
                                            <span>PARZIVAL-ZENTRUM</span>
                                            <DeFlag className={scss.flags}/>
                                        </li>
                                        <li>
                                            <span>{t("Home_intro_text5")}</span>
                                            <UaFlag className={scss.flags}/>
                                        </li>
                                        <li>
                                            <span>{t("Home_intro_text6.1")}</span>
                                            <span>{t("Home_intro_text6.2")}</span>
                                            <UaFlag className={scss.flags}/>
                                        </li>
                                        <li>
                                            <Link className={scss.intro_link_NL} to="https://stichtinghelias.nl/fondsen/oekraine/">STICHTING HELIAS</Link>
                                            <NLFlag className={scss.flags}/>
                                        </li>
                                    </ul>
                                    <ButtonMore className={scss.button_more}/>
                            </div>
                        </div>
                        <div className={scss.buttons_container}>
                            <Link className={scss.button_support} to={"/support-project"}>
                                <Handshake className={scss.handshake}/>
                                <span>{t("Home_intro_support")}</span>
                            </Link>
                            <Link className={scss.button_read}>{t("Home_intro_link")}</Link>
                        </div>
                    </div>
                </div>
                <div className={scss.services_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>{t("Home_services_title1")}</span>
                        <span className={scss.container_title2}>{t("Home_services_title2")}</span>
                    </div>
                    <ServicesSlider/>
                </div>
                <div className={scss.about_container}>
                    <span className={scss.about_title}>{t("Home_about_title")}</span>
                    <div className={scss.about_image_container}>
                        <img src={teamPhoto1} alt='team_photo' className={scss.about_teamPhoto1}/>
                        <img src={teamPhoto2} alt='team_photo' className={scss.about_teamPhoto2}/>
                        <img src={teamPhoto3} alt='team_photo' className={scss.about_teamPhoto3}/>
                    </div>
                    <div className={scss.about_text_wrapper}>
                        <span className={scss.about_title_desktop}>{t("Home_about_title")}</span>
                        <span className={scss.about_text}>{t("Home_about_text")}</span>
                        <Link className={scss.about_link} to="/about/presentation">{t("Home_about_link")}</Link>
                    </div>
                </div>
                <div className={scss.partners_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>{t("Home_partners_title1")}</span>
                        <span className={scss.container_title2}>{t("Home_partners_title2")}</span>
                    </div>
                    <Partners/>
                </div>
                <div className={scss.team_container}>
                    <div className={scss.background_wrapper2}></div>
                    <div className={scss.gradient_wrapper2}></div>
                    <div className={scss.gradient_wrapper3}></div>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>{t("Home_team_title1")} </span>
                        <span className={scss.container_title2}>{t("Home_team_title2")}</span>
                    </div>
                    <ul className={scss.team_list}>
                        <li>
                            <Link className={scss.team_list_item1} to="/team/yevhen-volchenko">
                                <div className={scss.team_list_names}>
                                        <span className={scss.team_list_name}>{t("Home_team_name1")} </span>
                                        <span className={scss.team_list_surname}>{t("Home_team_surname1")}</span>
                                </div>
                                <span className={scss.team_list_job}>{t("Home_team_job1")}</span>
                                <div className={scss.team_list_layer}></div>
                            </Link>
                        </li>
                        <li>
                            <Link className={scss.team_list_item2} to="/team/snizhana-shcherbakova">
                                <div className={scss.team_list_names}>
                                    <span className={scss.team_list_name}>{t("Home_team_name2")} </span>
                                    <span className={scss.team_list_surname}>{t("Home_team_surname2")}</span>
                                </div>
                                <span className={scss.team_list_job}>{t("Home_team_job2")}</span>
                                <div className={scss.team_list_layer}></div>
                            </Link>
                        </li>
                        <li>
                            <Link className={scss.team_list_item3} to="/team/yuriy-korosko">
                                <div className={scss.team_list_names}>
                                    <span className={scss.team_list_name}>{t("Home_team_name3")} </span>
                                    <span className={scss.team_list_surname}>{t("Home_team_surname3")}</span>
                                </div>
                                <span className={scss.team_list_job}>{t("Home_team_job3")}</span>
                                <div className={scss.team_list_layer}></div>
                            </Link>
                        </li>
                        <li>
                            <Link className={scss.team_list_item4} to="/team/irina-sergiychuk">
                                <div className={scss.team_list_names}>
                                        <span className={scss.team_list_name}>{t("Home_team_name4")} </span>
                                        <span className={scss.team_list_surname}>{t("Home_team_surname4")}</span>
                                </div>
                                <span className={scss.team_list_job}>{t("Home_team_job4")}</span>
                                <div className={scss.team_list_layer}></div>
                            </Link>
                        </li>
                        <li className={scss.team_list_item5}>
                            <div className={scss.team_list_names}>
                                <span className={scss.team_list_name}>{t("Home_team_name5")} </span>
                                <span className={scss.team_list_surname}>{t("Home_team_surname5")}</span>
                            </div>
                            <span className={scss.team_list_job}>{t("Home_team_job5")}</span>
                            <div className={scss.team_list_layer}></div>
                        </li>
                        <li className={scss.team_list_item6}>
                            <div className={scss.team_list_names}>
                                <span className={scss.team_list_name}>{t("Home_team_name6")} </span>
                                <span className={scss.team_list_surname}>{t("Home_team_surname6")}</span>
                            </div>
                            <span className={scss.team_list_job}>{t("Home_team_job6")}</span>
                            <div className={scss.team_list_layer}></div>
                        </li>
                    </ul>
                </div>
                <div className={scss.news_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>{t("Home_news_title1")} </span>
                        <span className={scss.container_title2}>{t("Home_news_title2")}</span>
                    </div>
                    <NewsSlider/>
                    <Link className={scss.news_button} to="/news">{t("Home_news_link")}</Link>
                </div>  
                <div className={scss.reviews_container}>
                    <div className={scss.container_title}>
                        <span className={scss.container_title1}>{t("Home_reviews_title1")} </span>
                        <span className={scss.container_title2}>{t("Home_reviews_title2")}</span>
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

