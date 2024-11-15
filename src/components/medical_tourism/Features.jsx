import React from 'react'
import { Link } from 'react-router-dom'

export const Features = () => {
  return (
    <ul className="nav nav-pills primary-soft medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
    {/* <li className="nav-item nav-item1">
      <Link
        className={`nav-link ${activeTab === 'Trains' ? 'active' : ''}`}
        onClick={() => setActiveTab('Trains')}
      >
        <i className="fa-solid fa-train me-2" />Trains
      </Link>
    </li> */}
    <li className="nav-item nav-item1">
      <Link className={`nav-link`} to='/offers'>
        <i className="fa-solid fa-tags me-2" />Offers
      </Link>
    </li>
    <li className="nav-item nav-item1">
      <Link className={`nav-link`} to='/guides'>
        <i className="fa-solid fa-book me-2" />Guides
      </Link>
    </li>
    <li className="nav-item nav-item1">
      <Link className={`nav-link`} to='/selfdrivecars'>
        <i className="fa-solid fa-car me-2" />Self Drive
      </Link>
    </li>

    <li className="nav-item nav-item1 ">
      <Link
        className={`nav-link`} to="/photographers"
      >
        <i className="fa-solid fa-camera me-2" />Photographer
      </Link>
    </li>
    <li className="nav-item nav-item1 ">
      <Link
        className={`nav-link`} to = "/homestaysvillas"
      >
        <i className="fa-solid fa-house-user me-2" />Home Stays & Villas
      </Link>
    </li>
    <li className="nav-item nav-item1 ">
      <Link
        className={`nav-link`} to="/travelinsurance"
      >
        <i className="fa-solid fa-shield-alt me-2" />Travel Insurance
      </Link>
    </li>
    <li className="nav-item nav-item1 ">
      <Link
        className={`nav-link`} to = "/packages"
      >
        <i className="fa-solid fa-suitcase-rolling me-2" />Packages
      </Link>
    </li>
    <li className="nav-item nav-item1 ">
      <Link
        className={`nav-link`} to = "/giftcards"
      >
        <i className="fa-solid fa-gift me-2" />Gift Cards
      </Link>
    </li>

  </ul>
  )
}
