import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserBusBookings } from '../store/Selectors/busSelectors';
import { selectUserInsuranceBookingsData } from '../store/Selectors/insuranceSelectors';
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
import Header02 from './header02';
import Footer from './footer';
import TopHeader from './topHeader';
import SideBarProfilePage from './sidebar_profilepage';
import MyBusBookingComponent from './bus_components/My_Bus_Booking_Profile/My_Bus_Booking';
import { getUserProfile } from '../store/Actions/userActions';
import MyInsuranceBookingComponent from './insurance_components/My_insurance_Booking_Profile/My_Insurance_Booking';

const MyBooking = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('bus'); // 'bus' or 'insurance'
  const dispatch = useDispatch();
  const userBusBookings = useSelector(selectUserBusBookings);
  const userInsuranceBookingsData = useSelector(selectUserInsuranceBookingsData);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  // Extract insurance bookings array from response data
  const userInsuranceBookings = useMemo(() => {
    if (!userInsuranceBookingsData) return [];
    if (Array.isArray(userInsuranceBookingsData.bookings)) {
      return userInsuranceBookingsData.bookings;
    }
    if (Array.isArray(userInsuranceBookingsData)) {
      return userInsuranceBookingsData;
    }
    return [];
  }, [userInsuranceBookingsData]);

  // Determine trip status for a bus booking
  const getBusTripStatus = (booking) => {
    const isCancelled = booking?.booking_status === 'Cancelled' || 
                       booking?.booking_status === 'cancelled';
    
    if (isCancelled) {
      return 'cancelled';
    }

    const departureDateString = booking.departure_time || booking.boarding_point_time || booking.journey_date;
    
    if (!departureDateString) {
      return 'completed';
    }

    try {
      const departureDate = new Date(departureDateString);
      const today = new Date();
      
      today.setHours(0, 0, 0, 0);
      departureDate.setHours(0, 0, 0, 0);
      
      if (isNaN(departureDate.getTime())) {
        return 'completed';
      }

      if (departureDate > today) {
        return 'upcoming';
      } else {
        return 'completed';
      }
    } catch (error) {
      return 'completed';
    }
  };

  // Determine trip status for an insurance booking
  const getInsuranceTripStatus = (booking) => {
    const isCancelled = booking?.booking_status === 'Cancelled' || 
                       booking?.booking_status === 'cancelled';
    
    if (isCancelled) {
      return 'cancelled';
    }

    const travelStartDate = booking.travel_start_date || booking.travelStartDate || booking.start_date;
    const travelEndDate = booking.travel_end_date || booking.travelEndDate || booking.end_date;
    
    if (!travelStartDate) {
      return 'completed';
    }

    try {
      const startDate = new Date(travelStartDate);
      const today = new Date();
      
      today.setHours(0, 0, 0, 0);
      startDate.setHours(0, 0, 0, 0);
      
      if (isNaN(startDate.getTime())) {
        return 'completed';
      }

      if (startDate > today) {
        return 'upcoming';
      } else {
        if (travelEndDate) {
          const endDate = new Date(travelEndDate);
          endDate.setHours(0, 0, 0, 0);
          if (endDate < today) {
            return 'completed';
          }
        }
        return 'completed';
      }
    } catch (error) {
      return 'completed';
    }
  };

  // Calculate counts for bus bookings
  const busTabCounts = useMemo(() => {
    if (!userBusBookings || userBusBookings.length === 0) {
      return { all: 0, upcoming: 0, cancelled: 0, completed: 0 };
    }

    const counts = {
      all: userBusBookings.length,
      upcoming: 0,
      cancelled: 0,
      completed: 0
    };

    userBusBookings.forEach(booking => {
      const status = getBusTripStatus(booking);
      if (status === 'upcoming') counts.upcoming++;
      else if (status === 'cancelled') counts.cancelled++;
      else if (status === 'completed') counts.completed++;
    });

    return counts;
  }, [userBusBookings]);

  // Calculate counts for insurance bookings
  const insuranceTabCounts = useMemo(() => {
    if (!userInsuranceBookings || userInsuranceBookings.length === 0) {
      return { all: 0, upcoming: 0, cancelled: 0, completed: 0 };
    }

    const counts = {
      all: userInsuranceBookings.length,
      upcoming: 0,
      cancelled: 0,
      completed: 0
    };

    userInsuranceBookings.forEach(booking => {
      const status = getInsuranceTripStatus(booking);
      if (status === 'upcoming') counts.upcoming++;
      else if (status === 'cancelled') counts.cancelled++;
      else if (status === 'completed') counts.completed++;
    });

    return counts;
  }, [userInsuranceBookings]);

  // Get current tab counts based on active tab
  const currentTabCounts = activeTab === 'bus' ? busTabCounts : insuranceTabCounts;

  return (
    <div>
      <style>
        {`
        .btn-light-seegreen {
          color: #28a745;
        }
        .btn-light-seegreen:hover {
          background-color: #28a745 !important;
          color: #ffffff;
        }
        .booking-tabs .btn-check:checked + label {
          background-color: #28a745;
          color: #ffffff;
          border-color: #28a745;
        }
        .booking-type-tabs {
          border-bottom: 2px solid #e9ecef;
          margin-bottom: 1.5rem;
        }
        .booking-type-tabs .nav-link {
          color: #6c757d;
          border: none;
          border-bottom: 3px solid transparent;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
        }
        .booking-type-tabs .nav-link.active {
          color: #28a745;
          border-bottom-color: #28a745;
          background-color: transparent;
        }
        .booking-type-tabs .nav-link:hover {
          color: #28a745;
          border-bottom-color: #28a745;
        }
        `}
      </style>
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        <TopHeader />
        <section className="pt-5 gray-simple position-relative">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                <button 
                  className="btn btn-dark fw-medium full-width d-block d-lg-none" 
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasDashboard" 
                  aria-controls="offcanvasDashboard"
                >
                  <i className="fa-solid fa-gauge me-2" />Dashboard Navigation
                </button>
                <div 
                  className="offcanvas offcanvas-start" 
                  data-bs-scroll="true" 
                  data-bs-backdrop="false" 
                  tabIndex={-1} 
                  id="offcanvasDashboard" 
                  aria-labelledby="offcanvasScrollingLabel"
                >
                  <div className="offcanvas-header gray-simple">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <TopHeader />
                </div>
              </div>
            </div>
            <div className="row align-items-start justify-content-between gx-xl-4">
              <SideBarProfilePage />
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4><i className="fa-solid fa-ticket me-2" />My Bookings</h4>
                  </div>
                  <div className="card-body">
                    {/* Booking Type Tabs (Bus/Insurance) */}
                    <ul className="nav booking-type-tabs mb-4" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'bus' ? 'active' : ''}`}
                          onClick={() => setActiveTab('bus')}
                          type="button"
                        >
                          <i className="fa-solid fa-bus me-2" />
                          Bus Bookings
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 'insurance' ? 'active' : ''}`}
                          onClick={() => setActiveTab('insurance')}
                          type="button"
                        >
                          <i className="fa-solid fa-shield-halved me-2" />
                          Insurance Bookings
                        </button>
                      </li>
                    </ul>

                    {/* Filter Tabs */}
                    <div className="row align-items-center justify-content-start">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 booking-tabs">
                          <li className="col-md-3 col-6">
                            <input 
                              type="radio" 
                              className="btn-check" 
                              id="allbkk" 
                              checked={activeFilter === 'all'}
                              onChange={() => setActiveFilter('all')}
                              name="bookingFilter"
                            />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="allbkk">
                              All Booking ({currentTabCounts.all})
                            </label>
                          </li>
                          <li className="col-md-3 col-6">
                            <input 
                              type="radio" 
                              className="btn-check" 
                              id="upcoming"
                              checked={activeFilter === 'upcoming'}
                              onChange={() => setActiveFilter('upcoming')}
                              name="bookingFilter"
                            />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="upcoming">
                              Upcoming ({currentTabCounts.upcoming})
                            </label>
                          </li>
                          <li className="col-md-3 col-6">
                            <input 
                              type="radio" 
                              className="btn-check" 
                              id="cancelled" 
                              checked={activeFilter === 'cancelled'}
                              onChange={() => setActiveFilter('cancelled')}
                              name="bookingFilter"
                            />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="cancelled">
                              Cancelled ({currentTabCounts.cancelled})
                            </label>
                          </li>
                          <li className="col-md-3 col-6">
                            <input 
                              type="radio" 
                              className="btn-check" 
                              id="completed" 
                              checked={activeFilter === 'completed'}
                              onChange={() => setActiveFilter('completed')}
                              name="bookingFilter"
                            />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="completed">
                              Completed ({currentTabCounts.completed})
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Booking Content */}
                    {activeTab === 'bus' ? (
                      <MyBusBookingComponent activeFilter={activeFilter} />
                    ) : (
                      <MyInsuranceBookingComponent activeFilter={activeFilter} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;