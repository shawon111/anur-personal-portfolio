import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionIntro from '../../../GlobalComponents/SectionIntro/SectionIntro';
import icon1 from '../../../../images/process-icon-1.png';
import icon2 from '../../../../images/process-icon-2.png';
import icon3 from '../../../../images/process-icon-3.png';
import icon4 from '../../../../images/process-icon-4.png';
import ProcessPrimary from '../ProcessPrimary/ProcessPrimary';
import ProcessSecondary from '../ProcessSecondary/ProcessSecondary';

const WorkProcess = () => {
    return (
        <section className="work-process">
                <Container>
                    <div className="section-bg-text-container">
                        <h1 className="section-bg-text">
                            Work
                        </h1>
                    </div>
                    <SectionIntro
                        subheading="working process"
                        heading="how we do our work plan"
                    >
                    </SectionIntro>
                    <Row className='pt-5 work-process-container'>
                        <Col className='work-process-item' xs={12} sm={12} md={6} lg={3}><ProcessPrimary
                            icon={icon1}
                            iconThumb="1"
                            processName="Creating a Concept"
                        /></Col>
                        <Col className='work-process-item' xs={12} sm={12} md={6} lg={3}>
                            <ProcessSecondary
                                icon={icon2}
                                iconThumb="2"
                                processName="Budget Planning"
                            />
                        </Col>
                        <Col className='work-process-item' xs={12} sm={12} md={6} lg={3}><ProcessPrimary
                            icon={icon3}
                            iconThumb="3"
                            processName="Design Process"
                        /></Col>
                        <Col className='work-process-item' xs={12} sm={12} md={6} lg={3}>
                            <ProcessSecondary
                                icon={icon4}
                                iconThumb="4"
                                processName="Building Your Dream"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default WorkProcess;