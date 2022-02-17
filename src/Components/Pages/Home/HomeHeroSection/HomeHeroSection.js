import React from 'react';
import { Container } from 'react-bootstrap';
import "./HomeHeroSection.css";
import heroImage from '../../../../images/home-hero-girl.png';
import { Link } from 'react-router-dom';
import Header from '../../../GlobalComponents/Header/Header';

const HomeHeroSection = () => {
    return (
        <section className='home-hero'>
            <Header></Header>
            <div className='home-hero-wrapper'>
                <div className="home-hero-container d-flex justify-content-center align-items-center">
                    <div className="social-media">
                        <ul className="social-links">
                            <li className="social-link">
                                <a className='text-white' href="#">Facebook</a>
                            </li>
                            <li className="social-link styled-link">
                                <a className='text-white' href="#">Twitter</a>
                            </li>
                            <li className="social-link styled-link">
                                <a className='text-white' href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <h1 className="hero-heading text-white">
                            <span>Find</span>
                            <span>Think</span>
                            <span>Solve</span>
                        </h1>
                        <div className="hero-cta text-end">
                            <Link to="/about">View Showcase</Link>
                        </div>
                    </div>
                    <div className="animated-image">
                        <div className="hero-img">
                            <img src={heroImage} alt="" />
                        </div>
                        <div className="round-1"></div>
                        <div className="round-2"></div>
                        <div className="round-3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;