import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTrains } from '../../store/Selectors/filterSelectors';
import { useNavigate } from 'react-router-dom';

const TrainSearchResultList = ({ filters }) => {
    const navigate = useNavigate();

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
  
  const handleBooking = (train) => {
    // navigate('/booking-page', { state: { trainData: train } });
    navigate('/trainbookingdetails', { state: { trainData: train } });
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
      {filteredTrainData.length > 0 ? (
        filteredTrainData.map(train => (
          <div key={train.id} className="col-xl-12 col-lg-12 col-md-12" >
            <div className="train-availability-card bg-white rounded-3 p-3" style={{ boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)" }}>
              <div className="row gy-4 align-items-center justify-content-between">
                {/* Train Info Header */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="train-name me-4">
                      <h5 className="mb-1">{train.trainName}</h5>
                      {/* <div className="text-muted small">Runs on: {train.trainNumber}</div> */}
                      <div className="text-muted small">
                        Runs on: 
                        <span> S M </span>
                        <span style={{ fontWeight: 'bold', color: 'black' }}>W</span>
                        <span> T F </span>
                        <span style={{ fontWeight: 'bold', color: 'black' }}>S</span>
                      </div>

                    </div>
                    <div className="d-flex align-items-center flex-grow-1" style={{ padding: '10px', borderRadius: '8px', }}>
                      <div className="d-flex flex-column align-items-center me-1" style={{ flex: '1' }}>
                        {/* <div className="fw-bold fs-6">{train.departure_time}</div>
                        <div className="text-muted small">{train.startStation}</div> */}
                        <div className="text-muted small" style={{fontWeight: 'bold' }}>{train.startStation}</div>
                        <div className="fw-bold fs-6">4:20 PM</div>
                        <div className="text-muted small">Tue, 12 NOV</div>
                      </div>
                      <div className="text-center" style={{ flex: '1', position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', justifyContent: 'center' }}>
                          <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
                          {/* <div style={{ margin: '0 10px', fontWeight: 'bold', fontSize: '16px', zIndex: 1 }}>{train.duration}</div> */}
                          <div style={{ margin: '0 10px', fontWeight: 'bold', fontSize: '16px', zIndex: 1 }}>12hr 40min</div>
                          <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center ms-1" style={{ flex: '1' }}>
                        <div className="text-muted small" style={{fontWeight: 'bold' }}>{train.endStation}</div>
                        {/* <div className="fw-bold fs-6">{train.arrival_time}</div> */}
                        <div className="fw-bold fs-6">5:30 AM</div>
                        <div className="text-muted small">Wed, 13 NOV</div>
                      </div>
                    </div>
                    <button className="btn btn-primary ms-3">Availability  <span className="arrow-down" /></button>
                  </div>
                </div>
                {/* Train Class Availability */}
                <div className="w-100 border-top border-secondary my-1"></div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="row text-center gx-2 gy-2">
                    {train.seats.map((cls, index) => (
                      <div key={index} className="col-auto flex-shrink-0">
                        <div
                          className={`availability-card cursor-pointer ${cls.availableSeats ? 'bg-success-subtle' : 'bg-danger-subtle'} rounded-2 p-2`}
                          style={{
                            border: `1px solid ${cls.availableSeats ? 'rgba(40, 167, 69, 0.2)' : 'rgba(220, 53, 69, 0.2)'}`,
                            backgroundColor: cls.availableSeats ? 'rgba(40, 167, 69, 0.05)' : 'rgba(220, 53, 69, 0.05)', // Lighter
                            cursor: 'pointer', // Add this line to change the cursor on hover
                          }}
                          onClick={() => handleBooking(train)}
                        >
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <h5 className="mb-1">{cls.seatClass}</h5>
                            </div>
                            <div className="col text-end">
                              <div className="price">₹{cls.price}</div>
                            </div>
                          </div>
                          <div className="availability-status mt-1">{cls.status}</div>
                          <div className="availability-percentage">{cls.availableSeats} available</div>
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
