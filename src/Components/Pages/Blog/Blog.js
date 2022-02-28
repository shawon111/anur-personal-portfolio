import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../GlobalComponents/Footer/Footer';
import SecondaryHeader from '../../GlobalComponents/Header/SecondaryHeader/SecondaryHeader';
import PageHeroSection from '../../GlobalComponents/PageHeroSection/PageHeroSection';
import './Blog.css';
import thumb1 from '../../../images/project-5.jpg';
import thumb2 from '../../../images/project-4.jpg';
import thumb3 from '../../../images/project-6.jpg';

const Blog = () => {
    const pageInfo = { pageName: "Latest News", breadCrumb: 'blog' };

    // blogs
    const blogs = [
        {title: "Have You Heard? Agency Is Your Best Bet To Grow", thumbnail: thumb1, date: '28, February, 2021', category: 'web design', id: 1, author: 'x', comments: '35', details: 'Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.'},
        {title: "Nemo enim ipsam voluptatem quia voluptas.", thumbnail: thumb2, date: '27, February, 2021', category: 'graphic design', id: 2, author: 'x', comments: '45', details: 'Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.'},
        {title: "I must explain to you how all this mistaken idea", thumbnail: thumb3, date: '26, February, 2021', category: 'web design', id: 3, author: 'x', comments: '105', details: 'Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.'},
    ]
    return (
        <div>
            
            {/* header */}
            <SecondaryHeader></SecondaryHeader>
            {/* page hero/banner section */}
            <PageHeroSection pageInfo={pageInfo} />
            {/* blogs section */}
            <section className="blogs">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <div className="blog-contents">
                                
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="blog-sidebar">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Blog;