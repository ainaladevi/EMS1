import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiGrid, 
  FiBell, 
  FiCheckSquare, 
  FiClock, 
  FiCalendar,
  FiMessageSquare,
  FiUsers,
  FiDollarSign,
  FiFileText,
  FiActivity,
  FiBookOpen,
  FiFolder,
  FiBarChart2,
  FiStar,
  FiLogOut
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand-logo-container">
          <div className="brand-icon">
            <div className="brand-icon-inner"></div>
          </div>
          <h2 className="brand-text">EMS</h2>
        </div>
        <button className="sidebar-toggle-btn" onClick={() => console.log('Sidebar toggle clicked!')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
        </button>
      </div>
      
      <div className="sidebar-menu">
        <div className="search-container">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" placeholder="Search" className="sidebar-search-input" />
          <span className="search-shortcut">⌘K</span>
        </div>

        <p className="menu-label">MAIN</p>
        <NavLink to="/" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiGrid className="menu-icon" /> Overview
        </NavLink>
        <NavLink to="/announcements" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiBell className="menu-icon" /> Announcements
        </NavLink>
        <NavLink to="/tasks" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiCheckSquare className="menu-icon" /> Tasks
        </NavLink>

        <p className="menu-label mt-4">TIME & ATTENDANCE</p>
        <NavLink to="/attendance" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiClock className="menu-icon" /> Attendance
        </NavLink>
        <NavLink to="/leave" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiCalendar className="menu-icon" /> Leave
        </NavLink>

        <p className="menu-label mt-4">COMMUNICATION</p>
        <NavLink to="/chat" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiMessageSquare className="menu-icon" /> Chat
        </NavLink>

        <p className="menu-label mt-4">HR & FINANCE</p>
        <NavLink to="/employees" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiUsers className="menu-icon" /> HR Overview
        </NavLink>
        <NavLink to="/payroll" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiDollarSign className="menu-icon" /> Payroll
        </NavLink>
        <NavLink to="/expenses" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiFileText className="menu-icon" /> Expenses
        </NavLink>

        <p className="menu-label mt-4">GROWTH</p>
        <NavLink to="/performance" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiActivity className="menu-icon" /> Performance
        </NavLink>
        <NavLink to="/learning" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiBookOpen className="menu-icon" /> Learning
        </NavLink>

        <p className="menu-label mt-4">RESOURCES</p>
        <NavLink to="/documents" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiFolder className="menu-icon" /> Documents
        </NavLink>
        <NavLink to="/analytics" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiBarChart2 className="menu-icon" /> Analytics
        </NavLink>
        <NavLink to="/compliance" className={({isActive}) => `menu-item ${isActive ? 'active' : ''}`}>
          <FiStar className="menu-icon" /> Compliance
        </NavLink>
      </div>

      <div className="sidebar-footer">
        <hr className="sidebar-divider" />
        <button className="logout-btn" onClick={() => console.log('Logout clicked!')}>
          <FiLogOut className="menu-icon" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
