import React, { useMemo, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchHotelDetails, clearHotelsGeoList, fetchHotelsGeoList } from '../../store/Actions/hotelActions';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MdLocationOn } from 'react-icons/md';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { DialogContent } from '../ui/dialog';
import { FaMap } from 'react-icons/fa';
import {
  selectHotelsGeoList,
  selectHotelsGeoListLoading,
  selectHotelsGeoListError
} from '../../store/Selectors/hotelSelectors';

// Fix default marker icon issue with Leaflet + Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const HotelList = ({ hotelsList: hotels }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showAllMapModal, setShowAllMapModal] = useState(false);

  const hotelsGeoListLoading = useSelector(selectHotelsGeoListLoading);
  const hotelsGeoList = useSelector(selectHotelsGeoList);
  const hotelsGeoListError = useSelector(selectHotelsGeoListError);

  // Get searched location from localStorage
  const getSearchedLocation = () => {
    try {
      const savedSearchParams = localStorage.getItem("hotelSearchParams");
      if (savedSearchParams) {
        const searchParams = JSON.parse(savedSearchParams);
        return searchParams.selectedCity?.label || searchParams.selectedCity || "Hotels";
      }
    } catch (error) {
      console.error("Error parsing hotel search params:", error);
    }
    return "Hotels";
  };

  // Clear geo list when component unmounts to prevent stale data
  useEffect(() => {
    return () => {
      dispatch(clearHotelsGeoList());
    };
  }, [dispatch]);

  // Filtered hotels based on searchTerm (not searchInput)
  const filteredHotels = useMemo(() => {
    let list = hotels ? hotels : [];
    if (searchTerm.trim() !== "") {
      return list.filter(hotel =>
        hotel.HotelName && hotel.HotelName.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    }
    return list;
  }, [hotels, searchTerm]);

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
    });
  };

  const handleShowMap = (hotel, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedHotel(hotel);
    setShowMapModal(true);
  };

  const handleCloseModal = () => {
    setShowMapModal(false);
    setSelectedHotel(null);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleHotelClick = async (hotel) => {
    const savedSearchParams = localStorage.getItem("hotelSearchParams");
    const params = savedSearchParams ? JSON.parse(savedSearchParams) : {};
    try {
      localStorage.setItem('hotelDetailsParams', JSON.stringify({
        HotelProviderSearchId: hotel.HotelProviderSearchId,
        cityId: params.cityId,
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        Rooms: params.roomsData,
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

  // Handler for map icon button
  const handleShowAllMap = async () => {
    // Get SessionId from localStorage (from hotelSearchParams)
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const SessionId = searchParams.SessionId || searchParams.sessionId || searchParams.SessionID || null;
    if (!SessionId) {
      alert('SessionId not found. Please search for hotels first.');
      return;
    }
    setShowAllMapModal(true);
    await dispatch(fetchHotelsGeoList(SessionId));
  };

  const handleCloseAllMapModal = () => {
    setShowAllMapModal(false);
    // Clear the geo list when modal is closed to prevent stale data
    dispatch(clearHotelsGeoList());
  };

  return (
    <>
      {/* Search Bar */}
      <div className="row mb-3">
        <div className="col-12">
          <form
            className="d-flex align-items-center w-100"
            style={{ maxWidth: '100%' }}
            onSubmit={e => {
              e.preventDefault();
              setSearchTerm(searchInput);
            }}
          >
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search hotel by name..."
                value={searchInput}
                onChange={e => {
                  setSearchInput(e.target.value);
                  setSearchTerm(e.target.value); // live filtering
                }}
                style={{ width: '100%', paddingRight: searchInput ? 36 : undefined }}
              />
              {searchInput && (
                <FaTimes
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: 'red',
                    fontSize: 18,
                    zIndex: 2
                  }}
                  onClick={() => {
                    setSearchInput("");
                    setSearchTerm("");
                  }}
                  title="Clear search"
                />
              )}
            </div>
                                                   <button
                className="btn ms-2"
                type="submit"
                style={{ 
                  minWidth: 100,
                  backgroundColor: '#05264E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                disabled={searchInput.trim() === ""}
              >
                Search
              </button>
            <button
              type="button"
              className="btn ms-2 d-flex align-items-center justify-content-center"
              style={{ background: '#dc3545', color: 'white', minWidth: 30, height: 58, borderRadius: 8, border: 'none' }}
              title="Show all hotels on map"
              onClick={handleShowAllMap}
            >
              <FaMapLocationDot size={35} />
            </button>
          </form>
        </div>
      </div>
      <div className="row align-items-center g-4 mt-2">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, idx) => (
            <div key={hotel.HotelProviderSearchId} className="col-xl-12 col-lg-12 col-12">
              <div className="card list-layout-block rounded-3 p-3" role="button"
                onClick={() => handleHotelClick(hotel)}
                style={{ position: 'relative' }}
              >
                <div className="row">
                  {/* Main Image Column */}
                  <div className="col-xl-4 col-lg-3 col-md">
                    <div className="position-relative h-50">
                      {/* Main Image */}
                      <div className="cardImage__caps rounded-2 overflow-hidden" style={{ height: '11rem' }}>
                        <img
                          className="img-fluid w-100 h-100 object-fit-cover"
                          src={hotel?.HotelImages?.[0] || ''}
                          alt={hotel.HotelName}
                          id={`main-image-${hotel.HotelProviderSearchId}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigateToImages(hotel.HotelProviderSearchId);
                          }}
                        />
                      </div>
                      {/* Thumbnail Gallery */}
                      <div className="d-flex gap-2 mt-2">
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
                                pointerEvents: 'none',
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
                      <div className="d-flex flex-column align-items-start mt-2">
                        <h4 className="fs-5 fw-bold mb-1">{hotel.HotelName}</h4>
                        <div className="d-flex align-items-center mb-1">
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
                          <p className="text-muted-2 text-md">
                            <Link
                              to="#"
                              className="text-primary d-flex align-items-center"
                              onClick={(e) => handleShowMap(hotel, e)}
                            >
                              {/* <FaMapLocationDot style={{ verticalAlign: 'middle', marginRight: 4, marginTop: -2 }} />
                               */}
                              <MdLocationOn style={{ verticalAlign: 'middle', marginRight: 4, marginTop: -2 }} />
                              <span>{hotel.HotelAddress?.HotelLocation}</span>
                            </Link>
                          </p>
                        </li>
                      </ul>
                      <div className="position-relative mt-3">
                        <div className="fw-medium text-dark">
                          {hotel.HotelServices[0]?.Rooms[0]?.RoomName || 'Standard Room'}
                        </div>
                        <div className="text-md text-muted">
                          Check-in: {hotel.CheckInTime} | Check-out: {hotel.CheckOutTime}
                        </div>
                      </div>
                      <div className="position-relative mt-">
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
                        <Link to={`/hotel-bookingpage/${hotel.HotelProviderSearchId}`} className="btn btn-md btn-primary full-width fw-medium px-lg-4">
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

      {/* Map Modal */}
      {showMapModal && selectedHotel && (
        <div
          className="modal fade show d-block map-modal"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleModalBackdropClick}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedHotel.HotelName}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="hotel-address p-3">
                  <p className="text-muted mb-0">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    {selectedHotel.HotelAddress?.Address}, {selectedHotel.HotelAddress?.City}, {selectedHotel.HotelAddress?.Country}
                  </p>
                </div>
                <div className="map-container" style={{ height: '50vh', minHeight: 300, width: '100%' }}>
                  <MapContainer
                    center={[
                      parseFloat(selectedHotel.HotelAddress?.Latitude) || 25.08047,
                      parseFloat(selectedHotel.HotelAddress?.Longitude) || 55.13652
                    ]}
                    zoom={15}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={true}
                    zoomControl={true}
                    dragging={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker
                      position={[
                        parseFloat(selectedHotel.HotelAddress?.Latitude) || 25.08047,
                        parseFloat(selectedHotel.HotelAddress?.Longitude) || 55.13652
                      ]}
                    >
                      <Popup>
                        <div>
                          <h6 className="fw-bold">{selectedHotel.HotelName}</h6>
                          <p className="mb-1">{selectedHotel.HotelAddress?.Address}</p>
                          <p className="mb-0 text-muted">{selectedHotel.HotelAddress?.City}, {selectedHotel.HotelAddress?.Country}</p>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

                           {/* All Hotels Map Modal */}
        {showAllMapModal && (
          <div className="modal fade show d-block" style={{ 
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1055,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            outline: 0
          }}>
                         <div className="modal-dialog modal-xl" style={{
               maxWidth: '70vw',
               width: '50vw',
               maxHeight: '50vh',
               height: '50vh',
               margin: '1rem auto',
               position: 'relative',
               pointerEvents: 'auto',
               outline: 0
             }}>
             <div className="modal-content" style={{
               position: 'relative',
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               height: '95vh',
               backgroundColor: 'var(--bs-body-bg)',
               border: 'var(--bs-modal-border-width) solid var(--bs-modal-border-color)',
               borderRadius: 'var(--bs-modal-border-radius)',
               boxShadow: 'var(--bs-modal-box-shadow)',
               outline: 0
             }}>
               <div className="modal-header" style={{
                 display: 'flex',
                   flexShrink: 0,
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   padding: 'var(--bs-modal-header-padding)',
                   borderBottom: 'var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color)',
                   borderTopLeftRadius: 'var(--bs-modal-inner-border-radius)',
                   borderTopRightRadius: 'var(--bs-modal-inner-border-radius)'
               }}>
                 <h5 className="modal-title" style={{ lineHeight: 'var(--bs-modal-title-line-height)' }}>
                   {getSearchedLocation()} Hotels Map
                 </h5>
                 <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseAllMapModal}></button>
               </div>
                                                             <div className="modal-body" style={{ 
                  flex: '1 1 auto',
                  padding: 'var(--bs-modal-padding)',
                  height: 'calc(70vh - 120px)',
                  overflow: 'hidden'
                }}>
                 {hotelsGeoListLoading && <div>Loading map...</div>}
                 {hotelsGeoListError && <div className="text-danger">{hotelsGeoListError}</div>}
                 {!hotelsGeoListLoading && hotelsGeoList && hotelsGeoList.length > 0 && (
                   <MapContainer
                     center={[
                       parseFloat(hotelsGeoList[0]?.HotelAddress?.Latitude) || 25.08047,
                       parseFloat(hotelsGeoList[0]?.HotelAddress?.Longitude) || 55.13652
                     ]}
                     zoom={13}
                     style={{ height: '100%', width: '100%' }}
                     scrollWheelZoom={true}
                     zoomControl={true}
                     dragging={true}
                   >
                     <TileLayer
                       attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                       url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                     />
                     {hotelsGeoList.map((hotel, idx) => (
                       <Marker
                         key={hotel.HotelProviderSearchId || idx}
                         position={[
                           parseFloat(hotel.HotelAddress?.Latitude) || 25.08047,
                           parseFloat(hotel.HotelAddress?.Longitude) || 55.13652
                         ]}
                       >
                         <Popup>
                           <div>
                             <h6 className="fw-bold">{hotel.HotelName}</h6>
                             <p className="mb-1">{hotel.HotelAddress?.Address}</p>
                             <p className="mb-0 text-muted">{hotel.HotelAddress?.City}, {hotel.HotelAddress?.Country}</p>
                           </div>
                         </Popup>
                       </Marker>
                     ))}
                   </MapContainer>
                 )}
                 {!hotelsGeoListLoading && hotelsGeoList && hotelsGeoList.length === 0 && (
                   <div>No hotel locations found.</div>
                 )}
               </div>
             </div>
           </div>
         </div>
       )}
    </>
  );
};

export default HotelList;