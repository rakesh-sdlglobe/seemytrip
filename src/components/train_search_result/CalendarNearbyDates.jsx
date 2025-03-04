import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrains } from '../../store/Actions/filterActions';

const CalendarNearbyDates = () => {
  const dispatch = useDispatch();
  const searchParams = JSON.parse(localStorage.getItem('trainSearchParams') || '{}');
  const { fromStnCode, toStnCode, date } = searchParams;
  const currentDate = date ? new Date(date) : new Date();
  const scrollContainerRef = useRef(null);
  
  // Generate all 63 dates (today + 62 days)
  const [allDates] = useState(() => {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 63; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  });

  // State for visible range
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const VISIBLE_DATES = 9; // Number of dates to show at once

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

  // Handle navigation
  const handleNavigation = (direction) => {
    const newIndex = direction === 'next' 
      ? Math.min(visibleStartIndex + VISIBLE_DATES, allDates.length - VISIBLE_DATES)
      : Math.max(visibleStartIndex - VISIBLE_DATES, 0);
    
    setVisibleStartIndex(newIndex);
    
    // Smooth scroll to the new position
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: direction === 'next' ? scrollContainerRef.current.scrollLeft + 800 : scrollContainerRef.current.scrollLeft - 800,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll
  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    
    // Update visible start index based on scroll position
    const newIndex = Math.floor((scrollPercentage / 100) * (allDates.length - VISIBLE_DATES));
    setVisibleStartIndex(Math.max(0, Math.min(newIndex, allDates.length - VISIBLE_DATES)));
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Previous Arrow */}
      <button
        onClick={() => handleNavigation('prev')}
        disabled={visibleStartIndex === 0}
        style={{
          border: 'none',
          background: 'linear-gradient(to right, #fff 60%, transparent)',
          cursor: visibleStartIndex === 0 ? 'not-allowed' : 'pointer',
          padding: '0 15px',
          opacity: visibleStartIndex === 0 ? 0.5 : 1,
          color: '#dc3545',
          fontSize: '50px',
          position: 'absolute',
          left: 0,
          zIndex: 2,
          height: '100%',
          width: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ‹
      </button>

      {/* Dates Display */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        style={{ 
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          whiteSpace: 'nowrap',
          gap: '10px',
          padding: '10px 70px',
          scrollBehavior: 'smooth',
          maxWidth: '100%',
          margin: '0 auto',
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent, #000 70px, #000 calc(100% - 70px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 70px, #000 calc(100% - 70px), transparent)'
        }}
      >
        {allDates.map((date, index) => {
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
                minWidth: '100px',
                userSelect: 'none'
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
        disabled={visibleStartIndex >= allDates.length - VISIBLE_DATES}
        style={{
          border: 'none',
          background: 'linear-gradient(to left, #fff 60%, transparent)',
          cursor: visibleStartIndex >= allDates.length - VISIBLE_DATES ? 'not-allowed' : 'pointer',
          padding: '0 15px',
          opacity: visibleStartIndex >= allDates.length - VISIBLE_DATES ? 0.5 : 1,
          color: '#dc3545',
          fontSize: '50px',
          position: 'absolute',
          right: 0,
          zIndex: 2,
          height: '100%',
          width: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ›
      </button>

      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          div {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default CalendarNearbyDates;
