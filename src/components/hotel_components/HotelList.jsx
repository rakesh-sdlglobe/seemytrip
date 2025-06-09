import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Hotel01 } from '../../assets/images';

const HotelList = ({ filters }) => {
  // Mock data - replace with actual API data
  
  const hotels = [
    
  ];

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      // Filter by bed types
      const hasSelectedBedType = Object.entries(filters.bedTypes).some(([type, selected]) => {
        return selected && hotel.bedTypes.includes(type);
      });

      // Filter by popular filters
      const matchesPopularFilters = 
        (!filters.popularFilters.freeCancellation || hotel.hasFreeCancellation) &&
        (!filters.popularFilters.freeBreakfast || hotel.hasBreakfast);

      // Filter by price range
      const isInPriceRange = 
        hotel.discountedPrice >= filters.priceRange[0] &&
        hotel.discountedPrice <= filters.priceRange[1];

      // Filter by customer rating
      const matchesRating = !filters.customerRating || hotel.rating >= filters.customerRating;

      // Filter by amenities
      const matchesAmenities = 
        (!filters.amenities.freeWifi || hotel.amenities.includes("WiFi")) &&
        (!filters.amenities.breakfast || hotel.hasBreakfast) &&
        (!filters.amenities.pool || hotel.hasPool) &&
        (!filters.amenities.parking || hotel.hasParking) &&
        (!filters.amenities.airConditioning || hotel.hasAirConditioning);

      return hasSelectedBedType && matchesPopularFilters && isInPriceRange && matchesRating && matchesAmenities;
    });
  }, [filters, hotels]);

  return (
    <div className="row align-items-center g-4 mt-2">
      {filteredHotels.length > 0 ? (
        filteredHotels.map(hotel => (
          <div key={hotel.id} className="col-xl-12 col-lg-12 col-12">
            <div className="card list-layout-block rounded-3 p-3">
              <div className="row">
                <div className="col-xl-4 col-lg-3 col-md">
                  <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                    <img className="img-fluid h-100 object-fit" src={Hotel01} alt={hotel.name} />
                  </div>
                </div>
                <div className="col-xl col-lg col-md">
                  <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                    <div className="d-flex align-items-center justify-content-start">
                      <div className="d-inline-block">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i} 
                            className={`fa fa-star text-${i < Math.floor(hotel.rating) ? 'warning' : 'muted'} text-xs`} 
                          />
                        ))}
                      </div>
                    </div>
                    <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4>
                    <ul className="row gx-2 p-0 excortio">
                      <li className="col-auto">
                        <p className="text-muted-2 text-md">{hotel.location}</p>
                      </li>
                      <li className="col-auto">
                        <p className="text-muted-2 text-md fw-bold">.</p>
                      </li>
                      <li className="col-auto">
                        <p className="text-muted-2 text-md">{hotel.distance}</p>
                      </li>
                      <li className="col-auto">
                        <p className="text-muted-2 text-md fw-bold">.</p>
                      </li>
                      <li className="col-auto">
                        <p className="text-muted-2 text-md"><Link to="#" className="text-primary">Show on Map</Link></p>
                      </li>
                    </ul>
                    <div className="detail ellipsis-container mt-3">
                      {hotel.amenities.map((amenity, index) => (
                        <span key={index} className="ellipsis">{amenity}</span>
                      ))}
                    </div>
                    <div className="position-relative mt-3">
                      <div className="fw-medium text-dark">{hotel.roomType}</div>
                      <div className="text-md text-muted">Last booked {hotel.lastBooked}</div>
                    </div>
                    <div className="position-relative mt-4">
                      <div className="d-block position-relative">
                        <span className="label bg-light-success text-success">{hotel.cancellation}</span>
                      </div>
                      <div className="text-md">
                        <p className="m-0">
                          <Link to="#" className="text-primary">Login</Link> &amp; get additional $15 Off Using
                          <span className="text-primary">Visa card</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                  <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                    <div className="col-auto text-start text-md-end">
                      <div className="text-md text-dark fw-medium">Exceptional</div>
                      <div className="text-md text-muted-2">{hotel.reviews} reviews</div>
                    </div>
                    <div className="col-auto">
                      <div className="square--40 rounded-2 bg-primary text-light">{hotel.rating}</div>
                    </div>
                  </div>
                  <div className="position-relative mt-auto full-width">
                    <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                      <span className="label bg-success text-light">
                        {Math.round((1 - hotel.discountedPrice / hotel.originalPrice) * 100)}% Off
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                      <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US${hotel.originalPrice}</div>
                      <div className="text-dark fw-bold fs-3">${hotel.discountedPrice}</div>
                    </div>
                    <div className="d-flex align-items-start align-items-md-end justify-content-start justify-content-md-end flex-column mb-2">
                      <div className="text-muted-2 text-sm">+${hotel.taxes} taxes &amp; Fees</div>
                      <div className="text-muted-2 text-sm">For {hotel.nights} Nights</div>
                    </div>
                    <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                      <Link to="/hotel-bookingpage" className="btn btn-md btn-primary full-width fw-medium px-lg-4">
                        See Availability<i className="fa-solid fa-arrow-trend-up ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 text-center mt-5">
          <div className="no-hotel-found-wrapper">
            <i className="fas fa-hotel fa-5x text-muted mb-3"></i>
            <h3 className="text-muted">No Hotels Found</h3>
            <p className="text-muted">Please try adjusting your search filters or check back later for updated results.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelList;