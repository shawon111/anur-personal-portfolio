import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleStatistic.css';

const SingleStatistic = ({statistic}) => {
    console.log(statistic)
    return (
        <Col xs={12} sm={6} md={6} lg={3}>
            <div className="statistic-container d-flex align-items-center">
                <div className="statistic-number w-50">
                    <h2>{statistic.number}</h2>
                </div>
                <div className="statistic-title w-50">
                    <h4>{statistic.title}</h4>
                </div>
            </div>
        </Col>
    );
};

export default SingleStatistic;