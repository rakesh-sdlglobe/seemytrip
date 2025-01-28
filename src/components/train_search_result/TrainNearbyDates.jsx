import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectUser } from '../../store/Selectors/authSelectors';

const NearbyDates = ({ train, onClose }) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectUser);

    // Get available classes and quotas from train data
    const availableClasses = [...new Set(train.availabilities.map(a => a.enqClass))];
    const availableQuotas = [...new Set(train.availabilities.map(a => a.quota))];

    // Set default values based on available data
    const [selectedClass, setSelectedClass] = useState(() => {
        const classWithGN = train.availabilities.find(a => a.quota === "GN")?.enqClass;
        return classWithGN || availableClasses[0];
    });

    const [selectedQuota, setSelectedQuota] = useState(() => {
        return availableQuotas.includes("GN") ? "GN" : availableQuotas[0];
    });

    const formatTrainDate = (dateString) => {
        // Convert the input string to a Date object
        console.log("dateString is ", dateString);
        const [day, month, year] = dateString.split('-');
        const date = new Date(year, month - 1, day); // JavaScript months are 0-indexed

        // Format the date as 'Sat, 25 Jan'
        return date.toLocaleDateString('en-US', {
          weekday: 'short', // Sat
          day: '2-digit', // 25
          month: 'short', // Jan
        });
    };

    const formattedJourneyDate = (dateString) => {
        console.log("dateString is ", dateString);
        const [day, month, year] = dateString.split('-');
        
        // Add leading zeros if day or month is a single digit
        const formattedDay = day.padStart(2, '0');
        const formattedMonth = month.padStart(2, '0');
        
        return `${year}${formattedMonth}${formattedDay}`;
    };
    
    const calculateArrivalDate = (startDate, duration) => {
        // Parse the start date (format: "25-1-2025")
        const [day, month, year] = startDate.split('-');
        const startDateTime = new Date(year, month - 1, day); // JavaScript months are 0-indexed
      
        // Parse the duration (e.g., "25h 40min" or "24min")
        let hours = 0, minutes = 0;
      
        if (duration.includes('h')) {
          hours = parseInt(duration.split('h')[0], 10);
          if (duration.includes('min')) {
            minutes = parseInt(duration.split('h')[1].split('min')[0], 10);
          }
        } else if (duration.includes('min')) {
          minutes = parseInt(duration.split('min')[0], 10);
        }
      
        // Add hours and minutes to the start date
        startDateTime.setHours(startDateTime.getHours() + hours);
        startDateTime.setMinutes(startDateTime.getMinutes() + minutes);
      
        // Format the arrival date as 'Sat, 25 Jan'
        return startDateTime.toLocaleDateString('en-US', {
          weekday: 'short', // Sat
          day: '2-digit', // 25
          month: 'short', // Jan
        });
      };

    // Class name mapping
    const classNames = {
        "1A": "First Class AC",
        "2A": "2 tier AC",
        "3A": "3 tier AC",
        "3E": "AC 3 Economy",
        "CC": "Chair Car",
        "SL": "Sleeper",
        "2S": "Second Sitting"
    };

    // Quota name mapping
    const quotaNames = {
        "GN": "General",
        "LD": "Ladies",
        "TQ": "Tatkal",
        "PT": "Premium Tatkal",
        "SS": "Senior Citizen",
        "HP": "Physically Handicapped",
        "YU": "Youth"
        };

    const handleBooking = (train, classInfo, dayIndex) => {
        const isAvailable = classInfo?.avlDayList?.[dayIndex]?.availablityType === "1" || 
                            classInfo.avlDayList?.[dayIndex]?.availablityType === "2" || 
                            classInfo.avlDayList?.[dayIndex]?.availablityType === "3";

        if (!isAvailable) {
        toast.error('Booking not allowed', {
            position: "bottom-center",
            autoClose: 2500,
            theme: 'colored'
        });
        return;
        }

        const dayInfo = classInfo.avlDayList[dayIndex];
        const bookingData = {
            arrivalTime: train.arrivalTime,
            arrivalDate: calculateArrivalDate(dayInfo.availablityDate, train.duration),
            departureTime: train.departureTime,
            departureDate: formatTrainDate(dayInfo.availablityDate),
            journeyDate: formattedJourneyDate(dayInfo.availablityDate),
            distance: train.distance,
            duration: train.duration,
            fromStnCode: train.fromStnCode,
            toStnCode: train.toStnCode,
            fromStnName: train.fromStnName,
            toStnName: train.toStnName,
            trainName: train.trainName,
            trainNumber: train.trainNumber,
            trainType: train.trainType,
            classinfo: {
                ...classInfo,
                avlDayList: [dayInfo]
            },
        };

        if (isAuthenticated) {
            navigate('/trainbookingdetails', { state: { trainData: bookingData } });
        } else {
            navigate('/login', {
                state: {
                redirectTo: '/trainbookingdetails',
                trainData: bookingData,
                }
            });
        }
    };

    const getFormattedSeatsData = (availabilityStatus, availabilityType, quota) => {
        console.log("91 availabilityStatus", availabilityStatus, " availabilityType", availabilityType);
        try {
            if (!availabilityStatus || !availabilityType) return "NOT AVAILABLE";

            switch(availabilityType) {
                case "0":
                case "4":
                case "5":
                return availabilityStatus;
                case "1":
                const [, seats] = availabilityStatus.split('-');
                return seats ? `Available ${Number(seats)}` : 'Available';
                case "2":
                if (availabilityStatus.includes("RAC")) {
                    let seats = parseInt(availabilityStatus.split('RAC')[2], 10);
                    return seats ? `RAC ${Number(seats)}` : "RAC";
                }
                return availabilityStatus;
                case "3":
                if (availabilityStatus.includes("WL")) {
                    let seats = parseInt(availabilityStatus.split('WL')[2], 10);
                    return seats ? `${quota}WL ${Number(seats)}` : `${quota}WL`;
                }
                return availabilityStatus;
                default:
                return "NOT AVAILABLE";
            }
        } catch (error) {
        console.error('Error formatting seats data:', error);
        return "NOT AVAILABLE";
        }
    };

    return (
        <div className="col-12 mt-3">
        <div className="nearby-dates-container">
            {/* Class Selection Tabs */}
            <div className="d-flex mb-3 flex-wrap gap-2">
            <div className="class-tabs d-flex gap-2">
                {availableClasses.map((cls) => (
                <button 
                    key={cls}
                    className={`btn btn-sm ${
                    selectedClass === cls ? 'btn-danger' : 'btn-outline-danger'
                    }`}
                    onClick={() => setSelectedClass(cls)}
                >
                    {classNames[cls] || cls}
                </button>
                ))}
            </div>
            <div className="ms-auto d-flex gap-2">
                {availableQuotas.map((quota) => (
                <button 
                    key={quota}
                    className={`btn btn-sm ${
                    selectedQuota === quota ? 'btn-danger' : 'btn-outline-danger'
                    }`}
                    onClick={() => setSelectedQuota(quota)}
                >
                    {quotaNames[quota] || quota}
                </button>
                ))}
            </div>
            </div>

            {/* Date Cards */}
            <div className="nearby-dates-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
            {train.availabilities
                .filter(cls => cls.enqClass === selectedClass && cls.quota === selectedQuota)
                .map((cls) => (
                <React.Fragment key={cls.enqClass}>
                    {cls.avlDayList?.length > 0 ? (
                    cls.avlDayList.map((dayInfo, dayIndex) => (
                        <div 
                        key={dayIndex}
                        className="date-card mb-2 p-2 rounded-3 d-flex justify-content-between align-items-center"
                        style={{
                            border: "1px solid #eee",
                            backgroundColor: dayInfo.availablityType === "1" || dayInfo.availablityType === "2"
                            ? "#EBF5EA"
                            : dayInfo.availablityType === "3"
                            ? "#FDEFDA"
                            : "#fff",
                            transition: "all 0.3s ease",
                            minHeight: "50px",
                        }}
                        >
                        <div className="date-info">
                            <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>{dayInfo.availablityDate}</h6>
                        </div>
                        
                        <div className="status" style={{
                            color: dayInfo.availablityType === "1" || dayInfo.availablityType === "2"
                            ? "green"
                            : dayInfo.availablityType === "3"
                            ? "orange"
                            : "#666",
                            fontWeight: "500",
                            fontSize: "0.9rem"
                        }}>
                            {console.log("day info is ", dayInfo)}
                            { getFormattedSeatsData( dayInfo.availablityStatus, dayInfo.availablityType, cls.quota )}
                        </div>
                        
                        {
                            <div className="tag text-muted" style={{ fontSize: "0.8rem" }}>
                            <small>
                                <i className="fas fa-shield-alt me-1"></i>
                                Trip Guarantee
                            </small>
                            </div>
                        }
                        
                        <button 
                            className="btn btn-sm btn-danger"
                            style={{
                            background: dayInfo.availablityType === "0" || dayInfo.availablityType === "4" || dayInfo.availablityType === "5"
                                ? "#6c757d"
                                : "#d20000",
                            border: "none",
                            fontSize: "0.85rem",
                            padding: "0.25rem 0.75rem"
                            }}
                            disabled={dayInfo.availablityType === "0" || dayInfo.availablityType === "4" || dayInfo.availablityType === "5"}
                            onClick={() => handleBooking(train, cls, dayIndex)}
                        >
                            Book @₹{cls.totalFare}
                            <i className="fas fa-chevron-right ms-2"></i>
                        </button>
                        </div>
                    ))
                    ) : "" }
                </React.Fragment>
                ))}
            </div>
        </div>
        </div>
    );
};

export default NearbyDates;
