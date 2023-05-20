import React from 'react';
import Swal from 'sweetalert2';

const AddCategory = () => {

    const handleAddCategory = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;

        const subCategory = {
            category
        }

        fetch('http://localhost:5000/categorys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subCategory)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'category added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:w-2/5">
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
    );
};

export default AddCategory;