import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import './Profile.css';

const Profile = () => {
    document.title = 'Profile | Mustaque Nadim';
    return (
        <div className='profile'>
            <AdminNav />
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;