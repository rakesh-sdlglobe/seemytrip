import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header02 from '../header02';
import TripSecure from './TripSecure';

const getBookingData = (hotel) => {
  // Get all booking params from hotelSearchParams in localStorage
  const params = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
  const checkIn = params.checkInDate || '2025-07-12';
  const checkOut = params.checkOutDate || '2025-07-13';
  const rooms = params.Rooms || 1;
  const adults = params.adults || (params.roomsData?.[0]?.adults ?? 2);
  const children = params.children || (params.roomsData?.[0]?.children ?? 0);

  // Get check-in/out time from hotel API data if available
  const checkInTime = hotel?.CheckInTime || '14:00';
  const checkOutTime = hotel?.CheckOutTime || '12:00';

  return { checkIn, checkOut, rooms, adults, children, checkInTime, checkOutTime };
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const HotelReview = () => {
  const { state } = useLocation();
  const { hotel, room, package: pkg, image } = state || {};
  const [showAll, setShowAll] = useState(false);

  if (!hotel || !room || !pkg) {
    return <div>No booking data found.</div>;
  }

  const { checkIn, checkOut, rooms, adults, children, checkInTime, checkOutTime } = getBookingData(hotel);
  const inclusions = pkg || [];
  const visibleInclusions = showAll ? inclusions : inclusions.slice(0, 2);

  // Room details string (customize as needed)
  const roomDetails = [];
  if (room.BedroomCount) roomDetails.push(`${room.BedroomCount} Bedroom${room.BedroomCount > 1 ? 's' : ''}`);
  if (room.BathroomCount) roomDetails.push(`${room.BathroomCount} Bathroom${room.BathroomCount > 1 ? 's' : ''}`);
  if (room.BedType) roomDetails.push(room.BedType);
  const roomDetailsStr = roomDetails.length ? roomDetails.join(' | ') : 'Room details not available';

  return (
    <div style={{ maxWidth: '100vw', margin: '30px auto', fontFamily: 'sans-serif'
    // , border: 'black 4px solid'
     }}>
      <Header02/>
      <h2 style={{ marginBottom: 20, borderBottom: '1px solid #ddd', padding: '10px 0px 10px 120px' }}>Review your Booking</h2>
      <div style={{ border: 'black 0px solid', borderRadius: 8, padding: 24, background: '#fff', boxShadow: '0 2px 8px #eee', maxWidth: 800, width: '85vw', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, fontWeight: 600 }}>
              {hotel.HotelName}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
              <span style={{ color: '#f5b942', fontSize: 18, marginRight: 8 }}>★</span>
              <span style={{ fontWeight: 500, marginRight: 12 }}>
                {hotel.TripAdvisorDetail?.Rating ? `Like a ${hotel.TripAdvisorDetail.Rating}★` : ''}
              </span>
              <span style={{ background: '#eaf4ff', color: '#0077cc', borderRadius: 4, padding: '2px 8px', fontSize: 12, marginRight: 8 }}>
                Villa
              </span>
              <span style={{ background: '#eaf4ff', color: '#0077cc', borderRadius: 4, padding: '2px 8px', fontSize: 12 }}>
                Couple Friendly
              </span>
            </div>
            <div style={{ color: '#555', fontSize: 15, marginBottom: 8 }}>
              {hotel.HotelAddress?.Address}
            </div>
            <div style={{ background: '#fff3cd', color: '#856404', borderRadius: 4, padding: '6px 12px', fontSize: 13, marginBottom: 16, display: 'inline-block' }}>
              Please bear in mind that this property is {hotel.HotelAddress?.DistanceFromCenter || 'N/A'} km from city centre
            </div>

            {/* Check-in/out and guest info */}
            <div
              style={{
                display: 'flex',
                gap: 32,
                margin: '20px 0',
                background: '#f7f7f7',
                borderRadius: 12,
                padding: '18px 16px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ color: '#888', fontSize: 12 }}>CHECK IN</div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{formatDate(checkIn)}</div>
                <div style={{ fontSize: 13 }}>{checkInTime}</div>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: 12 }}>CHECK OUT</div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{formatDate(checkOut)}</div>
                <div style={{ fontSize: 13 }}>{checkOutTime}</div>
              </div>
              <div style={{ alignSelf: 'center', fontSize: 15, color: '#333', fontWeight: 500 }}>
                {rooms} Room{rooms > 1 ? 's' : ''} | {adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? ` | ${children} Child${children > 1 ? 'ren' : ''}` : ''}
              </div>
            </div>

            {/* Room name and details */}
            <div
              style={{
                background: '#f7f7f7',
                borderRadius: 12,
                padding: '14px 16px',
                margin: '18px 0 0 0',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{room.Name}</div>
              <div style={{ fontSize: 14, color: '#444' }}>{roomDetailsStr}</div>
            </div>

            {/* Inclusions */}
            <div
              style={{
                background: '#f7f7f7',
                borderRadius: 12,
                padding: '14px 16px',
                margin: '18px 0 0 0',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <b>Inclusions</b>
                {inclusions.length > 2 && (
                  <span
                    style={{ color: '#0077cc', cursor: 'pointer', textDecoration: 'underline', fontSize: 13 }}
                    onClick={() => setShowAll((prev) => !prev)}
                  >
                    {showAll ? 'See less' : 'See more'}
                  </span>
                )}
              </div>
              <ul style={{ marginBottom: 0, paddingLeft: 18 }}>
                {visibleInclusions.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={image}
            alt="Hotel"
            style={{ width: 120, height: 90, borderRadius: 8, objectFit: 'cover', marginLeft: 24 }}
          />
        </div>
      </div>
      <TripSecure />
    </div>
  );
};

export default HotelReview;