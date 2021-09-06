import React from 'react';
import './AdminNav.css';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiFillEdit } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';
import { MdNotificationsActive, MdDashboard, MdLibraryAdd, MdHome } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';
import { CgClose, CgProfile } from 'react-icons/cg';
import { RiMessageFill, RiListSettingsLine } from 'react-icons/ri';
import { FiUpload, FiLogOut } from 'react-icons/fi';

const AdminNav = () => {
    return (
        <div className='adminNav'>
            <div className='adminNav__topbar navbar'>
                <AiOutlineMenu className='adminNav__topbarIcon' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample' />
                <div className='adminNav__topbarCol'>
                    <RiMessageFill className='adminNav__topbarIcon' />
                    <MdNotificationsActive className='adminNav__topbarIcon' />
                    <Link to='/'>
                        <TiUser className='adminNav__topbarIcon' />
                    </Link>
                </div>
            </div>
            <div className='adminNav__sidebar offcanvas offcanvas-start' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
                <CgClose className='adminNav__sidebarClose btn-close text-reset shadow-none' data-bs-dismiss='offcanvas' aria-label='Close' />
                <ul className='adminNav__sidebarItems'>
                    <Link to='/' className='adminNav__sidebarItem'>
                        <li>
                            <MdHome className='adminNav__sidebarIcon' /> Go Home
                        </li>
                    </Link>
                    <hr />
                    <Link to='/admin/profile' className='adminNav__sidebarItem'>
                        <li>
                            <HiUser className='adminNav__sidebarIcon' /> Profile
                        </li>
                    </Link>
                    <Link to='/admin/dashboard' className='adminNav__sidebarItem'>
                        <li>
                            <MdDashboard className='adminNav__sidebarIcon' /> Dashboard
                        </li>
                    </Link>
                    <Link to='/admin/manage' className='adminNav__sidebarItem'>
                        <li>
                            <RiListSettingsLine className='adminNav__sidebarIcon' /> Manage
                        </li>
                    </Link>
                    <Link to='/admin/addProject' className='adminNav__sidebarItem'>
                        <li>
                            <MdLibraryAdd className='adminNav__sidebarIcon' /> Add Project
                        </li>
                    </Link>
                    <Link to='/admin/writeBlog' className='adminNav__sidebarItem'>
                        <li>
                            <AiFillEdit className='adminNav__sidebarIcon' /> Write Blog
                        </li>
                    </Link>
                    <Link to='/admin/uploadMedia' className='adminNav__sidebarItem'>
                        <li>
                            <FiUpload className='adminNav__sidebarIcon' /> Upload Photo
                        </li>
                    </Link>
                    <Link to='/' className='adminNav__sidebarItem'>
                        <li>
                            <FiLogOut className='adminNav__sidebarIcon' /> Logout
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default AdminNav;
