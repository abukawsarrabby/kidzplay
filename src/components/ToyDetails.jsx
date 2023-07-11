import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FcBookmark, FcManager, FcVoicemail } from 'react-icons/fc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import useCart from '../hooks/useCart';

const ToyDetails = () => {

    const toy = useLoaderData();
    const { _id, toyName, pictureUrl, sellerName, sellerEmail, subCategory, price, rating } = toy;
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart([]);

    const handleAddToCart = () => {

        const toyItem = { toyId: _id, toyName, email: user.email, pictureUrl, sellerName, sellerEmail, subCategory, price, rating }

        axiosSecure.post('/carts', toyItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'AddToCart successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="grid md:grid-cols-2 gap-5 p-5">
            <div className="">
                <LazyLoadImage
                    src={toy?.pictureUrl}
                    className='w-full h-full object-contain rounded-lg'
                    alt=""
                />
            </div>
            <div className="">
                <Rating
                    className='text-xs my-2'
                    style={{ maxWidth: 100 }}
                    value={toy?.rating}
                    readOnly
                    emptySymbol={<i className="far fa-star"></i>}
                    fullSymbol={<i className="fas fa-star"></i>}
                ></Rating>
                <h3 className="text-3xl font-bold">{toy?.toyName}</h3>
                <p className='font-semibold text-lg my-3'>Available: {toy?.quantity} pcs</p>
                <p className='text-3xl font-bold text-coral'>${parseFloat(toy?.price).toFixed(2)}</p>
                <p className=''><strong className='underline'>Description:</strong> <br /> {toy?.productDescription}</p>
                <h1 className='font-bold text-xl'><FcManager className='' />Seller Info</h1>
                <p><strong>Name: </strong>{toy?.sellerName}</p>
                <p><strong>Email:</strong> {toy?.sellerEmail}</p>
                <button onClick={handleAddToCart} className='btn-kidzplay mr-2 my-3'>Add To Cart</button>
                <Link to={`/payment/${_id}`} className='btn-kidzplay'>Buy Now</Link>
            </div>
        </div>
    );
};

export default ToyDetails;