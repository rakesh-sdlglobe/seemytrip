import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchHotelsImages } from '../../store/Actions/hotelActions';
import { selectHotelsImages } from '../../store/Selectors/hotelSelectors';

const HotelImages = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [selectedAttribute, setSelectedAttribute] = useState('all');
    const [loading, setLoading] = useState(true);
    

    const HotelProviderSearchId = location.state;
    const hotelImages = useSelector(selectHotelsImages)
    console.log("========> Finally I'm getting images:  ",hotelImages);
    
  // Mock data - replace with actual API call
    useEffect(() => {
        // Simulate API call
        dispatch(fetchHotelsImages(HotelProviderSearchId))
    }, [dispatch,HotelProviderSearchId]);

  // Group images by attributes
  const groupedImages = {
    all: hotel?.HotelImages || [],
    exterior: hotel?.HotelImages?.filter(img => img.includes('exterior')) || [],
    interior: hotel?.HotelImages?.filter(img => img.includes('interior')) || [],
    room: hotel?.HotelImages?.filter(img => img.includes('room')) || [],
    amenities: hotel?.HotelImages?.filter(img => img.includes('amenity')) || [],
  };

  const attributes = [
    { id: 'all', label: 'All Images' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'room', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
  ];

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="container mt-5 text-center">
        <h3>Hotel not found</h3>
        <button 
          className="btn btn-primary mt-3"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">{hotel.HotelName}</h2>
        <button 
          className="btn btn-outline-primary"
          onClick={() => navigate(-1)}
        >
          <i className="fas fa-arrow-left me-2"></i>
          Back to Hotel
        </button>
      </div>

      {/* Attribute Navigation */}
      <div className="mb-4">
        <div className="nav nav-pills">
          {attributes.map(attr => (
            <button
              key={attr.id}
              className={`nav-link ${selectedAttribute === attr.id ? 'active' : ''}`}
              onClick={() => setSelectedAttribute(attr.id)}
            >
              {attr.label}
              <span className="badge bg-secondary ms-2">
                {groupedImages[attr.id].length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="row g-4">
        {groupedImages[selectedAttribute].map((image, index) => (
          <div key={index} className="col-md-4 col-lg-3">
            <div className="card h-100">
              <img
                src={image}
                className="card-img-top"
                alt={`${hotel.HotelName} - Image ${index + 1}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text text-muted small">
                  Image {index + 1} of {groupedImages[selectedAttribute].length}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Images Message */}
      {groupedImages[selectedAttribute].length === 0 && (
        <div className="text-center mt-5">
          <i className="fas fa-images fa-3x text-muted mb-3"></i>
          <h4>No images available for this category</h4>
          <p className="text-muted">Please select a different category or check back later.</p>
        </div>
      )}
    </div>
  );
};

export default HotelImages; 