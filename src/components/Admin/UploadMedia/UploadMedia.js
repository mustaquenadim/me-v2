import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import './UploadMedia.css';

const UploadMedia = () => {
    document.title = 'Upload Content | Mustaque Nadim';
    return (
        <div className='uploadMedia'>
            <AdminNav />
            <h1>Upload Image/Video</h1>
        </div>
    );
};

export default UploadMedia;