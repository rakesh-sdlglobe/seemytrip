import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header02 from '../header02';
import bgImage from '../../assets/img/bg2.png';
import FooterDark from '../footer-dark';
import Herosection from './Herosection';

const Platformlocator = () => {
  // State for form inputs
  const [searchForm, setSearchForm] = useState({
    fromStation: '',
    toStation: '',
    trainNumber: '',
    journeyDate: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', searchForm);
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
                      <i className="fa-solid fa-map-marker-alt display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Platform Numbers</h5>
                    <p className="card-text text-muted">Instant access to platform numbers for all trains at stations</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-arrows-left-right display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Platform Changes</h5>
                    <p className="card-text text-muted">Real-time updates for any platform changes or reassignments</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-building display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Station Layout</h5>
                    <p className="card-text text-muted">Easy-to-understand station maps and platform layouts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-clock display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Arrival Times</h5>
                    <p className="card-text text-muted">Expected arrival times and platform allocation schedule</p>
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
            <h2 className="text-center mb-5">Platform Locator FAQs</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="faqAccordion">
                  {[
                    {
                      question: "How do I find my platform number?",
                      answer: "Simply enter your station name or code in the search box above, and we'll show you the platform numbers for all trains at that station."
                    },
                    {
                      question: "How accurate is the platform information?",
                      answer: "Platform information is updated in real-time through direct integration with station management systems. Any changes are reflected immediately."
                    },
                    {
                      question: "What if my platform number changes?",
                      answer: "Our system automatically updates platform changes. We recommend checking the platform number close to your departure time."
                    },
                    {
                      question: "Can I see platform layouts?",
                      answer: "Yes, you can view detailed station layouts showing platform locations, amenities, and accessibility features."
                    },
                    {
                      question: "How early should I check my platform?",
                      answer: "We recommend checking your platform number about 30 minutes before departure, as assignments may change based on operational requirements."
                    }
                  ].map((faq, index) => (
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
        <FooterDark/>
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
    trains: "12951/12952 - Daily Service"
  },
  {
    name: "Shatabdi Express",
    from: "New Delhi",
    to: "Bhopal",
    duration: "8h 25m",
    trains: "12001/12002 - Daily Service"
  },
  {
    name: "Duronto Express",
    from: "Mumbai",
    to: "Howrah",
    duration: "26h 45m",
    trains: "12261/12262 - Tri-weekly"
  },
  {
    name: "Vande Bharat",
    from: "New Delhi",
    to: "Varanasi",
    duration: "8h 00m",
    trains: "22435/22436 - Daily Service"
  },
  {
    name: "Chennai Express",
    from: "Mumbai",
    to: "Chennai",
    duration: "21h 15m",
    trains: "12163/12164 - Daily Service"
  },
  {
    name: "Gatimaan Express",
    from: "Delhi",
    to: "Jhansi",
    duration: "4h 25m",
    trains: "12049/12050 - Daily Service"
  }
];

const faqs = [
  {
    question: "How can I track my train's live location?",
    answer: "Enter your train number or PNR in the search box above. You'll get real-time updates about your train's current location, expected arrival time, and any delays."
  },
  {
    question: "What does PNR status mean?",
    answer: "PNR (Passenger Name Record) status shows your current booking status, coach, berth details, and whether your ticket is confirmed, waitlisted, or RAC."
  },
  {
    question: "How accurate is the live status tracking?",
    answer: "Our system updates every 5 minutes using NTES (National Train Enquiry System) data, providing highly accurate location information."
  },
  {
    question: "Can I check multiple trains at once?",
    answer: "Yes, you can open multiple searches in different tabs to track multiple trains simultaneously."
  },
  {
    question: "How do I find my train number?",
    answer: "You can find your train number on your ticket or use our train schedule search to look up trains between stations."
  }
];

export default Platformlocator;