import React from 'react';

const ProcessSecondary = ({icon, iconThumb, processName}) => {
    return (
        <div className='process-secondary'>
            <div className="process-icon-container mx-auto">
                <div className="process-icon-wrapper process-secondary-icon">
                    <img className='process-icon' src={icon} alt="" />
                </div>
                <div className="icon-thumb-container secondary-icon-thumb-container">
                    <span>{iconThumb}</span>
                </div>
            </div>
            <div className="process-title">
                <h4 className="text-center mt-4">{processName}</h4>
            </div>
        </div>
    );
};

export default ProcessSecondary;