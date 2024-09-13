// import React, { useState, useEffect } from 'react';

// const SerchComponent = () => {
//   const [stations, setStations] = useState([]);
//   const [leavingFrom, setLeavingFrom] = useState('');
//   const [goingTo, setGoingTo] = useState('');
//   const [journeyDate, setJourneyDate] = useState('');
//   const [error, setError] = useState(null);
//   const [trainData, setTrainData] = useState([]);

//   useEffect(() => {
//     const fetchStations = async () => {
//       try {
//         const response = await fetch('http://localhost:3002/api/train/stations');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setStations(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchStations();
//   }, []);

//   const fetchStationParams = async () => {
//     try {
//       const response = await fetch(`http://localhost:3002/api/train/station-params?leavingFrom=${leavingFrom}&goingTo=${goingTo}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch train data');
//       }
//       const data = await response.json();
//       console.log('Response:', data); // Verify the data structure here
//       setTrainData(data.transformedData || data); // Adjust based on actual data structure
//     } catch (err) {
//       setError(err.message);
//     }
//   };


//   const handleSearch = () => {
//     fetchStationParams();
//   };

//   return (
//     <div className="py-5 bg-primary position-relative">
//       <div className="container">
//         <div className="row justify-content-center align-items-center">
//           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//             <div className="search-wrap position-relative">
//               <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                 <div className="col-xl-8 col-lg-7 col-md-12">
//                   <div className="row gy-3 gx-md-3 gx-sm-2">
//                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                       <div className="form-group hdd-arrow mb-0">
//                         <label className="text-light text-uppercase opacity-75">Leaving From</label>
//                         <select
//                           className="leaving form-control fw-bold"
//                           style={{ color: 'black' }}
//                           value={leavingFrom}
//                           onChange={(e) => setLeavingFrom(e.target.value)}
//                         >
//                           <option value="">Select</option>
//                           {stations.map((station, index) => (
//                             <option key={index} value={station}>
//                               {station}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                       <div className="form-group hdd-arrow mb-0">
//                         <label className="text-light text-uppercase opacity-75">Going To</label>
//                         <select
//                           className="goingto form-control fw-bold"
//                           style={{ color: 'black' }}
//                           value={goingTo}
//                           onChange={(e) => setGoingTo(e.target.value)}
//                         >
//                           <option value="">Select</option>
//                           {stations.map((station, index) => (
//                             <option key={index} value={station}>
//                               {station}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-4 col-lg-5 col-md-12">
//                   <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                     <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                       <div className="form-group mb-0">
//                         <label className="text-light text-uppercase opacity-75">Journey Date</label>
//                         <input
//                           type="date"
//                           className="form-control fw-bold"
//                           placeholder="Select Journey Date"
//                           id="journeyDate"
//                           value={journeyDate}
//                           onChange={(e) => setJourneyDate(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                       <div className="form-group mb-0">
//                         <button
//                           type="button"
//                           className="btn btn-whites text-primary full-width fw-medium"
//                           onClick={handleSearch}
//                         >
//                           <i className="fa-solid fa-magnifying-glass me-2" />Search
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {error && (
//           <div className="mt-4 alert alert-danger">
//             <strong>Error:</strong> {error}
//           </div>
//         )}
//         {trainData.length > 0 && (
//           <div className="mt-4">
//             <h4>Train Results</h4>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>TrainID</th>
//                   <th>TrainName</th>
//                   <th>Duration</th>
//                   <th>DepartureTime</th>
//                   <th>ArrivalTime</th>
//                   <th>Classes</th>
//                   <th>LastUpdated</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {trainData.map((train) => (
//                   <tr key={train.id}>
//                     <td>{train.id}</td>
//                     <td>{train.name}</td>
//                     <td>{train.duration}</td>
//                     <td>{train.departure}</td>
//                     <td>{train.arrival}</td>
//                     <td>
//                       {train.classes.map((cls, index) => (
//                         <div key={index}>
//                           {cls.type} - {cls.price} - {cls.status} - {cls.availability}
//                         </div>
//                       ))}
//                     </td>
//                     <td>{new Date(train.lastUpdated).toLocaleString()}</td> {/* Format date */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { stationsData } from './model/stationsData';
import { trainsData } from './model/trainsData';
import { seatsData } from './model/seatsData';
import { routesData } from './model/routesData';

const SearchComponent = ({
  onSearchResults = () => { },
  buttonText = 'Search',
  backgroundColor = '#f0f0f0', // Default background color
  buttonBackgroundColor = 'auto', // Default button background color
  buttonTextColor = 'auto', // Default button text color
  height = 'auto',              // Default height
  customStyles = {},            // Additional custom styles
  leavingLabel = 'Leaving From',  // Default label for the 'from' station
  goingLabel = 'Going To',        // Default label for the 'to' station
  dateLabel = 'Journey Date'      // Default label for journey date
}) => {
  const [fromStation, setFromStation] = useState(() => sessionStorage.getItem('fromStation') || '');
  const [toStation, setToStation] = useState(() => sessionStorage.getItem('toStation') || '');
  const [journeyDate, setJourneyDate] = useState(() => sessionStorage.getItem('journeyDate') || '');
  
  useEffect(() => {
    sessionStorage.setItem('fromStation', fromStation);
    sessionStorage.setItem('toStation', toStation);
    sessionStorage.setItem('journeyDate', journeyDate);
  }, [fromStation, toStation, journeyDate]);

  const handleFromStationChange = (e) => {
    setFromStation(e.target.value);
  };

  const handleToStationChange = (e) => {
    setToStation(e.target.value);
  };

  const handleJourneyDateChange = (e) => {
    setJourneyDate(e.target.value);
  };

  const handleSearch = () => {
    const fromStationId = parseInt(fromStation, 10);
    const toStationId = parseInt(toStation, 10);

    if (!fromStationId || !toStationId || !journeyDate) {
      alert("Please select both stations and journey date.");
      return;
    }

    const results = findTrainsBetweenStations(fromStationId, toStationId);
    onSearchResults(results);
  };

  const findTrainsBetweenStations = (fromStationId, toStationId) => {
    const fromStationName = stationsData.find(station => station.id === fromStationId)?.name;
    const toStationName = stationsData.find(station => station.id === toStationId)?.name;

    const filteredTrains = trainsData.filter(train => train.startStationId === fromStationId && train.endStationId === toStationId);

    const resultsWithSeats = filteredTrains.map(train => {
      const seats = seatsData.find(seat => seat.trainId === train.id)?.classes || [];
      const formattedSeats = seats.map(seat => ({
        type: seat.classType,
        price: `₹${seat.price}`,
        status: seat.status,
        availability: `${seat.availability}%`
      }));

      const route = routesData.find(route => route.trainId === train.id);
      const trainRoute = route?.stops || [];

      const departureTime = trainRoute.length > 0 ? trainRoute[0].departureTime : null;
      const arrivalTime = trainRoute.length > 0 ? trainRoute[trainRoute.length - 1].arrivalTime : null;

      return {
        ...train,
        fromStation: fromStationName,
        toStation: toStationName,
        classes: formattedSeats,
        departureTime,
        arrivalTime
      };
    });

    return resultsWithSeats;
  };

  return (
    <>
      <style>
        {`
          .search-component {
            background-color: ${backgroundColor}; 
            height: ${height};              
            padding: 20px;              
            background-size: cover;            
            background-position: center;       
          }

          @media (max-width: 768px) {
            .search-component {
              height: 340px;
              padding: 15px;    
            }
          }

          @media (max-width: 576px) {
            .search-component {
              height: 320px;
              padding: 10px;     
            }
          }
        `}
      </style>
      <div className="search-component">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap position-relative">
                <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                  <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0">
                          {leavingLabel && (
                            <label className="text-light text-uppercase opacity-75">{leavingLabel}</label>
                          )}
                          <select
                            id="fromStation"
                            className="form-control fw-bold"
                            value={fromStation}
                            onChange={handleFromStationChange}
                          >
                            <option value="">Select</option>
                            {stationsData.map(station => (
                              <option key={station.id} value={station.id}>
                                {station.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group hdd-arrow mb-0">
                          {goingLabel && (
                            <label className="text-light text-uppercase opacity-75">{goingLabel}</label>
                          )}
                          <select
                            id="toStation"
                            className="form-control fw-bold"
                            value={toStation}
                            onChange={handleToStationChange}
                          >
                            <option value="">Select</option>
                            {stationsData.map(station => (
                              <option key={station.id} value={station.id}>
                                {station.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="form-group mb-0">
                          {dateLabel && (
                            <label className="text-light text-uppercase opacity-75">{dateLabel}</label>
                          )}
                          <input
                            type="date"
                            className="form-control fw-bold"
                            placeholder="Select Journey Date"
                            id="journeyDate"
                            value={journeyDate}
                            onChange={handleJourneyDateChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group mb-0">
                          <button
                            type="button"
                            className="btn full-width fw-medium"
                            style={{ 
                              backgroundColor: buttonBackgroundColor, // Custom button background color
                              color: buttonTextColor // Custom button text color
                            }}
                            onClick={handleSearch}
                          >
                            <i className="fa-solid fa-magnifying-glass me-2" />
                            {buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;

