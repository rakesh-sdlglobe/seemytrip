import React from "react";
import Header02 from "../header02";
import FooterDark from "../footer-dark";

const PrivacyPolicy = () => (
  <>
    <Header02 />
    <div className="container py-5">
      <div className="max-w-2xl mx-auto bg-white rounded-lg px-4 py-10 mt-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h2>
        <p className="mb-4 text-gray-700">
          Snigdha Tours and Travels Private Limited, through its platform SeeMyTrip, is committed to protecting your privacy.
        </p>
        <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-1">
          <li>
            <strong>Data Collection:</strong> We collect personal details like name, email, phone number, travel preferences, and payment info for booking purposes.
          </li>
          <li>
            <strong>Data Usage:</strong> Used for booking completion, confirmations, improving services, and personalized travel options.
          </li>
          <li>
            <strong>Data Sharing:</strong> Only shared with third-party travel providers and gateways for booking completion.
          </li>
          <li>
            <strong>Security Measures:</strong> Secure encryption protocols and restricted access are used.
          </li>
          <li>
            <strong>User Rights:</strong> Request access or deletion of data via{" "}
            <a href="mailto:support@seemytrip.com" className="text-blue-600 underline">support@seemytrip.com</a>.
          </li>
        </ol>
      </div>
    </div>
    <FooterDark />
  </>
);

export default PrivacyPolicy;