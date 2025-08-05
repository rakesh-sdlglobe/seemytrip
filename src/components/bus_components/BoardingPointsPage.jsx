import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaInfoCircle, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BoardingPointsPage = ({
  boardingPoints = [],
  droppingPoints = [],
  selectedBoarding,
  selectedDropping,
  onBoardingChange,
  onDroppingChange,
  showContactInfo = true
}) => { 
  const navigate = useNavigate();
  
  // Add search state
  const [boardingSearch, setBoardingSearch] = useState('');
  const [droppingSearch, setDroppingSearch] = useState('');

  // Format time and include date/month
  const formatTimeWithDate = (timeString) => {

    try {
      // Parse the ISO date string to get the actual date
      const dateObj = new Date(timeString);
      
      // Check if the date is valid
      if (isNaN(dateObj.getTime())) {
        console.log("Invalid date string, using current date");
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('en-US', { month: 'short' });
        
        // Format time from the original string
        const timePart = timeString.split('T')[1] || timeString;
        const [h, m] = timePart.split(':');
        let hour = parseInt(h, 10);
        const minute = m;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;
        
        return {
          time: `${hour}:${minute} ${ampm}`,
          date: `${day} ${month}`
        };
      }
      
      // Get the actual date from the time string
      const day = dateObj.getDate();
      const month = dateObj.toLocaleString('en-US', { month: 'short' });
      
      // Format time
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hour = hours % 12 || 12;
      const minute = minutes.toString().padStart(2, '0');
      
      const result = {
        time: `${hour}:${minute} ${ampm}`,
        date: `${day} ${month}`
      };
      
      console.log("formatTimeWithDate result:", result);
      return result;
    } catch (error) {
      console.error("Error parsing date:", error);
      return { time: "-", date: "-" };
    }
  };

  // Format boarding points
  const processedBoardingPoints = boardingPoints.map(point => ({
    location: point.CityPointName || point.location,
    timeData: formatTimeWithDate(point.CityPointTime || point.time),
    phone: point.ContactNumber || point.PhoneNumber || point.MobileNumber || point.phone || '',
    address: point.CityPointLocation || point.Address || point.address || '',
    id: point.CityPointId || point.id
  }));

  // Format dropping points
  const processedDroppingPoints = droppingPoints.map(point => ({
    location: point.CityPointName || point.location,
    timeData: formatTimeWithDate(point.CityPointTime || point.time),
    address: point.CityPointLocation || point.Address || point.address || '',
    note: point.Note || point.Description || point.note || '',
    id: point.CityPointId || point.id
  }));

  // Filter boarding points based on search
  const filteredBoardingPoints = processedBoardingPoints.filter(point =>
    point.location.toLowerCase().includes(boardingSearch.toLowerCase())
  );

  // Filter dropping points based on search
  const filteredDroppingPoints = processedDroppingPoints.filter(point =>
    point.location.toLowerCase().includes(droppingSearch.toLowerCase())
  );

  return (
    <>
    <div className="boarding-points-container">
      <style jsx>{`
        .boarding-points-container {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }

        .search-container {
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 10px 15px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #cd2c22;
          box-shadow: 0 0 0 3px rgba(205, 44, 34, 0.1);
        }

        .search-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
          z-index: 1;
        }

        .search-input-with-icon {
          padding-left: 40px;
        }

        .point-item {
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .point-item input[type="radio"] {
          position: absolute;
          opacity: 0;
          width: 20px;
          height: 20px;
          margin: 0;
          cursor: pointer;
        }

        .point-item input[type="radio"]:checked + .point-content {
          border-color: #cd2c22;
          background: rgba(205, 44, 34, 0.1);
        }

        .point-item input[type="radio"]:checked + .point-content::before {
          content: "✓";
          position: absolute;
          top: 10px;
          right: 10px;
          background: #cd2c22;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        // .point-item:hover {
        // //   border-color: #007bff;
        // //   box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);
        // }

        .point-content {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px;
          border-radius: 6px;
        //   border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .point-icon {
          width: 40px;
          height: 40px;
          background: #cd2c22;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-details {
          flex-grow: 1;
        }

        .point-details h6 {
          margin: 0 0 5px 0;
          font-weight: 600;
          color: #343a40;
        }

        .point-details p {
          margin: 0;
          font-size: 0.9rem;
          color: #6c757d;
        }

        .point-time {
          font-weight: 600;
          color: #cd2c22;
          font-size: 1rem;
          text-align: right;
          background: none;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #343a40;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .no-data {
          text-align: center;
          padding: 40px 20px;
          color: #6c757d;
        }

        .no-data-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          opacity: 0.5;
        }

        .contact-info {
          background: rgba(205, 44, 34, 0.1);
          border: 1px solid #cd2c22;
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }

        .contact-info h6 {
        width: 100%;
    
          color: #cd2c22;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-info p {

          margin: 0;
          color: #424242;
          font-size: 0.9rem;
        }

        .search-results-info {
          font-size: 0.9rem;
          color: #6c757d;
          margin-bottom: 15px;
          font-style: italic;
        }
      `}</style>

      {/* Boarding Points Section */}
      {processedBoardingPoints.length > 0 && (
        <div>
          <h5 className="section-title">
            <FaMapMarkerAlt className="text-primary" />
            Boarding Points
          </h5>

          {/* Boarding Points Search */}
          <div className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search boarding points..."
                value={boardingSearch}
                onChange={(e) => setBoardingSearch(e.target.value)}
                className="search-input search-input-with-icon"
              />
            </div>
            {boardingSearch && (
              <div className="search-results-info">
                Showing {filteredBoardingPoints.length} of {processedBoardingPoints.length} boarding points
              </div>
            )}
          </div>

          {filteredBoardingPoints.length > 0 ? (
            filteredBoardingPoints.map((point, idx) => (
              <label key={idx} className="point-item d-block">
                <input
                  type="radio"
                  name="boarding"
                  value={point.location}
                  checked={selectedBoarding === point.location}
                  onChange={(e) => {
                    console.log("Boarding point selected:", e.target.value);
                    onBoardingChange(e.target.value);
                  }}
                  className="d-none"
                />
                <div className="point-content">
                  <div className="point-icon">
                    <FaClock />
                  </div>
                  <div className="point-details">
                    <h6>{point.location}</h6>
                    {/* {showContactInfo && (
                      <p>
                        <FaPhone className="me-1" />
                        Contact: {point.phone}
                      </p>
                    )} */}
                    {point.address && (
                      <p>
                        {point.address}
                      </p>
                    )}
                  </div>
                  <div className="point-time">
                      <div className="time">{point.timeData.time}</div>
                      <div className="date">{point.timeData.date}</div>
                    </div>
                </div>
              </label>
            ))
          ) : (
            <div className="no-data">
              <FaInfoCircle className="no-data-icon" />
              <p>No boarding points found matching "{boardingSearch}"</p>
            </div>
          )}
        </div>
      )}

      {/* Dropping Points Section */}
      {processedDroppingPoints.length > 0 && (
        <div>
          <h5 className="section-title">
            <FaMapMarkerAlt className="text-primary" />
            Dropping Points
          </h5>

          {/* Dropping Points Search */}
          <div className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search dropping points..."
                value={droppingSearch}
                onChange={(e) => setDroppingSearch(e.target.value)}
                className="search-input search-input-with-icon"
              />
            </div>
            {droppingSearch && (
              <div className="search-results-info">
                Showing {filteredDroppingPoints.length} of {processedDroppingPoints.length} dropping points
              </div>
            )}
          </div>

          {filteredDroppingPoints.length > 0 ? (
            filteredDroppingPoints.map((point, idx) => (
              <label key={idx} className="point-item d-block">
                <input
                  type="radio"
                  name="dropping"
                  value={point.location}
                  checked={selectedDropping === point.location}
                  onChange={(e) => {
                    console.log("Dropping point selected:", e.target.value);
                    onDroppingChange(e.target.value);
                  }}
                  className="d-none"
                />
                <div className="point-content">
                  <div className="point-icon">
                    <FaClock />
                  </div>
                  <div className="point-details">
                    <h6>{point.location}</h6>
                    {point.address && (
                      <p>
                        {point.address}
                      </p>
                    )}
                    {/* {point.note && (
                      <p className="text-muted">{point.note}</p>
                    )} */}
                  </div>
                  <div className="point-time">
                      <div className="time">{point.timeData.time}</div>
                      <div className="date">{point.timeData.date}</div>
                    </div>
                </div>
              </label>
            ))
          ) : (
            <div className="no-data">
              <FaInfoCircle className="no-data-icon" />
              <p>No dropping points found matching "{droppingSearch}"</p>
            </div>
          )}
        </div>
      )}

     
     
    </div>
    
    <div className='mt-3'>
         {/* Contact Info */}
    {showContactInfo && processedBoardingPoints.length > 0 && (
        <div className="contact-info">
          <h6>
            <FaPhone />
            Contact Information
          </h6>
          <p>
            For any queries regarding boarding points, please contact our customer support at{' '}
            <strong>{processedBoardingPoints[0]?.phone || '7303093510'}</strong>
          </p>
        </div>
      )}
    </div>

    </>
  );
};

export default BoardingPointsPage;
