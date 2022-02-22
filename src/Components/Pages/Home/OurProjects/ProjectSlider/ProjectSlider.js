import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectSlider.css';

const ProjectSlider = ({ slide }) => {
    const { img, projectLink, slideNumber, title } = slide;
    return (
        <div className='slider'>
            <div className="slider-container">
                <div className="project-title">
                    <h4 className='mb-4'><Link to={projectLink}>{title}</Link></h4>
                </div>
                <div className="slider-image">
                    <Link to={projectLink}>
                        <img className='img-fluid project-image' src={img} alt="slider-pic" />
                    </Link>
                </div>
                <div className="slider-number">
                    <span>{slideNumber}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectSlider;