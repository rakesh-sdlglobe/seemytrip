import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header02 from "./header02";
import FooterDark from "./footer-dark";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
import {
  fetchFlightServiceTax,
  fetchFlightPreBook,
  fetchFlightBook,
} from "../store/Actions/flightActions";
import {
  selectFlightServiceTax,
  selectFlightPreBook,
  selectFlightBook,
} from "../store/Selectors/flightSelectors";
import { selectUserProfile } from "../store/Selectors/userSelector";
import { selectGoogleUser } from "../store/Selectors/authSelectors";
import { selectEmailUser } from "../store/Selectors/emailSelector";
import { loadRazorpayScript } from "../utils/loadRazorpay";
export const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY_ID;
// Load Razorpay SDK
const loadRazorpay = async () => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Check your internet.");
    return;
  }
};
const generateUniqueString = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};
// Sanitize traveller details to remove any unwanted properties
const sanitizeTravellerDetails = (details) => {
  return details.map((traveller) => {
    const cleanTraveller = {};
    for (const key in traveller) {
      const value = traveller[key];
      if (
        typeof value !== "object" ||
        value === null ||
        value instanceof Date
      ) {
        cleanTraveller[key] = value;
      } else if (Array.isArray(value)) {
        cleanTraveller[key] = value;
      } else {
        // Skip DOM elements, React refs, or synthetic events
        if (
          value.tagName ||
          value.nativeEvent ||
          value._reactName ||
          value.currentTarget
        ) {
          continue;
        }
        cleanTraveller[key] = JSON.parse(JSON.stringify(value));
      }
    }
    return cleanTraveller;
  });
};
const FlightBookingPage02 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fServiceTax = useSelector(selectFlightServiceTax);
  const userProfile = useSelector(selectUserProfile);
  const googleUser = useSelector(selectGoogleUser);
  const emailuser = useSelector(selectEmailUser);
  const userEmail = googleUser?.email || emailuser || "No email available";
  const { flightResults, fRequest, travellerDetails, selectedSeats } =
    location.state || {};

  console.log("Selected flightResults:", flightResults);
  const [totalFare, setTotalFare] = useState(flightResults.OfferedFare || 0);
  const [TaxSummary, setTaxSummary] = useState([]);
  const prebookResponse = useSelector(selectFlightPreBook);
  const bookedResponse = useSelector(selectFlightBook);

  useEffect(() => {
    if (!flightResults || !fRequest || !travellerDetails) {
      return;
    }
    let ServiceDetials = [
      {
        SearchType: "Flight",
        ServiceIndex: 0,
        ProviderName: flightResults.ProviderName,
        ServiceIdentifer: flightResults.ServiceIdentifier,
        Currency: null,
        ServiceBookPrice: flightResults.OfferedFare,
        OptionalToken: flightResults.OptionalToken,
        FromDate: format(flightResults.DepartureTime, "yyyy-MM-dd"),
        ToDate: format(flightResults.ArrivalTime, "yyyy-MM-dd"),
        DiscountType: null,
        DiscountValue: 0.0,
        DiscountedAmount: 0.0,
        ServiceTaxes: null,
        ServiceTypeId: null,
        ProviderPrice: 0.0,
        PaxDetail: {
          Senior: 0,
          Adults: fRequest.Adults,
          Youth: 0,
          Children: fRequest.Children,
          Infants: fRequest.Infants,
          Saver: 0,
          FreeChild: 0,
        },
        IsDom: fRequest.isDom,
        SrvCityId: 0,
        IsPkgComp: false,
        AddonPrice: 0.0,
        AddonType: null,
      },
    ];
    // Fetch service tax details
    const servicetaxrequest = {
      Credential: null,
      ServiceDetails: ServiceDetials,
      TaxSummary: null,
      TaxKey: null,
      BookCurrency: fRequest.Currency || "INR",
    };
    dispatch(fetchFlightServiceTax(servicetaxrequest));
  }, [flightResults, fRequest, travellerDetails, dispatch]);

  useEffect(() => {
    if (fServiceTax && fServiceTax.StatusCode !== "S0001") {
      toast.error("Failed to fetch service tax details");
    }
    if (fServiceTax) {
      const totalAmount = fServiceTax.ServiceDetails.reduce(
        (total, tax) => total + (tax.ServiceBookPrice || 0),
        0
      );
      const taxAmount = fServiceTax.TaxSummary.reduce(
        (total, tax) => total + (tax.TaxValue || 0),
        0
      );
      setTotalFare(
        parseFloat(totalAmount.toFixed(2)) + parseFloat(taxAmount.toFixed(2))
      );
      setTaxSummary(fServiceTax.TaxSummary || []);
    }
  }, [fServiceTax, setTotalFare, setTaxSummary]);
  const makeBookingRequest = useCallback(
    (total) => {
      let GUID = generateUniqueString();
      const sanitizedTravellerDetails =
        sanitizeTravellerDetails(travellerDetails);
      let LeadTraveller = sanitizedTravellerDetails.find(
        (traveller) => traveller.LeadPax
      );
      const ServiceTaxes = fServiceTax.ServiceDetails[0]?.ServiceTaxes || [];
      const taxAmount = fServiceTax.TaxSummary.reduce(
        (total, tax) => total + (tax.TaxValue || 0),
        0
      );
      const BookDetails = [];
      BookDetails.push({
        SearchType: "Flight",
        BookSearchType: "Flight",
        bookingNo:
          prebookResponse?.BookingsStatus.length > 0
            ? prebookResponse?.BookingsStatus[0]?.BookingId
            : null,
        UniqueReferencekey: GUID,
        FlightServiceDetail: {
          UniqueReferencekey: GUID,
          ServiceBookPrice: flightResults.OfferedFare,
          ProviderName: flightResults.ProviderName,
          ServiceIdentifer: flightResults.ServiceIdentifier,
          OptionalToken: flightResults.OptionalToken,
          Image:
            "https://cdn.sriggle.in/media/airlinelogo/" +
            flightResults.AirlineCode +
            ".png",
          FromDate: fRequest.DepartDate,
          ToDate: fRequest.ReturnDate || fRequest.DepartDate,
          Adults: fRequest.Adults,
          Children: fRequest.Children,
          Infants: fRequest.Infants,
          Paxs: travellerDetails,
          searchkey: flightResults.searchkey,
          IsLCC: flightResults.IsLCC,
          GstAllowed: flightResults.GstAllowed,
          IsGstMandatory: flightResults.IsGstMandatory,
          DiscountType: "A",
          DiscountValue: 0.0,
          DiscountedAmount: 0.0,
          ServiceTaxes: ServiceTaxes,
          TaxAmount: taxAmount,
        },
        StatusMessage: null,
        PackageRefId: null,
        BooknowPackageRefId: null,
        CartType: null,
      });
      const reservation = {
        ReservationId: prebookResponse?.ReservationId || "",
        BookingType: "C",
        CartReservId: prebookResponse?.ReservationId || "",
        ReservationName: LeadTraveller?.Forename + " " + LeadTraveller?.Surname,
        ReservationArrivalDate: fRequest.DepartDate,
        ReservationCurrency: fRequest.Currency || "INR",
        ReservationAmount: total,
        MemberId: userEmail || LeadTraveller?.PaxEmail, // pass user email id
        TempMemberId: userEmail || LeadTraveller?.PaxEmail, // pass user email id
        BookingDetails: BookDetails,
        Credential: null,
        AgreeTNC: true,
        GSTNumber: null,
        GSTName: null,
        GSTAddress: null,
        GSTPhone: null,
        GSTEmail: null,
      };
      console.log("PreBook Reservation Request:", reservation);
      return reservation;
    },
    [travellerDetails, flightResults, fRequest, fServiceTax, prebookResponse]
  );
  const BookingComplete = useCallback(
    (total) => {
      let BookRequest = makeBookingRequest(total);
      dispatch(fetchFlightBook(BookRequest));
    },
    [dispatch, makeBookingRequest]
  );

  // make payment when prebookResponse is available
  useEffect(() => {
    loadRazorpay();
    if (prebookResponse) {
      if (typeof window.Razorpay === "undefined") {
        alert("Razorpay SDK not available");
        return;
      }

      let amount = totalFare * 100; // Convert to paise
      let currency = fRequest.Currency || "INR";
      const sanitizedTravellerDetails =
        sanitizeTravellerDetails(travellerDetails);
      let LeadTraveller = sanitizedTravellerDetails.find(
        (traveller) => traveller.LeadPax
      );
      const { Forename, Surname, PaxEmail, PaxMobile } = LeadTraveller;

      const options = {
        key: RAZORPAY_KEY, // from Razorpay dashboard
        amount: amount, // amount in paise
        currency: currency,
        name: "seemytrip",
        description: "Flight Booking Payment",
        handler: function (response) {
          console.log("Payment response:", response);
          BookingComplete(amount);
        },
        theme: {
          color: "#3399cc",
        },
        prefill: {
          name: `${Forename + " "} ${Surname}`,
          email: PaxEmail || "",
          contact: PaxMobile || "",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment failed:", response);
        alert(
          `Payment failed! Reason: ${
            response.error.description || "Unknown error"
          }`
        );
      });
      paymentObject.open();
    }
  }, [
    prebookResponse,
    totalFare,
    //navigate,
    travellerDetails,
    fRequest,
    BookingComplete,
  ]);

  useEffect(() => {
    if (!bookedResponse) return;
    if (bookedResponse.StatusCode === "S0001") {
      const confirmationData = {
        ReservationId: bookedResponse?.ReservationId || null,
      };

      navigate("/booking-page-success", { state: confirmationData });
    } else {
      toast.error(
        "Your booking failed. Please contact support your ReservationReference is " +
          bookedResponse?.ReservationReference
      );
    }
  }, [bookedResponse, navigate, totalFare, travellerDetails]);
  const handleProceedToPay = () => {
    handlePreBook();
    //navigate("/booking-page-success");
  };

  const handlePreBook = () => {
    const reservationRequest = makeBookingRequest(totalFare);
    dispatch(fetchFlightPreBook(reservationRequest));
  };

  return (
    <div id="main-wrapper">
      <ToastContainer />
      <Header02 />

      <section
        className="pt-4 gray-simple position-relative"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          {/* Booking Stepper */}
          <div className="row mb-4">
            <div className="col-12">
              <div id="stepper" className="bs-stepper stepper-outline">
                <div className="bs-stepper-header">
                  <div className="step completed">
                    <div className="text-center">
                      <button className="step-trigger mb-0">
                        <span className="bs-stepper-circle">1</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">
                        Flight Review
                      </h6>
                    </div>
                  </div>
                  <div className="line" />
                  <div className="step completed">
                    <div className="text-center">
                      <button className="step-trigger mb-0">
                        <span className="bs-stepper-circle">2</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">
                        Seat Selection
                      </h6>
                    </div>
                  </div>
                  <div className="line" />
                  <div className="step active">
                    <div className="text-center">
                      <button className="step-trigger mb-0">
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
          </div>

          <div className="row">
            {/* Left Column - Payment Options */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="card p-4 mb-4">
                <h4 className="mb-4">Flight Details</h4>
                <div className="flights-list-item">
                  <div className="d-flex align-items-center justify-content-between">
                    {flightResults &&
                      flightResults.Segments &&
                      flightResults.Segments.map((seg, sIdx) => (
                        <>
                          <div className="flights-list-item d-block">
                            {/* Airline Info */}
                            <div className="airline-section">
                              <img
                                className="img-fluid"
                                src={
                                  "https://cdn.sriggle.tech/media/airlinelogo/" +
                                  seg.Segments[0]?.Airline?.AirlineCode +
                                  ".png"
                                }
                                width={35}
                                alt="Airline Logo"
                              />
                              <div>
                                <div className="text-dark fw-medium">
                                  {" "}
                                  {seg.AirlineName}
                                </div>
                                <div className="text-sm text-muted">
                                  {seg.Segments[0]?.Airline?.AirlineCode +
                                    " " +
                                    seg.Segments[0]?.Airline?.FlightNumber +
                                    " " +
                                    seg.Segments[0]?.Airline?.FareClass}
                                </div>
                              </div>
                            </div>

                            {/* Flight Info */}
                            <div className="flight-info-section">
                              {/* Departure */}
                              <div className="time-airport-group">
                                <div className="text-dark fw-bold">
                                  {format(
                                    new Date(seg.Segments[0]?.Origin?.DepTime),
                                    "HH:mm"
                                  )}
                                </div>
                                <div className="text-muted text-sm">
                                  {
                                    seg.Segments[0]?.Origin?.Airport
                                      ?.AirportCode
                                  }
                                </div>
                              </div>

                              {/* Duration & Stops */}
                              <div className="flight-duration-section">
                                <div className="text-dark small">
                                  {seg.TotalDuraionTime}
                                </div>
                                <div className="flightLine"></div>
                                <div className="text-muted small">
                                  {seg.Stops === 0
                                    ? "Direct"
                                    : seg.Stops
                                    ? `${seg.Stops} Stop${
                                        seg.Stops > 1 ? "s" : ""
                                      }`
                                    : "Direct"}
                                </div>
                              </div>

                              {/* Arrival */}
                              <div className="time-airport-group">
                                <div className="text-dark fw-bold">
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
                                </div>
                                <div className="text-muted text-sm">
                                  {
                                    seg.Segments[seg.Segments.length - 1]
                                      ?.Destination?.Airport?.AirportCode
                                  }
                                </div>
                                <div className="text-dark">
                                  {seg.Segments[0]?.NoOfSeatAvailable &&
                                    seg.Segments[0]?.NoOfSeatAvailable !== "" &&
                                    seg.Segments[0]?.NoOfSeatAvailable < 15 && (
                                      <div className="small text-danger">
                                        {seg.Segments[0]?.NoOfSeatAvailable}
                                        {" Seat available"}
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
                {/* Payment Methods */}
                {/* {[
                  { id: "upi", name: "UPI", icon: UPI },
                  { id: "debit", name: "Debit Card", icon: creditcard },
                  { id: "rupay", name: "RuPay Debit Card", icon: rupay },
                  { id: "credit", name: "Credit Card", icon: creditcard },
                  { id: "netbanking", name: "Netbanking", icon: Netbanking },
                  { id: "wallets", name: "Wallets", icon: wallets },
                ].map((method) => (
                  <div
                    key={method.id}
                    className={`payment-option mb-3 p-3 border rounded d-flex align-items-center justify-content-between ${
                      selectedPayment === method.id ? "selected" : ""
                    }`}
                    onClick={() => handlePaymentSelection(method.id)}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={method.icon}
                        alt={method.name}
                        className="payment-icon me-3"
                      />
                      <label className="form-check-label mb-0">
                        <strong>{method.name}</strong>
                      </label>
                    </div>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="payment"
                      checked={selectedPayment === method.id}
                      onChange={() => {}}
                    />
                  </div>
                ))} */}
              </div>
            </div>

            {/* Right Column - Fare Summary */}
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="sticky-wrapper">
                <div className="fare-summary-wrapper sticky-summary">
                  <div className="card p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="mb-0">Fare Summary</h4>
                      <button className="btn btn-link">Details</button>
                    </div>

                    <div className="fare-details">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Base Fare </span>
                        <span>
                          ₹
                          {flightResults.OfferedFare.toFixed(
                            2
                          ).toLocaleString()}
                        </span>
                      </div>
                      {TaxSummary &&
                        TaxSummary.length > 0 &&
                        TaxSummary.map((tax, index) => (
                          <>
                            <div className="d-flex justify-content-between mb-2">
                              <span>{tax.TaxName}</span>
                              <span>
                                ₹{tax.TaxValue.toFixed(2).toLocaleString()}
                              </span>
                            </div>
                          </>
                        ))}

                      {/* {fares.seatCharges > 0 && (
                        <div className="d-flex justify-content-between mb-2">
                          <span>Seat Charges</span>
                          <span>₹{fares.seatCharges.toFixed(2)}</span>
                        </div>
                      )} */}

                      <div className="d-flex justify-content-between mt-3 pt-3 border-top">
                        <strong>Total Amount</strong>
                        <strong>
                          ₹{totalFare.toFixed(2).toLocaleString()}
                        </strong>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-100 mt-4"
                      onClick={handleProceedToPay}
                    >
                      Proceed to Pay
                    </button>

                    <div className="text-center mt-3">
                      <small className="text-muted">
                        By clicking on 'Proceed to Pay', I agree to the
                        <Link to="#" className="ms-1">
                          Terms & Conditions
                        </Link>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterDark />

      <style jsx>{`
        /* Card Styles */
        .card {
          border: none;
          border-radius: 16px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(to bottom, #ffffff, #fafafa);
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
        }

        /* Payment Options Styles */
        .payment-option {
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent !important;
          border-radius: 12px !important;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .payment-option:hover {
          background-color: #f8f9fa;
          border-color: #cd2c22 !important;
          transform: translateX(4px);
        }

        .payment-icon {
          width: 32px;
          height: 32px;
          object-fit: contain;
          padding: 4px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .payment-option:hover .payment-icon {
          transform: scale(1.1);
        }

        .payment-option input[type="radio"] {
          cursor: pointer;
          margin: 0;
          width: 20px;
          height: 20px;
          border: 2px solid #dee2e6;
          transition: all 0.2s ease;
        }

        .payment-option input[type="radio"]:checked {
          border-color: #cd2c22;
          background-color: #cd2c22;
          box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
        }

        /* Fare Summary Styles */
        .fare-details {
          font-size: 0.95rem;
          color: #495057;
        }

        .fare-details .d-flex {
          padding: 8px 0;
          transition: background-color 0.2s ease;
        }

        .fare-details .d-flex:hover {
          background-color: rgba(0, 0, 0, 0.02);
          border-radius: 8px;
        }

        .text-success {
          color: #198754 !important;
          font-weight: 500;
        }

        /* Button Styles */
        .btn-primary {
          padding: 12px 24px;
          font-weight: 600;
          border-radius: 12px;
          background: linear-gradient(45deg, #cd2c22, #cd2c22);
          border: none;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.2);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 110, 253, 0.3);
          background: linear-gradient(45deg, #cd2c22, #cd2c22);
        }

        .btn-link {
          color: #cd2c22;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .btn-link:hover {
          background-color: rgba(13, 110, 253, 0.1);
        }

        /* Header Styles */
        h4 {
          color: #212529;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        /* Total Amount Highlight */
        .border-top {
          border-top: 2px dashed rgba(0, 0, 0, 0.1) !important;
          margin-top: 16px;
          padding-top: 16px;
        }

        .border-top strong {
          font-size: 1.1rem;
          color: #212529;
        }

        /* Cancellation Policy Link */
        .text-muted a {
          color: #cd2c22;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .text-muted a:hover {
          color: #cd2c22;
          text-decoration: underline;
        }

        /* Section Background */
        .gray-simple {
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
          min-height: 100vh;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .card {
            margin-bottom: 1.5rem;
          }

          .payment-option {
            padding: 1rem !important;
          }

          .btn-primary {
            padding: 10px 20px;
          }

          .payment-icon {
            width: 28px;
            height: 28px;
          }
        }

        /* Loading State Styles */
        .btn-primary.loading {
          position: relative;
          color: transparent;
        }

        .btn-primary.loading::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #ffffff;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Tooltip Styles */
        [data-tooltip] {
          position: relative;
        }

        [data-tooltip]:hover::before {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 0.8rem;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          animation: fadeIn 0.2s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translate(-50%, -8px);
          }
        }

        .sticky-wrapper {
          position: relative;
          height: 100%;
        }

        .sticky-summary {
          position: sticky;
          top: 100px;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .sticky-summary .card {
          margin-bottom: 0;
          background: #fff;
          height: auto;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }

        /* Custom scrollbar */
        .sticky-summary .card::-webkit-scrollbar {
          width: 6px;
        }

        .sticky-summary .card::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .sticky-summary .card::-webkit-scrollbar-thumb {
          background: #cd2c22;
          border-radius: 10px;
        }

        .sticky-summary .card::-webkit-scrollbar-thumb:hover {
          background: #b31b1b;
        }

        /* Responsive design */
        @media (max-width: 991px) {
          .sticky-wrapper {
            height: auto;
          }

          .sticky-summary {
            position: relative;
            top: 0;
          }

          .sticky-summary .card {
            max-height: none;
          }
        }

        /* Enhanced shadow effect */
        .sticky-summary .card {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background: linear-gradient(to bottom, #ffffff, #fafafa);
        }

        .sticky-summary:hover .card {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default FlightBookingPage02;
