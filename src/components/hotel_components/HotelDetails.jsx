// src/pages/HotelDetails.jsx
import React from 'react'
import { useLocation } from 'react-router-dom'

const HotelDetails = () => {
  const { state } = useLocation()
  const { details } = state || {}
  console.log("HotelDetails component loaded with details:", details);
  

  if (!details) return <p>No details to show</p>

  return (
    <div>
      <h1>Hotel Details</h1>
      <p>Hotel Provider Search ID: {details.HotelDetail?.HotelProviderSearchId}</p>
      <p>Hotel Address: {details.HotelDetail?.HotelAddress.Address}</p>
    </div>
  )
}

export default HotelDetails
