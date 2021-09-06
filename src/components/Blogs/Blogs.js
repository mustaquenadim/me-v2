import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import axios from 'axios';
import { convertFromRaw, convertToRaw } from 'draft-js';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/api/blogs';
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className='blogs'>
            <nav className='component__nav navbar'>
                <h3 className='nav text-decoration-none'>
                    <Link to='/' className='nav-item text-decoration-none'>
                        <CgMenuGridR className='component__navIcon mx-3' />
                    </Link>
                    <span className='text-decoration-none text-white'>Blogs</span>
                </h3>
            </nav>
            <div className='blogs__main container'>
                <h1 className='blogs__title text-center my-3'>
                    <span className='highlight'>B</span>logs
                </h1>
                <p className='blogs__text text-center'>Here is some of my blogs.</p>
                <div className='blogs__display'>
                    {blogs.map((blog) => (
                        <div className='blogs__card' key={blog._id}>
                            <div className='blogs__card__img'>
                                <img src={blog.images} alt='blog' className='img-fluid' />
                            </div>
                            <div className='blogs__card__content'>
                                <h3 className='blogs__card__title'>{blog.blogHead}</h3>
                                <div dangerouslySetInnerHTML={{ __html: blog.blogBody }} className='blogs__card__text'></div>
                                <Link to={`/blogs/${blog._id}`} className='blogs__card__link'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
