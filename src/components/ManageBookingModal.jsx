import React, { useState } from 'react';
import { X, Printer, Download, MessageCircle, AlertTriangle, Check } from 'lucide-react';
import jsPDF from 'jspdf';
import { trainImage } from '../assets/images';

export default function ManageBookingModal({ booking, onClose, onCancel }) {
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const generatePDF = () => {
    // Create new PDF document with A4 format
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    // Add logo with wider width but same height for better proportions
    doc.addImage(trainImage, 'PNG', 20, 30, 30, 10);
    
    // Adjusted text positions to align with new image size
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(25, 115, 232);
    doc.text('SEEMYTRIP', 70, 30);
    
    doc.setFontSize(16);
    doc.setTextColor(70, 70, 70);
    doc.text('BOOKING TICKET', 70, 40);
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Booking ID: ${booking.id}`, 70, 50);
    
    // Add decorative elements
    doc.setDrawColor(25, 115, 232);
    doc.setLineWidth(0.5);
    doc.line(20, 65, 190, 65);
    
    // Main content area background
    doc.setFillColor(248, 249, 250);
    doc.rect(15, 75, 180, 170, 'F');
    
    // Section Headers with modern styling
    const addSectionHeader = (text, y) => {
        // Header background
        doc.setFillColor(25, 115, 232);
        doc.rect(20, y - 5, 170, 10, 'F');
        
        // Header text
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(255);
        doc.text(text, 25, y + 2);
    };

    // Improved content layout
    const startY = 90;
    const colWidth = 55;
    
    // Booking Information Section
    addSectionHeader('Booking Information', startY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(60);
    doc.text([
        `Status: ${booking.status}`,
        `Booking Date: ${booking.bookingDate}`,
        `Price: $${booking.price}`
    ], 25, startY + 15, { lineHeightFactor: 1.5 });

    // Journey Details Section
    addSectionHeader('Journey Details', startY + 50);
    doc.text([
        `From: ${booking.from}`,
        `To: ${booking.to}`,
        `Travel Date: ${booking.travelDate}`
    ], 25, startY + 65, { lineHeightFactor: 1.5 });

    // Time Details Section
    addSectionHeader('Time Details', startY + 100);
    doc.text([
        `Departure: ${booking.departureTime}`,
        `Arrival: ${booking.arrivalTime}`,
        `Duration: 2h 30m`
    ], 25, startY + 115, { lineHeightFactor: 1.5 });

    // Enhanced Footer
    const footerY = 260;
    doc.setFillColor(248, 249, 250);
    doc.rect(15, footerY - 10, 180, 35, 'F');
    
    doc.setDrawColor(25, 115, 232);
    doc.setLineWidth(0.5);
    doc.line(20, footerY - 10, 190, footerY - 10);
    
    // Footer content
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(70);
    doc.text([
        `Operator: ${booking.operatorName}`,
        `Vehicle Number: ${booking.vehicleNumber}`,
        `Seat Numbers: ${booking.seatNumbers.join(', ')}`
    ], 25, footerY, { lineHeightFactor: 1.5 });

    // Add border with rounded corners
    doc.setDrawColor(25, 115, 232);
    doc.setLineWidth(0.8);
    doc.roundedRect(10, 10, 190, 277, 5, 5);
    
    // Add subtle design elements
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.2);
    doc.line(20, 180, 190, 180);

    return doc;
  };

  const handlePrint = () => {
    setActiveSection('print');
    const doc = generatePDF();
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const printWindow = window.open(pdfUrl, '_blank');
    
    if (printWindow) {
        printWindow.onload = () => {
            printWindow.print();
        };
    }
  };

  const handleDownload = () => {
    setActiveSection('download');
    const doc = generatePDF();
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    window.open(pdfUrl, '_blank');
    
    setTimeout(() => {
        doc.save(`seemytrip-ticket-${booking.id}.pdf`);
    }, 1000);
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
            .action-buttons .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 8px 16px;
                font-weight: 500;
                min-height: 40px;
            }

            .action-buttons .btn svg {
                width: 18px;
                height: 18px;
            }

            .cancel-booking-btn {
                color: #fff;
                transition: all 0.2s ease;
            }

            .cancel-booking-btn:hover {
                background-color: #dc3545 !important;
                border-color: #dc3545 !important;
                filter: brightness(110%);
            }

            .modal-content {
                border-radius: 12px;
                overflow: hidden;
            }

            .booking-details {
                background-color: #f8f9fa;
                padding: 30px;
                border-radius: 12px;
                margin-bottom: 30px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 30px;
            }

            .booking-details h6 {
                font-size: 1.1rem;
                margin-bottom: 1.2rem;
                color: #495057;
            }

            .booking-details p {
                margin-bottom: 0.8rem;
                font-size: 1rem;
            }

            .action-buttons {
                display: flex;
                justify-content: space-between;
                padding: 20px 0;
                gap: 20px;
            }

            .action-buttons .btn {
                flex: 1;
                min-width: 180px;
                padding: 12px 24px;
                font-size: 1rem;
            }

            .alert-warning {
                margin-top: 20px;
                padding: 20px;
                border-radius: 12px;
            }

            .alert-warning ul {
                margin-top: 10px;
                padding-left: 20px;
            }

            .modal-body {
                padding: 30px;
            }

            .modal-header {
                padding: 20px 30px;
            }

            .modal-header h5 {
                font-size: 1.4rem;
            }

            .cancel-confirm-actions {
                justify-content: flex-end;
                margin-top: 12px;
                gap: 12px;
            }

            .cancel-confirm-actions .btn {
                min-width: 140px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 8px 16px;
                font-weight: 500;
            }

            .cancel-confirm-actions .btn-danger {
                background-color: #dc3545;
                border-color: #dc3545;
            }

            .cancel-confirm-actions .btn-danger:hover {
                background-color: #bb2d3b !important;
                border-color: #b02a37 !important;
                color: white !important;
            }

            .cancel-confirm-actions .btn-outline-secondary:hover {
                background-color: #6c757d;
                color: white;
            }

            .modal-dialog {
                max-width: 1000px !important;
                width: 95%;
                margin: 1.75rem auto;
            }
        `}
    </style>
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="modal-dialog">
        <div className="modal-content shadow-lg">
          <div className="modal-header bg-primary">
            <h5 className="modal-title text-white">
             Manage Booking
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="booking-details">
                <div>
                    <h6 className="fw-bold text-secondary">Booking Information</h6>
                    <p><strong>Booking ID:</strong> {booking.id}</p>
                    <p><strong>Status:</strong> {booking.status}</p>
                    <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
                </div>
                <div>
                    <h6 className="fw-bold text-secondary">Journey Details</h6>
                    <p><strong>From:</strong> {booking.from}</p>
                    <p><strong>To:</strong> {booking.to}</p>
                    <p><strong>Travel Date:</strong> {booking.travelDate}</p>
                </div>
                <div>
                    <h6 className="fw-bold text-secondary">Time Details</h6>
                    <p><strong>Departure:</strong> {booking.departureTime}</p>
                    <p><strong>Arrival:</strong> {booking.arrivalTime}</p>
                    <p><strong>Duration:</strong> 2h 30m</p>
                </div>
            </div>

            <div className="action-buttons d-flex gap-3 mb-4">
              <button 
                onClick={handlePrint} 
                className={`btn ${activeSection === 'print' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                <Printer size={30} className="me-1" /> Print&nbsp;Ticket
              </button>
              <button 
                onClick={handleDownload}
                className={`btn ${activeSection === 'download' ? 'btn-success' : 'btn-outline-success'}`}
              >
                <Download className="me-1" /> Download&nbsp;Ticket
              </button>
              <button 
                onClick={() => {
                  setActiveSection('contact');
                  setShowContactForm(true);
                }}
                className={`btn ${activeSection === 'contact' ? 'btn-info' : 'btn-outline-info'}`}
              >
                <MessageCircle className="me-1" /> Contact&nbsp;Support
              </button>
              {booking.status !== 'Cancelled' && (
                <button
                  onClick={() => {
                    setActiveSection('cancel');
                    setShowCancelConfirm(true);
                  }}
                  className={`btn ${activeSection === 'cancel' ? 'btn-danger' : 'btn-outline-danger'}`}
                >
                  <X className="me-1" /> Cancel&nbsp;Booking
                </button>
              )}
            </div>

            {activeSection === 'print' && (
              <div className="alert alert-info">
                <h6 className="fw-bold mb-2">Print Preview</h6>
                <p>Your ticket is being prepared for printing. The print dialog will open automatically.</p>
              </div>
            )}

            {activeSection === 'download' && (
              <div className="alert alert-success">
                <h6 className="fw-bold mb-2">Download Started</h6>
                <p>Your ticket is being downloaded. Check your downloads folder for the PDF file.</p>
              </div>
            )}

            {activeSection === 'contact' && showContactForm && (
              <div className="alert alert-info">
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
              </div>
            )}

            {activeSection === 'cancel' && showCancelConfirm && (
              <div className="alert alert-danger">
                <h6 className="fw-bold mb-3">Cancel Booking Confirmation</h6>
                <p className="mb-3">Are you sure you want to cancel this booking? This action cannot be undone.</p>
                <div className="d-flex gap-2 cancel-confirm-actions">
                  <button 
                    onClick={() => setShowCancelConfirm(false)} 
                    className="btn btn-outline-secondary"
                  >
                    No, Keep Booking
                  </button>
                  <button 
                    onClick={() => { onCancel(booking.id); setShowCancelConfirm(false); }} 
                    className="btn btn-danger"
                  >
                    Yes, Cancel Booking
                  </button>
                </div>
              </div>
            )}

            {!activeSection && (
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
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
