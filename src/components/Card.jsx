import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/styles.css';
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ toy }) => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2000,
            easing: 'linear',
            delay: 100,
        });
    }, [])

    return (
        <div>
            <div data-aos="fade-down" data-aos-once="true" className="card h-[25rem] w-[20rem] md:w-full mx-auto bg-base-100 shadow">
                <figure className="rounded-3xl">
                    <LazyLoadImage
                        alt={toy?.toyName}
                        src={toy?.pictureUrl}
                        className="rounded-3xl"
                    />
                </figure>
                <div className="card-body items-center">
                    <div className="">
                        <h2 className="text-lg font-medium">{toy?.toyName}</h2>
                        <p className='font-bold text-3xl text-coral'>${toy?.price}</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className='text-sm font-bold text-center'>
                            <Rating
                                className='text-xs mx-auto'
                                style={{ maxWidth: 80 }}
                                value={toy?.rating}
                                readOnly
                                emptySymbol={<i className="far fa-star"></i>}
                                fullSymbol={<i className="fas fa-star"></i>}
                            ></Rating>
                        </h2>
                        <div className='text-center'>
                            <Link to={`/toy-details/${toy._id}`} className='btn-kidzplay'>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
