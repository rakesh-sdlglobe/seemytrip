import '../assets/css/bootstrap.min.css';
import '../assets/css/animation.css';
import '../assets/css/dropzone.min.css';
import '../assets/css/flatpickr.min.css';
import '../assets/css/flickity.min.css';
import '../assets/css/lightbox.min.css';
import '../assets/css/magnifypopup.css';
import '../assets/css/select2.min.css';
import '../assets/css/rangeSlider.min.css';
import '../assets/css/prism.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/fontawesome.css';
import '../assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { trainImage, indian_flag } from '../assets/images';
import { Link } from 'react-router-dom';

const Header = () => {
    const isLoggedIn = false;
    const userName = "";
    return (
        // Start Navigation
        <div className="header header-light">
            <style>
                {`
            /* Style for the main menu indicator (caret) */
            .submenu-indicator {
                margin-left: 8px;
                display: inline-block;
                border: solid #333;
                border-width: 0 1px 1px 0;
                padding: 2.5px;
                transform: rotate(45deg);
                transition: transform 0.6s ease; /* Increased duration for smoother transition */
            }

            /* Rotate the indicator for main menu on hover */
            .nav-menu > li:hover > a > .submenu-indicator {
                transform: rotate(-135deg);
                transition: transform 0.6s ease; /* Apply the same transition to the hover state */
            }

            /* Rotate the indicator for submenu on hover */
            .nav-submenu > li:hover > a > .submenu-indicator {
                transform: rotate(-135deg);
                transition: transform 0.6s ease; /* Apply the same transition to the hover state */
            }
            
            /* Additional dropdown styles */
            .nav-dropdown {
                display: none;
                position: absolute;
                background: #fff;
                z-index: 1000;
                list-style: none;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                transition: opacity 0.3s ease; /* Add transition for dropdown visibility */
                opacity: 0; /* Initially hidden */
                top: 100%; /* Position it below the parent */
                left: 0; /* Align it to the left of the parent */
            }

            .nav-menu > li:hover > .nav-dropdown,
            .nav-dropdown > li:hover > .nav-submenu {
                display: block;
                opacity: 1; /* Show the dropdown with opacity transition */
            }

            /* Positioning for the submenu */
            .nav-submenu {
                display: none;
                position: absolute;
                background: #fff;
                z-index: 1001;
                list-style: none;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                top: 0; /* Position submenu at the top of the parent */
                left: 100%; /* Position it to the right of the parent */
                margin-left: 0; /* Remove any extra margin */
                transition: opacity 0.3s ease; /* Add transition for visibility */
                opacity: 0; /* Initially hidden */
            }

            .nav-dropdown > li:hover > .nav-submenu {
                display: block;
                opacity: 1; /* Show the submenu with opacity transition */
            }

            /* Style for dropdown items */
            .nav-dropdown a, .nav-submenu a {
                display: block;
                padding: 10px 20px;
                color: #333;
                text-decoration: none;
            }

            /* Change color on hover */
            .nav-dropdown a:hover, .nav-submenu a:hover {
                background-color: #f8f8f8;
                // color: #007bff;
            }

            /* Add some padding to the parent li elements */
            .nav-menu > li {
                position: relative;
                padding: 0 10px;
            }
        `}
            </style>


            <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                    <div className="nav-header">
                        <Link to="/" className="nav-brand" ><img src={trainImage} className="logo" alt="" /></Link>
                        <div className="nav-toggle" />
                        <div className="mobile_nav">
                            <ul>
                                <li className="currencyDropdown me-2">
                                    <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                                </li>
                                <li className="languageDropdown me-2">
                                    <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src={indian_flag} className="img-fluid" width={17} alt="Country" /></Link>
                                </li>
                                <li>
                                    <Link to="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
                        <ul className="nav-menu">
                            {/* <li><Link to="#" onClick={(e) => e.preventDefault()}>Home<span className="submenu-indicator" /></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li>
                                        <Link to="/">Home version 01</Link>
                                    </li>
                                    <li>
                                        <Link to="/home2">Home version 02</Link>
                                    </li>
                                    <li>
                                        <Link to="/home3">Home version 03</Link>
                                    </li>
                                    <li>
                                        <Link to="home4">Home version 04</Link>
                                    </li>
                                    <li>
                                        <Link to="home5">Home version 05</Link>
                                    </li>
                                    <li>
                                        <Link to="/sliderhome">Home version 06</Link>
                                    </li>
                                </ul>
                            </li> */}
                            <li><Link to="#" onClick={(e) => e.preventDefault()}>Listing<span className="submenu-indicator" /></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Hotel<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/hotel-list-01">Hotel list 01</Link></li>
                                            <li><Link to="/hotel-list-02">Hotel list 02</Link></li>
                                            <li><Link to="/hotel-list-03">Hotel list 03</Link></li>
                                            <li><Link to="/hotel-detail-01">Hotel Detail 01</Link></li>
                                            <li><Link to="/hotel-detail-02">Hotel Detail 02</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Flight<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/flight-list-01">Flight List 01</Link></li>
                                            <li><Link to="/flight-list-02">Flight List 02</Link></li>
                                            <li><Link to="/flight-detail">Flight Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Rental<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/rental-list-01">Rental List 01</Link></li>
                                            <li><Link to="/rental-list-02">Rental List 02</Link></li>
                                            <li><Link to="/rental-list-03">Rental List 03</Link></li>
                                            <li><Link to="/rental-detail">Rental Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Car<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/car-list-01">Car List 01</Link></li>
                                            <li><Link to="/car-list-02">Car List 02</Link></li>
                                            <li><Link to="/car-list-03">Car List 03</Link></li>
                                            <li><Link to="/car-detail">Car Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Destination<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/destination-list-01">Destination List 01</Link></li>
                                            <li><Link to="/destination-list-02">Destination List 02</Link></li>
                                            <li><Link to="/destination-list-03">Destination List 03</Link></li>
                                            <li><Link to="/destination-detail">Destination Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/join-us">Join with GeoTrip</Link></li>
                                    <li><Link to="/add-listing">Add Listing</Link></li>
                                    <li><Link to="/compare-listing">Compare Listing</Link></li>
                                    <li><Link to="/booking-page">Booking Page</Link></li>
                                    <li><Link to="/my-profile">User Dashboard</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}>Pages<span className="submenu-indicator" /></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Blog<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/classic-blog">Classic Blog</Link></li>
                                            <li><Link to="/blog-grid">Blog Grid Style</Link></li>
                                            <li><Link to="/single-blog">Single Blog</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Authentication<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/sign-in">Sign In</Link></li>
                                            <li><Link to="/sign-up">Sign Up</Link></li>
                                            <li><Link to="/forgot-password">Forgot Password</Link></li>
                                            <li><Link to="/two-factor-auth">Two-Factor Authentication</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/career-page">Career Page</Link></li>
                                    <li><Link to="/help-center">Help Center</Link></li>
                                    <li><Link to="/faq">FAQ's</Link></li>
                                    <li><Link to="/error-page">Error Page</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Contact Us<span className="submenu-indicator" /></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><Link to="/contact-v1">Contact V.01</Link></li>
                                            <li><Link to="/contact-v2">Contact V0.2</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}>Menu<span className="submenu-indicator" /></Link>
                                <ul className="nav-dropdown nav-submenu xxl-menu">
                                    <li>
                                        <Link to="/home-stay">
                                            <div className="mega-advance-menu">
                                                <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4"><i className="fa-solid fa-spa" /></div>
                                                <div className="mega-last ps-2">
                                                    <h6 className="lh-base fs-6 font--bold m-0">Home Stays</h6>
                                                    <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/home-hotel">
                                            <div className="mega-advance-menu">
                                                <div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i className="fa-solid fa-hotel" /></div>
                                                <div className="mega-last ps-2">
                                                    <h6 className="lh-base fs-6 font--bold m-0">Home Hotel</h6>
                                                    <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/home-flight">
                                            <div className="mega-advance-menu">
                                                <div className="mega-first square--50 rounded-2 gray-simple text-primary fs-4"><i className="fa-solid fa-plane" /></div>
                                                <div className="mega-last ps-2">
                                                    <h6 className="lh-base fs-6 font--bold m-0">Home Flight</h6>
                                                    <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/home-rental">
                                            <div className="mega-advance-menu">
                                                <div className="mega-first square--50 rounded-2 gray-simple text-purple fs-4"><i className="fa-solid fa-eye" /></div>
                                                <div className="mega-last ps-2">
                                                    <h6 className="lh-base fs-6 font--bold m-0">Home Rental</h6>
                                                    <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/home-car">
                                            <div className="mega-advance-menu">
                                                <div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i className="fa-brands fa-dropbox" /></div>
                                                <div className="mega-last ps-2">
                                                    <h6 className="lh-base fs-6 font--bold m-0">Home Cabs</h6>
                                                    <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/home-destination">
                                            <div className="mega-advance-menu">
                                                <div className="mega-first square--50 rounded-2 gray-simple text-info fs-4"><i className="fa-solid fa-person-walking-luggage" /></div>
                                                <div className="mega-last ps-2">
                                                    <h6 className="lh-base fs-6 font--bold m-0">Home Destination</h6>
                                                    <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="../documantion/index.html" target="_blank">Docs</Link></li>
                        </ul>
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="currencyDropdown me-2">
                                <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                            </li>
                            <li className="languageDropdown me-2">
                                <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src={indian_flag} className="img-fluid" width={17} alt="Country" /></Link>
                            </li>
                            <li className="list-buttons">
                                {/* <Link to="#" className data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</Link> */}
                                {isLoggedIn ? (
                                    <div className="user-profile">
                                        <i className="fa-regular fa-circle-user fs-6 me-2" />
                                        <span>{userName}</span>
                                    </div>
                                ) : <Link to="/login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        // End Navigation
    );
};

export default Header;
