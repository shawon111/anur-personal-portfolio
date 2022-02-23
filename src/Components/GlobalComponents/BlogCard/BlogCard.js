import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({blog}) => {
    const {title, thumbnail, date, category} = blog;
    return (
        <div className='blog-card'>
            <div className="blog-card-container">
                <div className="blog-card-img-container">
                    <img className='img-fluid' src={thumbnail} alt="" />
                    <span className="post-category">{category}</span>
                    <span className="fav-blog">
                        🤍
                    </span>
                </div>
                <div className="blog-card-date-container">
                    <p className="blog-date mt-4">{date}</p>
                </div>
                <div className="blog-card-title-container">
                    <h4 className="blog-card-title"><Link to="/">{title}</Link></h4>
                </div>
                <div className="read-more-btn mt-4">
                    <button className='brand-btn btn ps-4 pe-4 py-2 rounded'><Link className='fw-normal text-dark fs-6' to="/">Read More &#187;</Link></button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;