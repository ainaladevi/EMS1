import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import './TopNavbar.css';

const TopNavbar = () => {
  const location = useLocation();
  const isLeavePage = location.pathname.includes('/leave');

  return (
    <header className="top-navbar">
      <div className="navbar-links d-none d-md-flex">
        <NavLink to="/" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`} end>
          Dashboard
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
          Projects
        </NavLink>
        <NavLink to="/employees" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
          Employees
        </NavLink>
        <NavLink to="/plans" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
          Plans
        </NavLink>
        {!isLeavePage && (
          <>
            <NavLink to="/logs" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
              Logs
            </NavLink>
            <NavLink to="/security" className={({isActive}) => `nav-btn ${isActive ? 'active' : ''}`}>
              Security
            </NavLink>
          </>
        )}
      </div>
      
      <div className="navbar-right">
        <button className="notification-btn">
          <FiBell size={20} />
          <span className="notification-badge">19</span>
        </button>
        
        <div className="profile-dropdown dropdown">
          <button className="profile-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="profile-avatar">{isLeavePage ? 'S' : 'B'}</div>
            <div className="profile-info text-start d-none d-md-block">
              <div className="profile-name">{isLeavePage ? 'Shiva (Manager)' : 'Brahma (Admin)'}</div>
              <div className="profile-email">{isLeavePage ? 'Shiva@company.com' : 'brahma@company.com'}</div>
            </div>
            <FiChevronDown className="profile-chevron d-none d-md-block" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
