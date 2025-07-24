import React from "react";
import Header02 from "../header02";
import FooterDark from "../footer-dark";

const ContactUs = () => (
  <>
    <Header02 />
     <div className="container py-5 bg-white rounded shadow-sm">
      <h2 className="text-primary mb-4 border-bottom pb-2">Contact Us</h2>
      <p>If you have any questions or need support, feel free to contact us using the form below.</p>

      <form  className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <div className="mt-5">
        <h5>Office Address</h5>
        <p>6-3-596/63/5/1, kaveri Nagar, Anandnagar, Hyderabad, Telangana, PIN – 500004, India</p>
        <p><strong>Email:</strong> support@seemytrip.com</p>
        <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
        <p><strong>Customer Support Hours:</strong> Monday to Saturday, 9:00 AM – 7:00 PM IST</p>
      </div>
    </div>
    <FooterDark />
  </>
);

export default ContactUs;
