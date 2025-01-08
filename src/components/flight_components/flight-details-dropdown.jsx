import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FaUtensils, FaPlane, FaCoffee, FaChair } from "react-icons/fa"; // For icons
import { parse, format } from 'date-fns'; // Add this import
import  '../../assets/css/style.css';
import { indigo } from '../../assets/images';




function FlightDetailsDropdown({ selectedFlight }) {
  return (
    <div className="flight-details-container">
      {/* Tabs */}
      <Tabs defaultActiveKey="flightDetails" id="flight-tabs" className="mb-3">
        <Tab eventKey="flightDetails" title="FLIGHT DETAILS">
        <FlightDetails flight={selectedFlight} />
        </Tab>
        <Tab eventKey="fareSummary" title="FARE SUMMARY">
          <FareSummary/>
        </Tab>
        <Tab eventKey="cancellation" title="CANCELLATION">
      <Cancellation/>
        </Tab>
        <Tab eventKey="dateChange" title="DATE CHANGE">
        <DateChange/>
        </Tab>
      </Tabs>
    </div>
  );
}

// Flight Details Section
function FlightDetails({ flight }) {
  // Get journey date from sessionStorage and parse it
  const storedDate = sessionStorage.getItem("journeyDate");
  const journeyDate = storedDate ? 
    format(parse(storedDate, "dd/MM/yyyy", new Date()), "dd MMM yyyy") : 
    'Date not available';

  if (!flight) {
    return <div>No flight details available</div>;
  }

  return (
    <div className="flight-details">
      <div className="flight-summary">
        <h5>
         <span className="fs-5 pe-1"> {flight.fromAirport}</span> to <span className="fs-5 ps-1">{flight.toAirport}</span>
          <span className="ms-2">{journeyDate}</span>
        </h5>
        <div className="flight-info">
          <div className="left-section">
            <img
              src={flight.airlineLogo || indigo} // Airline logo
              alt={flight.airline}
              className="airline-logo"
            />
            <div className="d-flex align-items-center">
             
              <p className="aircraft m-0 me-1 fs-6">{flight.aircraft || "Indigo 1234"}</p>
              {/* <strong className="m-0 fw-semibold me-1">{flight.airline} | {flight.flightNumber}</strong> */}
            </div>
          </div>

         
          {/* <div className="right-section">
            <div className="time-info">
              <div>
                <strong>{flight.departureTime}</strong>
               
                <p>Terminal {flight.departureTerminal}</p>
                <p>{flight.fromAirport}</p>
              </div>
              <div className="duration">
                <p>{flight.duration}</p>
              </div>
              <div>
                <strong>{flight.arrivalTime}</strong>
               
                <p>Terminal {flight.arrivalTerminal}</p>
                <p>{flight.toAirport}</p>
              </div>
            </div>
          </div> */}
        </div>
<div className="d-flex justify-content-between">
<div className="flight-info-section col-6">
                                    {/* Departure */}
                                    <div className="time-airport-group">
                                        <div className="text-dark fw-bold">{flight.departureTime}</div>
                                        <div className="text-muted text-sm">{flight.fromAirportShort || flight.fromAirport}</div>
                                    </div>

                                    {/* Duration & Stops */}
                                    <div className="flight-duration-section">
                                        <div className="text-dark small">{flight.duration}</div>
                                        <div className="flightLine"></div>
                                        <div className="text-muted small">
                                            {flight.stopovers === 0 ? 'Direct' : 
                                             flight.stopovers ? `${flight.stopovers} Stop${flight.stopovers > 1 ? 's' : ''}` : 
                                             'Direct'}
                                        </div>
                                    </div>

                                    {/* Arrival */}
                                    <div className="time-airport-group">
                                        <div className="text-dark fw-bold">{flight.arrivalTime}</div>
                                        <div className="text-muted text-sm">{flight.toAirportShort || flight.toAirport}</div>
                                    </div>
                                </div>
        <div className="baggage-info col-6">
          <div>
            <div className="text-dark fw-bold">BAGGAGE:</div>
            <p className="fs-6">ADULT</p>
          </div>
          <div>
            <div className="text-dark fw-bold">CHECK IN</div>
            <p className="fs-6">{flight.checkInBaggage || "15 Kgs"}</p>
          </div>
          <div>
            <div className="text-dark fw-bold">CABIN</div>
            <p className="fs-6">{flight.cabinBaggage || "7 Kgs"}</p>
          </div>
        </div>
        </div>
        {/* Features */}
        <div className="flight-features">
          <span>
            <FaUtensils /> Complimentary Meals
          </span>
          <span>
            <FaPlane /> {flight.seatLayout || "3-3 Layout"}
          </span>
          <span>
            <FaCoffee /> Complimentary Beverages
          </span>
          <span>
            <FaChair /> {flight.seatInfo || "Standard Recliner"}
          </span>
        </div>
      </div>
    </div>
  );
}

