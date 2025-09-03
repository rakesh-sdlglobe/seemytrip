import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBusBoardingPoints, selectBusAuthData, selectBusSearchList } from "../../store/Selectors/busSelectors";
import { fetchBusBlock } from "../../store/Actions/busActions";
import { getEncryptedItem, setEncryptedItem } from "../../utils/encryption";
import Header02 from "../header02";
import FooterDark from "../footer-dark";
import { bus } from "../../assets/images";
import * as Yup from "yup";

export const BusBookingPage = ({ isModal = false }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const boardingPoints = useSelector(selectBusBoardingPoints);
  const authData = useSelector(selectBusAuthData);
  const searchList = useSelector(selectBusSearchList);

  // Bus data from navigation state or localStorage
  const busData =
    location.state?.busData ||
    getEncryptedItem("selectedBusData") || {};

  // Check if bus data is available
  const isBusDataAvailable = busData && Object.keys(busData).length > 0;

  // State for form data
  const [selectedSeat, setSelectedSeat] = useState("DU3");
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState(
    getEncryptedItem("selectedBoardingPoint") || ""
  );
  const [selectedDroppingPoint, setSelectedDroppingPoint] = useState(
    getEncryptedItem("selectedDroppingPoint") || ""
  );
  const [showGSTDetails, setShowGSTDetails] = useState(false);
  
  // State for selected seats - make it reactive
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  // Initialize traveler details for each selected seat
  const [travelerDetails, setTravelerDetails] = useState({});
  
  // State for expanded traveler dropdown - initialize with all seats expanded
  const [expandedTraveler, setExpandedTraveler] = useState("all");

  // Load selected seats from localStorage on component mount
  useEffect(() => {
    const seatsFromStorage = getEncryptedItem("selectedSeats") || [];
    setSelectedSeats(seatsFromStorage);
    
    // Check seat layout data
    try {
      const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
      const originalSeatLayout = getEncryptedItem("originalSeatLayoutData") || {};
      
    } catch (error) {
      console.error('Error parsing seat layout data:', error);
    }
    
    // Initialize traveler details for each seat with automatic gender selection
    const initialDetails = {};
    seatsFromStorage.forEach((seatLabel) => {
      // Get seat data to check for gender restrictions
      let autoGender = "";
      try {
        const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
        const seatData = seatLayoutData.seats?.find(s => s.label === seatLabel);
        
        if (seatData) {
          // Check if seat is ladies-only
          if (seatData.isLadiesSeat === true || seatData.originalSeatInfo?.IsLadiesSeat === true) {
            autoGender = "female";

          }
          // Check if seat is males-only
          else if (seatData.isMalesSeat === true || seatData.originalSeatInfo?.IsMalesSeat === true) {
            autoGender = "male";

          }
        }
        
        // Also check original seat layout data
        const originalSeatLayout = getEncryptedItem("originalSeatLayoutData") || {};
        if (originalSeatLayout.SeatLayout && originalSeatLayout.SeatLayout.SeatDetails) {
          for (let rowIndex = 0; rowIndex < originalSeatLayout.SeatLayout.SeatDetails.length; rowIndex++) {
            const row = originalSeatLayout.SeatLayout.SeatDetails[rowIndex];
            if (Array.isArray(row)) {
              for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const seat = row[colIndex];
                if (seat) {
                  const seatName = seat.SeatNumber || seat.SeatName || `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;
                  if (seatName === seatLabel) {
                    if (seat.IsLadiesSeat === true) {
                      autoGender = "female";

                    } else if (seat.IsMalesSeat === true) {
                      autoGender = "male";

                    }
                    break;
                  }
                }
              }
            }
            if (autoGender) break;
          }
        }
      } catch (error) {
        console.error('Error checking seat gender restrictions:', error);
      }
      
      initialDetails[seatLabel] = {
        title: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: autoGender, // Set gender based on seat restrictions
      };
    });

    setTravelerDetails(initialDetails);
    
    // Set all seats as expanded by default
    if (seatsFromStorage.length > 0) {
      setExpandedTraveler("all");
    }
  }, []);

  // Update traveler details when selected seats change
  useEffect(() => {
    const newTravelerDetails = {};
    selectedSeats.forEach((seatLabel) => {
      // Get seat data to check for gender restrictions
      let autoGender = "";
      try {
        const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
        const seatData = seatLayoutData.seats?.find(s => s.label === seatLabel);
        
        if (seatData) {
          // Check if seat is ladies-only
          if (seatData.isLadiesSeat === true || seatData.originalSeatInfo?.IsLadiesSeat === true) {
            autoGender = "female";

          }
          // Check if seat is males-only
          else if (seatData.isMalesSeat === true || seatData.originalSeatInfo?.IsMalesSeat === true) {
            autoGender = "male";

          }
        }
        
        // Also check original seat layout data
        const originalSeatLayout = getEncryptedItem("originalSeatLayoutData") || {};
        if (originalSeatLayout.SeatLayout && originalSeatLayout.SeatLayout.SeatDetails) {
          for (let rowIndex = 0; rowIndex < originalSeatLayout.SeatLayout.SeatDetails.length; rowIndex++) {
            const row = originalSeatLayout.SeatLayout.SeatDetails[rowIndex];
            if (Array.isArray(row)) {
              for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const seat = row[colIndex];
                if (seat) {
                  const seatName = seat.SeatNumber || seat.SeatName || `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;
                  if (seatName === seatLabel) {
                    if (seat.IsLadiesSeat === true) {
                      autoGender = "female";

                    } else if (seat.IsMalesSeat === true) {
                      autoGender = "male";

                    }
                    break;
                  }
                }
              }
            }
            if (autoGender) break;
          }
        }
      } catch (error) {
        console.error('Error checking seat gender restrictions:', error);
      }
      
      // Preserve existing data if available, but override gender if seat has restrictions
      newTravelerDetails[seatLabel] = {
        title: travelerDetails[seatLabel]?.title || "",
        firstName: travelerDetails[seatLabel]?.firstName || "",
        lastName: travelerDetails[seatLabel]?.lastName || "",
        age: travelerDetails[seatLabel]?.age || "",
        gender: autoGender || travelerDetails[seatLabel]?.gender || "", // Use auto gender if available, otherwise preserve existing
      };
    });
    setTravelerDetails(newTravelerDetails);
  }, [selectedSeats]);
  
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



  // Format time helper
  const formatTime = (timeString) => {
    if (!timeString) return ""; // Return empty string instead of hardcoded fallback
    
    try {
      let time;
      
      // Check if it's already a full datetime string (ISO format)
      if (typeof timeString === 'string' && timeString.includes('T')) {
        // Handle full datetime format like "2025-08-04T06:00:00"
        time = new Date(timeString);
      } else if (typeof timeString === 'string' && timeString.includes(':')) {
        // Handle time-only format like "06:00"
        time = new Date(`2000-01-01T${timeString}`);
      } else {
        // Try to parse as is
        time = new Date(timeString);
      }
      
      // Check if date is valid
      if (isNaN(time.getTime())) {
        console.log('Invalid time format:', timeString);
        return ""; // Return empty string instead of hardcoded fallback
      }
      
      return time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      console.error('Error formatting time:', error, timeString);
      return ""; // Return empty string instead of hardcoded fallback
    }
  };

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    try {
      let date;
      
      // Check if it's already a full datetime string (ISO format)
      if (typeof dateString === 'string' && dateString.includes('T')) {
        // Handle full datetime format like "2025-08-04T06:00:00"
        date = new Date(dateString);
      } else {
        // Try to parse as is
        date = new Date(dateString);
      }
      
      if (isNaN(date.getTime())) {
        return "";
      }
      
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
        weekday: "short"
      });
    } catch (error) {
      console.error('Error formatting date:', error, dateString);
      return "";
    }
  };

  // Calculate duration - using the same approach as bus result page
  const getDuration = (departure, arrival) => {
    if (!departure || !arrival) {
      return "";
    }
    
    try {
      let startDate, endDate;
      
      // Handle full datetime format like "2025-08-04T06:00:00"
      if (typeof departure === 'string' && departure.includes('T')) {
        startDate = new Date(departure);
      } else {
        startDate = new Date(departure);
      }
      
      if (typeof arrival === 'string' && arrival.includes('T')) {
        endDate = new Date(arrival);
      } else {
        endDate = new Date(arrival);
      }
      
      // Check if dates are valid
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return "";
      }
      
      let diff = (endDate - startDate) / 1000;
      if (diff < 0) diff += 24 * 3600; // Handle next day arrival
      
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      
      return `${hours}h ${minutes}m`;
    } catch (error) {
      console.error('Error calculating duration:', error, { departure, arrival });
      return "";
    }
  };

  // Helper function to check seat gender restrictions
  const getSeatGenderRestriction = (seatLabel) => {
    try {
      const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
      const seatData = seatLayoutData.seats?.find(s => s.label === seatLabel);
      
      if (seatData) {
        // Check if seat is ladies-only
        if (seatData.isLadiesSeat === true || seatData.originalSeatInfo?.IsLadiesSeat === true) {
          return "female";
        }
        // Check if seat is males-only
        if (seatData.isMalesSeat === true || seatData.originalSeatInfo?.IsMalesSeat === true) {
          return "male";
        }
      }
      
      // Also check original seat layout data
      const originalSeatLayout = getEncryptedItem("originalSeatLayoutData") || {};
      if (originalSeatLayout.SeatLayout && originalSeatLayout.SeatLayout.SeatDetails) {
        for (let rowIndex = 0; rowIndex < originalSeatLayout.SeatLayout.SeatDetails.length; rowIndex++) {
          const row = originalSeatLayout.SeatLayout.SeatDetails[rowIndex];
          if (Array.isArray(row)) {
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
              const seat = row[colIndex];
              if (seat) {
                const seatName = seat.SeatNumber || seat.SeatName || `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;
                if (seatName === seatLabel) {
                  if (seat.IsLadiesSeat === true) {
                    return "female";
                  } else if (seat.IsMalesSeat === true) {
                    return "male";
                  }
                  break;
                }
              }
            }
          }
        }
      }
      
      return null; // No gender restriction
    } catch (error) {
      console.error('Error checking seat gender restrictions:', error);
      return null;
    }
  };

  // Format seat number to display properly (L1, U1, L2, U2, etc.)
  const formatSeatNumber = (seatLabel) => {
    if (!seatLabel) return "";
    
    // If seat label already has L or U prefix, return as is
    if (seatLabel.startsWith('L') || seatLabel.startsWith('U')) {
      return seatLabel;
    }
    
    // Get seat layout data from localStorage to determine deck
    try {
      const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
      const seatData = seatLayoutData.seats?.find(s => s.label === seatLabel);
      
      if (seatData) {
        // Use the isUpper property from stored seat data
        const deckPrefix = seatData.isUpper ? "U" : "L";
        return `${deckPrefix}${seatLabel}`;
      }
    } catch (error) {
      console.error('Error parsing seat layout data:', error);
    }
    
    // Fallback: Try to determine if it's upper or lower deck based on the number
    const seatNumber = parseInt(seatLabel);
    
    if (isNaN(seatNumber)) {
      return seatLabel; // Return original if not a number
    }
    
    // Assuming seats 1-20 are lower deck and 21+ are upper deck
    // Adjust this logic based on your actual seat layout
    if (seatNumber <= 20) {
      return `L${seatNumber}`;
    } else {
      return `U${seatNumber - 20}`;
    }
  };

  // Yup validation schema - create it dynamically based on selectedSeats
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      travelerDetails: Yup.object().shape(
        selectedSeats.reduce((acc, seatLabel) => {
          acc[seatLabel] = Yup.object().shape({
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
          });
          return acc;
        }, {})
      ),
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
  }, [selectedSeats]);

  // Error state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  // Handlers for form fields
  const handleTravelerChange = (seatLabel, field, value) => {
    setTravelerDetails(prev => {
      const newState = {
        ...prev,
        [seatLabel]: {
          ...prev[seatLabel],
          [field]: value,
        }
      };
      return newState;
    });
    
    setErrors((prev) => {
      const newErrors = { ...prev, [`travelerDetails.${seatLabel}.${field}`]: undefined };
      // If all errors are cleared, reset hasSubmitted
      if (Object.keys(newErrors).every(key => newErrors[key] === undefined)) {
        setHasSubmitted(false);
      }
      return newErrors;
    });
  };

  const handleAddressChange = (field, value) => {
    setAddressDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
    
    setErrors((prev) => {
      const newErrors = { ...prev, [`addressDetails.${field}`]: undefined };
      // If all errors are cleared, reset hasSubmitted
      if (Object.keys(newErrors).every(key => newErrors[key] === undefined)) {
        setHasSubmitted(false);
      }
      return newErrors;
    });
  };

  const handleContactChange = (field, value) => {
    setContactDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
    
    setErrors((prev) => {
      const newErrors = { ...prev, [`contactDetails.${field}`]: undefined };
      // If all errors are cleared, reset hasSubmitted
      if (Object.keys(newErrors).every(key => newErrors[key] === undefined)) {
        setHasSubmitted(false);
      }
      return newErrors;
    });
  };

  // Helper function to format block request data
  const formatBlockRequest = (formData, selectedSeats, boardingPointId, droppingPointId) => {
    const { TokenId, EndUserIp } = authData;
    const searchParams = getEncryptedItem("busSearchparams") || {};
    const busData = location.state?.busData || getEncryptedItem("selectedBusData") || {};
    
    // Get original seat layout data from localStorage
    const originalSeatLayout = getEncryptedItem("originalSeatLayoutData") || {};
    const seatLayout = getEncryptedItem("seatLayoutData") || {};

    const passengers = selectedSeats.map((seatLabel, index) => {
      const isLeadPassenger = index === 0;
      
      // Try to find the original seat data from the API response
      let originalSeatData = null;
      if (originalSeatLayout.SeatLayout && originalSeatLayout.SeatLayout.SeatDetails) {
        // Search through the original seat layout to find the matching seat
        for (let rowIndex = 0; rowIndex < originalSeatLayout.SeatLayout.SeatDetails.length; rowIndex++) {
          const row = originalSeatLayout.SeatLayout.SeatDetails[rowIndex];
          if (Array.isArray(row)) {
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
              const seat = row[colIndex];
              if (seat) {
                const seatName = seat.SeatNumber || seat.SeatName || `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;

                if (seatName === seatLabel) {
                  originalSeatData = seat;
                  break;
                }
              }
            }
          }
          if (originalSeatData) break;
        }
        
        if (!originalSeatData) {
          // Original seat data not found
        }
      }
      
      // Fallback to enhanced seat data if original not found
      const seatData = seatLayout.seats?.find(s => s.label === seatLabel);

      const seatStructure = {
        ColumnNo: originalSeatData?.ColumnNo || seatData?.columnNo || seatData?.seatInfo?.ColumnNo || "001",
        Height: originalSeatData?.Height || seatData?.height || seatData?.seatInfo?.Height || 1,
        IsLadiesSeat: originalSeatData?.IsLadiesSeat || seatData?.isLadiesSeat || seatData?.seatInfo?.IsLadiesSeat || false,
        IsMalesSeat: originalSeatData?.IsMalesSeat || seatData?.isMalesSeat || seatData?.seatInfo?.IsMalesSeat || false,
        IsUpper: originalSeatData?.IsUpper || seatData?.isUpper || seatData?.seatInfo?.IsUpper || false,
        RowNo: originalSeatData?.RowNo || seatData?.rowNo || seatData?.seatInfo?.RowNo || "001",
        SeatIndex: originalSeatData?.SeatIndex || seatData?.seatIndex || seatData?.seatInfo?.SeatIndex || seatLabel,
        SeatName: seatLabel,
        SeatStatus: true,
        SeatType: originalSeatData?.SeatType || seatData?.seatType || seatData?.seatInfo?.SeatType || 1,
        Width: originalSeatData?.Width || seatData?.width || seatData?.seatInfo?.Width || 1,
        // Use enhanced price data from seatData.seatInfo if available
        SeatFare: originalSeatData?.SeatFare || seatData?.SeatFare || seatData?.seatInfo?.SeatFare || seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
        PublishedPrice: originalSeatData?.PublishedPrice || seatData?.PublishedPrice || seatData?.seatInfo?.PublishedPrice || seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0,
        Price: originalSeatData?.Price || seatData?.seatInfo?.Price || {
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

      return {
        LeadPassenger: isLeadPassenger,
        PassengerId: index,
        Title: formData.travelerDetails[seatLabel].title,
        Address: isLeadPassenger ? formData.addressDetails.address : null,
        Age: parseInt(formData.travelerDetails[seatLabel].age),
        Email: formData.contactDetails.email,
        FirstName: formData.travelerDetails[seatLabel].firstName,
        Gender: formData.travelerDetails[seatLabel].gender === "male" ? 1 : 2,

        LastName: formData.travelerDetails[seatLabel].lastName,
        Phoneno: formData.contactDetails.mobile,
        Seat: seatStructure
      };
    });

    const blockRequest = {
      EndUserIp: EndUserIp,
      ResultIndex: busData.ResultIndex || searchParams.ResultIndex,
      TraceId: searchList?.BusSearchResult?.TraceId,
      TokenId: TokenId,
      BoardingPointId: boardingPointId,
      DroppingPointId: droppingPointId,
      Passenger: passengers
    };

    return blockRequest;
  };

  // Function to scroll to first error
  const scrollToFirstError = () => {
    // Wait for state update and DOM re-render
    setTimeout(() => {
      const firstErrorElement = document.querySelector('.text-danger');
      if (firstErrorElement) {
        const formSection = firstErrorElement.closest('.card');
        if (formSection) {
          formSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          // Add highlight effect
          formSection.style.border = '2px solid #dc3545';
          formSection.style.boxShadow = '0 0 10px rgba(220, 53, 69, 0.3)';
          setTimeout(() => {
            formSection.style.border = '';
            formSection.style.boxShadow = '';
          }, 3000);
        }
      }
    }, 100);
  };

  // Updated handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true); // Mark that form has been submitted
    setLoading(true);
    
    try {
      await validationSchema.validate(
        { travelerDetails, contactDetails, addressDetails },
        { abortEarly: false, context: { showGSTDetails } }
      );
      setErrors({});
      setHasSubmitted(false); // Reset submission flag on success
      
      if (selectedSeats.length === 0) {
        alert("Please select at least one seat before proceeding.");
        setLoading(false);
        return;
      }

      // Get boarding and dropping point IDs from boarding points data
      const boardingPointId = selectedBoardingPoint ? 
        busData.BoardingPointsDetails?.find(p => p.CityPointName === selectedBoardingPoint)?.CityPointIndex : null;
      const droppingPointId = selectedDroppingPoint ? 
        busData.DroppingPointsDetails?.find(p => p.CityPointName === selectedDroppingPoint)?.CityPointIndex : null;

      if (!boardingPointId || !droppingPointId) {
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



      // Store the block request data in localStorage for booking API
      setEncryptedItem("blockRequestData", blockRequestData);

      // Call the block API
      const result = await dispatch(fetchBusBlock(blockRequestData));

      if (result && result.BlockResult) {
        // Store block response for payment page
        setEncryptedItem("blockResponse", result);
        
        // Store block timestamp for validation
        setEncryptedItem("blockTimestamp", Date.now().toString());

        // Navigate immediately to payment page without any loading states
        setLoading(false); // Stop local loading first
        
        // Use React Router navigation with replace to prevent back navigation
        const stateData = {
          blockData: result,
          busData: busData,
          formData: { travelerDetails, contactDetails, addressDetails }
        };
        
              // Store state data in localStorage as backup
      setEncryptedItem("paymentPageState", stateData);
      
      // Store bus search list for booking details API
      if (searchList) {
        setEncryptedItem("busSearchList", searchList);
      }
        
        // Navigate immediately using React Router with replace
        navigate('/busBookingpayment', { 
          state: stateData,
          replace: true // Use replace to prevent back navigation
        });
        return; // Exit early to prevent further execution
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

        // Scroll to first error after setting errors
        scrollToFirstError();
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
      {!isModal && <Header02 />}

      <section className={`${isModal ? 'modal-section' : 'pt-5 pb-5 gray-simple position-relative'}`}>
        {!isBusDataAvailable ? (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="text-center py-5">
                  <div className="alert alert-warning" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <strong>No Bus Data Available</strong>
                    <p className="mb-0 mt-2">Please go back and select a bus to continue with booking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a 
                  href="/bus-list" 
                  className="text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();

                    // Force a page reload to ensure we get fresh data
                    window.location.href = '/bus-list';
                  }}
                >
                  <i className="fas fa-bus me-1"></i>
                  Bus Results
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <i className="fas fa-chevron-right mx-2 text-muted"></i>
                <i className="fas fa-user-edit me-1"></i>
                {busData.OriginName || ""} to{" "}
                {busData.DestinationName || ""}
              </li>
            </ol>
          </nav>

          {/* First Container - Bus Details and Journey Info */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm bus-ticket-card">
                <div className="card-body p-0">
                  {/* Bus Ticket Header */}
                  <div className="bus-ticket-header">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="operator-info">
                          <h4 className="operator-name mb-1">
                            {busData.TravelName || busData.TravelsName || ""}
                          </h4>
                          <p className="vehicle-type mb-0">
                            {busData.BusType || ""}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 text-end">
                        <div className="ticket-codes">
                          <div className="codes mb-2">
                            {selectedSeats.length > 0 ? (
                              <span className="code-badge">
                                Seat {selectedSeats.map(seatLabel => formatSeatNumber(seatLabel)).join(', Seat ')}
                              </span>
                            ) : (
                              <span className="code-badge">No seats selected</span>
                            )}
                          </div>
                          <a href="#" className="view-policies-link">
                            View Policies
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey Details */}
                  <div className="journey-details">
                    <div className="row align-items-center">
                      {/* Departure Details */}
                      <div className="col-md-4">
                        <div className="departure-info">
                          <div className="time-display">
                            <span className="time">{formatTime(busData.DepartureTime)}</span>
                          </div>
                          <div className="date-day">
                            {formatDate(busData.DepartureDate) || formatDate(busData.DepartureTime)}
                          </div>
                          <div className="city-name">
                            {busData.OriginName || ""}
                          </div>
                          <div className="boarding-instructions">
                            {selectedBoardingPoint || ""}
                          </div>
                        </div>
                      </div>

                      {/* Journey Duration */}
                      <div className="col-md-4">
                        <div className="journey-duration">
                          <div className="duration-line">
                            <span className="line"></span>
                            <span className="duration-text">
                              {getDuration(busData.DepartureTime, busData.ArrivalTime) || 
                               (busData.Duration ? `${busData.Duration}h` : "Duration not available")}
                            </span>
                            <span className="line"></span>
                          </div>
                        </div>
                      </div>

                      {/* Arrival Details */}
                      <div className="col-md-4">
                        <div className="arrival-info">
                          <div className="time-display">
                            <span className="time">{formatTime(busData.ArrivalTime)}</span>
                          </div>
                          <div className="date-day">
                            {formatDate(busData.ArrivalDate) || formatDate(busData.ArrivalTime)}
                          </div>
                          <div className="city-name">
                            {busData.DestinationName || ""} {busData.DestinationState ? `(${busData.DestinationState})` : ""}
                          </div>
                          <div className="dropping-instructions">
                            {selectedDroppingPoint || ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="price-summary-section">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="seats-selected">
                          <i className="fas fa-chair me-2"></i>
                          <strong>Seats Selected: {selectedSeats.length}</strong>
                        </div>
                      </div>
                      <div className="col-md-6 text-end">
                        <div className="price-info">
                          <div className="total-price">
                            ₹{selectedSeats.reduce((acc, label) => {
                              const seatLayoutData = getEncryptedItem("seatLayoutData") || {};
                              const seatData = seatLayoutData.seats?.find(s => s.label === label);
                              return acc + (seatData?.price || busData.BusPrice?.PublishedPriceRoundedOff || 0);
                            }, 0)}
                          </div>
                          <div className="price-label">Total Amount</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Summary */}
          {hasSubmitted && Object.keys(errors).length > 0 && (
            <div className="row mb-4">
              <div className="col-12">
                <div className="alert alert-danger" role="alert">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-exclamation-triangle me-3 fs-4"></i>
                    <div>
                      <h6 className="alert-heading mb-2">Please fix the following errors:</h6>
                      <ul className="mb-0">
                        {Object.entries(errors).slice(0, 5).map(([field, message]) => (
                          <li key={field} className="error-item">
                            {message}
                          </li>
                        ))}
                        {Object.keys(errors).length > 5 && (
                          <li className="text-muted">... and {Object.keys(errors).length - 5} more errors</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Second Container - Traveler Details */}
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="row mb-4">
              <div className="col-12">
                <div className={`card ${hasSubmitted && Object.keys(errors).some(key => key.startsWith('travelerDetails')) ? 'error-card' : ''}`}>
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="fas fa-user me-2"></i>
                      Traveler Details
                      {hasSubmitted && Object.keys(errors).some(key => key.startsWith('travelerDetails')) && (
                        <span className="error-badge ms-2">
                          <i className="fas fa-exclamation-circle me-1"></i>
                          Errors
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="card-body">
                    {selectedSeats.map((seatLabel, index) => (
                      <div key={seatLabel} className="traveler-dropdown mb-3">
                        {/* Traveler Dropdown Header */}
                        <div 
                          className="traveler-dropdown-header"
                          onClick={() => {
                            if (expandedTraveler === "all") {
                              setExpandedTraveler(seatLabel);
                            } else if (expandedTraveler === seatLabel) {
                              setExpandedTraveler("");
                            } else {
                              setExpandedTraveler(seatLabel);
                            }
                          }}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="traveler-info">
                              <h6 className="mb-0">
                                <i className="fas fa-chair me-2"></i>
                                Seat {formatSeatNumber(seatLabel)} - Traveler {index + 1}
                                {(() => {
                                  const genderRestriction = getSeatGenderRestriction(seatLabel);
                                  if (genderRestriction === "female") {
                                    return <span className="badge bg-pink ms-2"><i className="fas fa-female me-1"></i>Female Only</span>;
                                  } else if (genderRestriction === "male") {
                                    return <span className="badge bg-blue ms-2"><i className="fas fa-male me-1"></i>Male Only</span>;
                                  }
                                  return null;
                                })()}
                              </h6>
                              {travelerDetails[seatLabel]?.firstName && (
                                <small className="text-muted">
                                  {travelerDetails[seatLabel].firstName} {travelerDetails[seatLabel].lastName}
                                </small>
                              )}
                            </div>
                            <div className="dropdown-indicator">
                              <i className={`fas fa-chevron-${expandedTraveler === "all" || expandedTraveler === seatLabel ? 'up' : 'down'}`}></i>
                            </div>
                          </div>
                        </div>
                        
                        {/* Traveler Form (Collapsible) */}
                        <div className={`traveler-form ${expandedTraveler === "all" || expandedTraveler === seatLabel ? 'expanded' : 'collapsed'}`}>
                          <div className="traveler-form-content">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label className="form-label">Title *</label>
                                  <select
                                    className={`form-select ${hasSubmitted && errors[`travelerDetails.${seatLabel}.title`] ? 'is-invalid' : ''}`}
                                    value={travelerDetails[seatLabel]?.title || ""}
                                    onChange={e => handleTravelerChange(seatLabel, "title", e.target.value)}
                                  >
                                    <option value="">Select</option>
                                    <option value="mr">Mr</option>
                                    <option value="mrs">Mrs</option>
                                    <option value="miss">Miss</option>
                                  </select>
                                  {hasSubmitted && errors[`travelerDetails.${seatLabel}.title`] && (
                                    <div className="text-danger">{errors[`travelerDetails.${seatLabel}.title`]}</div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="mb-3">
                                  <label className="form-label">First Name *</label>
                                  <input
                                    type="text"
                                    className={`form-control ${hasSubmitted && errors[`travelerDetails.${seatLabel}.firstName`] ? 'is-invalid' : ''}`}
                                    value={travelerDetails[seatLabel]?.firstName || ""}
                                    onChange={e => {
                                      handleTravelerChange(seatLabel, "firstName", e.target.value);
                                    }}
                                    placeholder="Enter first name"
                                  />
                                  {hasSubmitted && errors[`travelerDetails.${seatLabel}.firstName`] && (
                                    <div className="text-danger">{errors[`travelerDetails.${seatLabel}.firstName`]}</div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="mb-3">
                                  <label className="form-label">Last Name *</label>
                                  <input
                                    type="text"
                                    className={`form-control ${hasSubmitted && errors[`travelerDetails.${seatLabel}.lastName`] ? 'is-invalid' : ''}`}
                                    value={travelerDetails[seatLabel]?.lastName || ""}
                                    onChange={e => handleTravelerChange(seatLabel, "lastName", e.target.value)}
                                    placeholder="Enter last name"
                                  />
                                  {hasSubmitted && errors[`travelerDetails.${seatLabel}.lastName`] && (
                                    <div className="text-danger">{errors[`travelerDetails.${seatLabel}.lastName`]}</div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label className="form-label">Age *</label>
                                  <input
                                    type="number"
                                    className={`form-control ${hasSubmitted && errors[`travelerDetails.${seatLabel}.age`] ? 'is-invalid' : ''}`}
                                    value={travelerDetails[seatLabel]?.age || ""}
                                    onChange={e => handleTravelerChange(seatLabel, "age", e.target.value)}
                                    placeholder="Age"
                                    min="1"
                                    max="120"
                                  />
                                  {hasSubmitted && errors[`travelerDetails.${seatLabel}.age`] && (
                                    <div className="text-danger">{errors[`travelerDetails.${seatLabel}.age`]}</div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label className="form-label">Gender *</label>
                                  {(() => {
                                    const genderRestriction = getSeatGenderRestriction(seatLabel);
                                    const isDisabled = genderRestriction !== null;
                                    const restrictionText = genderRestriction === "female" ? "Female Only" : 
                                                          genderRestriction === "male" ? "Male Only" : "";
                                    
                                    return (
                                      <>
                                        <select
                                          className={`form-select ${hasSubmitted && errors[`travelerDetails.${seatLabel}.gender`] ? 'is-invalid' : ''} ${isDisabled ? 'disabled' : ''}`}
                                          value={travelerDetails[seatLabel]?.gender || ""}
                                          onChange={e => handleTravelerChange(seatLabel, "gender", e.target.value)}
                                          disabled={isDisabled}
                                        >
                                          <option value="">Select Gender</option>
                                          <option value="male">Male</option>
                                          <option value="female">Female</option>
                                          <option value="other">Other</option>
                                        </select>
                                        {isDisabled && (
                                          <small className="text-info d-block mt-1">
                                            <i className="fas fa-info-circle me-1"></i>
                                            {restrictionText} seat
                                          </small>
                                        )}
                                        {hasSubmitted && errors[`travelerDetails.${seatLabel}.gender`] && (
                                          <div className="text-danger">{errors[`travelerDetails.${seatLabel}.gender`]}</div>
                                        )}
                                      </>
                                    );
                                  })()}
                                </div>
                              </div>
                            </div>
                            

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Third Container - Contact Details */}
            <div className="row mb-4">
              <div className="col-12">
                <div className={`card ${hasSubmitted && Object.keys(errors).some(key => key.startsWith('contactDetails')) ? 'error-card' : ''}`}>
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="fas fa-phone me-2"></i>
                      Contact Details
                      {hasSubmitted && Object.keys(errors).some(key => key.startsWith('contactDetails')) && (
                        <span className="error-badge ms-2">
                          <i className="fas fa-exclamation-circle me-1"></i>
                          Errors
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email ID *</label>
                          <input
                            type="email"
                            className={`form-control ${hasSubmitted && errors["contactDetails.email"] ? 'is-invalid' : ''}`}
                            value={contactDetails.email}
                            onChange={(e) =>
                              handleContactChange("email", e.target.value)
                            }
                            placeholder="Enter email address"
                          />
                          {hasSubmitted && errors["contactDetails.email"] && (
                            <div className="text-danger">{errors["contactDetails.email"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Mobile Number *</label>
                          <input
                            type="tel"
                            className={`form-control ${hasSubmitted && errors["contactDetails.mobile"] ? 'is-invalid' : ''}`}
                            value={contactDetails.mobile}
                            onChange={(e) =>
                              handleContactChange("mobile", e.target.value)
                            }
                            placeholder="Enter mobile number"
                          />
                          {hasSubmitted && errors["contactDetails.mobile"] && (
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
                              className={`form-control ${hasSubmitted && errors["contactDetails.gstNumber"] ? 'is-invalid' : ''}`}
                              value={contactDetails.gstNumber}
                              onChange={(e) =>
                                handleContactChange("gstNumber", e.target.value)
                              }
                              placeholder="Enter GST number"
                            />
                            {hasSubmitted && errors["contactDetails.gstNumber"] && (
                              <div className="text-danger">{errors["contactDetails.gstNumber"]}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input
                              type="text"
                              className={`form-control ${hasSubmitted && errors["contactDetails.companyName"] ? 'is-invalid' : ''}`}
                              value={contactDetails.companyName}
                              onChange={(e) =>
                                handleContactChange("companyName", e.target.value)
                              }
                              placeholder="Enter company name"
                            />
                            {hasSubmitted && errors["contactDetails.companyName"] && (
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
                <div className={`card ${hasSubmitted && Object.keys(errors).some(key => key.startsWith('addressDetails')) ? 'error-card' : ''}`}>
                  <div className="card-header">
                    <h5 className="mb-0">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Address Details
                      {hasSubmitted && Object.keys(errors).some(key => key.startsWith('addressDetails')) && (
                        <span className="error-badge ms-2">
                          <i className="fas fa-exclamation-circle me-1"></i>
                          Errors
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Address *</label>
                          <input
                            type="text"
                            className={`form-control ${hasSubmitted && errors["addressDetails.address"] ? 'is-invalid' : ''}`}
                            value={addressDetails.address}
                            onChange={e => handleAddressChange("address", e.target.value)}
                            placeholder="Enter address"
                          />
                          {hasSubmitted && errors["addressDetails.address"] && (
                            <div className="text-danger">{errors["addressDetails.address"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">State *</label>
                          <select
                            className={`form-select ${hasSubmitted && errors["addressDetails.state"] ? 'is-invalid' : ''}`}
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
                          {hasSubmitted && errors["addressDetails.state"] && (
                            <div className="text-danger">{errors["addressDetails.state"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Country *</label>
                          <input
                            type="text"
                            className={`form-control ${hasSubmitted && errors["addressDetails.country"] ? 'is-invalid' : ''}`}
                            value={addressDetails.country}
                            onChange={e => handleAddressChange("country", e.target.value)}
                            placeholder="Enter country"
                          />
                          {hasSubmitted && errors["addressDetails.country"] && (
                            <div className="text-danger">{errors["addressDetails.country"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">City *</label>
                          <input
                            type="text"
                            className={`form-control ${hasSubmitted && errors["addressDetails.city"] ? 'is-invalid' : ''}`}
                            value={addressDetails.city}
                            onChange={e => handleAddressChange("city", e.target.value)}
                            placeholder="Enter city"
                          />
                          {hasSubmitted && errors["addressDetails.city"] && (
                            <div className="text-danger">{errors["addressDetails.city"]}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label className="form-label">Pincode *</label>
                          <input
                            type="text"
                            className={`form-control ${hasSubmitted && errors["addressDetails.pincode"] ? 'is-invalid' : ''}`}
                            value={addressDetails.pincode}
                            onChange={e => handleAddressChange("pincode", e.target.value)}
                            placeholder="Enter pincode"
                          />
                          {hasSubmitted && errors["addressDetails.pincode"] && (
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
          </div>
        </div>
        )}
      </section>

      {/* Footer */}
      {!isModal && <FooterDark />}
      
      <style jsx>{`
        /* Bus Ticket Card Styles */
        .bus-ticket-card {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .bus-ticket-header {
          background: #f8f9fa;
          padding: 16px;
          border-bottom: 1px solid #dee2e6;
        }

        .operator-name {
          color: #343a40;
          font-weight: 700;
          font-size: 1.3rem;
          margin: 0;
        }

        .vehicle-type {
          color: #6c757d;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .ticket-codes {
          text-align: right;
        }

        .code-badge {
          background: #343a40;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .view-policies-link {
          color: #007bff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .view-policies-link:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .journey-details {
          padding: 24px 20px;
          background: #ffffff;
        }

        .departure-info,
        .arrival-info {
          text-align: center;
        }

        .time-display {
          margin-bottom: 6px;
        }

        .time {
          font-size: 1.6rem;
          font-weight: 700;
          color: #343a40;
        }

        .date-day {
          font-size: 0.85rem;
          color: #6c757d;
          margin-bottom: 6px;
        }

        .city-name {
          font-size: 1rem;
          font-weight: 600;
          color: #343a40;
          margin-bottom: 10px;
        }

        .boarding-instructions,
        .dropping-instructions {
          font-size: 0.75rem;
          color: #6c757d;
          line-height: 1.3;
          max-width: 180px;
          margin: 0 auto;
        }

        .journey-duration {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .duration-line {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .line {
          flex: 1;
          height: 2px;
          background: #dee2e6;
        }

        .duration-text {
          font-size: 0.85rem;
          color: #6c757d;
          font-weight: 500;
          white-space: nowrap;
        }

        .price-summary-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 16px 20px;
          border-top: 1px solid #dee2e6;
        }

        .seats-selected {
          color: #343a40;
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .price-info {
          text-align: right;
        }

        .total-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: #cd2c22;
          margin-bottom: 2px;
        }

        .price-label {
          font-size: 0.8rem;
          color: #6c757d;
          font-weight: 500;
        }

        /* Custom styles for bus booking page */
        .traveler-section {
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        
        .traveler-section:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }
        
        .seat-header {
          background: linear-gradient(135deg, #cd2c22 0%, #e74c3c 100%);
          padding: 16px 20px;
          border-radius: 10px;
          border-left: 4px solid #ffffff;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        
        .seat-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
          pointer-events: none;
        }
        
        .seat-header h6 {
          color: #ffffff !important;
          font-weight: 600;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        
        .seat-numbers {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px;
        }
        
        .seat-numbers .badge {
          font-size: 0.875rem;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 4px;
          background: #cd2c22;
          border: 1px solid #cd2c22;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(205, 44, 34, 0.2);
        }
        
        .seat-numbers .badge:hover {
          background: #b71c1c;
          border-color: #b71c1c;
          box-shadow: 0 2px 6px rgba(205, 44, 34, 0.3);
        }
        
        .traveler-summary .alert {
          background: #e3f2fd;
          border: 1px solid #90caf9;
          border-radius: 6px;
          border-left: 4px solid #2196f3;
          padding: 16px;
        }
        
        .traveler-summary .alert-icon {
          background: rgba(33, 150, 243, 0.1);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2196f3;
        }
        
        .card {
          border: 1px solid #e9ecef;
          border-radius: 8px;
          background: #ffffff;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .card:hover {
          border-color: #cd2c22;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
        
        .card-header {
          background: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          border-radius: 8px 8px 0 0 !important;
          padding: 20px 24px;
        }
        
        .card-header h5 {
          color: #cd2c22;
          font-weight: 600;
          margin: 0;
        }
        
        .form-control {
          border-radius: 6px;
          border: 1px solid #ced4da;
          padding: 12px 16px;
          transition: all 0.3s ease;
          background: #ffffff;
          height: 48px;
          font-size: 14px;
          width: 100%;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        
        .form-control:focus {
          border-color: #cd2c22;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
          outline: none;
        }
        
        .form-control.is-invalid {
          border-color: #dc3545 !important;
          background-color: #fff5f5;
        }
        
        .form-select.is-invalid {
          border-color: #dc3545 !important;
          background-color: #fff5f5;
        }
        
        .form-select {
          border-radius: 6px;
          border: 1px solid #ced4da;
          padding: 12px 16px;
          transition: all 0.3s ease;
          background: #ffffff;
          height: 48px;
          font-size: 14px;
          width: 100%;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px 12px;
          padding-right: 40px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        
        .form-select:focus {
          border-color: #cd2c22;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
          outline: none;
        }
        
        .btn-primary {
          background: #cd2c22;
          border: 1px solid #cd2c22;
          border-radius: 6px;
          padding: 12px 24px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(205, 44, 34, 0.2);
        }
        
        .btn-primary:hover {
          background: #b71c1c;
          border-color: #b71c1c;
          box-shadow: 0 4px 8px rgba(205, 44, 34, 0.3);
        }
        
        .btn-primary:focus {
          box-shadow: 0 2px 4px rgba(205, 44, 34, 0.2);
          outline: none;
        }
        
        .modal-section {
          padding: 20px;
          max-height: calc(95vh - 140px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        /* Remove duplicate scrollbars in modal */
        .modal-section::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-section::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .modal-section::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        
        .modal-section::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        .text-primary {
          color: #cd2c22 !important;
        }
        
        .text-info {
          color: #17a2b8 !important;
        }
        
        .text-success {
          color: #28a745 !important;
        }
        
        /* Error styling */
        .error-card {
          border: 2px solid #dc3545 !important;
          box-shadow: 0 0 10px rgba(220, 53, 69, 0.2) !important;
        }
        
        .error-badge {
          background: #dc3545;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .error-item {
          margin-bottom: 4px;
          font-size: 0.9rem;
        }
        
        .alert-danger {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          border: 1px solid #f5c6cb;
          border-left: 4px solid #dc3545;
        }
        
        .alert-danger .alert-heading {
          color: #721c24;
          font-weight: 600;
        }
        
        .alert-danger ul {
          color: #721c24;
        }
        
        .alert-danger .text-muted {
          color: #6c757d !important;
        }
        
        .breadcrumb {
          background: transparent;
          padding: 0;
          margin-bottom: 24px;
        }
        
        .breadcrumb-item a {
          color: #cd2c22;
          text-decoration: none;
          font-weight: 500;
        }
        
        .breadcrumb-item a:hover {
          color: #b71c1c;
          text-decoration: underline !important;
          cursor: pointer;
        }
        
        .breadcrumb-item a {
          transition: all 0.3s ease;
        }
        
        .breadcrumb-item a:active {
          transform: scale(0.98);
        }
        
        .breadcrumb-item.active {
          color: #6c757d;
        }
        
        .bus-details h5 {
          color: #cd2c22;
          font-weight: 700;
        }
        
        .seat-info {
          background: #f8f9fa;
          padding: 16px;
          border-radius: 6px;
          border: 1px solid #dee2e6;
        }
        
        .boarding-dropping-info {
          background: #d4edda;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #c3e6cb;
        }
        
        .form-check-input:checked {
          background-color: #cd2c22;
          border-color: #cd2c22;
        }
        
        .form-check-input:focus {
          border-color: #cd2c22;
          box-shadow: none;
          outline: none;
        }
        
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #495057;
          margin-bottom: 8px;
        }
        
        /* Traveler Dropdown Styles */
        .traveler-dropdown {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .traveler-dropdown:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .traveler-dropdown-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 16px 20px;
          cursor: pointer;
          border-bottom: 1px solid #dee2e6;
          transition: all 0.3s ease;
        }
        
        .traveler-dropdown-header:hover {
          background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
        }
        
        .traveler-info h6 {
          color: #cd2c22;
          font-weight: 600;
          margin: 0;
        }
        
        .traveler-info small {
          font-size: 0.85rem;
          color: #6c757d;
        }
        
        .dropdown-indicator {
          color: #cd2c22;
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }
        
        .traveler-dropdown-header:hover .dropdown-indicator {
          transform: scale(1.1);
        }
        
        .traveler-form {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .traveler-form.expanded {
          max-height: 1000px;
        }
        
        .traveler-form.collapsed {
          max-height: 0;
        }
        
        .traveler-form-content {
          padding: 20px;
          background: #ffffff;
        }
        
        .mb-3 {
          margin-bottom: 1rem !important;
        }
        
        /* Global shadow removal for all form elements */
        .card-body input,
        .card-body select,
        .card-body textarea {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        
        .card-body input:focus,
        .card-body select:focus,
        .card-body textarea:focus {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .bus-ticket-header {
            padding: 14px;
          }

          .operator-name {
            font-size: 1.1rem;
          }

          .vehicle-type {
            font-size: 0.75rem;
          }

          .journey-details {
            padding: 16px 14px;
          }

          .time {
            font-size: 1.3rem;
          }

          .city-name {
            font-size: 0.9rem;
          }

          .boarding-instructions,
          .dropping-instructions {
            font-size: 0.7rem;
            max-width: 140px;
          }

          .price-summary-section {
            padding: 12px 14px;
          }

          .total-price {
            font-size: 1.1rem;
          }

          .traveler-section {
            padding: 16px;
            margin-bottom: 16px;
          }
          
          .traveler-dropdown-header {
            padding: 12px 16px;
          }
          
          .traveler-form-content {
            padding: 16px;
          }
          
          .traveler-info h6 {
            font-size: 0.9rem;
          }
          
          .traveler-info small {
            font-size: 0.75rem;
          }
          
          .seat-header {
            padding: 12px 16px;
          }
          
          .card-header {
            padding: 16px 20px;
          }
          
          .btn-primary {
            padding: 12px 24px;
          }
        }
        
        /* Disabled form select styles */
        .form-select.disabled {
          background-color: #f8f9fa !important;
          border-color: #dee2e6 !important;
          color: #6c757d !important;
          cursor: not-allowed !important;
          opacity: 0.7;
        }
        
        .form-select.disabled:focus {
          border-color: #dee2e6 !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        
        .form-select.disabled option {
          color: #6c757d;
        }
        
        /* Info text styling */
        .text-info {
          color: #17a2b8 !important;
        }
        
        .text-info i {
          font-size: 0.875rem;
        }
        
        /* Gender restriction badges */
        .badge.bg-pink {
          background-color: #e91e63 !important;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 8px;
        }
        
        .badge.bg-blue {
          background-color: #1976d2 !important;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 8px;
        }
        
        .badge i {
          font-size: 0.7rem;
        }
      `}</style>
    </>
  );
};

export default BusBookingPage;
