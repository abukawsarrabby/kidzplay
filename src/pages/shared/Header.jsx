import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // navMenu
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='allToys'>All Toys</Link></li>
        {
            user &&
            <>
                <li><Link to='myToys'>My Toys</Link></li>
                <li><Link to='/addToy'>Add A Toy</Link></li>
            </>
        }
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="space-y-4 font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-4xl font-extrabold">Kidz<span className='text-coral'>Play</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 font-bold px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ? <div className='flex'>

                            <button onClick={logOut} className='btn-kidzplay'>LogOut</button>

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div data-tooltip-id="tooltip"
                                    data-tooltip-content={user?.displayName} className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                    <Tooltip id='tooltip' />
                                </div>
                            </label>
                        </div>
                        : <Link to='login' className="btn-kidzplay">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;