import React from 'react';
import './TestimonialSlide.css';

const TestimonialSlide = ({slide}) => {
    const {name, img, testimony, position} = slide;
    return (
        <div className='testimonial-single-slide'>
            <div className="slide-testimony bg-white p-5 mb-4">
                <p className="testimony-texts m-0">
                    {testimony}
                </p>
            </div>
            <div className="slide-profile-info d-flex align-items-center">
                <div className="profile-image">
                    <img className='rounded-circle img-fluid' src={img} alt="" />
                </div>
                <div className="profile-details ms-3">
                    <div className="profile-name"><h4>{name}</h4></div>
                    <div className="profile-job"><h5 className='text-secondary'>{position}</h5></div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlide;