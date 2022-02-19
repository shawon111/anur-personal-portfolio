import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceOffer.css';

const ServiceOffer = ({ service }) => {
    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <Card style={{backgroundImage: `url(${service.bg})`}} className='offer-box'>
                <div className="offer-image text-center">
                    <Card.Img className='offer-icon' src={service.icon} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center offer-title'>{service.offer}</Card.Title>
                    <Card.Text className='text-center text-secondary'>
                        {service.texts}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceOffer;