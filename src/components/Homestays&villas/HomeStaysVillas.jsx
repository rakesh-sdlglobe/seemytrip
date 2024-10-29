import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Homevilla, Villa } from '../../assets/images';


const HomeStaysVillas = () => {
  const properties = [
    {
      name: 'Serenity Villa',
      location: 'Udaipur, Rajasthan',
      description: 'A luxurious villa overlooking the beautiful lakes of Udaipur with modern amenities.',
      image: Homevilla,
    },
    {
      name: 'Mountain Retreat',
      location: 'Manali, Himachal Pradesh',
      description: 'A cozy homestay nestled in the mountains, offering serene views and peaceful stays.',
      image:  Homevilla,
    },
    {
      name: 'Goa Beach Villa',
      location: 'Goa',
      description: 'A tropical paradise located right on the beach with private access and stunning views.',
      image:  Homevilla,
    },
    {
      name: 'Forest Escape',
      location: 'Coorg, Karnataka',
      description: 'A rustic homestay surrounded by lush forests and coffee plantations.',
      image:  Homevilla,
    },
    {
      name: 'Luxury Villa',
      location: 'Jaipur, Rajasthan',
      description: 'A heritage villa offering an opulent stay amidst the royal palaces of Jaipur.',
      image:  Homevilla,
    },
    {
      name: 'Himalayan Haven',
      location: 'Shimla, Himachal Pradesh',
      description: 'A charming villa offering panoramic views of the Himalayas and ultimate comfort.',
      image:  Homevilla,
    },
  ];

  return (
    <>
      <Header02 />
      <style>
        {`
          .properties-container {
            padding: 3rem 1rem;
            background-color: #f8f9fa;
          }

          .properties-title {
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
          }

          .property-card {
            border: none;
            border-radius: 15px;
            overflow: hidden;
            background-color: #fff;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .property-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          }

          .property-img {
            height: 230px;
            width: 100%;
          
          }

          .property-details {
            padding: 1rem;
          }

          .property-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
          }

          .property-location {
            color: #888;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .property-description {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.5rem;
          }

          .btn-book-now {
            background-color: #e74c3c;
            border: none;
            color: #fff;
            font-weight: bold;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            transition: background-color 0.3s ease;
          }

          .btn-book-now:hover {
            background-color: #cd2c23;
          }

          @media (max-width: 768px) {
            .property-img {
              height: 200px;
            }
          }
        `}
      </style>

      <Container className="properties-container">
        <h2 className="properties-title">Home Stays & Villas</h2>
        <Row>
          {properties.map((property, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={property.image} alt={property.name} className="property-img" />
                <Card.Body className="property-details">
                  <Card.Title className="property-name">{property.name}</Card.Title>
                  <Card.Text className="property-location">{property.location}</Card.Text>
                  <Card.Text className="property-description">{property.description}</Card.Text>
                  <Button className="btn-book-now" href="#">
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterDark />
    </>
  );
};

export default HomeStaysVillas;
