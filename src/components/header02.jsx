import React, { useEffect } from 'react';
import { indian_flag, trainImage } from '../assets/images';
import { NavLink, Link, useNavigate  } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../store/Actions/authActions';
import { selectName,selectGoogleUser  } from '../store/Selectors/authSelectors';
import { selectPhoneNumber } from '../store/Selectors/mobileSelector'; 
import { selectEmail } from '../store/Selectors/emailSelector'; 
import { logoutMobileUser } from '../store/Actions/mobileOtpAction';
import { logoutEmailUser } from '../store/Actions/emailAction';

const Header02 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectName);
  const googleUser = useSelector(selectGoogleUser);
  const phoneNumber = useSelector(selectPhoneNumber);
  const emailuser = useSelector(selectEmail);
  const isLoggedIn = Boolean(user || googleUser || phoneNumber|| emailuser);

  console.log(googleUser);
  console.log(isLoggedIn);
  console.log(phoneNumber);
  console.log(emailuser);
  
  
  
 
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
                <li><NavLink exact to="/" activeClassName="active"><i className="fa-solid fa-train fa-lg me-2 mt-3" />Trains</NavLink></li>
                <li><NavLink to="/home-flight" activeClassName="active"><i className="fa-solid fa-jet-fighter fa-lg me-2 mt-3" />Flights</NavLink></li>
                <li><NavLink to="/home-hotel" activeClassName="active"><i className="fa-solid fa-spa fa-lg me-2 mt-3" />Hotels</NavLink></li>
                <li><NavLink to="/home-car" activeClassName="active"><i className="fa-solid fa-car fa-lg me-2 mt-3" />Cabs</NavLink></li>
                <li><NavLink to="/home-cruise" activeClassName="active"><i className="fa-solid fa-ship fa-lg me-2 mt-3" />Cruises</NavLink></li>
                <li><NavLink to="/home-bus" activeClassName="active"><i className="fa-solid fa-bus fa-lg me-2 mt-3" />Buses</NavLink></li>
                <li><NavLink to="/home-businesstourism" activeClassName="active"><i className="fa-solid fa-briefcase fa-lg me-2 mt-3" />Business Tourism</NavLink></li>
                <li><NavLink to="/home-medicaltourism" activeClassName="active"><i className="fa-solid fa-heartbeat fa-lg me-2 mt-3" />Health Tourism</NavLink></li>
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">

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
                      <span>{googleUser?.name || user || (phoneNumber && "Hi, Traveller") || (emailuser && "Hii, Traveller")}</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                      <li>
                        <Link className="dropdown-item" to="/my-profile">Profile</Link>
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
      <div className="modal modal-lg fade" id="currencyModal" tabIndex={-1} aria-labelledby="currenyModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-6" id="currenyModalLabel">Select Your Currency</h4>
              <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
            </div>
            <div className="modal-body">
              <div className="allCurrencylist">
                <div className="suggestedCurrencylist-wrap mb-4">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">United State Dollar</div>
                          <div className="text-muted-2 text-md text-uppercase">USD</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Pound Sterling</div>
                          <div className="text-muted-2 text-md text-uppercase">GBP</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency active" to="#">
                          <div className="text-dark text-md fw-medium">Indian Rupees</div>
                          <div className="text-muted-2 text-md text-uppercase">Inr</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Euro</div>
                          <div className="text-muted-2 text-md text-uppercase">EUR</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Australian Dollar</div>
                          <div className="text-muted-2 text-md text-uppercase">aud</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Thai Baht</div>
                          <div className="text-muted-2 text-md text-uppercase">thb</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="suggestedCurrencylist-wrap">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">All Currencies</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">United State Dollar</div>
                          <div className="text-muted-2 text-md text-uppercase">USD</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Property currency</div>
                          <div className="text-muted-2 text-md text-uppercase">GBP</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Argentine Peso</div>
                          <div className="text-muted-2 text-md text-uppercase">EUR</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                          <div className="text-muted-2 text-md text-uppercase">Inr</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Australian Dollar</div>
                          <div className="text-muted-2 text-md text-uppercase">aud</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                          <div className="text-muted-2 text-md text-uppercase">thb</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Brazilian Real</div>
                          <div className="text-muted-2 text-md text-uppercase">USD</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                          <div className="text-muted-2 text-md text-uppercase">GBP</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                          <div className="text-muted-2 text-md text-uppercase">EUR</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Chilean Peso</div>
                          <div className="text-muted-2 text-md text-uppercase">Inr</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Colombian Peso</div>
                          <div className="text-muted-2 text-md text-uppercase">aud</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Danish Krone</div>
                          <div className="text-muted-2 text-md text-uppercase">thb</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                          <div className="text-muted-2 text-md text-uppercase">USD</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                          <div className="text-muted-2 text-md text-uppercase">GBP</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Japanese Yen</div>
                          <div className="text-muted-2 text-md text-uppercase">EUR</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                          <div className="text-muted-2 text-md text-uppercase">Inr</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                          <div className="text-muted-2 text-md text-uppercase">aud</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                          <div className="text-muted-2 text-md text-uppercase">thb</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCurrency" to="#">
                          <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                          <div className="text-muted-2 text-md text-uppercase">thb</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Choose Countries Modal */}
      <div className="modal modal-lg fade" id="countryModal" tabIndex={-1} aria-labelledby="countryModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
              <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
            </div>
            <div className="modal-body">
              <div className="allCountrieslist">
                <div className="suggestedCurrencylist-wrap mb-4">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">Suggested Countries For you</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry active" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Euro</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="suggestedCurrencylist-wrap">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">All Countries</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                        </Link>
                      </li>
                      <li className="col">
                        <Link className="selectCountry" to="#">
                          <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                          <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
    </>
  );
};

export default Header02;
