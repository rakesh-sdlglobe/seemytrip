import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Packagesimage } from '../../assets/images';

const Packages = () => {
  const packageData = [
    {
      id: 1,
      title: 'Golden Triangle Tour',
      image: Packagesimage,
      description: 'Explore Delhi, Agra, and Jaipur in 7 days. Includes train travel, accommodations, and guided tours.',
      price: '₹15,000',
      details: '#',
    },
    {
      id: 2,
      title: 'Goa Beach Holiday',
      image: Packagesimage,
      description: 'Enjoy a relaxing week in Goa with accommodations, meals, and beach activities included.',
      price: '₹25,000',
      details: '#',
    },
    {
      id: 3,
      title: 'Himalayan Adventure',
      image: Packagesimage,
      description: 'Embark on an exciting journey to the Himalayas with trekking and scenic train rides.',
      price: '₹30,000',
      details: '#',
    },
    {
      id: 4,
      title: 'Kerala Backwaters',
      image: Packagesimage,
      description: 'Experience the serene backwaters of Kerala with houseboat stays and local cuisine.',
      price: '₹20,000',
      details: '#',
    },
    {
      id: 5,
      title: 'Rajasthan Royal Experience',
      image: Packagesimage,
      description: 'Discover the royal heritage of Rajasthan with guided tours to palaces and forts.',
      price: '₹28,000',
      details: '#',
    },
    {
      id: 6,
      title: 'Andaman Island Getaway',
      image: Packagesimage,
      description: 'Enjoy the pristine beaches and crystal-clear waters of the Andaman Islands.',
      price: '₹35,000',
      details: '#',
    },
  ];

  return (
    <>
      <Header02 />
      <style>
        {`
          .packages-container {
            padding: 3rem 1rem;
            background-color: #f7f7f7;
          }

          .packages-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: #2c3e50;
          }

          .packages-intro {
            text-align: center;
            color: #7f8c8d;
            font-size: 1.1rem;
            margin-bottom: 3rem;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
          }

          .package-card {
            border: none;
            border-radius: 15px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .package-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          }

          .package-card-body {
            padding: 1.5rem;
          }

          .package-img {
            height: 230px;
            width: 100%;
           
          }

          .package-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
            margin-bottom: 0.75rem;
          }

          .package-text {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.5rem;
          }

          .btn-book-now {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            transition: background-color 0.3s ease;
          }

          .btn-book-now:hover {
            background-color: #cd2c23;
          }
        `}
      </style>

      <Container className="packages-container">
        <h2 className="packages-title">Exciting Travel Packages</h2>
        <p className="packages-intro">
          Discover our exclusive travel packages designed to provide you with the best experiences across India. 
          Whether you're looking for adventure, relaxation, or cultural exploration, we have something for everyone!
        </p>

        <Row>
          {packageData.map((pkg) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={pkg.id}>
              <Card className="package-card">
                <Card.Img variant="top" src={pkg.image} alt={pkg.title} className="package-img" />
                <Card.Body className="package-card-body">
                  <Card.Title className="package-title">{pkg.title}</Card.Title>
                  <Card.Text className="package-text">{pkg.description}</Card.Text>
                  <h5 className="text-success">{pkg.price}</h5>
                  <Button className="btn-book-now" href={pkg.details}>
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

export default Packages;
