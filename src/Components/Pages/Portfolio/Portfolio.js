import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SecondaryHeader from '../../GlobalComponents/Header/SecondaryHeader/SecondaryHeader';
import PageHeroSection from '../../GlobalComponents/PageHeroSection/PageHeroSection';
import './Portfolio.css';
import portfolio1 from '../../../images/portfolio/portfolio-img-1.jpg';
import portfolio2 from '../../../images/portfolio/portfolio-img-2.jpg';
import portfolio3 from '../../../images/portfolio/portfolio-img-3.jpg';
import portfolio4 from '../../../images/portfolio/portfolio-img-4.jpg';
import portfolio5 from '../../../images/portfolio/portfolio-img-5.jpg';
import portfolio6 from '../../../images/portfolio/portfolio-img-6.jpg';
import PortfolioGridItem from './PortfolioGridItem/PortfolioGridItem';
import Footer from '../../GlobalComponents/Footer/Footer';

const Portfolio = () => {
    // page info
    const pageInfo = { pageName: "portfolio", breadCrumb: 'portfolio' }

    // portfolio items
    const poertfolioItems = [
        {title: 'Minimalism', category: 'Illustration . Art Direction', id: 1, image: portfolio1},
        {title: 'Abstract Art', category: 'Illustration . Art Direction', id:2 , image: portfolio2},
        {title: '3D Project', category: 'Illustration . Art Direction', id: 3, image: portfolio3},
        {title: 'Product Design', category: 'Illustration . Art Direction', id: 4, image: portfolio4},
        {title: 'Web Design', category: 'Illustration . Art Direction', id: 5, image: portfolio5},
        {title: 'Modern BG', category: 'Illustration . Art Direction', id: 6, image: portfolio6}
    ];

    return (
        <div>
            {/* header */}
            <SecondaryHeader></SecondaryHeader>
            {/* page hero section */}
            <PageHeroSection pageInfo={pageInfo}></PageHeroSection>
            {/* portfolio-grid section */}
            <section className='portfolio-grid'>
                <Container>
                    <div className="portfolio-items">
                        <Row className='g-4'>
                            {
                                poertfolioItems.map(portfolioItem=> <PortfolioGridItem
                                key={portfolioItem.id}
                                portfolioItem={portfolioItem}
                                ></PortfolioGridItem>)
                            }
                        </Row>
                    </div>
                </Container>
            </section>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;