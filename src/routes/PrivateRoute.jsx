import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <FaSpinner />;
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;