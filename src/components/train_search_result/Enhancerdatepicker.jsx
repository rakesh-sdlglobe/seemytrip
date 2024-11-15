// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ onDateChange, initialDate = new Date() }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <>
      <style>
        {`
          .calendar-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .calendar-style {
            max-width: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            padding: 8px;
          }
          .react-calendar {
            width: 100%;
          }
          .react-calendar__tile--active {
            background-color: #007bff !important;
            color: white !important;
          }
          .react-calendar__tile {
            height: 36px !important;
            max-width: 100%;
          }
        `}
      </style>
      <div className="calendar-container">
        <div className="calendar-style">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarComponent;
