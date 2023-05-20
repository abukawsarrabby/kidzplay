import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-10'>Total toys: {toys?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>See Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys?.map((toy, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.toyName}</td>
                                <td>{toy?.subCategory}</td>
                                <td>{'$' + toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td>
                                    <label
                                        htmlFor={`my-modal-${toy?._id}`} className="btn-kidzplay">View Details
                                    </label>
                                    <Modal
                                        key={toy?._id}
                                        toy={toy}
                                    ></Modal>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
