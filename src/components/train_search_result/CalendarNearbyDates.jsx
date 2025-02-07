import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrains } from '../../store/Actions/filterActions';

const CalendarNearbyDates = () => {
  const dispatch = useDispatch();
  
  // Get current search params including the selected date from localStorage
  const searchParams = JSON.parse(localStorage.getItem('trainSearchParams') || '{}');
  const { fromStnCode, toStnCode, date } = searchParams;
  
  // Convert the stored date string to Date object
  const currentDate = date ? new Date(date) : new Date();

  const getNearbyDates = (date, range = 4) => {
    const dates = [];
    const baseDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part for accurate date comparison
    
    // Calculate the start index to ensure we don't show past dates
    let startIndex = -range;
    for (let i = -range; i <= range; i++) {
      const tempDate = new Date(baseDate);
      tempDate.setDate(baseDate.getDate() + i);
      if (tempDate >= today) {
        dates.push(tempDate);
      }
    }

    // If we have less than 9 dates (because some were in the past),
    // add more future dates to maintain the count
    while (dates.length < 9) {
      const lastDate = new Date(dates[dates.length - 1]);
      lastDate.setDate(lastDate.getDate() + 1);
      dates.push(lastDate);
    }

    return dates;
  };

  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const handleDateClick = async (selectedDate) => {
    try {
      localStorage.setItem('loading', 'true');

      // Format date for API
      const formattedDate = formatDateToYYYYMMDD(selectedDate);
      
      // Update searchParams with new date
      const updatedSearchParams = {
        ...searchParams,
        date: selectedDate.toISOString(),
        formattedTrainDate: selectedDate.toLocaleDateString('en-GB', { 
          weekday: 'short', 
          day: 'numeric', 
          month: 'short' 
        })
      };
      
      // Update localStorage
      localStorage.setItem('trainSearchParams', JSON.stringify(updatedSearchParams));

      // Fetch new train data
      console.log('Fetching trains for:', {
        date: formattedDate,
        fromStnCode,
        toStnCode
      });
      console.log('==> from calendeer file Formatted date:', formattedDate, fromStnCode, toStnCode);
      await dispatch(fetchTrains(fromStnCode, toStnCode, formattedDate));
      
      // Force reload to update the UI with new data
      // window.location.reload();

    } catch (error) {
      console.error('Error fetching trains:', error);
    } finally {
      localStorage.setItem('loading', 'false');
    }
  };

  const nearbyDates = getNearbyDates(currentDate);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      padding: '10px 0',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      {/* Previous Arrow */}
      <button
        onClick={() => handleDateClick(new Date(currentDate.setDate(currentDate.getDate() - 1)))}
        disabled={nearbyDates[0].toDateString() === currentDate.toDateString()}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: nearbyDates[0].toDateString() === currentDate.toDateString() ? 'pointer' : 'not-allowed',
          padding: '0 15px',
          opacity: nearbyDates[0].toDateString() === currentDate.toDateString() ? 1 : 0.5,
          color: '#dc3545',
          fontSize: '20px'
        }}
      >
        ‹
      </button>

      {/* Dates Display */}
      <div className="calendar-dates" style={{ 
        display: 'flex',
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        gap: '10px'
      }}>
        {nearbyDates.map((date, index) => {
          const isSelected = date.toDateString() === currentDate.toDateString();
          const isToday = date.toDateString() === new Date().toDateString();
          
          return (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: isSelected ? '#ffe6e6' : 'transparent',
                color: isSelected ? '#dc3545' : '#666',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                minWidth: '100px'
              }}
            >
              <div style={{ 
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px'
              }}>
                <span style={{
                  color: isSelected ? '#dc3545' : isToday ? '#dc3545' : '#666',
                  fontWeight: isSelected || isToday ? '600' : '400'
                }}>
                  {date.toLocaleDateString('en-GB', { 
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short'
                  })}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Arrow */}
      <button
        onClick={() => handleDateClick(new Date(currentDate.setDate(currentDate.getDate() + 1)))}
        disabled={nearbyDates[nearbyDates.length - 1].toDateString() === currentDate.toDateString()}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: nearbyDates[nearbyDates.length - 1].toDateString() === currentDate.toDateString() ? 'pointer' : 'not-allowed',
          padding: '0 15px',
          opacity: nearbyDates[nearbyDates.length - 1].toDateString() === currentDate.toDateString() ? 1 : 0.5,
          color: '#dc3545',
          fontSize: '20px'
        }}
      >
        ›
      </button>
    </div>
  );
};

export default CalendarNearbyDates;
