import React, { useState } from 'react';
import { X, Printer, Download, MessageCircle, AlertTriangle, Check } from 'lucide-react';

export default function ManageBookingModal({ booking, onClose, onCancel }) {
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePrint = () => window.print();

  const handleDownload = () => {
    const ticketContent = `
      Booking ID: ${booking.id}
      ${booking.type.toUpperCase()} TICKET
      From: ${booking.from} To: ${booking.to}
      Date: ${booking.travelDate} 
      Departure: ${booking.departureTime} Arrival: ${booking.arrivalTime}
      Operator: ${booking.operatorName} Vehicle: ${booking.vehicleNumber}
      Seats: ${booking.seatNumbers.join(', ')}
      Total Price: $${booking.price} Status: ${booking.status}
    `;
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ticket-${booking.id}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowContactForm(false);
      setShowSuccess(false);
      setContactMessage('');
    }, 2000);
  };

  return (
    <>
    <style>
        {`
            .cancel-booking-btn {
            color: #fff;
            }

            .cancel-booking-btn:hover {
            color: #fff !important;
            background-color: #dc3545 !important; /* Keeps it red */
            border-color: #dc3545 !important;
            }
        `}
    </style>
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content shadow-lg">
          <div className="modal-header bg-primary">
            <h5 className="modal-title text-white">
             Manage Booking
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="d-flex justify-content-between mb-4">
              <div>
                <h6 className="fw-bold text-secondary">Booking Information</h6>
                <p><strong>Booking ID:</strong> {booking.id}</p>
                <p><strong>Status:</strong> {booking.status}</p>
                <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
                <p><strong>Travel Date:</strong> {booking.travelDate}</p>
              </div>
              <div>
                <h6 className="fw-bold text-secondary">Journey Details</h6>
                <p><strong>From:</strong> {booking.from}</p>
                <p><strong>To:</strong> {booking.to}</p>
                <p><strong>Departure:</strong> {booking.departureTime}</p>
                <p><strong>Arrival:</strong> {booking.arrivalTime}</p>
              </div>
            </div>

            <div className="d-flex gap-2 mb-3">
              <button onClick={handlePrint} className="btn btn-outline-primary">
                <Printer className="me-1" /> Print Ticket
              </button>
              <button onClick={handleDownload} className="btn btn-outline-success">
                <Download className="me-1" /> Download Ticket
              </button>
              <button onClick={() => setShowContactForm(true)} className="btn btn-outline-info">
                <MessageCircle className="me-1" /> Contact Support
              </button>
              {booking.status !== 'Cancelled' && (
                <button
                  onClick={() => setShowCancelConfirm(true)}
                  className="btn btn-danger ms-auto cancel-booking-btn"
                >
                  <X className="me-1" /> Cancel Booking
                </button>
              )}
            </div>

            <div className="alert alert-warning d-flex align-items-center">
              <AlertTriangle className="me-2" /> 
              <div>
                <strong>Cancellation Policy:</strong>
                <ul className="mb-0">
                  <li>Free cancellation up to 24 hours before departure</li>
                  <li>50% refund 12-24 hours before departure</li>
                  <li>No refund less than 12 hours before departure</li>
                </ul>
              </div>
            </div>

            {showCancelConfirm && (
              <div className="alert alert-danger">
                <p>Are you sure you want to cancel this booking?</p>
                <div className="d-flex gap-2">
                  <button onClick={() => { onCancel(booking.id); setShowCancelConfirm(false); }} className="btn btn-danger">
                    Yes, Cancel Booking
                  </button>
                  <button onClick={() => setShowCancelConfirm(false)} className="btn btn-secondary">
                    No, Keep Booking
                  </button>
                </div>
              </div>
            )}

            {showContactForm && (
              <form onSubmit={handleSubmitContact}>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Describe your issue..."
                  className="form-control mb-2"
                  rows="4"
                  required
                />
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                  <button type="button" onClick={() => setShowContactForm(false)} className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
                {showSuccess && (
                  <div className="mt-2 text-success d-flex align-items-center">
                    <Check className="me-1" /> Message sent successfully!
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
