import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { 
  BsHeart, 
  BsActivity, 
  BsBriefcase, 
  BsSearch,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs';
import { FaBaby, FaBabyCarriage } from 'react-icons/fa';

const LeaveModal = ({ isOpen, onClose }) => {
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

  if (leaveType && fromDate && toDate) {
    if (toDate.includes('14')) {
      previewDays = '06';
      previewStatus = 'exceeds';
    } else {
      previewDays = '03';
      previewStatus = 'ok';
    }
  }

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.4)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1050
    }}>
      <div className="modal-content" style={{
        backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px',
        width: '100%', maxWidth: '451px', position: 'relative',
        boxShadow: '0px 24px 60px 0px rgba(0, 0, 0, 0.18)'
      }}>
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
            <i className={`bi bi-chevron-${isDropdownOpen ? 'up' : 'down'}`} style={{ color: '#0f172a', fontSize: '12px' }}></i>
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
              <i className="bi bi-calendar" style={{ color: '#0f172a', fontSize: '14px' }}></i>
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
              <i className="bi bi-calendar" style={{ color: '#0f172a', fontSize: '14px' }}></i>
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
                After approval: <span style={{ color: '#2563eb', fontWeight: 600 }}>1 day</span> remaining
              </span>
            )}
            {previewStatus === 'exceeds' && (
              <span style={{ fontSize: '13px', color: '#ef4444' }}>
                Exceeds balance by 2 days
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
            onClick={onClose}
            style={{ backgroundColor: '#2563eb', border: 'none', borderRadius: '8px', padding: '10px', color: '#ffffff', fontSize: '14px' }}
          >
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
};

const LeavePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      id: 1,
      title: 'CASUAL LEAVE',
      icon: <BsHeart size={16} style={{ color: '#f59e0b' }} />,
      iconBg: '#fffbeb',
      used: 5,
      total: 10,
      subtext: 'Days remaining this year',
      barColor: '#f59e0b',
      isWarning: false
    },
    {
      id: 2,
      title: 'SICK LEAVE',
      icon: <BsActivity size={16} style={{ color: '#ef4444' }} />,
      iconBg: '#fef2f2',
      used: 8,
      total: 12,
      subtext: 'Low balance — plan ahead',
      barColor: '#ef4444',
      isWarning: true
    },
    {
      id: 3,
      title: 'PAID LEAVE',
      icon: <BsBriefcase size={16} style={{ color: '#3b82f6' }} />,
      iconBg: '#eff6ff',
      used: 5,
      total: 20,
      subtext: 'Days remaining this year',
      barColor: '#3b82f6',
      isWarning: false
    },
    {
      id: 4,
      title: 'MATERNITY LEAVE',
      icon: <FaBaby size={16} style={{ color: '#ec4899' }} />,
      iconBg: '#fdf2f8',
      used: 0,
      total: 84,
      subtext: 'Days available (not yet used)',
      barColor: '#e5e7eb',
      isWarning: false,
      badge: 'For Women only',
      badgeColor: '#ec4899',
      badgeBg: '#fdf2f8',
      bottomTotal: 10
    },
    {
      id: 5,
      title: 'PATERNITY LEAVE',
      icon: <FaBabyCarriage size={16} style={{ color: '#a855f7' }} />,
      iconBg: '#faf5ff',
      used: 0,
      total: 15,
      subtext: 'Days available (not yet used)',
      barColor: '#e5e7eb',
      isWarning: false,
      badge: 'For Men only',
      badgeColor: '#a855f7',
      badgeBg: '#faf5ff',
      bottomTotal: 10
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
    { id: 2, dateRange: 'Nov 02 - Nov 02', days: '1 Day', type: 'Sick', typeStyle: { color: '#be123c', bg: '#ffe4e6' }, reason: 'Medical checkup and follow-up', applied: 'Oct 30, 2023', status: 'Pending', statusStyle: { color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', dot: '#f59e0b' } },
    { id: 3, dateRange: 'Dec 20 - Dec 28', days: '9 Days', type: 'Paid', typeStyle: { color: '#1d4ed8', bg: '#dbeafe' }, reason: 'Winter vacation / Annual leave', applied: 'Sep 15, 2023', status: 'Approved', statusStyle: { color: '#059669', bg: '#f6fdf9', border: '#b2f0d1', dot: '#10b981' } },
    { id: 4, dateRange: 'Aug 14 - Aug 14', days: '1 Day', type: 'Casual', typeStyle: { color: '#b45309', bg: '#fef3c7' }, reason: 'Personal errands and bank work', applied: 'Aug 10, 2023', status: 'Rejected', statusStyle: { color: '#ef4444', bg: '#fff5f5', border: '#fecaca', dot: '#ef4444' } },
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
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-1 text-sm">
              <li className="breadcrumb-item"><span className="text-muted">Dashborad</span></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page">Leave</li>
            </ol>
          </nav>
          <h3 className="fw-bold mb-1 text-dark">Leave Management</h3>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>Applications, approvals, balances and leave history</span>
        </div>
        <div className="d-flex gap-2">
          <button onClick={() => setIsModalOpen(true)} className="btn text-white fw-semibold rounded-2" style={{ backgroundColor: '#2b5cff', fontSize: '13px', padding: '8px 18px' }}>
            Apply for Leave
          </button>
          <button className="btn bg-white fw-semibold rounded-2" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', padding: '8px 18px' }}>
            View History
          </button>
        </div>
      </div>

      {/* Leave Balances Header & Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: '#94a3b8' }}>LEAVE BALANCES</span>
        
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex gap-1">
            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
              <div 
                key={idx} 
                className="rounded-pill" 
                style={{ 
                  width: currentSlide === idx ? '16px' : '6px', 
                  height: '6px', 
                  backgroundColor: currentSlide === idx ? '#2b5cff' : '#e2e8f0', 
                  transition: 'width 0.3s' 
                }}
              />
            ))}
          </div>
          
          <div className="d-flex gap-2">
            <button 
              className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center p-0" 
              style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', borderRadius: '6px', color: currentSlide === 0 ? '#cbd5e1' : '#64748b' }}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <BsChevronLeft size={12} />
            </button>
            <button 
              className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center p-0" 
              style={{ width: '28px', height: '28px', border: '1px solid #e2e8f0', borderRadius: '6px', color: currentSlide === maxSlide ? '#cbd5e1' : '#64748b' }}
              onClick={handleNext}
              disabled={currentSlide === maxSlide}
            >
              <BsChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Leave Balances Carousel Container */}
      <div className="overflow-hidden mb-5">
        <div 
          className="d-flex transition-transform gap-4" 
          style={{ 
            transform: `translateX(-${currentSlide * 33.33}%)`, 
            transition: 'transform 0.5s ease-in-out',
            width: `${(cards.length / 3) * 100}%` 
          }}
        >
          {cards.map(card => {
            const available = card.total - card.used;
            const progressPercent = (card.used / card.total) * 100;

            return (
              <div key={card.id} style={{ width: `${100 / cards.length}%` }}>
                <Card className="p-4 shadow-sm border-0 h-100 rounded-4">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h6 className="mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', color: '#94a3b8' }}>{card.title}</h6>
                      {card.badge && (
                        <div className="d-inline-flex px-2 py-1 rounded-pill mb-2 border" style={{ backgroundColor: card.badgeBg, borderColor: card.badgeColor, color: card.badgeColor, fontSize: '11px', fontWeight: 600 }}>
                          <span className="me-1">•</span> {card.badge}
                        </div>
                      )}
                    </div>
                    <div className="rounded-3 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: card.iconBg }}>
                      {card.icon}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-baseline mb-1">
                      <h2 className="fw-bold mb-0 text-dark" style={{ fontSize: '32px' }}>{available}</h2>
                      <span className="ms-1" style={{ fontSize: '14px', color: '#94a3b8' }}>/ {card.total}</span>
                    </div>
                    <div className="fw-semibold" style={{ fontSize: '12px', color: card.isWarning ? '#ef4444' : '#64748b' }}>
                      {card.subtext}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="progress mb-2 bg-light" style={{ height: '4px', borderRadius: '4px' }}>
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${progressPercent}%`, backgroundColor: card.barColor, borderRadius: '4px' }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500 }}>
                      <span>{card.used} used</span>
                      <span>{card.bottomTotal || card.total} total</span>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* History Table */}
      <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
        
        {/* Table Header Controls */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom" style={{ borderColor: '#f1f5f9' }}>
          
          {/* Tabs */}
          <div className="d-flex px-2">
            {['All', 'Approved', 'Pending', 'Rejected'].map(tab => (
              <button 
                key={tab}
                className="btn btn-link text-decoration-none fw-semibold border-0 position-relative p-0 me-4 pb-2" 
                style={{ color: activeTab === tab ? '#2b5cff' : '#94a3b8', fontSize: '13px' }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', backgroundColor: '#2b5cff', borderRadius: '2px' }}></div>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="position-relative" style={{ width: '280px' }}>
            <BsSearch size={14} className="position-absolute text-muted" style={{ top: '10px', left: '14px' }} />
            <input 
              type="text" 
              className="form-control bg-white" 
              placeholder="Search leave history..." 
              style={{ fontSize: '13px', padding: '8px 14px 8px 36px', borderColor: '#e2e8f0', borderRadius: '6px', width: '100%' }}
            />
          </div>
        </div>

        {/* Table Content */}
        <div className="table-responsive">
          <table className="table mb-0 align-middle">
            <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
              <tr>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b', whiteSpace: 'nowrap' }}>DATE RANGE</th>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>TYPE</th>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>REASON</th>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b', whiteSpace: 'nowrap' }}>APPLIED DATE</th>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>STATUS</th>
                <th className="border-bottom-0 py-3 px-4 fw-semibold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
              {filteredHistory.map(row => (
                <tr key={row.id}>
                  <td className="px-4 py-4" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                    <div className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>{row.dateRange}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{row.days}</div>
                  </td>
                  <td className="px-4 py-4" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <div className="d-inline-flex px-3 py-1 rounded-2 fw-bold" style={{ backgroundColor: row.typeStyle.bg, color: row.typeStyle.color, fontSize: '11px' }}>
                      {row.type}
                    </div>
                  </td>
                  <td className="px-4 py-4" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>{row.reason}</span>
                  </td>
                  <td className="px-4 py-4" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                    <span style={{ fontSize: '13px', color: '#64748b', fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace' }}>{row.applied}</span>
                  </td>
                  <td className="px-4 py-4" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ border: `1px solid ${row.statusStyle.border}`, backgroundColor: row.statusStyle.bg }}>
                      <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: row.statusStyle.dot }}></div>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: row.statusStyle.color }}>{row.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-light bg-white fw-semibold" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', color: '#64748b', fontSize: '11px', padding: '4px 12px' }}>
                        View
                      </button>
                      {row.status === 'Pending' && (
                        <button className="btn btn-sm btn-light bg-white fw-semibold ms-2" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', color: '#ef4444', fontSize: '11px', padding: '4px 12px' }}>
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

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ borderColor: '#f1f5f9' }}>
          <span style={{ fontSize: '12px', color: '#64748b' }}>Showing 1 to 5 of 24 records</span>
          <div className="d-flex gap-1">
            <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px' }}>&larr;</button>
            <button className="btn btn-sm text-white" style={{ backgroundColor: '#2b5cff', border: '1px solid #2b5cff', borderRadius: '6px', width: '32px', height: '32px' }}>1</button>
            <button className="btn btn-sm btn-light bg-white fw-medium" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#1e293b' }}>2</button>
            <button className="btn btn-sm btn-light bg-white fw-medium" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#1e293b' }}>3</button>
            <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px' }}>&rarr;</button>
          </div>
        </div>
      </Card>
      <LeaveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LeavePage;
