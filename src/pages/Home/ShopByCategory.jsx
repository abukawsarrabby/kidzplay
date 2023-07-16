import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardItems from '../../components/CardItems';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ShopByCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://kidzplay-server.vercel.app/categorys')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
        AOS.init({
            // offset: 200,
            duration: 2000,
            easing: 'linear',
            delay: 500,
        });
    }, [])
    return (
        <div className='overflow-x-hidden my-10'>
            <div className='text-center'>
                <h1 data-aos="zoom-in" data-aos-once="true" className='text-5xl font-bold mt-10'> Shop By Category</h1>
                <p data-aos="zoom-in" data-aos-once="true" className='my-5'>Discover a wide selection of products organized by category on our Shop By Category page.</p>
            </div>
            <div className='md:grid md:grid-cols-12 gap-5'>
                <div data-aos="fade-right" data-aos-once="true" className='rounded-xl col-span-4 my-8'>
                    <div className="relative group rounded-lg duration-500 overflow-hidden">
                        <LazyLoadImage
                            src='https://i.ibb.co/Nm5YjjG/hrbanner-53b30e8c.jpg'
                            alt='poster'
                            className="rounded-lg w-full transition-all duration-700" />
                        <div className="absolute  group-hover:top-0 group-hover:bottom-0 duration-1000  top-1/2 left-0  right-0 bottom-1/2  bg-slate-950 bg-opacity-25 z-10 ">
                        </div>
                        <div className="absolute  top-0 left-0 z-20 right-0 bottom-0  text-center pt-10 ">
                            <span class="bg-[#fff] text-sm font-semibold text-gray-800 px-2 py-1 tracking-[0.5rem] rounded-md ">FLAT DEAL</span>
                            <h2 className="text-sec  font-nunito text-2xl mt-7 duration-500 group-hover:mt-5 ">Ride On Car</h2>
                            <p class="font-semibold text-[gray] mb-5">Power Full Battery Up to 30% Off</p>
                            <button className="underline hover:text-[pink] hover:tracking-widest duration-150">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-8'>
                    <Tabs>
                        <TabList>
                            {categories &&
                                categories?.map(category => (
                                    <Tab key={category?._id}><span className='font-bold text-2xl text-white'>{category?.category}</span></Tab>
                                ))}
                        </TabList>


                        {categories &&
                            categories.map(category => (
                                <TabPanel key={category?._id}>
                                    <CardItems
                                        category={category}
                                    ></CardItems>
                                </TabPanel>
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
