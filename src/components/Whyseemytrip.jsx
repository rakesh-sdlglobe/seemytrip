import React from 'react';
import { Irctc, refund, Trainoffer, upi, UPI } from '../assets/images';

function Whyseemytrip() {
  return (
    <div className="container my-2">
      <div className="row align-items-center justify-content-between g-4">
        {/* Card 1 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5 image-card">
          <div className="card shadow-sm">
            <img src={Irctc} className="card-img-top" alt="Placeholder" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5 image-card">
          <div className="card shadow-sm">
            <img src={refund} className="card-img-top" alt="Placeholder" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5 image-card">
          <div className="card shadow-sm">
            <img src={upi} className="card-img-top" alt="Placeholder" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5 image-card">
          <div className="card shadow-sm">
            <img src={Trainoffer} className="card-img-top" alt="Placeholder" />
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .image-card .card {
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.3s, box-shadow 0.3s;
        } 

        .image-card .card:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .image-card img {
          width: 100%;
          height: auto;
        }

        .row > .image-card {
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default Whyseemytrip;
