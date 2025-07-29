import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBusBoardingPoints, selectBusAuthData, selectBusSearchList } from "../../store/Selectors/busSelectors";
import { fetchBusBlock } from "../../store/Actions/busActions";
import Header02 from "../header02";
import FooterDark from "../footer-dark";
import { bus } from "../../assets/images";
import * as Yup from "yup";

export const BusBookingPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const boardingPoints = useSelector(selectBusBoardingPoints);
  const authData = useSelector(selectBusAuthData);
  const searchList = useSelector(selectBusSearchList);

  // Bus data from navigation state or localStorage
  const busData =
    location.state?.busData ||
    JSON.parse(localStorage.getItem("selectedBusData") || "{}");

  // State for form data
  const [selectedSeat, setSelectedSeat] = useState("DU3");
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState(
    localStorage.getItem("selectedBoardingPoint") || ""
  );
  const [selectedDroppingPoint, setSelectedDroppingPoint] = useState(
    localStorage.getItem("selectedDroppingPoint") || ""
  );
  const [showGSTDetails, setShowGSTDetails] = useState(false);
  const [travelerDetails, setTravelerDetails] = useState({
    title: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    idType: "",
    idNumber: "",
  });
  const [contactDetails, setContactDetails] = useState({
    email: "",
    mobile: "",
    gstNumber: "",
    companyName: "",
  });
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    city: "",
    country: "",
    pincode: "",
    state: "",
  });

  // Add this object for validation and placeholder logic
  const idValidationPatterns = {
    "pan-card": {
      regex: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      maxLength: 10,
      placeholder: "ABCDE1234F",
      description: "10 characters, e.g. ABCDE1234F",
      filter: v => v.replace(/[^A-Z0-9]/gi, "").toUpperCase(),
    },
    "voter-id": {
      regex: /^[A-Z]{3}[0-9]{7}$/,
      maxLength: 10,
      placeholder: "ABC1234567",
      description: "10 characters, e.g. ABC1234567",
      filter: v => v.replace(/[^A-Z0-9]/gi, "").toUpperCase(),
    },
    "passport": {
      regex: /^[A-PR-WYa-pr-wy][0-9]{7}$/,
      maxLength: 8,
      placeholder: "A1234567",
      description: "8 characters, e.g. A1234567",
      filter: v => v.replace(/[^A-Z0-9]/gi, "").toUpperCase(),
    },
    "aadhar-card": {
      regex: /^\d{4}\s?\d{4}\s?\d{4}$/,
      maxLength: 14, // 12 digits + 2 spaces
      placeholder: "1234 5678 9012",
      description: "12 digits with optional spaces, e.g. 1234 5678 9012",
      filter: v => {
        // Remove all non-digits and non-spaces, then format with spaces
        const cleaned = v.replace(/[^0-9\s]/g, "");
        const digits = cleaned.replace(/\s/g, "");
        if (digits.length <= 4) return digits;
        if (digits.length <= 8) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
        return `${digits.slice(0, 4)} ${digits.slice(4, 8)} ${digits.slice(8, 12)}`;
      },
    },
  };

  // Add the validateId function
  const validateId = (id) => {
    const aadharRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
    const passportRegex = /^[A-PR-WYa-pr-wy][0-9]{7}$/;
    const voterIdRegex = /^[A-Z]{3}[0-9]{7}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (aadharRegex.test(id)) return "Aadhaar";
    if (passportRegex.test(id)) return "Passport";
    if (voterIdRegex.test(id)) return "Voter ID";
    if (panRegex.test(id)) return "PAN";
    return "Invalid ID format";
  };

  // Add this function to handle input and enforce pattern
  const handleIdNumberChange = (e) => {
    const { value } = e.target;
    const { idType } = travelerDetails;
    if (!idType) return;
    const pattern = idValidationPatterns[idType];
    let filtered = pattern.filter(value);
    if (filtered.length > pattern.maxLength) {
      filtered = filtered.slice(0, pattern.maxLength);
    }
    setTravelerDetails({
      ...travelerDetails,
      idNumber: filtered,
    });
  };

  // Format time helper
  const formatTime = (timeString) => {
    if (!timeString) return "";
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Calculate duration
  const getDuration = (departure, arrival) => {
    if (!departure || !arrival) return "";
    const dep = new Date(`2000-01-01T${departure}`);
    const arr = new Date(`2000-01-01T${arrival}`);
    const diff = arr - dep;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    travelerDetails: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      firstName: Yup.string()
        .required("First name is required")
        .matches(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be less than 50 characters"),
      lastName: Yup.string()
        .required("Last name is required")
        .matches(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be less than 50 characters"),
      age: Yup.number()
        .typeError("Age must be a number")
        .required("Age is required")
        .min(1, "Age must be at least 1")
        .max(120, "Age must be less than 120"),
      gender: Yup.string().required("Gender is required"),
      idType: Yup.string().required("ID Type is required"),
      idNumber: Yup.string()
        .required("ID Number is required")
        .test("idNumber-format", "Invalid ID Number format", function (value) {
          const { idType } = this.parent;
          if (!idType || !value) return false;
          const pattern = idValidationPatterns[idType];
          return pattern && pattern.regex.test(value);
        })
        .test("idNumber-validation", "Invalid ID format", function (value) {
          if (!value) return true;
          const validationResult = validateId(value);
          return validationResult !== "Invalid ID format";
        }),
    }),
    contactDetails: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
      mobile: Yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
        .test("mobile-format", "Mobile number must start with 6, 7, 8, or 9", function (value) {
          if (!value) return false;
          return /^[6-9]\d{9}$/.test(value); // Indian mobile number validation
        })
        .test("mobile-length", "Mobile number must be exactly 10 digits", function (value) {
          if (!value) return false;
          return value.length === 10;
        }),
      gstNumber: Yup.string().when("$showGSTDetails", {
        is: true,
        then: (schema) =>
          schema
            .matches(/^$|^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST number format"),
        otherwise: (schema) => schema,
      }),
      companyName: Yup.string()
        .when("$showGSTDetails", {
          is: true,
          then: (schema) => schema.min(2, "Company name must be at least 2 characters"),
          otherwise: (schema) => schema,
        }),
    }),
    addressDetails: Yup.object().shape({
      address: Yup.string()
        .required("Address is required")
        .min(10, "Address must be at least 10 characters")
        .max(200, "Address must be less than 200 characters"),
      city: Yup.string()
        .required("City is required")
        .matches(/^[a-zA-Z\s]+$/, "City can only contain letters and spaces")
        .min(2, "City must be at least 2 characters")
        .max(50, "City must be less than 50 characters"),
      country: Yup.string()
        .required("Country is required")
        .matches(/^[a-zA-Z\s]+$/, "Country can only contain letters and spaces")
        .min(2, "Country must be at least 2 characters")
        .max(50, "Country must be less than 50 characters"),
      pincode: Yup.string()
        .required("Pincode is required")
        .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
        .test("pincode-range", "Invalid pincode", function (value) {
          if (!value) return false;
          const pincode = parseInt(value);
          return pincode >= 100000 && pincode <= 999999;
        }),
      state: Yup.string().required("State is required"),
    }),
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handlers for form fields
  const handleTravelerChange = (field, value) => {
    setTravelerDetails((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "idType" ? { idNumber: "" } : {}),
    }));
    setErrors((prev) => ({ ...prev, [`travelerDetails.${field}`]: undefined }));
  };

  const handleAddressChange = (field, value) => {
    setAddressDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [`addressDetails.${field}`]: undefined }));
  };

  const handleContactChange = (field, value) => {
    setContactDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [`contactDetails.${field}`]: undefined }));
  };

  // Helper function to format block request data
  const formatBlockRequest = (formData, selectedSeats, boardingPointId, droppingPointId) => {
    const { TokenId, EndUserIp } = authData;
    const searchParams = JSON.parse(localStorage.getItem("busSearchparams") || "{}");
    const busData = location.state?.busData || JSON.parse(localStorage.getItem("selectedBusData") || "{}");
    
    // Get original seat layout data from localStorage
    const originalSeatLayout = JSON.parse(localStorage.getItem("originalSeatLayoutData") || "{}");
    const seatLayout = JSON.parse(localStorage.getItem("seatLayoutData") || "{}");
    
    console.log("Original seat layout data:", originalSeatLayout);
    console.log("Simplified seat layout data:", seatLayout);
    
    const passengers = selectedSeats.map((seatLabel, index) => {
      const isLeadPassenger = index === 0;
      
      // Try to find the original seat data from the API response
      let originalSeatData = null;
      if (originalSeatLayout.SeatLayout && originalSeatLayout.SeatLayout.SeatDetails) {
        console.log(`Looking for seat: ${seatLabel}`);
        console.log("Available seats in original data:");
        
        // Search through the original seat layout to find the matching seat
        for (let rowIndex = 0; rowIndex < originalSeatLayout.SeatLayout.SeatDetails.length; rowIndex++) {
          const row = originalSeatLayout.SeatLayout.SeatDetails[rowIndex];
          if (Array.isArray(row)) {
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
              const seat = row[colIndex];
              if (seat) {
                const seatName = seat.SeatNumber || seat.SeatName || `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;
                console.log(`  Seat at [${rowIndex}][${colIndex}]: ${seatName} (${seat.SeatName || seat.SeatNumber})`);
                if (seatName === seatLabel) {
                  originalSeatData = seat;
                  console.log(`Found matching seat:`, seat);
                  break;
                }
              }
            }
          }
          if (originalSeatData) break;
        }
        
        if (!originalSeatData) {
          console.log(`Could not find original seat data for: ${seatLabel}`);
        }
      }
      
      // Fallback to simplified seat data if original not found
      const seatData = seatLayout.seats?.find(s => s.label === seatLabel);
      
      console.log(`Seat ${seatLabel} - Original data:`, originalSeatData);
      console.log(`Seat ${seatLabel} - Simplified data:`, seatData);
      
      const seatStructure = {
        ColumnNo: originalSeatData?.ColumnNo || seatData?.columnNo || "001",
        Height: originalSeatData?.Height || seatData?.height || 1,
        IsLadiesSeat: originalSeatData?.IsLadiesSeat || seatData?.isLadiesSeat || false,
        IsMalesSeat: originalSeatData?.IsMalesSeat || seatData?.isMalesSeat || false,
        IsUpper: originalSeatData?.IsUpper || seatData?.isUpper || false,
        RowNo: originalSeatData?.RowNo || seatData?.rowNo || "001",
        SeatIndex: originalSeatData?.SeatIndex || seatData?.seatIndex || seatLabel,
        SeatName: seatLabel,
        SeatStatus: true,
        SeatType: originalSeatData?.SeatType || seatData?.seatType || 1,
        Width: originalSeatData?.Width || seatData?.width || 1,
        // Add SeatFare and PublishedPrice directly on the seat object
        SeatFare: originalSeatData?.SeatFare || seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
        PublishedPrice: originalSeatData?.PublishedPrice || seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
        Price: originalSeatData?.Price || {
          CurrencyCode: "INR",
          BasePrice: seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
          Tax: 0.0,
          OtherCharges: 0.0,
          Discount: 0.0,
          PublishedPrice: seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
          PublishedPriceRoundedOff: seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
          OfferedPrice: seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
          OfferedPriceRoundedOff: seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
          AgentCommission: 0.0,
          AgentMarkUp: 0.0,
          TDS: 0.0,
          GST: {
            CGSTAmount: 0.0,
            CGSTRate: 0.0,
            CessAmount: 0.0,
            CessRate: 0.0,
            IGSTAmount: 0.0,
            IGSTRate: 0.0,
            SGSTAmount: 0.0,
            SGSTRate: 0.0,
            TaxableAmount: 0.0
          }
        }
      };
      
      console.log(`Final seat structure for ${seatLabel}:`, seatStructure);
      
      return {
        LeadPassenger: isLeadPassenger,
        PassengerId: index,
        Title: formData.travelerDetails.title,
        Address: isLeadPassenger ? formData.addressDetails.address : null,
        Age: parseInt(formData.travelerDetails.age),
        Email: formData.contactDetails.email,
        FirstName: formData.travelerDetails.firstName,
        Gender: formData.travelerDetails.gender === "Male" ? 1 : 2,
        IdNumber: formData.travelerDetails.idNumber || null,
        IdType: formData.travelerDetails.idType || null,
        LastName: formData.travelerDetails.lastName,
        Phoneno: formData.contactDetails.mobile,
        Seat: seatStructure
      };
    });

    return {
      EndUserIp: EndUserIp,
      ResultIndex: busData.ResultIndex || searchParams.ResultIndex,
      TraceId: searchList?.BusSearchResult?.TraceId,
      TokenId: TokenId,
      BoardingPointId: boardingPointId,
      DroppingPointId: droppingPointId,
      Passenger: passengers
    };
  };

  // Updated handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await validationSchema.validate(
        { travelerDetails, contactDetails, addressDetails },
        { abortEarly: false, context: { showGSTDetails } }
      );
      setErrors({});
      
      // Get selected seats from localStorage
      const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats") || "[]");
      
      if (selectedSeats.length === 0) {
        alert("Please select at least one seat before proceeding.");
        setLoading(false);
        return;
      }

      // Get boarding and dropping point IDs from boarding points data
      console.log("Selected boarding point:", selectedBoardingPoint);
      console.log("Selected dropping point:", selectedDroppingPoint);
      console.log("Bus data boarding points:", busData.BoardingPointsDetails);
      console.log("Bus data dropping points:", busData.DroppingPointsDetails);
      
      const boardingPointId = selectedBoardingPoint ? 
        busData.BoardingPointsDetails?.find(p => p.CityPointName === selectedBoardingPoint)?.CityPointIndex : null;
      const droppingPointId = selectedDroppingPoint ? 
        busData.DroppingPointsDetails?.find(p => p.CityPointName === selectedDroppingPoint)?.CityPointIndex : null;

      console.log("Found boarding point ID:", boardingPointId);
      console.log("Found dropping point ID:", droppingPointId);

      if (!boardingPointId || !droppingPointId) {
        console.log("Missing boarding or dropping point ID");
        console.log("Boarding point ID:", boardingPointId);
        console.log("Dropping point ID:", droppingPointId);
        alert("Please select both boarding and dropping points.");
        setLoading(false);
        return;
      }

      // Format the block request
      const blockRequestData = formatBlockRequest(
        { travelerDetails, contactDetails, addressDetails },
        selectedSeats,
        boardingPointId,
        droppingPointId
      );

      console.log("Block request data:", blockRequestData);

      // Call the block API
      const result = await dispatch(fetchBusBlock(blockRequestData));
      
      if (result.payload) {
        console.log("Block successful:", result.payload);
        // Store block response for payment page
        localStorage.setItem("blockResponse", JSON.stringify(result.payload));
        alert("Seats blocked successfully! Proceeding to payment...");
        // Navigate to payment page
        navigate('/bus-payment', { 
          state: { 
            blockData: result.payload,
            busData: busData,
            formData: { travelerDetails, contactDetails, addressDetails }
          } 
        });
      } else {
        alert("Failed to block seats. Please try again.");
      }
      
    } catch (err) {
      if (err.inner) {
        const formErrors = {};
        err.inner.forEach((error) => {
          formErrors[error.path] = error.message;
        });
        setErrors(formErrors);
        
        console.log("=== VALIDATION ERRORS ===");
        console.log("Errors:", formErrors);
        console.log("Raw validation error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
      </div> */}

      {/* Header */}
      <Header02 />

      <section className="pt-4 pb-4 gray-simple position-relative">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/bus-search" className="text-decoration-none">
                  Bus
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {busData.OriginName || "Delhi"} to{" "}
                {busData.DestinationName || "Kanpur"}
              </li>
            </ol>
          </nav>

          {/* First Container - Bus Details and Journey Info */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row">
                    {/* Left Side - Bus Details */}
                    <div className="col-md-6">
                      <div className="bus-details">
                        <h5 className="fw-bold mb-2">
                          {busData.TravelsName || "Delhi Express"}
                        </h5>
                        <p className="text-muted mb-3">
                          {busData.BusType || "A/C Sleeper"} •{" "}
                          {busData.BusCondition || "Non-AC"}
                        </p>

                        {/* Boarding, Journey Time, and Dropping Details - Horizontal */}
                        <div className="row">
                          <div className="col-md-4">
                            <div className="text-center">
                              <div className="fw-bold text-primary">
                                {formatTime(busData.DepartureTime) ||
                                  "06:00 AM"}
                              </div>
                              <small className="text-muted">
                                {busData.DepartureDate || "15 Jan 2024"}
                              </small>
                              <div className="mt-1">
                                <small className="text-muted">
                                  {busData.OriginName || "Delhi"}
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <div className="fw-bold text-info">
                                {getDuration(
                                  busData.DepartureTime,
                                  busData.ArrivalTime
                                ) || "8h 30m"}
                              </div>
                              <small className="text-muted">Journey Time</small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <div className="fw-bold text-success">
                                {formatTime(busData.ArrivalTime) || "02:30 PM"}
                              </div>
                              <small className="text-muted">
                                {busData.ArrivalDate || "15 Jan 2024"}
                              </small>
                              <div className="mt-1">
                                <small className="text-muted">
                                  {busData.DestinationName || "Kanpur"}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Seat Information */}
                    <div className="col-md-6">
                      <div className="seat-info text-end">
                        <div className="seat-display">
                          <h6 className="text-primary mb-2">Selected Seat</h6>
                          <div className="seat-number">
                            <span className="badge bg-primary fs-5 px-3 py-2">
                              {selectedSeat}
                            </span>
                          </div>
                          <p className="text-muted mt-2">
                            Seat Index: {selectedSeat}
                          </p>
                        </div>
                        
                        {/* Boarding and Dropping Points */}
                        {(selectedBoardingPoint || selectedDroppingPoint) && (
                          <div className="boarding-dropping-info mt-3">
                            <h6 className="text-success mb-2">Selected Points</h6>
                            {selectedBoardingPoint && (
                              <div className="mb-2">
                                <small className="text-muted">Boarding Point:</small>
                                <div className="fw-bold text-success">{selectedBoardingPoint}</div>
                              </div>
                            )}
                            {selectedDroppingPoint && (
                              <div>
                                <small className="text-muted">Dropping Point:</small>
                                <div className="fw-bold text-success">{selectedDroppingPoint}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Container - Traveler Details */}
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="fas fa-user me-2"></i>
                      Traveler Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Title *</label>
                          <select
                            className="form-select"
                            value={travelerDetails.title}
                            onChange={e => handleTravelerChange("title", e.target.value)}
                          >
                            <option value="">Select</option>
                            <option value="mr">Mr</option>
                            <option value="mrs">Mrs</option>
                            <option value="miss">Miss</option>
                          </select>
                          {errors["travelerDetails.title"] && (
                            <div className="text-danger">{errors["travelerDetails.title"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={travelerDetails.firstName}
                            onChange={e => handleTravelerChange("firstName", e.target.value)}
                            placeholder="Enter first name"
                          />
                          {errors["travelerDetails.firstName"] && (
                            <div className="text-danger">{errors["travelerDetails.firstName"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={travelerDetails.lastName}
                            onChange={e => handleTravelerChange("lastName", e.target.value)}
                            placeholder="Enter last name"
                          />
                          {errors["travelerDetails.lastName"] && (
                            <div className="text-danger">{errors["travelerDetails.lastName"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Age *</label>
                          <input
                            type="number"
                            className="form-control"
                            value={travelerDetails.age}
                            onChange={e => handleTravelerChange("age", e.target.value)}
                            placeholder="Age"
                            min="1"
                            max="120"
                          />
                          {errors["travelerDetails.age"] && (
                            <div className="text-danger">{errors["travelerDetails.age"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Gender *</label>
                          <select
                            className="form-select"
                            value={travelerDetails.gender}
                            onChange={e => handleTravelerChange("gender", e.target.value)}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          {errors["travelerDetails.gender"] && (
                            <div className="text-danger">{errors["travelerDetails.gender"]}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="form-label">ID Type *</label>
                          <select
                            className="form-select"
                            value={travelerDetails.idType}
                            onChange={e => handleTravelerChange("idType", e.target.value)}
                          >
                            <option value="">Select ID Type</option>
                            <option value="pan-card">PAN Card</option>
                            <option value="voter-id">Voter ID Card</option>
                            <option value="passport">Passport</option>
                            <option value="aadhar-card">Aadhar Card</option>
                          </select>
                          {errors["travelerDetails.idType"] && (
                            <div className="text-danger">{errors["travelerDetails.idType"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            ID Number *
                            {travelerDetails.idType &&
                              idValidationPatterns[travelerDetails.idType] && (
                                <span className="text-muted ms-2" style={{ fontSize: "0.8em" }}>
                                  ({idValidationPatterns[travelerDetails.idType].description})
                                </span>
                              )}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={travelerDetails.idNumber}
                            onChange={handleIdNumberChange}
                            placeholder={
                              travelerDetails.idType
                                ? idValidationPatterns[travelerDetails.idType].placeholder
                                : "Enter ID number"
                            }
                            maxLength={
                              travelerDetails.idType
                                ? idValidationPatterns[travelerDetails.idType].maxLength
                                : undefined
                            }
                            disabled={!travelerDetails.idType}
                          />
                          {errors["travelerDetails.idNumber"] && (
                            <div className="text-danger">{errors["travelerDetails.idNumber"]}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Container - Contact Details */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="fas fa-phone me-2"></i>
                      Contact Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email ID *</label>
                          <input
                            type="email"
                            className="form-control"
                            value={contactDetails.email}
                            onChange={(e) =>
                              handleContactChange("email", e.target.value)
                            }
                            placeholder="Enter email address"
                          />
                          {errors["contactDetails.email"] && (
                            <div className="text-danger">{errors["contactDetails.email"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Mobile Number *</label>
                          <input
                            type="tel"
                            className="form-control"
                            value={contactDetails.mobile}
                            onChange={(e) =>
                              handleContactChange("mobile", e.target.value)
                            }
                            placeholder="Enter mobile number"
                          />
                          {errors["contactDetails.mobile"] && (
                            <div className="text-danger">{errors["contactDetails.mobile"]}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* GST Details Toggle */}
                    <div className="mb-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gstToggle"
                          checked={showGSTDetails}
                          onChange={(e) => setShowGSTDetails(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="gstToggle">
                          Add GST Details (Optional)
                        </label>
                      </div>
                    </div>

                    {showGSTDetails && (
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">GST Number</label>
                            <input
                              type="text"
                              className="form-control"
                              value={contactDetails.gstNumber}
                              onChange={(e) =>
                                handleContactChange("gstNumber", e.target.value)
                              }
                              placeholder="Enter GST number"
                            />
                            {errors["contactDetails.gstNumber"] && (
                              <div className="text-danger">{errors["contactDetails.gstNumber"]}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={contactDetails.companyName}
                              onChange={(e) =>
                                handleContactChange("companyName", e.target.value)
                              }
                              placeholder="Enter company name"
                            />
                            {errors["contactDetails.companyName"] && (
                              <div className="text-danger">{errors["contactDetails.companyName"]}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Container - Address Details */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Address Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Address *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={addressDetails.address}
                            onChange={e => handleAddressChange("address", e.target.value)}
                            placeholder="Enter address"
                          />
                          {errors["addressDetails.address"] && (
                            <div className="text-danger">{errors["addressDetails.address"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">State *</label>
                          <select
                            className="form-select"
                            value={addressDetails.state}
                            onChange={e => handleAddressChange("state", e.target.value)}
                          >
                            <option value="">Select State</option>
                            <option value="delhi">Delhi</option>
                            <option value="uttar-pradesh">Uttar Pradesh</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="tamil-nadu">Tamil Nadu</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="west-bengal">West Bengal</option>
                            <option value="rajasthan">Rajasthan</option>
                            <option value="madhya-pradesh">Madhya Pradesh</option>
                            <option value="bihar">Bihar</option>
                          </select>
                          {errors["addressDetails.state"] && (
                            <div className="text-danger">{errors["addressDetails.state"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Country *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={addressDetails.country}
                            onChange={e => handleAddressChange("country", e.target.value)}
                            placeholder="Enter country"
                          />
                          {errors["addressDetails.country"] && (
                            <div className="text-danger">{errors["addressDetails.country"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">City *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={addressDetails.city}
                            onChange={e => handleAddressChange("city", e.target.value)}
                            placeholder="Enter city"
                          />
                          {errors["addressDetails.city"] && (
                            <div className="text-danger">{errors["addressDetails.city"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Pincode *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={addressDetails.pincode}
                            onChange={e => handleAddressChange("pincode", e.target.value)}
                            placeholder="Enter pincode"
                          />
                          {errors["addressDetails.pincode"] && (
                            <div className="text-danger">{errors["addressDetails.pincode"]}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceed to Payment Button */}
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Blocking Seats...
                      </>
                    ) : (
                      "Proceed to Payment"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <FooterDark />
    </>
  );
};

export default BusBookingPage;
