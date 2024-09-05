import React from 'react';
import { indian_flag, trainImage } from '../assets/images';
import { NavLink, Link } from 'react-router-dom';

const Header02 = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .nav-menu .active {
            color: #14728a;
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
            background-color: #14728a;
            left: 0;
            bottom: 0;
            transition: width 0.3s ease;
          }

          .dropdown-item:hover::after {
            width: 100%; /* Underline expands fully on hover */
          }
          .dropdown-item:focus,
          .dropdown-item:active {
            background-color: #14728a !important;
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
                <li><NavLink exact to="/" activeClassName="active"><i className="fa-solid fa-train fa-lg me-2" />Train</NavLink></li>
                <li><NavLink to="/home-flight" activeClassName="active"><i className="fa-solid fa-jet-fighter fa-lg me-2" />Flights</NavLink></li>
                <li><NavLink to="/home-hotel" activeClassName="active"><i className="fa-solid fa-spa fa-lg me-2" />Hotels</NavLink></li>
                <li><NavLink to="/home-car" activeClassName="active"><i className="fa-solid fa-car fa-lg me-2" />Cabs</NavLink></li>
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">
                <li className="currencyDropdown me-2">
                  <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                </li>
                <li className="languageDropdown me-2">
                  <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src={indian_flag} className="img-fluid" width={17} alt="Country" /></Link>
                </li>
                {/* <li className="list-buttons">
                  <NavLink to="/login" activeClassName="active"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</NavLink>
                </li> */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle d-flex align-items-center" to="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-circle-user fs-5 me-2" />
                    <span>John Doe</span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                    <li><Link className="dropdown-item" to="/my-profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">Settings</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#">Logout</Link></li>
                  </ul>
                </li>


              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* End Navigation */}
    </>
  );
};

export default Header02;
