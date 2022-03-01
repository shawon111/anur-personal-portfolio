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
import { faArrowRightLong, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import project1 from '../../../images/project-1.jpg';
import project2 from '../../../images/project-2.jpg';
import project3 from '../../../images/project-3.jpg';
import project4 from '../../../images/project-4.jpg';
import project5 from '../../../images/project-5.jpg';
import project6 from '../../../images/project-6.jpg';

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
            {/* blog cards */}
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
                            {/* sidebar */}
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
                                <div className="sidebar-categories">
                                    <div className="sidebar-categories-container">
                                        <h4 className='sidebar-subheading'>Categories</h4>
                                        <ul>
                                            <li>
                                                <Link to='/'><span>Design & Planning</span><span>1</span></Link>
                                            </li>
                                            <li>
                                                <Link to='/'><span>Graphic Design</span><span>2</span></Link>
                                            </li>
                                            <li>
                                                <Link to='/'><span>Web Design</span><span>3</span></Link>
                                            </li>
                                            <li>
                                                <Link to='/'><span>Digital Marketing</span><span>4</span></Link>
                                            </li>
                                            <li>
                                                <Link to='/'><span>Social Media Marketing</span><span>5</span></Link>
                                            </li>
                                            <li>
                                                <Link to='/'><span>Content Writing</span><span>6</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* sidebar related posts */}
                                <div className="sidebar-related-posts">
                                    <div className="sidebar-related-posts-container">
                                        <h4 className="sidebar-subheading">Related Posts</h4>
                                        <div className="sidebar-posts-grid">

                                            {
                                                blogs.map(blog => <Row className='g-0'>
                                                        <Col xs={4} sm={4} md={4} lg={4}>
                                                            <img className='img-fluid related-post-image' src={blog.thumbnail} alt="" />
                                                        </Col>
                                                        <Col xs={8} sm={8} md={8} lg={8}>
                                                            <h6 className="related-post-title"><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h6>
                                                            <p className="related-post-date text-secondary"><small>{blog.date}</small></p>
                                                        </Col>
                                                    </Row>)
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* sidebar projects grid */}
                                <div className="sidebar-project-grid">
                                    <div className="project-grid-container">
                                        <h4 className="sidebar-subheading">
                                            Projects
                                        </h4>
                                        <div className="project-grid-images">
                                            <Row className='g-2'>
                                                <Col xs={6} sm={6} md={4} lg={4}><Link to="/"><img src={project1} alt="" /></Link></Col>
                                                <Col xs={6} sm={6} md={4} lg={4}><Link to="/"><img src={project2} alt="" /></Link></Col>
                                                <Col xs={6} sm={6} md={4} lg={4}><Link to="/"><img src={project3} alt="" /></Link></Col>
                                                <Col xs={6} sm={6} md={4} lg={4}><Link to="/"><img src={project4} alt="" /></Link></Col>
                                                <Col xs={6} sm={6} md={4} lg={4}><Link to="/"><img src={project5} alt="" /></Link></Col>
                                                <Col xs={6} sm={6} md={4} lg={4}><Link to="/"><img src={project6} alt="" /></Link></Col>
                                            </Row>
                                        </div>
                                        {/* sidebar tags */}
                                        <div className="sidebar-tags">
                                            <div className="sidebar-tags-container">
                                                <h4 className="sidebar-subheading">Tags</h4>
                                                <p><span><Link to="/">Wordpress</Link></span> <span><Link to="/">HTML</Link></span> <span><Link to="/">CSS</Link></span> <span><Link to="/">Graphic Design</Link></span> <span><Link to="/">Theme Develop</Link></span> <span><Link to="/">PDS Template</Link></span> <span><Link to="/">Video</Link></span> <span><Link to="/">Audio</Link></span> <span><Link to="/">Plugin</Link></span> <span><Link to="/">Photography</Link></span></p>
                                            </div>
                                        </div>
                                        {/* sidebar-contact-cta */}
                                        <div className="sidebar-contact-cta">
                                            <div className="sidebar-contact-cta-container">
                                                <h3 className="contact-cta-heaing">How We Can Help You!</h3>
                                                <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                <button className='btn p-0'><Link to="/contact">Contact Us <span><FontAwesomeIcon icon={faArrowRightLong} /></span></Link></button>
                                            </div>
                                        </div>
                                    </div>
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