import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import PageTitle from '../../../components/PageTitle';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const ImageURL = form.ImageURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, ImageURL, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                updateUserData(loggedUser, name, ImageURL);
                navigate('/login')
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successfull. Please login!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Registration failed. Please Try Again Later!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                console.log("photoURL & name updated")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero h-screen">
            <PageTitle title='Registration'></PageTitle>
            <div className="hero-content flex-col md:w-2/5">
                <div className="card flex-shrink-0 w-full max-w-2xl  h-fit shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-xl font-bold mb-3">Please Register to your account!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ImageURL</span>
                            </label>
                            <input type="text" name='ImageURL' placeholder="ImageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn-kidzplay text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;