import React, { useState } from 'react';
import { 
  FiCheck,
  FiAlertCircle,
  FiArrowRightCircle,
  FiCalendar,
  FiEdit2,
  FiTrash2,
  FiMonitor,
  FiSmartphone,
  FiRefreshCw
} from 'react-icons/fi';
import './Dashboard.css';

// Exact SVG Icons matching the reference
const UserLaptopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Shoulders */}
    <path d="M4 21v-2a8 8 0 0 1 16 0v2"></path>
    {/* Head */}
    <circle cx="12" cy="8" r="4"></circle>
    {/* Visor/Curve on head */}
    <path d="M8.5 9.5c2 1 5 1 7 0"></path>
    {/* Laptop screen with background fill to cover shoulders */}
    <path d="M8 21v-4a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 17v4" fill="#EFF6FF"></path>
    {/* Laptop base line */}
    <path d="M5 21h14"></path>
    {/* Tiny circle on laptop */}
    <circle cx="12" cy="18" r="1" fill="currentColor"></circle>
  </svg>
);

const TwoUsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ClipboardChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M9 14l2-2 2 2 4-4"></path>
    <circle cx="17" cy="10" r="1" fill="currentColor"></circle>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      type: 'urgent',
      title: 'URGENT: Security Update Required',
      description: 'Please update your passwords and enable 2FA by end of day 2',
      author: 'Admin',
      expires: '10/20/2025',
      timeAgo: '10 min ago',
      isUnread: true,
      icon: <FiAlertCircle strokeWidth={1.5} />,
      colorClass: 'danger'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Project Launch',
      description: 'We are excited to announce the launch of Project Phoenix next month.',
      author: 'Product Team',
      expires: '11/3/2025',
      timeAgo: '30 min ago',
      isUnread: true,
      icon: <FiArrowRightCircle strokeWidth={1.5} />,
      colorClass: 'primary'
    },
    {
      id: 3,
      type: 'event',
      title: 'Team Building Event',
      description: 'Join us for a team building event this Friday at 4 PM.',
      author: 'HR Dept',
      expires: '10/24/2025',
      timeAgo: '1 hour ago',
      isUnread: false,
      icon: <TwoUsersIcon />,
      colorClass: 'primary'
    },
    {
      id: 4,
      type: 'holiday',
      title: 'Company Holiday - New Year 2026',
      description: 'Office will be closed on January 1st, 2026 for New Year celebrations.',
      author: 'HR Dept',
      expires: '11/18/2025',
      timeAgo: '2 hour ago',
      isUnread: false,
      icon: <FiCalendar strokeWidth={1.5} />,
      colorClass: 'primary'
    }
  ]);

  const [devices, setDevices] = useState([
    {
      id: 1,
      name: 'Chrome on Windows',
      status: 'Active now',
      ip: '192.168.1.104',
      location: 'Mumbai, IN',
      isCurrent: true,
      isActive: true,
      type: 'desktop'
    },
    {
      id: 2,
      name: 'Safari on iPhone 13 Pro',
      status: 'Last active: 2 hours ago',
      ip: '14.139.116.1',
      location: 'Delhi, IN',
      isCurrent: false,
      isActive: false,
      type: 'mobile'
    },
    {
      id: 3,
      name: 'Firefox on MacOS',
      status: 'Last active: 4 days ago',
      ip: '117.218.1.200',
      location: 'Pune, IN',
      isCurrent: false,
      isActive: false,
      type: 'desktop'
    }
  ]);

  const [sessions, setSessions] = useState([
    {
      id: 1,
      name: 'Chrome on Windows',
      status: 'Active now',
      ip: '127.0.0.1',
      location: 'Mumbai, IN',
      isCurrent: true,
      isActive: true,
      type: 'desktop'
    },
    {
      id: 2,
      name: 'You',
      status: 'Last active: 2 hours ago',
      ip: '127.0.0.2',
      location: 'Delhi, IN',
      isCurrent: false,
      isActive: false,
      type: 'mobile'
    },
    {
      id: 3,
      name: 'MacOS',
      status: 'Last active: 4 days ago',
      ip: '127.0.0.3',
      location: 'Pune, IN',
      isCurrent: false,
      isActive: false,
      type: 'desktop'
    }
  ]);

  const [activeTab, setActiveTab] = useState('devices');

  const markAllRead = () => {
    setAnnouncements(announcements.map(a => ({ ...a, isUnread: false })));
  };

  const removeDevice = (id) => {
    setDevices(devices.filter(d => d.id !== id));
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Dashboard</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item active">Overview</span>
        </div>
        <h1 className="welcome-title">Welcome back, Brahma! 👋</h1>
      </div>

      <div className="kpi-cards-grid">
        {/* Card 1 */}
        <div className="kpi-card-exact">
          <div className="kpi-card-header">
            <span className="kpi-card-title">Active Workforce</span>
            <div className="kpi-icon-wrapper">
              <UserLaptopIcon />
            </div>
          </div>
          <div className="kpi-value text-success-custom">50</div>
          <div className="kpi-subtitle">Employees active today</div>
        </div>

        {/* Card 2 */}
        <div className="kpi-card-exact">
          <div className="kpi-card-header">
            <span className="kpi-card-title">Workforce Overview</span>
            <div className="kpi-icon-wrapper">
              <TwoUsersIcon />
            </div>
          </div>
          <div className="kpi-value">15</div>
          <div className="kpi-subtitle">Total employees in the organization</div>
        </div>

        {/* Card 3 */}
        <div className="kpi-card-exact">
          <div className="kpi-card-header">
            <span className="kpi-card-title">Pending Projects</span>
            <div className="kpi-icon-wrapper">
              <ClipboardChartIcon />
            </div>
          </div>
          <div className="kpi-value">15</div>
          <div className="kpi-subtitle">8 active, 7 Completed</div>
        </div>

        {/* Card 4 */}
        <div className="kpi-card-exact">
          <div className="kpi-card-header">
            <span className="kpi-card-title">System Activity</span>
            <div className="kpi-icon-wrapper">
              <BellIcon />
            </div>
          </div>
          <div className="kpi-value">3</div>
          <div className="kpi-subtitle">Recent updates and usage</div>
        </div>
      </div>
      
      {/* Announcements Section */}
      <div className="content-section mt-4">
        <div className="panel-container">
          <div className="panel-header-flex">
            <div>
              <h2 className="section-title">Announcements</h2>
              <p className="section-subtitle">Stay updated with company news</p>
            </div>
            <button className="btn-mark-read" onClick={markAllRead}>
              <FiCheck className="me-2" strokeWidth={3} /> Mark All Read
            </button>
          </div>
          
          <div className="announcements-list">
            {announcements.map((announcement) => (
              <div key={announcement.id} className={`announcement-card color-${announcement.colorClass}`}>
                <div className="announcement-left">
                  <div className={`announcement-icon-wrapper bg-${announcement.colorClass}-light text-${announcement.colorClass}`}>
                    {announcement.icon}
                  </div>
                  <div className="announcement-content">
                    <h3 className="announcement-title">{announcement.title}</h3>
                    <p className="announcement-desc">{announcement.description}</p>
                    <p className="announcement-meta">By {announcement.author} • Expires: {announcement.expires}</p>
                  </div>
                </div>
                <div className="announcement-right">
                  <div className="announcement-time">
                    {announcement.timeAgo}
                    {announcement.isUnread && <span className="unread-dot"></span>}
                  </div>
                  <div className="announcement-actions">
                    <button onClick={() => console.log("Button clicked!")} className="action-btn" title="Edit"><FiEdit2 size={14} /></button>
                    <button onClick={() => console.log("Button clicked!")} className="action-btn" title="Delete"><FiTrash2 size={14} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Devices & Session Manager Section */}
      <div className="content-section mt-4">
        <div className="panel-container">
          <div className="panel-header-flex border-bottom-soft">
            <h2 className="section-title mb-0">Devices & Session Manager</h2>
            <div className="tab-toggle">
              <button 
                className={`tab-btn ${activeTab === 'devices' ? 'active' : ''}`}
                onClick={() => setActiveTab('devices')}
              >
                Devices
              </button>
              <button 
                className={`tab-btn ${activeTab === 'sessions' ? 'active' : ''}`}
                onClick={() => setActiveTab('sessions')}
              >
                Sessions
              </button>
            </div>
          </div>
          
          <div className="devices-sub-header">
            <h3 className="devices-title">
              {activeTab === 'devices' ? `Your Devices (${devices.length})` : `Active Sessions (${sessions.length})`}
            </h3>
            <div className="d-flex align-items-center gap-2">
              <button onClick={() => console.log("Button clicked!")} className="btn-refresh">
                <FiRefreshCw className="me-1" /> Refresh
              </button>
              {activeTab === 'sessions' && (
                <button onClick={() => console.log("Button clicked!")} className="btn-outline-custom">
                  Logout all other sessions
                </button>
              )}
            </div>
          </div>

          <div className="devices-list">
            {activeTab === 'devices' ? (
              devices.map((device) => (
                <div key={device.id} className={`device-card ${device.isCurrent ? 'current-session' : ''}`}>
                  {device.isCurrent && (
                    <span className="current-badge">Current Session</span>
                  )}
                  <div className="device-left">
                    <div className={`device-icon-wrapper ${device.isCurrent ? 'text-success-custom bg-success-light' : 'text-muted-custom bg-gray-light'}`}>
                      {device.type === 'desktop' ? <FiMonitor strokeWidth={1.5} /> : <FiSmartphone strokeWidth={1.5} />}
                    </div>
                    <div className="device-content">
                      <h3 className="device-name">{device.name}</h3>
                      <p className="device-meta">
                        {device.isActive && <span className="status-dot-green"></span>}
                        {device.status} • {device.ip} • {device.location}
                      </p>
                    </div>
                  </div>
                  <div className="device-actions">
                    {!device.isCurrent && (
                      <button onClick={() => console.log("Button clicked!")} className="btn-trust">Trust</button>
                    )}
                    <button className="btn-remove" onClick={() => removeDevice(device.id)}>Remove</button>
                  </div>
                </div>
              ))
            ) : (
              sessions.map((session) => (
                <div key={session.id} className={`device-card ${session.isCurrent ? 'current-session' : ''}`}>
                  {session.isCurrent && (
                    <span className="current-badge">Current Session</span>
                  )}
                  <div className="device-left">
                    <div className={`device-icon-wrapper ${session.isCurrent ? 'text-success-custom bg-success-light' : 'text-muted-custom bg-gray-light'}`}>
                      {session.type === 'desktop' ? <FiMonitor strokeWidth={1.5} /> : <FiSmartphone strokeWidth={1.5} />}
                    </div>
                    <div className="device-content">
                      <h3 className="device-name">{session.name}</h3>
                      <p className="device-meta">
                        {session.isActive && <span className="status-dot-green"></span>}
                        {session.status} • IP: {session.ip} • {session.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
