import React from 'react';
import './WriteBlog.css';
import axios from 'axios';
import AdminNav from '../AdminNav/AdminNav';
import { Controller, useForm } from 'react-hook-form';
import WYSIWYGEditor from '../../../WYSIWYGEditor';

const WriteBlog = () => {
    document.title = 'Write A Blog | Mustaque Nadim';
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = 'http://localhost:5000/api/writeBlog';
        axios
            .post(url, data)
            .then((response) => {
                if (response) alert('Blog has been posted successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className='writeBlog'>
            <AdminNav />
            <div className='writeBlog__main container'>
                <h1 className='fw-bold mt-3'>Write A Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label for='blogHead' className='form-label'>
                            Head
                        </label>
                        <input type='text' className='form-control' id='blogHead' placeholder='Enter your blog title' {...register('blogHead', { required: true })} />
                        {errors.blogHead && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='blogBody' className='form-label'>
                            Body
                        </label>
                        <div className='writeBlog__editor border'>
                            <Controller render={({field}) => (<WYSIWYGEditor {...field} />)} name='blogBody' control={control} rules={{ required: true }} defaultValue='' />
                        </div>
                        {errors.blogBody && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label for='blogImages' className='form-label'>
                            Images
                        </label>
                        <input className='form-control' type='file' id='blogImages' {...register('blogImages')} />
                    </div>
                    <input type='submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default WriteBlog;
