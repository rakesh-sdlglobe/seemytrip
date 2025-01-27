import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectUser } from '../../store/Selectors/authSelectors';

const NearbyDates = ({ train, onClose }) => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(train.availabilities[0]?.enqClass || null);
  const [selectedQuota, setSelectedQuota] = useState("GN");
  const isAuthenticated = useSelector(selectUser);

  const handleBooking = (train, classInfo, dayIndex) => {
    const isAvailable = classInfo?.avlDayList?.[dayIndex]?.availablityType === "1" || 
                       classInfo.avlDayList?.[dayIndex]?.availablityType === "2" || 
                       classInfo.avlDayList?.[dayIndex]?.availablityType === "3";

    if (!isAvailable) {
      toast.error('Booking not allowed', {
        position: "bottom-center",
        autoClose: 2500,
        theme: 'colored',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const dayInfo = classInfo.avlDayList[dayIndex];

    const bookingData = {
      arrivalTime: dayInfo.availablityDate,
      departureTime: train.departureTime,
      distance: train.distance,
      duration: train.duration,
      fromStnCode: train.fromStnCode,
      toStnCode: train.toStnCode,
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

  const getFormattedSeatsData = (train, index) => {
    try {
      const availabilityStatus = train?.availabilities?.[index]?.avlDayList?.[0]?.availabilityStatus;
      const availablityType = train?.availabilities?.[index]?.avlDayList?.[0]?.availablityType;
      
      if (!availabilityStatus || !availablityType) {
        return "NOT AVAILABLE";
      }

      if (availablityType === "0" || availablityType === "4" || availablityType === "5") {
        return availabilityStatus;
      } else if (availablityType === "1") {
        const parts = availabilityStatus.split('-');
        const seats = parts[1] ? parseInt(parts[1], 10) : null;
        return seats ? `AVL ${seats}` : 'AVL';
      } else if (availablityType === "2" && availabilityStatus.includes("RAC")) {
        const seats = parseInt(availabilityStatus.replace(/\D/g, ''), 10);
        return seats ? `RAC ${seats}` : "RAC";
      } else if (availablityType === "3" && availabilityStatus.includes("WL")) {
        const seats = parseInt(availabilityStatus.replace(/\D/g, ''), 10);
        return seats ? `WL ${seats}` : "WL";
      } else {
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
            {train.availabilities.map((cls) => (
              <button 
                key={cls.enqClass}
                className={`btn btn-sm ${
                  selectedClass === cls.enqClass ? 'btn-primary' : 'btn-outline-primary'
                }`}
                onClick={() => setSelectedClass(cls.enqClass)}
              >
                {cls.enqClass === "1A" ? "First Class AC" :
                 cls.enqClass === "2A" ? "Second AC" :
                 cls.enqClass === "3A" ? "Third AC" :
                 cls.enqClass === "3E" ? "AC 3 Economy" :
                 cls.enqClass === "SL" ? "Sleeper Class" :
                 cls.enqClass}
              </button>
            ))}
          </div>
          <div className="ms-auto d-flex gap-2">
            {["GN", "LD", "TQ", "PT"].map((quota) => (
              <button 
                key={quota}
                className={`btn btn-sm ${
                  selectedQuota === quota ? 'btn-primary' : 'btn-outline-primary'
                }`}
                onClick={() => setSelectedQuota(quota)}
              >
                {quota === "GN" ? "General" : 
                 quota === "LD" ? "Ladies" :
                 quota === "TQ" ? "Tatkal" : "Premium"}
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
                          ? "#f8fff8"
                          : dayInfo.availablityType === "3"
                          ? "#fff8f0"
                          : "#fff",
                        transition: "all 0.3s ease",
                        minHeight: "60px"
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
                          : "red",
                        fontWeight: "500",
                        fontSize: "0.9rem"
                      }}>
                        {getFormattedSeatsData({
                          availabilities: [{
                            avlDayList: [{
                              availabilityStatus: dayInfo.availabilityStatus,
                              availablityType: dayInfo.availablityType
                            }]
                          }]
                        }, 0)}
                      </div>
                      
                      {(dayInfo.availablityType === "1" || dayInfo.availablityType === "2") && (
                        <div className="tag text-muted" style={{ fontSize: "0.8rem" }}>
                          <small>
                            <i className="fas fa-shield-alt me-1"></i>
                            Trip Guarantee
                          </small>
                        </div>
                      )}
                      
                      <button 
                        className="btn btn-sm btn-primary"
                        style={{
                          background: dayInfo.availablityType === "0" || dayInfo.availablityType === "4" || dayInfo.availablityType === "5"
                            ? "#6c757d"
                            : "linear-gradient(45deg, #2196F3, #1976D2)",
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
                ) : (
                  <div className="no-dates-available p-4 text-center bg-light rounded-3">
                    <div className="mb-3">
                      <i className="fas fa-calendar-times fa-3x text-muted"></i>
                    </div>
                    <h6 className="mb-2 text-muted">No Availability Information</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                      Currently, there is no booking availability for {selectedClass} class in {
                        selectedQuota === "GN" ? "General" :
                        selectedQuota === "LD" ? "Ladies" :
                        selectedQuota === "TQ" ? "Tatkal" :
                        "Premium Tatkal"
                      } quota.
                      <br />
                      Please try a different class or quota.
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}
          {train.availabilities.filter(cls => cls.enqClass === selectedClass && cls.quota === selectedQuota).length === 0 && (
            <div className="no-dates-available p-4 text-center bg-light rounded-3">
              <div className="mb-3">
                <i className="fas fa-ticket-alt fa-3x text-muted"></i>
              </div>
              <h6 className="mb-2 text-muted">Class/Quota Not Available</h6>
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                The selected combination of {selectedClass} class and {
                  selectedQuota === "GN" ? "General" :
                  selectedQuota === "LD" ? "Ladies" :
                  selectedQuota === "TQ" ? "Tatkal" :
                  "Premium Tatkal"
                } quota is not available for this train.
                <br />
                Please select a different class or quota option.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NearbyDates; 