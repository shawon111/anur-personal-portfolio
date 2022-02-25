import React from 'react';
import { Row } from 'react-bootstrap';
import SectionIntro from '../../GlobalComponents/SectionIntro/SectionIntro';
import ServiceOffer from '../Home/ServiceOffer/ServiceOffer';
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
import Footer from '../../GlobalComponents/Footer/Footer';
import SecondaryHeader from '../../GlobalComponents/Header/SecondaryHeader/SecondaryHeader';
import PageHeroSection from '../../GlobalComponents/PageHeroSection/PageHeroSection';

const Service = () => {
    // page info
    const pageInfo = { pageName: "Services", breadCrumb: 'services' }

    // services info
    const services = [
        { offer: 'Design & Planning', link: '/', icon: offer1, bg: bg1, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Graphic Design', link: '/', icon: offer2, bg: bg2, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Web Design', link: '/', icon: offer3, bg: bg3, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Digital Marketing', link: '/', icon: offer4, bg: bg4, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Social Media Marketing', link: '/', icon: offer5, bg: bg5, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." },
        { offer: 'Content Writing', link: '/', icon: offer5, bg: bg5, texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ultrices gravida." }
    ];
    return (
        <div>
            {/* header */}
            <SecondaryHeader></SecondaryHeader>
            {/* page hero/banner section */}
            <PageHeroSection pageInfo={pageInfo}></PageHeroSection>
            {/* our services section */}
            <section className="our-services">
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
                    </section>
                    {/* footer */}
                    <Footer></Footer>
        </div>
    );
};

export default Service;