import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit2 } from "lucide-react";
import Header02 from "../header02";
import FooterDark from "../footer-dark";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMilliseconds, format, parse } from "date-fns";
import { Indigo } from "../../assets/images";
import FlightTraveller from "../flight_components/flightTraveller";
import { fetchFlightsPriceValidate } from "../../store/Actions/flightActions";
import { selectflightPriceValidate } from "../../store/Selectors/flightSelectors";
const MAX_TRAVELERS = 9;

export const FlightBookingpage01 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pricedetails = useSelector(selectflightPriceValidate);
  const { flight, fRequest } = location.state || {};
  const [isLoadingPrice, setIsLoadingPrice] = useState(false);
  const [isHideBtnPrice, setIsHideBtnPrice] = useState(false);
  const [travellerDetails, setTravellerDetails] = useState([]);
  useEffect(() => {
    setTotalTravelers(
      Number(fRequest?.Adults) +
        Number(fRequest?.Children) +
        Number(fRequest?.Infants) || 1
    );
    if (
      Number(fRequest?.Adults) +
        Number(fRequest?.Children) +
        Number(fRequest?.Infants) >
      MAX_TRAVELERS
    ) {
      toast.error(`You can book a maximum of ${MAX_TRAVELERS} travelers.`);
      navigate("/flight-list", { state: { flightsearchrequest: fRequest } });
    }
  }, [fRequest, navigate]);

  // Function to validate prices
  const validatePrices = (travellerDetails) => {
    setIsLoadingPrice(true);
    console.log("travellerDetails", travellerDetails);
    setTravellerDetails(travellerDetails);
    PriceValidation(travellerDetails);
  };

  // Function to handle price validation
  const PriceValidation = (travellerDetails) => {
    if (!fRequest) return;
    setTravellerDetails(travellerDetails);
    localStorage.setItem(
      "leadTraveller",
      JSON.stringify(
        travellerDetails.find((traveller) => traveller.LeadPax) || {}
      )
    );

    var PRICE_REQUEST = {
      SessionID: null,
      FromAirport: fRequest.FromAirport,
      ToAirport: fRequest.ToAirport,
      Class: fRequest.Class,
      DepartDate: fRequest.DepartDate,
      ReturnDate: fRequest.ReturnDate,
      Adults: fRequest.Adults,
      Infants: fRequest.Infants,
      Children: fRequest.Children,
      TravellerNationality: fRequest.TravellerNationality,
      SearchKey: flight.SearchKey,
      Currency: fRequest.Currency,
      PageNo: 1,
      PageSize: 999,
      Filter: null,
      SortCriteria: null,
      FlightType: fRequest.FlightType,
      FlightMultiCitys: null,
      FlightSegments: null,
      OptionalToken: flight.OptionalToken,
      ProviderName: flight.ProviderName,
      ServiceIdentifer: flight.ServiceIdentifer,
      SearchType: "Flight",
      ServicePaxes: travellerDetails,
      FromCountry: fRequest.FromCountry,
      ToCountry: fRequest.ToCountry,
    };
    dispatch(fetchFlightsPriceValidate(PRICE_REQUEST));
  };
  useEffect(() => {
    if (
      (pricedetails && pricedetails.StatusCode !== "S0001") ||
      (pricedetails &&
        pricedetails.FlightSearchResponse?.FlightResults.length === 0)
    ) {
      setIsLoadingPrice(false);
      toast.error("Price validation failed. Please try again.");
      return;
    }
    if (pricedetails?.FlightSearchResponse?.FlightResults?.[0]) {
      setIsLoadingPrice(false);
      setIsHideBtnPrice(true);
    }
  }, [pricedetails]);
  const handleSearchResults = useCallback(() => {
    navigate("/flight-list", { state: { flightsearchrequest: fRequest } });
  }, [navigate, fRequest]);

  // State management
  const [totalTravelers, setTotalTravelers] = useState(1);

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    navigate("/flight-seat-selection", {
      state: {
        flightResults: pricedetails?.FlightSearchResponse.FlightResults[0],
        travellerDetails: travellerDetails,
        fRequest: fRequest,
      },
    });
  };

  // Render functions
  const renderBookingStepper = () => (
    <div className="col-xl-12 col-lg-12 col-md-12">
      <div id="stepper" className="bs-stepper stepper-outline mb-5">
        <div className="bs-stepper-header">
          <div className="step active" data-target="#step-1">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger1">
                <span className="bs-stepper-circle">1</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">
                Flight Review
              </h6>
            </div>
          </div>
          <div className="line" />
          <div className="step" data-target="#step-2">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger2">
                <span className="bs-stepper-circle">2</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">
                Select Seats
              </h6>
            </div>
          </div>
          <div className="line" />
          <div className="step" data-target="#step-3">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger3">
                <span className="bs-stepper-circle">3</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">
                Make Payment
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTravelerForm = () => (
    <div className="card p-4 mb-4">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mb-0">Add Traveller</h4>
      </div>

      {totalTravelers < MAX_TRAVELERS ? (
        <p className="text-muted small mb-4">
          You can book up to 9 travelers at once. ({totalTravelers}/9 added)
        </p>
      ) : (
        <p className="text-danger small mb-4">
          Maximum limit of 9 travelers reached.
        </p>
      )}

      <FlightTraveller
        FlightRequest={fRequest}
        validatePrices={validatePrices}
        isLoading={isLoadingPrice}
        hideButtom={isHideBtnPrice}
      />
    </div>
  );

  // const renderSavedTravelers = () => (
  //   <div className="card p-4 mb-4">
  //     <h4 className="mb-4">Added Travelers</h4>
  //     {travelers.map((traveler, index) => (
  //       <div key={index} className="saved-traveler-item mb-3 p-3 border rounded">
  //         <div className="d-flex justify-content-between align-items-center">
  //           <div>
  //             <h5 className="mb-1">{traveler.name}</h5>
  //             <p className="mb-0 text-muted">
  //               {traveler.age} years • {traveler.gender.charAt(0).toUpperCase() + traveler.gender.slice(1)}
  //             </p>
  //           </div>
  //           <div>
  //             <button
  //               className="btn btn-outline-primary btn-sm me-2"
  //               onClick={() => handleEditTraveler(index)}
  //             >
  //               <Edit2 size={14} className="me-1" />
  //               Edit
  //             </button>
  //             <button
  //               className="btn btn-outline-danger btn-sm"
  //               onClick={() => handleDeleteTraveler(index)}
  //             >
  //               <i className="fa-solid fa-trash-alt me-1"></i>
  //               Remove
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  // const renderContactDetails = () => (
  //   <div className="card p-4 mb-4">
  //     <h4 className="mb-4">Contact Details</h4>

  //     <div className="mb-3">
  //       <label htmlFor="email" className="form-label">Email ID*</label>
  //       <input
  //         type="email"
  //         className="form-control"
  //         id="email"
  //         value={contactDetails.email}
  //         onChange={(e) => setContactDetails({...contactDetails, email: e.target.value})}
  //       />
  //     </div>

  //     <div className="mb-3">
  //       <label htmlFor="phone" className="form-label">Phone Number*</label>
  //       <input
  //         type="tel"
  //         className="form-control"
  //         id="phone"
  //         value={contactDetails.phone}
  //         onChange={(e) => setContactDetails({...contactDetails, phone: e.target.value})}
  //       />
  //     </div>

  //     <div className="mb-3">
  //       <label htmlFor="address" className="form-label">Address</label>
  //       <textarea
  //         className="form-control"
  //         id="address"
  //         rows="3"
  //         value={contactDetails.address}
  //         onChange={(e) => setContactDetails({...contactDetails, address: e.target.value})}
  //       ></textarea>
  //     </div>

  //     <div className="mb-3">
  //       <label htmlFor="state" className="form-label">State*</label>
  //       <select
  //         className="form-select"
  //         id="state"
  //         value={contactDetails.state}
  //         onChange={(e) => setContactDetails({...contactDetails, state: e.target.value})}
  //       >
  //         <option value="">Select State</option>
  //         <option value="maharashtra">Maharashtra</option>
  //         <option value="karnataka">Karnataka</option>
  //         <option value="delhi">Delhi</option>
  //         <option value="tamilnadu">Tamil Nadu</option>
  //       </select>
  //     </div>
  //   </div>
  // );

  const renderBookingSummary = () => (
    <div className="booking-summary-sticky">
      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Booking Summary</h4>
          <span
            onClick={handleSearchResults}
            className="btn btn-outline-primary btn-sm"
          >
            <Edit2 size={16} className="me-2" />
            Edit
          </span>
        </div>
        {flight && (
          <>
            {flight &&
              flight.Segments &&
              flight.Segments.map((seg, sidx) => (
                <>
                  {/* Flight Details Card */}
                  <div className="card-box list-layout-block border br-dashed rounded-3 p-3 mb-4">
                    <div className="row">
                      <div className="col">
                        <div className="listLayout_midCaps">
                          <h4 className="fs-5 fw-bold mb-1">
                            {seg.AirlineName}
                          </h4>
                          <ul className="row g-2 p-0">
                            <li className="col-auto">
                              <p className="text-muted-2 text-md">
                                {seg.Segments.length > 0
                                  ? seg.Segments[0].Origin.Airport.AirportCode
                                  : ""}{" "}
                                →{" "}
                                {seg.Segments.length > 0
                                  ? seg.Segments[seg.Segments.length - 1]
                                      .Destination.Airport.AirportCode
                                  : ""}
                              </p>
                            </li>
                          </ul>

                          <div className="position-relative mt-3">
                            <div className="d-flex flex-wrap align-items-center">
                              <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                <div className="export-icon text-muted-2">
                                  <i className="fa-solid fa-plane" />
                                </div>
                                <div className="export ps-2">
                                  <span className="mb-0 text-muted-2 fw-semibold me-1">
                                    {fRequest?.Classtxt}
                                  </span>
                                </div>
                              </div>
                              <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                <div className="export-icon text-muted-2">
                                  <i className="fa-solid fa-clock" />
                                </div>
                                <div className="export ps-2">
                                  <span className="mb-0 text-muted-2 fw-semibold me-1">
                                    {seg?.TotalDuraionTime}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey Details */}
                  <div className="journey-details mb-4">
                    <h5 className="mb-3">Journey Details</h5>
                    <div className="d-flex justify-content-between mb-3 p-3 bg-light rounded">
                      <div>
                        <p className="mb-0 fw-bold">
                          {format(
                            new Date(seg.Segments[0]?.Origin?.DepTime),
                            "HH:mm"
                          )}
                        </p>
                        <p className="text-muted small mb-0">
                          {seg.Segments.length > 0
                            ? seg.Segments[0].Origin.Airport.AirportCode
                            : ""}
                        </p>
                      </div>
                      <div className="text-center text-muted small">
                        <p className="mb-0">{seg?.TotalDuraionTime}</p>
                        <div className="journey-line">
                          <span className="dot start"></span>
                          <span className="line"></span>
                          <span className="dot end"></span>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fw-bold">
                          {format(
                            new Date(
                              seg.Segments[
                                seg.Segments.length - 1
                              ]?.Destination?.ArrTime
                            ),
                            "HH:mm"
                          )}
                          {seg.NextDay && seg.NextDay !== "" && (
                            <div className="small text-danger">
                              {seg.NextDay}
                            </div>
                          )}
                        </p>
                        <p className="text-muted small mb-0">
                          {seg.Segments.length > 0
                            ? seg.Segments[seg.Segments.length - 1].Destination
                                .Airport.AirportCode
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            {/* Price Summary */}
            <div className="price-summary">
              <h5 className="mb-3">Price Details</h5>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-2">
                  <span>
                    Base Fare (
                    {Number(fRequest.Adults) +
                      Number(fRequest.Children) +
                      Number(fRequest.Infants)}{" "}
                    traveler
                    {Number(fRequest.Adults) +
                      Number(fRequest.Children) +
                      Number(fRequest.Infants) !==
                    1
                      ? "s"
                      : ""}
                    )
                  </span>
                  <span>₹{flight.BaseFare.toLocaleString()}</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Taxes & Fees</span>
                  <span>₹{flight.Tax.toLocaleString()}</span>
                </li>
                <li className="d-flex justify-content-between border-top pt-2 mt-2">
                  <strong>Total Amount</strong>
                  <strong>₹{flight.OfferedFare.toLocaleString()}</strong>
                </li>
              </ul>

              <button
                onClick={handleProceedToPayment}
                className="btn btn-primary w-100 mt-3"
                disabled={!isHideBtnPrice}
              >
                Continue to Seat Selection
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div id="main-wrapper">
      <ToastContainer />
      <Header02 />

      <section className="pt-4 gray-simple position-relative">
        <div className="container">
          <div className="row">{renderBookingStepper()}</div>

          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              {renderTravelerForm()}
              {/* {renderSavedTravelers()}
              {renderContactDetails()} */}
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              {renderBookingSummary()}
            </div>
          </div>
        </div>
      </section>

      <FooterDark />

      <style jsx>{`
        .journey-line {
          position: relative;
          width: 100px;
          height: 2px;
          background: #dee2e6;
          margin: 10px auto;
        }

        .journey-line .dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #cd2c22;
          border-radius: 50%;
          top: -3px;
        }

        .journey-line .dot.start {
          left: 0;
        }

        .journey-line .dot.end {
          right: 0;
        }

        .card {
          border: none;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          transition: all 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .br-dashed {
          border-style: dashed !important;
        }

        .booking-summary-sticky {
          position: sticky;
          top: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 991px) {
          .booking-summary-sticky {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
};
