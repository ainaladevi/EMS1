import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { 
  BsHeart, 
  BsActivity, 
  BsBriefcase, 
  BsSearch,
  BsChevronLeft,
  BsChevronRight,
  BsX,
  BsFileEarmarkText,
  BsBarChart,
  BsClockHistory,
  BsCalendar3,
  BsEye,
  BsDownload,
  BsPlusLg,
  BsCheck2Circle,
  BsChevronDown,
  BsChevronUp
} from 'react-icons/bs';
import { FaBaby, FaBabyCarriage } from 'react-icons/fa';

const LeaveModal = ({ isOpen, onClose, onSubmit }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [leaveType, setLeaveType] = useState('Sick Leave (4 days remaining)');
  const [fromDate, setFromDate] = useState('08-04-2026');
  const [toDate, setToDate] = useState('11-04-2026');

  if (!isOpen) return null;

  const leaveTypes = [
    'Casual Leave (5 days remaining)',
    'Sick Leave (4 days remaining)',
    'Paid Leave (15 days remaining)',
    'Maternity Leave (84 days remaining)',
    'Paternity Leave (15 days remaining)'
  ];

  let previewDays = null;
  let previewStatus = null;
  let remainingText = '';
  let exceedsText = '';

  if (leaveType && fromDate && toDate) {
    const match = leaveType.match(/(\d+)\s+days?/);
    const balance = match ? parseInt(match[1], 10) : 0;

    const parseDateStr = (str) => {
      const parts = str.split('-');
      if (parts.length === 3) {
        return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      }
      return null;
    };

    const d1 = parseDateStr(fromDate);
    const d2 = parseDateStr(toDate);

    if (d1 && d2 && d2 >= d1) {
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const daysRequested = diffDays;

      if (daysRequested > 0) {
        previewDays = daysRequested < 10 ? `0${daysRequested}` : daysRequested.toString();
        
        if (daysRequested > balance) {
          previewStatus = 'exceeds';
          const over = daysRequested - balance;
          exceedsText = `Exceeds balance by ${over} day${over !== 1 ? 's' : ''}`;
        } else {
          previewStatus = 'ok';
          const rem = balance - daysRequested;
          remainingText = `${rem} day${rem !== 1 ? 's' : ''}`;
        }
      }
    }
  }

  return (
    <div className="ems-modal-overlay">
      <div className="ems-modal-content">
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Apply for Leave</h2>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>Submit a new leave request for manager approval</p>

        <div className="mb-3" style={{ position: 'relative' }}>
          <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '8px' }}>LEAVE TYPE</label>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ 
              border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              cursor: 'pointer', backgroundColor: '#ffffff'
            }}
          >
            <span style={{ fontSize: '14px', color: '#0f172a' }}>{leaveType || 'Select type...'}</span>
            {isDropdownOpen ? <BsChevronUp color="#0f172a" size={12} /> : <BsChevronDown color="#0f172a" size={12} />}
          </div>

          {isDropdownOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
              backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', zIndex: 100, overflow: 'hidden'
            }}>
              {leaveTypes.map((type, index) => (
                <div 
                  key={index}
                  onClick={() => { setLeaveType(type); setIsDropdownOpen(false); }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                  style={{
                    padding: '12px 14px', cursor: 'pointer', fontSize: '14px', color: '#334155',
                    borderBottom: index !== leaveTypes.length - 1 ? '1px solid #f1f5f9' : 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="d-flex gap-3 mb-3">
          <div className="flex-grow-1">
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '8px' }}>FROM DATE</label>
            <div style={{ 
              border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <input 
                type="text" 
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                placeholder="dd-mm-yyyy"
                style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#0f172a', width: '100%' }}
              />
              <BsCalendar3 color="#0f172a" size={14} />
            </div>
          </div>
          <div className="flex-grow-1">
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '8px' }}>TO DATE</label>
            <div style={{ 
              border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <input 
                type="text" 
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="dd-mm-yyyy"
                style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#0f172a', width: '100%' }}
              />
              <BsCalendar3 color="#0f172a" size={14} />
            </div>
          </div>
        </div>

        <div className="mb-3" style={{ 
          border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc',
          display: 'flex', alignItems: 'center', padding: '16px 0'
        }}>
          <div style={{ width: '110px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {previewDays ? (
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#2563eb', lineHeight: '1', letterSpacing: '-0.5px' }}>{previewDays}</span>
            ) : (
              <div style={{ width: '12px', height: '2px', backgroundColor: '#2563eb', marginBottom: '4px' }}></div>
            )}
            <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: previewDays ? '4px' : '0' }}>working days</span>
          </div>
          <div style={{ width: '1px', height: '32px', backgroundColor: '#e2e8f0' }}></div>
          <div style={{ paddingLeft: '16px' }}>
            {!previewDays && (
              <span style={{ fontSize: '13px', color: '#94a3b8' }}>Select type and dates to preview</span>
            )}
            {previewStatus === 'ok' && (
              <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                After approval: <span style={{ color: '#2563eb', fontWeight: 600 }}>{remainingText}</span> remaining
              </span>
            )}
            {previewStatus === 'exceeds' && (
              <span style={{ fontSize: '13px', color: '#ef4444' }}>
                {exceedsText}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '8px' }}>REASON</label>
          <textarea 
            className="form-control"
            placeholder="Briefly describe the reason for your leave..."
            style={{ 
              border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 14px', 
              fontSize: '14px', color: '#0f172a', boxShadow: 'none', resize: 'none', height: '100px'
            }}
          ></textarea>
        </div>

        <div className="d-flex gap-3">
          <button 
            className="btn btn-light fw-semibold flex-grow-1"
            onClick={onClose}
            style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', color: '#64748b', fontSize: '14px', backgroundColor: '#ffffff' }}
          >
            Cancel
          </button>
          <button 
            className="btn btn-primary fw-semibold flex-grow-1"
            onClick={() => {
              if (onSubmit) onSubmit();
              onClose();
            }}
            style={{ backgroundColor: '#2563eb', border: 'none', borderRadius: '8px', padding: '10px', color: '#ffffff', fontSize: '14px' }}
          >
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
};

const LeaveDetailDrawer = ({ isOpen, onClose, leave }) => {
  if (!isOpen || !leave) return null;

  const fromDate = leave.from || (leave.dates ? leave.dates.split('-')[0].trim() : 'N/A');
  const toDate = leave.to || (leave.dates ? leave.dates.split('-')[1]?.trim() || leave.dates.split('-')[0].trim() : 'N/A');
  const department = leave.employee?.dept || (leave.status === 'Approved' ? 'HR' : 'Engineering');
  const appliedDate = leave.applied || (leave.status === 'Approved' ? 'Apr 14' : 'Apr 21, 2026');
  const empId = leave.employee?.id || 'EMP008';

  return (
    <div className="ems-drawer-overlay">
      <div className="ems-drawer-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ffffff' }}>
        {leave.status === 'Approved' ? (
          <>
            {/* Header */}
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center' }}>
                  {leave.employee.name} — {leave.type}
                </h2>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                  {fromDate} to {toDate} • {leave.days || '2 days'}
                </div>
              </div>
              <button onClick={onClose} className="btn btn-sm bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '8px', color: '#64748b', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                <BsX size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div style={{ padding: '0 24px 24px 24px', flexGrow: 1, overflowY: 'auto' }}>
              
              {/* Employee Profile Block */}
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: leave.employee.bg || '#e0f2fe', color: leave.employee.color || '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600 }}>
                    {leave.employee.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{leave.employee.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{department} · Applied {appliedDate}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, color: leave.statusStyle.color }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: leave.statusStyle.dot }}></div>
                  {leave.status}
                </div>
              </div>

              {/* Application Details */}
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '16px', textTransform: 'uppercase' }}>APPLICATION DETAILS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px' }}>Leave type</span>
                  <span style={{ backgroundColor: leave.typeStyle.bg, color: leave.typeStyle.color, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600 }}>
                    {leave.type}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px' }}>From</span>
                  <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 600 }}>{fromDate}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px' }}>To</span>
                  <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 600 }}>{toDate}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px' }}>Duration</span>
                  <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 600 }}>{leave.days || '2 days'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px' }}>Reason</span>
                  <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 600 }}>{leave.reason}</span>
                </div>
              </div>

              {/* Employee Leave Balance */}
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '16px', textTransform: 'uppercase' }}>EMPLOYEE LEAVE BALANCE</div>
              <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '16px', color: '#d97706', fontSize: '13px', textAlign: 'left', fontWeight: 500 }}>
                --Balance data not available--
              </div>
              
            </div>

            {/* Footer */}
            <div style={{ padding: '24px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', backgroundColor: '#ffffff' }}>
              <button onClick={onClose} className="btn bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px', fontWeight: 600, padding: '8px 24px', color: '#475569' }}>
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Header */}
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Leave Request Details</h2>
              <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BsX size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div style={{ padding: '0 24px 24px 24px', flexGrow: 1, overflowY: 'auto' }}>
              
              {/* Employee Profile Block */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '24px', borderBottom: '1px solid #f1f5f9', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: leave.employee.bg, color: leave.employee.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700 }}>
                    {leave.employee.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{leave.employee.name}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{empId} · {department}</div>
                  </div>
                </div>
                <div style={{ backgroundColor: leave.statusStyle.bg || '#ffffff', color: leave.statusStyle.color, border: leave.statusStyle.bg ? 'none' : '1px solid #e2e8f0', padding: '4px 12px', borderRadius: '16px', fontSize: '11px', fontWeight: 700 }}>
                  {leave.status}
                </div>
              </div>

              {/* Application Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px', width: '120px', fontWeight: 600 }}>Leave Type</span>
                  <span style={{ backgroundColor: leave.typeStyle.bg, color: leave.typeStyle.color, padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>
                    {leave.type}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px', width: '120px', fontWeight: 600 }}>Start Date</span>
                  <span style={{ color: '#0f172a', fontSize: '13px' }}>{fromDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px', width: '120px', fontWeight: 600 }}>End Date</span>
                  <span style={{ color: '#0f172a', fontSize: '13px' }}>{toDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px', width: '120px', fontWeight: 600 }}>Duration</span>
                  <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 700 }}>{leave.days}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '13px', width: '120px', fontWeight: 600 }}>Applied On</span>
                  <span style={{ color: '#0f172a', fontSize: '13px' }}>{appliedDate}</span>
                </div>
              </div>

              {/* Reason Section */}
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', marginBottom: '8px' }}>REASON</div>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '16px', color: '#2563eb', fontSize: '13px', lineHeight: '1.5' }}>
                  {leave.reason}
                </div>
              </div>
              
            </div>

            {/* Footer */}
            <div style={{ padding: '24px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={onClose} className="btn btn-sm" style={{ padding: '8px 24px', backgroundColor: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>
                Close
              </button>
              
              {leave.status === 'Pending' && (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => { onClose(); }} className="btn btn-sm" style={{ padding: '8px 24px', backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>
                    Approve
                  </button>
                  <button onClick={() => { onClose(); }} className="btn btn-sm" style={{ padding: '8px 24px', backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>
                    Reject
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const LeavePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const [isHistoryView, setIsHistoryView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [mainTab, setMainTab] = useState('Leave Calendar');
  const [selectedDate, setSelectedDate] = useState(16);

  const mockLeavesData = {
    1: {
      approved: [{ initials: 'KP', name: 'Kiran Patel', dept: 'HR', bg: '#fdf2f8', color: '#db2777' }],
      pending: [{ initials: 'SB', name: 'Suresh Babu', time: 'Full day', bg: '#fef3c7', color: '#d97706' }]
    },
    6: {
      approved: [{ initials: 'AR', name: 'Ananya Reddy', dept: 'Design', bg: '#eff6ff', color: '#2563eb' }],
      pending: [{ initials: 'ET', name: 'Emp Test', time: 'Morning', bg: '#fef2f2', color: '#ef4444' }]
    },
    14: {
      approved: [{ initials: 'RK', name: 'Ravi Kumar', dept: 'Engineering', bg: '#faf5ff', color: '#a855f7' }],
      pending: [{ initials: 'JD', name: 'John Doe', time: 'Afternoon', bg: '#ecfdf5', color: '#10b981' }]
    },
    16: {
      approved: [
        { initials: 'AN', name: 'Arjun Nair', dept: 'Engineering', bg: '#2563eb', color: '#ffffff' },
        { initials: 'RS', name: 'Riya Sharma', dept: 'Design', bg: '#0ea5e9', color: '#ffffff' }
      ],
      pending: [
        { initials: 'PG', name: 'Preethi G', time: 'After 9:30 AM', bg: '#0d9488', color: '#ffffff' }
      ]
    },
    22: {
      approved: [{ initials: 'KP', name: 'Kiran Patel', dept: 'HR', bg: '#fdf2f8', color: '#db2777' }],
      pending: [{ initials: 'SB', name: 'Suresh Babu', time: 'Full day', bg: '#fef3c7', color: '#d97706' }]
    }
  };
  
  const mockHolidayData = {
    2: 'Company Foundation Day',
    17: 'Public Holiday',
    27: 'Regional Holiday'
  };

  const calendarDays = [
    { day: 29, currentMonth: false, type: 'weekend' },
    { day: 30, currentMonth: false, type: 'regular' },
    { day: 31, currentMonth: false, type: 'regular' },
    { day: 1, currentMonth: true, type: 'leave', dots: ['#10b981', '#f59e0b'], text: '2 on leave' },
    { day: 2, currentMonth: true, type: 'holiday', dots: ['#3b82f6'], text: 'Holiday' },
    { day: 3, currentMonth: true, type: 'regular' },
    { day: 4, currentMonth: true, type: 'weekend' },
    { day: 5, currentMonth: true, type: 'weekend' },
    { day: 6, currentMonth: true, type: 'leave', dots: ['#10b981', '#f59e0b'], text: '2 on leave' },
    { day: 7, currentMonth: true, type: 'regular' },
    { day: 8, currentMonth: true, type: 'regular' },
    { day: 9, currentMonth: true, type: 'regular' },
    { day: 10, currentMonth: true, type: 'regular' },
    { day: 11, currentMonth: true, type: 'weekend' },
    { day: 12, currentMonth: true, type: 'weekend' },
    { day: 13, currentMonth: true, type: 'regular' },
    { day: 14, currentMonth: true, type: 'leave', dots: ['#10b981', '#f59e0b'], text: '2 on leave' },
    { day: 15, currentMonth: true, type: 'regular' },
    { day: 16, currentMonth: true, type: 'leave', dots: ['#10b981', '#f59e0b'], text: '2 on leave' },
    { day: 17, currentMonth: true, type: 'holiday', dots: ['#3b82f6'], text: 'Holiday' },
    { day: 18, currentMonth: true, type: 'weekend' },
    { day: 19, currentMonth: true, type: 'weekend' },
    { day: 20, currentMonth: true, type: 'regular' },
    { day: 21, currentMonth: true, type: 'regular' },
    { day: 22, currentMonth: true, type: 'leave', dots: ['#10b981', '#f59e0b'], text: '2 on leave' },
    { day: 23, currentMonth: true, type: 'regular' },
    { day: 24, currentMonth: true, type: 'regular' },
    { day: 25, currentMonth: true, type: 'weekend' },
    { day: 26, currentMonth: true, type: 'weekend' },
    { day: 27, currentMonth: true, type: 'holiday', dots: ['#3b82f6'], text: 'Holiday' },
    { day: 28, currentMonth: true, type: 'regular' },
    { day: 29, currentMonth: true, type: 'regular' },
    { day: 30, currentMonth: true, type: 'regular' }
  ];
  const [applicationTab, setApplicationTab] = useState('All (20)');

  const policies = [
    {
      title: 'Annual Leave',
      badge: '18 days',
      color: '#3b82f6',
      bg: '#eff6ff',
      points: [
        'Accrues at 1.5 days/month',
        'Min 3 days notice required',
        'Can be carried forward (max 5 days)',
        'Approved by direct manager'
      ]
    },
    {
      title: 'Sick Leave',
      badge: '12 days',
      color: '#ef4444',
      bg: '#fef2f2',
      points: [
        'No prior notice required',
        'Medical certificate for >3 days',
        'Not encashable',
        'Cannot be carried forward'
      ]
    },
    {
      title: 'Casual Leave',
      badge: '6 days',
      color: '#f59e0b',
      bg: '#fffbeb',
      points: [
        'Minimum 1 day advance notice',
        'Maximum 2 consecutive days',
        'Not encashable',
        'Cannot be carried forward'
      ]
    },
    {
      title: 'Maternity Leave',
      badge: '180 days',
      color: '#a855f7',
      bg: '#faf5ff',
      points: [
        '26 weeks for first 2 children',
        'Medical documentation required',
        'Fully paid per government norms',
        'Applicable only to female employees'
      ]
    },
    {
      title: 'Paternity Leave',
      badge: '7 days',
      color: '#0ea5e9',
      bg: '#e0f2fe',
      points: [
        'Within 15 days of child\'s birth',
        'Proof of birth required',
        'Fully paid',
        'One-time benefit'
      ]
    },
    {
      title: 'Compensatory Off',
      badge: 'Earned days',
      color: '#22c55e',
      bg: '#f0fdf4',
      points: [
        'Granted for working on holidays',
        'Must be availed within 30 days',
        'Applied after approval of OT',
        'Tracked in attendance system'
      ]
    }
  ];

  const newBalances = [
    { title: 'Annual Leave', employee: 'Ravi Kumar', total: 18, used: 4, remaining: 14, percent: '22%', color: '#3b82f6', lightColor: '#bfdbfe' },
    { title: 'Sick Leave', employee: 'Ravi Kumar', total: 12, used: 0, remaining: 12, percent: '0%', color: '#ef4444', lightColor: '#fecaca' },
    { title: 'Casual Leave', employee: 'Ravi Kumar', total: 6, used: 1, remaining: 5, percent: '17%', color: '#f59e0b', lightColor: '#fde68a' },
    { title: 'Paid Leave', employee: 'Ravi Kumar', total: 18, used: 6, remaining: 12, percent: '33%', color: '#8b5cf6', lightColor: '#ddd6fe' },
  ];

  const applicationRows = [
    { id: 1, employee: { name: 'Ananya Reddy', dept: 'Design', initials: 'AR', color: '#2563eb', bg: '#eff6ff' }, type: 'Annual Leave', typeStyle: { color: '#2563eb', bg: '#eff6ff' }, from: 'Apr 24', to: 'Apr 25', days: '2d', reason: 'Personal travel', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 2, employee: { name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#ef4444', bg: '#fef2f2' }, type: 'Sick Leave', typeStyle: { color: '#ef4444', bg: '#fef2f2' }, from: 'Apr 22', to: 'Apr 22', days: '1d', reason: 'Fever and cold', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 3, employee: { name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#f97316', bg: '#fff7ed' }, type: 'Casual Leave', typeStyle: { color: '#f59e0b', bg: '#fffbeb' }, from: 'Apr 28', to: 'Apr 28', days: '1d', reason: 'Personal work', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 4, employee: { name: 'Srinivas K.', dept: 'Engineering', initials: 'SK', color: '#f59e0b', bg: '#fffbeb' }, type: 'Annual Leave', typeStyle: { color: '#2563eb', bg: '#eff6ff' }, from: 'May 1', to: 'May 5', days: '5d', reason: 'Family vacation', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 5, employee: { name: 'Meera Nair', dept: 'Engineering', initials: 'MN', color: '#8b5cf6', bg: '#f5f3ff' }, type: 'Compensatory Off', typeStyle: { color: '#10b981', bg: '#f0fdf4' }, from: 'Apr 23', to: 'Apr 23', days: '1d', reason: 'Worked on Sunday Apr 19', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 6, employee: { name: 'Kiran Patel', dept: 'HR', initials: 'KP', color: '#a855f7', bg: '#faf5ff' }, type: 'Sick Leave', typeStyle: { color: '#ef4444', bg: '#fef2f2' }, from: 'Apr 15', to: 'Apr 16', days: '2d', reason: 'Medical procedure', status: 'Rejected', statusStyle: { color: '#ef4444', bg: '#ffffff', border: '#fecaca', dot: '#ef4444' } },
    { id: 7, employee: { name: 'Ananya Reddy', dept: 'Design', initials: 'AR', color: '#2563eb', bg: '#eff6ff' }, type: 'Casual Leave', typeStyle: { color: '#f59e0b', bg: '#fffbeb' }, from: 'Mar 28', to: 'Mar 28', days: '1d', reason: 'Personal errand', status: 'Approved', statusStyle: { color: '#10b981', bg: '#f0fdf4', dot: '#10b981' } },
  ];

  const historyRows = [
    { id: 1, employee: { name: 'Kiran Patel', initials: 'KP', color: '#db2777', bg: '#fdf2f8' }, type: 'Sick Leave', typeStyle: { color: '#ef4444', bg: '#fef2f2' }, dates: 'Apr 15-16', days: '2d', reason: 'Medical procedure', applied: 'Apr 14', status: 'Approved', statusStyle: { color: '#16a34a', bg: '#f0fdf4', dot: '#16a34a' } },
    { id: 2, employee: { name: 'Ananya Reddy', initials: 'AR', color: '#2563eb', bg: '#eff6ff' }, type: 'Casual Leave', typeStyle: { color: '#f59e0b', bg: '#fffbeb' }, dates: 'Mar 28', days: '1d', reason: 'Personal errand', applied: 'Mar 27', status: 'Approved', statusStyle: { color: '#16a34a', bg: '#f0fdf4', dot: '#16a34a' } },
    { id: 3, employee: { name: 'Ravi Kumar', initials: 'RK', color: '#a855f7', bg: '#faf5ff' }, type: 'Annual Leave', typeStyle: { color: '#2563eb', bg: '#eff6ff' }, dates: 'Mar 10-12', days: '3d', reason: 'Family visit', applied: 'Mar 5', status: 'Approved', statusStyle: { color: '#16a34a', bg: '#f0fdf4', dot: '#16a34a' } },
    { id: 4, employee: { name: 'Emp Test', initials: 'ET', color: '#ef4444', bg: '#fef2f2' }, type: 'Annual Leave', typeStyle: { color: '#2563eb', bg: '#eff6ff' }, dates: 'Feb 20-21', days: '2d', reason: 'Short trip', applied: 'Feb 18', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 5, employee: { name: 'Suresh Babu', initials: 'SB', color: '#f59e0b', bg: '#fffbeb' }, type: 'Sick Leave', typeStyle: { color: '#ef4444', bg: '#fef2f2' }, dates: 'Feb 14', days: '1d', reason: 'Unwell', applied: 'Feb 14', status: 'Rejected', statusStyle: { color: '#ef4444', bg: '#ffffff', border: '#fecaca', dot: '#ef4444' } },
  ];

  const handleSubmitRequest = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const cards = [
    {
      id: 1,
      title: 'CASUAL LEAVE',
      icon: <BsHeart size={16} color="#f59e0b" />,
      iconBg: '#fef3c7',
      available: 5,
      total: 10,
      subtext: 'Days remaining this year',
      barColor: '#f59e0b',
      used: 5
    },
    {
      id: 2,
      title: 'SICK LEAVE',
      icon: <BsActivity size={16} color="#ef4444" />,
      iconBg: '#fee2e2',
      available: 4,
      total: 12,
      subtext: 'Low balance — plan ahead',
      subtextColor: '#dc2626',
      barColor: '#dc2626',
      used: 8
    },
    {
      id: 3,
      title: 'PAID LEAVE',
      icon: <BsBriefcase size={16} color="#3b82f6" />,
      iconBg: '#eff6ff',
      available: 15,
      total: 20,
      subtext: 'Days remaining this year',
      barColor: '#3b82f6',
      used: 5
    },
    {
      id: 4,
      title: 'MATERNITY LEAVE',
      icon: <FaBaby size={16} style={{ color: '#ec4899' }} />,
      iconBg: '#fdf2f8',
      available: 84,
      total: 84,
      subtext: 'Days available (not yet used)',
      barColor: '#e5e7eb',
      badge: 'For Women only',
      badgeColor: '#ec4899',
      badgeBg: '#fdf2f8',
      used: 0
    },
    {
      id: 5,
      title: 'PATERNITY LEAVE',
      icon: <FaBabyCarriage size={16} style={{ color: '#a855f7' }} />,
      iconBg: '#faf5ff',
      available: 15,
      total: 15,
      subtext: 'Days available (not yet used)',
      barColor: '#e5e7eb',
      badge: 'For Men only',
      badgeColor: '#a855f7',
      badgeBg: '#faf5ff',
      used: 0
    }
  ];

  const maxSlide = Math.max(0, cards.length - 3);

  const handlePrev = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(maxSlide, currentSlide + 1));
  };

  const allRows = [
    { id: 1, dateRange: 'Oct 24 - Oct 26', days: '3 Days', type: 'Casual', typeStyle: { color: '#b45309', bg: '#fef3c7' }, reason: 'Family gathering in native town', applied: 'Oct 12, 2023', status: 'Approved', statusStyle: { color: '#059669', bg: '#f6fdf9', border: '#b2f0d1', dot: '#10b981' } },
    { id: 2, dateRange: 'Nov 02 - Nov 02', days: '1 Day', type: 'Sick', typeStyle: { color: '#be123c', bg: '#ffe4e6' }, reason: 'Medical checkup and follow-up', applied: 'Oct 30, 2023', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#ffffff', border: '#fde68a', dot: '#f59e0b' } },
    { id: 3, dateRange: 'Dec 20 - Dec 28', days: '9 Days', type: 'Paid', typeStyle: { color: '#1d4ed8', bg: '#dbeafe' }, reason: 'Winter vacation / Annual leave', applied: 'Sep 15, 2023', status: 'Approved', statusStyle: { color: '#059669', bg: '#f6fdf9', border: '#b2f0d1', dot: '#10b981' } },
    { id: 4, dateRange: 'Aug 14 - Aug 14', days: '1 Day', type: 'Casual', typeStyle: { color: '#b45309', bg: '#fef3c7' }, reason: 'Personal errands and bank work', applied: 'Aug 10, 2023', status: 'Rejected', statusStyle: { color: '#ef4444', bg: '#ffffff', border: '#fecaca', dot: '#ef4444' } },
    { id: 5, dateRange: 'Jan 15 - Jan 18', days: '4 Days', type: 'Paid', typeStyle: { color: '#1d4ed8', bg: '#dbeafe' }, reason: 'New year trip abroad', applied: 'Dec 01, 2023', status: 'Approved', statusStyle: { color: '#059669', bg: '#f6fdf9', border: '#b2f0d1', dot: '#10b981' } },
  ];

  const pendingRows = [
    allRows[1],
    { ...allRows[1], id: 6 },
    { ...allRows[1], id: 7 },
    { ...allRows[1], id: 8 },
    { ...allRows[1], id: 9 }
  ];

  const rejectedRows = [
    allRows[3],
    { ...allRows[3], id: 10 },
    { ...allRows[3], id: 11 },
    { ...allRows[3], id: 12 },
    { ...allRows[3], id: 13 }
  ];

  const approvedRows = [
    allRows[0],
    allRows[2],
    { ...allRows[2], id: 14 },
    { ...allRows[2], id: 15 },
    allRows[4]
  ];

  const filteredHistory = activeTab === 'All' ? allRows : 
                          activeTab === 'Approved' ? approvedRows : 
                          activeTab === 'Pending' ? pendingRows : rejectedRows;

  return (
    <div className="p-4 mx-auto" style={{ maxWidth: '1200px' }}>
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-end mb-5">
        <div>
          <nav aria-label="breadcrumb" style={{ '--bs-breadcrumb-divider': "'>'" }}>
            <ol className="breadcrumb mb-1 text-sm">
              <li className="breadcrumb-item"><span className="text-muted">Dashborad</span></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page">Leave</li>
            </ol>
          </nav>
          <h3 className="fw-bold mb-1 text-dark">Leave Management</h3>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>Applications, approvals, balances and leave history</span>
        </div>
        <div className="d-flex gap-3">
          <button className="btn text-white fw-semibold rounded-2" style={{ backgroundColor: '#2563eb', fontSize: '13px', padding: '8px 16px', border: 'none' }} onClick={() => setIsModalOpen(true)}>
            Apply for Leave
          </button>
          <button className="btn bg-white fw-semibold rounded-2" style={{ border: '1px solid #e2e8f0', color: '#475569', fontSize: '13px', padding: '8px 16px' }} onClick={() => setIsHistoryView(!isHistoryView)}>
            {isHistoryView ? 'Back to Apply' : 'View History'}
          </button>
        </div>
      </div>

      {isHistoryView ? (
        <>
          {/* Top Metrics Cards */}
          <div className="row g-3 mb-4">
            {[
              { label: 'PENDING APPROVALS', value: '6', subtext: 'awaiting review', color: '#f59e0b' },
              { label: 'APPROVED THIS MONTH', value: '14', subtext: 'across all types', color: '#10b981' },
              { label: 'ON LEAVE TODAY', value: '3', subtext: 'approved leave', color: '#3b82f6' },
              { label: 'REJECTED', value: '2', subtext: 'this month', color: '#ef4444' }
            ].map((metric, i) => (
              <div key={i} className="col-md-3">
                <Card className="border-0 shadow-sm rounded-4 h-100 p-3" style={{ backgroundColor: '#ffffff' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {metric.label}
                  </div>
                  <div className="fw-bold mb-1" style={{ fontSize: '24px', color: metric.color }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                    {metric.subtext}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="d-flex gap-2 mb-4 overflow-auto" style={{ paddingBottom: '4px' }}>
            {[
              { id: 'Applications', label: 'Applications', count: 6, icon: <BsCheck2Circle size={14} /> },
              { id: 'Leave Balances', label: 'Leave Balances', icon: <BsBarChart size={14} /> },
              { id: 'History', label: 'History', icon: <BsClockHistory size={14} /> },
              { id: 'Leave Policy', label: 'Leave Policy', icon: <BsFileEarmarkText size={14} /> },
              { id: 'Leave Calendar', label: 'Leave Calendar', icon: <BsCalendar3 size={14} /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setMainTab(tab.id)}
                className={`btn d-flex align-items-center gap-2 fw-semibold rounded-3 px-3 py-2 ${
                  mainTab === tab.id ? 'text-white' : 'bg-white text-secondary border'
                }`}
                style={{
                  backgroundColor: mainTab === tab.id ? '#2563eb' : '#ffffff',
                  border: mainTab === tab.id ? 'none' : '1px solid #e2e8f0',
                  fontSize: '13px',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.icon}
                {tab.label}
                {tab.count && (
                  <span className={`badge rounded-pill ms-1`} style={{ backgroundColor: mainTab === tab.id ? '#ffffff' : '#f1f5f9', color: mainTab === tab.id ? '#2563eb' : '#64748b', fontSize: '11px', padding: '2px 6px' }}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {mainTab === 'Applications' && (
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden mb-4" style={{ backgroundColor: '#ffffff' }}>
            <div className="d-flex justify-content-between align-items-center p-3 px-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <div className="d-flex gap-4">
                {[
                  { name: 'All', count: 20 },
                  { name: 'Pending', count: 6 },
                  { name: 'Approved', count: 14 },
                  { name: 'Rejected' },
                  { name: 'Cancelled' }
                ].map(tab => {
                  const isActive = activeTab === tab.name;
                  const countColor = tab.name === 'Pending' ? '#f97316' : tab.name === 'Approved' ? '#16a34a' : '#2563eb';
                  return (
                    <button 
                      key={tab.name}
                      className="btn btn-link text-decoration-none fw-semibold border-0 position-relative p-0 pb-2" 
                      style={{ 
                        color: isActive ? '#2563eb' : '#64748b',
                        fontSize: '13px'
                      }}
                      onClick={() => setActiveTab(tab.name)}
                    >
                      {tab.name} {tab.count && <span style={{ color: countColor, fontSize: '11px', marginLeft: '4px' }}>({tab.count})</span>}
                      {isActive && (
                        <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '3px', backgroundColor: '#2563eb', borderTopLeftRadius: '3px', borderTopRightRadius: '3px' }}></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 border-bottom d-flex justify-content-between align-items-center" style={{ borderColor: '#f1f5f9', backgroundColor: '#ffffff' }}>
              <div className="position-relative" style={{ width: '400px' }}>
                <BsSearch size={14} className="position-absolute text-muted" style={{ top: '10px', left: '14px' }} />
                <input 
                  type="text" 
                  className="form-control bg-light" 
                  placeholder="Search employees..." 
                  style={{ fontSize: '13px', padding: '8px 14px 8px 36px', border: '1px solid #f1f5f9', borderRadius: '6px' }}
                />
              </div>
              <div className="d-flex gap-3">
                <button className="btn bg-white border d-flex justify-content-between align-items-center fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px', minWidth: '150px' }}>
                  22 - 04 - 2026 <BsCalendar3 size={14} className="ms-2 text-muted" />
                </button>
                <button className="btn bg-white border fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px' }}>
                  All status
                </button>
                <button className="btn bg-white border fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px' }}>
                  All departments
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#ffffff' }}>
                  <tr>
                    <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ width: '40px' }}>
                      <input type="checkbox" className="form-check-input" style={{ borderColor: '#cbd5e1' }} />
                    </th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>Employee</th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>Leave type</th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>From</th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>To</th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>Days</th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>Reason</th>
                    <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '12px', color: '#64748b' }}>Status</th>
                    <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '12px', color: '#64748b', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#ffffff' }}>
                  {applicationRows.map(row => (
                    <tr key={row.id}>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <input type="checkbox" className="form-check-input" style={{ borderColor: '#cbd5e1' }} />
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: row.employee.bg, color: row.employee.color, fontSize: '12px', fontWeight: 600 }}>
                            {row.employee.initials}
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{row.employee.name}</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>{row.employee.dept}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="d-inline-flex px-2 py-1 rounded-pill fw-semibold" style={{ backgroundColor: row.typeStyle.bg, color: row.typeStyle.color, fontSize: '11px' }}>
                          {row.type}
                        </div>
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{row.from}</div>
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{row.to}</div>
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{row.days}</div>
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>{row.reason}</span>
                      </td>
                      <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ backgroundColor: row.statusStyle.bg }}>
                          <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: row.statusStyle.dot }}></div>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: row.statusStyle.color }}>{row.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <button 
                          className="btn btn-sm fw-semibold" 
                          style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}
                          onClick={() => setSelectedLeave(row)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ borderColor: '#f1f5f9', backgroundColor: '#ffffff' }}>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Showing 1-8 of 18</span>
              <div className="d-flex gap-1">
                <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>&larr;</button>
                <button className="btn btn-sm text-white" style={{ backgroundColor: '#2563eb', border: '1px solid #2563eb', borderRadius: '6px', width: '32px', height: '32px' }}>1</button>
                <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>2</button>
                <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>3</button>
                <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>&rarr;</button>
              </div>
            </div>
          </Card>
          )}
          
          {mainTab === 'Leave Balances' && (
            <>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="position-relative" style={{ width: '320px' }}>
                  <BsSearch size={14} className="position-absolute text-muted" style={{ top: '10px', left: '14px' }} />
                  <input 
                    type="text" 
                    className="form-control bg-white" 
                    placeholder="Search employees..." 
                    defaultValue="Ravi Kumar"
                    style={{ fontSize: '13px', padding: '8px 14px 8px 36px', border: '1px solid #e2e8f0', borderRadius: '6px' }}
                  />
                </div>
                <button className="btn bg-white border fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px' }}>
                  FY 2025-26
                </button>
              </div>
              
              <div className="row g-4 mb-4">
                {[
                  { title: 'Annual Leave', employee: 'Ravi Kumar', total: 18, used: 4, remaining: 14, percent: 22, color: '#3b82f6', lightColor: '#bfdbfe' },
                  { title: 'Sick Leave', employee: 'Ravi Kumar', total: 12, used: 0, remaining: 12, percent: 0, color: '#ef4444', lightColor: '#fecaca' },
                  { title: 'Casual Leave', employee: 'Ravi Kumar', total: 6, used: 1, remaining: 5, percent: 17, color: '#f59e0b', lightColor: '#fde68a' },
                  { title: 'Paid Leave', employee: 'Ravi Kumar', total: 18, used: 6, remaining: 12, percent: 33, color: '#6366f1', lightColor: '#c7d2fe' },
                ].map((card, i) => (
                  <div className="col-md-4" key={i}>
                    <Card className="shadow-sm h-100 p-4" style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{card.title}</div>
                      <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '24px' }}>{card.employee}</div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '11px', color: '#64748b', width: '70px' }}>Total</span>
                        <div className="flex-grow-1 mx-2" style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px' }}>
                          <div style={{ height: '100%', width: '100%', backgroundColor: card.lightColor, borderRadius: '2px' }}></div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: card.color, width: '24px', textAlign: 'right' }}>{card.total}</span>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '11px', color: '#64748b', width: '70px' }}>Used</span>
                        <div className="flex-grow-1 mx-2" style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px' }}>
                          <div style={{ height: '100%', width: `${card.percent}%`, backgroundColor: card.color, borderRadius: '2px' }}></div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', width: '24px', textAlign: 'right' }}>{card.used}</span>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <span style={{ fontSize: '11px', color: '#64748b', width: '70px' }}>Remaining</span>
                        <div className="flex-grow-1 mx-2" style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px' }}>
                          <div style={{ height: '100%', width: `${(card.remaining / card.total) * 100}%`, backgroundColor: card.lightColor, borderRadius: '2px' }}></div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', width: '24px', textAlign: 'right' }}>{card.remaining}</span>
                      </div>
                      
                      <div className="text-end mt-2" style={{ fontSize: '10px', color: '#94a3b8' }}>{card.percent}% used</div>
                    </Card>
                  </div>
                ))}
              </div>
            </>
          )}

          {mainTab === 'History' && (
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden mb-4" style={{ backgroundColor: '#ffffff' }}>
              <div className="p-3 border-bottom d-flex justify-content-between align-items-center" style={{ borderColor: '#f1f5f9', backgroundColor: '#ffffff' }}>
                <div className="position-relative" style={{ width: '400px' }}>
                  <BsSearch size={14} className="position-absolute text-muted" style={{ top: '10px', left: '14px' }} />
                  <input 
                    type="text" 
                    className="form-control bg-white" 
                    placeholder="Search employees..." 
                    style={{ fontSize: '13px', padding: '8px 14px 8px 36px', border: '1px solid #f1f5f9', borderRadius: '6px' }}
                  />
                </div>
                <div className="d-flex gap-3">
                  <button className="btn bg-white border d-flex justify-content-between align-items-center fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px', minWidth: '150px' }}>
                    22 - 04 - 2026 <BsCalendar3 size={14} className="ms-2 text-muted" />
                  </button>
                  <button className="btn bg-white border fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px' }}>
                    All status
                  </button>
                  <button className="btn bg-white border fw-semibold" style={{ fontSize: '13px', color: '#475569', borderRadius: '6px' }}>
                    All departments
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table mb-0 align-middle">
                  <thead style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#ffffff' }}>
                    <tr>
                      <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Employee</th>
                      <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Type</th>
                      <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Dates</th>
                      <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Days</th>
                      <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Reason</th>
                      <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Applied on</th>
                      <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '11px', color: '#64748b' }}>Status</th>
                      <th className="border-bottom-0 py-3 px-4 fw-semibold text-center" style={{ fontSize: '16px', color: '#94a3b8' }}>...</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#ffffff' }}>
                    {[
                      { id: 1, employee: { name: 'Kiran Patel', initials: 'KP', color: '#db2777', bg: '#fdf2f8' }, type: 'Sick Leave', typeStyle: { color: '#ef4444', bg: '#fef2f2' }, dates: 'Apr 15-16', days: '2d', reason: 'Medical procedure', applied: 'Apr 14', status: 'Approved', statusStyle: { color: '#16a34a', dot: '#16a34a', bg: '#f0fdf4' } },
                      { id: 2, employee: { name: 'Ananya Reddy', initials: 'AR', color: '#2563eb', bg: '#eff6ff' }, type: 'Casual Leave', typeStyle: { color: '#f59e0b', bg: '#fef3c7' }, dates: 'Mar 28', days: '1d', reason: 'Personal errand', applied: 'Mar 27', status: 'Approved', statusStyle: { color: '#16a34a', dot: '#16a34a', bg: '#f0fdf4' } },
                      { id: 3, employee: { name: 'Ravi Kumar', initials: 'RK', color: '#a855f7', bg: '#faf5ff' }, type: 'Annual Leave', typeStyle: { color: '#2563eb', bg: '#eff6ff' }, dates: 'Mar 10-12', days: '3d', reason: 'Family visit', applied: 'Mar 5', status: 'Approved', statusStyle: { color: '#16a34a', dot: '#16a34a', bg: '#f0fdf4' } },
                      { id: 4, employee: { name: 'Emp Test', initials: 'ET', color: '#ef4444', bg: '#fef2f2' }, type: 'Annual Leave', typeStyle: { color: '#2563eb', bg: '#eff6ff' }, dates: 'Feb 20-21', days: '2d', reason: 'Short trip', applied: 'Feb 18', status: 'Pending', statusStyle: { color: '#f59e0b', dot: '#f59e0b', bg: '#fef3c7' } },
                      { id: 5, employee: { name: 'Suresh Babu', initials: 'SB', color: '#f59e0b', bg: '#fef3c7' }, type: 'Sick Leave', typeStyle: { color: '#ef4444', bg: '#fef2f2' }, dates: 'Feb 14', days: '1d', reason: 'Unwell', applied: 'Feb 14', status: 'Rejected', statusStyle: { color: '#ef4444', dot: '#ef4444', bg: '#fef2f2' } },
                    ].map(row => (
                      <tr key={row.id}>
                        <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <div className="d-flex align-items-center gap-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: row.employee.bg, color: row.employee.color, fontSize: '12px', fontWeight: 600 }}>
                              {row.employee.initials}
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{row.employee.name}</div>
                          </div>
                        </td>
                        <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <div className="d-inline-flex px-2 py-1 rounded-pill fw-semibold" style={{ backgroundColor: row.typeStyle.bg, color: row.typeStyle.color, fontSize: '11px' }}>
                            {row.type}
                          </div>
                        </td>
                        <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{row.dates}</div>
                        </td>
                        <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{row.days}</div>
                        </td>
                        <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <span style={{ fontSize: '12px', color: '#64748b' }}>{row.reason}</span>
                        </td>
                        <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <span style={{ fontSize: '12px', color: '#64748b' }}>{row.applied}</span>
                        </td>
                        <td className="px-2 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ backgroundColor: row.statusStyle.bg || '#ffffff', border: row.statusStyle.bg ? 'none' : '1px solid #e2e8f0' }}>
                            <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: row.statusStyle.dot }}></div>
                            <span style={{ fontSize: '11px', fontWeight: 600, color: row.statusStyle.color }}>{row.status}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center" style={{ borderBottom: '1px solid #f8fafc' }}>
                          <button className="btn btn-sm d-flex align-items-center justify-content-center bg-white" style={{ width: '32px', height: '28px', borderRadius: '6px', border: '1px solid #e2e8f0', color: '#94a3b8', margin: '0 auto' }}>
                            <BsEye size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ borderColor: '#f1f5f9', backgroundColor: '#ffffff' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Showing 1-8 of 32</span>
                <div className="d-flex gap-1">
                  <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>&larr;</button>
                  <button className="btn btn-sm text-white" style={{ backgroundColor: '#2563eb', border: '1px solid #2563eb', borderRadius: '6px', width: '32px', height: '32px' }}>1</button>
                  <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>2</button>
                  <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>&rarr;</button>
                </div>
              </div>
            </Card>
          )}

          {mainTab === 'Leave Policy' && (
            <div className="row g-4 mb-4">
              {policies.map((policy, index) => (
                <div className="col-md-6" key={index}>
                  <Card className="shadow-sm border-0 h-100 p-4 position-relative overflow-hidden" style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', backgroundColor: policy.color }}></div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h6 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{policy.title}</h6>
                      <span className="badge rounded-pill" style={{ backgroundColor: policy.bg, color: policy.color, fontSize: '11px', fontWeight: 600, padding: '4px 10px' }}>
                        {policy.badge}
                      </span>
                    </div>
                    <ul className="mb-0 ps-3" style={{ listStyleType: 'disc' }}>
                      {policy.points.map((point, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '8px', lineHeight: '1.5' }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          )}
          {mainTab === 'Leave Calendar' && (
            <div className="row g-4 mb-4">
              <div className="col-lg-8">
                <Card className="shadow-sm border-0 p-4 h-100" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
                  {/* Calendar Header */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center p-0" style={{ border: '1px solid #e2e8f0', width: '32px', height: '32px', borderRadius: '8px' }}>
                        <BsChevronLeft size={12} color="#64748b" />
                      </button>
                      <h4 className="mb-0 fw-bold" style={{ fontSize: '18px', color: '#0f172a' }}>April 2026</h4>
                      <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center p-0" style={{ border: '1px solid #e2e8f0', width: '32px', height: '32px', borderRadius: '8px' }}>
                        <BsChevronRight size={12} color="#64748b" />
                      </button>
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>Click any date to view details</div>
                  </div>

                  {/* Calendar Legend */}
                  <div className="d-flex gap-4 mb-4" style={{ fontSize: '12px', fontWeight: 500, color: '#64748b' }}>
                    <div className="d-flex align-items-center gap-2"><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div> Approved Leave</div>
                    <div className="d-flex align-items-center gap-2"><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div> Pending Leave</div>
                    <div className="d-flex align-items-center gap-2"><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div> Holiday</div>
                    <div className="d-flex align-items-center gap-2"><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e2e8f0' }}></div> Weekend</div>
                  </div>

                  {/* Calendar Grid */}
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '8px', textAlign: 'center', fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                      <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                      {calendarDays.map((day, idx) => {
                        const isSelected = selectedDate === day.day && day.currentMonth;
                        return (
                          <div 
                            key={idx}
                            onClick={() => day.currentMonth && setSelectedDate(selectedDate === day.day ? null : day.day)}
                            className="d-flex flex-column align-items-center justify-content-center position-relative"
                            style={{ 
                              height: '92px', 
                              border: isSelected ? '1px solid #3b82f6' : '1px solid #f8fafc', 
                              borderRadius: '12px', 
                              backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                              cursor: day.currentMonth ? 'pointer' : 'default',
                              opacity: day.currentMonth ? 1 : 0.5,
                              width: '100%'
                            }}
                          >
                            <div style={{ fontSize: '14px', fontWeight: 600, color: day.currentMonth ? '#0f172a' : '#94a3b8', marginBottom: '8px' }}>
                              {day.day}
                            </div>
                            
                            {day.type === 'weekend' && (
                              <>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e2e8f0', marginBottom: '4px' }}></div>
                                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Weekend</div>
                              </>
                            )}
                            
                            {day.type === 'holiday' && (
                              <>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6', marginBottom: '4px' }}></div>
                                <div style={{ fontSize: '10px', color: '#3b82f6' }}>Holiday</div>
                              </>
                            )}

                            {day.type === 'leave' && (
                              <>
                                <div className="d-flex gap-1 mb-1">
                                  {day.dots.map((dot, dIdx) => (
                                    <div key={dIdx} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: dot }}></div>
                                  ))}
                                </div>
                                <div style={{ fontSize: '10px', color: '#64748b' }}>{day.text}</div>
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <Card className="shadow-sm border-0 h-100 p-4 d-flex flex-column" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
                  {selectedDate ? (
                    <>
                      <h5 className="fw-bold mb-4" style={{ fontSize: '15px', color: '#0f172a' }}>April {selectedDate}, 2026</h5>
                      
                      {mockLeavesData[selectedDate] ? (
                        <div className="flex-grow-1 overflow-auto">
                          {mockLeavesData[selectedDate].approved?.length > 0 && (
                            <>
                              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '16px', textTransform: 'uppercase' }}>APPROVED LEAVES</div>
                              
                              {mockLeavesData[selectedDate].approved.map((leave, idx, arr) => (
                                <div key={idx} className={`d-flex justify-content-between align-items-center mb-4 ${idx !== arr.length - 1 ? 'pb-4 border-bottom' : ''}`} style={{ borderColor: '#f1f5f9' }}>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: leave.bg, color: leave.color, fontSize: '12px', fontWeight: 600 }}>
                                      {leave.initials}
                                    </div>
                                    <div>
                                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{leave.name}</div>
                                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{leave.dept}</div>
                                    </div>
                                  </div>
                                  <span style={{ backgroundColor: '#f0fdf4', color: '#16a34a', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600 }}>Approved</span>
                                </div>
                              ))}
                            </>
                          )}

                          {mockLeavesData[selectedDate].pending?.length > 0 && (
                            <>
                              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', marginBottom: '16px', marginTop: '16px', textTransform: 'uppercase' }}>PENDING LEAVES</div>
                              
                              {mockLeavesData[selectedDate].pending.map((leave, idx) => (
                                <div key={idx} className="d-flex justify-content-between align-items-center mb-4">
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: leave.bg, color: leave.color, fontSize: '12px', fontWeight: 600 }}>
                                      {leave.initials}
                                    </div>
                                    <div>
                                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{leave.name}</div>
                                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{leave.time}</div>
                                    </div>
                                  </div>
                                  <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600 }}>Pending</span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      ) : mockHolidayData[selectedDate] ? (
                        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 text-center" style={{ color: '#94a3b8' }}>
                          <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <BsCalendar3 size={20} />
                          </div>
                          <p style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>{mockHolidayData[selectedDate]}</p>
                          <p style={{ fontSize: '13px' }}>Holiday</p>
                        </div>
                      ) : (
                        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 text-center" style={{ color: '#94a3b8' }}>
                          <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>No leaves on this date</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 text-center" style={{ color: '#94a3b8' }}>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Click a date to see details</p>
                      <p style={{ fontSize: '12px', margin: '0 auto', maxWidth: '200px' }}>Select a date on the calendar to view attendance details</p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Leave Balances Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: '#94a3b8', textTransform: 'uppercase' }}>Leave Balances</div>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex gap-1 me-2">
            <div style={{ width: currentSlide === 0 ? '12px' : '4px', height: '4px', borderRadius: '2px', backgroundColor: currentSlide === 0 ? '#2563eb' : '#e2e8f0', transition: 'all 0.3s' }}></div>
            <div style={{ width: currentSlide === 1 ? '12px' : '4px', height: '4px', borderRadius: '2px', backgroundColor: currentSlide === 1 ? '#2563eb' : '#e2e8f0', transition: 'all 0.3s' }}></div>
            <div style={{ width: currentSlide === 2 ? '12px' : '4px', height: '4px', borderRadius: '2px', backgroundColor: currentSlide === 2 ? '#2563eb' : '#e2e8f0', transition: 'all 0.3s' }}></div>
          </div>
          <button 
            className="btn btn-sm btn-light bg-white border d-flex align-items-center justify-content-center" 
            style={{ width: '28px', height: '28px', color: currentSlide === 0 ? '#cbd5e1' : '#64748b' }}
            disabled={currentSlide === 0}
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          >
            <BsChevronLeft size={12} />
          </button>
          <button 
            className="btn btn-sm btn-light bg-white border d-flex align-items-center justify-content-center" 
            style={{ width: '28px', height: '28px', color: currentSlide >= cards.length - 3 ? '#cbd5e1' : '#64748b' }}
            disabled={currentSlide >= cards.length - 3}
            onClick={() => setCurrentSlide(prev => Math.min(cards.length - 3, prev + 1))}
          >
            <BsChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="overflow-hidden mb-4" style={{ margin: '0 -4px', padding: '0 4px' }}>
        <div 
          className="d-flex" 
          style={{ 
            gap: '24px',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(calc(-${currentSlide * 33.3333}% - ${currentSlide * 8}px))`
          }}
        >
          {cards.map(card => (
            <Card key={card.id} className="shadow-sm border-0 rounded-4 p-4 flex-shrink-0" style={{ backgroundColor: '#ffffff', width: 'calc(33.3333% - 16px)' }}>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: '#94a3b8' }}>{card.title}</div>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: card.iconBg }}>
                {card.icon}
              </div>
            </div>

            {card.badge && (
              <div className="d-inline-block px-2 py-1 rounded-pill mb-3" style={{ backgroundColor: card.badgeBg, border: `1px solid ${card.badgeColor}`, fontSize: '10px', color: card.badgeColor, fontWeight: 600 }}>
                <span style={{ marginRight: '4px' }}>•</span> {card.badge}
              </div>
            )}
            
            <div className="d-flex align-items-baseline mb-1">
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#0f172a', lineHeight: '1' }}>{card.available}</span>
              <span style={{ fontSize: '14px', color: '#94a3b8', marginLeft: '4px' }}>/ {card.total}</span>
            </div>
            
            <div style={{ fontSize: '12px', color: card.subtextColor || '#64748b', fontWeight: card.subtextColor ? 600 : 400, marginBottom: '16px' }}>
              {card.subtext}
            </div>

            <div style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px', overflow: 'hidden', marginBottom: '8px' }}>
              <div style={{ width: `${(card.used / card.total) * 100}%`, height: '100%', backgroundColor: card.barColor }}></div>
            </div>

            <div style={{ fontSize: '11px', color: '#94a3b8' }}>
              <span style={{ color: card.subtextColor || '#64748b', fontWeight: 600 }}>{card.used}</span> used<span style={{ marginLeft: '2px' }}>{card.total} total</span>
            </div>
          </Card>
        ))}
        </div>
      </div>

      {/* History Table Card */}
      <Card className="shadow-sm border-0 rounded-4 overflow-hidden mb-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="d-flex justify-content-between align-items-center p-3 px-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
          <div className="d-flex gap-4">
            {['All', 'Approved', 'Pending', 'Rejected'].map(tab => {
              const isActive = activeTab === tab;
              return (
                <button 
                  key={tab}
                  className="btn btn-link text-decoration-none fw-semibold border-0 position-relative p-0 pb-2" 
                  style={{ color: isActive ? '#2563eb' : '#64748b', fontSize: '13px' }}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {isActive && (
                    <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div>
                  )}
                </button>
              )
            })}
          </div>
          <div className="position-relative" style={{ width: '250px' }}>
            <BsSearch size={14} className="position-absolute text-muted" style={{ top: '10px', left: '14px' }} />
            <input 
              type="text" 
              className="form-control bg-white" 
              placeholder="Search leave history..." 
              style={{ fontSize: '13px', padding: '8px 14px 8px 36px', border: '1px solid #e2e8f0', borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mb-0 align-middle">
            <thead style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
              <tr>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>DATE RANGE</th>
                <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>TYPE</th>
                <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>REASON</th>
                <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>APPLIED DATE</th>
                <th className="border-bottom-0 py-3 px-2 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>STATUS</th>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#ffffff' }}>
              {filteredHistory.map(row => (
                <tr key={row.id}>
                  <td className="px-4 py-3" style={{ borderBottom: '1px dashed #e2e8f0' }}>
                    <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{row.dateRange}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{row.days}</div>
                  </td>
                  <td className="px-2 py-3" style={{ borderBottom: '1px dashed #e2e8f0' }}>
                    <div className="d-inline-flex px-2 py-1 rounded-pill fw-bold" style={{ backgroundColor: row.typeStyle.bg, color: row.typeStyle.color, fontSize: '11px' }}>
                      {row.type}
                    </div>
                  </td>
                  <td className="px-2 py-3" style={{ borderBottom: '1px dashed #e2e8f0' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{row.reason}</span>
                  </td>
                  <td className="px-2 py-3" style={{ borderBottom: '1px dashed #e2e8f0' }}>
                    <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>{row.applied}</span>
                  </td>
                  <td className="px-2 py-3" style={{ borderBottom: '1px dashed #e2e8f0' }}>
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ backgroundColor: row.statusStyle.bg, border: `1px solid ${row.statusStyle.border || row.statusStyle.bg}` }}>
                      <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: row.statusStyle.dot }}></div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: row.statusStyle.color }}>{row.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3" style={{ borderBottom: '1px dashed #e2e8f0' }}>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn btn-sm bg-white fw-semibold" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '11px', padding: '4px 12px', borderRadius: '6px' }}>
                        View
                      </button>
                      {row.status === 'Pending' && (
                        <button className="btn btn-sm bg-white fw-semibold ms-1" style={{ border: '1px solid #e2e8f0', color: '#ef4444', fontSize: '11px', padding: '4px 12px', borderRadius: '6px' }}>
                          Cancel
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

          <div className="d-flex justify-content-between align-items-center p-3 px-4 border-top" style={{ borderColor: '#f1f5f9', backgroundColor: '#ffffff' }}>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Showing 1 to 5 of 24 records</span>
            <div className="d-flex gap-1">
              <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '28px', height: '28px', color: '#64748b' }}>
                <BsChevronLeft size={12} />
              </button>
              <button className="btn btn-sm text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#2563eb', border: '1px solid #2563eb', borderRadius: '6px', width: '28px', height: '28px' }}>1</button>
              <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '28px', height: '28px', color: '#64748b' }}>2</button>
              <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '28px', height: '28px', color: '#64748b' }}>3</button>
              <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '28px', height: '28px', color: '#64748b' }}>
                <BsChevronRight size={12} />
              </button>
            </div>
          </div>
        </Card>
        </>
      )}

      <LeaveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmitRequest} />
      <LeaveDetailDrawer isOpen={!!selectedLeave} onClose={() => setSelectedLeave(null)} leave={selectedLeave} />
      
      {showToast && (
        <div style={{
          position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#1e293b', borderRadius: '8px', padding: '12px 24px',
          display: 'flex', alignItems: 'center', gap: '12px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 1050
        }}>
          <i className="bi bi-check-circle-fill" style={{ color: '#22c55e', fontSize: '18px' }}></i>
          <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>Leave request submitted - Pending approval</span>
        </div>
      )}
    </div>
  );
};

export default LeavePage;
