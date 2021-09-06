import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import ProjectsData from './ProjectsData.json';
import dummyProjectImage from '../../images/dummy project image.jpg';
import { AiOutlineLink } from 'react-icons/ai';
import { FiCode } from 'react-icons/fi';
import { CgDetailsMore } from 'react-icons/cg';

const allCategories = ['All', ...new Set(ProjectsData.map((data) => data.category))];

const Projects = () => {
    const [projects, setProjects] = useState(ProjectsData);
    const [buttons, setButtons] = useState({ allCategories, activeBtn: 0 });

    const filter = (button, index) => {
        setButtons({ ...buttons, activeBtn: buttons.allCategories[index] });
        if (button === 'All') {
            setProjects(ProjectsData);
            return;
        }
        const filteredData = ProjectsData.filter((data) => data.category === button);
        setProjects(filteredData);
    };

    const toggleActiveStyle = (index) => {
        if (buttons.allCategories[index] === buttons.activeBtn) {
            return 'itemButton border rounded-pill m-1 px-3 active';
        } else {
            return 'itemButton border rounded-pill m-1 px-3';
        }
    };

    return (
        <div className='projects'>
            <nav className='component__nav navbar'>
                <h3 className='nav text-decoration-none'>
                    <Link to='/' className='nav-item text-decoration-none'>
                        <CgMenuGridR className='component__navIcon mx-3' />
                    </Link>
                    <span className='text-decoration-none text-white'>Projects</span>
                </h3>
            </nav>
            <div className='projects__main container pb-4'>
                <h1 className='projects__title text-center my-3'>
                    <span className='highlight'>P</span>rojects
                </h1>
                <p className='projects__text text-center'>Here is some of my projects.</p>
                <div className='projects__itemButtons text-center my-3'>
                    {buttons.allCategories.map((category, index) => (
                        <button key={index} onClick={() => filter(category, index)} className={toggleActiveStyle(index)}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className='projects__display'>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {projects?.map((project) => (
                            <div className='col animate__animated animate__zoomIn' key={project.id}>
                                <div className='card border-0 rounded-0'>
                                    <img src={dummyProjectImage} alt='project__image' />
                                    <div className='card-content'>
                                        <h3 className='project__title'>{project?.title}</h3>
                                        <span className='project__subtitle'>{project?.subtitle}</span>
                                    </div>
                                    <ul className='project__icons'>
                                        <li>
                                            <a href='#'>
                                                <CgDetailsMore />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={project?.['site-link']} target='_blank' rel='noreferrer noopener'>
                                                <AiOutlineLink />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={project?.['code-link']} target='_blank' rel='noreferrer noopener'>
                                                <FiCode />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
