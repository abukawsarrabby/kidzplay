import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../components/Spinner';
import { AuthContext } from '../providers/AuthProviders';

const Main = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            <div className='mb-16'>
                <Header></Header>
            </div>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;