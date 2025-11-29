import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserProfile } from '../../../store/Selectors/userSelector';
import { getUserInsuranceBookings } from '../../../store/Actions/insuranceAction';
import { 
    selectUserInsuranceBookingsData,
    selectUserInsuranceBookingsLoading,
    selectUserInsuranceBookingsError,
    selectInsuranceCancelLoading
} from '../../../store/Selectors/insuranceSelectors';

const My_Insurance_Booking = ({ activeFilter = 'all' }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUserProfile);
    const userInsuranceBookingsData = useSelector(selectUserInsuranceBookingsData);
    const userInsuranceBookingsLoading = useSelector(selectUserInsuranceBookingsLoading);
    const userInsuranceBookingsError = useSelector(selectUserInsuranceBookingsError);
    const cancelBookingLoading = useSelector(selectInsuranceCancelLoading);

    // Extract bookings array from response data
    const userInsuranceBookings = useMemo(() => {
        if (!userInsuranceBookingsData) return [];
        // Check if bookings is an array or nested in a bookings property
        if (Array.isArray(userInsuranceBookingsData.bookings)) {
            return userInsuranceBookingsData.bookings;
        }
        if (Array.isArray(userInsuranceBookingsData)) {
            return userInsuranceBookingsData;
        }
        return [];
    }, [userInsuranceBookingsData]);

    // Fetch insurance bookings when component mounts or user_id changes
    useEffect(() => {
        if (user?.user_id) {
            dispatch(getUserInsuranceBookings(user.user_id));
        }
    }, [user?.user_id, dispatch]);

    // Determine trip status for a booking
    const getTripStatus = (booking) => {
        // Check if trip is cancelled first
        const isCancelled = booking?.booking_status === 'Cancelled' || 
                           booking?.booking_status === 'cancelled';
        
        if (isCancelled) {
            return 'cancelled';
        }

        // For insurance, check travel dates if available
        const travelStartDate = booking.travel_start_date || booking.travelStartDate || booking.start_date;
        const travelEndDate = booking.travel_end_date || booking.travelEndDate || booking.end_date;
        
        if (!travelStartDate) {
            return 'completed';
        }

        try {
            const startDate = new Date(travelStartDate);
            const today = new Date();
            
            // Reset time to compare only dates
            today.setHours(0, 0, 0, 0);
            startDate.setHours(0, 0, 0, 0);
            
            if (isNaN(startDate.getTime())) {
                return 'completed';
            }

            // Check if travel hasn't started yet
            if (startDate > today) {
                return 'upcoming';
            } else {
                // Check if travel has ended
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

    // Filter bookings based on activeFilter
    const filteredBookings = useMemo(() => {
        if (!userInsuranceBookings || userInsuranceBookings.length === 0) {
            return [];
        }

        if (activeFilter === 'all') {
            return userInsuranceBookings;
        }

        return userInsuranceBookings.filter(booking => {
            const status = getTripStatus(booking);
            return status === activeFilter;
        });
    }, [userInsuranceBookings, activeFilter]);

    const handleViewDetails = (booking) => {
        // Navigate to insurance booking details page
        // The booking_id field contains the API BookingId needed for fetching details
        const apiBookingId = booking.booking_id || booking.BookingId || booking.insurance_booking_id;
        if (apiBookingId) {
            navigate('/insurance-booking-details', {
                state: {
                    bookingId: apiBookingId,
                    booking: booking
                }
            });
        } else {
            console.error('No BookingId found for booking:', booking);
        }
    };

    const handleCancelBooking = (booking) => {
        // Navigate to insurance cancellation page
        const apiBookingId = booking.booking_id || booking.BookingId || booking.insurance_booking_id;
        if (apiBookingId) {
            navigate('/insurance-cancel', {
                state: {
                    bookingId: apiBookingId,
                    booking: booking
                }
            });
        } else {
            console.error('No BookingId found for cancellation:', booking);
        }
    };

    const formatDateTime = (dateTimeString) => {
        if (!dateTimeString) return 'N/A';
        
        try {
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

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        
        try {
            const date = new Date(dateString);
            if (!isNaN(date.getTime())) {
                return date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric'
                });
            }
            
            return dateString;
        } catch (error) {
            return dateString;
        }
    };

    // Show loading state
    if (userInsuranceBookingsLoading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h5>Loading your insurance bookings...</h5>
            </div>
        );
    }

    // Show error state
    if (userInsuranceBookingsError) {
        return (
            <div className="text-center py-5">
                <i className="fa-solid fa-exclamation-triangle fs-1 text-danger mb-3"></i>
                <h5>Error loading bookings</h5>
                <p className="text-muted">{userInsuranceBookingsError}</p>
                <button 
                    className="btn btn-primary"
                    onClick={() => user?.user_id && dispatch(getUserInsuranceBookings(user.user_id))}
                >
                    Try Again
                </button>
            </div>
        );
    }

    // Show empty state
    if (!filteredBookings || filteredBookings.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="fa-solid fa-shield-halved fs-1 text-muted mb-3"></i>
                <h5>No {activeFilter === 'all' ? '' : activeFilter} bookings found</h5>
                <p className="text-muted">
                    {activeFilter === 'all' 
                        ? "You don't have any insurance bookings at the moment." 
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
                                <i className="fa-solid fa-shield-halved" />
                            </div>
                            <div className="ms-2">
                                <h6 className="card-title text-dark fs-5 mb-1">
                                    {booking.plan_name || booking.planName || 'Insurance Plan'}
                                </h6>
                                <ul className="nav nav-divider small">
                                    <li className="nav-item text-muted">Booking ID: {booking.booking_id}</li>
                                    <li className="nav-item ms-2">
                                        <span className={`label ${
                                            booking.booking_status === 'Confirmed' || booking.booking_status === 'confirmed'
                                                ? 'bg-light-success text-success' 
                                                : booking.booking_status === 'Pending' || booking.booking_status === 'pending'
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
                            >
                                View Booking Details
                            </button>
                            {booking.booking_status !== 'Cancelled' && 
                             booking.booking_status !== 'cancelled' && 
                             (booking.booking_id || booking.BookingId || booking.insurance_booking_id) && (
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
                            {booking.travel_start_date && (
                                <div className="col-sm-6 col-md-4">
                                    <span>Travel Start Date</span>
                                    <h6 className="mb-0">{formatDate(booking.travel_start_date || booking.travelStartDate || booking.start_date)}</h6>
                                </div>
                            )}
                            {booking.travel_end_date && (
                                <div className="col-sm-6 col-md-4">
                                    <span>Travel End Date</span>
                                    <h6 className="mb-0">{formatDate(booking.travel_end_date || booking.travelEndDate || booking.end_date)}</h6>
                                </div>
                            )}
                            <div className="col-md-4">
                                <span>Booking Status</span>
                                <h6 className="mb-0">{booking.booking_status || 'Pending'}</h6>
                            </div>
                            {booking.destination && (
                                <div className="col-sm-6 col-md-4">
                                    <span>Destination</span>
                                    <h6 className="mb-0">{booking.destination}</h6>
                                </div>
                            )}
                            {booking.total_premium && (
                                <div className="col-sm-6 col-md-4">
                                    <span>Total Premium</span>
                                    <h6 className="mb-0">
                                        {booking.currency || 'INR'} {booking.total_premium || booking.totalPremium || booking.premium}
                                    </h6>
                                </div>
                            )}
                            {booking.created_at && (
                                <div className="col-sm-6 col-md-4">
                                    <span>Booking Date</span>
                                    <h6 className="mb-0">{formatDateTime(booking.created_at)}</h6>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default My_Insurance_Booking;