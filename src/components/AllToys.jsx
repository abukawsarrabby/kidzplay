import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import PageTitle from './PageTitle';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const AllToys = () => {

    const { user } = useContext(AuthContext)
    const toys = useLoaderData();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(toys);
    const [searchValue, setSearchValue] = useState('');


    const handleSearch = event => {
        event.preventDefault();
        const query = searchValue;
        console.log(query)
        fetch(`http://localhost:5000/search?toyName=${query}`)
            .then(res => res.json())
            .then(data => {
                setSearchQuery(data);
            });
    };

    const handleAlert = () => {
        navigate('/login')
        Swal.fire({
            icon: 'info',
            title: 'Please login to view details',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div>
            <PageTitle title='All Toys'></PageTitle>
            <h1 className='text-5xl text-center font-bold my-10'>Total toys: {toys?.length}</h1>
            <div className='text-right my-5'>
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search by Toy Name"
                    className="input input-bordered input-error w-full mr-5 max-w-xs"
                    onChange={e => setSearchValue(e.target.value)}
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
                                    {user
                                        ? <label htmlFor={`my-modal-${toy?._id}`} className="btn-kidzplay">View Details</label>
                                        : <button onClick={handleAlert} className='btn-kidzplay'>View Details</button>
                                    }
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
