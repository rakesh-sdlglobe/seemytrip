import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Header02 from '../header02';
import FooterDark from '../footer-dark';

const GiftCards = () => {
  const giftCardData = [
    {
      id: 1,
      title: '₹500 Gift Card',
      image: 'https://via.placeholder.com/450x230?text=Gift+Card+500',
      description: 'Perfect for short trips or special treats! Ideal for friends and family.',
      price: '₹500',
      details: '#',
    },
    {
      id: 2,
      title: '₹1000 Gift Card',
      image: 'https://via.placeholder.com/450x230?text=Gift+Card+1000',
      description: 'A wonderful gift for any occasion. Great for long journeys or weekend getaways.',
      price: '₹1000',
      details: '#',
    },
    {
      id: 3,
      title: '₹2000 Gift Card',
      image: 'https://via.placeholder.com/450x230?text=Gift+Card+2000',
      description: 'Gift an extended trip! Great for friends planning long-distance journeys.',
      price: '₹2000',
      details: '#',
    },
    {
      id: 4,
      title: '₹5000 Gift Card',
      image: 'https://via.placeholder.com/450x230?text=Gift+Card+5000',
      description: 'Give the gift of adventure! Perfect for family vacations or exploring new destinations.',
      price: '₹5000',
      details: '#',
    },
    {
      id: 5,
      title: '₹7500 Gift Card',
      image: 'https://via.placeholder.com/450x230?text=Gift+Card+7500',
      description: 'A premium gift for memorable trips across India’s best destinations.',
      price: '₹7500',
      details: '#',
    },
    {
      id: 6,
      title: '₹10,000 Gift Card',
      image: 'https://via.placeholder.com/450x230?text=Gift+Card+10000',
      description: 'The ultimate gift for travel lovers! Allows for unforgettable experiences across India.',
      price: '₹10,000',
      details: '#',
    },
  ];

  return (
    <>
      <Header02 />
      <style>
        {`
          .full-width-container {
            width: 100%;
            padding: 3rem 2rem;
            background-color: #f7f7f7;
          }

          .giftcards-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: #2c3e50;
          }

          .giftcards-intro {
            text-align: center;
            color: #7f8c8d;
            font-size: 1.1rem;
            margin-bottom: 3rem;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
          }

          .giftcard-card {
            border: none;
            border-radius: 15px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .giftcard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          }

          .giftcard-card-body {
            padding: 1.5rem;
          }

          .giftcard-img {
            height: 230px;
            width: 100%;
            object-fit: cover;
          }

          .giftcard-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
            margin-bottom: 0.75rem;
          }

          .giftcard-text {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.5rem;
          }

          .btn-buy-now {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            transition: background-color 0.3s ease;
          }

          .btn-buy-now:hover {
            background-color: #cd2c23;
          }
        `}
      </style>

      <div className="full-width-container">
        <h2 className="giftcards-title">Gift Cards for Travel Lovers</h2>
        <p className="giftcards-intro">
          Surprise your loved ones with the perfect gift! Our travel gift cards are ideal for any occasion, letting recipients choose their own adventures with See My Trip.
        </p>

        <Row>
          {giftCardData.map((card) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={card.id}>
              <Card className="giftcard-card">
                <Card.Img variant="top" src={card.image} alt={card.title} className="giftcard-img" />
                <Card.Body className="giftcard-card-body">
                  <Card.Title className="giftcard-title">{card.title}</Card.Title>
                  <Card.Text className="giftcard-text">{card.description}</Card.Text>
                  <h5 className="text-success">{card.price}</h5>
                  <Button className="btn-buy-now" href={card.details}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <FooterDark />
    </>
  );
};

export default GiftCards;
