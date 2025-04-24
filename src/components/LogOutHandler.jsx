import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/Actions/authActions';
import { logoutEmailUser } from '../store/Actions/emailAction';
import { selectName, selectGoogleUser,} from '../store/Selectors/authSelectors';
import { selectEmailUser } from '../store/Selectors/emailSelector';

const LogoutHandler = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Select user states
    const googleUser = useSelector(selectGoogleUser);
    const emailUser = useSelector(selectEmailUser);

    // Check if logged in
    const isLoggedIn = Boolean( googleUser || emailUser);

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
