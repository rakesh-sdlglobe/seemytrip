import React, { useState, useMemo, useCallback } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaInfoCircle, FaSearch } from 'react-icons/fa';

// ✅ Reusable PointList Component with memoization
const PointList = React.memo(({
  title,
  points,
  selectedPoint,
  onChange,
  searchValue,
  setSearchValue,
  type,
  hideHeadings
}) => {
  const filteredPoints = useMemo(() =>
    points.filter(point =>
      point.location.toLowerCase().includes(searchValue.toLowerCase())
    ), [points, searchValue]
  );

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, [setSearchValue]);

  const handlePointChange = useCallback((value) => {
    onChange(value);
  }, [onChange]);

  return (
    <div className="point-list-section">
      {!hideHeadings && (
        <h2 className="section-title">
          <FaMapMarkerAlt aria-hidden="true" />
          {title}
        </h2>
      )}

      {/* Search Input */}
      <div className="search-container">
        <label htmlFor={`search-${type}`} className="visually-hidden">
          Search {title.toLowerCase()}
        </label>
        <div className="search-wrapper">
          <FaSearch className="search-icon" aria-hidden="true" />
          <input
            id={`search-${type}`}
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={searchValue}
            onChange={handleSearchChange}
            className="search-input search-input-with-icon"
            aria-describedby={searchValue ? `${type}-search-results` : undefined}
          />
        </div>
        {searchValue && (
          <div id={`${type}-search-results`} className="search-results-info" aria-live="polite">
            Showing {filteredPoints.length} of {points.length} {title.toLowerCase()}
          </div>
        )}
      </div>

      {/* Points List */}
      {filteredPoints.length > 0 ? (
        <ul className="points-list" aria-label={title}>
          {filteredPoints.map((point) => (
            <li key={point.id} className="point-item">
              <input
                type="radio"
                name={type}
                id={`${type}-${point.id}`}
                value={point.location}
                checked={selectedPoint === point.location}
                onChange={() => handlePointChange(point.location)}
                className="point-input visually-hidden"
              />
              <label htmlFor={`${type}-${point.id}`} className="point-content">
                <div className="point-icon" aria-hidden="true">
                  <FaClock />
                </div>
                <div className="point-details">
                  <h3 className="point-location">{point.location}</h3>
                  {point.address && (
                    <p className="point-address">{point.address}</p>
                  )}
                </div>
                <div className="point-time">
                  <time dateTime={point.timeData.rawTime} className="time">
                    {point.timeData.time}
                  </time>
                  <span className="date">{point.timeData.date}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-data" role="status" aria-live="polite">
          <FaInfoCircle className="no-data-icon" aria-hidden="true" />
          <p>No {title.toLowerCase()} found matching "{searchValue}"</p>
        </div>
      )}
    </div>
  );
});

PointList.displayName = 'PointList';

const BoardingPointsPage = ({
  boardingPoints = [],
  droppingPoints = [],
  selectedBoarding,
  selectedDropping,
  onBoardingChange,
  onDroppingChange,
  showContactInfo = true,
  hideHeadings = false
}) => {
  const [boardingSearch, setBoardingSearch] = useState('');
  const [droppingSearch, setDroppingSearch] = useState('');

  // ✅ Format time and include date/month with proper time object
  const formatTimeWithDate = useCallback((timeString) => {
    try {
      const dateObj = new Date(timeString);
      let rawTime = timeString;

      if (isNaN(dateObj.getTime())) {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('en-US', { month: 'short' });

        const timePart = timeString.split('T')[1] || timeString;
        const [h, m] = timePart.split(':');
        let hour = parseInt(h, 10);
        const minute = m || '00';
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;

        rawTime = `${currentDate.toISOString().split('T')[0]}T${h.padStart(2, '0')}:${minute.padStart(2, '0')}:00`;

        return {
          time: `${hour}:${minute.padStart(2, '0')} ${ampm}`,
          date: `${day} ${month}`,
          rawTime
        };
      }

      const day = dateObj.getDate();
      const month = dateObj.toLocaleString('en-US', { month: 'short' });

      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hour = hours % 12 || 12;
      const minute = minutes.toString().padStart(2, '0');

      return {
        time: `${hour}:${minute} ${ampm}`,
        date: `${day} ${month}`,
        rawTime: timeString
      };
    } catch (error) {
      return { time: "-", date: "-", rawTime: "" };
    }
  }, []);

  // ✅ Format boarding & dropping points with useMemo for performance
  const processedBoardingPoints = useMemo(() =>
    boardingPoints.map(point => ({
      location: point.CityPointName || point.location,
      timeData: formatTimeWithDate(point.CityPointTime || point.time),
      phone: point.ContactNumber || point.PhoneNumber || point.MobileNumber || point.phone || '',
      address: point.CityPointLocation || point.Address || point.address || '',
      id: point.CityPointId || point.id || Math.random().toString(36).substr(2, 9)
    })), [boardingPoints, formatTimeWithDate]
  );

  const processedDroppingPoints = useMemo(() =>
    droppingPoints.map(point => ({
      location: point.CityPointName || point.location,
      timeData: formatTimeWithDate(point.CityPointTime || point.time),
      address: point.CityPointLocation || point.Address || point.address || '',
      note: point.Note || point.Description || point.note || '',
      id: point.CityPointId || point.id || Math.random().toString(36).substr(2, 9)
    })), [droppingPoints, formatTimeWithDate]
  );

  // Memoize change handlers
  const handleBoardingChange = useCallback((value) => {
    onBoardingChange(value);
  }, [onBoardingChange]);

  const handleDroppingChange = useCallback((value) => {
    onDroppingChange(value);
  }, [onDroppingChange]);

  return (
    <>
      <div className="boarding-points-container">
        <style jsx>{`
          .boarding-points-container {
            background: white;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
            margin-top: 16px;
            border: 1px solid #e5e7eb;
          }
          
          .point-list-section {
            margin-bottom: 1.5rem;
          }
          
          .search-container { 
            margin-bottom: 16px; 
          }
          
          .search-input {
            width: 100%; 
            padding: 8px 12px; 
            border: 1px solid #d1d5db;
            border-radius: 6px; 
            font-size: 12px; 
            transition: all 0.2s ease;
            background: #fafafa;
          }
          
          .search-input:focus {
            outline: none; 
            border-color: #cd2c22;
            box-shadow: 0 0 0 2px rgba(205, 44, 34, 0.1);
            background: white;
          }
          
          .search-wrapper { 
            position: relative; 
          }
          
          .search-icon {
            position: absolute; 
            left: 10px; 
            top: 50%; 
            transform: translateY(-50%);
            color: #9ca3af; 
            z-index: 1;
            font-size: 12px;
          }
          
          .search-input-with-icon { 
            padding-left: 32px; 
          }
          
          .points-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .point-item {
            border: 1px solid #e5e7eb; 
            border-radius: 6px; 
            padding: 0;
            margin-bottom: 10px; 
            transition: all 0.2s ease; 
            cursor: pointer; 
            position: relative;
            overflow: hidden;
            background: #fafafa;
          }
          
          .point-item:hover,
          .point-item:focus-within {
            border-color: #cd2c22;
            background: white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          
          .point-input:checked + .point-content {
            border-color: #cd2c22; 
            background: rgba(205, 44, 34, 0.03);
          }
          
          .point-input:checked + .point-content::before {
            content: "✓"; 
            position: absolute; 
            top: 8px; 
            right: 8px;
            background: #cd2c22; 
            color: white; 
            width: 18px; 
            height: 18px; 
            border-radius: 50%;
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 10px; 
            font-weight: bold;
          }
          
          .point-content { 
            display: flex; 
            align-items: center; 
            gap: 12px; 
            padding: 12px; 
            border-radius: 5px; 
            transition: all 0.2s ease; 
            cursor: pointer;
          }
          
          .point-icon {
            width: 32px; 
            height: 32px; 
            background: #f3f4f6; 
            color: #cd2c22;
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            flex-shrink: 0;
            border: 1px solid #e5e7eb;
            font-size: 12px;
          }
          
          .point-details { 
            flex-grow: 1; 
          }
          
          .point-location { 
            margin: 0 0 3px 0; 
            font-weight: 600; 
            color: #374151; 
            font-size: 13px;
            line-height: 1.3;
          }
          
          .point-address { 
            margin: 0; 
            font-size: 11px; 
            color: #6b7280; 
            line-height: 1.3;
          }
          
          .point-time { 
            font-weight: 600; 
            color: #cd2c22; 
            font-size: 12px; 
            text-align: right;
            display: flex;
            flex-direction: column;
            background: transparent;
            min-width: 60px;
          }
          
          .point-time .time {
            font-weight: bold;
            font-size: 13px;
          }
          
          .point-time .date {
            font-size: 10px;
            color: #6b7280;
            font-weight: normal;
            margin-top: 2px;
          }
          
          .section-title { 
            font-size: 14px; 
            font-weight: 600; 
            color: #374151; 
            margin-bottom: 12px; 
            display: flex; 
            align-items: center; 
            gap: 8px; 
          }
          
          .no-data { 
            text-align: center; 
            padding: 24px 16px; 
            color: #6b7280; 
          }
          
          .no-data-icon { 
            font-size: 2rem; 
            margin-bottom: 8px; 
            opacity: 0.5; 
          }
          
          .contact-info {
            background: rgba(205, 44, 34, 0.03); 
            border: 1px solid rgba(205, 44, 34, 0.2); 
            border-radius: 6px;
            padding: 12px; 
            margin-top: 16px;
          }
          
          .contact-info h3 {
            color: #cd2c22; 
            margin-bottom: 6px;
            display: flex; 
            align-items: center; 
            gap: 6px;
            font-size: 13px;
            font-weight: 600;
          }
          
          .contact-info p { 
            margin: 0; 
            color: #4b5563; 
            font-size: 11px; 
            line-height: 1.4;
          }
          
          .search-results-info { 
            font-size: 10px; 
            color: #6b7280; 
            margin-bottom: 8px; 
            font-style: italic; 
          }
          
          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          
          @media (max-width: 768px) {
            .boarding-points-container {
              padding: 12px;
              margin-top: 12px;
            }
            
            .point-content {
              align-items: flex-start;
              gap: 8px;
              padding: 10px;
            }
            
            .point-time {
              align-self: flex-end;
            }
            
            .point-icon {
              width: 28px;
              height: 28px;
              font-size: 11px;
            }
            
            .point-location {
              font-size: 12px;
            }
            
            .point-address {
              font-size: 10px;
            }
          }
        `}</style>

        {/* Boarding Points */}
        {processedBoardingPoints.length > 0 && (
          <PointList
            title="Pickup Point"
            points={processedBoardingPoints}
            selectedPoint={selectedBoarding}
            onChange={handleBoardingChange}
            searchValue={boardingSearch}
            setSearchValue={setBoardingSearch}
            type="boarding"
            hideHeadings={hideHeadings}
          />
        )}

        {/* Dropping Points */}
        {processedDroppingPoints.length > 0 && (
          <PointList
            title="Drop Points"
            points={processedDroppingPoints}
            selectedPoint={selectedDropping}
            onChange={handleDroppingChange}
            searchValue={droppingSearch}
            setSearchValue={setDroppingSearch}
            type="dropping"
            hideHeadings={hideHeadings}
          />
        )}
      </div>

      {/* Contact Info */}
      <div className='mt-3'>
        {showContactInfo && processedBoardingPoints.length > 0 && (
          <div className="contact-info">
            <h3><FaPhone aria-hidden="true" /> Contact Information</h3>
            <p>
              For any queries regarding Pickup points, please contact our customer support at{' '}
              <strong>{processedBoardingPoints[0]?.phone || '7303093510'}</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(BoardingPointsPage);