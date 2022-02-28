import React from 'react';
import { Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Footer from '../../GlobalComponents/Footer/Footer';
import SecondaryHeader from '../../GlobalComponents/Header/SecondaryHeader/SecondaryHeader';
import PageHeroSection from '../../GlobalComponents/PageHeroSection/PageHeroSection';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import thumb1 from '../../../images/project-5.jpg';
import thumb2 from '../../../images/project-4.jpg';
import thumb3 from '../../../images/project-6.jpg';
import BlogGridCard from './BlogGridBlog/BlogGridCard';
import jenny from '../../../images/jenny.jpg';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    const pageInfo = { pageName: "Latest News", breadCrumb: 'blog' };

    // blogs
    const blogs = [
        { title: "Have You Heard? Agency Is Your Best Bet To Grow", thumbnail: thumb1, date: '28, February, 2021', category: 'web design', id: 1, author: 'web designer', comments: '35', details: 'Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.' },
        { title: "Nemo enim ipsam voluptatem quia voluptas.", thumbnail: thumb2, date: '27, February, 2021', category: 'graphic design', id: 2, author: 'graphics designer', comments: '45', details: 'Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.' },
        { title: "I must explain to you how all this mistaken idea", thumbnail: thumb3, date: '26, February, 2021', category: 'web design', id: 3, author: 'web design', comments: '105', details: 'Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.' },
    ]
    return (
        <div>

            {/* header */}
            <SecondaryHeader></SecondaryHeader>
            {/* page hero/banner section */}
            <PageHeroSection pageInfo={pageInfo} />
            {/* blogs section */}
            <section className="all-blogs">
                <Container>
                    <Row className='g-5'>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <div className="blog-all-contents">
                                {
                                    blogs.map(blog => <BlogGridCard
                                        key={blog.id}
                                        blog={blog}
                                    ></BlogGridCard>)
                                }
                            </div>
                        </Col>
                        <Col className='ps-5' xs={12} sm={12} md={4} lg={4}>
                            <div className="blog-sidebar">
                                <div className="blog-author-details">
                                    <Card className='blog-page-author-card'>
                                        <div className="author-profile-image mb-3">
                                            <Card.Img variant="top" src={jenny} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className='text-center author-card-name'>Jenny Watson
                                            </Card.Title>
                                            <Card.Text className='text-center author-speech text-secondary mt-3'>
                                                Hi! beautiful people. I'm an authtor of this blog. Read our post - stay with us
                                            </Card.Text>
                                            <div className="author-social-id mt-3">
                                                <ul className='d-flex justify-content-center'>
                                                    <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                                    <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                                    <li><a href="/"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="sidebar-search-bar">
                                    <InputGroup className="mb-3 sidebar-search-container">
                                        <FormControl
                                        className='sidebar-search-field'
                                        placeholder='Search Post...'
                                        />
                                        <InputGroup.Text className='btn sidebar-search-btn'><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    </InputGroup>
                                </div>
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