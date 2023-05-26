import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Testimonial = ({ name, rating, picture }) => {
  return (
    <section className="bg-gradient shadow-lg rounded-lg">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="">
            <div className="text-center">
              <div className="">
                <div>
                  <p className='font-bold text-2xl mr-2'>{rating}</p>
                </div>
                <div className='flex justify-center'>
                  <Rating
                    className='mb-5'
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                    emptySymbol={<i className="far fa-star"></i>}
                    fullSymbol={<i className="fas fa-star"></i>}
                  />
                </div>
              </div>
              <div className="text-gray-700">
                I absolutely love this toy marketplace! They have a wide variety of toys to choose from, and the quality is excellent.
              </div>
              <div className="flex items-center text-center justify-center mt-4">
                <div className="mr-2">
                  <LazyLoadImage
                    className="w-12 h-12 rounded-full"
                    src={picture}
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
