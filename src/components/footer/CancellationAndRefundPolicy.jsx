import React from "react";
import Header02 from "../header02";
import FooterDark from "../footer-dark";

const CancellationAndRefundPolicy = () => (
  <>
    <Header02 />
    <div className="container py-5">
      <div className="max-w-2xl mx-auto bg-white rounded-lg px-4 py-10 mt-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Cancellation and Refund Policy</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">Trains, Flights, Buses & Cruises</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>Must follow respective operator's cancellation policy.</li>
          <li>Refunds depend on fare rules; non-refundable fares may not be refunded.</li>
          <li>Cancellation charges and SeeMyTrip fees apply if applicable.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">Hotels</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>Cancellations in the window may get full/partial refund.</li>
          <li>No-shows or late cancellations may incur full charges.</li>
          <li>Refunds processed within 15 business days.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">Travel Insurance</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>Non-cancellable and non-refundable once issued.</li>
          <li>Claims to be made directly with insurance provider.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">International Transfers</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>Cancel at least 48 hours in advance for refund eligibility.</li>
          <li>No refund for missed services due to wrong details.</li>
          <li>Full refund if provider cancels.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">Refund Timeline</h3>
        <p className="mb-4 text-gray-700">
          Refunds processed within 15 business days to original payment method. Time may vary by bank/gateway.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">How to Cancel</h3>
        <p className="text-gray-700">
          Use "My Bookings" section or contact: <br />
          Email: <a href="mailto:support@seemytrip.com" className="text-blue-600 underline">support@seemytrip.com</a><br />
          Phone: [+91-XXXXXXXXXX] <br />
          Provide Booking ID and contact info for faster processing.
        </p>
      </div>
    </div>
    <FooterDark />
  </>
);

export default CancellationAndRefundPolicy;
