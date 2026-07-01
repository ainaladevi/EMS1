import React, { useState } from 'react';
import { 
  FiSearch, FiCalendar, FiChevronDown, FiDownload, FiPlus, 
  FiArrowLeft, FiArrowRight, FiMoreHorizontal, FiFileText, FiBarChart2, FiClock, FiShield,
  FiEye, FiTrash2, FiX, FiClipboard, FiFile, FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { BsCalendarCheck } from 'react-icons/bs';
import './LeaveManagement.css';

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState("Applications");
  const [activeSubTab, setActiveSubTab] = useState("All");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [selectedHistoryLeave, setSelectedHistoryLeave] = useState(null);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(16);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const pendingRecords = [
    { id: 1, name: 'Ananya Reddy', dept: 'Design', initial: 'AR', color: 'blue', type: 'Annual Leave', from: 'Apr 24', to: 'Apr 25', days: '2d', reason: 'Personal travel', status: 'Pending' },
    { id: 2, name: 'Ravi Kumar', dept: 'Engineering', initial: 'RK', color: 'purple', type: 'Sick Leave', from: 'Apr 22', to: 'Apr 22', days: '1d', reason: 'Fever and cold', status: 'Pending' },
    { id: 3, name: 'Emp Test', dept: 'Engineering', initial: 'ET', color: 'pink', type: 'Casual Leave', from: 'Apr 28', to: 'Apr 28', days: '1d', reason: 'Personal work', status: 'Pending' }
  ];

  const historyRecords = [
    { id: 1, name: 'Kiran Patel', dept: '', initial: 'KP', color: 'pink', type: 'Sick Leave', dates: 'Apr 15-16', days: '2d', reason: 'Medical procedure', appliedOn: 'Apr 14', status: 'Approved' },
    { id: 2, name: 'Ananya Reddy', dept: '', initial: 'AR', color: 'purple', type: 'Casual Leave', dates: 'Mar 28', days: '1d', reason: 'Personal errand', appliedOn: 'Mar 27', status: 'Approved' },
    { id: 3, name: 'Ravi Kumar', dept: '', initial: 'RK', color: 'purple', type: 'Annual Leave', dates: 'Mar 10-12', days: '3d', reason: 'Family visit', appliedOn: 'Mar 5', status: 'Approved' },
    { id: 4, name: 'Emp Test', dept: '', initial: 'ET', color: 'pink', type: 'Annual Leave', dates: 'Feb 20-21', days: '2d', reason: 'Short trip', appliedOn: 'Feb 18', status: 'Pending' },
    { id: 5, name: 'Suresh Babu', dept: '', initial: 'SB', color: 'orange', type: 'Sick Leave', dates: 'Feb 14', days: '1d', reason: 'Unwell', appliedOn: 'Feb 14', status: 'Rejected' }
  ];

  const getLeaveTypePill = (type) => {
    let className = 'leave-pill ';
    if (type === 'Annual Leave') className += 'leave-annual';
    if (type === 'Sick Leave') className += 'leave-sick';
    if (type === 'Casual Leave') className += 'leave-casual';
    return <span className={className}>{type}</span>;
  };

  const getStatusPill = (status) => {
    let s = status.toLowerCase();
    let className = 'status-pill ';
    if (s === 'pending') className += 'pill-pending';
    if (s === 'approved') className += 'pill-approved';
    if (s === 'rejected') className += 'pill-rejected';

    return (
      <div className={className}>
        <div className="status-pill-dot">
          <div className="status-dot"></div> {status}
        </div>
      </div>
    );
  };

  return (
    <div className="leave-page">
      <div className="page-header">
        <div>
          <div className="breadcrumb">Dashboard &gt; Leave</div>
          <h1 className="page-title">Leave Management</h1>
          <p className="page-subtitle">Applications, approvals, balances and leave history</p>
        </div>
        <div className="header-actions">
          <button onClick={() => alert("Button clicked!")} className="btn-secondary">
            <FiDownload style={{marginRight: '8px'}} /> Export
          </button>
          <button onClick={() => alert("Button clicked!")} className="btn-primary">
            <FiPlus style={{marginRight: '8px'}} /> Add Leave
          </button>
        </div>
      </div>

      <div className="leave-stats-row">
        <div className="leave-stat-card">
          <div className="stat-label">PENDING APPROVALS</div>
          <div className="stat-value text-orange">6</div>
          <div className="stat-sub">awaiting review</div>
        </div>
        <div className="leave-stat-card">
          <div className="stat-label">APPROVED THIS MONTH</div>
          <div className="stat-value text-green">14</div>
          <div className="stat-sub">across all types</div>
        </div>
        <div className="leave-stat-card">
          <div className="stat-label">ON LEAVE TODAY</div>
          <div className="stat-value text-blue">3</div>
          <div className="stat-sub">approved leave</div>
        </div>
        <div className="leave-stat-card">
          <div className="stat-label">REJECTED</div>
          <div className="stat-value text-red">2</div>
          <div className="stat-sub">this month</div>
        </div>
      </div>

      <div className="leave-tabs">
        <button className={`leave-tab ${activeTab === 'Applications' ? 'active' : ''}`} onClick={() => setActiveTab('Applications')}>
          <FiClipboard className="tab-icon" /> Applications <span className="tab-badge">6</span>
        </button>
        <button className={`leave-tab ${activeTab === 'Leave Balances' ? 'active' : ''}`} onClick={() => setActiveTab('Leave Balances')}>
          <FiBarChart2 className="tab-icon" /> Leave Balances
        </button>
        <button className={`leave-tab ${activeTab === 'History' ? 'active' : ''}`} onClick={() => setActiveTab('History')}>
          <FiClock className="tab-icon" /> History
        </button>
        <button className={`leave-tab ${activeTab === 'Leave Policy' ? 'active' : ''}`} onClick={() => setActiveTab('Leave Policy')}>
          <FiFile className="tab-icon" /> Leave Policy
        </button>
        <button className={`leave-tab ${activeTab === 'Leave Calendar' ? 'active' : ''}`} onClick={() => setActiveTab('Leave Calendar')}>
          <FiCalendar className="tab-icon" /> Leave Calendar
        </button>
      </div>

      {activeTab === 'Applications' && (
        <div className="applications-content">
          {/* Pending Table */}
          <div className="leave-table-container">
            <div className="table-section-header">
              <h3>All Pending <span className="header-count">(6)</span></h3>
            </div>
            
            <div className="leave-controls">
              <div className="leave-search">
                <FiSearch className="leave-search-icon" />
                <input type="text" className="leave-search-input" placeholder="Search employees..." />
              </div>
              <div className="leave-filters">
                <div className="date-picker-wrap">
                  <span>22 - 04 - 2026</span>
                  <FiCalendar className="date-icon" />
                </div>
                <div style={{position: 'relative'}}>
                  <button className="filter-btn-outline" onClick={() => toggleDropdown('status-pending')}>All status</button>
                  {activeDropdown === 'status-pending' && (
                    <div className="custom-dropdown">
                      <div className="dropdown-item active">Present</div>
                      <div className="dropdown-item">Absent</div>
                      <div className="dropdown-item">Late</div>
                      <div className="dropdown-item">Work From Home</div>
                    </div>
                  )}
                </div>
                <div style={{position: 'relative'}}>
                  <button className="filter-btn-outline" onClick={() => toggleDropdown('dept-pending')}>All departments</button>
                  {activeDropdown === 'dept-pending' && (
                    <div className="custom-dropdown">
                      <div className="dropdown-item active">All Departments</div>
                      <div className="dropdown-item">All Employees</div>
                      <div className="dropdown-item">Engineer Team</div>
                      <div className="dropdown-item">Development Team</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="table-responsive-wrapper" style={{ overflowX: 'auto' }}>
              <table className="leave-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Leave type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Days</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRecords.map((rec) => (
                    <tr key={rec.id}>
                      <td>
                        <div className="user-info-cell">
                          <div className={`avatar-circle avatar-${rec.color}`}>{rec.initial}</div>
                          <div>
                            <p className="user-name-text">{rec.name}</p>
                            <p className="user-dept-text">{rec.dept}</p>
                          </div>
                        </div>
                      </td>
                      <td>{getLeaveTypePill(rec.type)}</td>
                      <td className="table-bold-text">{rec.from}</td>
                      <td>{rec.to}</td>
                      <td className="table-bold-text">{rec.days}</td>
                      <td className="table-light-text">{rec.reason}</td>
                      <td>{getStatusPill(rec.status)}</td>
                      <td>
                        <div className="action-buttons-cell">
                          <button onClick={() => alert("Button clicked!")} className="btn-approve-outline">Approve</button>
                          <button onClick={() => alert("Button clicked!")} className="btn-reject-outline">Reject</button>
                          <div style={{position: 'relative'}}>
                            <button className="btn-dot-menu" onClick={() => toggleDropdown(`action-pending-${rec.id}`)}>
                              <FiMoreHorizontal />
                            </button>
                            {activeDropdown === `action-pending-${rec.id}` && (
                              <div className="custom-dropdown action-dropdown">
                                <div className="dropdown-item" onClick={() => { setSelectedLeave(rec); setActiveDropdown(null); }}><FiEye className="dropdown-icon" /> View detail</div>
                                <div className="dropdown-item text-red"><FiTrash2 className="dropdown-icon" /> Delete</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'History' && (
        <div className="history-content">
          <div className="leave-table-container">
            
            <div className="leave-controls">
              <div className="leave-search">
                <FiSearch className="leave-search-icon" />
                <input type="text" className="leave-search-input" placeholder="Search employees..." />
              </div>
              <div className="leave-filters">
                <div className="date-picker-wrap">
                  <span>22 - 04 - 2026</span>
                  <FiCalendar className="date-icon" />
                </div>
                <div style={{position: 'relative'}}>
                  <button className="filter-btn-outline" onClick={() => toggleDropdown('status-history')}>All status</button>
                  {activeDropdown === 'status-history' && (
                    <div className="custom-dropdown">
                      <div className="dropdown-item active">All Status</div>
                      <div className="dropdown-item">Approved</div>
                      <div className="dropdown-item">Pending</div>
                      <div className="dropdown-item">Rejected</div>
                    </div>
                  )}
                </div>
                <div style={{position: 'relative'}}>
                  <button className="filter-btn-outline" onClick={() => toggleDropdown('dept-history')}>All departments</button>
                  {activeDropdown === 'dept-history' && (
                    <div className="custom-dropdown">
                      <div className="dropdown-item active">All Departments</div>
                      <div className="dropdown-item">All Employees</div>
                      <div className="dropdown-item">Engineer Team</div>
                      <div className="dropdown-item">Development Team</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="table-responsive-wrapper" style={{ overflowX: 'auto' }}>
              <table className="leave-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Type</th>
                    <th>Dates</th>
                    <th>Days</th>
                    <th>Reason</th>
                    <th>Applied on</th>
                    <th>Status</th>
                    <th style={{textAlign: 'center'}}><FiMoreHorizontal /></th>
                  </tr>
                </thead>
                <tbody>
                  {historyRecords.map((rec) => (
                    <tr key={rec.id}>
                      <td>
                        <div className="user-info-cell">
                          <div className={`avatar-circle avatar-${rec.color}`}>{rec.initial}</div>
                          <span className="user-name-text" style={{margin: 0, fontWeight: 600, fontSize: '13px'}}>{rec.name}</span>
                        </div>
                      </td>
                      <td>{getLeaveTypePill(rec.type)}</td>
                      <td className="table-bold-text">{rec.dates}</td>
                      <td className="table-bold-text">{rec.days}</td>
                      <td className="table-light-text">{rec.reason}</td>
                      <td className="table-light-text">{rec.appliedOn}</td>
                      <td>{getStatusPill(rec.status)}</td>
                      <td style={{textAlign: 'center'}}>
                        <button className="btn-icon-only" onClick={() => setSelectedHistoryLeave(rec)}>
                          <FiEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="pagination-footer">
              <div className="pagination-text">Showing 1-8 of 32</div>
              <div className="pagination-controls">
                <button onClick={() => alert("Button clicked!")} className="page-btn"><FiArrowLeft size={14} /></button>
                <button onClick={() => alert("Button clicked!")} className="page-btn active">1</button>
                <button onClick={() => alert("Button clicked!")} className="page-btn">2</button>
                <button onClick={() => alert("Button clicked!")} className="page-btn">3</button>
                <button onClick={() => alert("Button clicked!")} className="page-btn"><FiArrowRight size={14} /></button>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'Leave Balances' && (
        <div className="balances-content">
          <div className="balances-filters">
            <div className="leave-search" style={{ width: '280px', flex: 'none' }}>
              <FiSearch className="leave-search-icon" />
              <input type="text" className="leave-search-input" placeholder="Ravi Kumar" defaultValue="Ravi Kumar" />
            </div>
            <button onClick={() => alert("Button clicked!")} className="filter-btn-outline">FY 2025-26</button>
          </div>

          <div className="balances-grid">
            <div className="balance-card theme-blue">
              <h4>Annual Leave</h4>
              <p>Ravi Kumar</p>
              
              <div className="stat-row">
                <span className="stat-label">Total</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '100%'}}></div></div>
                <span className="stat-value">18</span>
              </div>
              <div className="stat-row bar-used">
                <span className="stat-label">Used</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '22%'}}></div></div>
                <span className="stat-value text-dark">4</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Remaining</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '78%'}}></div></div>
                <span className="stat-value">14</span>
              </div>
              
              <div className="balance-footer">22% used</div>
            </div>

            <div className="balance-card theme-red">
              <h4>Sick Leave</h4>
              <p>Ravi Kumar</p>
              
              <div className="stat-row">
                <span className="stat-label">Total</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '100%'}}></div></div>
                <span className="stat-value">12</span>
              </div>
              <div className="stat-row bar-used">
                <span className="stat-label">Used</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '0%'}}></div></div>
                <span className="stat-value text-dark">0</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Remaining</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '100%'}}></div></div>
                <span className="stat-value">12</span>
              </div>
              
              <div className="balance-footer">0% used</div>
            </div>

            <div className="balance-card theme-orange">
              <h4>Casual Leave</h4>
              <p>Ravi Kumar</p>
              
              <div className="stat-row">
                <span className="stat-label">Total</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '100%'}}></div></div>
                <span className="stat-value">6</span>
              </div>
              <div className="stat-row bar-used">
                <span className="stat-label">Used</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '17%'}}></div></div>
                <span className="stat-value text-dark">1</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Remaining</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '83%'}}></div></div>
                <span className="stat-value">5</span>
              </div>
              
              <div className="balance-footer">17% used</div>
            </div>

            <div className="balance-card theme-purple">
              <h4>Paid Leave</h4>
              <p>Ravi Kumar</p>
              
              <div className="stat-row">
                <span className="stat-label">Total</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '100%'}}></div></div>
                <span className="stat-value">18</span>
              </div>
              <div className="stat-row bar-used">
                <span className="stat-label">Used</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '33%'}}></div></div>
                <span className="stat-value text-dark">6</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Remaining</span>
                <div className="stat-track"><div className="stat-fill" style={{width: '67%'}}></div></div>
                <span className="stat-value">12</span>
              </div>
              
              <div className="balance-footer">33% used</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Leave Policy' && (
        <div className="policy-content">
          <div className="policy-grid">
            <div className="policy-card border-blue">
              <div className="policy-card-header">
                <h4>Annual Leave</h4>
                <span className="policy-badge badge-blue">18 days</span>
              </div>
              <ul className="policy-list list-blue">
                <li>Accrues at 1.5 days/month</li>
                <li>Min 3 days notice required</li>
                <li>Can be carried forward (max 5 days)</li>
                <li>Approved by direct manager</li>
              </ul>
            </div>

            <div className="policy-card border-red">
              <div className="policy-card-header">
                <h4>Sick Leave</h4>
                <span className="policy-badge badge-red">12 days</span>
              </div>
              <ul className="policy-list list-red">
                <li>No prior notice required</li>
                <li>Medical certificate for {'>'}3 days</li>
                <li>Not encashable</li>
                <li>Cannot be carried forward</li>
              </ul>
            </div>

            <div className="policy-card border-orange">
              <div className="policy-card-header">
                <h4>Casual Leave</h4>
                <span className="policy-badge badge-orange">6 days</span>
              </div>
              <ul className="policy-list list-orange">
                <li>Minimum 1 day advance notice</li>
                <li>Maximum 2 consecutive days</li>
                <li>Not encashable</li>
                <li>Cannot be carried forward</li>
              </ul>
            </div>

            <div className="policy-card border-purple">
              <div className="policy-card-header">
                <h4>Maternity Leave</h4>
                <span className="policy-badge badge-purple">180 days</span>
              </div>
              <ul className="policy-list list-purple">
                <li>26 weeks for first 2 children</li>
                <li>Medical documentation required</li>
                <li>Fully paid per government norms</li>
                <li>Applicable only to female employees</li>
              </ul>
            </div>

            <div className="policy-card border-cyan">
              <div className="policy-card-header">
                <h4>Paternity Leave</h4>
                <span className="policy-badge badge-cyan">7 days</span>
              </div>
              <ul className="policy-list list-cyan">
                <li>Within 15 days of child's birth</li>
                <li>Proof of birth required</li>
                <li>Fully paid</li>
                <li>One-time benefit</li>
              </ul>
            </div>

            <div className="policy-card border-green">
              <div className="policy-card-header">
                <h4>Compensatory Off</h4>
                <span className="policy-badge badge-green">Earned days</span>
              </div>
              <ul className="policy-list list-green">
                <li>Granted for working on holidays</li>
                <li>Must be availed within 30 days</li>
                <li>Applied after approval of OT</li>
                <li>Tracked in attendance system</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Leave Calendar' && (() => {
        const calendarDays = [
          { id: 1, date: 29, type: 'weekend', disabled: true },
          { id: 2, date: 30, type: 'normal' },
          { id: 3, date: 31, type: 'normal' },
          { id: 4, date: 1, type: 'leaves', count: 2, dots: ['approved', 'pending'] },
          { id: 5, date: 2, type: 'holiday', label: 'Holiday' },
          { id: 6, date: 3, type: 'normal' },
          { id: 7, date: 4, type: 'weekend' },
          { id: 8, date: 5, type: 'weekend' },
          { id: 9, date: 6, type: 'leaves', count: 2, dots: ['approved', 'pending'] },
          { id: 10, date: 7, type: 'normal' },
          { id: 11, date: 8, type: 'normal' },
          { id: 12, date: 9, type: 'normal' },
          { id: 13, date: 10, type: 'normal' },
          { id: 14, date: 11, type: 'weekend' },
          { id: 15, date: 12, type: 'weekend' },
          { id: 16, date: 13, type: 'normal' },
          { id: 17, date: 14, type: 'leaves', count: 2, dots: ['approved', 'pending'] },
          { id: 18, date: 15, type: 'normal' },
          { id: 19, date: 16, type: 'leaves', count: 2, dots: ['approved', 'pending'], isToday: true },
          { id: 20, date: 17, type: 'holiday', label: 'Holiday' },
          { id: 21, date: 18, type: 'weekend' },
          { id: 22, date: 19, type: 'weekend' },
          { id: 23, date: 20, type: 'normal' },
          { id: 24, date: 21, type: 'normal' },
          { id: 25, date: 22, type: 'leaves', count: 2, dots: ['approved', 'pending'] },
          { id: 26, date: 23, type: 'normal' },
          { id: 27, date: 24, type: 'normal' },
          { id: 28, date: 25, type: 'weekend' },
          { id: 29, date: 26, type: 'weekend' },
          { id: 30, date: 27, type: 'holiday', label: 'Holiday' },
          { id: 31, date: 28, type: 'normal' },
          { id: 32, date: 29, type: 'normal' },
          { id: 33, date: 30, type: 'normal' },
          { id: 34, date: '', type: 'empty' },
          { id: 35, date: '', type: 'empty' }
        ];

        return (
          <div className="calendar-content">
            <div className="calendar-left-pane">
              <div className="calendar-header">
                <div className="calendar-nav">
                  <button onClick={() => alert("Button clicked!")} className="calendar-nav-btn"><FiChevronLeft /></button>
                  <h2>April 2026</h2>
                  <button onClick={() => alert("Button clicked!")} className="calendar-nav-btn"><FiChevronRight /></button>
                </div>
                <div className="calendar-hint">Click any date to view details</div>
              </div>
              
              <div className="calendar-legend">
                <div className="legend-item"><span className="dot dot-approved"></span> Approved Leave</div>
                <div className="legend-item"><span className="dot dot-pending"></span> Pending Leave</div>
                <div className="legend-item"><span className="dot dot-holiday"></span> Holiday</div>
                <div className="legend-item"><span className="dot dot-weekend"></span> Weekend</div>
              </div>

              <div className="calendar-weekdays">
                <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
              </div>

              <div className="calendar-days">
                {calendarDays.map((day) => {
                  if (day.type === 'empty') return <div key={day.id} className="calendar-day empty"></div>;
                  
                  let extraClass = '';
                  if (day.disabled) extraClass += ' disabled';
                  if (day.type === 'holiday') extraClass += ' is-holiday';
                  if (day.isToday) extraClass += ' is-today';
                  if (selectedCalendarDate === day.date) extraClass += ' selected';

                  return (
                    <div key={day.id} className={`calendar-day ${extraClass}`} onClick={() => !day.disabled && day.type !== 'empty' && setSelectedCalendarDate(day.date)}>
                      <span className="day-number">{day.date}</span>
                      
                      <div className="day-dots">
                        {day.type === 'weekend' && <span className="dot dot-weekend"></span>}
                        {day.type === 'holiday' && <span className="dot dot-holiday"></span>}
                        {day.dots && day.dots.map((d, i) => <span key={i} className={`dot dot-${d}`}></span>)}
                      </div>
                      
                      <span className="day-label">
                        {day.type === 'weekend' && 'Weekend'}
                        {day.label && day.label}
                        {day.count && `${day.count} on leave`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="calendar-right-pane">
              {selectedCalendarDate === 16 ? (
                <div className="calendar-details-card populated text-left">
                  <h3 style={{fontSize: '16px', fontWeight: '700', color: '#0F172A', marginBottom: '24px', textAlign: 'left'}}>April 16, 2026</h3>
                  
                  <div className="details-section">
                    <h4 className="details-section-title">APPROVED LEAVES</h4>
                    
                    <div className="details-row">
                      <div className="user-info-cell">
                        <div className="avatar-circle avatar-solid-blue">AN</div>
                        <div>
                          <p className="user-name-text">Arjun Nair</p>
                          <p className="user-dept-text">Engineering</p>
                        </div>
                      </div>
                      <span className="status-pill status-approved">Approved</span>
                    </div>

                    <div className="details-row">
                      <div className="user-info-cell">
                        <div className="avatar-circle avatar-solid-cyan">RS</div>
                        <div>
                          <p className="user-name-text">Riya Sharma</p>
                          <p className="user-dept-text">Design</p>
                        </div>
                      </div>
                      <span className="status-pill status-approved">Approved</span>
                    </div>
                  </div>

                  <div className="details-section" style={{marginTop: '24px'}}>
                    <h4 className="details-section-title">PENDING LEAVES</h4>
                    
                    <div className="details-row">
                      <div className="user-info-cell">
                        <div className="avatar-circle avatar-solid-cyan">PG</div>
                        <div>
                          <p className="user-name-text">Preethi G</p>
                          <p className="user-dept-text">After 9:30 AM</p>
                        </div>
                      </div>
                      <span className="status-pill status-pending">Pending</span>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="calendar-details-card">
                  <h3>Click a date to see details</h3>
                  <p>Select a date on the calendar to view<br/>attendance details</p>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* Leave Detail Modal (Pending) */}
      {selectedLeave && (
        <div className="modal-overlay">
          <div className="leave-detail-modal">
            <div className="modal-header">
              <h2>Leave Request Details</h2>
              <button className="btn-close-modal" onClick={() => setSelectedLeave(null)}><FiX /></button>
            </div>
            <div className="modal-body">
              <div className="modal-user-card">
                <div className="modal-user-info">
                  <div className={`avatar-circle avatar-${selectedLeave.color} large`}>{selectedLeave.initial}</div>
                  <div>
                    <h3>{selectedLeave.name}</h3>
                    <p>EMP008 · {selectedLeave.dept}</p>
                  </div>
                </div>
                {getStatusPill(selectedLeave.status)}
              </div>
              
              <div className="modal-details-list">
                <div className="detail-row">
                  <span className="detail-label">Leave Type</span>
                  <span className="detail-value">{getLeaveTypePill(selectedLeave.type)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Start Date</span>
                  <span className="detail-value">{selectedLeave.from}, 2026</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">End Date</span>
                  <span className="detail-value">{selectedLeave.to}, 2026</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Duration</span>
                  <span className="detail-value bold">{selectedLeave.days.replace('d', ' days')}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Applied On</span>
                  <span className="detail-value">Apr 21, 2026</span>
                </div>
              </div>
              
              <div className="modal-reason-section">
                <h4>REASON</h4>
                <div className="reason-box">
                  {selectedLeave.reason} — attending sister's wedding ceremony in hometown. Will ensure all tasks are handed over before departure.
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary-light" onClick={() => setSelectedLeave(null)}>Close</button>
              <button onClick={() => alert("Button clicked!")} className="btn-approve-outline">Approve</button>
              <button onClick={() => alert("Button clicked!")} className="btn-reject-outline">Reject</button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Panel for History */}
      {selectedHistoryLeave && (
        <div className="slide-over-overlay">
          <div className="slide-over-panel">
            <div className="slide-over-header">
              <h2>Request LR-880{selectedHistoryLeave.id}</h2>
              <button className="btn-close-modal" onClick={() => setSelectedHistoryLeave(null)}><FiX /></button>
            </div>
            <div className="slide-over-body">
              <div className="slide-user-card">
                <div className="slide-user-info">
                  <div className={`avatar-circle avatar-${selectedHistoryLeave.color} xlarge`}>{selectedHistoryLeave.initial}</div>
                  <div>
                    <h3>{selectedHistoryLeave.name}</h3>
                    <p>Employee ID: EMP-10{selectedHistoryLeave.id}</p>
                  </div>
                </div>
                {getStatusPill(selectedHistoryLeave.status)}
              </div>
              
              <div className="slide-details-grid">
                <div className="slide-detail-group">
                  <span className="slide-label">Leave Type</span>
                  <span className="slide-value">{selectedHistoryLeave.type}</span>
                </div>
                <div className="slide-detail-group">
                  <span className="slide-label">Applied On</span>
                  <span className="slide-value">Apr 8, 2026</span>
                </div>
              </div>
              
              <div className="slide-duration-group">
                <div className="slide-label" style={{marginBottom: '8px'}}>Duration</div>
                <div className="slide-value">{selectedHistoryLeave.from}, 2026 to {selectedHistoryLeave.to}, 2026 ({selectedHistoryLeave.days.replace('d', ' days')})</div>
              </div>
              
              <div className="slide-reason-group">
                <div className="slide-label" style={{marginBottom: '8px'}}>Reason</div>
                <div className="slide-reason-box">
                  {selectedHistoryLeave.reason}
                </div>
              </div>
            </div>
            <div className="slide-over-footer">
              <button className="btn-white-outline" onClick={() => setSelectedHistoryLeave(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default LeaveManagement;
