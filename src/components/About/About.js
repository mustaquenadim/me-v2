import React, { useEffect, useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import { FaLinkedinIn, FaGithubAlt, FaYoutube, FaFacebookF, FaTwitter, FaMediumM, FaInstagram, FaPhone } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { GoGlobe } from "react-icons/go";

const About = () => {
    return (
        <div className='about'>
            <nav className='component__nav navbar'>
                <h3 className='nav text-decoration-none'>
                    <Link to='/' className='nav-item text-decoration-none'>
                        <CgMenuGridR className='component__navIcon mx-3' />
                    </Link>
                    <span className='text-decoration-none text-white'>About Me</span>
                </h3>
            </nav>
            <div className='about__main'>
                <div className='row m-3'>
                    <div className='col-md-6'>
                        <p className='hello__text'>Hello, My name is</p>
                        <h1 className='about__name mb-4 animate__animated animate__fadeInDown'><span className='highlight'>M</span>ustaque <span className='highlight'>N</span>adim</h1>
                        <h4 className='about__title my-3 animate__animated animate__fadeInLeft'>Programmer | Blogger</h4>
                        <p className='main__text my-3 text-secondary animate__animated animate__fadeInUp'>Currently, living in Noakhali, Bangladesh and rambling computer science and engineering field after passing HSC Exam in 2019 from Udayan Higher Secondary School. Recently, I have completed a course on Web Development which is guided by <a href="https://web.programming-hero.com/" target="_blank" rel="noopener noreferrer">Programming Hero</a> named 'Complete Web Development Course with <a href="https://www.jhankarmahbub.com/" target="_blank" rel="noopener noreferrer">Jhankar Mahbub</a>'. During this course, I've completed 11 projects, including 3 fullstack projects. These projects are attached to my <Link to="/">portfolio</Link> section.</p>
                        <div className="social__links">
                            <a href="https://www.linkedin.com/in/mustaquenadim/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="social__icon" /></a>
                            <a href="https://github.com/mustaquenadim" target="_blank" rel="noopener noreferrer"><FaGithubAlt className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube className="social__icon" /></a>
                            <a href="https://www.facebook.com/engr.mustaquenadim/" target="_blank" rel="noopener noreferrer"><FaFacebookF className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><SiGmail className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><GoGlobe className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaMediumM className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className="social__icon" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaPhone className="social__icon" /></a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='education mt-5 animate__animated animate__fadeInDown'>
                            <h2 className='fw-bold'>Education</h2>
                            <dl>
                                <dt>Bachelor of Science</dt>
                                <dd className='text-danger'>Haven't started yet.</dd>

                                <dt>Higher Secondary (Science)</dt>
                                <dd>Udayan Higher Secondary School (GPA - 4.33)</dd>

                                <dt>Secondary (Science)</dt>
                                <dd>Khilgaon Government High School (GPA - 5.00)</dd>
                            </dl>
                        </div>
                        <div className='skills mt-5 animate__animated animate__fadeInRight'>
                            <h2 className='fw-bold'>Professional Skills</h2>
                            <ul>
                                <li className='border m-2 p-2 rounded-pill'>C / C++</li>
                                <li className='border m-2 p-2 rounded-pill'>JavaScript</li>
                                <li className='border m-2 p-2 rounded-pill'>MongoDB</li>
                                <li className='border m-2 p-2 rounded-pill'>Express JS</li>
                                <li className='border m-2 p-2 rounded-pill'>React JS</li>
                                <li className='border m-2 p-2 rounded-pill'>Node JS</li>
                            </ul>
                        </div>
                        <div className='interests mt-5 animate__animated animate__fadeInUp'>
                            <h2 className='fw-bold'>Personal Interests</h2>
                            <ul>
                                <li className='border m-2 p-2 rounded-pill'>Coding</li>
                                <li className='border m-2 p-2 rounded-pill'>Reading Books</li>
                                <li className='border m-2 p-2 rounded-pill'>Writing Stories</li>
                                <li className='border m-2 p-2 rounded-pill'>Travelling</li>
                                <li className='border m-2 p-2 rounded-pill'>Photography</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
