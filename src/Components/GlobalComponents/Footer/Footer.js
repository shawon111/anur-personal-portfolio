import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/anur-white-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import project1 from '../../../images/project-1.jpg';
import project2 from '../../../images/project-2.jpg';
import project3 from '../../../images/project-3.jpg';
import project4 from '../../../images/project-4.jpg';
import project5 from '../../../images/project-5.jpg';
import project6 from '../../../images/project-6.jpg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className="company-intro">
                                <div className="company-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <p className="company-info text-white">
                                    Build and Earn with your online store with lots of cool and exclusive features
                                </p>
                                <div className="social-icons d-flex">
                                    <a href="/" target='_blank' className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="/" target='_blank' className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="/" target='_blank' className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="/" target='_blank' className="social-icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className="footer-services-nav">
                                <h5 className="footer-col-heading text-white text-uppercase mb-4">
                                    services
                                </h5>
                                <div className="footer-services-links">
                                    <ul className='p-0'>
                                        <li>
                                            <Link className='text-white' to="/">Graphic Design</Link>
                                        </li>
                                        <li><Link className='text-white' to="/">Web Design</Link></li>
                                        <li><Link className='text-white' to="/">Digital Marketing</Link></li>
                                        <li><Link className='text-white' to="/">Social Media Marketing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className="footer-contact-col">
                                <h5 className="footer-col-heading text-white text-uppercase mb-4">
                                    Contact
                                </h5>
                                <div className="contact-details">
                                    <p className='text-white d-block'>7 Green Lake Street Crawfordsville, IN 47933</p>
                                    <address className='text-white d-block'>+1 800 123 456 789</address>
                                    <address className='text-white d-block'>anur@gmail.com</address>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className="footer-projects-col">
                                <h5 className="footer-col-heading text-white text-uppercase mb-4">
                                    Projects
                                </h5>
                                <div className="project-gallery">
                                    <Row>
                                        <Col xs={6} sm={6} md={4} lg={4}>
                                            <Link to="/"> <img className='' src={project1} alt="" /></Link>
                                        </Col>
                                        <Col xs={6} sm={6} md={4} lg={4}>
                                        <Link to="/"> <img className='' src={project2} alt="" /></Link>
                                        </Col>
                                        <Col xs={6} sm={6} md={4} lg={4}>
                                            <Link to="/"><img className='' src={project3} alt="" /></Link>
                                        </Col>
                                        <Col xs={6} sm={6} md={4} lg={4}>
                                        <Link to="/"><img className='' src={project4} alt="" /></Link>
                                        </Col>
                                        <Col xs={6} sm={6} md={4} lg={4}>
                                        <Link to="/"><img className='' src={project5} alt="" /></Link>
                                        </Col>
                                        <Col xs={6} sm={6} md={4} lg={4}>
                                        <Link to="/"><img className='' src={project6} alt="" /></Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <p className='text-white m-0 text-center'>Copyright © 2021 anur by wpOceans. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;