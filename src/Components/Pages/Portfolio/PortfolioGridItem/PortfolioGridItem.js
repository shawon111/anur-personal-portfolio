import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PortfolioGridItem = ({portfolioItem}) => {
const {title, category, id, image} = portfolioItem;


    return (
        <Col xs={12} sm={12} md={6} lg={6}>
            <div className="portfolio-item">
                <div id='portfolio-item-effect' className="portfolio-item-overlay"></div>
                <div className="portfolio-grid-image">
                    <img src={image} alt="" />
                </div>
                <div className="portfolio-item-details">
                    <h3 className="portfolio-item-title text-white">{title}</h3>
                    <h6 className='portfolio-item-category text-white fw-normal'>{category}</h6>
                    <Link className='portfolio-item-btn' to={`/portfolio/${id}`}>View Work</Link>
                </div>
            </div>
        </Col>
    );
};

export default PortfolioGridItem;