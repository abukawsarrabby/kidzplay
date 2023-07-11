import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            // delay: 10,
        });
    }, [])
    return (
        <div className='text-center overflow-hidden md:h-[46rem]'>
            <h1 className='text-5xl font-bold mt-10'> Photo Galley</h1>
            <p className='my-5'>Here's the most beautifull toys car's photo gallery</p>
            <div className="grid grid-cols-3 gap-2">
                <div data-aos="fade-right" data-aos-once="true" className='h-[280px] md:h-full'>
                    <LazyLoadImage
                        alt="Banner"
                        src="https://i.ibb.co/7Yb92vx/car1.jpg"
                        className="h-1/2 md:h-fit"
                    />
                    <LazyLoadImage
                        alt="Banner"
                        src="https://i.ibb.co/YkJrbDP/giorgio-trovato.jpg"
                        className=""
                    />
                </div>
                <div data-aos="fade-up" data-aos-once="true" className='h-[280px] md:h-full'>
                    <LazyLoadImage
                        alt="Banner"
                        src="https://i.ibb.co/L6k24PW/ivan.jpg"
                        className="h-full"
                    />
                </div>
                <div data-aos="fade-left" data-aos-once="true" className="h-[280px] md:h-full">
                    <LazyLoadImage
                        alt="Banner"
                        src="https://i.ibb.co/ZYxZp52/gimmel.jpg"
                        className="h-1/2 md:h-fit"
                    />
                    <LazyLoadImage
                        alt="Banner"
                        src="https://i.ibb.co/sJYTwGb/giorgio.jpg"
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;