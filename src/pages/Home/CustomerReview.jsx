import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './Testimonial';
import './Banner.css'

const CustomerReview = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div data-aos="zoom-in" data-aos-once="true" className='text-center py-10 mx-auto'>
            <h1 className='text-5xl font-bold mt-10'> CustomerReview</h1>
            <p className='my-5'>Discover a wide selection of products review from our client.</p>
            <div className="grid md:grid-cols-3 gap-5">
                <div className='flex items-end justify-center'>
                    <Testimonial
                        name={"Aria Leeann"}
                        rating={4.9}
                        picture={'https://randomuser.me/api/portraits/women/2.jpg'}
                    ></Testimonial>
                </div>
                <div className='custombg p-10
                flex justify-center items-center rounded-lg h-96 overflow-hidden'>
                    <div className='text-[white] bg-[black] bg-opacity-30 drop-shadow p-96'>
                    <h1 className='text-6xl font-medium'>Save Big</h1>
                    <p>use Cupon : <h1 className='text-7xl font-medium'>EID50%</h1></p>
                    </div>
                </div>
                <div className='flex items-end justify-center'>
                    <Testimonial
                        name={"Carmel Merche"}
                        rating={5}
                        picture={'https://randomuser.me/api/portraits/women/90.jpg'}
                    ></Testimonial>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;