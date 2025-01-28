import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/Actions/authActions';
import { logoutEmailUser } from '../store/Actions/emailAction';
import { selectName, selectGoogleUser, selectEmail,} from '../store/Selectors/authSelectors';

const LogoutHandler = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Select user states
    const user = useSelector(selectName);
    const googleUser = useSelector(selectGoogleUser);
    const emailUser = useSelector(selectEmail);

    // Check if logged in
    const isLoggedIn = Boolean(user || googleUser || emailUser);

    useEffect(() => {
        if (!isLoggedIn && localStorage.getItem('authToken')) {
            // Perform logout actions
            // dispatch(logoutMobileUser());
            console.log("Logging out user...");
            dispatch(logout());
            dispatch(logoutEmailUser());


            // Navigate to login
            console.log("Navigating to login...");
            navigate('/login');
        }
    }, [isLoggedIn, dispatch, navigate]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
    
    return null; // This component doesn't render anything

};

export default LogoutHandler;
