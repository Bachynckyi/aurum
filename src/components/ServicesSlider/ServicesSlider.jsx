import React, { useState, useEffect, useRef } from "react";
import scss from './ServicesSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { Link } from 'react-router-dom';
import PrevArrow from './PrevArrow/PrevArrow';
import NextArrow from './NextArrow/NextArrow';
import service1 from '../../images/services/service1.jpg'
import service2 from '../../images/services/service2.jpg';
import service3 from '../../images/services/service3.jpg';
import service4 from '../../images/services/service4.jpg';
import service5 from '../../images/services/service5.png';
import service6 from '../../images/services/service6.jpg';
import service7 from '../../images/services/service7.jpg';
import service8 from '../../images/services/service8.jpg';
import service9 from '../../images/services/service9.jpg';
import service10 from '../../images/services/service10.jpg';
import { useTranslation } from 'react-i18next';

const ServicesSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        touchMove: false,
        className: 'center',
        centerMode: true,
        centerPadding: '0px',
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        touchMove: false,
        className: "servicesSlider2",
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '-40px',
        responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  vertical: false,
                  verticalSwiping: false,
                }
              },
            ]
    };

  return (
    <div className={scss.services_slider_container}>
        <div className={scss.services_slider1}>
            <Slider {...settings1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
                <img src={service1} alt="service" className={scss.slider_image}/>
                <img src={service2} alt="service" className={scss.slider_image}/>
                <img src={service3} alt="service" className={scss.slider_image}/>
                <img src={service4} alt="service" className={scss.slider_image}/>
                <img src={service5} alt="service" className={scss.slider_image}/>
                <img src={service6} alt="service" className={scss.slider_image}/>
                <img src={service7} alt="service" className={scss.slider_image}/>
                <img src={service8} alt="service" className={scss.slider_image}/>
                <img src={service9} alt="service" className={scss.slider_image}/>
                <img src={service10} alt="service" className={scss.slider_image}/>
            </Slider>
        </div>
        <div className={scss.services_slider2}>
            <Slider {...settings2} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
                <div className={scss.slider_card}>              
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text1.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text1.2")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text1.3")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description1")}</span>
                        <Link className={scss.slider_link} to="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}> 
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text2.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text2.2")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description2")}</span>
                        <Link className={scss.slider_link} to="/services/konsultaciya-psihologa">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text3.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text3.2")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description3")}</span>
                        <Link className={scss.slider_link} to="/services/postizometrichna-relaksaciya">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title2}>{t("Home_services_text4")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description4")}</span>
                        <Link className={scss.slider_link} to="/services/refleksoterapiya">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text5.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text1.2")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description5")}</span>
                        <Link className={scss.slider_link} to="/services/manualna-terapiya-hrebta-ta-suglobiv">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text6.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text6.2")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description6")}</span>
                        <Link className={scss.slider_link} to="/services/ritmichne-vtirannya">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title2}>{t("Home_services_text7")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description7")}</span>
                        <Link className={scss.slider_link} to="/services/kinezioterapiya">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title2}>{t("Home_services_text8")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description8")}</span>
                        <Link className={scss.slider_link} to="/services/gidrokinezioterapiya">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text9.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text9.2")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description9")}</span>
                        <Link className={scss.slider_link} to="/services/maslyano-dispersijni-vanni">{t("Home_services_button")}</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>{t("Home_services_text10.1")}</p>
                            <p className={scss.slider_title2}>{t("Home_services_text10.2")}</p>
                        </div>
                        <span className={scss.slider_description}>{t("Home_services_description10")}</span>
                        <Link className={scss.slider_link} to="/services/aparatna-presoterapiya">{t("Home_services_button")}</Link>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
};

export default ServicesSlider;