import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTrains } from '../../store/Selectors/filterSelectors';
import { useNavigate } from 'react-router-dom';
import {selectUser} from'../../store/Selectors/authSelectors';
import { selectStations } from '../../store/Selectors/filterSelectors';
import { selectSearchParams } from '../../store/Selectors/filterSelectors';

const TrainSearchResultList = ({ filters }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectUser);
  const stationsList = useSelector(selectStations);
  const [searchParams,setSearchParams] = useState(useSelector(selectSearchParams));
  const [trainData,setTrainData] = useState(useSelector(selectTrains));
  console.log('15 trainData:', trainData);

  const {formattedTrainDate, date, } = searchParams;  
  
  if (!trainData || trainData.length === 0 ) { 
    console.log('No trains found in the store. Checking localStorage...');
    const trainSearchParams = localStorage.getItem('trainSearchParams');
    const localTrainsData = localStorage.getItem('trains');
    if(localTrainsData?.length > 0 && trainSearchParams?.length > 0){
      const { fromStnCode : localFromStnCode, toStnCode : localToStnCode } = JSON.parse(trainSearchParams);
      let localTrains = [];
      if (localTrainsData) {
        try {
          localTrains = JSON.parse(localTrainsData);
        } catch (error) {
          console.error("Error parsing trains data from localStorage:", error);
          localTrains = []; // Set to an empty array if parsing fails
        }
      }
      if(localTrains[0]?.fromStnCode === localFromStnCode || localTrains[0]?.toStnCode === localToStnCode ){
        setTrainData(localTrains);
        setSearchParams(JSON.parse(trainSearchParams));
      }
    }
  }


  const totalDuration = (duration) => {
    // Split the duration into hours and minutes
    const [hours, minutes] = duration?.split(':').map((timePart) => parseInt(timePart, 10));
  
    return `${hours}h ${minutes}min`;
  }

  const getStationName = (stationCode) => {
    const station = stationsList.find((stn) => stn?.split(" - ")[1] === stationCode);
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
      console.log('trains:', trains);
      
      return trains?.filter(train => {
        
        let isMatch = true;
  
        const departureHour = parseInt(train?.departureTime?.split(':')[0], 10);
        const arrivalHour = parseInt(train?.arrivalTime?.split(':')[0], 10);
  
        const seatClassesArray = train?.avlClasses;
  
        if (filters.ac) {
          isMatch = isMatch && seatClassesArray.some(cls => ['1A', '2A', '3A', '3E', 'CC', 'EC'].includes(cls));
        }
        if (filters.departureEarlyMorning) {
          isMatch = isMatch && departureHour >= 0 && departureHour < 6;
        }
        if (filters.departureMorning) {
          isMatch = isMatch && departureHour >= 6 && departureHour < 12;
        }
        if (filters.departureMidDay) {
          isMatch = isMatch && departureHour >= 12 && departureHour < 18;
        }
        if (filters.departureNight) {
          isMatch = isMatch && departureHour >= 18 && departureHour < 24;
        }
        if (filters.arrivalEarlyMorning) {
          isMatch = isMatch && arrivalHour >= 0 && arrivalHour < 6;
        }
        if (filters.arrivalMorning) {
          isMatch = isMatch && arrivalHour >= 6 && arrivalHour < 12;
        }
        if (filters.arrivalMidDay) {
          isMatch = isMatch && arrivalHour >= 12 && arrivalHour < 18;
        }
        if (filters.arrivalNight) {
          isMatch = isMatch && arrivalHour >= 18 && arrivalHour < 24;
        }
        if (filters['SL']) {
          isMatch = isMatch && seatClassesArray.includes('SL');
        }
        if (filters['3A']) {
          isMatch = isMatch && seatClassesArray.includes('3A');
        }
        if (filters['2A']) {
          isMatch = isMatch && seatClassesArray.includes('2A');
        }
        if (filters['1A']) {
          isMatch = isMatch && seatClassesArray.includes('1A');
        }
  
        return isMatch;
      });
      
    };

    
    return applyFilters(trainData, filters);
  }, [trainData, filters]);
  
  
  const handleBooking = (train) =>{
    console.log('Auth status:', isAuthenticated)
    if(isAuthenticated){
      navigate('/trainbookingdetails',{state:{ trainData: train}})
    }
    else{
      navigate('/login',{
        state:{
          redirectTo:'/trainbookingdetails',
          trainData:train,
        }
      });
    }
  }


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
      
      {filteredTrainData?.length > 0 ? (
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
                      background: "linear-gradient(to right,rgb(244, 249, 254), #ffffff, #f8f9fa)",
                      borderRadius: "12px"
                    }}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                          <div className="text-primary fw-bold" style={{fontSize: "0.8rem"}}>{getStationName(train.fromStnCode)}</div>
                          <div className="h4 mb-0 ">{convertTo12HourFormat(train.departureTime)}</div>
                          <div className="text-black-50 bold">{formattedTrainDate}</div>
                        </div>

                        <div className="flex-grow-1 px-4">
                          <div className="journey-line position-relative">
                            <div className="distance text-center mb-2">
                              <span 
                                className="badge bg-light text-dark px-3 py-2" 
                                style={{boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}
                              >
                                {train.distance} km
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

                            <div className="duration text-center mt-2">
                              <span 
                                className="badge bg-light text-dark px-3 py-2" 
                                style={{boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}
                              >
                                {totalDuration(train.duration)}
                              </span>
                            </div>

                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-primary fw-bold" style={{fontSize: "0.8rem"}}>{getStationName(train.toStnCode)}</div>
                          <div className="h4 mb-0 ">{getTrainArrival(train,date,"time")}</div>
                          <div className="text-black-50 bold">{getTrainArrival(train,date,"date")}</div>
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
                    </button> */}

                <div className="w-100 border-top my-2 opacity-25"></div>

                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="row text-center g-3 justify-content-start">
                    {train.seats?.map((cls, index) => (
                      <div key={index} className="col-auto">
                        <div
                          className="availability-card p-3 position-relative"
                          style={{
                            minWidth: "180px",
                            background: cls.availableSeats ? "linear-gradient(145deg, #e8f5e9, #f1f8e9)" : "linear-gradient(145deg, #ffebee, #fce4ec)",
                            border: `1px solid ${cls.availableSeats ? '#81c784' : '#e57373'}`,
                            borderRadius: "10px",
                            cursor: "pointer",
                            transition: "transform 0.2s ease",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                          }}
                          onClick={() => handleBooking(train)}
                        >
                          <div 
                            className="position-absolute badge bg-danger"
                            style={{
                              top: "-10px",
                              right: "10px",
                              fontSize: "0.7rem",
                              padding: "4px 8px",
                              zIndex: "1"
                            }}
                          >
                            Tatkal
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0 fw-bold" style={{color: cls.availableSeats ? "#2e7d32" : "#c62828"}}>{cls.seatClass}</h6>
                            <div className="price fw-bold">₹{cls.price}</div>
                          </div>
                          <div className="status-badge mb-1" style={{
                            color: cls.availableSeats ? "#2e7d32" : "#c62828",
                            fontSize: "0.9rem"
                          }}>
                            {cls.status}
                          </div>
                          <div className="availability small" style={{color: "#666"}}>
                            {cls.availableSeats} available
                          </div>
                        </div>
                      </div>
                    ))}
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
