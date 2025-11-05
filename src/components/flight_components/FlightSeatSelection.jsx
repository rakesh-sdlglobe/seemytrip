import React, { useState } from 'react';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Indigo } from '../../assets/images';

const FlightSeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flightResults = location.state?.flightResults || {};
  const travellerDetails = location.state?.travellerDetails || [];
  const fRequest = location.state?.fRequest;
  const [TotalPrice, setTotalPrice] = useState(flightResults?.OfferedFare || 0);
  const [selectedSeatPrice, setSelectedSeatPrice] = useState(0);

 const renderBookingStepper = () => (
    <div className="col-xl-12 col-lg-12 col-md-12">
      <div id="stepper" className="bs-stepper stepper-outline mb-5">
        <div className="bs-stepper-header">
          <div className="step completed" data-target="#step-1">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger1">
                <span className="bs-stepper-circle">1</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Flight Review</h6>
            </div>
          </div>
          <div className="line" />
          <div className="step active" data-target="#step-2">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger2">
                <span className="bs-stepper-circle">2</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Select Seats</h6>
            </div>
          </div>
          <div className="line" />
          <div className="step" data-target="#step-3">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger3">
                <span className="bs-stepper-circle">3</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // State for selected seats
  const [selectedSeats, setSelectedSeats] = useState({});

  // Mock seat data
  const seatLayout = {
    business: {
      rows: 2,
      seatsPerRow: 6,
      price: 2000,
      available: ['1A', '1B', '1E', '1F', '2C', '2D']
    },
    economy: {
      rows: 20,
      seatsPerRow: 6,
      price: 500,
      available: ['3A', '3B', '3C', '4D', '4E', '4F', '5A', '5B', '5C']
    }
  };

  const handleSeatSelection = (seatNumber, cabin, price) => {
    // if (Object.keys(selectedSeats).length >= travelers.length && !selectedSeats[seatNumber]) {
    //   toast.error(`You can only select ${travelers.length} seats`);
    //   return;
    // }

    setSelectedSeats(prev => {
      if (prev[seatNumber]) {
        const { [seatNumber]: removed, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [seatNumber]: { cabin, price }
      };
    });
  };

  const renderSeat = (seatNumber, cabin) => {
    const isAvailable = seatLayout[cabin].available.includes(seatNumber);
    const isSelected = selectedSeats[seatNumber];
    
    return (
      <button
        className={`seat ${isAvailable ? 'available' : 'occupied'} ${isSelected ? 'selected' : ''}`}
        onClick={() => isAvailable && handleSeatSelection(seatNumber, cabin, seatLayout[cabin].price)}
        disabled={!isAvailable}
      >
        {seatNumber}
      </button>
    );
  };

  const renderCabin = (cabinType) => {
    const cabin = seatLayout[cabinType];
    const rows = Array.from({ length: cabin.rows }, (_, i) => i + (cabinType === 'economy' ? 3 : 1));
    const columns = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
      <div className="cabin-section mb-4">
        <h4 className="cabin-title">{cabinType.charAt(0).toUpperCase() + cabinType.slice(1)} Class</h4>
        <div className="cabin-layout">
          {rows.map(row => (
            <div key={row} className="seat-row">
              <div className="row-number">{row}</div>
              <div className="seats">
                {columns.slice(0, 3).map(col => renderSeat(`${row}${col}`, cabinType))}
                <div className="aisle"></div>
                {columns.slice(3).map(col => renderSeat(`${row}${col}`, cabinType))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleProceedToPayment = () => {
    // if (Object.keys(selectedSeats).length !== travelers.length) {
    //   toast.error(`Please select seats for all ${travelers.length} travelers`);
    //   return;
    // }
    navigate('/flight-Bookingpage02', { 
      state: { 
        ...location.state,
        selectedSeats 
      } 
    });
  };

  return (
    <div id="main-wrapper">
      <ToastContainer />
      <Header02 />

      <section className="pt-4 pb-4 gray-simple position-relative">
        <div className="container">
          <div className="row">
            {renderBookingStepper()}
          </div>

          <div className="row">
            {/* Left Column - Seat Selection */}
            <div className="col-lg-8">
              <div className="card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3>Select Your Seats</h3>
                  <div className="seat-price-info">
                    <span className="badge bg-primary me-2">Business Class: ₹{seatLayout.business.price}</span>
                    <span className="badge bg-info">Economy Class: ₹{seatLayout.economy.price}</span>
                  </div>
                </div>

                <div className="seat-map-container">
                  <div className="plane-nose mb-4"></div>
                  {renderCabin('business')}
                  <div className="cabin-separator mb-4">
                    <div className="line"></div>
                    <span>Economy Class</span>
                    <div className="line"></div>
                  </div>
                  {renderCabin('economy')}
                </div>
              </div>
            </div>

            {/* Right Column - Price Summary */}
            <div className="col-lg-4">
              <div className="card p-4 sticky-summary">
                <h4 className="mb-3">Your Selection</h4>
                <div className="selected-seats mb-3">
                  {travellerDetails.map((traveler, index) => (
                    <div key={index} className="selected-seat-item mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="traveler-name">{traveler.Forename + ' ' + traveler.Surname}</span>
                        <span className="seat-number">
                          {/* {Object.keys(selectedSeats)[index] || 'Not selected'} */}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="seat-legend mb-3">
                  <div className="legend-item">
                    <div className="seat-demo available"></div>
                    <span>Available</span>
                  </div>
                  <div className="legend-item">
                    <div className="seat-demo selected"></div>
                    <span>Selected</span>
                  </div>
                  <div className="legend-item">
                    <div className="seat-demo occupied"></div>
                    <span>Occupied</span>
                  </div>
                </div>

                <div className="price-summary mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Selected Seats</span>
                    <span>{Object.keys(selectedSeats).length}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Price</span>
                    <span>₹ {TotalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  className="btn btn-primary w-100 mt-3"
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterDark />

      <style jsx>{`
        .seat-map-container {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
        }

        .plane-nose {
          width: 100px;
          height: 50px;
          background: #f8f9fa;
          border-radius: 50% 50% 0 0;
          margin: 0 auto;
        }

        .cabin-section {
          margin-bottom: 30px;
        }

        .cabin-title {
          margin-bottom: 20px;
          color: #333;
          font-weight: 600;
        }

        .seat-row {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .row-number {
          width: 30px;
          text-align: center;
          font-weight: 500;
        }

        .seats {
          display: flex;
          gap: 10px;
        }

        .aisle {
          width: 20px;
        }

        .seat {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .seat.available {
          background: #e3f2fd;
          color: #1976d2;
        }

        .seat.available:hover {
          background: #bbdefb;
        }

        .seat.occupied {
          background: #f5f5f5;
          color: #9e9e9e;
          cursor: not-allowed;
        }

        .seat.selected {
          background: #1976d2;
          color: white;
        }

        .cabin-separator {
          display: flex;
          align-items: center;
          margin: 30px 0;
        }

        .cabin-separator .line {
          flex: 1;
          height: 1px;
          background: #e0e0e0;
        }

        .cabin-separator span {
          padding: 0 15px;
          color: #666;
          font-weight: 500;
        }

        .seat-legend {
          display: flex;
          justify-content: space-around;
          padding: 15px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .seat-demo {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }

        .seat-demo.available {
          background: #e3f2fd;
        }

        .seat-demo.selected {
          background: #1976d2;
        }

        .seat-demo.occupied {
          background: #f5f5f5;
        }

        .selected-seat-item {
          padding: 10px;
          background: #f8f9fa;
          border-radius: 6px;
        }

        .traveler-name {
          font-weight: 500;
        }

        .seat-number {
          font-weight: 600;
          color: #1976d2;
        }

        @media (max-width: 768px) {
          .seat {
            width: 35px;
            height: 35px;
            font-size: 11px;
          }

          .seats {
            gap: 5px;
          }
        }

        .sticky-summary {
          position: sticky;
          top: 50px;
          margin-bottom: 20px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .sticky-summary:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .selected-seat-item {
          padding: 10px;
          background: #f8f9fa;
          border-radius: 6px;
          margin-bottom: 8px;
        }

        .seat-legend {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .seat-demo {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }

        .price-summary {
          padding-top: 15px;
          border-top: 1px dashed #dee2e6;
        }

        @media (max-width: 991px) {
          .sticky-summary {
            position: relative;
            top: 0;
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FlightSeatSelection; 