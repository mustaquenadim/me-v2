import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import './Manage.css';

const Manage = () => {
    document.title = 'Manage | Mustaque Nadim';
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/api/projects';
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className='manage'>
            <AdminNav />
            <div className='manage__main container my-3'>
                <h1 className='fw-bold'>Manage</h1>
                <table class='table table-striped table-hover'>
                    <thead>
                        <tr className='table-secondary'>
                            <th scope='col'>No.</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Subtitle</th>
                            <th scope='col'>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => {
                            return (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{project.projectTitle}</td>
                                    <td>{project.projectSubtitle}</td>
                                    <td>{project.projectWebsite}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;
