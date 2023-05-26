import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './Testimonial';

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
        <div data-aos="zoom-in" className='text-center px-5 mx-auto'>
            <h1 className='text-5xl font-bold mt-10'> CustomerReview</h1>
            <p className='my-5'>Discover a wide selection of products review from our client.</p>
            <div className="grid md:grid-cols-3 gap-5">
                <Testimonial
                    name={"Aria Leeann"}
                    rating={4.9}
                    picture={'https://randomuser.me/api/portraits/women/2.jpg'}
                ></Testimonial>
                <Testimonial
                    name={"Fabrice Hroðulf "}
                    rating={4.7}
                    picture={'https://randomuser.me/api/portraits/men/26.jpg'}
                ></Testimonial>
                <Testimonial
                    name={"Carmel Merche"}
                    rating={5}
                    picture={'https://randomuser.me/api/portraits/women/90.jpg'}
                ></Testimonial>
            </div>
        </div>
    );
};

export default CustomerReview;