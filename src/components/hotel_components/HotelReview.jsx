import React,{ useState} from 'react';
import { useLocation } from 'react-router-dom';
import Header02 from '../header02';
import TripSecure from './TripSecure';
import HotelTraveller from './hotelTraveller';

const getBookingData = (hotel) => {
  // Get all booking params from hotelSearchParams in localStorage
  const params = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
  const checkIn = params.checkInDate || '2025-07-12';
  const checkOut = params.checkOutDate || '2025-07-13';
  const rooms = params.Rooms || 1;
  const roomsData = params.roomsData || [{ adults: 1, children: 0 }];
  const adults = params.adults || (params.roomsData?.[0]?.adults ?? 2);
  const children = params.children || (params.roomsData?.[0]?.children ?? 0);

  // Get check-in/out time from hotel API data if available
  const checkInTime = hotel?.CheckInTime || '14:00';
  const checkOutTime = hotel?.CheckOutTime || '12:00';

  return { checkIn, checkOut,roomsData, rooms, adults, children, checkInTime, checkOutTime };
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
 const validatePrices = (travellerDetails,setIsLoading) => {
  setIsLoading(false);
    console.log("Traveller Details:", travellerDetails);
  }
  const RoomName = room.Rooms.length > 0 ? room.Rooms[0].RoomName : "Room Name Not Available";
var RoomFyi = room.Rooms.length > 0 ? room.Rooms[0].FYI : [];
var includes = RoomFyi.length > 0 ? RoomFyi : room.Includes || [];
var room_Details = hotel?.HotelRooms?.filter(x => x.Name.toLowerCase() === RoomName.toLowerCase()).length > 0 ? hotel?.HotelRooms?.filter(x => x.Name.toLowerCase() === RoomName.toLowerCase())[0] || {} : {};

  const descriptionLines = (room_Details?.Description || "")
  .split(/<br\s*\/?>/i)
  .map(line => line.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').trim())
  .filter(Boolean);

  const mainDetails = descriptionLines.slice(0, 4); // e.g. size, view, bed, bathroom
  const moreDetails = descriptionLines.slice(4); // e.g. amenities

  const { checkIn, checkOut,roomsData, rooms, adults, children, checkInTime, checkOutTime } = getBookingData(hotel);
  const inclusions = includes;
  const visibleInclusions = showAll ? inclusions : inclusions.slice(0, 2);

  // Room details string (customize as needed)
  const roomDetails = [];
  if (room.BedroomCount) roomDetails.push(`${room.BedroomCount} Bedroom${room.BedroomCount > 1 ? 's' : ''}`);
  if (room.BathroomCount) roomDetails.push(`${room.BathroomCount} Bathroom${room.BathroomCount > 1 ? 's' : ''}`);
  if (room.BedType) roomDetails.push(room.BedType);
  //const roomDetailsStr = roomDetails.length ? roomDetails.join(' | ') : 'Room details not available';
  const hotelAmenities = hotel.Amenities.filter(x=> x.Important === true) || [];
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
                {hotel.StarRating ? `Like a ${hotel.StarRating}★` : ''}
              </span>
              {hotelAmenities && hotelAmenities.length > 0 && hotelAmenities.map((amenity, index) => (<>
              <span style={{ background: '#eaf4ff', color: '#0077cc', borderRadius: 4, padding: '2px 8px', fontSize: 12, marginRight: 8 }}>
                {amenity.Description}
              </span>
              </>))}
            </div>
            <div style={{ color: '#555', fontSize: 15, marginBottom: 8 }}>
              {hotel.HotelAddress?.Address}
              {hotel.HotelAddress?.City && hotel.HotelAddress?.City !== '' ? ', ' + hotel.HotelAddress?.City : ''}
              {hotel.HotelAddress?.PostalCode && hotel.HotelAddress?.PostalCode !== '' ? ' - ' + hotel.HotelAddress?.PostalCode : ''}
            </div>
            {hotel.HotelAddress?.DistanceFromCenter &&
            <div style={{ background: '#fff3cd', color: '#856404', borderRadius: 4, padding: '6px 12px', fontSize: 13, marginBottom: 16, display: 'inline-block' }}>
              Please bear in mind that this property is {hotel.HotelAddress?.DistanceFromCenter || 'N/A'} km from city centre
            </div>}

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
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{RoomName}</div>
              {mainDetails.length > 0 && (<>
              <div style={{ fontSize: 14, color: '#444' }}><ul className="list-unstyled mb-2">
                                      {mainDetails.map((line, i) => (
                                        <li key={line + i} className="mb-1">{line}</li>
                                      ))}
                                    </ul>
                                    <div className="border-top pt-2 mt-2">
                                      <div className="row">
                                        {(() => {
                                          // Remove empty, comma, and semicolon-only lines
                                          const cleanDetails = moreDetails
                                            .map(line => line.replace(/[,;]$/, '').trim())
                                            .filter(line => line && line !== ',' && line !== ';');

                                          const half = Math.ceil(cleanDetails.length / 2);
                                          const firstHalf = cleanDetails.slice(0, half);
                                          const secondHalf = cleanDetails.slice(half);

                                          return (
                                            <>
                                              <div className="col-6">
                                                <ul style={{ listStyleType: "disc", paddingLeft: 24 }} className="mb-0">
                                                  {firstHalf.map((line, i) => (
                                                    <li key={line + i} className="small">{line}</li>
                                                  ))}
                                                </ul>
                                              </div>
                                              <div className="col-6">
                                                <ul style={{ listStyleType: "disc", paddingLeft: 24 }} className="mb-0">
                                                  {secondHalf.map((line, i) => (
                                                    <li key={line + i} className="small">{line}</li>
                                                  ))}
                                                </ul>
                                              </div>
                                            </>
                                          );
                                        })()}
                                      </div>
                                    </div>
                                    </div></>)}
            </div>

            {/* Inclusions */}
            {inclusions.length > 2 && (<>
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
            </>)}
          </div>
          <img
            src={image}
            alt="Hotel"
            style={{ width: 120, height: 90, borderRadius: 8, objectFit: 'cover', marginLeft: 24 }}
          />
        </div>
      </div>
      <div style={{ border: 'black 0px solid', borderRadius: 8, padding: 24, background: '#fff', boxShadow: '0 2px 8px #eee', maxWidth: 800, width: '85vw', margin: '32px auto 0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, fontWeight: 600 }}>
              {"Traveller Details"}
            </h3>
            {/* <TravellerDetails
              roomsData={roomsData || []}
              setTraveller={""}
              travellerDetails={travellerDetails}
              settravellerDetails={settravellerDetails}

               /> */}
               <HotelTraveller
  roomData={roomsData || []}
  validatePrices={validatePrices}
/>

          </div>
          
        </div>
      </div>
      <TripSecure />
    </div>
  );
};

export default HotelReview;