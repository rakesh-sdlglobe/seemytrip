import React, { useState,useRef,useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
  
export default function HotelTraveller({ roomData,validatePrices,isLoading }) {
  const [travellerDetails, setTravellerDetails] = useState([]);
  const [openCalendars, setOpenCalendars] = useState({});
  //const [isLoading, setIsLoading] = useState(false);
  const startDateRef = useRef(null);

  const today = new Date();
  const DobStartDate = new Date(today);
  DobStartDate.setDate(today.getDate() - 730);
const calculateAge = (dob) => {
  if (!dob) return null;

  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (startDateRef.current && !startDateRef.current.contains(event.target)) {
      setOpenCalendars({});
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
  const handleTravellerChange = (roomIndex, paxType, paxIndex, field, value) => {
    const roomId = roomIndex + 1;
    const paxId = paxIndex + 1;

    setTravellerDetails(prev => {
      const existingIndex = prev.findIndex(
        t => t.RoomID === roomId && t.PaxType === paxType && t.PaxId === paxId
      );

      const base = prev[existingIndex] || {
        RoomID: roomId,
        PaxType: paxType,
        PaxId: paxId,
        LeadPax: paxType === "A" && paxIndex === 0 && roomIndex === 0,
        Title: "",
        Forename: "",
        Surname: "",
        PaxMobile: "",
        PaxMobilePrefix: "",
        PaxEmail: "",
        DOB: "",
        Age: null
      };

      const updatedTraveller = {
        ...base,
        [field]: value,
        Age: field === "DOB" ? calculateAge(value) : undefined,
      };
      console.log("travellerDetails Traveller:", travellerDetails);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = updatedTraveller;
        return updated;
      } else {
        return [...prev, updatedTraveller];
      }
    });
  };

  const getTravellerValue = (roomIndex, paxType, paxIndex, field) => {
    const roomId = roomIndex + 1;
    const paxId = paxIndex + 1;

    return (
      travellerDetails.find(
        t =>
          t.RoomID === roomId &&
          t.PaxType === paxType &&
          t.PaxId === paxId
      )?.[field] || ""
    );
  };

  return (
    
    <form onSubmit={(e) => { e.preventDefault();validatePrices(travellerDetails); }}>
  <div className="form-group mt-3">
     {roomData.map((room, idx) => (
        <div key={idx} className="mb-4 border rounded p-3 position-relative">
          <h5>Room {idx + 1}</h5>

          {/* Adults */}
          {[...Array(room.adults)].map((_, i) => (
            <div key={`adult-${i}`}>
              <h6>Adult {i + 1}</h6>
              <div className="d-flex gap-3 align-items-center">
          <div>
            <label className="me-2">First Name</label>
           <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={getTravellerValue(idx, "A", i, "Forename")}
                onChange={(e) =>{
                    const value = e.target.value;
                    if (/^[A-Za-z ]*$/.test(value)) {
                      handleTravellerChange(idx, "A", i, "Forename", e.target.value)
                    }
                }
                }
                required={idx === 0 && i === 0} // First adult is required  
              />
          </div>
          <div>
            <label className="me-2">Last Name</label>
           <input
               className="form-control"
                type="text"
                placeholder="Surname"
                value={getTravellerValue(idx, "A", i, "Surname")}
                onChange={(e) =>
                {
                    const value = e.target.value;
                    if (/^[A-Za-z ]*$/.test(value)) {
                      handleTravellerChange(idx, "A", i, "Surname", e.target.value)
                    }
                }
                  
                }
                required={idx === 0 && i === 0} 
              />
          </div>
          <div>
            <label className="me-2">Email</label>
           <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={getTravellerValue(idx, "A", i, "PaxEmail")}
                onChange={(e) =>
                  handleTravellerChange(idx, "A", i, "PaxEmail", e.target.value)
                }
                required={idx === 0 && i === 0} 
              />
          </div>
          <div>
            <label className="me-2">Mobile</label>
            <input
                className="form-control"
                type="text"
                 maxLength="10"
                placeholder="Mobile"
                value={getTravellerValue(idx, "A", i, "PaxMobile")}
                onChange={(e) =>{
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleTravellerChange(idx, "A", i, "PaxMobile", value);
                }
                 
                }}
                required={idx === 0 && i === 0} 
              />
          </div>
        </div>
                
             
              
              
             
            </div>
          ))}

          {/* Children */}
          {[...Array(room.children)].map((_, i) => (
            <div key={`child-${i}`}>
              <h6>Child {i + 1}</h6>
              <div className="d-flex gap-3 align-items-center">
          <div>
            <label className="me-2">First Name</label>
           <input
                className="form-control"
                type="text"
                placeholder="First Name"
                value={getTravellerValue(idx, "C", i, "Forename")}
                onChange={(e) =>
                    {
                    const value = e.target.value;
                    if (/^[A-Za-z ]*$/.test(value)) {
                      handleTravellerChange(idx, "C", i, "Forename", e.target.value)
                    }
                }
                  
                }
              />
          </div>
          <div>
            <label className="me-2">Last Name</label>
            <input
                className="form-control"
                type="text"
                placeholder="Surname"
                value={getTravellerValue(idx, "C", i, "Surname")}
                onChange={(e) =>
                    {
                    const value = e.target.value;
                    if (/^[A-Za-z ]*$/.test(value)) {
                      handleTravellerChange(idx, "C", i, "Surname", e.target.value)
                    }
                }
                  
                }
              />
          </div>
          <div>
            <label className="me-2">Date of birth</label>
           
              <input
                            type="text"
                            readOnly
                            className="form-control fw-bold custom-input"
                            value={getTravellerValue(idx, "C", i, "DOB")}
                            
                            onClick={() => {
                              const key = `${idx}-C-${i}`;
                              setOpenCalendars(prev => ({
                                ...prev,
                                [key]: !prev[key]
                              }));
                            }}
                            placeholder="Date of Birth"
                          />
                          {openCalendars[`${idx}-C-${i}`] && (
                            <div className="calendar-popup">
                              <Calendar
                                onChange={(date) => {
                                 const formattedDate = date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
                                  handleTravellerChange(idx, "C", i, "DOB", formattedDate);
                                  setOpenCalendars(prev => ({ ...prev, [`${idx}-C-${i}`]: false }));
                                }}
                                value={
                                  (() => {
                                    const dobStr = getTravellerValue(idx, "C", i, "DOB");
                                    const parsedDate = new Date(dobStr);
                                    return isNaN(parsedDate.getTime()) ? DobStartDate : parsedDate.toLocaleDateString('en-GB');
                                  })()
                                }
                                maxDate={(() => {
                                  const today = new Date();
                                  const maxDate = new Date(today);
                                  maxDate.setDate(today.getDate() - 730); // 2 years ago
                                  return maxDate;
                                })()}
                                minDate={(() => {
                                  const today = new Date();
                                  const minDate = new Date(today);
                                  minDate.setDate(today.getDate() - (365*12)); // 12 years ago
                                  return minDate;
                                })()}
                                selectRange={false}
                                showNeighboringMonth={true}
                                showFixedNumberOfWeeks={false}
                                minDetail="month"
                              />
                            </div>
                          )}
          </div>
          </div>
              
             
              
            </div>
          ))}
        </div>
      ))}
  </div>
  <button style={{ background: '#0077ff', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', width: '150px', fontWeight: 700, fontSize: 17, cursor: 'pointer' }}
                    type="submit" 
                    className={`trvl-submit-btn ${isLoading ? 'disabled' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="spinner">Loading  </div>
                    ) : (
                      'Check Prices'
                    )}
                  </button>
</form>
  );
}
