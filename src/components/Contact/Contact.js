import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { RiTimeFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from '../../email';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      emailjs.sendForm({SERVICE_ID}, {TEMPLATE_ID}, data, {USER_ID})
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };

    return (
        <div className='contact'>
            <nav className='component__nav navbar'>
                <h3 className='nav text-decoration-none'>
                    <Link to='/' className='nav-item text-decoration-none'>
                        <CgMenuGridR className='component__navIcon mx-3' />
                    </Link>
                    <span className='text-decoration-none text-white'>Contact</span>
                </h3>
            </nav>
            <div className='contact__main container'>
                <h1 className='contact__title my-3'>
                    <span className='highlight'>C</span>ontact
                </h1>
                <p className='contact__text'></p>
                <div className='row'>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div className='contact__info'>
                            <h3>Contact Information</h3>
                            <a href='tel:+8801789667072' className='contact__infoOption'>
                                <FaPhoneAlt /> +880 1789667072
                            </a>
                            <br />
                            <a href='mailto:mustaquenadim2000@gmail.com' target='_blank' rel='noopener noreferrer' className='contact__infoOption'>
                                <GrMail /> mustaquenadim2000@gmail.com
                            </a>
                            <br />
                            <a href='https://goo.gl/maps/3JF94rjNTq8jcC1f7' target='_blank' rel='noopener noreferrer' className='contact__infoOption'>
                                <FaMapMarkerAlt /> Durgapur, Noakhali, Bangladesh
                            </a>
                            <br />
                            <p className='contact__infoOption'>
                                <RiTimeFill /> Saturday - Thursday | 8 AM - 10 PM
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='contact__form'>
                            <p className='contact__formHeading'>Please fill-up this form to contact with me.</p>
                            <form className='row' onSubmit={handleSubmit(onSubmit)}>
                                <div className='col-md-6 form-floating mb-3'>
                                    <input id='firstName' type='text' className='form-control rounded-0' placeholder='Enter your first name' {...register('firstName', { required: true })} />
                                    <label for='firstName'>First Name</label>
                                    {errors.firstName && <span className='text-danger'>First Name is required</span>}
                                </div>
                                <div className='col-md-6 form-floating mb-3'>
                                    <input id='Last Name' type='text' className='form-control rounded-0' placeholder='Enter your last name' {...register('lastName', { required: true })} />
                                    <label for='lastName'>Last Name</label>
                                    {errors.firstName && <span className='text-danger'>Last Name is required</span>}
                                </div>
                                <div className='col-md-12 form-floating mb-3'>
                                    <input id='email' type='email' className='form-control rounded-0' placeholder='Enter your email address' {...register('email', { required: true })} />
                                    <label for='email'>Email Address</label>
                                    {errors.firstName && <span className='text-danger'>Email address is required</span>}
                                </div>
                                <div className='col-md-12 form-floating mb-3'>
                                    <input id='subject' type='text' className='form-control rounded-0' placeholder='Enter reason of your message' {...register('subject', { required: true })} />
                                    <label for='subject'>Subject</label>
                                    {errors.firstName && <span className='text-danger'>Subject is required</span>}
                                </div>
                                <div className='col-md-12 form-floating mb-3'>
                                    <textarea id='message' type='text' className='form-control rounded-0' placeholder='Enter your message' {...register('message', { required: true })}></textarea>
                                    <label for='message'>Message</label>
                                    {errors.firstName && <span className='text-danger'>Message is required</span>}
                                </div>
                                <div className='col-md-12 text-center mb-3'>
                                    <input type='submit' className='contact__submitBtn rounded-pill' value='Send Message' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
