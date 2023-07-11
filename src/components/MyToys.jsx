import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';
import { Link } from 'react-router-dom';
import { FcDeleteDatabase, FcEditImage } from 'react-icons/fc';
import PageTitle from './PageTitle';
import { BeatLoader } from "react-spinners";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyToys = () => {

    const { user, loading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    console.log(loading)


    // tan stack query

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['mytoys', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/mytoys?email=${user?.email}`)
            setToys(res.data);
            return res.data;

        }
    })


    // handle sort by 
    const handleSortBy = event => {
        event.preventDefault();
        const type = event.target.value;
        axiosSecure.get(`/mytoys?email=${user.email}&type=${type}`)
            .then(res => setToys(res.data))
    };


    //handle delete function
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://kidzplay-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        if (res.ok) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    })
            }
        });
    };



    return (
        <div>
            <PageTitle title='My Toys'></PageTitle>
            <h1 className='text-5xl text-center font-bold mt-10'>My toys: {toys?.length}</h1>
            <div className="w-1/3 my-5 mx-auto">
                {/* <p className='font-bold text-lg my-2 text-center'>Sort By Price:</p> */}
                <select value="" onChange={handleSortBy} className="select w-full select-error">
                    <option disabled value="" className="font-bold">
                        Sort By Price
                    </option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>


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
                            <th>Update / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys?.length === 0
                            ? <div className='flex justify-center items-center'><BeatLoader size={64} color="rgb(255 107 107)" />
                            </div>
                            : toys?.map((toy, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{toy?.sellerName}</td>
                                    <td>{toy?.toyName}</td>
                                    <td>{toy?.subCategory}</td>
                                    <td>{'$' + toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <td className='flex justify-around items-center'>
                                        <Link className="tooltip tooltip-error" data-tip="Edit" to={`/updateToy/${toy._id}`}>
                                            <FcEditImage className='text-5xl' />
                                        </Link>
                                        <button className="tooltip tooltip-error" data-tip="Delete" onClick={() => handleDelete(toy._id)}>
                                            <FcDeleteDatabase className='text-5xl' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;