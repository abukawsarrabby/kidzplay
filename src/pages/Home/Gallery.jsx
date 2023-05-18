import React from 'react';
import car1 from '../../assets/photos/car.jpg'
import car2 from '../../assets/photos/giorgio-trovato.jpg'
import car3 from '../../assets/photos/ivan.jpg'
import car4 from '../../assets/photos/gimmel.jpg'
import car5 from '../../assets/photos/giorgio.jpg'

const Gallery = () => {
    return (
        <div className='text-center overflow-hidden h-[44rem]'>
            <h1 className='text-2xl font-bold mt-10'> Photo Galley</h1>
            <p className='my-5'>Here's the most beautifull toys car's photo gallery</p>

            <div className="md:grid md:grid-cols-3 gap-3">
                <div className='grid-cols-1'>
                    <img className='w-96' src={car1} alt="" />
                    <img className='w-96' src={car2} alt="" />
                </div>
                <img className='w-96' src={car3} alt="" />
                <div className="grid-cols-1">
                    <img className='w-96' src={car4} alt="" />
                    <img className='w-96' src={car5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;