import React, { useState } from 'react';

const Booking_Details_Model = ({ booking, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!booking) return null;

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
    if (booking.booking_id) {
      navigator.clipboard.writeText(booking.booking_id.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Get published price directly without calculation
  const publishedPrice = parseFloat(booking.published_price || 0);
  
  // Get operator name - handle different possible field names
  const operatorName = booking.travel_name || booking.operator_name || 'N/A';
  
  // Get bus type
  const busType = booking.bus_type || booking.type || 'AC Sleeper';
  
  // Get vehicle number (if available)
  const vehicleNumber = booking.vehicle_number || '';

  return (
    <div className="booking-details-modal-overlay" onClick={onClose}>
      <div className="booking-details-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <i className="fa-solid fa-times"></i>
        </button>

        {/* Trip Completed Header */}
        <div className="trip-completed-header">
          <h2 className="trip-completed-title">Trip Completed</h2>
        </div>

        <div className="booking-details-container">
          {/* Main Trip Details Card */}
          <div className="trip-details-card">
            {/* Amount and Order ID Section */}
            <div className="amount-order-section">
              <div className="amount-paid">
                <span className="amount-label">Amount Paid:</span>
                <span className="amount-value">₹{publishedPrice.toFixed(2)}</span>
              </div>
              <div className="order-id-section">
                <span className="order-id-label">Order ID:</span>
                <span className="order-id-value">{booking.booking_id || 'N/A'}</span>
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
              <h3 className="operator-name">{operatorName}</h3>
              <div className="bus-type">
                {busType} {vehicleNumber ? `- ${vehicleNumber}` : ''}
              </div>
            </div>

            {/* Journey Details */}
            <div className="journey-section">
              <div className="origin-destination">
                <div className="location-item">
                  <div className="location-name">{booking.origin || 'N/A'}</div>
                  <div className="location-time">
                    {formatTime(booking.departure_time || booking.boarding_point_time)}, {formatDate(booking.departure_time || booking.journey_date)}
                  </div>
                </div>
                <div className="duration-badge">
                  {calculateDuration(booking.departure_time || booking.boarding_point_time, booking.arrival_time || booking.dropping_point_time)}
                </div>
                <div className="location-item">
                  <div className="location-name">{booking.destination || 'N/A'}</div>
                  <div className="location-time">
                    {formatTime(booking.arrival_time || booking.dropping_point_time)}, {formatDate(booking.arrival_time)}
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Number */}
            <div className="ticket-number-section">
              <span className="ticket-number-badge">
                Ticket no: {booking.ticket_no || booking.travel_operator_pnr || booking.booking_id || 'N/A'}
              </span>
            </div>

            {/* Passenger Details */}
            <div className="passenger-section">
              <h4 className="passenger-section-title">Passenger details</h4>
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
            </div>
          </div>

          {/* Fare & Payment Details Card */}
          <div className="fare-payment-card">
            <h4 className="fare-payment-title">Fare & Payment Details</h4>
            
            {/* Fare Breakdown */}
            <div className="fare-breakdown">
              <div className="fare-item">
                <span className="fare-label">Published Price</span>
                <span className="fare-value">₹{publishedPrice.toFixed(2)}</span>
              </div>
              <div className="fare-item">
                <span className="fare-label">GST</span>
                <span className="fare-value">₹0.00</span>
              </div>
              <div className="fare-item total-fare">
                <span className="fare-label">Total amount paid</span>
                <span className="fare-value">₹{publishedPrice.toFixed(2)}</span>
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
                    <div className="payment-amount">₹{publishedPrice.toFixed(2)}</div>
                    <div className="transaction-id">
                      Transaction ID: {booking.transaction_id || booking.payment_transaction_id || booking.booking_id || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Date & Time */}
            <div className="booking-date-section">
              <span className="booking-date-label">
                Ticket booked on: {formatDateTime(booking.created_at || booking.booking_date || booking.journey_date)}
              </span>
            </div>
          </div>
        </div>
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

        .trip-completed-header {
          background: linear-gradient(135deg, #90EE90 0%, #7FCD7F 100%);
          padding: 20px 30px;
          border-radius: 12px 12px 0 0;
        }

        .trip-completed-title {
          color: #006400;
          font-size: 24px;
          font-weight: 700;
          margin: 0;
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

          .trip-completed-header {
            padding: 15px 20px;
          }

          .trip-completed-title {
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
