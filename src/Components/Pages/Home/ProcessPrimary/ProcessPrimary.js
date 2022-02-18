import React from 'react';
import './ProcessPrimary.css';

const ProcessPrimary = ({icon, iconThumb, processName}) => {
    return (
        <div className='process-primary'>
            <div className="process-icon-container mx-auto">
                <div className="process-icon-wrapper process-primary-icon">
                    <img className='process-icon' src={icon} alt="" />
                </div>
                <div className="icon-thumb-container primary-icon-thumb-container">
                    <span>{iconThumb}</span>
                </div>
            </div>
            <div className="process-title">
                <h4 className="text-center mt-4">{processName}</h4>
            </div>
        </div>
    );
};

export default ProcessPrimary;