import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/styles.css';
import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';

const Card = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const handleAlert = () => {
        Swal.fire({
            icon: 'info',
            title: 'You need login to view details',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div>
            <div className="card h-[25rem] bg-base-100 mb-5 shadow-xl">
                <figure className="rounded-3xl">
                    <LazyLoadImage
                        alt={toy?.toyName}
                        src={toy?.pictureUrl}
                        className="rounded-3xl p-5 h-60 w-[30rem]"
                    />
                </figure>
                <div className="card-body items-center">
                    <div className="flex justify-center items-center">
                        <h2 className="card-title">{toy?.toyName}</h2>
                    </div>
                    <div className="space-y-4">
                        <h2 className='text-sm font-bold text-center'>Rating:
                            <Rating
                                className='text-xs'
                                style={{ maxWidth: 100 }}
                                value={toy?.rating}
                                readOnly
                                emptySymbol={<i className="far fa-star"></i>}
                                fullSymbol={<i className="fas fa-star"></i>}
                            ></Rating>
                        </h2>
                        <div className='text-center'>
                            {user
                                ? <label htmlFor={`my-modal-${toy?._id}`} className="btn-kidzplay">View Details</label>
                                : <button onClick={handleAlert} className='btn-kidzplay'>View Details</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id={`my-modal-${toy?._id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${toy?._id}`} className="modal cursor-pointer">
                <div className="modal-box relative text-center">
                    <button className="modal-close absolute top-0 right-0" htmlFor={`my-modal-${toy?._id}`}><i className="fas fa-times"></i></button>
                    <h3 className="text-lg font-bold">{toy?.toyName}</h3>
                    <LazyLoadImage
                        src={toy?.pictureUrl}
                        className='w-3/4 h-60 mx-auto rounded-3xl p-5'
                        alt=""
                    />
                </div>
            </label>
        </div>
    );
};

export default Card;
