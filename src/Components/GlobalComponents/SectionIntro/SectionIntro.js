import React from 'react';
import './SectionIntro.css';


const SectionIntro = ({ subheading, heading }) => {
    return (
        <div className='section-intro'>
            <div className="section-intro-container">
                <div className="intro-subheading-container">
                    <h5 className="section-intro-subheading">{subheading}</h5>
                </div>
                <h2 className='section-intro-heading'>{heading}</h2>
            </div>
        </div>
    );
};

export default SectionIntro;