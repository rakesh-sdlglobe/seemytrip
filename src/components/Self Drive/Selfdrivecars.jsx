import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header02 from '../header02'; // Assuming you have this header component
import FooterDark from '../footer-dark'; // Assuming you have this footer component
import { selfdrive } from '../../assets/images';


const SelfDriveCars = () => {
  const cars = [
    {
      name: 'Ford Mustang',
      description: 'A classic sports car, perfect for those who want to ride in style.',
      price: '₹5,000/day',
      image: selfdrive, // Placeholder image
    },
    {
      name: 'BMW X5',
      description: 'Luxury SUV with ample space and great comfort for long drives.',
      price: '₹7,500/day',
      image: selfdrive, // Placeholder image
    },
    {
      name: 'Toyota Innova',
      description: 'Spacious, comfortable, and ideal for family road trips.',
      price: '₹3,500/day',
      image: selfdrive, // Placeholder image
    },
    {
      name: 'Tata Nexon EV',
      description: 'Eco-friendly and stylish electric vehicle for city commutes.',
      price: '₹4,000/day',
      image: selfdrive, // Placeholder image
    },
  ];

  return (
    <>
      <Header02 />
      <style>
        {`
          .cars-container {
            padding: 3rem 1rem;
            background-color: #f8f9fa;
          }

          .cars-title {
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

      <Container className="cars-container">
        <h2 className="cars-title">Self Drive Car Rentals</h2>
        <Row>
          {cars.map((car, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={car.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title className="card-title">{car.name}</Card.Title>
                  <Card.Text className="card-text">
                    {car.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <small><strong>{car.price}</strong></small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterDark />
    </>
  );
};

export default SelfDriveCars;
