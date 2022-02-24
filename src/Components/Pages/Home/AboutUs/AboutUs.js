import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import aboutImg from '../../../../images/about-section-img.jpg';
import InnerSectionIntro from '../../../GlobalComponents/InnerSectionIntro/InnerSectionIntro';
const AboutUs = () => {
    return (
        <div className="about-us">
            <Row className='align-items-center about-us-container'>
                <Col xs={12} sm={12} md={12} lg="6">
                    <div className="about-img-col-container">
                        <div className="about-img text-center">
                            <img src={aboutImg} alt="about-banner" />
                            <div className="experience-text d-inline-block">
                                <h5 className='d-inline-block text-white'>7 Years Experience</h5>
                            </div>
                        </div>
                        <div className="about-big-circle"></div>
                        <div className="about-small-circle"></div>
                    </div>
                </Col>
                <Col className='about-texts' xs={12} sm={12} md={12} lg="6">
                    <div className="about-contents">
                        <div className="section-bg-text-container">
                            <h2 className="section-bg-text text-start">About</h2>
                        </div>
                        <InnerSectionIntro
                            subheading="about us"
                            heading="We are more than just a"
                            brandText="digital agency."
                        >
                        </InnerSectionIntro>
                        <p className='my-4 text-secondary'>We create award-winning websites, remarkable brands and cutting-edge apps. Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh.</p>

                        <div className="about-list-container">
                            <ul>
                                <li className='text-secondary pb-2'>
                                    Quis ipsum suspendisse ultrices gravida.
                                </li>
                                <li className='text-secondary pb-2'>
                                    Risus commodo viverra maecenas accumsan lacus.
                                </li>
                                <li className='text-secondary pb-2'>
                                    Incididunt ut labore et dolore magna aliqua.
                                </li>
                            </ul>
                        </div>

                        <div className="about-section-cta">
                            <button className='brand-btn btn mt-4'><Link to="/projects">View Projects</Link></button>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;