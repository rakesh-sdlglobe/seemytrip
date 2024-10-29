import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Insurance } from '../../assets/images';

const TravelInsurance = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: 5,
      coverage: 'Ideal for short domestic trips. Includes coverage for trip delays, lost luggage, and basic medical expenses.',
      img: Insurance
    },
    {
      id: 2,
      name: 'Comprehensive Plan',
      price: 10,
      coverage: 'Perfect for international travel. Offers extensive medical coverage, trip cancellation, and more.',
      img: Insurance
    },
    {
      id: 3,
      name: 'Family Plan',
      price: 15,
      coverage: 'Coverage for the whole family, including medical emergencies, trip interruptions, and family travel discounts.',
      img: Insurance
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <Header02 />
      <style>
        {`
          .insurance-container {
            padding: 3rem 1rem;
            background-color: #f7f7f7;
          }

          .insurance-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: #2c3e50;
          }

          .insurance-intro {
            text-align: center;
            color: #7f8c8d;
            font-size: 1.1rem;
            margin-bottom: 3rem;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
          }

          .insurance-card {
            border: none;
            border-radius: 15px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .insurance-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          }

          .insurance-card-body {
            padding: 1.5rem;
          }

          .insurance-img {
            height: 200px;
            width: 100%;
          }

          .insurance-title-card {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
            margin-bottom: 0.75rem;
          }

          .insurance-text {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.5rem;
          }

          .btn-learn-more {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            transition: background-color 0.3s ease;
          }

          .btn-learn-more:hover {
            background-color: #cd2c23;
          }

          .accordion-item {
            border-radius: 10px;
            margin-bottom: 1rem;
          }

          .accordion-header {
            background-color: #ecf0f1;
            padding: 1rem;
            font-weight: bold;
          }

          .accordion-body {
            padding: 1rem;
            font-size: 1rem;
            color: #555;
          }

          .faq-title {
            text-align: center;
            font-size: 2rem;
            color: #34495e;
            margin-top: 4rem;
            margin-bottom: 2rem;
          }

          @media (max-width: 768px) {
            .insurance-img {
              height: 180px;
            }
          }

          .selected-plan {
            border: 2px solid #e74c3c;
          }

          .selected-plan-text {
            text-align: center;
            margin-top: 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            color: #2c3e50;
          }
        `}
      </style>

      <Container className="insurance-container">
        <h2 className="insurance-title">Travel Insurance Plans</h2>
        <p className="insurance-intro">
          Protect your travels with comprehensive travel insurance plans. Whether you are traveling for leisure or business, our plans offer a range of coverage options for medical emergencies, trip cancellations, lost baggage, and more.
        </p>

        <Row>
          {plans.map((plan) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={plan.id}>
              <Card className={`insurance-card ${selectedPlan && selectedPlan.id === plan.id ? 'selected-plan' : ''}`}>
                <Card.Img variant="top" src={plan.img} alt={plan.name} className="insurance-img" />
                <Card.Body className="insurance-card-body">
                  <Card.Title className="insurance-title-card">{plan.name}</Card.Title>
                  <Card.Text className="insurance-text">{plan.coverage}</Card.Text>
                  <Button className="btn-learn-more" onClick={() => handlePlanSelect(plan)}>
                    {selectedPlan && selectedPlan.id === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Selected Plan Details */}
        {selectedPlan && (
          <div className="selected-plan-text">
            <p>You have selected: {selectedPlan.name}</p>
            <p>Price: ${selectedPlan.price} / ticket</p>
            <p>Coverage: {selectedPlan.coverage}</p>
          </div>
        )}

        {/* FAQ Section */}
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="accordion-item">
            <Accordion.Header>What does travel insurance cover?</Accordion.Header>
            <Accordion.Body>
              Travel insurance typically covers medical emergencies, trip cancellations, lost baggage, trip delays, and personal liability. Coverage varies based on the plan selected.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="accordion-item">
            <Accordion.Header>Do I need travel insurance for domestic trips?</Accordion.Header>
            <Accordion.Body>
              While not mandatory, travel insurance for domestic trips can be useful in covering unexpected delays, lost luggage, or medical expenses during your journey.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="accordion-item">
            <Accordion.Header>How do I make a claim?</Accordion.Header>
            <Accordion.Body>
              Claims can be filed online through our website or by contacting customer service. Ensure you have all necessary documents, including receipts and medical reports, for a smooth process.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="accordion-item">
            <Accordion.Header>Can I cancel my travel insurance plan?</Accordion.Header>
            <Accordion.Body>
              Yes, most plans can be canceled within a specific period for a full refund, provided no claims have been made. Please refer to the terms and conditions of your plan.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <FooterDark />
    </>
  );
};

export default TravelInsurance;
