import { useLocation, useNavigate } from "react-router-dom";

const HotelConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ReservationId, status, ReservationReference } = location.state || {};

  if (!location.state || status !== "S0001") {
    return <p>No booking details available. Please go back.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        🎉 Booking Confirmed!
      </h2>
      <p className="text-gray-700 mb-4">
        Booking ID: <strong>{ReservationReference}</strong>
      </p>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Hotel Details</h3>
        <p>
          <strong>Hotel:</strong> {"hotelName"}
        </p>
        <p>
          <strong>Check-in:</strong> {"checkInDate"}
        </p>
        <p>
          <strong>Check-out:</strong> {"checkOutDate"}
        </p>
        <p>
          <strong>Rooms:</strong> {"roomCount"}
        </p>
        <p>
          <strong>Guests:</strong> {"guests"}
        </p>
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Traveler Details</h3>
        {/* {travelerDetails?.map((traveler, index) => (
          <div key={index} className="mb-2">
            <p><strong>{traveler.title} {traveler.name}</strong></p>
            <p>Email: {traveler.email}</p>
            <p>Phone: {traveler.phone}</p>
          </div>
        ))} */}
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Payment Summary</h3>
        <p>
          <strong>Total Paid:</strong> ₹{"totalPrice"}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/home-hotel")}
        >
          Go to Home
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => navigate("/my-bookings")}
        >
          View My Bookings
        </button>
      </div>
    </div>
  );
};

export default HotelConfirmation;
