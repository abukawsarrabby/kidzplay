import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Header></Header>
                <ToastContainer />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;