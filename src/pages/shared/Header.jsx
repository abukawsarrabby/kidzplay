import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const navItems = !loading && (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allToys'>All Toys</Link></li>
            {user && (
                <>
                    <li><Link to='/myToys'>My Toys</Link></li>
                    <li><Link to='/addToy'>Add A Toy</Link></li>
                </>
            )}
            <li><Link to='/blogs'>Blogs</Link></li>
        </>
    );

    return (
        <div className='lg:px-24'>
            <div className="navbar sticky top-0 border-b border-base-300">
                <div className="flex-1">
                    <Link to='/' className="normal-case text-4xl font-extrabold">Kidz<span className='text-coral'>Play</span></Link>
                </div>
                <div className="flex-none gap-2">
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
                                            <Link to='profile' className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        <li><button onClick={logOut} className='btn-link'>LogOut</button></li>
                                    </ul>
                                </div>
                            ) : !loading && (
                                <Link to='/login' className="btn-kidzplay">Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="space-y-4 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="hidden lg:sticky top-0 lg:flex">
                        <ul className="flex gap-4 px-1">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
