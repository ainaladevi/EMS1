import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuBell, LuChevronDown } from 'react-icons/lu';
import { useAuth } from '../contexts/AuthContext';

const TopNavbar = () => {
  const { user } = useAuth();
  const tabs = [
    { label: 'Dashboard', path: '/manager/dashboard' },
    { label: 'Projects', path: '/manager/projects' },
    { label: 'Employees', path: '/manager/employees' },
    { label: 'Plans', path: '/manager/plans' }
  ];

  return (
    <header 
      className="d-flex align-items-center justify-content-between px-4 border-bottom bg-white"
      style={{ 
        height: 'var(--topbar-height)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        marginLeft: 'var(--sidebar-width)'
      }}
    >
      <div className="d-flex align-items-center gap-2">
        {tabs.map((tab, idx) => (
          <NavLink
            key={idx}
            to={tab.path}
            className={({ isActive }) => 
              `btn btn-sm px-3 py-1 ${isActive ? 'fw-semibold' : 'text-muted bg-white'}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'rgba(43, 92, 255, 0.08)' : '#ffffff',
              color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
              border: isActive ? '1px solid transparent' : '1px solid #e2e8f0',
              borderRadius: '6px',
              transition: '0.2s',
              fontSize: '13px'
            })}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      <div className="d-flex align-items-center gap-4">
        <div className="position-relative d-flex align-items-center" style={{ cursor: 'pointer', marginRight: '5px' }}>
          <LuBell size={20} className="text-muted" strokeWidth={1.5} />
          <span 
            className="position-absolute badge rounded-pill bg-danger"
            style={{ 
              fontSize: '9px', 
              padding: '0.25em 0.4em',
              top: '-6px',
              right: '-8px',
              border: '2px solid white'
            }}
          >
            19
          </span>
        </div>

        <div 
          className="d-flex align-items-center gap-2 border bg-white shadow-sm" 
          style={{ 
            cursor: 'pointer', 
            padding: '4px 12px 4px 4px', 
            borderRadius: '8px',
            borderColor: '#e2e8f0'
          }}
        >
          <div 
            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
            style={{ width: '32px', height: '32px', fontSize: '13px' }}
          >
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="d-flex flex-column pe-2">
            <span className="text-dark fw-bold" style={{ fontSize: '12px', lineHeight: '1.2' }}>
              {user?.name} ({user?.role})
            </span>
            <span className="text-muted" style={{ fontSize: '11px', lineHeight: '1.2' }}>
              {user?.email}
            </span>
          </div>
          <LuChevronDown className="text-muted opacity-50" size={14} />
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
