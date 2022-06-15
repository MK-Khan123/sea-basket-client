import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const RequiredAuth = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    
    return (
        user.email ? children : (
            <Navigate
                to={{ pathname: "/login" }}
                state={{ from: location }}
                replace
            />
        )
    );
};

export default RequiredAuth;