import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Updated Twitter to X
import guide1 from '../../assets/images/Guides/Guide-1.png';
import guide2 from '../../assets/images/Guides/Guide-2.png';
import guide3 from '../../assets/images/Guides/Guide-3.png';
import guide4 from '../../assets/images/Guides/Guide-4.png';
import guide5 from '../../assets/images/Guides/Guide-5.png';
import guide6 from '../../assets/images/Guides/Guide-6.png';

const Photographers = () => {
  const photographers = [
    {
      name: 'Rahul Sharma',
      city: 'Mumbai',
      description: 'Specializes in portrait photography and candid wedding shoots.',
      contact: 'rahul.sharma@example.com',
      image: guide1,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Sneha Verma',
      city: 'Delhi',
      description: 'Expert in fashion and editorial photography.',
      contact: 'sneha.verma@example.com',
      image: guide2,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Arjun Patel',
      city: 'Bangalore',
      description: 'Known for capturing the tech city’s vibrant street scenes and corporate events.',
      contact: 'arjun.patel@example.com',
      image: guide3,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Priya Desai',
      city: 'Goa',
      description: 'Creative photographer with a love for beach and nature photography.',
      contact: 'priya.desai@example.com',
      image: guide4,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Vikram Rao',
      city: 'Hyderabad',
      description: 'Specializes in food and culinary photography, capturing Hyderabad’s rich cuisine.',
      contact: 'vikram.rao@example.com',
      image: guide5,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Meera Kapoor',
      city: 'Jaipur',
      description: 'Expert in capturing Jaipur’s royal palaces and cultural heritage through her lens.',
      contact: 'meera.kapoor@example.com',
      image: guide6,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
  ];

  return (
    <>
    <Header02/>
      <style>
        {`
          .photographers-container {
            padding: 3rem 1rem;
            background-color: #f9f9f9;
          }

          .photographers-title {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
            font-size: 2rem;
            font-weight: bold;
          }

          .photographer-card {
            border: none;
            border-radius: 10px;
            background-color: #fff;
            padding: 1rem;
            height: 100%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }

          .photographer-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }

          .photographer-img {
            height: 150px;
            width: 150px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 1rem;
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #cd2c23;
            margin-bottom: 0.5rem;
          }

          .card-text {
            font-size: 0.95rem;
            color: #555;
            margin-bottom: 1rem;
          }

          .card-footer {
            background-color: #f1f1f1;
            border-top: none;
            font-size: 0.85rem;
            color: #888;
            padding: 0.75rem;
            margin-top: auto;
          }

          .photographer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
          }

          .social-icons a {
            margin: 0 10px;
            color: #888;
            transition: color 0.3s ease;
          }

          .social-icons a:hover {
            color: #cd2c23;
          }
        `}
      </style>

      <Container className="photographers-container">
        <h2 className="photographers-title">Meet Our Photographers</h2>
        <Row>
          {photographers.map((photographer, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="photographer-card h-100">
                <div className="photographer-content">
                  <img src={photographer.image} alt={photographer.name} className="photographer-img" />
                  <Card.Title className="card-title">{photographer.name}</Card.Title>
                  <Card.Text className="card-text">
                    <strong>City:</strong> {photographer.city} <br />
                    {photographer.description}
                  </Card.Text>
                  <div className="social-icons mb-3">
                    <a href={photographer.social.instagram} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href={photographer.social.xTwitter} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </a>
                    <a href={photographer.social.facebook} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href={photographer.social.youtube} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                  </div>
                </div>
                <Card.Footer className="card-footer">
                  <small>Contact: {photographer.contact}</small>
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

export default Photographers;
