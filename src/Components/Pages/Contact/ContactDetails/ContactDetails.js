import { faEnvelope, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <section className="contact-details-section">
            <Container>
                <div className="contact-details-container">
                    <Row className='g-5'>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <div className="details-box text-center">
                                <div className="details-icon mx-auto">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <h3 className="details-title">Address</h3>
                                <p className="details-texts text-secondary m-0">7 Green Lake Street Crawfordsville, IN 47933</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <div className="details-box text-center">
                                <div className="details-icon mx-auto">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <h3 className="details-title">Email Us</h3>
                                <p className="details-texts text-secondary m-0">
                                    <span>anur@gmail.com</span><br />
                                    <span>helloyou@gmail.com</span></p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <div className="details-box text-center">
                                <div className="details-icon mx-auto">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <h3 className="details-title">Call Now</h3>
                                <p className="details-texts text-secondary m-0">+1 800 123 456 789<br/>
                                +1 800 123 654 987</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default ContactDetails;