// This file contains the TripSecure replicated UI as a React component for reuse.
import React from 'react';
import { MdMedicalServices } from 'react-icons/md';
import { FaMoneyBillWave, FaHeart, FaBandAid } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

// This file centralizes the React Icons used in hotel components for easy import and maintenance.


const TripSecure = ({ price = 89, currency = '₹', per = 'per person per night', gst = '18% GST Included' }) => (
  <div style={{
    background: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    boxShadow: '0 2px 8px #eee',
    maxWidth: 800,
    width: '85vw',
    margin: '32px auto 0 auto',
    padding: 24,
    fontFamily: 'sans-serif',
  }}>
    <div style={{ background: '#eafaf2', borderRadius: 8, padding: '10px 18px', marginBottom: 18, color: '#1e7e34', fontWeight: 500, fontSize: 15 }}>
      <BsShieldFillCheck style={{ marginRight: 8, color: '#1e7e34', fontSize: 20, verticalAlign: 'middle' }} />
      Over 1 million travellers secured in the last month
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
      <div>
        <div style={{ fontWeight: 700, fontSize: 20, color: '#222' }}>Trip Secure</div>
        <div style={{ color: '#1e7e34', fontWeight: 500, fontSize: 15, marginBottom: 8 }}>Enjoy a Worry-Free Stay</div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/insurance/icici_logo.png" alt="ICICI" style={{ height: 32 }} />
        <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/insurance/health_logo.png" alt="Health" style={{ height: 32 }} />
      </div>
    </div>
    <div style={{ background: '#f6fafd', borderRadius: 8, padding: 16, marginBottom: 18, border: '1px solid #e0e0e0' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 15 }}>
        <li style={{ marginBottom: 8 }}><MdMedicalServices style={{ color: '#0077cc', marginRight: 6, fontSize: 18, verticalAlign: 'middle' }} /> Medical Assistance <span style={{ float: 'right', color: '#888', fontSize: 13 }}>24*7 SUPPORT</span></li>
        <li style={{ marginBottom: 8 }}><FaMoneyBillWave style={{ color: '#28a745', marginRight: 6, fontSize: 18, verticalAlign: 'middle' }} /> Refund on Hotel Cancellation <span style={{ float: 'right', color: '#888', fontSize: 13 }}>Rs 15,000</span></li>
        <li style={{ marginBottom: 8 }}><FaHeart style={{ color: '#e25555', marginRight: 6, fontSize: 18, verticalAlign: 'middle' }} /> Personal Accident <span style={{ float: 'right', color: '#888', fontSize: 13 }}>Rs 10,00,000</span></li>
        <li style={{ marginBottom: 8 }}><FaBandAid style={{ color: '#ff9800', marginRight: 6, fontSize: 18, verticalAlign: 'middle' }} /> OPD Expenses <span style={{ float: 'right', color: '#888', fontSize: 13 }}>Rs 25,000</span></li>
        <li style={{ color: '#0077cc', fontSize: 14, cursor: 'pointer', marginTop: 6 }}>11 more benefits</li>
      </ul>
    </div>
    <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>{currency}{price} <span style={{ fontWeight: 400, fontSize: 15, color: '#444' }}>{per}</span></div>
    <div style={{ color: '#888', fontSize: 13, marginBottom: 12 }}>{gst}</div>
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 8, padding: 16, marginBottom: 18 }}>
      <div style={{ marginBottom: 8 }}>
        <input type="radio" id="secureYes" name="tripSecure" style={{ marginRight: 8 }} />
        <label htmlFor="secureYes" style={{ fontSize: 15 }}>Yes, secure my trip.</label>
      </div>
      <div>
        <input type="radio" id="secureNo" name="tripSecure" style={{ marginRight: 8 }} />
        <label htmlFor="secureNo" style={{ fontSize: 15 }}>No, I will book without trip secure.</label>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
      <input type="checkbox" id="agree" defaultChecked style={{ marginRight: 8 }} />
      <label htmlFor="agree" style={{ fontSize: 13, color: '#444' }}>
        By proceeding, I agree to MakeMyTrip’s <a href="#" style={{ color: '#0077cc' }}>User Agreement</a>, <a href="#" style={{ color: '#0077cc' }}>Terms of Service</a> and <a href="#" style={{ color: '#0077cc' }}>Cancellation & Property Booking Policies</a>.
      </label>
    </div>
    <button style={{ background: '#0077ff', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', width: '100%', fontWeight: 700, fontSize: 17, cursor: 'pointer' }}>
      PAY NOW
    </button>
  </div>
);

export default TripSecure;
