import React from 'react';
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-page-form py-3">
            <Container>
                <div className="contact-form-heading">
                    <h2 className="text-center">Have Any Question?</h2>
                    <p className='text-secondary text-center'>It is a long established fact that a reader will be distracted content of a page when looking.</p>
                </div>
                <div>
                    <div className="form-container">
                        <Form className='contact-form'>
                            <Row className='g-4'>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Form.Select>
                                        <option>Subject</option>
                                        <option>Family Law</option>
                                        <option>Personal Injury</option>
                                        <option>Criminal Law</option>
                                        <option>Business Law</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <FormControl style={{height: '180px'}} as="textarea" aria-label="With textarea" placeholder='Message' />
                                </Col>
                            </Row>
                            <div className="form-send-button text-center">
                                <button className='btn form-btn brand-bg-btn mt-5'>Send Message</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactForm;