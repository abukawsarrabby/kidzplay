import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Modal = ({ toy }) => {
    return (
        <div className='w-full'>
            <input type="checkbox" id={`my-modal-${toy?._id}`} className="modal-toggle hidden" />
            <label htmlFor={`my-modal-${toy?._id}`} className="modal cursor-pointer">
                <div className="modal-box bg-coral w-11/12 max-w-5xl">
                    <label htmlFor={`my-modal-${toy?._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="flex justify-center items-center">
                        <div className="">
                            <h3 className="text-xl font-bold mb-4">{toy?.toyName}</h3>
                            <p className='mb-8'><strong>Description:</strong> {toy?.productDescription}</p>
                        </div>
                        <div className="">
                            <div className="w-64 h-64">
                                <LazyLoadImage
                                    src={toy?.pictureUrl}
                                    className='w-full h-full object-contain rounded-lg'
                                    alt=""
                                />
                            </div>
                            <div className="mt-auto">
                                <p><strong>Seller:</strong> {toy?.sellerName}</p>
                                <p><strong>Email:</strong> {toy?.sellerEmail}</p>
                                <p><strong>Price:</strong> {toy?.price}</p>
                                <p><strong>Rating:</strong> {toy?.rating}</p>
                                <p><strong>Available Quantity:</strong> {toy?.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Modal;
