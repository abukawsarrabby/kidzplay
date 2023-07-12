import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiShoppingCart } from 'react-icons/fi';
import useCart from '../../hooks/useCart';
import Spinner from '../../components/Spinner';

const Header = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    const [cart, refetch] = useCart([]);

    console.log('loading---------', loading)

    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allToys'>All Toys</Link></li>
            {user && <>
                <li>
                    <Link to='/myToys'>My Toys</Link></li>
                <li><Link to='/add-new-toy'>Add A Toy</Link></li>
                <li><Link to='/add-new-category'>Add New Category</Link>
                </li>
            </>}
            <li><Link to='/blogs'>Blogs</Link></li>
        </>

    return (
        <div className="navbar bg-base-100 lg:px-16 z-10 shadow fixed top-0 right-0 py-5">
            <div className="navbar-start">
                <Link to='/' className="normal-case text-5xl font-extrabold">Kidz<span className='text-coral'>Play</span></Link>
            </div>
            <div className="navbar-center">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="space-y-4 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-4 px-1 justify-center items-center font-bold text-lg">
                        {navItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <div className='flex justify-around items-center gap-5'>
                    <Link to={'/cart'} className="relative inline-block">
                        <FiShoppingCart className='text-3xl'></FiShoppingCart>
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-[#fff] transform translate-x-1/2 -translate-y-1/2 bg-coral rounded-full">{cart?.length || 0}</span>
                    </Link>
                    <div className="dropdown dropdown-end">
                        <div className="navbar-end">
                            {user ? (
                                <div className='flex'>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div data-tooltip-id="tooltip" data-tooltip-content={user?.displayName} className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt="User Avatar" />
                                            <Tooltip id='tooltip' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 px-4 shadow py-4 space-y-2 dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='profile' className="justify-between font-bold">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><button onClick={logOut} className='btn-link font-bold'>LogOut</button></li>
                                    </ul>
                                </div>
                            ) : (<Link to='/login' className="btn-kidzplay">Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
