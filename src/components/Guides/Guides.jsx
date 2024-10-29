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

const TourGuides = () => {
  const guides = [
    {
      name: 'John Doe',
      city: 'Mumbai',
      description: 'Experienced tour guide specializing in Mumbai’s cultural heritage and street food.',
      contact: 'john.doe@example.com',
      image: guide1,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Jane Smith',
      city: 'Delhi',
      description: 'Knowledgeable guide with a passion for Delhi’s history and architecture.',
      contact: 'jane.smith@example.com',
      image: guide2,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Raj Patel',
      city: 'Bangalore',
      description: 'Local expert in Bangalore, focusing on tech tours and local attractions.',
      contact: 'raj.patel@example.com',
      image: guide3,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Aditi Sharma',
      city: 'Goa',
      description: 'Fun and friendly guide who can show you the best of Goa’s beaches and nightlife.',
      contact: 'aditi.sharma@example.com',
      image: guide4,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Anil Kumar',
      city: 'Hyderabad',
      description: 'Passionate guide who loves sharing the rich culinary heritage of Hyderabad.',
      contact: 'anil.kumar@example.com',
      image: guide5,
      social: {
        instagram: 'https://instagram.com',
        xTwitter: 'https://x.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Sita Verma',
      city: 'Jaipur',
      description: 'Expert in Jaipur’s royal history, palaces, and colorful markets.',
      contact: 'sita.verma@example.com',
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
          .guides-container {
            padding: 3rem 1rem;
            background-color: #f9f9f9;
          }

          .guides-title {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
            font-size: 2rem;
            font-weight: bold;
          }

          .guide-card {
            border: none;
            border-radius: 10px;
            background-color: #fff;
            padding: 1rem;
            height: 100%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }

          .guide-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }

          .guide-img {
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

          .guide-content {
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

      <Container className="guides-container">
        <h2 className="guides-title">Meet Our Tour Guides</h2>
        <Row>
          {guides.map((guide, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="guide-card h-100">
                <div className="guide-content">
                  <img src={guide.image} alt={guide.name} className="guide-img" />
                  <Card.Title className="card-title">{guide.name}</Card.Title>
                  <Card.Text className="card-text">
                    <strong>City:</strong> {guide.city} <br />
                    {guide.description}
                  </Card.Text>
                  <div className="social-icons mb-3">
                    <a href={guide.social.instagram} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href={guide.social.xTwitter} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </a>
                    <a href={guide.social.facebook} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href={guide.social.youtube} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                  </div>
                </div>
                <Card.Footer className="card-footer">
                  <small>Contact: {guide.contact}</small>
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

export default TourGuides;
