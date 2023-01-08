import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import home from '../image/home.jpeg'
import home2 from '../image/home2.webp'
import home3 from '../image/home3.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded-lg"
            >
                <SwiperSlide>
                    <img src={home} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={home2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={home3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

