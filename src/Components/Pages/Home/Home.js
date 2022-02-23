import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import './Home.css';
import SectionIntro from '../../GlobalComponents/SectionIntro/SectionIntro';
import ProcessPrimary from './ProcessPrimary/ProcessPrimary';
import icon1 from '../../../images/process-icon-1.png';
import icon2 from '../../../images/process-icon-2.png';
import icon3 from '../../../images/process-icon-3.png';
import icon4 from '../../../images/process-icon-4.png';
import ProcessSecondary from './ProcessSecondary/ProcessSecondary';
import aboutImg from '../../../images/about-section-img.jpg';
import InnerSectionIntro from '../../GlobalComponents/InnerSectionIntro/InnerSectionIntro';
import { Link } from 'react-router-dom';
import offer1 from "../../../images/offer-1.png";
import offer2 from "../../../images/offer-2.png";
import offer3 from "../../../images/offer-3.png";
import offer4 from "../../../images/offer-4.png";
import offer5 from "../../../images/offer-5.png";
import bg1 from "../../../images/offer-bg-1.png";
import bg2 from "../../../images/offer-bg-2.png";
import bg3 from "../../../images/offer-bg-3.png";
import bg4 from "../../../images/offer-bg-4.png";
import bg5 from "../../../images/offer-bg-5.png";
import ServiceOffer from './ServiceOffer/ServiceOffer';
import SingleStatistic from './SingleStatistic/SingleStatistic';
import OurProjects from './OurProjects/OurProjects';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';
import thumb1 from '../../../images/project-5.jpg';
import thumb2 from '../../../images/project-4.jpg';
import thumb3 from '../../../images/project-6.jpg';
import BlogCard from '../../GlobalComponents/BlogCard/BlogCard';
import Footer from '../../GlobalComponents/Footer/Footer';

