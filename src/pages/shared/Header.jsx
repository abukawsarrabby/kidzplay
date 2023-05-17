import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [users, setUsers] = useState(false);
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='allToys'>All Toys</Link></li>
        {
            users &&
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
                    users
                        ?
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            // data-tooltip-id="tooltip"
                                {/* // data-tooltip-content={users?.displayName}  */}
                                <img src={users?.photoURL} />
                                {/* <Tooltip id='tooltip' /> */}
                            </div>
                        </label>
                        :
                        <Link to='login' className="btn-kidzplay">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;