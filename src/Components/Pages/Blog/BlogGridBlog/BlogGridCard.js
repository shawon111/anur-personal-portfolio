import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogGridCard.css';

const BlogGridCard = ({blog}) => {
    const {title, thumbnail, date, id, comments, details, author} = blog;
    return (
            <div className="blog-grid-card-container">
                <div className="blog-grid-card-image">
                    <img src={thumbnail} alt="" />
                </div>
                <div className="blog-grid-card-meta-data mt-4">
                    <ul className='d-flex justify-content-start text-secondary'>
                        <li><span className='me-2'><FontAwesomeIcon icon={faUser} /></span> by <span className='text-decoration-underline blog-author-link'><Link to={`/author/${author}`}>{author}</Link></span></li>
                        <li className='styled-meta-data'>comments {comments}</li>
                        <li className='styled-meta-data'>{date}</li>
                    </ul>
                </div>
                <div className="blog-grid-card-title">
                    <h2 className='mt-3'><Link to={`/blog/${id}`}>{title}</Link></h2>
                </div>
                <div className="blog-grid-card-excerpt">
                    <p className='text-secondary'>{details}</p>
                </div>
                <div className="blog-grid-card-excerpt-read-more-btn">
                    <Link className='text-uppercase' to={`/blog/${id}`}>read more...</Link>
                </div>
            </div>
    );
};

export default BlogGridCard;