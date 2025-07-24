import React from "react";
import Header02 from "../header02";
import FooterDark from "../footer-dark";

const TermsAndConditions = () => (
  <>
    <Header02 />
    <div className="container py-5">
      <div className="max-w-2xl mx-auto bg-white rounded-lg px-4 py-10 mt-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Terms and Conditions</h2>
        <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>Service Usage:</strong> Platform is for booking trains, flights, hotels, buses, etc. Users must be 18+.</li>
          <li><strong>Accuracy of Information:</strong> Not liable for travel info or third-party service errors.</li>
          <li><strong>Payment & Fees:</strong> Full payment at booking. Charges and taxes shown before payment.</li>
          <li><strong>Third-Party Vendors:</strong> Not liable for service failures by third-party providers.</li>
          <li><strong>User Responsibilities:</strong> Ensure correct travel details and follow provider policies.</li>
          <li><strong>Modification of Terms:</strong> Terms may change; using the platform means accepting updates.</li>
        </ol>
      </div>
    </div>
    <FooterDark />
  </>
);

export default TermsAndConditions;
