import React from 'react';
import main from '../../assets/About/main.jpg';
import corner from '../../assets/About/corner.jpg';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="relative py-10">
            <div className="container">
                <div className="flex gap-10 flex-row">
                    <div className="lg:w-1/2 hidden lg:block">
                        <div className="relative w-full h-full">
                            <div>
                                <img src={main} alt="img" />
                            </div>
                            <div className="absolute  -left-7 -bottom-7 border-[20px] border-t-[#fff] border-r-[#fff] bg-transparent rounded-none">
                                <img className='' src={corner} alt="img" />
                            </div>
                            <div className="absolute right-0 top-0 bg-coral p-5 text-2xl mt-0 min-w-[300px] text-[#fff]">
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
                    <div className="lg:w-1/2">
                        <div className="relative lg:pl-4">
                            <div className="relative max-w-[640px]">
                                <span className="font-bold text-coral my-10">About us</span>
                                <h3 className="text-6xl font-extrabold">
                                    Best Toys From <span className="text-coral">Best Shop</span>
                                </h3>
                                <h4 className='my-5 font-bold text-3xl'>Customers’ favorite products this week.</h4>
                            </div>
                            <div className="sigma_about-content">
                                <p>
                                    The golden age of toy development was at the turn of the toys Real wages were rising steadily in
                                    the Western world, allowing even working-class families to afford toys for their children, and
                                    industrial techniques.
                                </p>
                                <Link to="contact" className="btn-kidzplay my-5">
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