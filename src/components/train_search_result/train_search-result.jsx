import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { selectTrains } from '../../store/Selectors/filterSelectors';
import { useNavigate } from 'react-router-dom';
import { selectUser } from'../../store/Selectors/authSelectors';
import { selectSearchParams, selectStations,selectLoading } from '../../store/Selectors/filterSelectors';
import Modal from './Modal';
import { fetchTrainSchedule } from '../../store/Actions/filterActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SkeletonLoader from './SkeletonLoader';

const TrainSearchResultList = ({ filters }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectUser);
  const stationsList = useSelector(selectStations);
  const loading = JSON.parse(localStorage.getItem('loading'));
  let searchParams = useSelector(selectSearchParams);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrainNumber, setSelectedTrainNumber] = useState(null);
  const [selectedTrainFromStnCode, setSelectedTrainFromStnCode] = useState(null);
  const [selectedTrainToStnCode, setSelectedTrainToStnCode] = useState(null);
  let trainData = [];
  // const loading = useSelector(selectLoading);
  // const [showSkeleton, setShowSkeleton] = useState(true);
  const [expandedTrainId, setExpandedTrainId] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedQuota, setSelectedQuota] = useState("GN");


  if (trainData?.length === 0 ) { 
    console.log('No trains found in the store. Checking localStorage...');
    trainData = JSON.parse(localStorage.getItem('trains') || '[]');
    searchParams = JSON.parse(localStorage.getItem('trainSearchParams'));
  }
  

  let {formattedTrainDate, date } = searchParams;  
  

  const totalDuration = (duration) => {
    // Split the duration into hours and minutes
    const [hours, minutes] = duration?.split(':').map((timePart) => parseInt(timePart, 10));
  
    return hours > 0 ?  `${hours}h ${minutes}min` : `${minutes}min`;
  }

  const getStationName = (stationCode) => {
    const station = stationsList?.find((stn) => stn?.split(" - ")[1] === stationCode);
    return station?.split(" - ")[0];
  }

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time?.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  const  calculateArrival = (trainObj, journeyDate) => {
    const { departureTime, duration } = trainObj;
  
    // Parse the journeyDate into a Date object
    const dateObj = new Date(journeyDate);
  
    // Extract hours and minutes from departureTime
    const [depHours, depMinutes] = departureTime?.split(':').map(Number);
    dateObj.setHours(depHours, depMinutes, 0, 0); // Set the departure time
  
    // Extract hours and minutes from duration
    const [durHours, durMinutes] = duration?.split(':').map(Number);
  
    // Add duration to the Date object
    dateObj.setHours(dateObj.getHours() + durHours);
    dateObj.setMinutes(dateObj.getMinutes() + durMinutes);
  
    // Format the arrival time as "HH:MM AM/PM"
    const formattedArrivalTime = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  
    // Format the arrival date as "Day, DD MON"
    const formattedArrivalDate = dateObj.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    }); // Convert month to uppercase if required
  
    return { formattedArrivalTime, formattedArrivalDate } ;
  }

  const getTrainArrival = (train, date, type) => {
    const { formattedArrivalTime, formattedArrivalDate } = calculateArrival(train, date);
    return type === 'time' ? formattedArrivalTime : formattedArrivalDate;
  }

  // let filteredTrainData = filteredTrainData ? [] : localStorage.getItem('trains')
  const filteredTrainData = useMemo(() => {
    const applyFilters = (trains, filters) => {
      const noClassSelected = Object.keys(filters).every(
        key => !["1A", "2A", "3A", "3E", "SL"].includes(key) || !filters[key]
      );
  
      // If no classes are selected and a quota is selected, return all availabilities that match the quota
      if (noClassSelected && filters.quota) {
        return trains?.filter(train => {
          const filteredAvailabilities = train.availabilities?.filter(avl => {
            const isQuotaMatch = avl.quota === filters.quota;
            // Add available filter check
            const isAvailableMatch = !filters.available || 
              (avl.avlDayList?.[0]?.availablityType === "1" || 
               avl.avlDayList?.[0]?.availablityType === "2");
            return isQuotaMatch && isAvailableMatch;
          });
          
          if (filteredAvailabilities?.length > 0) {
            train.availabilities = filteredAvailabilities;
            return true;
          }
          return false;
        });
      }
  
      // If no classes are selected and no quota filter is applied
      if (noClassSelected) {
        if (filters.available) {
          return trains?.filter(train => {
            const filteredAvailabilities = train.availabilities?.filter(avl =>
              avl.avlDayList?.[0]?.availablityType === "1" || 
              avl.avlDayList?.[0]?.availablityType === "2"
            );
            if (filteredAvailabilities?.length > 0) {
              train.availabilities = filteredAvailabilities;
              return true;
            }
            return false;
          });
        }
        return trains;
      }
  
      return trains?.filter(train => {
        let isMatch = true;
  
        const departureHour = parseInt(train?.departureTime?.split(":")[0], 10);
        const arrivalHour = parseInt(train?.arrivalTime?.split(":")[0], 10);
  
        const filteredAvailabilities = train.availabilities?.filter(avl => {
          const seatClass = avl.enqClass;
  
          // Check if seatClass matches any of the selected class filters
          const isClassMatch =
            (filters["1A"] && seatClass === "1A") ||
            (filters["2A"] && seatClass === "2A") ||
            (filters["3A"] && seatClass === "3A") ||
            (filters["3E"] && seatClass === "3E") ||
            (filters["SL"] && seatClass === "SL");
  
          // Check if quota matches the selected quota
          const isQuotaMatch = filters.quota ? avl.quota === filters.quota : true;

          // Check availability filter
          const isAvailableMatch = !filters.available || 
            (avl.avlDayList?.[0]?.availablityType === "1" || 
             avl.avlDayList?.[0]?.availablityType === "2");
  
          // Return true only if all conditions match
          return isClassMatch && isQuotaMatch && isAvailableMatch;
        });
  
        // If no filteredAvailabilities match, exclude this train
        if (!filteredAvailabilities || filteredAvailabilities.length === 0)
          return false;
  
        // Filter based on AC classes if applicable
        if (filters.ac) {
          isMatch = isMatch && filteredAvailabilities.some(avl =>
            ["1A", "2A", "3A", "3E", "CC", "EC"].includes(avl.enqClass)
          );
        }
  
        // Filter based on departure times
        if (filters.departureEarlyMorning) 
          isMatch = isMatch && departureHour >= 0 && departureHour < 6;
        if (filters.departureMorning) 
          isMatch = isMatch && departureHour >= 6 && departureHour < 12;
        if (filters.departureMidDay) 
          isMatch = isMatch && departureHour >= 12 && departureHour < 18;
        if (filters.departureNight) 
          isMatch = isMatch && departureHour >= 18 && departureHour < 24;
  
        // Filter based on arrival times
        if (filters.arrivalEarlyMorning)
          isMatch = isMatch && arrivalHour >= 0 && arrivalHour < 6;
        if (filters.arrivalMorning) 
          isMatch = isMatch && arrivalHour >= 6 && arrivalHour < 12;
        if (filters.arrivalMidDay) 
          isMatch = isMatch && arrivalHour >= 12 && arrivalHour < 18;
        if (filters.arrivalNight)
          isMatch = isMatch && arrivalHour >= 18 && arrivalHour < 24;
  
        // Update train's availabilities with filtered results
        if (isMatch)
          train.availabilities = filteredAvailabilities;
  
        return isMatch;
      });
    };
    
    return applyFilters(trainData, filters);
  }, [trainData, filters]);

  console.log("Train data after filtered ", filteredTrainData);
  console.log("The filters are ", filters)

  
  const handleBooking = useCallback((train, classInfo, index) => {
    const isAvailable = classInfo?.avlDayList?.[0]?.availablityType === "1" || classInfo.avlDayList?.[0]?.availablityType === "2" || classInfo.avlDayList?.[0]?.availablityType === "3";

    if (!isAvailable) {
      toast.error('Booking not allowed', {
        position: "bottom-center",
        autoClose: 2500,
        theme:'colored',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const bookingData = {
        arrivalTime : getTrainArrival(train,date,"time"),
        arrivalDate : getTrainArrival(train,date,"date"),
        departureTime : convertTo12HourFormat(train.departureTime),
        departureDate : formattedTrainDate,
        distance : train.distance,
        duration : totalDuration(train.duration),
        fromStnCode : train.fromStnCode,
        toStnCode : train.toStnCode,
        fromStnName : getStationName(train.fromStnCode),
        toStnName : getStationName(train.toStnCode),
        trainName : train.trainName,
        trainNumber : train.trainNumber,
        trainType : train.trainType,
        classinfo : classInfo,
    };

    if (isAuthenticated) {
      navigate('/trainbookingdetails', { state: { trainData: bookingData } });
    } else {
      navigate('/login', {
        state: {
          redirectTo: '/trainbookingdetails',
          trainData: bookingData,
        }
      });
    }
  }, [isAuthenticated, navigate]);


  // const handleBooking = (train) =>{
  //   console.log('Auth status:', isAuthenticated)
  //   if(isAuthenticated){
  //     navigate('/trainbookingdetails',{state:{ trainData: train}})
  //   }
  //   else{
  //     navigate('/login',{
  //       state:{
  //         redirectTo:'/trainbookingdetails',
  //         trainData:train,
  //       }
  //     });
  //   }
  // }

  // console.log('181 filteredTrainData:', filteredTrainData);
  const stateData = useSelector((state) => state);
  console.log('217 stateData from train search result :', stateData);

  const getFormattedSeatsData = (train, index) => {
    
    const availabilityStatus = train.availabilities[index]?.avlDayList?.[0]?.availablityStatus;
    const availablityType = train.availabilities[index]?.avlDayList?.[0]?.availablityType;
    
    if (availablityType === "0" || availablityType === "4" || availablityType === "5" ) {
      return availabilityStatus;
    }else if (availablityType === "1") {
        let seats = parseInt(availabilityStatus.split('-')[1], 10);
        return seats ? `AVL ${seats}` : 'AVL';
    } else if (availablityType === "2" && availabilityStatus.includes("RAC")) {
        let seats = parseInt(availabilityStatus.split('RAC')[1], 10);
        return seats ? `RAC ${seats}` : "RAC";
    } else if (availablityType === "3" && availabilityStatus.includes("WL")) {
          let seats = parseInt(availabilityStatus.split('WL')[2], 10);
          return seats ? `WL ${seats}` : "WL";
    } else {
      return "NOT AVAILABLE";
    }
};

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-100 p-8">
  //       <div className="max-w-3xl mx-auto space-y-4">
  //         <SkeletonLoader />
  //       </div>
  //     </div>
  //   );
  // }
  // useEffect(() => {
  //   if (!loading) {
  //     const delayTimeout = setTimeout(() => setShowSkeleton(false), 4500); // Adjust delay as needed
  //     return () => clearTimeout(delayTimeout);
  //   }
  // }, [loading]);

  const openModel = useCallback((trainNumber,trainFromStnCode, trainToStnCode) => {
    setSelectedTrainNumber(trainNumber);
    setSelectedTrainFromStnCode(trainFromStnCode)
    setSelectedTrainToStnCode(trainToStnCode)
    dispatch(fetchTrainSchedule(trainNumber)); 
    setIsModalOpen(true);
  }, [dispatch]);

  const closeModel = useCallback(() => {
    setIsModalOpen(false);
    setSelectedTrainNumber(null);
    setSelectedTrainFromStnCode(null)
    setSelectedTrainToStnCode(null)
  }, []);

  // if (loading || !trainData) {
  //   return <SkeletonLoader />;
  // }

  const toggleNearbyDates = (trainNumber) => {
    setExpandedTrainId(expandedTrainId === trainNumber ? null : trainNumber);
  };

  return (
    <div className="row align-items-center g-4 mt-0">
      {/* Offer Coupon Box */}
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
          <div className="d-md-flex align-items-center justify-content-start">
            <div className="mb-md-0 mb-3">
              <div className="square--60 circle bg-white">
                <i className="fa-solid fa-gift fs-3 text-success" />
              </div>
            </div>
            <div className="ps-2">
              <h6 className="fs-5 fw-medium text-light mb-0">Start Your Train Journey</h6>
              <p className="text-light mb-0">Book Train Tickets Easily and Enjoy Special Discounts with Our Platform</p>
            </div>
          </div>
          <div className="text-md-end mt-md-0 mt-4">
            <button type="button" className="btn btn-white fw-medium full-width text-dark px-xl-4">Get Started</button>
          </div>
        </div>
      </div>

      {/* Train list */}
      {console.log("===========> loading ", loading)}
      
    {
      loading ? (
        <SkeletonLoader />
      ) : 
      filteredTrainData?.length > 0 ? (
        filteredTrainData?.map(train => (
          <div key={train.trainNumber} className="col-xl-12 col-lg-12 col-md-12">
            <div className="train-availability-card bg-white rounded-3 p-4 hover-shadow" style={{ 
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              border: "1px solid #eee"
            }}> 
              <div className="row gy-4 align-items-center justify-content-between">
                {/* Train Info Header */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="train-name me-4">
                      <small>#{train.trainNumber}</small>
                      <h5 className="mb-2 fw-bold" style={{color: "#2c3e50"}}>{train.trainName}</h5>
                      <div className="text-muted small d-flex align-items-center">
                        <i className="fas fa-calendar-alt me-2"></i>
                        <b color='black'> Runs on: </b>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningSun === "Y" ? 'bold' : 'normal',
                            color: train?.runningSun === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          S
                        </span>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningMon === "Y" ? 'bold' : 'normal',
                            color: train?.runningMon === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          M
                        </span>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningTue === "Y" ? 'bold' : 'normal',
                            color: train?.runningTue === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          T
                        </span>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningWed === "Y" ? 'bold' : 'normal',
                            color: train?.runningWed === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          W
                        </span>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningThu === "Y" ? 'bold' : 'normal',
                            color: train?.runningThu === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          T
                        </span>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningFri === "Y" ? 'bold' : 'normal',
                            color: train?.runningFri === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          F
                        </span>
                        <span 
                          className="mx-1" 
                          style={{
                            fontWeight: train?.runningSat === "Y" ? 'bold' : 'normal',
                            color: train?.runningSat === "Y" ? '#d20000' : 'inherit',
                          }}
                        >
                          S
                        </span>
                      </div>
                    </div>

                    <div className="journey-details flex-grow-1 mx-4 p-3" style={{
                      background: "linear-gradient(to right,rgb(234, 245, 255), #ffffff,rgb(234, 245, 255)",
                      borderRadius: "12px"
                    }}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                          <div className="text-primary fw-bold" style={{fontSize: "0.8rem"}}>{getStationName(train.fromStnCode)}</div>
                          <div className="h4 mb-0 ">{convertTo12HourFormat(train.departureTime)}</div>
                          <div className="text-black-50">{formattedTrainDate}</div>
                        </div>

                        <div className="flex-grow-1 px-4">
                          <div className="journey-line position-relative">
                            <div className="duration text-center mb-2">
                              <span 
                                className="badge bg-light text-dark px-3 py-2" 
                                style={{boxShadow: "0 2px 4px rgba(0,0,0,0.4)"}}
                              >
                                {totalDuration(train.duration)}
                              </span>
                            </div>
                            <div className="line d-flex align-items-center" style={{
                              height: "2px",
                              position: "relative"
                            }}>
                              {/* Start dot */}
                              <div style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: "#333333",
                                borderRadius: "50%",
                                position: "absolute",
                                left: "-4px",
                                zIndex: "1"
                              }}></div>
                              {/* Connecting line */}
                              <div style={{
                                height: "2px",
                                flex: "1",
                                backgroundColor: "#e0e0e0"
                              }}></div>
                              {/* End dot */}
                              <div style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: "#333333",
                                borderRadius: "50%",
                                position: "absolute",
                                right: "-4px",
                                zIndex: "1"
                              }}></div>
                            </div>
                            <div className="view-route text-center mt-2">
                            <button
                              className="badge bg-light text-danger px-3 py-2"
                              style={{ boxShadow: "0 2px 4px rgba(36, 36, 36, 0.49)",border:'none',fontWeight : "bold"}}
                              onClick={() => openModel(train.trainNumber, train.fromStnCode, train.toStnCode)} // Use callback function
                            >
                              View Route
                            </button>
                            <Modal isOpen={isModalOpen} onClose={closeModel} trainNumber={selectedTrainNumber} selectedTrainFromStnCode={selectedTrainFromStnCode} selectedTrainToStnCode={selectedTrainToStnCode} /> 
                          </div>



                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-primary fw-bold" style={{fontSize: "0.8rem"}}>{getStationName(train.toStnCode)}</div>
                          <div className="h4 mb-0 ">{getTrainArrival(train,date,"time")}</div>
                          <div className="text-black-50">{getTrainArrival(train,date,"date")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    {/* <button className="btn btn-primary px-1 py-1" style={{
                      background: "linear-gradient(45deg, #2196F3, #1976D2)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(33, 150, 243, 0.3)"
                    }}>
                      <i className="fas fa-ticket-alt me-2"></i>
                      Availability
                      train.availabilities?.[0].avlDayList?.[0]?.availabilityStatus === "TRAIN DEPARTED" 
                    </button> */}

                <div className="w-100 border-top my-2 opacity-25"></div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="row text-center g-3 justify-content-start">
                    {train.availabilities?.[0]?.avlDayList?.[0]?.availablityStatus === "TRAIN DEPARTED" ? (
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#F1F5F8",
                          color: "gray",
                          fontWeight :"bold",
                          textAlign: "center",
                          fontSize:"1.1rem",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        TRAIN DEPARTED
                      </div>
                      ) : (
                      train.availabilities?.map((cls, index) => (
                        <div key={index} className="col-auto">
                          <div
                            className="availability-card p-2 position-relative"
                            style={{
                              minWidth: "140px",
                              background:
                                train.availabilities[index]?.avlDayList?.[0]?.availablityType === "1" ||
                                train.availabilities[index]?.avlDayList?.[0]?.availablityType === "2"
                                  ? "linear-gradient(125deg, #e8f5e9, #F2F7EC)"
                                  : train.availabilities[index]?.avlDayList?.[0]?.availablityType === "3"
                                  ? "linear-gradient(145deg, #fff3e0,rgb(249, 231, 204))"
                                  : "linear-gradient(145deg, rgb(247, 247, 247), rgb(255, 255, 255))",
                              border: `0.3px solid ${
                                train.availabilities[index]?.avlDayList?.[0]?.availablityType === "1" ||
                                train.availabilities[index]?.avlDayList?.[0]?.availablityType === "2"
                                  ? "green"
                                  : train.availabilities[index]?.avlDayList?.[0]?.availablityType === "3"
                                  ? "orange"
                                  : "gray"
                              }`,
                              borderRadius: "10px",
                              cursor: "pointer",
                              transition: "transform 0.2s ease",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            }}
                            onClick={() => handleBooking(train,cls, index)}
                          >
                            { (train.availabilities[index]?.quota === "TQ" || train.availabilities[index]?.quota === "PT") && (
                              <div
                                className="position-absolute badge bg-danger"
                                style={{
                                  top: "-10px",
                                  right: "10px",
                                  fontSize: "0.7rem",
                                  padding: "4px 8px",
                                  zIndex: "1",
                                }}
                              >
                              {train.availabilities[index]?.quota === "TQ" ? "TATKAL" : "PREMIUM"}                              </div>
                            )}
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0 " style={{ color: "black" }}>
                                {train.availabilities[index]?.enqClass}
                              </h6>
                              {train.availabilities[index]?.totalFare > 0 && (
                                <div className="price">₹ {train.availabilities[index]?.totalFare}</div>
                              )}
                            </div>
                            <div className="availability">
                              <b
                                style={{
                                  fontSize: "1.1rem",
                                  color:
                                    train.availabilities[index]?.avlDayList?.[0]?.availablityType === "1" ||
                                    train.availabilities[index]?.avlDayList?.[0]?.availablityType === "2"
                                      ? "green"
                                      : train.availabilities[index]?.avlDayList?.[0]?.availablityType === "3"
                                      ? "#E86716"
                                      : "gray",
                                }}
                              >
                                {getFormattedSeatsData(train, index)}
                              </b>
                              <div
                                className="status-badge mb-1"
                                style={{
                                  color: cls.availableSeats ? "#2e7d32" : "#c62828",
                                  fontSize: "0.7rem",
                                }}
                              >
                                {(train.availabilities[index]?.avlDayList?.[0]?.availablityType === "1" ||
                                train.availabilities[index]?.avlDayList?.[0]?.availablityType === "2") ? (
                                  <span style={{ color: "green", display: "flex", alignItems: "center" }}>
                                    <i className="fas fa-shield-alt me-1"></i>
                                    <span style={{ marginLeft: "5px" }}>Travel Guarantee</span>
                                  </span>
                                ) : train.availabilities[index]?.avlDayList?.[0]?.availablityType === "3" ? (
                                  "50% chances"
                                ) : (
                                  "."
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}

                    {/* Nearby Dates Button */}
                    <div className="w-100 border-top my-2 opacity-25"></div>
                    <div className="d-flex justify-content-between align-items-center w-100 px-3">
                      <button 
                        className="btn btn-link text-primary p-0"
                        onClick={() => toggleNearbyDates(train.trainNumber)}
                        style={{ textDecoration: 'none' }}
                      >
                        <i className={`fas fa-chevron-${expandedTrainId === train.trainNumber ? 'up' : 'down'} me-2`}></i>
                        Nearby dates
                      </button>
                    </div>

                    {/* Collapsible Nearby Dates Section */}
                    {expandedTrainId === train.trainNumber && (
                      <div className="col-12 mt-3">
                        <div className="nearby-dates-container">
                          {/* Class Selection Tabs */}
                          <div className="d-flex mb-3 flex-wrap gap-2">
                            <div className="class-tabs d-flex gap-2">
                              {train.availabilities.map((cls) => (
                                <button 
                                  key={cls.enqClass}
                                  className={`btn btn-sm ${
                                    selectedClass === cls.enqClass ? 'btn-primary' : 'btn-outline-primary'
                                  }`}
                                  onClick={() => setSelectedClass(cls.enqClass)}
                                >
                                  {cls.enqClass === "1A" ? "First Class AC" :
                                   cls.enqClass === "2A" ? "Second AC" :
                                   cls.enqClass === "3A" ? "Third AC" :
                                   cls.enqClass === "3E" ? "AC 3 Economy" :
                                   cls.enqClass === "SL" ? "Sleeper Class" :
                                   cls.enqClass}
                                </button>
                              ))}
                            </div>
                            <div className="ms-auto d-flex gap-2">
                              {["GN", "LD", "TQ", "PT"].map((quota) => (
                                <button 
                                  key={quota}
                                  className={`btn btn-sm ${
                                    selectedQuota === quota ? 'btn-primary' : 'btn-outline-primary'
                                  }`}
                                  onClick={() => setSelectedQuota(quota)}
                                >
                                  {quota === "GN" ? "General" : 
                                   quota === "LD" ? "Ladies" :
                                   quota === "TQ" ? "Tatkal" : "Premium"}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Date Cards - Show all availability data without filters */}
                          <div className="nearby-dates-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
                            {train.availabilities
                              .filter(cls => cls.enqClass === selectedClass && cls.quota === selectedQuota)
                              .map((cls) => (
                                <React.Fragment key={cls.enqClass}>
                                  {cls.avlDayList?.length > 0 ? (
                                    cls.avlDayList.map((dayInfo, dayIndex) => (
                                      <div 
                                        key={dayIndex}
                                        className="date-card mb-2 p-2 rounded-3 d-flex justify-content-between align-items-center"
                                        style={{
                                          border: "1px solid #eee",
                                          backgroundColor: dayInfo.availablityType === "1" || dayInfo.availablityType === "2"
                                            ? "#f8fff8"
                                            : dayInfo.availablityType === "3"
                                            ? "#fff8f0"
                                            : "#fff",
                                          transition: "all 0.3s ease",
                                          minHeight: "60px"
                                        }}
                                      >
                                        <div className="date-info">
                                          <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>{dayInfo.availablityDate}</h6>
                                        </div>
                                        
                                        <div className="status" style={{
                                          color: dayInfo.availablityType === "1" || dayInfo.availablityType === "2"
                                            ? "green"
                                            : dayInfo.availablityType === "3"
                                            ? "orange"
                                            : "red",
                                          fontWeight: "500",
                                          fontSize: "0.9rem"
                                        }}>
                                          {getFormattedSeatsData({
                                            availabilities: [{
                                              avlDayList: [dayInfo]
                                            }]
                                          }, 0)}
                                        </div>
                                        
                                        {(dayInfo.availablityType === "1" || dayInfo.availablityType === "2") && (
                                          <div className="tag text-muted" style={{ fontSize: "0.8rem" }}>
                                            <small>
                                              <i className="fas fa-shield-alt me-1"></i>
                                              Trip Guarantee
                                            </small>
                                          </div>
                                        )}
                                        
                                        <button 
                                          className="btn btn-sm btn-primary"
                                          style={{
                                            background: dayInfo.availablityType === "0" || dayInfo.availablityType === "4" || dayInfo.availablityType === "5"
                                              ? "#6c757d"
                                              : "linear-gradient(45deg, #2196F3, #1976D2)",
                                            border: "none",
                                            fontSize: "0.85rem",
                                            padding: "0.25rem 0.75rem"
                                          }}
                                          disabled={dayInfo.availablityType === "0" || dayInfo.availablityType === "4" || dayInfo.availablityType === "5"}
                                          onClick={() => handleBooking(train, cls, dayIndex)}
                                        >
                                          Book @₹{cls.totalFare}
                                          <i className="fas fa-chevron-right ms-2"></i>
                                        </button>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="no-dates-available p-4 text-center bg-light rounded-3">
                                      <div className="mb-3">
                                        <i className="fas fa-calendar-times fa-3x text-muted"></i>
                                      </div>
                                      <h6 className="mb-2 text-muted">No Availability Information</h6>
                                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                                        Currently, there is no booking availability for {selectedClass} class in {
                                          selectedQuota === "GN" ? "General" :
                                          selectedQuota === "LD" ? "Ladies" :
                                          selectedQuota === "TQ" ? "Tatkal" :
                                          "Premium Tatkal"
                                        } quota.
                                        <br />
                                        Please try a different class or quota.
                                      </p>
                                    </div>
                                  )}
                                </React.Fragment>
                              ))}
                            {train.availabilities.filter(cls => cls.enqClass === selectedClass && cls.quota === selectedQuota).length === 0 && (
                              <div className="no-dates-available p-4 text-center bg-light rounded-3">
                                <div className="mb-3">
                                  <i className="fas fa-ticket-alt fa-3x text-muted"></i>
                                </div>
                                <h6 className="mb-2 text-muted">Class/Quota Not Available</h6>
                                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                                  The selected combination of {selectedClass} class and {
                                    selectedQuota === "GN" ? "General" :
                                    selectedQuota === "LD" ? "Ladies" :
                                    selectedQuota === "TQ" ? "Tatkal" :
                                    "Premium Tatkal"
                                  } quota is not available for this train.
                                  <br />
                                  Please select a different class or quota option.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 text-center mt-5">
          <div className="no-train-found-wrapper">
            <i className="fas fa-train fa-5x text-muted mb-3"></i>
            <h3 className="text-muted">No Trains Found Between These Stations</h3>
            <p className="text-muted">Please try adjusting your search filters or check back later for updated results.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainSearchResultList;
