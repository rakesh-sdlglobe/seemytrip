import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaInfoCircle } from 'react-icons/fa';
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
  // Format time and include date/month
  const formatTimeWithDate = (timeString) => {

 if (!timeString) return { time: "-", date: "-" }; 
    
    // Get current date for display
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('en-US', { month: 'short' });
    
    // Format time
    const [h, m] = timeString.split(':');
    let hour = parseInt(h, 10);
    const minute = m;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    
    return {
      time: `${hour}:${minute} ${ampm}`,
      date: `${day} ${month}`
    };
  };

  // Format boarding points
  const processedBoardingPoints = boardingPoints.map(point => ({
    location: point.CityPointName || point.location,
    timeData: formatTimeWithDate(point.CityPointTime || point.time),
    phone: point.phone || '7303093510',
    address: point.CityPointLocation || point.address || '',
    id: point.CityPointId || point.id
  }));

  // Format dropping points
  const processedDroppingPoints = droppingPoints.map(point => ({
    location: point.CityPointName || point.location,
    timeData: formatTimeWithDate(point.CityPointTime || point.time),
    address: point.CityPointLocation || point.address || '',
    note: point.note || '',
    id: point.CityPointId || point.id
  }));

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
          border-color: #007bff;
          background: #f8f9ff;
        }

        .point-item input[type="radio"]:checked + .point-content::before {
          content: "✓";
          position: absolute;
          top: 10px;
          right: 10px;
          background: #007bff;
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
          background: #007bff;
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
          color: #007bff;
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
          background: #e3f2fd;
          border: 1px solid #bbdefb;
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }

        .contact-info h6 {
        width: 100%;
    
          color: #1976d2;
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
      `}</style>

      {/* Boarding Points Section */}
      {processedBoardingPoints.length > 0 && (
        <div>
          <h5 className="section-title">
            <FaMapMarkerAlt className="text-primary" />
            Boarding Points
          </h5>

          {processedBoardingPoints.map((point, idx) => (
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
          ))}
        </div>
      )}

      {/* Dropping Points Section */}
      {processedDroppingPoints.length > 0 && (
        <div>
          <h5 className="section-title">
            <FaMapMarkerAlt className="text-primary" />
            Dropping Points
          </h5>

          {processedDroppingPoints.map((point, idx) => (
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
          ))}
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
