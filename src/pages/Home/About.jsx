import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 1000,
        });
    }, [])
    return (
        <div className="relative">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="">
                        <div
                            className="relative">
                            <div data-aos="zoom-in">
                                <LazyLoadImage
                                    alt="Banner"
                                    src='https://i.ibb.co/7njNhkw/main.jpg'
                                />
                            </div>
                            <div className="absolute  -left-7 -bottom-7 border-[20px] border-[#fff] bg-[#fff] rounded-none">
                                <LazyLoadImage
                                    data-aos="fade-right"
                                    alt="Banner"
                                    src="https://i.ibb.co/tHNVVYX/corner.jpg"
                                    className='overflow-hidden'
                                />
                            </div>
                            <div data-aos="zoom-in" className="absolute right-0 top-0 bg-coral p-5 text-2xl mt-0 min-w-[300px] text-[#fff]">
                                <span className='flex justify-center items-center'>
                                    <p className="counter text-[78px] min-w-[99px] font-bold" data-from="0" data-to="25">
                                        25
                                    </p>
                                    <h1>
                                        Years of <br /> Experience
                                    </h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative">
                            <div className="relative max-w-[640px]">
                                <span className="font-bold text-coral">About us</span>
                                <h3 className="text-6xl my-5 font-extrabold">
                                    Best Toys From <span className="text-coral">Best Shop</span>
                                </h3>
                                <h4 className='my-5 font-bold text-3xl'>Customers’ favorite products this week.</h4>
                            </div>
                            <div>
                                <p>
                                    The golden age of toy development was at the turn of the toys Real wages were rising steadily in
                                    the Western world, allowing even working-class families to afford toys for their children, and
                                    industrial techniques.
                                </p>
                                <Link className="btn-kidzplay my-5">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;