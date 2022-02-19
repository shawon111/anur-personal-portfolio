import React from 'react';
import './InnerSectionIntro.css';

const InnerSectionIntro = ({subheading, heading, brandText}) => {
    return (
        <div className='section-intro'>
            <div className="section-intro-container">
                <div className="intro-subheading-container">
                    <h5 className="inner-intro-subheading">{subheading}</h5>
                </div>
                <h2 className='inner-intro-heading'>{heading}<span>{brandText}</span></h2>
            </div>
        </div>
    );
};

export default InnerSectionIntro;