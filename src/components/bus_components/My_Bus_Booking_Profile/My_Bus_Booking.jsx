import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBusBookings, selectCancelBookingLoading, selectBusBookingDetailsLoading } from '../../../store/Selectors/busSelectors';
import Booking_Details_Model from './Booking_Details_Model';
import Booking_Cancellation_Modal from './Booking_Cancellation_Modal';
import { selectUserProfile } from '../../../store/Selectors/userSelector';
import { fetchUserBusBookings } from '../../../store/Actions/busActions';

const My_Bus_Booking = ({ activeFilter = 'all' }) => {
    const dispatch = useDispatch();
    const userBusBookings = useSelector(selectUserBusBookings);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [bookingToCancel, setBookingToCancel] = useState(null);
    const [loadingBookingId, setLoadingBookingId] = useState(null);
    const bookingDetailsLoading = useSelector(selectBusBookingDetailsLoading);

    const user = useSelector(selectUserProfile);
    const cancelBookingLoading = useSelector(selectCancelBookingLoading);
    
    // Fetch bus bookings when component mounts or user_id changes
    useEffect(() => {
        if (user?.user_id) {
            dispatch(fetchUserBusBookings(user.user_id));
        }
    }, [user?.user_id, dispatch]);

    // Determine trip status for a booking (same logic as Booking_Details_Model)
    const getTripStatus = (booking) => {
        // Check if trip is cancelled first
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
            
            // Reset time to compare only dates
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

    // Filter bookings based on activeFilter
    const filteredBookings = useMemo(() => {
        if (!userBusBookings || userBusBookings.length === 0) {
            return [];
        }

        if (activeFilter === 'all') {
            return userBusBookings;
        }

        return userBusBookings.filter(booking => {
            const status = getTripStatus(booking);
            return status === activeFilter;
        });
    }, [userBusBookings, activeFilter]);

    const handleViewDetails = (booking) => {
        setLoadingBookingId(booking.booking_id);
        setSelectedBooking(booking);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBooking(null);
        setLoadingBookingId(null);
    };
    
    // Open modal after data is loaded
    useEffect(() => {
        if (selectedBooking && !bookingDetailsLoading && loadingBookingId === selectedBooking.booking_id) {
            setLoadingBookingId(null);
        }
    }, [bookingDetailsLoading, selectedBooking, loadingBookingId]);

    const handleCancelBooking = (booking) => {
        setBookingToCancel(booking);
        setShowCancelModal(true);
    };

    const handleCloseCancelModal = () => {
        setShowCancelModal(false);
        setBookingToCancel(null);
    };

    const handleCancelSuccess = () => {
        // Refresh bookings after successful cancellation
        if (user?.user_id) {
            dispatch(fetchUserBusBookings(user.user_id));
        }
    };

    const formatDateTime = (dateTimeString) => {
        if (!dateTimeString) return '';
        
        try {
          // Handle ISO format like "2025-11-17T20:00:00.000Z"
          if (dateTimeString.includes('T') || dateTimeString.includes('Z')) {
            const date = new Date(dateTimeString);
            if (!isNaN(date.getTime())) {
              return date.toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              });
            }
          }
          
          // Handle time-only format like "07:00:00" or "07:00"
          const timeParts = dateTimeString.split(':');
          if (timeParts.length >= 2 && !dateTimeString.includes('-')) {
            const hours = parseInt(timeParts[0], 10);
            const minutes = timeParts[1].padStart(2, '0');
            if (!isNaN(hours) && hours >= 0 && hours <= 23) {
              const ampm = hours >= 12 ? 'PM' : 'AM';
              const displayHours = hours % 12 || 12;
              return `${displayHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
            }
          }
          
          // Try to parse as date
          const date = new Date(dateTimeString);
          if (!isNaN(date.getTime())) {
            return date.toLocaleString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric',
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            });
          }
          
          return dateTimeString;
        } catch (error) {
          return dateTimeString;
        }
    };

    if (!filteredBookings || filteredBookings.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="fa-solid fa-bus fs-1 text-muted mb-3"></i>
                <h5>No {activeFilter === 'all' ? '' : activeFilter} bookings found</h5>
                <p className="text-muted">
                    {activeFilter === 'all' 
                        ? "You don't have any bus bookings at the moment." 
                        : `You don't have any ${activeFilter} bookings at the moment.`}
                </p>
            </div>
        );
    }

    return (
        <div>
            {filteredBookings.map((booking, index) => (
                <div className="card border br-dashed mb-4" key={booking.booking_id || index}>
                    <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="square--50 circle bg-light-purple text-purple flex-shrink-0">
                                <i className="fa-solid fa-bus" />
                            </div>
                            <div className="ms-2">
                                <h6 className="card-title text-dark fs-5 mb-1">
                                    {booking.origin} To {booking.destination}
                                </h6>
                                <ul className="nav nav-divider small">
                                    <li className="nav-item text-muted">Booking ID: {booking.booking_id}</li>
                                    <li className="nav-item ms-2">
                                        <span className={`label ${
                                            booking.booking_status === 'Confirmed' 
                                                ? 'bg-light-success text-success' 
                                                : booking.booking_status === 'Pending'
                                                ? 'bg-light-warning text-warning'
                                                : 'bg-light-danger text-danger'
                                        }`}>
                                            {booking.booking_status || 'Pending'}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-2 mt-md-0 d-flex gap-2">
                            <button 
                                className="btn btn-md btn-light-seegreen fw-medium mb-0"
                                onClick={() => handleViewDetails(booking)}
                                disabled={loadingBookingId === booking.booking_id && bookingDetailsLoading}
                            >
                                {loadingBookingId === booking.booking_id && bookingDetailsLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Loading...
                                    </>
                                ) : (
                                    'View Booking Details'
                                )}
                            </button>
                            {booking.booking_status !== 'Cancelled' && 
                             booking.booking_status !== 'cancelled' && 
                             booking.bus_id && (
                                <button 
                                    className="btn btn-md btn-danger fw-medium mb-0"
                                    onClick={() => handleCancelBooking(booking)}
                                    disabled={cancelBookingLoading || getTripStatus(booking) === 'completed'}
                                    style={{
                                        cursor: (cancelBookingLoading || getTripStatus(booking) === 'completed') ? 'not-allowed' : 'pointer',
                                        opacity: (cancelBookingLoading || getTripStatus(booking) === 'completed') ? 0.6 : 1
                                    }}
                                >
                                    Cancel Booking
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-sm-6 col-md-4">
                                <span>Departure time</span>
                                <h6 className="mb-0">{formatDateTime(booking.departure_time || booking.boarding_point_time)}</h6>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <span>Arrival time</span>
                                <h6 className="mb-0">{formatDateTime(booking.arrival_time || booking.dropping_point_time)}</h6>
                            </div>
                            <div className="col-md-4">
                                <span>Booking status</span>
                                <h6 className="mb-0">{booking.booking_status || 'Pending'}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Booking Details Modal */}
            {showModal && selectedBooking && (
                <Booking_Details_Model 
                    booking={selectedBooking}
                    onClose={handleCloseModal}
                />
            )}

            {/* Cancellation Modal */}
            {showCancelModal && bookingToCancel && (
                <Booking_Cancellation_Modal
                    booking={bookingToCancel}
                    onClose={handleCloseCancelModal}
                    onSuccess={handleCancelSuccess}
                />
            )}
        </div>
    );
};

export default My_Bus_Booking;