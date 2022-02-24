import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PageHeroSection.css';

const PageHeroSection = ({ pageInfo }) => {
    const { breadCrumb, pageName } = pageInfo;
    return (
        <section className='page-hero-section'>
            <Container>
                <div className="page-name">
                    <h2 className='text-center text-white text-capitalize m-0'>{pageName}</h2>
                </div>
                <div className="bread-crumb">
                    <p className='breadcrumb-container text-center'>
                        <Link className='breadcrumb-main-link' to="/">Home</Link> <span className='text-white breadcrumb-separator fs-4'>/</span> <span className='breadcrumb-current-link text-capitalize'>{breadCrumb}</span>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default PageHeroSection;