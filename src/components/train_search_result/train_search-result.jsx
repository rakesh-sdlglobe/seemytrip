import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTrains } from '../../store/Selectors/filterSelectors';
import { useNavigate } from 'react-router-dom';
import {selectUser} from'../../store/Selectors/authSelectors';

const TrainSearchResultList = ({ filters }) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectUser);

  const trainData = useSelector(selectTrains) || [];

  const filteredTrainData = useMemo(() => {
    const applyFilters = (trains, filters) => {
      return trains.filter(train => {
        
        let isMatch = true;
  
        const departureHour = parseInt(train.departure_time.split(':')[0], 10);
        const arrivalHour = parseInt(train.arrival_time.split(':')[0], 10);
  
        const seatClassesArray = train.seatClasses.split(',');
  
        if (filters.ac) {
          isMatch = isMatch && seatClassesArray.some(cls => ['1A', '2A', '3A'].includes(cls));
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
      {filteredTrainData.length > 0 ? (
        filteredTrainData.map(train => (
          <div key={train.id} className="col-xl-12 col-lg-12 col-md-12">
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
                      <h5 className="mb-2 fw-bold" style={{color: "#2c3e50"}}>{train.trainName}</h5>
                      <div className="text-muted small d-flex align-items-center">
                        <i className="fas fa-calendar-alt me-2"></i>
                        Runs on: 
                        <span className="mx-1"> S </span>
                        <span className="mx-1">M</span>
                        <span className="mx-1">T</span>
                        <span className="mx-1" style={{ fontWeight: 'bold', color: '#d20000' }}>W</span>
                        <span className="mx-1"> T </span>
                        <span className="mx-1">F</span>
                        <span className="mx-1" style={{ fontWeight: 'bold', color: '#d20000' }}>S</span>

                      </div>
                    </div>

                    <div className="journey-details flex-grow-1 mx-4 p-3" style={{
                      background: "linear-gradient(to right, #f8f9fa, #ffffff, #f8f9fa)",
                      borderRadius: "12px"
                    }}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                          <div className="text-primary fw-bold" style={{fontSize: "0.9rem"}}>{train.startStation}</div>
                          <div className="h4 mb-0 fw-bold">4:20 PM</div>
                          <div className="text-muted small">Tue, 12 NOV</div>
                        </div>

                        <div className="flex-grow-1 px-4">
                          <div className="journey-line position-relative">
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
                              <span className="badge bg-light text-dark px-3 py-2" style={{boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}>
                                12hr 40min
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-primary fw-bold" style={{fontSize: "0.9rem"}}>{train.endStation}</div>
                          <div className="h4 mb-0 fw-bold">5:30 AM</div>
                          <div className="text-muted small">Wed, 13 NOV</div>
                        </div>
                      </div>
                    </div>

                    {/* <button className="btn btn-primary px-4 py-2" style={{
                      background: "linear-gradient(45deg, #2196F3, #1976D2)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(33, 150, 243, 0.3)"
                    }}>
                      <i className="fas fa-ticket-alt me-2"></i>
                      Availability
                    </button> */}
                  </div>
                </div>

                <div className="w-100 border-top my-2 opacity-25"></div>

                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="row text-center g-3 justify-content-start">
                    {train.seats.map((cls, index) => (
                      <div key={index} className="col-auto">
                        <div
                          className="availability-card p-3"
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
