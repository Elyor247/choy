import React from 'react';
import { EffectCoverflow, Pagination, Navigation, Keyboard } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import snimg from '../img/10.png';
import thimg from '../img/11.png';
import fthimg from '../img/12.png';
import ffimg from '../img/13.png';
import simg from '../img/14.jpg';
import seimg from '../img/15.jpg';
import eimg from '../img/16.jpg';
import nimg from '../img/17.jpg';
import timg from '../img/18.jpg';

import 'swiper/css';
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/keyboard"


const Home = () => {
    return (

        <
        Swiper

        modules = {
            [Navigation, Pagination, EffectCoverflow, Keyboard]
        }

        effect = { "coverflow" }
        grabCursor = { true }
        navigation = { true }
        paginaion = {
            {
                clickable: true
            }
        }
        centeredSlides = { true }
        keyboard = { true }
        slidesPerView = { "auto" }
        loop = { true }
        coverflowEffect = {
            {
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true
            }
        }
        className = "mySwiper" >

        <
        div className = "swiper_text" > Choy < /div> <
        SwiperSlide className = "snimg" > < img src = { snimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "thimg" > < img src = { thimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "fthimg" > < img src = { fthimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "ffimg" > < img src = { ffimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "simg" > < img src = { simg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "seimg" > < img src = { seimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "eimg" > < img src = { eimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "nimg" > < img src = { nimg }
        />< /SwiperSlide >
        <
        SwiperSlide className = "timg" > < img src = { timg }
        />< /SwiperSlide > <
        div className = "choy_text" > Choy media - haqiqiy o 'zbekcha digital marketing. <br/> Minimum harajat, maksimum natijaga erishishni istaganlar uchun.</div> <
        div class = "gutter gutter--medium" >
        <
        Link to = "/form"
        class = "button button--large button--primary" > Maxsus taklif < /Link> <
        a href = "http://t.me/storm_uz"
        target = "_blank"
        class = "button button--large button--hollow" > Biz bilan aloqa < /a> < /
        div > <
        /
        Swiper >

    );
};



export default Home;