// Fare Summary Section
function FareSummary() {
  return (
    <div className="fare-summary">
      <h5 className="fare-breakup-header">Fare breakup</h5>
      <div className="fare-details">
        <div className="fare-row">
          <span className="fare-label">TOTAL</span>
          <span className="fare-value total">₹ 8,735</span>
        </div>
        <div className="fare-row">
          <span className="fare-label">Base Fare</span>
          <span className="fare-value">₹ 7,774</span>
        </div>
        <div className="fare-row">
          <span className="fare-label">Surcharges</span>
          <span className="fare-value">₹ 961</span>
        </div>
      </div>
    </div>
  );
}

// Cancellation Section
function Cancellation() {
  return (
    <div className="cancellation">
      <h5 className="cancellation-header">DEL-BLR</h5>
      <div className="cancellation-table">
        <div className="table-header">
          <span className="table-col bold">Time frame</span>
          <span className="table-col bold">Airline Fee + MMT Fee</span>
        </div>
        <div className="table-row">
          <span className="table-col">0 hours to 2 hours*</span>
          <span className="table-col">
            ADULT : <strong>Non Refundable</strong>
          </span>
        </div>
        <div className="table-row">
          <span className="table-col">2 hours to 365 days*</span>
          <span className="table-col">
            ADULT : <strong>₹ 4,000 + ₹ 300</strong>
          </span>
        </div>
      </div>
      <p className="cancellation-note">
        <span className="bold">*Important:</span> The airline fee is indicative.
        MakeMyTrip does not guarantee the accuracy of this information. All fees
        mentioned are per passenger. All refunds are subject to airline
        approval.
      </p>
    </div>
  );
}

// Date Change Section
function DateChange() {
  return (
    <div className="date-change">
      <h5 className="date-change-header">DEL-BLR</h5>
      <div className="date-change-table">
        <div className="table-header">
          <span className="table-col bold">Time frame</span>
          <span className="table-col bold">Airline Fee + MMT Fee + Fare difference</span>
        </div>
        <div className="table-row">
          <span className="table-col">0 hours to 2 hours*</span>
          <span className="table-col">
            ADULT : <strong>Non Changeable</strong>
          </span>
        </div>
        <div className="table-row">
          <span className="table-col">2 hours to 365 days*</span>
          <span className="table-col">
            ADULT : <strong>₹ 3,000 + ₹ 300 + Fare difference</strong>
          </span>
        </div>
      </div>
      <p className="date-change-note">
        <span className="bold">*Important:</span> The airline fee is indicative. MakeMyTrip does not guarantee
        the accuracy of this information. All fees mentioned are per passenger. Date change charges are
        applicable only on selecting the same airline on a new date. The difference in fares between the old and
        the new booking will also be payable by the user.
        <br />
        Please refer to the Date Change Charges section above for details on the number of allowed free date
        changes, if applicable.
      </p>
    </div>
  );
}

export default FlightDetailsDropdown;
