import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header02 from '../header02';
import bgImage from '../../assets/img/bg2.png';
import FooterDark from '../footer-dark';
import Herosection from './Herosection';

const SearchByName = () => {
  // Update state for train search form
  const [searchForm, setSearchForm] = useState({
    trainNameNumber: '',
    searchType: 'number' // 'number' or 'name'
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Train search submitted:', searchForm);
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
                      <i className="fa-solid fa-train display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Train Search</h5>
                    <p className="card-text text-muted">Search by train number or name for quick results</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-route display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Route Information</h5>
                    <p className="card-text text-muted">View complete route with all stops and timings</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-calendar-days display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Running Days</h5>
                    <p className="card-text text-muted">Check which days the train operates</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fa-solid fa-info-circle display-4 text-primary"></i>
                    </div>
                    <h5 className="card-title">Train Details</h5>
                    <p className="card-text text-muted">Access coach composition and amenities</p>
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
    trains: "12951/12952 - Daily Service",
    trainType: "Superfast",
    classes: "1AC, 2AC, 3AC"
  },
  {
    name: "Shatabdi Express",
    from: "New Delhi",
    to: "Bhopal",
    duration: "8h 25m",
    trains: "12001/12002 - Daily Service",
    trainType: "Express",
    classes: "1AC, 2AC"
  },
  {
    name: "Duronto Express",
    from: "Mumbai",
    to: "Howrah",
    duration: "26h 45m",
    trains: "12261/12262 - Tri-weekly",
    trainType: "Superfast",
    classes: "1AC, 2AC, 3AC"
  },
  {
    name: "Vande Bharat",
    from: "New Delhi",
    to: "Varanasi",
    duration: "8h 00m",
    trains: "22435/22436 - Daily Service",
    trainType: "Superfast",
    classes: "1AC, 2AC, 3AC"
  },
  {
    name: "Chennai Express",
    from: "Mumbai",
    to: "Chennai",
    duration: "21h 15m",
    trains: "12163/12164 - Daily Service",
    trainType: "Superfast",
    classes: "1AC, 2AC, 3AC"
  },
  {
    name: "Gatimaan Express",
    from: "Delhi",
    to: "Jhansi",
    duration: "4h 25m",
    trains: "12049/12050 - Daily Service",
    trainType: "Express",
    classes: "1AC, 2AC"
  }
];

const faqs = [
  {
    question: "How can I search for a train?",
    answer: "You can search using either the train number (e.g., 12345) or the train name (e.g., Rajdhani Express). Both methods will show you complete train details."
  },
  {
    question: "What information will I get about the train?",
    answer: "You'll get details including running days, complete route with stops, arrival/departure times at each station, coach composition, and available classes."
  },
  {
    question: "How do I know which days the train runs?",
    answer: "After searching for a train, you'll see a schedule showing all days the train operates. Some trains run daily while others may run on specific days only."
  },
  {
    question: "Can I see the train's complete route?",
    answer: "Yes, you'll get a detailed route map showing all stations, with arrival and departure times for each stop along the journey."
  },
  {
    question: "Where can I find the train number?",
    answer: "Train numbers are usually 4-5 digits (e.g., 12345). You can find them on your ticket, railway timetables, or by searching the train name."
  }
];

export default SearchByName;