import React from 'react';
import car1 from '../../assets/photos/car.jpg'
import car2 from '../../assets/photos/giorgio-trovato.jpg'
import car3 from '../../assets/photos/ivan.jpg'
import car4 from '../../assets/photos/gimmel.jpg'
import car5 from '../../assets/photos/giorgio.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => {
    return (
        <div className='text-center overflow-hidden h-[44rem]'>
            <h1 className='text-5xl font-bold mt-10'> Photo Galley</h1>
            <p className='my-5'>Here's the most beautifull toys car's photo gallery</p>

            <div className="md:grid md:grid-cols-3 gap-3">
                <div className='grid-cols-1'>
                    <LazyLoadImage
                        alt="Banner"
                        src={car1}
                        className="w-96"
                    />
                    <LazyLoadImage
                        alt="Banner"
                        src={car2}
                        className="w-96"
                    />
                </div>
                <LazyLoadImage
                    alt="Banner"
                    src={car3}
                    className="w-96"
                />
                <div className="grid-cols-1">
                    <LazyLoadImage
                        alt="Banner"
                        src={car4}
                        className="w-96"
                    />
                    <LazyLoadImage
                        alt="Banner"
                        src={car5}
                        className="w-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;