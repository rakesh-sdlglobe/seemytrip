import React, { useEffect } from 'react';
import { indian_flag, trainImage } from '../assets/images';
import { NavLink, Link, useNavigate  } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../store/Actions/authActions';
import { selectName,selectGoogleUser  } from '../store/Selectors/authSelectors';
import { selectPhoneNumber } from '../store/Selectors/mobileSelector'; 
import { selectEmail, statedata } from '../store/Selectors/emailSelector'; 
import { logoutMobileUser } from '../store/Actions/mobileOtpAction';
import { logoutEmailUser } from '../store/Actions/emailAction';
import {ReactComponent as Trainicon} from '../assets/images/Navbaricons/Train.svg'
import {ReactComponent as Flighticon} from '../assets/images/Navbaricons/Flight.svg'
import {ReactComponent as Hotelicon} from '../assets/images/Navbaricons/Hotel.svg'
import {ReactComponent as Cabicon} from '../assets/images/Navbaricons/cab.svg'
import {ReactComponent as Cruiseicon} from '../assets/images/Navbaricons/Cruise.svg'
import {ReactComponent as Busicon} from '../assets/images/Navbaricons/Bus.svg'
import {ReactComponent as Businessicon} from '../assets/images/Navbaricons/Business.svg'
import {ReactComponent as Healthicon} from '../assets/images/Navbaricons/Medical.svg'

const Header02 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectName);
  const googleUser = useSelector(selectGoogleUser);
  const phoneNumber = useSelector(selectPhoneNumber);
  const emailuser = useSelector(selectEmail);
  const statdata = useSelector(statedata)
  const isLoggedIn = Boolean(user || googleUser || phoneNumber|| emailuser);
  const googleUserName = localStorage.googleUser || localStorage.googleUserName?.replace(/["']/g, '')
  
  
  
  
 
  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutMobileUser(navigate));
    dispatch(logoutEmailUser(navigate));
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggedIn, navigate]);

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
                <li className='mt-3'><NavLink exact to="/" activeClassName="active"> <i className="fa-solid fa-train me-2 fa-lg" />Trains</NavLink></li>
                <li className="mt-3"><NavLink to="/home-flight" activeClassName="active"><i className="fa-solid fa-plane me-2 fa-lg" />Flights</NavLink></li>
                <li className='mt-3'><NavLink to="/home-hotel" activeClassName="active"><i className="fa-solid fa-hotel me-2 fa-lg" />Hotels</NavLink></li>
                <li className='mt-3'><NavLink to="/home-car" activeClassName="active"><i className="fa-solid fa-car me-2 fa-lg" />Cabs</NavLink></li>
                <li className="mt-3"><NavLink to="/home-cruise" activeClassName="active"><i className="fa-solid fa-ship me-2 fa-lg" />Cruises</NavLink></li>
                <li className="mt-3"><NavLink to="/home-bus" activeClassName="active"><i className="fa-solid fa-bus me-2 fa-lg" />Buses</NavLink></li>
                <li className="mt-3"><NavLink to="/packages" activeClassName="active"> <i className="fa-solid fa-suitcase-rolling me-2" />Packages</NavLink></li>
                
                {/* <li className="mt-3"><NavLink to="/home-medicaltourism" activeClassName="active"><i className="fa-solid fa-heart-pulse me-2 fa-lg" />Health Tourism</NavLink></li> */}
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
                  <NavLink to="/login" activeClassName="active"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</NavLink>
                </li> */}
                    {isLoggedIn ? (
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle d-flex align-items-center" to="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-regular fa-circle-user fs-5 me-2" />
                      <span>{googleUser?.name || googleUserName || user || (phoneNumber && "Hi, Traveller") || (emailuser && "Hii, Traveller")}</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                      <li>
                        <Link className="dropdown-item" to="/my-profile">Profile</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/support">support</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">Settings</Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleLogout}>Logout</Link>
                      </li>
                      
                    </ul>
                  </li>
                ) : (
                  <li className="list-buttons">
                    <Link to="/login">
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

      {/* Log In Modal */}
      <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
          <div className="modal-content" id="loginmodal">
            <div className="modal-header">
              <h4 className="modal-title fs-6">Sign In / Register</h4>
              <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
            </div>
            <div className="modal-body">
              <div className="modal-login-form py-4 px-md-3 px-0">
                <form>
                  <div className="form-floating mb-4">
                    <input type="email" className="form-control" placeholder="name@example.com" />
                    <label>User Name</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input type="password" className="form-control" placeholder="Password" />
                    <label>Password</label>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                  </div>
                  <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                    <div className="modal-flex-first">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                      </div>
                    </div>
                    <div className="modal-flex-last">
                      <Link to="#" onClick={(e) => { e.preventDefault() }} className="text-primary fw-medium">Forget Password?</Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="prixer px-3">
                <div className="devider-wraps position-relative">
                  <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                </div>
              </div>
              <div className="social-login py-4 px-2">
                <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                  <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="modal-footer align-items-center justify-content-center">
              <p>Don't have an account yet?<Link to="signup.html" className="text-primary fw-medium ms-1">Sign Up</Link></p>
              
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
      {/* Choose Currency Modal */}
      {/* Choose Countries Modal */}
   
      <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
    </>
  );
};

export default Header02;
