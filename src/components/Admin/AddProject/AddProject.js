import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNav from '../AdminNav/AdminNav';
import './AddProject.css';

const AddProject = () => {
    document.title = 'Write A Blog | Mustaque Nadim';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = 'http://localhost:5000/api/addProject';
        axios
            .post(url, data)
            .then((response) => {
                if (response) alert('Project has been added successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className='addProject'>
            <AdminNav />
            <div className='addProject__main container my-3'>
                <h1 className='fw-bold'>Add Project</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label for='projectTitle' className='form-label'>
                            Project Title
                        </label>
                        <input type='text' className='form-control' id='projectTitle' placeholder='Enter your project title' {...register('projectTitle', { required: true })} />
                        {errors.projectTitle && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectSubtitle' className='form-label'>
                            Project Subtitle
                        </label>
                        <input type='text' className='form-control' id='projectSubtitle' placeholder='Enter your project subtitle' {...register('projectSubtitle', { required: true })} />
                        {errors.projectSubtitle && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectDescription' className='form-label'>
                            Project Description
                        </label>
                        <input type='text' className='form-control' id='projectDescription' placeholder='Enter your project description' {...register('projectDescription', { required: true })} />
                        {errors.projectDescription && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectTechnologies' className='form-label'>
                            Project Technologies
                        </label>
                        <input type='text' className='form-control' id='projectTechnologies' placeholder='Technologies what you have used building this project' {...register('projectTechnologies', { required: true })} />
                        {errors.projectTechnologies && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectContribution' className='form-label'>
                            Contribution
                        </label>
                        <input type='text' className='form-control' id='projectContribution' placeholder='Write your contribution' {...register('projectContribution', { required: true })} />
                        {errors.projectContribution && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectChallenges' className='form-label'>
                            Challenges
                        </label>
                        <input type='text' className='form-control' id='projectChallenges' placeholder='Describe challenges what you have faced building this project' {...register('projectChallenges', { required: true })} />
                        {errors.projectChallenges && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectWebsite' className='form-label'>
                            Website
                        </label>
                        <input type='text' className='form-control' id='projectWebsite' placeholder='Provide deployed site link' {...register('projectWebsite', { required: true })} />
                        {errors.projectWebsite && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectRepository' className='form-label'>
                            Repository
                        </label>
                        <input type='text' className='form-control' id='projectRepository' placeholder='Provide project code(github) repository link' {...register('projectRepository', { required: true })} />
                        {errors.projectRepository && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='projectImages' className='form-label'>
                            Images
                        </label>
                        <input className='form-control' type='file' id='projectImages' {...register('projectImages')} />
                    </div>
                    <input type='submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default AddProject;
