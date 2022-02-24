import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../GlobalComponents/Footer/Footer';
import SecondaryHeader from '../../GlobalComponents/Header/SecondaryHeader/SecondaryHeader';
import PageHeroSection from '../../GlobalComponents/PageHeroSection/PageHeroSection';
import AboutUs from '../Home/AboutUs/AboutUs';
import SingleStatistic from '../Home/SingleStatistic/SingleStatistic';
import Testimonial from '../Home/Testimonial/Testimonial';
import WorkProcess from '../Home/WorkProcess/WorkProcess';
import './About.css';

const About = () => {
    // page info
    const pageInfo = { pageName: "about us", breadCrumb: 'about' }

    // statistics info
    const statistics = [
        { title: "Successful Projects", number: "82" },
        { title: "Satisfied Clients", number: "45" },
        { title: "Years of Experience", number: "15" },
        { title: "Award Winning", number: "37" }
    ]
    return (
        <div>
            {/* header */}
            <SecondaryHeader></SecondaryHeader>
            {/* page hero/banner section */}
            <PageHeroSection pageInfo={pageInfo}></PageHeroSection>
            {/* about us section */}
            <section>
                <Container>
                    <AboutUs></AboutUs>
                </Container>
            </section>
            {/* working process section */}
            <WorkProcess></WorkProcess>
            {/* statistics section */}
            <section className="about-statistics-section">
                <Container>
                    <div className="about-statistics-container">
                        <Row>
                            {
                                statistics.map(statistic => <SingleStatistic
                                key={statistic.number}
                                statistic={statistic}
                                />)
                            }
                        </Row>
                    </div>
                </Container>
            </section>
            {/* testimonial section */}
            <Testimonial></Testimonial>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default About;