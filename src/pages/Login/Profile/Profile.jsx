import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const ImageURL = form.ImageURL.value;

        updateUserData(user, name, ImageURL)
    }

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                navigate('/')
                Swal.fire({
                    icon: 'success',
                    title: 'Update Profile Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Profile Failed.',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className="hero h-screen">
            <div className="hero-content flex-col md:w-2/5">

                <div className="card flex-shrink-0 w-full max-w-2xl  h-fit shadow-2xl bg-base-100">


                    <form onSubmit={handleUpdate} className="card-body">
                        <h1 className="text-xl font-bold mb-3">Update your Profile!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ImageURL</span>
                            </label>
                            <input type="text" name='ImageURL' placeholder="ImageURL" defaultValue={user?.photoURL} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" readOnly defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn-kidzplay text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;