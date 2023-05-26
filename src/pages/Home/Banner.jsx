import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = () => {
    return (
        <div className="carousel h-72">
            <div id="slide1" className="carousel-item relative w-full">
               <LazyLoadImage
                    alt="Banner"
                    src="https://i.ibb.co/V2XzYS0/banner1.jpg"
                    className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <LazyLoadImage
                    alt="Banner"
                    src="https://i.ibb.co/XJpS3F4/banner2.jpg"
                    className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <LazyLoadImage
                    alt="Banner"
                    src="https://i.ibb.co/NmsTM39/banner.jpg"
                    className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;