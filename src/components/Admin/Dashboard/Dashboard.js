import React from 'react';
import './Dashboard.css';
import AdminNav from '../AdminNav/AdminNav';

const Dashboard = () => {
    document.title = 'Dashboard | Mustaque Nadim';
    return (
        <div className='dashboard'>
            <AdminNav />
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
