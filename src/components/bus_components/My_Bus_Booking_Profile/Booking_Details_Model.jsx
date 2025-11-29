import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getEasebuzzRefundStatus,
    clearEasebuzzRefundStatusState 
} from '../../../store/Actions/easebuzzPaymentActions';
import { 
    selectRefundStatusLoading,
    selectRefundStatusData,
    selectRefundStatusError 
} from '../../../store/Selectors/easebuzzPaymentSelectors';
import { 
    fetchBusBookingDetails 
} from '../../../store/Actions/busActions';
import { 
    selectBusBookingDetails,
    selectBusBookingDetailsLoading,
    selectBusAuthData
} from '../../../store/Selectors/busSelectors';
import { fetchBusAuth } from '../../../store/Actions/busActions';

const Booking_Details_Model = ({ booking, onClose }) => {
  const dispatch = useDispatch();
  const [copied, setCopied] = useState(false);
  const [apiBookingData, setApiBookingData] = useState(null);
  const [loadingApiData, setLoadingApiData] = useState(true);
  
  // Refund status selectors
  const refundStatusLoading = useSelector(selectRefundStatusLoading);
  const refundStatusData = useSelector(selectRefundStatusData);
  const refundStatusError = useSelector(selectRefundStatusError);
  
  // Bus booking details selectors
  const busBookingDetails = useSelector(selectBusBookingDetails);
  const busBookingDetailsLoading = useSelector(selectBusBookingDetailsLoading);
  const busAuthData = useSelector(selectBusAuthData);

  const handleCheckRefundStatus = useCallback(async () => {
    const paymentId = booking?.easebuzz_payment_id || booking?.transaction_id;
    
    if (!paymentId) {
      return;
    }

    try {
      dispatch(clearEasebuzzRefundStatusState());
      
      const statusData = {
        easebuzz_id: paymentId
      };
      
      await dispatch(getEasebuzzRefundStatus(statusData));
    } catch (error) {
      console.error('Error checking refund status:', error);
    }
  }, [booking, dispatch]);

  // Ensure we have auth data first
  useEffect(() => {
    if (!busAuthData?.TokenId || !busAuthData?.EndUserIp) {
      dispatch(fetchBusAuth());
    }
  }, [dispatch, busAuthData]);
  
  // Fetch booking details from API when modal opens and we have auth data
  useEffect(() => {
    const fetchBookingDetailsFromAPI = async () => {
      try {
        // Get bus_id from booking (this is the only thing stored in database)
        const busId = booking?.bus_id;
        
        if (!busId) {
          console.error('No bus_id found in booking');
          setLoadingApiData(false);
          return;
        }
        
        // Check if we have auth data
        const tokenId = busAuthData?.TokenId;
        const endUserIp = busAuthData?.EndUserIp;
        
        if (!tokenId || !endUserIp) {
          // Wait for auth data to be available
          return;
        }
        
        setLoadingApiData(true);
        
        // Fetch booking details from API
        const bookingDetailsData = {
          EndUserIp: endUserIp,
          TokenId: tokenId,
          BusId: busId,
          IsBaseCurrencyRequired: false
        };
        
        const response = await dispatch(fetchBusBookingDetails(bookingDetailsData));
        
        if (response && response.GetBookingDetailResult?.Itinerary) {
          setApiBookingData(response.GetBookingDetailResult.Itinerary);
        }
      } catch (error) {
        console.error('Error fetching booking details from API:', error);
      } finally {
        setLoadingApiData(false);
      }
    };
    
    if (booking?.bus_id && busAuthData?.TokenId && busAuthData?.EndUserIp) {
      fetchBookingDetailsFromAPI();
    }
  }, [booking?.bus_id, busAuthData?.TokenId, busAuthData?.EndUserIp, dispatch]);
  
  // Check refund status when modal opens if payment ID exists
  useEffect(() => {
    const paymentId = booking?.easebuzz_payment_id || booking?.transaction_id;
    if (paymentId && booking?.booking_status === 'Cancelled') {
      // Auto-check refund status for cancelled bookings
      handleCheckRefundStatus();
    }
    
    // Cleanup on unmount
    return () => {
      dispatch(clearEasebuzzRefundStatusState());
    };
  }, [booking, handleCheckRefundStatus, dispatch]);

  if (!booking) return null;

  // Use API data if available, otherwise fallback to booking data
  const itinerary = apiBookingData || {};
  
  // Calculate fare details from API response
  const calculateFareDetails = () => {
    if (!itinerary.Price && (!itinerary.Passenger || itinerary.Passenger.length === 0)) {
      return {
        basePrice: 0,
        discount: 0,
        offeredPrice: 0,
        tds: 0,
        total: 0
      };
    }
    
    // If Price object exists at itinerary level, use it
    if (itinerary.Price) {
      const price = itinerary.Price;
      const basePrice = parseFloat(price.PublishedPriceRoundedOff || price.PublishedPrice || 0);
      const offeredPrice = parseFloat(price.OfferedPriceRoundedOff || price.OfferedPrice || 0);
      const tds = parseFloat(price.TDS || 0);
      const discount = basePrice - offeredPrice;
      const total = offeredPrice + tds;
      
      return { basePrice, discount, offeredPrice, tds, total };
    }
    
    // Otherwise, calculate from passenger prices
    const priceTotals = (itinerary.Passenger || []).reduce((totals, passenger) => {
      const price = passenger?.Seat?.Price || {};
      const basePrice = parseFloat(price.PublishedPriceRoundedOff || price.PublishedPrice || 0);
      const offeredPrice = parseFloat(price.OfferedPriceRoundedOff || price.OfferedPrice || 0);
      const tds = parseFloat(price.TDS || 0);
      
      totals.basePrice += basePrice;
      totals.offeredPrice += offeredPrice;
      totals.tds += tds;
      
      return totals;
    }, { basePrice: 0, offeredPrice: 0, tds: 0 });
    
    const discount = priceTotals.basePrice - priceTotals.offeredPrice;
    const total = priceTotals.offeredPrice + priceTotals.tds;
    
    return {
      basePrice: priceTotals.basePrice,
      discount,
      offeredPrice: priceTotals.offeredPrice,
      tds: priceTotals.tds,
      total
    };
  };
  
  const fareDetails = calculateFareDetails();
  
  // Use InvoiceAmount from API if available, otherwise use calculated total
  const finalAmount = itinerary.InvoiceAmount || fareDetails.total;

  // Format date and time
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return '';
    
    try {
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

  // Format date only
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    } catch (error) {
      return dateString;
    }
  };

  // Format time only
  const formatTime = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    } catch (error) {
      return dateString;
    }
  };

  // Calculate duration
  const calculateDuration = (departure, arrival) => {
    if (!departure || !arrival) return '';
    try {
      const dep = new Date(departure);
      const arr = new Date(arrival);
      if (isNaN(dep.getTime()) || isNaN(arr.getTime())) return '';
      
      const diff = arr - dep;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}h ${minutes}m`;
    } catch (error) {
      return '';
    }
  };

  // Copy to clipboard
  const copyOrderId = () => {
    const orderId = itinerary.TicketNo || booking.booking_id;
    if (orderId) {
      navigator.clipboard.writeText(orderId.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Determine trip status based on cancellation status and departure date
  const getTripStatus = () => {
    // Check if trip is cancelled first
    const isCancelled = booking?.booking_status === 'Cancelled' || 
                       booking?.booking_status === 'cancelled' ||
                       itinerary?.Status === 'Cancelled' ||
                       itinerary?.Status === 'cancelled';
    
    if (isCancelled) {
      return { status: 'cancelled', title: 'Trip Cancelled' };
    }

    const departureDateString = itinerary.DepartureTime || booking.departure_time || booking.boarding_point_time || booking.journey_date;
    
    if (!departureDateString) {
      return { status: 'completed', title: 'Trip Completed' };
    }

    try {
      const departureDate = new Date(departureDateString);
      const today = new Date();
      
      // Reset time to compare only dates
      today.setHours(0, 0, 0, 0);
      departureDate.setHours(0, 0, 0, 0);
      
      if (isNaN(departureDate.getTime())) {
        return { status: 'completed', title: 'Trip Completed' };
      }

      if (departureDate > today) {
        return { status: 'upcoming', title: 'Upcoming Trip' };
      } else {
        return { status: 'completed', title: 'Trip Completed' };
      }
    } catch (error) {
      return { status: 'completed', title: 'Trip Completed' };
    }
  };

  const tripStatus = getTripStatus();
  

  return (
    <div className="booking-details-modal-overlay" onClick={onClose}>
      <div className="booking-details-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <i className="fa-solid fa-times"></i>
        </button>

        {/* Show loading spinner if data is still loading */}
        {(loadingApiData || busBookingDetailsLoading) ? (
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {/* Trip Status Header */}
            <div className={`trip-status-header ${
              tripStatus.status === 'upcoming' ? 'trip-upcoming' : 
              tripStatus.status === 'cancelled' ? 'trip-cancelled' : 
              'trip-completed'
            }`}>
              <h2 className="trip-status-title">{tripStatus.title}</h2>
            </div>

            <div className="booking-details-container">
          {/* Main Trip Details Card */}
          <div className="trip-details-card">
            {/* Amount and Order ID Section */}
            <div className="amount-order-section">
              <div className="amount-paid">
                <span className="amount-label">Amount Paid:</span>
                <span className="amount-value">₹{finalAmount.toFixed(2)}</span>
              </div>
              <div className="order-id-section">
                <span className="order-id-label">Order ID:</span>
                <span className="order-id-value">{itinerary.TicketNo || booking.booking_id || 'N/A'}</span>
                <button 
                  className="copy-btn" 
                  onClick={copyOrderId}
                  title="Copy Order ID"
                >
                  <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
            </div>

            {/* Operator Information */}
            <div className="operator-section">
              <h3 className="operator-name">{itinerary.TravelName || booking.travel_name || 'N/A'}</h3>
              <div className="bus-type">
                {itinerary.BusType || booking.bus_type || 'AC Sleeper'}
              </div>
            </div>

            {/* Journey Details */}
            <div className="journey-section">
              <div className="origin-destination">
                <div className="location-item">
                  <div className="location-name">{itinerary.Origin || booking.origin || 'N/A'}</div>
                  <div className="location-time">
                    {formatTime(itinerary.DepartureTime || booking.departure_time || booking.boarding_point_time)}, {formatDate(itinerary.DepartureTime || booking.departure_time || booking.journey_date)}
                  </div>
                </div>
                <div className="duration-badge">
                  {calculateDuration(itinerary.DepartureTime || booking.departure_time || booking.boarding_point_time, itinerary.ArrivalTime || booking.arrival_time || booking.dropping_point_time)}
                </div>
                <div className="location-item">
                  <div className="location-name">{itinerary.Destination || booking.destination || 'N/A'}</div>
                  <div className="location-time">
                    {formatTime(itinerary.ArrivalTime || booking.arrival_time || booking.dropping_point_time)}, {formatDate(itinerary.ArrivalTime || booking.arrival_time)}
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Number */}
            <div className="ticket-number-section">
              <span className="ticket-number-badge">
                Ticket no: {itinerary.TicketNo || itinerary.TravelOperatorPNR || booking.ticket_no || booking.travel_operator_pnr || booking.booking_id || 'N/A'}
              </span>
            </div>

            {/* Passenger Details */}
            <div className="passenger-section">
              <h4 className="passenger-section-title">Passenger details</h4>
              {(itinerary.Passenger && itinerary.Passenger.length > 0) ? (
                itinerary.Passenger.map((passenger, index) => (
                  <div key={index} className="passenger-info">
                    <i className="fa-solid fa-user passenger-icon"></i>
                    <div className="passenger-details">
                      <span className="passenger-name">
                        {passenger.FirstName} {passenger.LastName}
                      </span>
                      <div className="seat-number">
                        Seat: <strong>{passenger.Seat?.SeatName || 'N/A'}</strong>
                        {passenger.Age && ` • Age: ${passenger.Age}`}
                        {passenger.Gender && ` • ${passenger.Gender === 1 ? 'Male' : passenger.Gender === 2 ? 'Female' : 'Other'}`}
                      </div>
                      {passenger.Phoneno && (
                        <div className="seat-number">
                          Contact: <strong>{passenger.Phoneno}</strong>
                        </div>
                      )}
                      {passenger.Email && (
                        <div className="seat-number">
                          Email: <strong>{passenger.Email}</strong>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="passenger-info">
                  <i className="fa-solid fa-user passenger-icon"></i>
                  <div className="passenger-details">
                    <span className="passenger-name">
                      {booking.contact_email ? booking.contact_email.split('@')[0] : 'N/A'}
                    </span>
                    <div className="seat-number">
                      Contact: <strong>{booking.contact_mobile || 'N/A'}</strong>
                    </div>
                    {booking.passenger_count && (
                      <div className="passenger-count">
                        Passengers: <strong>{booking.passenger_count}</strong>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Fare & Payment Details Card */}
          <div className="fare-payment-card">
            <h4 className="fare-payment-title">Fare & Payment Details</h4>
            
            {/* Fare Breakdown */}
            <div className="fare-breakdown">
              <div className="fare-item">
                <span className="fare-label">Base Price</span>
                <span className="fare-value">₹{fareDetails.basePrice.toFixed(2)}</span>
              </div>
              {fareDetails.discount > 0 && (
                <div className="fare-item">
                  <span className="fare-label">Discount/Offer</span>
                  <span className="fare-value" style={{ color: '#28a745' }}>-₹{fareDetails.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="fare-item">
                <span className="fare-label">Offered Price</span>
                <span className="fare-value">₹{fareDetails.offeredPrice.toFixed(2)}</span>
              </div>
              {fareDetails.tds > 0 && (
                <div className="fare-item">
                  <span className="fare-label">TDS</span>
                  <span className="fare-value">+₹{fareDetails.tds.toFixed(2)}</span>
                </div>
              )}
              <div className="fare-item total-fare">
                <span className="fare-label">Final Amount</span>
                <span className="fare-value">₹{finalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="payment-method-section">
              <h5 className="payment-method-title">Payment Method</h5>
              <div className="payment-details">
                <div className="bank-info">
                  <div className="bank-logo">
                    <i className="fa-solid fa-university"></i>
                  </div>
                    <div className="bank-details">
                    <div className="bank-name">{booking.payment_method || 'Online Payment'}</div>
                    <div className="payment-amount">₹{finalAmount.toFixed(2)}</div>
                    <div className="transaction-id">
                      Transaction ID: {booking.transaction_id || booking.payment_transaction_id || booking.easebuzz_payment_id || booking.booking_id || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Date & Time */}
            <div className="booking-date-section">
              <span className="booking-date-label">
                Ticket booked on: {formatDateTime(itinerary.InvoiceCreatedOn || booking.created_at || booking.booking_date || booking.journey_date)}
              </span>
              {itinerary.InvoiceNumber && (
                <div className="booking-date-label" style={{ marginTop: '5px' }}>
                  Invoice Number: <strong>{itinerary.InvoiceNumber}</strong>
                </div>
              )}
            </div>

            {/* Booking History / Remarks Section - Show only final remark */}
            {itinerary.BookingHistory && itinerary.BookingHistory.length > 0 && (() => {
              const finalRemark = itinerary.BookingHistory[itinerary.BookingHistory.length - 1];
              return (
                <div className="remarks-section">
                  <h5 className="remarks-title">Remarks</h5>
                  <div className="remark-item">
                    <div className="remark-header">
                      <div className="remark-date">
                        <i className="fa-solid fa-clock me-2"></i>
                        {formatDateTime(finalRemark.CreatedOn || finalRemark.LastModifiedOn)}
                      </div>
                      {finalRemark.EventCategory && (
                        <span className="remark-category">
                          {finalRemark.EventCategory === 1 ? 'Booking' : 
                           finalRemark.EventCategory === 2 ? 'Confirmation' : 
                           finalRemark.EventCategory === 3 ? 'Cancellation' : 
                           'Update'}
                        </span>
                      )}
                    </div>
                    {finalRemark.Remarks && (
                      <div className="remark-content">
                        <i className="fa-solid fa-comment me-2"></i>
                        {finalRemark.Remarks}
                      </div>
                    )}
                    {finalRemark.CreatedByName && (
                      <div className="remark-author">
                        <i className="fa-solid fa-user me-2"></i>
                        By: {finalRemark.CreatedByName}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* Refund Status Section */}
            {(booking.easebuzz_id || booking.transaction_id) && (
              <div className="refund-status-section">
                <div className="refund-status-header">
                  <h5 className="refund-status-title">Refund Status</h5>
                  <button
                    type="button"
                    className="refresh-refund-btn"
                    onClick={handleCheckRefundStatus}
                    disabled={refundStatusLoading}
                    title="Refresh refund status"
                  >
                    {refundStatusLoading ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-rotate-right"></i>
                    )}
                  </button>
                </div>
                
                {refundStatusLoading ? (
                  <div className="refund-status-loading">
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Checking refund status...</span>
                  </div>
                ) : refundStatusError ? (
                  <div className="refund-status-error">
                    <i className="fa-solid fa-exclamation-triangle"></i>
                    <span>{refundStatusError}</span>
                  </div>
                ) : refundStatusData && refundStatusData.status === true && refundStatusData.refunds && refundStatusData.refunds.length > 0 ? (
                  <div className="refund-status-content">
                    <div className="refund-summary">
                      <div className="refund-summary-item">
                        <span className="refund-summary-label">Total Amount:</span>
                        <span className="refund-summary-value">₹{parseFloat(refundStatusData.amount || 0).toFixed(2)}</span>
                      </div>
                      <div className="refund-summary-item">
                        <span className="refund-summary-label">Net Debit:</span>
                        <span className="refund-summary-value">₹{parseFloat(refundStatusData.net_amount_debit || 0).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="refund-list">
                      {refundStatusData.refunds.map((refund, index) => (
                        <div key={index} className="refund-item">
                          <div className="refund-item-header">
                            <div className="refund-id">
                              <span className="refund-id-label">Refund ID:</span>
                              <span className="refund-id-value">{refund.refund_id || refund.merchant_refund_id || 'N/A'}</span>
                            </div>
                            <span className={`refund-status-badge ${
                              refund.refund_status === 'success' || refund.refund_status === 'processed' 
                                ? 'status-success' 
                                : refund.refund_status === 'failed' 
                                ? 'status-failed' 
                                : 'status-pending'
                            }`}>
                              {refund.refund_status || 'queued'}
                            </span>
                          </div>
                          <div className="refund-item-details">
                            <div className="refund-detail-row">
                              <span className="refund-detail-label">Amount:</span>
                              <span className="refund-detail-value">₹{parseFloat(refund.refund_amount || 0).toFixed(2)}</span>
                            </div>
                            {refund.merchant_refund_date && (
                              <div className="refund-detail-row">
                                <span className="refund-detail-label">Requested:</span>
                                <span className="refund-detail-value">{formatDateTime(refund.merchant_refund_date)}</span>
                              </div>
                            )}
                            {refund.refund_settled_date && (
                              <div className="refund-detail-row">
                                <span className="refund-detail-label">Settled:</span>
                                <span className="refund-detail-value">{formatDateTime(refund.refund_settled_date)}</span>
                              </div>
                            )}
                            {refund.failure_description && (
                              <div className="refund-detail-row error">
                                <span className="refund-detail-label">Error:</span>
                                <span className="refund-detail-value">{refund.failure_description}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : refundStatusData && refundStatusData.status === false ? (
                  <div className="refund-status-no-data">
                    <i className="fa-solid fa-info-circle"></i>
                    <span>No refund information available</span>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
          </>
        )}
      </div>

      <style jsx>{`
        .booking-details-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          overflow-y: auto;
        }

        .booking-details-modal-content {
          background: #f5f5f5;
          border-radius: 12px;
          max-width: 1200px;
          width: 100%;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          margin: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s;
          color: #333;
        }

        .modal-close-btn:hover {
          background: #fff;
          transform: rotate(90deg);
        }

        .trip-status-header {
          padding: 20px 30px;
          border-radius: 12px 12px 0 0;
        }

        .trip-status-header.trip-completed {
          background: linear-gradient(135deg, #90EE90 0%, #7FCD7F 100%);
        }

        .trip-status-header.trip-upcoming {
          background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
        }

        .trip-status-header.trip-cancelled {
          background: linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%);
        }

        .trip-status-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }

        .trip-status-header.trip-completed .trip-status-title {
          color: #006400;
        }

        .trip-status-header.trip-upcoming .trip-status-title {
          color: #FFFFFF;
        }

        .trip-status-header.trip-cancelled .trip-status-title {
          color: #FFFFFF;
        }

        .booking-details-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
          padding: 30px;
        }

        .trip-details-card,
        .fare-payment-card {
          background: white;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .amount-order-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }

        .amount-paid {
          display: flex;
          flex-direction: column;
        }

        .amount-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }

        .amount-value {
          font-size: 20px;
          font-weight: 700;
          color: #333;
        }

        .order-id-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .order-id-label {
          font-size: 12px;
          color: #666;
        }

        .order-id-value {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .copy-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          transition: color 0.3s;
        }

        .copy-btn:hover {
          color: #006400;
        }

        .operator-section {
          margin-bottom: 25px;
        }

        .operator-name {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin: 0 0 8px 0;
        }

        .bus-type {
          font-size: 14px;
          color: #666;
        }

        .journey-section {
          margin-bottom: 25px;
        }

        .origin-destination {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .location-item {
          flex: 1;
        }

        .location-name {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .location-time {
          font-size: 14px;
          color: #666;
        }

        .duration-badge {
          background: #f0f0f0;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #666;
          white-space: nowrap;
        }

        .ticket-number-section {
          margin-bottom: 25px;
        }

        .ticket-number-badge {
          background: #f0f0f0;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #666;
        }

        .passenger-section {
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }

        .passenger-section-title {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin: 0 0 15px 0;
        }

        .passenger-info {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .passenger-icon {
          color: #666;
          font-size: 18px;
          margin-top: 2px;
        }

        .passenger-details {
          flex: 1;
        }

        .passenger-name {
          font-size: 16px;
          color: #333;
          display: block;
          margin-bottom: 8px;
        }

        .seat-number {
          font-size: 14px;
          color: #666;
        }

        .seat-number strong {
          color: #333;
        }

        .fare-payment-card {
          display: flex;
          flex-direction: column;
        }

        .fare-payment-title {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin: 0 0 20px 0;
        }

        .fare-breakdown {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }

        .fare-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .fare-item.total-fare {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #e0e0e0;
        }

        .fare-label {
          font-size: 14px;
          color: #666;
        }

        .fare-value {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .total-fare .fare-label,
        .total-fare .fare-value {
          font-size: 16px;
          font-weight: 700;
        }

        .payment-method-section {
          margin-bottom: 20px;
        }

        .payment-method-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 15px 0;
        }

        .payment-details {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
        }

        .bank-info {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .bank-logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
        }

        .bank-details {
          flex: 1;
        }

        .bank-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
        }

        .payment-amount {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin-bottom: 5px;
        }

        .transaction-id {
          font-size: 12px;
          color: #666;
        }

        .booking-date-section {
          padding-top: 15px;
          border-top: 1px solid #e0e0e0;
        }

        .booking-date-label {
          font-size: 13px;
          color: #666;
        }

        .passenger-info {
          margin-bottom: 15px;
        }

        .passenger-info:last-child {
          margin-bottom: 0;
        }

        /* Remarks Section Styles */
        .remarks-section {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }

        .remarks-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 15px 0;
        }

        .remarks-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .remark-item {
          background: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
          border-left: 3px solid #007bff;
        }

        .remark-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .remark-date {
          font-size: 13px;
          color: #666;
          display: flex;
          align-items: center;
        }

        .remark-category {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: capitalize;
        }

        .remark-content {
          font-size: 14px;
          color: #333;
          line-height: 1.6;
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
        }

        .remark-content i {
          color: #007bff;
          margin-top: 3px;
        }

        .remark-author {
          font-size: 12px;
          color: #666;
          display: flex;
          align-items: center;
        }

        .remark-author i {
          color: #666;
        }

        /* Refund Status Styles */
        .refund-status-section {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }

        .refund-status-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .refund-status-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .refresh-refund-btn {
          background: #f0f0f0;
          border: none;
          border-radius: 6px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: all 0.3s;
        }

        .refresh-refund-btn:hover:not(:disabled) {
          background: #e0e0e0;
          color: #333;
        }

        .refresh-refund-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .refund-status-loading,
        .refund-status-error,
        .refund-status-no-data {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
        }

        .refund-status-loading {
          background: #f0f7ff;
          color: #0066cc;
        }

        .refund-status-error {
          background: #fff5f5;
          color: #dc3545;
        }

        .refund-status-no-data {
          background: #f9f9f9;
          color: #666;
        }

        .refund-status-content {
          background: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
        }

        .refund-summary {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e0e0e0;
        }

        .refund-summary-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .refund-summary-label {
          font-size: 12px;
          color: #666;
        }

        .refund-summary-value {
          font-size: 16px;
          font-weight: 700;
          color: #333;
        }

        .refund-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .refund-item {
          background: white;
          border-radius: 6px;
          padding: 12px;
          border: 1px solid #e0e0e0;
        }

        .refund-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .refund-id {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .refund-id-label {
          font-size: 11px;
          color: #666;
        }

        .refund-id-value {
          font-size: 13px;
          font-weight: 600;
          color: #333;
        }

        .refund-status-badge {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: capitalize;
        }

        .refund-status-badge.status-success {
          background: #d4edda;
          color: #155724;
        }

        .refund-status-badge.status-failed {
          background: #f8d7da;
          color: #721c24;
        }

        .refund-status-badge.status-pending {
          background: #fff3cd;
          color: #856404;
        }

        .refund-item-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .refund-detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .refund-detail-row.error {
          color: #dc3545;
        }

        .refund-detail-label {
          color: #666;
        }

        .refund-detail-value {
          color: #333;
          font-weight: 500;
        }

        .refund-detail-row.error .refund-detail-value {
          color: #dc3545;
        }

        @media (max-width: 968px) {
          .booking-details-container {
            grid-template-columns: 1fr;
          }

          .amount-order-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .booking-details-modal-content {
            margin: 10px;
          }

          .booking-details-container {
            padding: 20px;
          }

          .trip-status-header {
            padding: 15px 20px;
          }

          .trip-status-title {
            font-size: 20px;
          }

          .origin-destination {
            flex-direction: column;
            align-items: flex-start;
          }

          .duration-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Booking_Details_Model;
