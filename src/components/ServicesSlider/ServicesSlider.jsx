import React, { useState, useEffect, useRef } from "react";
import scss from './ServicesSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { Link } from 'react-router-dom';
import PrevArrow from './PrevArrow/PrevArrow';
import NextArrow from './NextArrow/NextArrow';


const ServicesSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        prevArrow: <PrevArrow/>
    };

  return (
    <div className={scss.services_slider_container}>
        <div className={scss.services_slider1}>
            <Slider {...settings1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
                <span className={scss.slider_image1}>1</span>
                <span className={scss.slider_image2}>2</span>
                <span className={scss.slider_image3}>3</span>
            </Slider>
        </div>
        <div className={scss.services_slider2}>
            <Slider {...settings2} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
                <div className={scss.slider_card}>              
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>Консультативний</p>
                            <p className={scss.slider_title2}>огляд лікаря</p>
                        </div>
                        <span className={scss.slider_description}>Оцінка психоемоційного функціонального стану пацієнта на момент початку реабілітації, з урахуванням данних висновку військово-лікарської комісії, анамнезу хвороби та анамнезу життя.</span>
                        <Link className={scss.slider_link}>Дізнатися більше</Link>
                    </div>
                </div>
                <div className={scss.slider_card}> 
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>Консультативний</p>
                            <p className={scss.slider_title2}>огляд лікаря</p>
                        </div>
                        <span className={scss.slider_description}>Оцінка психоемоційного функціонального стану пацієнта на момент початку реабілітації, з урахуванням данних висновку військово-лікарської комісії, анамнезу хвороби та анамнезу життя.</span>
                        <Link className={scss.slider_link}>Дізнатися більше</Link>
                    </div>
                </div>
                <div className={scss.slider_card}>
                    <div className={scss.slider_text_container}>
                        <div className={scss.slider_title_container}>
                            <p className={scss.slider_title1}>Консультативний</p>
                            <p className={scss.slider_title2}>огляд лікаря</p>
                        </div>
                        <span className={scss.slider_description}>Оцінка психоемоційного функціонального стану пацієнта на момент початку реабілітації, з урахуванням данних висновку військово-лікарської комісії, анамнезу хвороби та анамнезу життя.</span>
                        <Link className={scss.slider_link}>Дізнатися більше</Link>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
};

export default ServicesSlider;