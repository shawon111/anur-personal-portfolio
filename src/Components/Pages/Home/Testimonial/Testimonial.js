import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InnerSectionIntro from '../../../GlobalComponents/InnerSectionIntro/InnerSectionIntro';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
    return (
        <section className="testimonial">
                <Container>
                    <div className="testimonial-container">
                        <Row>
                            <Col xs={12} sm={12} md={5} lg={4} className="testimonial-heading" >
                                <InnerSectionIntro
                                    subheading="testimonial"
                                    heading="What People Says"
                                ></InnerSectionIntro>
                                <p className='me-5 mt-3 text-secondary'>We met years ago at an advertising agency where we learned a ton of dos and some don’ts.</p>
                                <button className='btn brand-btn brand-bg-btn mt-2'>
                                    <Link to="/">Contact Us</Link>
                                </button>
                            </Col>
                            <Col xs={12} sm={12} md={7} lg={8} className="testimonial-slider" >
                                <TestimonialSlider></TestimonialSlider>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
    );
};

export default Testimonial;