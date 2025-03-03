import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrains } from '../../store/Actions/filterActions';

const CalendarNearbyDates = () => {
  const dispatch = useDispatch();
  const searchParams = JSON.parse(localStorage.getItem('trainSearchParams') || '{}');
  const { fromStnCode, toStnCode, date } = searchParams;
  const currentDate = date ? new Date(date) : new Date();
  
  // State to track visible dates
  const [baseDate, setBaseDate] = useState(currentDate);

  const getNearbyDates = (date, range = 4) => {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calculate max date (63 days from today)
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 63);

    for (let i = -range; i <= range; i++) {
      const tempDate = new Date(date);
      tempDate.setDate(date.getDate() + i);
      if (tempDate >= today && tempDate <= maxDate) {
        dates.push(tempDate);
      }
    }

    while (dates.length < 9) {
      const lastDate = new Date(dates[dates.length - 1]);
      lastDate.setDate(lastDate.getDate() + 1);
      if (lastDate > maxDate) break;
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

  // Handle date selection and API call
  const handleDateClick = async (selectedDate) => {
    try {
      localStorage.setItem('loading', 'true');
      const formattedDate = formatDateToYYYYMMDD(selectedDate);
      
      const updatedSearchParams = {
        ...searchParams,
        date: selectedDate.toISOString(),
        formattedTrainDate: selectedDate.toLocaleDateString('en-GB', { 
          weekday: 'short', 
          day: 'numeric', 
          month: 'short' 
        })
      };
      
      localStorage.setItem('trainSearchParams', JSON.stringify(updatedSearchParams));
      await dispatch(fetchTrains(fromStnCode, toStnCode, formattedDate));
      
    } catch (error) {
      console.error('Error fetching trains:', error);
    } finally {
      localStorage.setItem('loading', 'false');
    }
  };

  // Handle navigation without API call
  const handleNavigation = (direction) => {
    const newDate = new Date(baseDate);
    // console.log("==> last date is : ", nearbyDates[nearbyDates.length - 1],"==> max date is : ", maxDate);
    const isLastDate = nearbyDates[nearbyDates.length - 1]?.getDate() === maxDate.getDate();
    if (!isLastDate && direction === 'next') {
      newDate.setDate(baseDate.getDate() + 2);
      // console.log('==> newDate:', newDate);
    }else if (isLastDate && direction === 'next') {
      newDate.setDate(baseDate.getDate() + 1);
    }else {
      newDate.setDate(baseDate.getDate() - 2);
    }
    setBaseDate(newDate);
  };

  const nearbyDates = getNearbyDates(baseDate);
  // console.log("===> nearbyDates:", nearbyDates);
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 63);

  // console.log("===> maxDate:", maxDate);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      // gap: '5px',
      // padding: '5px 0',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      {/* Previous Arrow */}
      <button
        onClick={() => handleNavigation('prev')}
        disabled={nearbyDates[0]?.toDateString() === today.toDateString()}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: '0 15px',
          opacity: nearbyDates[0]?.toDateString() === today.toDateString() ? 0.5 : 1,
          color: '#dc3545',
          fontSize: '50px'
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
          const isToday = date.toDateString() === today.toDateString();
          
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
        onClick={() => handleNavigation('next')}
        disabled={nearbyDates[nearbyDates.length - 1]?.getDate() >= maxDate.getDate() + 1}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: nearbyDates.length <= 8 ? 'not-allowed' : 'pointer',
          padding: '0 15px',
          opacity: nearbyDates[nearbyDates.length - 1]?.getTime() >= maxDate.getTime() ? 0.5 : 1,
          color: '#dc3545',
          fontSize: '50px'
        }}
      >
        ›
      </button>
    </div>
  );
};

export default CalendarNearbyDates;
