import React, { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from './PageTitle';

const AllToys = () => {

    const searchRef = useRef();
    const toys = useLoaderData();
    const [searchQuery, setSearchQuery] = useState(toys);


    const handleSearch = event => {
        event.preventDefault();
        const query = searchRef.current.value;
        fetch(`https://kidzplay-server.vercel.app/search?toyName=${query}`)
            .then(res => res.json())
            .then(data => {
                setSearchQuery(data);
            });
    };


    return (
        <div className='px-5'>
            <PageTitle title='All Toys'></PageTitle>
            <h1 className='text-5xl text-center font-bold my-10'>Total toys: {toys?.length}</h1>
            <div className='flex justify-center items-center my-5'>
                <input
                    type="text"
                    placeholder="Search by Toy Name"
                    className="input input-bordered input-error w-full mr-2 max-w-xs"
                    ref={searchRef}
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
                                    <Link to={`/toy-details/${toy._id}`} className='btn-kidzplay'>View Details</Link>
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
