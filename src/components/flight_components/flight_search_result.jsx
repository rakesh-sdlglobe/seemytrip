import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { indigo } from '../../assets/images';
import {indigo1} from '../../assets/images';

const FlightSearchResult = ({ flightData, filters }) => {
    const navigate = useNavigate();
    const [filteredFlightData, setFilteredFlightData] = useState([]);

    useEffect(() => {
        if (!flightData || flightData.length === 0) {
            // Clear the filteredFlightData if flightData is empty
            setFilteredFlightData([]);
        } else {
            // Apply filters to flightData
            const filteredData = flightData.filter(flight => {
                return (
                    (!filters.direct || flight.direct) &&
                    (!filters.stopovers || flight.stopovers <= filters.stopovers)
                );
            });

            // Update state with filtered data
            setFilteredFlightData(filteredData);
            sessionStorage.setItem('filteredFlightData', JSON.stringify(filteredData));
        }
    }, [flightData, filters]);

    const handleBooking = (flight) => {
        navigate('/flight-bookingPage', { state: { flightData: flight } });
    };

    return (
        <div className="row align-items-center g-4 mt-2">
            <style>
                {`
                .no-flight-found-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .no-flight-found-wrapper i {
                    color: #ccc;
                }
                
                .no-flight-found-wrapper h3 {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                
                .no-flight-found-wrapper p {
                    font-size: 16px;
                    color: #6c757d;
                }
                    .flights-list-item {
        padding: 1.25rem 1.5rem;
        margin: 0.75rem 0;
        background: white;
        border-radius: 8px;
        border: 1px solid #eaeaea;
        transition: all 0.2s ease-in-out;
    }

    .flights-list-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-color: #fff;
    }

    .airline-section {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 120px;
    }

    .flight-info-section {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex: 1;
    }

    .time-airport-group {
        text-align: center;
        min-width: 100px;
    }

    .flight-duration-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
    }

    .flightLine {
        position: relative;
        width: 100px;
        height: 2px;
        background: #e5e7eb;
        top:0px;
    }

    .flightLine::before,
    .flightLine::after {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: #6b7280;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
    }

    .flightLine::before {
        left: -3px;
    }

    .flightLine::after {
        right: -3px;
    }

    .price-section {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        min-width: 260px;
        justify-content: flex-end;
    }

    .select-flight-btn {
        padding: 0.5rem 1.5rem;
        transition: all 0.2s ease;
    }

    .select-flight-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
            `}
            </style>
            {/* Offer Coupon Box */}
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
                    <div className="d-md-flex align-items-center justify-content-start">
                        <div className="flx-icon-first mb-md-0 mb-3">
                            <div className="square--60 circle bg-white">
                                <i className="fa-solid fa-gift fs-3 text-success" />
                            </div>
                        </div>
                        <div className="flx-caps-first ps-2">
                            <h6 className="fs-5 fw-medium text-light mb-0">Start Exploring The World</h6>
                            <p className="text-light mb-0">Book Flights Effortlessly and Earn $50+ for each booking with SeeMyTrip.com</p>
                        </div>
                    </div>
                    <div className="flx-last text-md-end mt-md-0 mt-4">
                        <button type="button" className="btn btn-white border fw-medium full-width text-dark px-xl-4">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Flight List */}
            {filteredFlightData.length > 0 ? (
                filteredFlightData.map(flight => (
                    <div key={flight.flightId} className="col-xl-12 col-lg-12 col-md-12">
                        <div className="flights-list-item">
                            <div className="d-flex align-items-center justify-content-between">
                                {/* Airline Info */}
                                <div className="airline-section">
                                    <img className="img-fluid" src={indigo} width={35} alt="Airline Logo" />
                                    <div>
                                        <div className="text-dark fw-medium"> Indigo{flight.airline}</div>
                                        <div className="text-sm text-muted">1234{flight.classType}</div>
                                    </div>
                                </div>

                                {/* Flight Info */}
                                <div className="flight-info-section">
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

                                {/* Price & Action */}
                                <div className="price-section">
                                    <div className="text-dark fs-5 fw-bold">{flight.economyPrice}</div>
                                    <button 
                                        className="btn btn-primary select-flight-btn" 
                                        onClick={() => handleBooking(flight)}
                                    >
                                        Select Flight
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center mt-5">
                    <div className="no-flight-found-wrapper">
                        <i className="fas fa-plane fa-5x text-muted mb-3"></i>
                        <h3 className="text-muted">No Flights Found</h3>
                        <p className="text-muted">Please adjust your search filters or try again later.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlightSearchResult;
