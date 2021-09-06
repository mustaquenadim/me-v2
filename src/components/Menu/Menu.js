import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='home'>
            <div className='home__main'>
                <marquee behavior='scroll' direction='left' className='home__marquee'>Mustaque Nadim</marquee>
                <marquee behavior='scroll' direction='right' className='home__marquee'>Mustaque Nadim</marquee>
                <div className='home__menu'>
                    <div className='row'>
                        <Link to='/about' className='home__menuItem col d-flex align-items-center justify-content-center text-decoration-none'>
                            <h3>About</h3>
                        </Link>
                        <Link to='/projects' className='home__menuItem col d-flex align-items-center justify-content-center text-decoration-none'>
                            <h3>Projects</h3>
                        </Link>
                    </div>
                    <div className='row'>
                        <Link to='/blogs' className='home__menuItem col d-flex align-items-center justify-content-center text-decoration-none'>
                            <h3>Blogs</h3>
                        </Link>
                        <Link to='/contact' className='home__menuItem col d-flex align-items-center justify-content-center text-decoration-none'>
                            <h3>Contact</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
