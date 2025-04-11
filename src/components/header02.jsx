import React, { useEffect, useState } from 'react';
import { trainImage } from '../assets/images';
import { NavLink, Link, useNavigate  } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../store/Actions/authActions';
import { selectName,selectGoogleUser  } from '../store/Selectors/authSelectors';
import { selectPhoneNumber } from '../store/Selectors/mobileSelector'; 
import { selectEmail, statedata } from '../store/Selectors/emailSelector'; 
import { logoutMobileUser } from '../store/Actions/mobileOtpAction';
import { logoutEmailUser } from '../store/Actions/emailAction';
import AuthPopup from './auth/AuthPopup';
// import {ReactComponent as Trainicon} from '../assets/images/Navbaricons/Train.svg'
// import {ReactComponent as Flighticon} from '../assets/images/Navbaricons/Flight.svg'
// import {ReactComponent as Hotelicon} from '../assets/images/Navbaricons/Hotel.svg'
// import {ReactComponent as Cabicon} from '../assets/images/Navbaricons/cab.svg'
// import {ReactComponent as Cruiseicon} from '../assets/images/Navbaricons/Cruise.svg'
// import {ReactComponent as Busicon} from '../assets/images/Navbaricons/Bus.svg'
// import {ReactComponent as Businessicon} from '../assets/images/Navbaricons/Business.svg'
// import {ReactComponent as Healthicon} from '../assets/images/Navbaricons/Medical.svg'

const Header02 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectName);
  const googleUser = useSelector(selectGoogleUser);
  const phoneNumber = useSelector(selectPhoneNumber);
  const emailuser = useSelector(selectEmail);
  // const statdata = useSelector(statedata)
  const isLoggedIn = Boolean(user || googleUser || phoneNumber|| emailuser);
  const googleUserName = localStorage.googleUser || localStorage.googleUserName?.replace(/["']/g, '')
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  
  
  const handleLogout = () => {
    try {
      // First dispatch regular logout to clear auth state
      dispatch(logout());
      
      // Then handle specific user type logouts
      // Wrap these in try-catch to prevent errors from stopping the process
      try {
        dispatch(logoutMobileUser(navigate));
      } catch (error) {
        console.error("Error in mobile logout:", error);
      }
      
      try {
        dispatch(logoutEmailUser(navigate));
      } catch (error) {
        console.error("Error in email logout:", error);
      }
      
      // Clear any remaining localStorage items that might cause issues
      localStorage.removeItem('authToken');
      localStorage.removeItem('googleUser');
      localStorage.removeItem('googleUserName');
      
      // Use setTimeout to ensure navigation happens after state updates
      setTimeout(() => {
        navigate('/');
      }, 100);
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback solution - force page reload as last resort
      window.location.href = '/';
    }
  };

  // Improved conditional auto-logout
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    // Only auto-logout if token exists but user isn't logged in
    if (authToken && !isLoggedIn) {
      // Use clean-up approach instead of full logout to avoid navigation issues
      localStorage.removeItem('authToken');
      window.location.reload();
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   console.log("isLoggedIn ?? ",isLoggedIn)
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggedIn, navigate]);

  // Commented out since this is now handled by the useEffect above
  // if(!isLoggedIn && localStorage.getItem('authToken')){
  //   handleLogout();
  // }

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .nav-menu .active {
            color: #cd2c22;
            font-weight: bold;
            position: relative;
          }
          .dropdown-item {
            padding: 10px 20px;
            position: relative;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .dropdown-item:hover {
            color: #14728a; /* Text color change on hover */
            transform: scale(1.05); /* Slight scaling effect */
          }

          .dropdown-item::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            background-color: #cd2c22;
            left: 0;
            bottom: 0;
            transition: width 0.3s ease;
          }

          .dropdown-item:hover::after {
            width: 100%; /* Underline expands fully on hover */
          }
          .dropdown-item:focus,
          .dropdown-item:active {
            background-color: #cd2c22 !important;
            color: inherit; /* Ensures the color doesn't change */
            outline: none; /* Removes the outline on focus */
          }


        `}
      </style>

      {/* Start Navigation */}
      <div className="header header-light">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <NavLink to="/" className="nav-brand"><img src={trainImage} className="logo" alt="" /></NavLink>
              <div className="nav-toggle" />
              <div className="mobile_nav">
                <ul>
                <li className="currencyDropdown me-2">
                    <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                  </li>
                  <li className="languageDropdown me-2">
                    <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></Link>
                  </li> 
                  <li>
                    <Link to="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
            <ul className="nav-menu">
                <li className='mt-3'><NavLink to="/" > <i className="fa-solid fa-train me-2 fa-lg" />Trains</NavLink></li>
                <li className="mt-3"><NavLink to="/home-flight" ><i className="fa-solid fa-plane me-2 fa-lg" />Flights</NavLink></li>
                <li className='mt-3'><NavLink to="/home-hotel" ><i className="fa-solid fa-hotel me-2 fa-lg" />Hotels</NavLink></li>
                <li className='mt-3'><NavLink to="/home-car" ><i className="fa-solid fa-car me-2 fa-lg" />Cabs</NavLink></li>
                <li className="mt-3"><NavLink to="/home-cruise" ><i className="fa-solid fa-ship me-2 fa-lg" />Cruises</NavLink></li>
                <li className="mt-3"><NavLink to="/home-bus" ><i className="fa-solid fa-bus me-2 fa-lg" />Buses</NavLink></li>
                <li className="mt-3"><NavLink to="/packages" > <i className="fa-solid fa-suitcase-rolling me-2" />Packages</NavLink></li>
                
                {/* <li className="mt-3"><NavLink to="/home-medicaltourism" ><i className="fa-solid fa-heart-pulse me-2 fa-lg" />Health Tourism</NavLink></li> */}
              
              
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right mt-3">

              {/* <li className="currencyDropdown me-2">

                <li className="currencyDropdown me-2">

                  <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                </li> 
                <li className="languageDropdown me-2">
                  <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src={indian_flag} className="img-fluid" width={17} alt="Country" /></Link>

                </li> 

                </li> */}

                {/* <li className="list-buttons">
                  <NavLink to="/login" className="active"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</NavLink>
                </li> */}
                    {isLoggedIn ? (
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle d-flex align-items-center" to="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-regular fa-circle-user fs-5 me-2" />
                      <span>{googleUser?.firstName || googleUserName || user || (phoneNumber && "Hi, Traveller") || (emailuser && "Hii, Traveller")}</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                      <li>
                        <Link className="dropdown-item" to="/my-profile">Profile</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/support">support</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/settings">Settings</Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleLogout}>Logout</Link>
                      </li>
                      
                    </ul>
                  </li>
                ) : (
                  <li className="list-buttons">
                    <Link to="#" onClick={() => setShowAuthPopup(true)}>
                      <i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* End Navigation */}

      <AuthPopup 
        isOpen={showAuthPopup} 
        onClose={() => setShowAuthPopup(false)} 
      />
      {/* Log In Modal */}
      {/* End Modal */}
      {/* Choose Currency Modal */}
      {/* Choose Countries Modal */}
    </>
  );
};

export default Header02;
