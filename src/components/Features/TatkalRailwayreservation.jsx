import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header02 from '../header02';
import bgImage from '../../assets/img/bg2.png';
import Herosection from './Herosection';

const TatkalRailwayreservation = () => {
  // State for form inputs
  const [searchForm, setSearchForm] = useState({
    fromStation: '',
    toStation: '',
    journeyDate: '',
    passengerCount: 1,
    quota: 'TATKAL'
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tatkal booking search:', searchForm);
  };

  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>

      {/* Main wrapper */}
      <div id="main-wrapper">
        {/* Header */}
        <Header02/>
        <div className="clearfix" />

        {/* Hero Section */}
        <Herosection/>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-bolt display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Quick Booking</h5>
                    <p className="card-text text-muted">Fast tatkal ticket booking during reservation hours</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-clock display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Tatkal Timings</h5>
                    <p className="card-text text-muted">AC classes: 10:00 AM, Non-AC: 11:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-indian-rupee-sign display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Tatkal Charges</h5>
                    <p className="card-text text-muted">View class-wise tatkal premium charges</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-list-check display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Booking Rules</h5>
                    <p className="card-text text-muted">Important guidelines for tatkal booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Popular Train Routes</h2>
            <div className="row g-4">
              {/* Route Cards */}
              {popularRoutes.map((route, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div 
                    className="card h-100" 
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      ':hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                      }
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="card-title mb-0">{route.name}</h5>
                        <span className="badge bg-primary">{route.duration}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <small className="text-muted">From</small>
                          <p className="mb-0 fw-bold">{route.from}</p>
                        </div>
                        <div className="text-center">
                          <i className="fa-solid fa-train text-primary"></i>
                        </div>
                        <div className="text-end">
                          <small className="text-muted">To</small>
                          <p className="mb-0 fw-bold">{route.to}</p>
                        </div>
                      </div>
                      <p className="card-text text-muted mb-3">{route.trains}</p>
                      <button className="btn btn-outline-primary w-100">View Trains</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div key={index} className="accordion-item">
                      <h2 className="accordion-header">
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#faq${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div 
                        id={`faq${index}`} 
                        className="accordion-collapse collapse" 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card bg-primary text-white h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="fa-solid fa-headset display-4 me-4"></i>
                    <div>
                      <h4 className="card-title mb-2">24/7 Support</h4>
                      <p className="card-text mb-3">Need help? Our support team is available 24/7</p>
                      <button className="btn btn-light">Contact Support</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-success text-white h-100">
                  <div className="card-body d-flex align-items-center">
                    <i className="fa-solid fa-mobile-screen-button display-4 me-4"></i>
                    <div>
                      <h4 className="card-title mb-2">Download Our App</h4>
                      <p className="card-text mb-3">Get real-time updates on your mobile device</p>
                      <button className="btn btn-light">Download Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>

      {/* Back to Top Button */}
      <Link id="back2Top" className="top-scroll" title="Back to top" to="#">
        <i className="fa-solid fa-arrow-up"></i>
      </Link>
    </div>
  );
};

// Sample Data
const popularRoutes = [
  {
    name: "Rajdhani Express",
    from: "New Delhi",
    to: "Mumbai",
    duration: "16h 35m",
    trains: "12951/12952 - Daily Service",
    tatkalQuota: "144 seats",
    tatkalTiming: "10:00 AM"
  },
  {
    name: "Shatabdi Express",
    from: "New Delhi",
    to: "Bhopal",
    duration: "8h 25m",
    trains: "12001/12002 - Daily Service",
    tatkalQuota: "102 seats",
    tatkalTiming: "10:00 AM"
  },
  {
    name: "Duronto Express",
    from: "Mumbai",
    to: "Howrah",
    duration: "26h 45m",
    trains: "12261/12262 - Tri-weekly",
    tatkalQuota: "120 seats",
    tatkalTiming: "10:00 AM"
  },
  {
    name: "Vande Bharat",
    from: "New Delhi",
    to: "Varanasi",
    duration: "8h 00m",
    trains: "22435/22436 - Daily Service",
    tatkalQuota: "100 seats",
    tatkalTiming: "10:00 AM"
  },
  {
    name: "Chennai Express",
    from: "Mumbai",
    to: "Chennai",
    duration: "21h 15m",
    trains: "12163/12164 - Daily Service",
    tatkalQuota: "150 seats",
    tatkalTiming: "10:00 AM"
  },
  {
    name: "Gatimaan Express",
    from: "Delhi",
    to: "Jhansi",
    duration: "4h 25m",
    trains: "12049/12050 - Daily Service",
    tatkalQuota: "80 seats",
    tatkalTiming: "10:00 AM"
  }
];

const faqs = [
  {
    question: "What are Tatkal booking timings?",
    answer: "Tatkal booking for AC classes opens at 10:00 AM and for Non-AC classes at 11:00 AM, one day before the journey date (excluding journey date)."
  },
  {
    question: "What are Tatkal charges?",
    answer: "Tatkal charges vary by class: 1AC: 30% of base fare, 2AC: 25%, 3AC: 20%, SL: 10%, subject to minimum and maximum limits."
  },
  {
    question: "What documents are needed for Tatkal booking?",
    answer: "One of the passengers must carry a government photo ID card (Voter ID, Passport, PAN, Driving License, Aadhaar) during the journey."
  },
  {
    question: "Is there a limit on Tatkal tickets per user?",
    answer: "Yes, only two Tatkal tickets can be booked per user per day from one user ID, across all trains."
  },
  {
    question: "Can Tatkal tickets be cancelled?",
    answer: "No refund is granted on cancellation of confirmed Tatkal tickets. For waitlisted Tatkal tickets, charges are deducted as per rules."
  }
];

export default TatkalRailwayreservation;