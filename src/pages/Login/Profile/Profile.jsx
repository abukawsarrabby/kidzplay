import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

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
                toast.success('Update Profile Successfully.');
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Update failed');
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
                            <input type="email" name='email' placeholder="email" disabled defaultValue={user?.email} className="input input-bordered" />
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