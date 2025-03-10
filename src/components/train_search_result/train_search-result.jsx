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
import NearbyDates from './TrainNearbyDates';
import CalendarNearbyDates from './CalendarNearbyDates';
import { fetchTrains } from '../../store/Actions/filterActions';

const TrainSearchResultList = ({ filters }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectUser);
  const stationsList = useSelector(selectStations);
  const loading = JSON.parse(localStorage.getItem('loading'));
  // let searchParams = useSelector(selectSearchParams);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrainNumber, setSelectedTrainNumber] = useState(null);
  const [selectedTrainFromStnCode, setSelectedTrainFromStnCode] = useState(null);
  const [selectedTrainToStnCode, setSelectedTrainToStnCode] = useState(null);
  let trainData = [];
  const [expandedTrainId, setExpandedTrainId] = useState(null);
  let searchParams = { date: "", formattedTrainDate: "" };
  const [selectedDate, setSelectedDate] = useState(() => {
    const params = JSON.parse(localStorage.getItem('trainSearchParams') || '{}');
    return params.date ? new Date(params.date) : new Date();
  });
  const [sortBy, setSortBy] = useState('departure');
  const [sortOrder, setSortOrder] = useState('asc');

  if (trainData?.length === 0 ) { 
    console.log('No trains found in the store. Checking localStorage...');
    trainData = JSON.parse(localStorage.getItem('trains') || '[]');
    searchParams = JSON.parse(localStorage.getItem('trainSearchParams') || '{}');
  }
  

  let {formattedTrainDate, date } = searchParams;  
  
  const formattedJourneyDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };


  // Helper functions
  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const formatDateToDayDDMONTH = (date) => {
    return date.toLocaleDateString('en-GB', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const handleDateSelect = async (newDate) => {
    try {
      const searchParams = JSON.parse(localStorage.getItem('trainSearchParams') || '{}');
      const { fromStnCode, toStnCode } = searchParams;

      // Format date for API
      const formattedDate = formattedJourneyDate(newDate);
      console.log("formattedDate=====>>>>>>>>", formattedDate);
      const formattedTrainDate = formatDateToDayDDMONTH(newDate);
      console.log("formattedTrainDate=====>>>>>>>>", formattedTrainDate);
      // Update localStorage with new date
      const updatedSearchParams = {
        ...searchParams,
        date: newDate.toISOString(),
        formattedTrainDate
      };
      localStorage.setItem('trainSearchParams', JSON.stringify(updatedSearchParams));
      localStorage.setItem('loading', 'true');

      // Fetch new train data
      await dispatch(fetchTrains(formattedDate, fromStnCode, toStnCode));
      setSelectedDate(newDate);

      localStorage.setItem('loading', 'false');
    } catch (error) {
      console.error('Error fetching trains:', error);
      localStorage.setItem('loading', 'false');
    }
  };

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
      return trains.filter(train => {
        const [depHours] = train.departureTime?.split(":").map(Number);
        const { formattedArrivalTime } = calculateArrival(train, date);
        const arrivalHour = new Date(`2000/01/01 ${formattedArrivalTime}`).getHours();

        const isDepartureFilterSelected = filters.departureEarlyMorning || filters.departureMorning || filters.departureMidDay || filters.departureNight;

        // Apply departure time filters if any are selected
        if (isDepartureFilterSelected) {
          const matchesDepartureTime = 
            (filters.departureEarlyMorning && depHours >= 0 && depHours < 6) ||
            (filters.departureMorning && depHours >= 6 && depHours < 12) ||
            (filters.departureMidDay && depHours >= 12 && depHours < 18) ||
            (filters.departureNight && depHours >= 18 && depHours < 24);

          if (!matchesDepartureTime) {
            return false;
          }
        }

        // Check if any arrival time filter is selected
        const isArrivalFilterSelected = filters.arrivalEarlyMorning || filters.arrivalMorning || filters.arrivalMidDay || filters.arrivalNight;

        // Apply arrival time filters if any are selected
        if (isArrivalFilterSelected) {
          const matchesArrivalTime = 
            (filters.arrivalEarlyMorning && arrivalHour >= 0 && arrivalHour < 6) ||
            (filters.arrivalMorning && arrivalHour >= 6 && arrivalHour < 12) ||
            (filters.arrivalMidDay && arrivalHour >= 12 && arrivalHour < 18) ||
            (filters.arrivalNight && arrivalHour >= 18 && arrivalHour < 24);

          if (!matchesArrivalTime) {
            return false;
          }
        }

        // Filter availabilities based on selected class and quota
        const filteredAvailabilities = train.availabilities?.filter(avl => {
          const seatClass = avl.enqClass;
          
          // Check if any class filter is selected
          const isAnyClassSelected = filters["1A"] || filters["2A"] || filters["3A"] || filters["3E"] || filters.SL;

          // If no class is selected, don't filter by class
          const isClassMatch = !isAnyClassSelected || (
            (filters["1A"] && seatClass === "1A") ||
            (filters["2A"] && seatClass === "2A") ||
            (filters["3A"] && seatClass === "3A") ||
            (filters["3E"] && seatClass === "3E") ||
            (filters.SL && seatClass === "SL")
          );

          // Check quota match
          const isQuotaMatch = filters.quota ? avl.quota === filters.quota : true;

          // Check availability if the filter is active
          const isAvailabilityMatch = !filters.available || (
            avl.avlDayList?.[0]?.availablityType === "1" || 
            avl.avlDayList?.[0]?.availablityType === "2"
          );

          return isClassMatch && isQuotaMatch && isAvailabilityMatch;
        });

        if (!filteredAvailabilities || filteredAvailabilities.length === 0) {
          return false;
        }

        // Update train's availabilities with filtered results
        train.availabilities = filteredAvailabilities;
        return true;
      });
    };

    return applyFilters(trainData, filters);
  }, [trainData, filters, date]);

  // console.log("Train data after filtered ", filteredTrainData);
  console.log("The filters are ", filters)

  
  const handleBooking = useCallback((train, classInfo) => {
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
      departureTime : convertTo12HourFormat(train?.departureTime),
      departureDate : formattedTrainDate,
      distance : train?.distance,
      duration : totalDuration(train?.duration),
      fromStnCode : train?.fromStnCode,
      journeyDate : formattedJourneyDate(date),
      toStnCode : train?.toStnCode,
      fromStnName : getStationName(train?.fromStnCode),
      toStnName : getStationName(train?.toStnCode),
      trainName : train?.trainName,
      trainNumber : train?.trainNumber,
      trainType : train?.trainType,
      classinfo : classInfo,
    };

    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
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
        let seats = parseInt(availabilityStatus.split('RAC')[2], 10);
        return seats ? `RAC ${seats}` : "RAC";
    } else if (availablityType === "3" && availabilityStatus.includes("WL")) {
          let seats = parseInt(availabilityStatus.split('WL')[2], 10);
          return seats ? `WL ${seats}` : "WL";
    } else {
      return "NOT AVAILABLE";
    }
  };

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

  const toggleNearbyDates = (trainNumber) => {
    setExpandedTrainId(expandedTrainId === trainNumber ? null : trainNumber);
  };

  // Function to get original unfiltered train data by train number
  const getOriginalTrainData = useCallback((trainNumber) => {
    const localStorageTrains = JSON.parse(localStorage.getItem('trains') || '[]');
    let originalTrain = localStorageTrains.find(train => train.trainNumber === trainNumber);
    
    originalTrain.arrivalTime = getTrainArrival(originalTrain,date,"time");
    originalTrain.departureTime = convertTo12HourFormat(originalTrain.departureTime);
    originalTrain.duration = totalDuration(originalTrain.duration);
    originalTrain.fromStnName = getStationName(originalTrain.fromStnCode);
    originalTrain.toStnName = getStationName(originalTrain.toStnCode);

    return originalTrain;
  }, []);

  const getSortedTrains = (trains) => {
    return [...trains].sort((a, b) => {
      switch (sortBy) {
        case 'departure':
          const depTimeA = new Date(`2000/01/01 ${a.departureTime}`).getTime();
          const depTimeB = new Date(`2000/01/01 ${b.departureTime}`).getTime();
          return sortOrder === 'asc' ? depTimeA - depTimeB : depTimeB - depTimeA;
        
        case 'arrival':
          const arrivalA = new Date(`2000/01/01 ${getTrainArrival(a, date, "time")}`).getTime();
          const arrivalB = new Date(`2000/01/01 ${getTrainArrival(b, date, "time")}`).getTime();
          return sortOrder === 'asc' ? arrivalA - arrivalB : arrivalB - arrivalA;
        
        case 'duration':
          const [hoursA, minsA] = a.duration.split(':').map(Number);
          const [hoursB, minsB] = b.duration.split(':').map(Number);
          const durationA = hoursA * 60 + minsA;
          const durationB = hoursB * 60 + minsB;
          return sortOrder === 'asc' ? durationA - durationB : durationB - durationA;
        
        case 'name':
          return sortOrder === 'asc' 
            ? a.trainName.localeCompare(b.trainName)
            : b.trainName.localeCompare(a.trainName);
        
        default:
          return 0;
      }
    });
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

      {/* Add Suggested Dates Section */}
      <div className="col-12">
        <div className="bg-white rounded-3">
          
          <CalendarNearbyDates 
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>
      </div>

      {/* Add sorting section */}
      <div className="col-12 mb-3">
        <div className="bg-white rounded-3 p-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center">
              <span className="me-3 text-muted">Sort by:</span>
              <div className="btn-group" role="group">
                {[
                  { id: 'departure', label: 'Departure', icon: 'fa-clock' },
                  { id: 'arrival', label: 'Arrival', icon: 'fa-clock' },
                  { id: 'duration', label: 'Duration', icon: 'fa-hourglass-half' },
                  { id: 'name', label: 'Train Name', icon: 'fa-train' }
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`btn btn-sm ${sortBy === option.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => {
                      if (sortBy === option.id) {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                      } else {
                        setSortBy(option.id);
                        setSortOrder('asc');
                      }
                    }}
                    style={{
                      borderRadius: '6px',
                      margin: '0 3px',
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.875rem'
                    }}
                  >
                    <i className={`fas ${option.icon}`}></i>
                    {option.label}
                    {sortBy === option.id && (
                      <i className={`fas fa-sort-${sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-muted">
              <i className="fas fa-train me-2"></i>
              {filteredTrainData.length} Trains found
            </div>
          </div>
        </div>
      </div>

      {/* Train list */}
      {/* {console.log("===========> loading ", loading)} */}
      
    {
      loading ? (
        <SkeletonLoader />
      ) : 
      filteredTrainData?.length > 0 ? (
        getSortedTrains(filteredTrainData)?.map(train => (
          <div key={train.trainNumber} className="col-xl-12 col-lg-12 col-md-12">
            <div className="train-availability-card bg-white rounded-3 p-4 pb-2 hover-shadow" style={{ 
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

                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="availability-section position-relative">
                    <button 
                      className="scroll-arrow scroll-left"
                      onClick={(e) => {
                        const container = e.target.closest('.availability-section').querySelector('.scroll-container');
                        container.scrollBy({ left: -200, behavior: 'smooth' });
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <div className="scroll-container">
                      <div className="row text-center g-3 justify-content-start flex-nowrap">
                        {train.availabilities?.[0]?.avlDayList?.[0]?.availablityStatus === "TRAIN DEPARTED" ? (
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#F1F5F8",
                              color: "gray",
                              fontWeight: "bold",
                              textAlign: "center",
                              fontSize: "1.1rem",
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
                                  margin: "0 4px"
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
                      </div>
                    </div>

                    <button 
                      className="scroll-arrow scroll-right"
                      onClick={(e) => {
                        const container = e.target.closest('.availability-section').querySelector('.scroll-container');
                        container.scrollBy({ left: 200, behavior: 'smooth' });
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>

                  <style>
                    {`
                      .availability-section {
                        position: relative;
                        
                      }

                      .scroll-container {
                        overflow-x: auto;
                        scrollbar-width: none; /* Firefox */
                        -ms-overflow-style: none; /* IE and Edge */
                        scroll-behavior: smooth;
                        padding: 10px 0;
                      }

                      .scroll-container::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera */
                      }

                      .scroll-arrow {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: white;
                        border: 1px solid #e0e0e0;
                        color: #666;
                        display: none;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        z-index: 10;
                        transition: all 0.3s ease;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                      }

                      .scroll-arrow:hover {
                        background: #f8f9fa;
                        color: #333;
                      }

                      .scroll-left {
                        left: 0;
                      }

                      .scroll-right {
                        right: 0;
                      }

                      @media (max-width: 768px) {
                        .scroll-arrow {
                          display: flex;
                        }

                        .availability-section {
                          margin: 0 -10px;
                        }

                        .scroll-container {
                          padding: 10px;
                        }

                        .availability-card {
                          margin: 0 4px !important;
                        }
                      }
                    `}
                  </style>

                  {/* Nearby Dates Section */}
                  <div className="d-flex justify-content-between align-items-center w-100 px-1">
                    <button 
                      className=" d-flex align-items-center gap-1 py-0 px-1"
                      onClick={() => toggleNearbyDates(train.trainNumber)}
                      style={{ 
                        // background: expandedTrainId === train.trainNumber ? '#e3f2fd' : '#f8f9fa',
                        border: 'none',
                        background : "none",
                        // borderColor: expandedTrainId === train.trainNumber ? '#90caf9' : '#dee2e6',
                        borderRadius: '6px',
                        color: expandedTrainId === train.trainNumber ? '#1976d2' : '#6c757d',
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem',
                        // color: '#e74c3',
                        padding: '10px',
                        fontWeight: 'bold'
                      }}
                    >
                      <i className={`fas fa-calendar-alt fa-sm`}></i>
                      <span className="mx-1 mt-1">Check Nearby Dates</span>
                      <i 
                        className={`fas fa-chevron-${expandedTrainId === train.trainNumber ? 'up' : 'down'} fa-sm`}
                        style={{
                          transform: expandedTrainId === train.trainNumber ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s ease'
                        }}
                      ></i>
                    </button>
                  </div>

                  {/* Collapsible Nearby Dates Section */}
                  <div 
                    style={{
                      maxHeight: expandedTrainId === train.trainNumber ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      width: '100%'
                    }}
                  >
                    {expandedTrainId === train.trainNumber && (
                      <div className="bg-light p-3 rounded-3 mt-2">
                        <NearbyDates 
                          train={getOriginalTrainData(train.trainNumber)} 
                          onClose={() => setExpandedTrainId(null)}
                        />
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

// Add mobile-specific styles
const mobileStyles = `
@media screen and (max-width: 768px) {
  /* Train card styles */
  .train-availability-card {
    padding: 15px !important;
    margin-bottom: 15px !important;
  }

  /* Train info header */
  .train-name {
    text-align: left !important;
    margin-right: 0 !important;
    margin-bottom: 15px !important;
  }

  .train-name h5 {
    font-size: 1.1rem !important;
  }

  .train-name .text-muted {
    font-size: 0.75rem !important;
  }

  /* Journey details section */
  .journey-details {
    margin: 10px 0 !important;
    padding: 12px !important;
  }

  .journey-details .d-flex {
    gap: 8px !important;
  }

  .journey-details .text-primary {
    font-size: 0.7rem !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
  }

  .journey-details .h4 {
    font-size: 0.9rem !important;
    margin: 4px 0 !important;
  }

  .journey-details .text-black-50 {
    font-size: 0.65rem !important;
  }

  /* Duration badge */
  .duration .badge {
    font-size: 0.7rem !important;
    padding: 4px 8px !important;
  }

  /* View route button */
  .view-route .badge {
    font-size: 0.7rem !important;
    padding: 4px 10px !important;
  }

  /* Availability cards */
  .availability-card {
    min-width: 110px !important;
    padding: 8px !important;
    margin: 4px !important;
  }

  .availability-card h6 {
    font-size: 0.8rem !important;
  }

  .availability-card .price {
    font-size: 0.8rem !important;
  }

  .availability-card b {
    font-size: 0.9rem !important;
  }

  .availability-card .status-badge {
    font-size: 0.6rem !important;
  }

  .position-absolute.badge {
    font-size: 0.6rem !important;
    padding: 3px 6px !important;
    top: -8px !important;
    right: 5px !important;
  }

  /* Nearby dates section */
  .d-flex.justify-content-between.align-items-center.w-100 {
    padding: 0 10px !important;
  }

  .d-flex.justify-content-between.align-items-center.w-100 button {
    font-size: 0.85rem !important;
    padding: 8px !important;
  }

  /* Running days display */
  .text-muted.small.d-flex {
    flex-wrap: wrap !important;
    gap: 2px !important;
  }

  .text-muted.small.d-flex span {
    font-size: 0.7rem !important;
    margin: 0 1px !important;
  }

  .text-muted.small.d-flex b {
    font-size: 0.7rem !important;
    margin-right: 4px !important;
  }

  /* Sort section responsiveness */
  .bg-white.rounded-3.p-3 .btn-group {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 5px !important;
    width: 100% !important;
  }

  .bg-white.rounded-3.p-3 .btn-group button {
    width: 100% !important;
    margin: 0 !important;
    padding: 6px !important;
    font-size: 0.75rem !important;
  }

  /* Train departed message */
  div[style*="backgroundColor: #F1F5F8"] {
    font-size: 0.9rem !important;
    padding: 8px !important;
  }

  /* Row spacing */
  .row.gy-4 {
    gap: 10px !important;
  }

  /* Offer banner responsiveness */
  .bg-success.rounded-2 {
    padding: 12px !important;
  }

  .bg-success.rounded-2 h6 {
    font-size: 1rem !important;
  }

  .bg-success.rounded-2 p {
    font-size: 0.8rem !important;
  }

  .square--60 {
    width: 40px !important;
    height: 40px !important;
  }

  .square--60 i {
    font-size: 1.2rem !important;
  }
}
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);

export default TrainSearchResultList;



