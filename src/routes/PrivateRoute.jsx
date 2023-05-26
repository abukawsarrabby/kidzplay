import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProviders';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner></Spinner>;
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;