import React from "react";
import Header02 from "../header02";
import Footer from "../footer";
import FooterDark from "../footer-dark";

const AboutUs = () => (
  <>
    <Header02 />
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="mb-4 text-left">About Us</h2>

          <p className="mb-3">
            Welcome to <strong>SeeMyTrip</strong> – Your Trusted Travel Partner.
            SeeMyTrip is a flagship travel booking platform launched by Snigdha
            Tours and Travels Private Limited, dedicated to simplifying and enriching
            the way you travel.
          </p>

          <p className="mb-4">
            Whether you're planning a business trip, a vacation with your family,
            or a spiritual journey, SeeMyTrip offers a seamless and user-friendly
            experience for booking trains, flights, buses, hotels, cruises, travel
            insurance, and international transfers — all in one place.
          </p>

          <h4 className="mb-3">Our Mission</h4>
          <p className="mb-4">
            To provide travelers with a reliable, fast, and transparent platform that
            makes travel planning simple, accessible, and enjoyable — anytime, anywhere.
          </p>

          <h4 className="mb-3">Our Vision</h4>
          <p className="mb-4">
            To become India’s most preferred and innovative travel portal, recognized
            for customer-centric solutions, trusted service, and a one-stop solution
            for all travel needs.
          </p>

          
        <h4 className="mb-3">Why Choose Us</h4>
        <b>Comprehensive Travel Services </b>
        <p className="mb-2">Book trains, flights, buses, hotels, and cruises with ease.</p>
        <b>Secure Payments</b>
        <p className="mb-2">Encrypted transactions via trusted gateways.</p>
        <b>Real-Time Booking</b>
        <p className="mb-2">Instant confirmations and e-tickets.</p>
        <b>Personalized Support </b>
        <p className="mb-2">Friendly customer service throughout your journey.</p>
        <b>Transparent Pricing </b>
        <p className="mb-5"> No hidden charges or surprises.</p>

        <h4 className="mb-2">Who We Are</h4>
        <p className="mb-4">SeeMyTrip is managed and operated by Snigdha Tours and Travels Private Limited, headquartered in Hyderabad, Telangana.</p>
        <p><b>Registered Office:</b> Hyderabad, Telangana</p>
        <p><b>Corporate Office: </b>Delhi</p>
        <p><b>Development Centre & Back-End Operations:</b> Bangalore</p>
        <p><b>Branch Offices:</b> Mumbai, Chennai, Pune</p>
        <p className="mb-4"><b>International Offices: </b>Dubai, USA, Singapore, UK</p>

        <p>Our growing team of passionate professionals and travel experts is dedicated to making your travel dreams a reality.</p>

        </div>



      </div>
      
    </section>
    <FooterDark />
  </>
);

export default AboutUs;
