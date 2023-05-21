import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import PageTitle from './PageTitle';

const AllToys = () => {
    const toys = useLoaderData();
    const [searchQuery, setSearchQuery] = useState(toys);

    const handleSearch = event => {
        event.preventDefault();
        const query = event.target.value;

        fetch(`http://localhost:5000/search?toyName=${query}`)
            .then(res => res.json())
            .then(data => {
                setSearchQuery(data);
            });
    };

    return (
        <div>
            <PageTitle title='All Toys'></PageTitle>
            <h1 className='text-5xl text-center font-bold my-10'>Total toys: {toys?.length}</h1>
            <div className='text-right my-5'>
                <input
                    type="text"
                    placeholder="Search by Toy Name"
                    className="input input-bordered input-error w-full mr-5 max-w-xs"
                    // value={searchQuery}
                    onChange={handleSearch}
                />
                <button className='btn-kidzplay' onClick={handleSearch}>Search</button>
            </div>
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
                        {searchQuery?.map((toy, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.toyName}</td>
                                <td>{toy?.subCategory}</td>
                                <td>{'$' + toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td>
                                    <label htmlFor={`my-modal-${toy?._id}`} className="btn-kidzplay">View Details</label>
                                    <Modal key={toy?._id} toy={toy}></Modal>
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
