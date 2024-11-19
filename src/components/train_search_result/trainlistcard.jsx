import React from 'react';
import { ChevronDown } from 'lucide-react';

const TrainBooking = () => {
  const bookingOptions = [
    { class: "SL", price: 400, waitlist: "WL 75", chances: 38, time: "a moment ago" },
    { class: "SL", price: 505, waitlist: "WL 34", chances: 35, time: "a moment ago", tatkal: true },
    { class: "3E", price: 970, waitlist: "WL 20", chances: 38, time: "a moment ago" },
    { class: "3A", price: 1045, waitlist: "WL 51", chances: 39, time: "a moment ago" },
    { class: "3A", price: 1360, waitlist: "WL 15", chances: 44, time: "a moment ago", tatkal: true },
    { class: "2A", price: 1475, waitlist: "WL 22", chances: 41, time: "1hr 36min ago" },
    { class: "2A", price: 1895, waitlist: "WL 3", chances: 50, time: "a moment ago", tatkal: true },
  ];

  return (
    <div className="container py-4" style={{ maxWidth: '1024px' }}>
      <div className="card shadow-sm p-4 bg-white">
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="h4 mb-1" style={{ color: '#f97316' }}>12975 MYS JP EXP</h2>
              <p className="small text-muted mb-0">
                Runs on: <span className="fw-medium">S M T W T F S</span> • Mail/Express{' '}
                <span style={{ color: '#f97316' }}>(12975 Running Status)</span>
              </p>
            </div>
            <button className="btn d-flex align-items-center" 
                    style={{ backgroundColor: '#f97316', color: 'white' }}>
              SHOW AVAILABILITY
              <ChevronDown className="ms-2" size={16} />
            </button>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <span style={{ color: '#f97316' }} className="fw-medium">SBC</span>
              <div className="h3 fw-bold mb-0">13:15</div>
              <div className="small text-muted">Sat, 16 Nov</div>
            </div>
            <div className="text-center">
              <div className="small text-muted">12hr 25min</div>
              <div className="progress my-2" style={{ width: '128px', height: '4px' }}>
                <div 
                  className="progress-bar" 
                  style={{ width: '50%', backgroundColor: '#f97316' }}
                  role="progressbar" 
                  aria-valuenow={50} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="text-end">
              <span style={{ color: '#f97316' }} className="fw-medium">KCG</span>
              <div className="h3 fw-bold mb-0">01:40</div>
              <div className="small text-muted">Sun, 17 Nov</div>
            </div>
          </div>
        </div>

        <div className="overflow-auto">
          <div className="d-flex gap-4 pb-4" style={{ minWidth: 'max-content' }}>
            {bookingOptions.map((option, index) => (
              <div
                key={index}
                className="card position-relative shadow-sm"
                style={{
                  minWidth: '200px',
                  cursor: 'pointer',
                  background: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)',
                  transition: 'box-shadow 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.classList.add('shadow')}
                onMouseOut={(e) => e.currentTarget.classList.remove('shadow')}
              >
                {option.tatkal && (
                  <span className="position-absolute top-0 end-0 mt-2 me-2 badge bg-success rounded-pill">
                    Tatkal
                  </span>
                )}
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="h4 mb-0">{option.class}</div>
                    <div className="h4 mb-0">₹{option.price}</div>
                  </div>
                  <div className="fw-semibold" style={{ color: '#f97316' }}>{option.waitlist}</div>
                  <div className="small text-muted">{option.chances}% Chances</div>
                  <div className="small text-muted mt-2">{option.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;