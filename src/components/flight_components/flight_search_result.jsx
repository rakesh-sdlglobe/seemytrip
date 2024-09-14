import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightSearchResult = ({ flightData, filters }) => {
    const navigate = useNavigate();
    const [filteredFlightData, setFilteredFlightData] = useState([]);

    useEffect(() => {
        // If no new flight data is passed in, use data from sessionStorage
        if (!flightData || flightData.length === 0) {
            const storedData = sessionStorage.getItem('filteredFlightData');
            if (storedData) {
                setFilteredFlightData(JSON.parse(storedData));
            } else {
                setFilteredFlightData([]);
            }
        } else {
            // Filter the flight data and save it in sessionStorage
            const filteredData = flightData.filter(flight => {
                return (
                    (!filters.direct || flight.direct) &&
                    (!filters.stopovers || flight.stopovers <= filters.stopovers)
                );
            });

            setFilteredFlightData(filteredData);
            sessionStorage.setItem('filteredFlightData', JSON.stringify(filteredData));
        }
    }, [flightData, filters]);

    const handleBooking = (flight) => {
        navigate('/booking-page', { state: { flightData: flight } });
    };

    return (
        <div className="row align-items-center g-4 mt-2">
             <style>
            {`
                .no-train-found-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .no-train-found-wrapper i {
                    color: #ccc;
                }
                
                .no-train-found-wrapper h3 {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                
                .no-train-found-wrapper p {
                    font-size: 16px;
                    color: #6c757d;
                }

            `}
            </style>
            {/* Offer Coupon Box */}
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
                    <div className="d-md-flex align-items-center justify-content-start">
                        <div className="flx-icon-first mb-md-0 mb-3">
                            <div className="square--60 circle bg-white"><i className="fa-solid fa-gift fs-3 text-success" /></div>
                        </div>
                        <div className="flx-caps-first ps-2">
                            <h6 className="fs-5 fw-medium text-light mb-0">Start Exploring The World</h6>
                            <p className="text-light mb-0">Book Flights Effortlessly and Earn $50+ for each booking with Booking.com</p>
                        </div>
                    </div>
                    <div className="flx-last text-md-end mt-md-0 mt-4">
                        <button type="button" className="btn btn-white fw-medium full-width text-dark px-xl-4">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Flight List */}
            {filteredFlightData.length > 0 ? (
                filteredFlightData.map(flight => (
                    <div key={flight.flightId} className="col-xl-12 col-lg-12 col-md-12">
                        <div className="flights-list-item bg-white rounded-3 p-3">
                            <div className="row gy-4 align-items-center justify-content-between">
                                <div className="col">
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="label bg-light-primary text-primary me-2">Departure</span>
                                        <span className="text-muted text-sm">{flight.departureTime}</span>
                                    </div>
                                    <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                                        <div className="col-sm-auto">
                                            <div className="d-flex align-items-center justify-content-start">
                                                {/* <img className="img-fluid" src={flight.airlineLogo} width={45} alt="Airline Logo" /> */}
                                                <img className="img-fluid" src={flight.airlineLogo} width={45} alt="Airline Logo" /> 
                                                <div className="ps-2">
                                                    <div className="text-dark fw-medium">{flight.airline}</div>
                                                    <div className="text-sm text-muted">{flight.classType}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row gx-3 align-items-center">
                                                <div className="col-auto">
                                                    <div className="text-dark fw-bold">{flight.departureTime}</div>
                                                    <div className="text-muted text-sm">{flight.departureAirport}</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="flightLine">
                                                        <div />
                                                        <div />
                                                    </div>
                                                    <div className="text-muted text-sm fw-medium mt-3">{flight.direct ? 'Direct' : `${flight.stopovers} Stop`}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-dark fw-bold">{flight.arrivalTime}</div>
                                                    <div className="text-muted text-sm">{flight.arrivalAirport}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto">
                                            <div className="text-dark fw-medium">Duration: {flight.duration}</div>
                                            <div className="text-muted text-sm fw-medium">{flight.stopovers} Stop</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-auto">
                                    <div className="text-dark fs-3 fw-bold lh-base">₹{flight.price}</div>
                                    <button className="btn btn-primary btn-md fw-medium full-width" onClick={() => handleBooking(flight)}>Select Flight</button>
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
