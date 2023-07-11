import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><LazyLoadImage src="https://i.ibb.co/g3znk6H/kidz1.jpg" alt="" /></SwiperSlide>
            {/* <SwiperSlide><LazyLoadImage src="https://i.ibb.co/BnQyQ9t/7438290-32611.jpg" alt="" /></SwiperSlide> */}
        </Swiper>
    );
};

export default Banner;