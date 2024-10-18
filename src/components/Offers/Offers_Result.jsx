import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import planeImage from '../../assets/images/Offer_Flight.png';
import Hotel from '../../assets/images/offer_hotel.png';
import Train from '../../assets/images/Offer_Train.png';

const CardOffers = () => {
  const offers = [
    {
        title: '20% off on Flight Bookings',
        bank: 'HDFC Bank',
        description: 'Get 20% instant discount on all flight bookings using HDFC Bank credit cards.',
        validTill: 'Valid till 31st Dec 2024',
        image: planeImage, // Flight offer image
      },
      {
        title: '40% off on Hotel Stays',
        bank: 'Axis Bank',
        description: 'Enjoy 40% off on hotel stays at select locations using Axis Bank credit cards.',
        validTill: 'Valid till 31st Dec 2024',
        image: Hotel, // Hotel offer image
      },
      {
        title: 'Flat 10% off on Train Tickets',
        bank: 'SBI Bank',
        description: 'Book your train tickets using SBI credit cards and get a flat 10% off.',
        validTill: 'Valid till 20th Jan 2025',
        image: Train, // Train offer image
      },
  ];

  return (
    <>
    <Header02/>
      <style>
        {`
          .offers-container {
            padding: 3rem 1rem;
            background-color: #f8f9fa;
          }

          .offers-title {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
            font-size: 2rem;
            font-weight: bold;
          }

          .card {
            border: none;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          }

          .card-img-top {
            height: 200px;
            width: 100%;
            object-fit: cover;
            border-bottom: 1px solid #eaeaea;
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #cd2c23;
          }

          .card-text {
            font-size: 0.95rem;
            color: #555;
            flex-grow: 1;
          }

          .card-footer {
            background-color: #f1f1f1;
            border-top: none;
            font-size: 0.85rem;
            color: #888;
            text-align: center;
          }

          @media (min-width: 992px) {
            .card {
              height: 100%;
            }
          }
        `}
      </style>

      <Container className="offers-container">
        <h2 className="offers-title">Exclusive Offers on Your Cards</h2>
        <Row>
          {offers.map((offer, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={offer.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title className="card-title">{offer.title}</Card.Title>
                  <Card.Text className="card-text">
                    <strong>Bank:</strong> {offer.bank} <br />
                    {offer.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <small>{offer.validTill}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterDark/>
    </>
  );
};

export default CardOffers;
