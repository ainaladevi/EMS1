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
    <div 
      className="d-flex flex-column flex-shrink-0" 
      style={{ 
        width: 'var(--sidebar-width)', 
        height: '100vh', 
        backgroundColor: 'var(--bg-sidebar)',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto'
      }}
    >
      <div className="d-flex align-items-center mb-4 px-4 pt-4" style={{ color: 'white' }}>
        <div className="bg-primary rounded p-2 me-2 d-flex align-items-center justify-content-center">
          <span className="fw-bold fs-5">O</span>
        </div>
        <span className="fs-4 fw-bold">EMS</span>
        <button className="btn btn-link text-sidebar ms-auto p-0">
          <LuLayoutDashboard size={20} style={{ color: 'var(--text-sidebar)' }} />
        </button>
      </div>

      <div className="px-3 mb-4">
        <div className="input-group">
          <span className="input-group-text bg-transparent border-0" style={{ position: 'absolute', zIndex: 10, color: 'var(--text-sidebar)', background: '#1c2434' }}>
            <LuLayoutDashboard size={16} />
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search" 
            style={{ 
              backgroundColor: '#1c2434', 
              border: 'none', 
              color: 'white',
              paddingLeft: '35px',
              borderRadius: '6px'
            }} 
          />
          <span className="position-absolute end-0 top-50 translate-middle-y pe-2" style={{ color: 'var(--text-sidebar)', zIndex: 10, fontSize: '0.75rem' }}>
            ⌘K
          </span>
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
                  `nav-link d-flex align-items-center px-3 py-2 mb-1 rounded-3 ${isActive ? 'active' : ''}`
                }
                style={({ isActive }) => ({
                  color: isActive ? 'var(--text-sidebar-active)' : 'var(--text-sidebar)',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                  fontWeight: 500,
                  transition: 'background-color 0.2s, color 0.2s'
                })}
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
        <NavLink to="/logout" className="nav-link d-flex align-items-center px-3 py-2 text-sidebar rounded-3" style={{ color: 'var(--text-sidebar)', transition: '0.2s' }}>
          <LuLogOut className="me-3" size={18} />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
