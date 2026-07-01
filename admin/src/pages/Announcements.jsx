import React, { useState } from 'react';
import { 
  FiBell,
  FiMail,
  FiAlertTriangle,
  FiClipboard,
  FiSearch,
  FiFilter,
  FiCheck,
  FiAlertCircle,
  FiArrowRightCircle,
  FiUsers,
  FiCalendar,
  FiEdit2,
  FiEdit,
  FiTrash2,
  FiX,
  FiArrowLeft,
  FiClock
} from 'react-icons/fi';
import './Announcements.css';

const BellDotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    <circle cx="18" cy="6" r="2.5" fill="currentColor" stroke="#EFF6FF" strokeWidth="1.5"></circle>
  </svg>
);

const MailSparkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"></path>
    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
    <circle cx="19" cy="5" r="2.5" fill="currentColor" stroke="#EFF6FF" strokeWidth="1.5"></circle>
  </svg>
);

const AlertTriangleCustomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const ClipboardClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <circle cx="16" cy="16" r="4.5" fill="currentColor" stroke="#FFF7ED" strokeWidth="1.5"></circle>
    <path d="M16 14v2l1.5 1.5" stroke="#FFF7ED" strokeWidth="1.5"></path> 
  </svg>
);

const SortFilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h10M4 18h4"></path>
  </svg>
);

const CustomTrashIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18"></path>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      type: 'urgent',
      title: 'URGENT: Security Update Required',
      description: 'Please update your passwords and enable 2FA by end of day 2',
      content: 'To maintain organizational security standards, all employees are required to update their account passwords and enable Two-Factor Authentication (2FA) before the end of day on October 20, 2025.\n\nThis security update is mandatory for all departments and user roles within the organization.\n\nPlease ensure:\n• Your password follows the latest password policy requirements\n• 2FA is enabled successfully on your account\n• Old or weak passwords are replaced immediately\n\nFailure to complete the required security update before the deadline may temporarily restrict access to company systems and internal resources.\n\nRegards,\nAdmin Team',
      author: 'Admin Team',
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
      icon: <FiUsers strokeWidth={1.5} />,
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

  const [activeFilter, setActiveFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Newest First');
  const [modalState, setModalState] = useState({ isOpen: false, mode: 'create', data: null });
  const [viewMode, setViewMode] = useState('list');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const markAllRead = () => {
    setAnnouncements(announcements.map(a => ({ ...a, isUnread: false })));
  };

  const handleDeleteAnnouncement = () => {
    if (modalState.data) {
      setAnnouncements(announcements.filter(a => a.id !== modalState.data.id));
      setModalState({ ...modalState, isOpen: false });
    }
  };

  const handleSaveAnnouncement = () => {
    // In a real app, you would collect form data here. 
    // For now, we'll just close the modal.
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="announcements-page">
      <div className="page-header-flex">
        <div>
          <div className="breadcrumb">
            <span className="breadcrumb-item">Dashboard</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item active">Announcements</span>
          </div>
          <h1 className="page-title">Company Announcements</h1>
          <p className="page-subtitle">Leave requests, tasks, messages and system alerts</p>
        </div>
        {viewMode === 'list' ? (
          <button className="btn-primary-custom" onClick={() => setModalState({ isOpen: true, mode: 'create', data: null })}>
            + Create Announcement
          </button>
        ) : (
          <button className="btn-outline-custom" onClick={() => setViewMode('list')}>
            <FiArrowLeft className="me-2" /> Back to List
          </button>
        )}
      </div>

      {viewMode === 'list' ? (
        <>
          <div className="stat-cards-grid mt-4">
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value">10</div>
            <div className="stat-label">Total</div>
          </div>
          <div className="stat-icon-wrapper bg-primary-light text-primary">
            <BellDotIcon />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value text-primary">4</div>
            <div className="stat-label">Unread</div>
          </div>
          <div className="stat-icon-wrapper bg-primary-light text-primary">
            <MailSparkIcon />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value text-danger">2</div>
            <div className="stat-label">System Alerts</div>
          </div>
          <div className="stat-icon-wrapper bg-danger-light text-danger">
            <AlertTriangleCustomIcon />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value text-warning">1</div>
            <div className="stat-label">Pending Action</div>
          </div>
          <div className="stat-icon-wrapper bg-warning-light text-warning">
            <ClipboardClockIcon />
          </div>
        </div>
      </div>

      <div className="filters-section mt-4">
        <div className="pill-filters">
          <button 
            className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >All</button>
          <button 
            className={`filter-pill ${activeFilter === 'general' ? 'active' : ''}`}
            onClick={() => setActiveFilter('general')}
          >General</button>
          <button 
            className={`filter-pill ${activeFilter === 'emergency' ? 'active' : ''}`}
            onClick={() => setActiveFilter('emergency')}
          >Emergency</button>
          <button 
            className={`filter-pill ${activeFilter === 'events' ? 'active' : ''}`}
            onClick={() => setActiveFilter('events')}
          >Events</button>
          <button 
            className={`filter-pill ${activeFilter === 'policies' ? 'active' : ''}`}
            onClick={() => setActiveFilter('policies')}
          >Policies</button>
        </div>
        
        <div className="search-filter-container">
          <div className="search-input-wrapper">
            <FiSearch className="search-icon-inside" />
            <input type="text" placeholder="Search notifications..." className="search-input" />
          </div>
          
          <div className="filter-dropdown-wrapper">
            <button 
              className="btn-filter-icon" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <SortFilterIcon />
            </button>

            {isDropdownOpen && (
              <div className="filter-dropdown-menu">
                {['Newest First', 'Oldest First', 'Recently Updated', 'Priority', 'Unread First'].map((option) => (
                  <button 
                    key={option}
                    className={`dropdown-item ${selectedSort === option ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSort(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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
              <div 
                key={announcement.id} 
                className={`announcement-card color-${announcement.colorClass}`}
                onClick={() => {
                  setSelectedAnnouncement(announcement);
                  setViewMode('detail');
                }}
                style={{ cursor: 'pointer' }}
              >
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
                  <div className="announcement-actions" onClick={e => e.stopPropagation()}>
                    <button 
                      className="action-btn" 
                      title="Edit"
                      onClick={() => setModalState({ isOpen: true, mode: 'edit', data: announcement })}
                    >
                      <FiEdit2 size={14} />
                    </button>
                    <button 
                      className="action-btn" 
                      title="Delete"
                      onClick={() => setModalState({ isOpen: true, mode: 'delete', data: announcement })}
                    >
                      <CustomTrashIcon size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
      ) : (
        <div className="detail-view-container mt-4">
          <div className="detail-card">
            <div className="detail-header-row">
              <div className={`detail-large-icon bg-${selectedAnnouncement.colorClass}-light text-${selectedAnnouncement.colorClass}`}>
                {selectedAnnouncement.icon}
              </div>
              <div className="detail-header-text">
                <h2 className="detail-title">{selectedAnnouncement.title}</h2>
                <div className="detail-meta">
                  <span className="meta-item"><FiClock className="me-1" /> {selectedAnnouncement.timeAgo}</span>
                  <span className="meta-item"><FiUsers className="me-1" /> By {selectedAnnouncement.author}</span>
                </div>
              </div>
            </div>

            <div className="detail-content-box">
              <h4 className="detail-content-label">MESSAGE CONTENT</h4>
              <div className="detail-content-body">
                {(selectedAnnouncement.content || selectedAnnouncement.description).split('\n').map((line, i) => {
                  if (line.startsWith('•')) {
                    return <li key={i} className="content-bullet">{line.substring(1).trim()}</li>;
                  }
                  if (line.trim() === '') {
                    return <br key={i} />;
                  }
                  return <p key={i} className="content-paragraph">{line}</p>;
                })}
              </div>
            </div>

            <div className="detail-footer">
              <button className="btn-primary-custom" onClick={() => {
                setAnnouncements(announcements.map(a => a.id === selectedAnnouncement.id ? { ...a, isUnread: false } : a));
                setViewMode('list');
              }}>
                <FiCheck className="me-2" strokeWidth={3} /> Mark as Read
              </button>
            </div>
          </div>
        </div>
      )}

      {modalState.isOpen && (
        <div className="modal-overlay">
          {modalState.mode === 'delete' ? (
            <div className="modal-container-sm">
              <div className="modal-header">
                <div className="modal-header-title-group">
                  <div className="edit-icon-header bg-danger-light text-danger">
                    <CustomTrashIcon size={14} />
                  </div>
                  <div>
                    <h2 className="modal-title">Delete Announcement</h2>
                    <p className="modal-subtitle">This action cannot be undone</p>
                  </div>
                </div>
                <button className="btn-close-modal" onClick={() => setModalState({ ...modalState, isOpen: false })}>
                  <FiX size={16} />
                </button>
              </div>
              <div className="modal-body modal-body-centered">
                <div className="delete-icon-large bg-danger-light text-danger">
                  <CustomTrashIcon size={24} />
                </div>
                <h3 className="delete-confirm-title">Delete {modalState.data?.title} ?</h3>
                <p className="delete-confirm-text">
                  Once deleted, this announcement will be permanently removed from your records and will no longer appear in your announcements panel.
                </p>
              </div>
              <div className="modal-footer modal-footer-no-border">
                <button className="btn-cancel" onClick={() => setModalState({ ...modalState, isOpen: false })}>Cancel</button>
                <button className="btn-danger-solid" onClick={handleDeleteAnnouncement}>
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="modal-container">
              <div className="modal-header">
              <h2 className="modal-title">
                {modalState.mode === 'create' ? (
                  <span className="text-primary me-2">+</span>
                ) : (
                  <div className="edit-icon-header bg-primary-light text-primary">
                    <FiEdit size={14} />
                  </div>
                )}
                {modalState.mode === 'create' ? 'Create Announcement' : 'Edit Announcement'}
              </h2>
              <button className="btn-close-modal" onClick={() => setModalState({ ...modalState, isOpen: false })}>
                <FiX size={16} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Title <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter announcement title" 
                  defaultValue={modalState.data?.title || ''}
                />
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="form-label">Priority <span className="text-danger">*</span></label>
                  <select className="form-select">
                    <option>Normal</option>
                    <option>Urgent</option>
                  </select>
                </div>
                <div className="form-group flex-1">
                  <label className="form-label">Expires at <span className="text-danger">*</span></label>
                  <input type="datetime-local" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Content <span className="text-danger">*</span></label>
                <textarea className="form-textarea" placeholder="Write your announcement..." rows={4}></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Visibility</label>
                <input type="text" className="form-input" />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setModalState({ ...modalState, isOpen: false })}>Cancel</button>
              <button onClick={handleSaveAnnouncement} className="btn-save">
                <FiCheck className="me-2" /> Save announcement
              </button>
            </div>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Announcements;
