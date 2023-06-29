import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import "./Slider.css";
// import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

const Slider = () => {

    const swiperParams = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };


    return (
        <>
            <div>
                <div className="swiper-button-next swiper-button-white"></div>
                <Swiper {...swiperParams}>
                    <SwiperSlide>
                        <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                            <source src={require("../../Images/s.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                            <source src={require("../../Images/s1.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                            <source src={require("../../Images/s2.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </>
    )
}

export default Slider