import React, { useEffect, useState, useCallback } from 'react';
import { trainImage } from '../assets/images';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/Actions/authActions';
import { selectPhoneNumber } from '../store/Selectors/mobileSelector';
import { selectEmailUser, selectEmailUserName, statedata } from '../store/Selectors/emailSelector';
import { logoutMobileUser } from '../store/Actions/mobileOtpAction';
import { logoutEmailUser } from '../store/Actions/emailAction';
import AuthPopup from './auth/AuthPopup';
import { selectGoogleUser, selectGoogleUserName } from '../store/Selectors/authSelectors';

const Header02 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const emailUserName = useSelector(selectEmailUserName) || "Traveller";
  const googleUserName = useSelector(selectGoogleUserName);
  const emailuser = useSelector(selectEmailUser);
  const googleUser = useSelector(selectGoogleUser);
  const phoneNumber = useSelector(selectPhoneNumber);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const stateData = useSelector(statedata) ;

  // Memoize the logged in state
  const isLoggedIn = Boolean(googleUser || phoneNumber || emailuser);
  console.log("========> ", googleUser, phoneNumber, emailuser, isLoggedIn);
  console.log("stateData", stateData);
  
  // Replace all direct property access with getItem/setItem/removeItem
  const handleLogout = useCallback(async () => {
    try {
      // Clear all auth states
      await Promise.allSettled([
        dispatch(logout()),
        dispatch(logoutMobileUser(navigate)),
        dispatch(logoutEmailUser(navigate))
      ]);

      // Clear localStorage
      ['authToken', 'googleUser', 'googleUserName'].forEach(key => {
        localStorage.removeItem(key);
      });

      // Navigate to home after state updates
      navigate('/', { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      window.location.href = '/'; // Fallback
    }
  }, [dispatch, navigate]);

  // Auto-logout effect
  // useEffect(() => {
  //   const authToken = localStorage.getItem('authToken');
  //   if (!authToken && !isLoggedIn) {
  //     console.log("From 53 header02 file, foing to logout ", isLoggedIn, authToken);
  //     dispatch(logout());
  //     // localStorage.removeItem('authToken');
  //     window.location.reload();
  //   }
  // }, []);

  // Navigation items data
  const navItems = [
    { to: "/", icon: "fa-solid fa-train", text: "Trains" },
    { to: "/home-flight", icon: "fa-solid fa-plane", text: "Flights" },
    { to: "/home-hotel", icon: "fa-solid fa-hotel", text: "Hotels" },
    { to: "/home-car", icon: "fa-solid fa-car", text: "Cabs" },
    { to: "/home-cruise", icon: "fa-solid fa-ship", text: "Cruises" },
    { to: "/home-bus", icon: "fa-solid fa-bus", text: "Buses" },
    { to: "/packages", icon: "fa-solid fa-suitcase-rolling", text: "Packages" },
  ];

  // User dropdown items
  const userMenuItems = [
    { to: "/my-profile", text: "Profile" },
    { to: "/support", text: "Support" },
    { to: "/settings", text: "Settings" },
  ];

  // Get display name for logged in user
  const getUserDisplayName = () => {
    return `Hi, ${emailUserName}` || ` Hi, ${googleUserName}` || 
           (phoneNumber && "Hi, Traveller") || 
           (emailuser && "Hii, Traveller");
  };

  return (
    <>
      <style>
        {`
          .nav-menu .active {
            color: #cd2c22;
            font-weight: bold;
          }
          .dropdown-item {
            padding: 10px 20px;
            transition: all 0.3s ease;
          }
          .dropdown-item:hover {
            color: #14728a;
            transform: scale(1.05);
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
            width: 100%;
          }
          .dropdown-item:focus,
          .dropdown-item:active {
            background-color: #cd2c22 !important;
            color: inherit;
            outline: none;
          }
        `}
      </style>

      <div className="header header-light">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <NavLink to="/" className="nav-brand">
                <img src={trainImage} className="logo" alt="Logo" />
              </NavLink>
              <div className="nav-toggle" />
              <div className="mobile_nav">
                <ul>
                  <li className="currencyDropdown me-2">
                    <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal">
                      <span className="fw-medium">INR</span>
                    </Link>
                  </li>
                  <li className="languageDropdown me-2">
                    <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                      <img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login">
                      <i className="fa-regular fa-circle-user fs-6" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
              <ul className="nav-menu">
                {navItems.map((item, index) => (
                  <li key={index} className="mt-3">
                    <NavLink to={item.to}>
                      <i className={`${item.icon} me-2 fa-lg`} />
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right mt-3">
                {isLoggedIn ? (
                  <li className="nav-item dropdown">
                    <Link 
                      className="nav-link dropdown-toggle d-flex align-items-center" 
                      to="#" 
                      id="userDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-user fs-5 me-2" />
                      <span>{getUserDisplayName()}</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                      {userMenuItems.map((menuItem, index) => (
                        <li key={index}>
                          <Link className="dropdown-item" to={menuItem.to}>
                            {menuItem.text}
                          </Link>
                        </li>
                      ))}
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="list-buttons">
                    <Link to="#" onClick={() => setShowAuthPopup(true)}>
                      <i className="fa-regular fa-circle-user fs-6 me-2" />
                      Sign In / Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <AuthPopup 
        isOpen={showAuthPopup} 
        onClose={() => setShowAuthPopup(false)} 
      />
    </>
  );
};

export default React.memo(Header02);