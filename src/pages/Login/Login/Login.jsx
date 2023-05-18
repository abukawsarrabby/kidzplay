import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const from = location.state?.from || '/';

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
                toast.success("Login Successfull");
            })
            .catch(error => {
                console.log(error);
                toast.error('Something went wrong. Please try again later.');
            });
    };

    const handleGoogleSignIn = () => {
        const from = location.state?.from || '/';

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
                toast.success("Login Successfull With Your Gmail");
            })
            .catch(error => {
                console.log(error);
                toast.error('Something went wrong. Please try again later.');
            });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:w-2/5">

                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">


                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-xl font-bold mb-3">Please Login to your account!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn-kidzplay text-white">Login</button>
                        </div>
                        <div className="flex flex-col">
                            {/* <!-- Divider --> */}
                            <div
                                classNmae="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>
                            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-error mb-4 text-white">
                                <span className="flex justify-center items-center">
                                    <FaGoogle />
                                    <span> Sign in with Google</span>
                                </span>
                            </button>
                        </div>

                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/register" className="label-text-alt link link-hover">
                            New to kidzPlay? Please Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;