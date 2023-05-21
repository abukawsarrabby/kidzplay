import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from './PageTitle';

const UpdateToy = () => {

    const { user, createUser } = useContext(AuthContext);

    const { _id, pictureUrl, price, productDescription, quantity, rating, subCategory, toyName } = useLoaderData();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categorys')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])


    const navigate = useNavigate();


    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const userName = user?.displayName;
        const toyName = form.toyName.value;
        const pictureUrl = form.pictureUrl.value;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const priceString = form.price.value;
        const price = parseFloat(priceString);
        const ratingString = form.rating.value;
        const rating = parseFloat(ratingString);
        const quantityString = form.quantity.value;
        const quantity = parseInt(quantityString);
        const productDescription = form.productDescription.value;

        const toy = {
            toyName,
            pictureUrl,
            sellerName: userName,
            sellerEmail: email,
            subCategory,
            price,
            rating,
            quantity,
            productDescription
        }

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
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
                navigate('/myToys')
                console.log(data);
            })
    }
    return (
        <div className="hero min-h-screen bg-gray-100">
            <PageTitle title='Update Toy'></PageTitle>
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card shadow-lg bg-white p-6">
                        <h1 className="text-3xl font-bold mb-3">Update Toy!</h1>
                        <form onSubmit={handleUpdate}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name="toyName" placeholder="Toy Name" defaultValue={toyName} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name="sellerName" placeholder="Seller Name" defaultValue={user?.displayName} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name="sellerEmail" placeholder="Seller Email" readOnly defaultValue={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <select className="select select-bordered w-full" name="subCategory" defaultValue={subCategory} required>
                                        <option disabled value="" defaultValue="" className="font-bold">Choose A Category</option>
                                        {
                                            categories.map(category => (
                                                <option key={category._id} value={category.category} className="font-bold">
                                                    {category.category}
                                                </option>
                                            ))
                                        }
                                    </select>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="$10" defaultValue={price} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="100" defaultValue={quantity} className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" name="pictureUrl" placeholder="Picture URL" defaultValue={pictureUrl} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea name="productDescription" placeholder="Description is here.......
                                " className="textarea textarea-bordered h-24" defaultValue={productDescription} required></textarea>
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn-kidzplay text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;






