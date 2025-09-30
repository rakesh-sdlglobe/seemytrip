import React, { useEffect } from 'react';
import { BusBookingPage } from './bus_booking_detail_page';
import { setEncryptedItem } from '../../utils/encryption';

const BusBookingModal = ({ 
  isOpen, 
  onClose, 
  currentBus, 
  selectedSeats, 
  selectedBoarding, 
  selectedDropping 
}) => {
  // Store data in localStorage when modal opens
  useEffect(() => {
    if (isOpen) {
      setEncryptedItem("selectedBusData", currentBus);
      setEncryptedItem("selectedSeats", selectedSeats);
      setEncryptedItem("selectedBoardingPoint", selectedBoarding || "");
      setEncryptedItem("selectedDroppingPoint", selectedDropping || "");
    }
  }, [isOpen, currentBus, selectedSeats, selectedBoarding, selectedDropping]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title text-light">
            <i className="fas fa-bus text-light me-2"></i>
            Bus Booking Details
          </h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <BusBookingPage isModal={true} />
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }
        
        .modal-content {
          background: white;
          border-radius: 8px;
          max-width: 95vw;
          max-height: 95vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #e9ecef;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #dee2e6;
          background: #cd2c22;
          color: white;
          border-radius: 8px 8px 0 0;
        }
        
        .modal-title {
          margin: 0;
          font-weight: 600;
          font-size: 1.2rem;
        }
        
        .btn-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.3s;
        }
        
        .btn-close:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .modal-body {
          flex: 1;
          overflow: hidden;
          padding: 0;
          position: relative;
        }
        
        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid #dee2e6;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
        
        .modal-section {
          padding: 20px;
          max-height: calc(95vh - 140px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        @media (max-width: 768px) {
          .modal-overlay {
            padding: 10px;
          }
          
          .modal-content {
            max-width: 100vw;
            max-height: 100vh;
          }
          
          .modal-header {
            padding: 16px 20px;
          }
          
          .modal-footer {
            padding: 12px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BusBookingModal; 