const Home = () => {

    const services = [
        { offer: 'Design & Planning', link: '/', icon: offer1, bg: bg1, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Graphic Design', link: '/', icon: offer2, bg: bg2, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Web Design', link: '/', icon: offer3, bg: bg3, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Digital Marketing', link: '/', icon: offer4, bg: bg4, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Social Media Marketing', link: '/', icon: offer5, bg: bg5, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Content Writing', link: '/', icon: offer5, bg: bg5, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." }
    ];

    const statistics = [
        { title: "Successful Projects", number: "82" },
        { title: "Satisfied Clients", number: "45" },
        { title: "Years of Experience", number: "15" },
        { title: "Award Winning", number: "37" }
    ]

    const blogs = [
        {title: "Have You Heard? Agency Is Your Best Bet To Grow", thumbnail: thumb1, date: '28, February, 2021', category: 'web design', id: 1},
        {title: "Nemo enim ipsam voluptatem quia voluptas.", thumbnail: thumb2, date: '27, February, 2021', category: 'graphic design', id: 2},
        {title: "I must explain to you how all this mistaken idea", thumbnail: thumb3, date: '26, February, 2021', category: 'web design', id: 3},
    ]

    return (
        <div>
            {/* hero/banner section */}
            <HomeHeroSection></HomeHeroSection>

            {/* working process section */}
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

            {/* about&services section */}
            <section className="about-services-section">
                <Container>
                    {/* about */}
                    <div className="about-us">
                        <Row className='align-items-center about-us-container'>
                            <Col xs={12} sm={12} md={12} lg="6">
                                <div className="about-img-col-container">
                                    <div className="about-img text-center">
                                        <img src={aboutImg} alt="about-banner" />
                                        <div className="experience-text d-inline-block">
                                            <h5 className='d-inline-block text-white'>7 Years Experience</h5>
                                        </div>
                                    </div>
                                    <div className="about-big-circle"></div>
                                    <div className="about-small-circle"></div>
                                </div>
                            </Col>
                            <Col className='about-texts' xs={12} sm={12} md={12} lg="6">
                                <div className="about-contents">
                                    <div className="section-bg-text-container">
                                        <h2 className="section-bg-text text-start">About</h2>
                                    </div>
                                    <InnerSectionIntro
                                        subheading="about us"
                                        heading="We are more than just a"
                                        brandText="digital agency."
                                    >
                                    </InnerSectionIntro>
                                    <p className='my-4 text-secondary'>We create award-winning websites, remarkable brands and cutting-edge apps. Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh.</p>

                                    <div className="about-list-container">
                                        <ul>
                                            <li className='text-secondary pb-2'>
                                                Quis ipsum suspendisse ultrices gravida.
                                            </li>
                                            <li className='text-secondary pb-2'>
                                                Risus commodo viverra maecenas accumsan lacus.
                                            </li>
                                            <li className='text-secondary pb-2'>
                                                Incididunt ut labore et dolore magna aliqua.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-section-cta">
                                        <button className='brand-btn btn mt-4'><Link to="/projects">View Projects</Link></button>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="our-services">
                        <div className="section-heading">
                            <div className="section-bg-text-container">
                                <h2 className="section-bg-text">
                                    Service
                                </h2>
                            </div>
                            <SectionIntro
                                subheading="our services"
                                heading="what can we offer"
                            ></SectionIntro>
                            <div className="our-service-offers pt-5">
                                <Row>
                                    {
                                        services.map(service => <ServiceOffer
                                            key={service.offer}
                                            service={service}>
                                        </ServiceOffer>)
                                    }
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="half-circle-bg">
                </div>
            </section>

            {/* statistics section */}
            <section className="statistics">
                <Container>
                    <Row>
                        {
                            statistics.map(statistic => <SingleStatistic
                                key={statistic.number}
                                statistic={statistic}
                            />)
                        }
                    </Row>
                </Container>
            </section>
            {/* our projects section */}
            <section className='our-projects'>
                <Container>
                    <OurProjects></OurProjects>
                </Container>
            </section>
            {/* testimonial section */}
            <section className="testimonial">
                <Container>
                    <div className="testimonial-container">
                        <Row>
                            <Col xs={12} sm={12} md={5} lg={4} className="testimonial-heading" >
                                <InnerSectionIntro
                                    subheading="testimonial"
                                    heading="What People Says"
                                ></InnerSectionIntro>
                                <p className='me-5 mt-3 text-secondary'>We met years ago at an advertising agency where we learned a ton of dos and some don’ts.</p>
                                <button className='btn brand-btn brand-bg-btn mt-2'>
                                    <Link to="/">Contact Us</Link>
                                </button>
                            </Col>
                            <Col xs={12} sm={12} md={7} lg={8} className="testimonial-slider" >
                                <TestimonialSlider></TestimonialSlider>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            {/* help-ticket section */}
            <section className="help-ticket">
                <Container>
                    <div className="help-ticket-contents">
                        <Row className='align-items-center'>
                            <Col xs={12} sm={12} md={8} lg={6}>
                                <h3 className='text-white mb-4'>Have a defferent question?
                                </h3>
                                <p className='text-white m-0'>There are many variations of passages of Lorem Ipsum <br/>available, but the majority have suffered alteration.
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={6}>
                                <div className="ticket-cta-btn text-end">
                                    <button className='btn brand-btn border-0'><Link to="/">Submit A Ticket</Link></button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            {/* our blog section */}
            <section className="our-blog">
                <Container>
                    <div className="section-bg-text-container">
                        <h2 className="section-bg-text">News</h2>
                    </div>
                    <SectionIntro
                        subheading="our blog"
                        heading="latest news"
                    />
                    <div className="recent-blogs">
                        <Row>
                            {
                                blogs.map(blog => <Col xs={12} sm={12} md={6} lg={4} >
                                    <BlogCard
                                    blog={blog}
                                    key={blog.id}
                                    ></BlogCard>
                                </Col>)
                            }
                        </Row>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;