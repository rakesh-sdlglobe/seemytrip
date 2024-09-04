import React from 'react';
import { indian_flag, trainImage } from '../assets/images';
import { NavLink } from 'react-router-dom';

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
                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                  </li>
                  <li className="languageDropdown me-2">
                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                  </li>
                  <li>
                    <a href="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></a>
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
                  <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                </li>
                <li className="languageDropdown me-2">
                  <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src={indian_flag} className="img-fluid" width={17} alt="Country" /></a>
                </li>
                <li className="list-buttons">
                  <NavLink to="/login" activeClassName="active"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</NavLink>
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
