import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LuLayoutDashboard, 
  LuBellRing, 
  LuCheck, 
  LuClock, 
  LuCalendar, 
  LuMessageSquare,
  LuUsers,
  LuDollarSign,
  LuReceipt,
  LuTrendingUp,
  LuBookOpen,
  LuFolder,
  LuShieldCheck,
  LuLogOut
} from 'react-icons/lu';
import { BsBarChart } from 'react-icons/bs';

const Sidebar = () => {
  const navSections = [
    {
      title: 'MAIN',
      items: [
        { label: 'Overview', icon: LuLayoutDashboard, path: '/manager/dashboard' },
        { label: 'Announcements', icon: LuBellRing, path: '/manager/announcements' },
        { label: 'Tasks', icon: LuCheck, path: '/manager/tasks' }
      ]
    },
    {
      title: 'TIME & ATTENDANCE',
      items: [
        { label: 'Attendance', icon: LuClock, path: '/manager/attendance' },
        { label: 'Leave', icon: LuCalendar, path: '/manager/leave' }
      ]
    },
    {
      title: 'COMMUNICATION',
      items: [
        { label: 'Chat', icon: LuMessageSquare, path: '/manager/chat' }
      ]
    },
    {
      title: 'HR & FINANCE',
      items: [
        { label: 'HR Overview', icon: LuUsers, path: '/manager/hr' },
        { label: 'Payroll', icon: LuDollarSign, path: '/manager/payroll' },
        { label: 'Expenses', icon: LuReceipt, path: '/manager/expenses' }
      ]
    },
    {
      title: 'GROWTH',
      items: [
        { label: 'Performance', icon: LuTrendingUp, path: '/manager/performance' },
        { label: 'Learning', icon: LuBookOpen, path: '/manager/learning' }
      ]
    },
    {
      title: 'RESOURCES',
      items: [
        { label: 'Documents', icon: LuFolder, path: '/manager/documents' },
        { label: 'Analytics', icon: BsBarChart, path: '/manager/analytics' },
        { label: 'Compliance', icon: LuShieldCheck, path: '/manager/compliance' }
      ]
    }
  ];

  return (
    <div className="d-flex flex-column flex-shrink-0 ems-sidebar">
      <div className="d-flex align-items-center mb-4 px-4 pt-4 text-white">
        <div className="bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        </div>
        <span className="fw-bold" style={{ fontSize: '20px', letterSpacing: '0.5px' }}>EMS</span>
        <button className="btn btn-link text-sidebar ms-auto p-0 text-muted">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
        </button>
      </div>

      <div className="px-3 mb-4">
        <div 
          className="d-flex align-items-center justify-content-between w-100" 
          style={{ 
            backgroundColor: '#1e293b', 
            borderRadius: '8px', 
            padding: '6px 12px',
          }}
        >
          <div className="d-flex align-items-center gap-2 flex-grow-1">
            <svg stroke="#94a3b8" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-0 text-white w-100 shadow-none p-0"
              style={{ fontSize: '14px', outline: 'none' }}
              onFocus={(e) => e.target.parentElement.parentElement.style.backgroundColor = '#2a364a'}
              onBlur={(e) => e.target.parentElement.parentElement.style.backgroundColor = '#1e293b'}
            />
          </div>
          <div className="d-flex align-items-center text-muted ms-2 flex-shrink-0" style={{ fontSize: '12px', backgroundColor: '#2a364a', padding: '2px 6px', borderRadius: '4px' }}>
            <span>⌘K</span>
          </div>
        </div>
      </div>

      <ul className="nav nav-pills flex-column mb-auto px-2">
        {navSections.map((section, idx) => (
          <li key={idx} className="nav-item mb-2 w-100">
            <div className="text-xs fw-bold px-3 mb-2 mt-3" style={{ color: 'var(--text-sidebar)', letterSpacing: '0.5px' }}>
              {section.title}
            </div>
            {section.items.map((item, itemIdx) => (
              <NavLink 
                key={itemIdx} 
                to={item.path} 
                className={({ isActive }) => 
                  `nav-link d-flex align-items-center px-3 py-2 mb-1 rounded-3 ems-sidebar-navlink ${isActive ? 'active' : ''}`
                }
              >
                <item.icon className="me-3" size={18} />
                {item.label}
              </NavLink>
            ))}
          </li>
        ))}
      </ul>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      
      <div className="px-3 pb-4">
        <NavLink to="/logout" className="nav-link d-flex align-items-center px-3 py-2 rounded-3 ems-sidebar-navlink">
          <LuLogOut className="me-3" size={18} />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
