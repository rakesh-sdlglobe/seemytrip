import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchHotelDetails } from '../../store/Actions/hotelActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const HotelList = ({  hotelsList: hotels }) => {

  console.log("Hotels list need to display ======> ", hotels);
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const filteredHotels = useMemo(() => {
    return  hotels ? hotels : [];
  }, [hotels]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const handleNavigateToImages = (HotelProviderSearchId) => {
    navigate('/hotel-images', {
      state: {
        HotelProviderSearchId
      }
    })
  }

  const handleHotelClick = async (hotel) => {
  const savedSearchParams = localStorage.getItem("hotelSearchParams");
  const params = savedSearchParams ? JSON.parse(savedSearchParams) : {};
  console.log("Params of detail page: ", params);

  try {
    // const data = dispatch(fetchHotelDetails(hotel.HotelProviderSearchId, {
    //   cityId: params.cityId,
    //   checkInDate: params.checkInDate,
    //   checkOutDate: params.checkOutDate,
    //   Rooms: params.Rooms,
    //   adults: params.adults,
    //   children: params.children
    // }));

    //console.log("Hotel details fetched successfully:", data);
// Store in localStorage to trigger the search in HotelSearchResult
  localStorage.setItem('hotelDetailsParams', JSON.stringify({
        HotelProviderSearchId: hotel.HotelProviderSearchId,
        cityId: params.cityId,
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        Rooms: params.Rooms,
        adults: params.adults,
        children: params.children
      }));
    navigate('/hotel-details', {
      state: {
        HotelProviderSearchId: hotel.HotelProviderSearchId,
        cityId: params.cityId,
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        Rooms: params.Rooms,
        adults: params.adults,
        children: params.children
      }
    });
  } catch (err) {
    console.error('Could not fetch hotel details:', err);
  }
};

  return (
    <div className="row align-items-center g-4 mt-2">
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel, idx) => {
          const isLast = idx === filteredHotels.length - 1;
          return (
            <div key={hotel.HotelProviderSearchId} className="col-xl-12 col-lg-12 col-12">
              <div className="card list-layout-block rounded-3 p-3" role="button"
                
                style={{ position: 'relative' }}
              >
                <div className="row">
                  {/* Main Image Column */}
                  <div className="col-xl-4 col-lg-3 col-md">
                    <div className="position-relative h-50">
                      {/* Main Image */}
                      <div className="cardImage__caps rounded-2 overflow-hidden" style={{ height: '11rem' }}> {/* Fixed height */}
                        <img
                          className="img-fluid w-100 h-100 object-fit-cover"
                          src={hotel?.HotelImages?.[0] || ''}
                          alt={hotel.HotelName}
                          id={`main-image-${hotel.HotelProviderSearchId}`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click
                            handleNavigateToImages(hotel.HotelProviderSearchId);
                          }}
                          // Remove any blur from the main image
                        />
                      </div>

                      {/* Thumbnail Gallery */}
                      <div className="d-flex gap-2 mt-2">
                        {/* Show up to 3 thumbnails */}
                        {hotel?.HotelImages?.slice(1, 4).map((img, index) => (
                          <div
                            key={index}
                            className="position-relative rounded overflow-hidden flex-grow-1"
                            onMouseEnter={() => {
                              document.getElementById(`main-image-${hotel.HotelProviderSearchId}`).src = img;
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigateToImages(hotel.HotelProviderSearchId);
                            }}
                            style={{ cursor: 'pointer', height: '3rem', width: '3rem' }}
                          >
                            <img
                              className="img-fluid h-100 w-100 object-fit-cover"
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                            />
                          </div>
                        ))}

                        {/* If there are more than 4 images, show the 4th as blurred with overlay */}
                        {hotel?.HotelImages?.length > 4 && (
                          <div
                            className="position-relative rounded overflow-hidden flex-grow-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigateToImages(hotel.HotelProviderSearchId);
                            }}
                            style={{
                              cursor: 'pointer',
                              height: '3rem',
                              width: '3rem',
                            }}
                          >
                            <img
                              className="img-fluid h-100 w-100 object-fit-cover"
                              src={hotel.HotelImages[4]}
                              alt="View All"
                              style={{ filter: 'blur(2px)' }}
                            />
                            <div
                              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                              style={{
                                background: 'rgba(0,0,0,0.4)',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.7rem',
                                left: 0,
                                top: 0,
                                textAlign: 'center',
                                pointerEvents: 'none', // So the overlay doesn't block clicks
                              }}
                            >
                              View All
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl col-lg col-md">
                    <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                      <div className="d-flex gap-3 align-items-center mt-2">
                        <h4 className="fs-5 fw-bold mb-1">{hotel.HotelName}</h4>
                        <div className="d-flex align-items-center">
                          <div className="d-inline-block me-2">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`fa fa-star text-${i < Math.floor(parseFloat(hotel.StarRating)) ? 'warning' : 'muted'} text-xs`}
                              />
                            ))}
                          </div>
                          <span className="text-muted text-sm">
                            ({parseFloat(hotel.StarRating).toFixed(1)})
                          </span>
                        </div>
                      </div>
                      <ul className="row gx-2 p-0 excortio">
                        <li className="col-auto">
                          <p className="text-muted-2 text-md">{hotel.HotelAddress?.City}, {hotel.HotelAddress?.Country}</p>
                        </li>
                        <li className="col-auto">
                          <p className="text-muted-2 text-md fw-bold">.</p>
                        </li>
                        <li className="col-auto">
                          <p className="text-muted-2 text-md">{hotel.HotelAddress?.HotelLocation}</p>
                        </li>
                        <li className="col-auto">
                          <p className="text-muted-2 text-md fw-bold">.</p>
                        </li>
                        <li className="col-auto">
                          <p className="text-muted-2 text-md">
                            <Link to="#" className="text-primary">Show on Map</Link>
                          </p>
                        </li>
                      </ul>
                      {/* <div className="detail ellipsis-container mt-3">
                        {hotel.Amenities?.filter(amenity => amenity.Important).map((amenity, index) => (
                          <span key={index} className="ellipsis me-2">
                            <i className={`fa fa-${amenity.Icon || 'check'} me-1`}></i>
                            {amenity.Description}
                          </span>
                        ))}
                      </div> */}
                      <div className="position-relative mt-3">
                        <div className="fw-medium text-dark">
                          {hotel.HotelServices[0]?.Rooms[0]?.RoomName || 'Standard Room'}
                        </div>
                        <div className="text-md text-muted">
                          Check-in: {hotel.CheckInTime} | Check-out: {hotel.CheckOutTime}
                        </div>
                      </div>
                      <div className="position-relative mt-4">
                        <div className="d-block position-relative">
                          <span className="label bg-light-success text-success">
                            {hotel.HotelServices[0]?.RefundableText || 'Free Cancellation'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                    <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                      <div className="col-auto text-start text-md-end">
                        <div className="text-md text-dark fw-medium">
                          {hotel.TripAdvisorDetail?.RecommendedText || 'Excellent'}
                        </div>
                        <div className="text-md text-muted-2">
                          {hotel.TripAdvisorDetail?.ReviewCount || 0} reviews
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="square--40 rounded-2 bg-primary text-light">
                          {hotel.StarRating}
                        </div>
                      </div>
                    </div>
                    <div className="position-relative mt-auto full-width">
                      <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                        {hotel.HotelServices[0]?.ServicePriceBeforePromotion > hotel.HotelServices[0]?.ServicePrice && (
                          <span className="label bg-success text-light">
                            {Math.round((1 - hotel.HotelServices[0].ServicePrice / hotel.HotelServices[0].ServicePriceBeforePromotion) * 100)}% Off
                          </span>
                        )}
                      </div>
                      <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                        {hotel.HotelServices[0]?.ServicePriceBeforePromotion > 0 && (
                          <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                            {formatPrice(hotel.HotelServices[0].ServicePriceBeforePromotion)}
                          </div>
                        )}
                        <div className="text-dark fw-bold fs-3">
                          {formatPrice(hotel.HotelServices[0]?.ServicePrice || 0)}
                        </div>
                      </div>
                      <div className="d-flex align-items-start align-items-md-end justify-content-start justify-content-md-end flex-column mb-2">
                        <div className="text-muted-2 text-sm">
                          +{formatPrice(hotel.HotelServices[0]?.Charges || 0)} taxes & fees
                        </div>
                      </div>
                      <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                        <span onClick={() => handleHotelClick(hotel)} className="btn btn-md btn-primary full-width fw-medium px-lg-4">
                          See Availability<i className="fa-solid fa-arrow-trend-up ms-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
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