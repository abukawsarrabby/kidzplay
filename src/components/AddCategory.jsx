import React, { useEffect, useState } from 'react';
import { FcDeleteDatabase, FcEditImage } from 'react-icons/fc';
import Swal from 'sweetalert2';
import PageTitle from './PageTitle';

const AddCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`kidzplay-server.vercel.app/categorys`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [categories])

    const handleAddCategory = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;

        const subCategory = {
            category
        }

        fetch('kidzplay-server.vercel.app/categorys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subCategory)
        })
            .then((res) => res.json())
            .then((data) => {
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Category added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    //handle category update--
    const handleUpdateCategory = (event, id) => {
        event.preventDefault();
        const form = event.target;
        const updatedCategory = form.categoryName.value;

        console.log(updatedCategory)

        const category = { category: updatedCategory };

        fetch(`kidzplay-server.vercel.app/categorys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Update successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data);
            })
    }

    //handle category delete
    const handleDeleteCategory = id => {
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
                fetch(`kidzplay-server.vercel.app/categorys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        if (res.ok) {
                            Swal.fire(
                                'Deleted!',
                                'Category deleted.',
                                'success'
                            );
                        }
                    })
            }
        });
    };

    return (
        <div className='md:grid md:grid-cols-2 md:gap-2'>
            <PageTitle title='Add New Category'></PageTitle>
            {/* add new category */}
            <div className="md:p-16 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <form onSubmit={handleAddCategory} className="card-body">
                            <h1 className="text-xl font-bold mb-3">Add New Category!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Category Name</span>
                                </label>
                                <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn-kidzplay text-white">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* category list */}
            <div className='p-5'>
                <h1 className='text-3xl text-center font-bold mb-10 md:my-10'>Total Categories: {categories?.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Categories Name</th>
                                <th>Update / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories &&
                                categories?.map((category, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td><p className='font-bold'>{category?.category}</p></td>
                                        <td className='flex justify-around items-center'>

                                            <label
                                                htmlFor={`my-modal-${category?._id}`} className="tooltip tooltip-error" data-tip="Edit">
                                                <FcEditImage className='text-3xl' />
                                            </label>

                                            {/* Modal content start */}
                                            <div>
                                                <input type="checkbox" id={`my-modal-${category?._id}`} className="modal-toggle hidden" />
                                                <label htmlFor={`my-modal-${category?._id}`} className="modal cursor-pointer">
                                                    <div className="modal-box bg-coral w-11/12 max-w-5xl">
                                                        <label htmlFor={`my-modal-${category?._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                        <div className="">
                                                            <div className="">
                                                                <h3 className="text-xl font-bold mb-4">{category?.category}</h3>
                                                            </div>
                                                            <form onSubmit={() => handleUpdateCategory(category._id)}>
                                                                <div className="grid md:grid-cols-2 gap-4">
                                                                    <div className="form-control">
                                                                        <label className="label">
                                                                            <span className="label-text">Category Name</span>
                                                                        </label>
                                                                        <input type="text" name="categoryName" placeholder="Category Name" defaultValue={category.category} className="input input-bordered" required />
                                                                    </div>
                                                                </div>
                                                                <div className="form-control mt-10">
                                                                    <button className="btn-kidzplay text-white">Submit</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            {/* Modal content end */}

                                            <button className="tooltip tooltip-error" data-tip="Delete" onClick={() => handleDeleteCategory(category._id)}>
                                                <FcDeleteDatabase className='text-3xl' />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;