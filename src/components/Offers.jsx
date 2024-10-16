import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import planeImage from '../assets/images/Offer_Flight.png';
import Hotel from '../assets/images/offer_hotel.png';
import Train from '../assets/images/Offer_Train.png';

function OffersSection() {
  const offers = [
    {
      title: '20% Off on Flights',
      description: 'Book now and get 20% off on all domestic flights!',
      image: planeImage , // Replace with actual image URL
    },
    {
      title: '40% Off on Hotels',
      description: 'Get 40% discount on hotel bookings for your next trip!',
      image:Hotel, // Replace with actual image URL
    },
    {
      title: 'Exclusive Train Deals',
      description: 'Avail special discounts on train bookings this season!',
      image: Train, // Replace with actual image URL
    },
  ];

  return (
    <div>
      {/* Inline CSS for the component */}
      <style jsx="true">{`
        .offer-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
        }
        .offer-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .card-img-top {
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
        .card-title {
          font-size: 1.25rem;
        }
        .card-text {
          font-size: 0.95rem;
        }
        .btn {
          border-radius: 30px;
        }
      `}</style>

      {/* Offer Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Exclusive Offers</h2>
          <div className="row g-4"> {/* g-4 adds spacing between cards */}
            {offers.map((offer, index) => (
              <div className="col-md-4" key={index}>
                <div className="card offer-card h-100 shadow-sm"> {/* Added custom class 'offer-card' */}
                  <img src={offer.image} className="card-img-top" alt={offer.title} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">{offer.title}</h5>
                      <p className="card-text text-muted">{offer.description}</p>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 w-100">Grab Offer</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



export default OffersSection;
