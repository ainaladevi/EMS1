import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { 
  BsSearch, 
  BsCalendar4, 
  BsThreeDots, 
  BsClockHistory, 
  BsEye, 
  BsTrash,
  BsHouseDoor,
  BsHouseDoorFill,
  BsActivity,
  BsPencilSquare,
  BsCalendarDate
} from 'react-icons/bs';

const AttendanceOverview = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [activeTab, setActiveTab] = useState('Today');
  const [monthlyTab, setMonthlyTab] = useState('Team History');

  const overtimeRecords = [
    { id: 1, name: 'Meera Nair', dept: 'Engineering', initials: 'MN', color: '#c026d3', bg: '#fae8ff', date: 'Apr 22', regHrs: '9h', otHrs: '1h 30m', totalHrs: '10h 30m', reason: 'Sprint deadline' },
    { id: 2, name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#9333ea', bg: '#f3e8ff', date: 'Apr 21', regHrs: '9h', otHrs: '2h', totalHrs: '11h', reason: 'Release preparation' },
    { id: 3, name: 'Srinivas K.', dept: 'Engineering', initials: 'SK', color: '#ea580c', bg: '#ffedd5', date: 'Apr 20', regHrs: '9h', otHrs: '1h', totalHrs: '10h', reason: 'Bug fixes' },
    { id: 4, name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#dc2626', bg: '#fee2e2', date: 'Apr 19', regHrs: '8h', otHrs: '3h', totalHrs: '11h', reason: 'Feature development' },
    { id: 5, name: 'Priya Sharma', dept: 'Product', initials: 'PS', color: '#2563eb', bg: '#dbeafe', date: 'Apr 18', regHrs: '9h', otHrs: '1h 45m', totalHrs: '10h 45m', reason: 'Product review' },
    { id: 6, name: 'Kiran Patel', dept: 'HR', initials: 'KP', color: '#7c3aed', bg: '#ede9fe', date: 'Apr 17', regHrs: '9h', otHrs: '0h 30m', totalHrs: '9h 30m', reason: 'Onboarding preparation' }
  ];

  const regularizationRequests = [
    { id: 1, name: 'Ananya Reddy', dept: 'Design', initials: 'AR', color: '#4f46e5', bg: '#e0e7ff', date: 'Apr 21', missed: 'Both', reason: 'Phone died during travel', reqDate: 'Apr 21', status: 'Pending' },
    { id: 2, name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#dc2626', bg: '#fee2e2', date: 'Apr 20', missed: 'Check-out', reason: 'Emergency - left suddenly', reqDate: 'Apr 21', status: 'Pending' },
    { id: 3, name: 'Suresh Babu', dept: 'Engineering', initials: 'SB', color: '#ea580c', bg: '#ffedd5', date: 'Apr 19', missed: 'Check-in', reason: 'Forgot to tap in', reqDate: 'Apr 20', status: 'Approved' },
    { id: 4, name: 'Kiran Patel', dept: 'HR', initials: 'KP', color: '#7c3aed', bg: '#ede9fe', date: 'Apr 18', missed: 'Check-in', reason: 'System error at gate', reqDate: 'Apr 19', status: 'Approved' },
    { id: 5, name: 'Meera Nair', dept: 'Engineering', initials: 'MN', color: '#c026d3', bg: '#fae8ff', date: 'Apr 17', missed: 'Check-out', reason: 'Working remotely, forgot', reqDate: 'Apr 18', status: 'Rejected' }
  ];

  const kpis = [
    { title: 'PRESENT TODAY', value: '18', sub: 'of 24 employees', color: '#22c55e' },
    { title: 'ABSENT TODAY', value: '3', sub: '2 on approved leave', color: '#ef4444' },
    { title: 'LATE ARRIVALS', value: '2', sub: 'after 9:30 AM', color: '#f59e0b' },
    { title: 'WORK FROM HOME', value: '5', sub: 'remote today', color: '#3b82f6' },
    { title: 'OVERTIME (HRS)', value: '14', sub: 'this week', color: '#a855f7' }
  ];

  const employees = [
    {
      id: 1, name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#9333ea', bg: '#f3e8ff',
      checkIn: '09:02', checkInStatus: 'on-time', checkOut: '18:15', location: 'Office', workHrs: '9h 13m', status: 'Present'
    },
    {
      id: 2, name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#dc2626', bg: '#fee2e2',
      checkIn: '09:45', checkInStatus: 'late', checkOut: '18:30', location: 'Office', workHrs: '8h 45m', status: 'Late'
    },
    {
      id: 3, name: 'Srinivas Kandagatla', dept: 'Engineering', initials: 'SK', color: '#ea580c', bg: '#ffedd5',
      checkIn: '08:55', checkInStatus: 'on-time', checkOut: '18:05', location: 'WFH', workHrs: '9h 10m', status: 'Wfh'
    },
    {
      id: 4, name: 'Priya Sharma', dept: 'Product', initials: 'PS', color: '#2563eb', bg: '#dbeafe',
      checkIn: '09:00', checkInStatus: 'on-time', checkOut: '18:00', location: 'Office', workHrs: '9h 0m', status: 'Present'
    },
    {
      id: 5, name: 'Ananya Reddy', dept: 'Design', initials: 'AR', color: '#4f46e5', bg: '#e0e7ff',
      checkIn: '-', checkInStatus: 'none', checkOut: '-', location: '-', workHrs: '-', status: 'Absent'
    },
    {
      id: 6, name: 'Kiran Patel', dept: 'HR', initials: 'KP', color: '#7c3aed', bg: '#ede9fe',
      checkIn: '09:10', checkInStatus: 'on-time', checkOut: '18:20', location: 'Office', workHrs: '9h 10m', status: 'Present'
    },
    {
      id: 7, name: 'Meera Nair', dept: 'Engineering', initials: 'MN', color: '#c026d3', bg: '#fae8ff',
      checkIn: '09:00', checkInStatus: 'on-time', checkOut: '19:30', location: 'WFH', workHrs: '10h 30m', status: 'Wfh'
    },
    {
      id: 8, name: 'Suresh Babu', dept: 'Engineering', initials: 'SB', color: '#ea580c', bg: '#ffedd5',
      checkIn: '09:03', checkInStatus: 'on-time', checkOut: '18:05', location: 'Office', workHrs: '9h 2m', status: 'Present'
    }
  ];

  const historyRecords = [
    { id: 1, date: 'Apr 21', name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#9333ea', bg: '#f3e8ff', checkIn: '09:01', checkInStatus: 'on-time', checkOut: '18:10', location: 'Office', workHrs: '9h 9m', status: 'Present' },
    { id: 2, date: 'Apr 21', name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#dc2626', bg: '#fee2e2', checkIn: '10:05', checkInStatus: 'late', checkOut: '18:00', location: 'Office', workHrs: '7h 55m', status: 'Late' },
    { id: 3, date: 'Apr 20', name: 'Srinivas K.', dept: 'Engineering', initials: 'SK', color: '#ea580c', bg: '#ffedd5', checkIn: '09:00', checkInStatus: 'on-time', checkOut: '18:00', location: 'WFH', workHrs: '9h 0m', status: 'Wfh' },
    { id: 4, date: 'Apr 20', name: 'Priya Sharma', dept: 'Product', initials: 'PS', color: '#2563eb', bg: '#dbeafe', checkIn: '-', checkInStatus: 'none', checkOut: '-', location: '-', workHrs: '-', status: 'Absent' },
    { id: 5, date: 'Apr 19', name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#9333ea', bg: '#f3e8ff', checkIn: '08:58', checkInStatus: 'on-time', checkOut: '18:15', location: 'Office', workHrs: '9h 17m', status: 'Present' },
    { id: 6, date: 'Apr 19', name: 'Meera Nair', dept: 'Engineering', initials: 'MN', color: '#c026d3', bg: '#fae8ff', checkIn: '09:00', checkInStatus: 'on-time', checkOut: '20:00', location: 'Office', workHrs: '11h 0m', status: 'Present' }
  ];

  const monthlySummaryData = [
    { id: 1, name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#9333ea', bg: '#f3e8ff', present: '17', absent: '1', late: '0', wfh: '3', overtime: '4h', percentage: 94 },
    { id: 2, name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#dc2626', bg: '#fee2e2', present: '15', absent: '2', late: '3', wfh: '1', overtime: '8h', percentage: 83 },
    { id: 3, name: 'Srinivas K.', dept: 'Engineering', initials: 'SK', color: '#ea580c', bg: '#ffedd5', present: '16', absent: '1', late: '1', wfh: '4', overtime: '2h', percentage: 89 },
    { id: 4, name: 'Priya Sharma', dept: 'Product', initials: 'PS', color: '#2563eb', bg: '#dbeafe', present: '18', absent: '0', late: '1', wfh: '3', overtime: '1h 45m', percentage: 100 },
    { id: 5, name: 'Ananya Reddy', dept: 'Design', initials: 'AR', color: '#4f46e5', bg: '#e0e7ff', present: '14', absent: '4', late: '2', wfh: '1', overtime: '0h', percentage: 78 },
    { id: 6, name: 'Kiran Patel', dept: 'HR', initials: 'KP', color: '#7c3aed', bg: '#ede9fe', present: '16', absent: '2', late: '0', wfh: '2', overtime: '0h 30m', percentage: 89 }
  ];

  const myHistoryRecords = [
    { id: 1, date: 'Oct 24, 2023', checkIn: '08:52 AM', checkOut: '05:45 PM', totalHrs: '08h 53m', status: 'Present', type: 'WHF' },
    { id: 2, date: 'Oct 23, 2023', checkIn: '09:10 AM', checkOut: '06:15 PM', totalHrs: '09h 05m', status: 'Present', type: 'Office' },
    { id: 3, date: 'Oct 20, 2023', checkIn: '10:05 AM', checkOut: '05:30 PM', totalHrs: '07h 25m', status: 'Late', badge: '+1h 05m', type: 'WHF' },
    { id: 4, date: 'Oct 19, 2023', checkIn: '08:45 AM', checkOut: '06:30 PM', totalHrs: '09h 45m', status: 'Present', type: 'Office' },
    { id: 5, date: 'Oct 18, 2023', checkIn: '08:30 AM', checkOut: '08:00 PM', totalHrs: '11h 30m', status: 'Overtime', badge: '+2h 30m', type: 'WHF' }
  ];


  const getStatusBadge = (status) => {
    switch (status) {
      case 'Present':
        return (
          <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
            <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#22c55e' }}></div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#16a34a' }}>Present</span>
          </div>
        );
      case 'Late':
        return (
          <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ border: '1px solid #fef08a', backgroundColor: '#fefce8' }}>
            <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#eab308' }}></div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#ca8a04' }}>Late</span>
          </div>
        );
      case 'Wfh':
        return (
          <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ border: '1px solid #bfdbfe', backgroundColor: '#eff6ff' }}>
            <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6' }}></div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#2563eb' }}>Wfh</span>
          </div>
        );
      case 'Absent':
        return (
          <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ border: '1px solid #fecaca', backgroundColor: '#fef2f2' }}>
            <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#ef4444' }}></div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#dc2626' }}>Absent</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getCalendarDayStyle = (day) => {
    const present = [1, 2, 6, 7, 13, 14, 15, 16, 20, 21, 22, 27, 28, 29];
    const absent = [8, 9];
    const wfh = [10, 17, 24];
    const late = [23];
    const selected = [30];

    const baseStyle = { width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, borderRadius: '6px', margin: 'auto' };

    if (selected.includes(day)) return { ...baseStyle, backgroundColor: '#ffffff', color: '#2b5cff', border: '1.5px solid #2b5cff' };
    if (present.includes(day)) return { ...baseStyle, backgroundColor: '#f0fdf4', color: '#16a34a' };
    if (absent.includes(day)) return { ...baseStyle, backgroundColor: '#fef2f2', color: '#dc2626' };
    if (wfh.includes(day)) return { ...baseStyle, backgroundColor: '#eff6ff', color: '#2563eb' };
    if (late.includes(day)) return { ...baseStyle, backgroundColor: '#fffbeb', color: '#d97706' };
    
    return { ...baseStyle, color: '#cbd5e1' };
  };

  const aprilDays = [null, null, null, ...Array.from({length: 30}, (_, i) => i + 1)];

  const parseHrsMins = (str) => {
    if (str === '-') return <span className="fw-bold text-dark">-</span>;
    const parts = str.split(' ');
    return (
      <span>
        <span className="fw-bold text-dark">{parts[0]}</span> <span className="text-dark">{parts[1]}</span>
      </span>
    );
  };

  return (
    <div className="p-4 mx-auto" style={{ maxWidth: '1200px' }}>

      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-1 text-sm">
            <li className="breadcrumb-item"><span className="text-muted">Dashboard</span></li>
            <li className="breadcrumb-item active fw-medium" aria-current="page">Attendance</li>
          </ol>
        </nav>
        <h3 className="fw-bold mb-1 text-dark">Attendance Overview</h3>
        <span style={{ fontSize: '13px', color: '#94a3b8' }}>Daily check-ins, overtime, regularization and monthly summaries</span>
      </div>


      <div className="row g-3 mb-4">
        {kpis.map((kpi, index) => (
          <div className="col" key={index}>
            <Card className="p-3 shadow-sm border-0 h-100 rounded-3">
              <h6 className="mb-2" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px', color: '#94a3b8' }}>{kpi.title}</h6>
              <h3 className="fw-bold mb-1" style={{ color: kpi.color, fontSize: '24px' }}>{kpi.value}</h3>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>{kpi.sub}</span>
            </Card>
          </div>
        ))}
      </div>


      <div className="d-flex flex-wrap gap-2 mb-4">
        <button 
          onClick={() => setActiveTab('Today')}
          className={`btn fw-semibold d-flex align-items-center gap-2 rounded-2 ${activeTab === 'Today' ? 'text-white' : 'bg-white'}`} 
          style={{ backgroundColor: activeTab === 'Today' ? '#2b5cff' : 'transparent', border: activeTab === 'Today' ? 'none' : '1px solid #e2e8f0', color: activeTab === 'Today' ? '#ffffff' : '#64748b', fontSize: '13px', padding: '8px 16px' }}
        >
          <BsCalendar4 size={14} /> Today's Records
          <span className={`badge rounded-pill ${activeTab === 'Today' ? '' : 'bg-light text-muted'}`} style={{ backgroundColor: activeTab === 'Today' ? 'rgba(255,255,255,0.2)' : '', fontWeight: 500 }}>18</span>
        </button>
        <button 
          onClick={() => setActiveTab('Overtime')}
          className={`btn fw-semibold d-flex align-items-center gap-2 rounded-2 ${activeTab === 'Overtime' ? 'text-white' : 'bg-white'}`} 
          style={{ backgroundColor: activeTab === 'Overtime' ? '#2b5cff' : 'transparent', border: activeTab === 'Overtime' ? 'none' : '1px solid #e2e8f0', color: activeTab === 'Overtime' ? '#ffffff' : '#64748b', fontSize: '13px', padding: '8px 16px' }}
        >
          <BsActivity size={16} /> Overtime
          <span className={`badge rounded-pill ${activeTab === 'Overtime' ? '' : 'bg-light text-muted'}`} style={{ backgroundColor: activeTab === 'Overtime' ? 'rgba(255,255,255,0.2)' : '', fontWeight: 500 }}>8</span>
        </button>
        <button 
          onClick={() => setActiveTab('Regularization')}
          className={`btn fw-semibold d-flex align-items-center gap-2 rounded-2 ${activeTab === 'Regularization' ? 'text-white' : 'bg-white'}`} 
          style={{ backgroundColor: activeTab === 'Regularization' ? '#2b5cff' : 'transparent', border: activeTab === 'Regularization' ? 'none' : '1px solid #e2e8f0', color: activeTab === 'Regularization' ? '#ffffff' : '#64748b', fontSize: '13px', padding: '8px 16px' }}
        >
          <BsPencilSquare size={16} /> Regularization
          <span className={`badge rounded-pill ${activeTab === 'Regularization' ? '' : 'bg-light text-muted'}`} style={{ backgroundColor: activeTab === 'Regularization' ? 'rgba(255,255,255,0.2)' : '', fontWeight: 500 }}>5</span>
        </button>
        <button 
          onClick={() => setActiveTab('History')}
          className={`btn fw-semibold d-flex align-items-center gap-2 rounded-2 ${activeTab === 'History' ? 'text-white' : 'bg-white'}`} 
          style={{ backgroundColor: activeTab === 'History' ? '#2b5cff' : 'transparent', border: activeTab === 'History' ? 'none' : '1px solid #e2e8f0', color: activeTab === 'History' ? '#ffffff' : '#64748b', fontSize: '13px', padding: '8px 16px' }}
        >
          <BsClockHistory size={15} /> History
        </button>
        <button 
          onClick={() => setActiveTab('Monthly Summary')}
          className={`btn fw-semibold d-flex align-items-center gap-2 rounded-2 ${activeTab === 'Monthly Summary' ? 'text-white' : 'bg-white'}`} 
          style={{ backgroundColor: activeTab === 'Monthly Summary' ? '#2b5cff' : 'transparent', border: activeTab === 'Monthly Summary' ? 'none' : '1px solid #e2e8f0', color: activeTab === 'Monthly Summary' ? '#ffffff' : '#64748b', fontSize: '13px', padding: '8px 16px' }}
        >
          <BsCalendarDate size={16} /> Monthly Summary
        </button>
      </div>


      {activeTab !== 'Monthly Summary' && (
        <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
          {activeTab === 'Today' && (
          <>

        <div className="d-flex align-items-center justify-content-between p-3 border-bottom" style={{ borderColor: '#f1f5f9' }}>
          <div className="position-relative" style={{ width: '400px' }}>
            <BsSearch size={14} className="position-absolute text-muted" style={{ top: '12px', left: '14px' }} />
            <input 
              type="text" 
              className="form-control bg-white" 
              placeholder="Search employees..." 
              style={{ fontSize: '13px', padding: '8px 14px 8px 36px', borderColor: '#e2e8f0', borderRadius: '6px' }}
            />
          </div>
          <div className="d-flex gap-3">
            <div className="position-relative">
              <input 
                type="text" 
                className="form-control bg-white text-dark fw-medium" 
                value="22 - 04 - 2026" 
                readOnly
                style={{ fontSize: '13px', padding: '8px 36px 8px 14px', borderColor: '#e2e8f0', borderRadius: '6px', width: '140px' }}
              />
              <BsCalendar4 size={14} className="position-absolute text-muted" style={{ top: '12px', right: '14px' }} />
            </div>
            <select className="form-select bg-white text-dark" style={{ fontSize: '13px', borderColor: '#e2e8f0', borderRadius: '6px', width: '120px' }}>
              <option>All status</option>
            </select>
            <select className="form-select bg-white text-dark" style={{ fontSize: '13px', borderColor: '#e2e8f0', borderRadius: '6px', width: '150px' }}>
              <option>All departments</option>
            </select>
          </div>
        </div>


        <div className="table-responsive">
          <table className="table mb-0 align-middle">
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Employee</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Check-in</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Check-out</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Location</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Working hrs</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Status</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold text-center" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Action</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                           style={{ width: '32px', height: '32px', backgroundColor: emp.bg, color: emp.color, fontSize: '12px' }}>
                        {emp.initials}
                      </div>
                      <div>
                        <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{emp.name}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>{emp.dept}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <span className="fw-medium" style={{ fontSize: '13px', color: emp.checkInStatus === 'late' ? '#d97706' : emp.checkInStatus === 'on-time' ? '#16a34a' : '#1e293b' }}>
                      {emp.checkIn}
                    </span>
                  </td>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <span className="text-dark" style={{ fontSize: '13px' }}>{emp.checkOut}</span>
                  </td>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                    {emp.location !== '-' && (
                      <div className="d-flex align-items-center gap-2">
                        {emp.location === 'Office' ? (
                          <BsHouseDoorFill size={14} style={{ color: '#64748b' }} />
                        ) : (
                          <BsHouseDoor size={14} style={{ color: '#3b82f6' }} />
                        )}
                        <span style={{ fontSize: '13px', color: emp.location === 'WFH' ? '#3b82f6' : '#64748b' }}>{emp.location}</span>
                      </div>
                    )}
                    {emp.location === '-' && <span style={{ fontSize: '13px', color: '#1e293b' }}>-</span>}
                  </td>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                    {parseHrsMins(emp.workHrs)}
                  </td>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                    {getStatusBadge(emp.status)}
                  </td>
                  <td className="px-4 py-3 text-center position-relative" style={{ borderBottom: '1px solid #f8fafc' }}>
                    <button
                      className="btn btn-sm btn-light bg-transparent p-1"
                      style={{ border: '1px solid #e2e8f0', borderRadius: '6px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdownId(openDropdownId === emp.id ? null : emp.id);
                      }}
                    >
                      <BsThreeDots size={16} className="text-muted" />
                    </button>
                    
                    {openDropdownId === emp.id && (
                      <>
                        <div 
                          className="position-fixed top-0 start-0 w-100 h-100 z-2" 
                          onClick={() => setOpenDropdownId(null)}
                        />
                        <div className="position-absolute bg-white border py-2 rounded-3 text-start z-3" 
                             style={{ right: '20px', top: '70%', fontSize: '13px', minWidth: '160px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
                          <button 
                            className="d-flex align-items-center gap-2 px-3 py-2 text-dark border-0 bg-transparent w-100 text-start dropdown-item hover-bg-light"
                            onClick={() => {
                              setSelectedRecord(emp);
                              setOpenDropdownId(null);
                            }}
                          >
                            <BsEye size={14} className="text-muted" /> View detail
                          </button>
                          <button className="d-flex align-items-center gap-2 px-3 py-2 text-danger border-0 bg-transparent w-100 text-start dropdown-item hover-bg-light">
                            <BsTrash size={14} /> Delete
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
        )}

        {activeTab === 'Overtime' && (
          <>
            <div className="d-flex align-items-center justify-content-between p-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '14px' }}>Overtime records</h6>
              <span className="badge rounded-pill bg-light text-muted fw-semibold" style={{ padding: '6px 12px', fontSize: '11px', border: '1px solid #f1f5f9' }}>8 employees</span>
            </div>
            
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead style={{ backgroundColor: '#f8fafc' }}>
                  <tr>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Employee</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Date</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Regular hrs</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Overtime hrs</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Total hrs</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Reason</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold text-end" style={{ fontSize: '11px', letterSpacing: '0.5px', width: '60px', backgroundColor: '#f8fafc' }}></th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
                  {overtimeRecords.map(record => (
                    <tr key={record.id}>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                               style={{ width: '32px', height: '32px', backgroundColor: record.bg, color: record.color, fontSize: '12px' }}>
                            {record.initials}
                          </div>
                          <div>
                            <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{record.name}</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>{record.dept}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {record.date}
                      </td>
                      <td className="px-4 py-3 text-dark fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {record.regHrs}
                      </td>
                      <td className="px-4 py-3 fw-semibold" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', color: '#8b5cf6' }}>
                        {record.otHrs}
                      </td>
                      <td className="px-4 py-3 fw-bold text-dark" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {record.totalHrs}
                      </td>
                      <td className="px-4 py-3 text-muted" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {record.reason}
                      </td>
                      <td className="px-4 py-3 text-end" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <button className="btn btn-sm btn-light bg-transparent p-1" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', color: '#64748b' }}>
                          <BsEye size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'Regularization' && (
          <>
            <div className="d-flex align-items-center justify-content-between p-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '14px' }}>Regularization requests</h6>
              <span className="badge rounded-pill bg-light text-muted fw-semibold" style={{ padding: '6px 12px', fontSize: '11px', border: '1px solid #f1f5f9' }}>5 pending</span>
            </div>
            
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead style={{ backgroundColor: '#f8fafc' }}>
                  <tr>
                    <th className="border-bottom-0 py-3 px-3" style={{ width: '40px', backgroundColor: '#f8fafc' }}>
                      <input className="form-check-input" type="checkbox" style={{ borderColor: '#cbd5e1' }} />
                    </th>
                    <th className="border-bottom-0 py-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Employee</th>
                    <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Date</th>
                    <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Missed</th>
                    <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Reason</th>
                    <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc', whiteSpace: 'nowrap' }}>Requested on</th>
                    <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Status</th>
                    <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold text-end" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Actions</th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
                  {regularizationRequests.map(record => (
                    <tr key={record.id}>
                      <td className="px-3 py-3" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                        <input className="form-check-input" type="checkbox" style={{ borderColor: '#cbd5e1' }} />
                      </td>
                      <td className="py-3" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                               style={{ width: '32px', height: '32px', backgroundColor: record.bg, color: record.color, fontSize: '12px' }}>
                            {record.initials}
                          </div>
                          <div>
                            <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{record.name}</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>{record.dept}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-muted" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', whiteSpace: 'nowrap' }}>
                        {record.date}
                      </td>
                      <td className="px-3 py-3" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                        <div className="d-inline-flex align-items-center gap-2 rounded-pill" style={{ backgroundColor: '#fef2f2', border: '1px solid #fee2e2', padding: '4px 10px' }}>
                          <div className="rounded-circle" style={{ width: '4px', height: '4px', backgroundColor: '#ef4444' }}></div>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: '#b91c1c' }}>{record.missed}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-dark" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {record.reason}
                      </td>
                      <td className="px-3 py-3 text-muted" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', whiteSpace: 'nowrap' }}>
                        {record.reqDate}
                      </td>
                      <td className="px-3 py-3" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                        {record.status === 'Pending' && (
                          <div className="d-inline-flex align-items-center gap-2 rounded-pill" style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '4px 10px' }}>
                            <div className="rounded-circle" style={{ width: '4px', height: '4px', backgroundColor: '#f59e0b' }}></div>
                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#ca8a04' }}>Pending</span>
                          </div>
                        )}
                        {record.status === 'Approved' && (
                          <div className="d-inline-flex align-items-center gap-2 rounded-pill" style={{ backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', padding: '4px 10px' }}>
                            <div className="rounded-circle" style={{ width: '4px', height: '4px', backgroundColor: '#22c55e' }}></div>
                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#16a34a' }}>Approved</span>
                          </div>
                        )}
                        {record.status === 'Rejected' && (
                          <div className="d-inline-flex align-items-center gap-2 rounded-pill" style={{ backgroundColor: '#fef2f2', border: '1px solid #fee2e2', padding: '4px 10px' }}>
                            <div className="rounded-circle" style={{ width: '4px', height: '4px', backgroundColor: '#ef4444' }}></div>
                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#dc2626' }}>Rejected</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-3 text-end" style={{ borderBottom: '1px solid #f8fafc', whiteSpace: 'nowrap' }}>
                        {record.status === 'Pending' ? (
                          <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-sm fw-semibold" style={{ backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', color: '#16a34a', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>Approve</button>
                            <button className="btn btn-sm fw-semibold" style={{ backgroundColor: '#fef2f2', border: '1px solid #fee2e2', color: '#dc2626', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>Reject</button>
                          </div>
                        ) : (
                          <button className="btn btn-sm fw-semibold" style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe', color: '#2b5cff', fontSize: '12px', padding: '4px 16px', borderRadius: '6px' }}>View</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'History' && (
          <>
            <div className="d-flex align-items-center justify-content-between p-3 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <div className="position-relative" style={{ width: '400px' }}>
                <BsSearch size={14} className="position-absolute text-muted" style={{ top: '12px', left: '14px' }} />
                <input 
                  type="text" 
                  className="form-control bg-white" 
                  placeholder="Search employee..." 
                  style={{ fontSize: '13px', padding: '8px 14px 8px 36px', borderColor: '#e2e8f0', borderRadius: '6px' }}
                />
              </div>
              <div className="d-flex gap-3">
                <select className="form-select bg-white text-dark" style={{ fontSize: '13px', borderColor: '#e2e8f0', borderRadius: '6px', width: '150px' }}>
                  <option>All employees</option>
                </select>
                <div className="position-relative">
                  <input 
                    type="text" 
                    className="form-control bg-white text-dark fw-medium" 
                    value="22 - 04 - 2026" 
                    readOnly
                    style={{ fontSize: '13px', padding: '8px 36px 8px 14px', borderColor: '#e2e8f0', borderRadius: '6px', width: '140px' }}
                  />
                  <BsCalendar4 size={14} className="position-absolute text-muted" style={{ top: '12px', right: '14px' }} />
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead style={{ backgroundColor: '#f8fafc' }}>
                  <tr>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Date</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Employee</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Check-in</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Check-out</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Location</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Working hrs</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Status</th>
                    <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold text-center" style={{ fontSize: '11px', letterSpacing: '0.5px', backgroundColor: '#f8fafc' }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
                  {historyRecords.map(record => (
                    <tr key={record.id}>
                      <td className="px-4 py-3 text-muted" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {record.date}
                      </td>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                               style={{ width: '32px', height: '32px', backgroundColor: record.bg, color: record.color, fontSize: '12px' }}>
                            {record.initials}
                          </div>
                          <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{record.name}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <span className="fw-medium" style={{ fontSize: '13px', color: record.checkInStatus === 'late' ? '#d97706' : record.checkInStatus === 'on-time' ? '#16a34a' : '#1e293b' }}>
                          {record.checkIn}
                        </span>
                      </td>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <span className="text-dark" style={{ fontSize: '13px' }}>{record.checkOut}</span>
                      </td>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        {record.location !== '-' && (
                          <span style={{ fontSize: '13px', color: record.location === 'WFH' ? '#3b82f6' : '#64748b' }}>{record.location}</span>
                        )}
                        {record.location === '-' && <span style={{ fontSize: '13px', color: '#1e293b' }}>-</span>}
                      </td>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>
                        {parseHrsMins(record.workHrs)}
                      </td>
                      <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                        {getStatusBadge(record.status)}
                      </td>
                      <td className="px-4 py-3 text-center" style={{ borderBottom: '1px solid #f8fafc' }}>
                        <button className="btn btn-sm btn-light bg-transparent p-1" style={{ border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                          <BsEye size={14} className="text-muted" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}


        <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ borderColor: '#f1f5f9' }}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Showing 1-8 of 18</span>
          <div className="d-flex gap-1">
            <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px' }}>&larr;</button>
            <button className="btn btn-sm text-white" style={{ backgroundColor: '#2b5cff', border: '1px solid #2b5cff', borderRadius: '6px', width: '32px', height: '32px' }}>1</button>
            <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>2</button>
            <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px', color: '#64748b' }}>3</button>
            <button className="btn btn-sm btn-light bg-white" style={{ border: '1px solid #e2e8f0', borderRadius: '6px', width: '32px', height: '32px' }}>&rarr;</button>
          </div>
        </div>
      </Card>
      )}


      {selectedRecord && (
        <>
          <div 
            className="position-fixed top-0 start-0 w-100 h-100" 
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', zIndex: 1040 }}
            onClick={() => setSelectedRecord(null)}
          ></div>
          <div 
            className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column" 
            style={{ width: '400px', zIndex: 1050, transition: 'transform 0.3s ease-in-out' }}
          >
            <div className="d-flex justify-content-between align-items-start p-4 pb-3 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <div>
                <h5 className="fw-bold mb-1" style={{ color: '#0f172a', fontSize: '18px' }}>{selectedRecord.name}</h5>
                <p className="mb-0 text-muted" style={{ fontSize: '13px' }}>April 22, 2026 &middot; {selectedRecord.checkInStatus}</p>
              </div>
              <button 
                className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" 
                style={{ border: '1px solid #e2e8f0', borderRadius: '8px', width: '32px', height: '32px', padding: 0 }}
                onClick={() => setSelectedRecord(null)}
              >
                <span aria-hidden="true" style={{ fontSize: '20px', lineHeight: 1 }}>&times;</span>
              </button>
            </div>
            
            <div className="p-4 flex-grow-1 overflow-auto">
              <h6 className="fw-bold mb-4" style={{ fontSize: '11px', letterSpacing: '1px', color: '#94a3b8' }}>RECORD</h6>
              
              <div className="d-flex flex-column gap-3 mb-5">
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Status</span>
                  {getStatusBadge(selectedRecord.status)}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Check-in</span>
                  <span className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{selectedRecord.checkIn}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Check-out</span>
                  <span className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{selectedRecord.checkOut}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Location</span>
                  <span className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{selectedRecord.location !== '-' ? selectedRecord.location : 'Office'}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Working hours</span>
                  <span className="fw-semibold" style={{ fontSize: '13px', color: '#2b5cff' }}>{selectedRecord.workHrs}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Department</span>
                  <span className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{selectedRecord.dept}</span>
                </div>
              </div>

              <h6 className="fw-bold mb-4" style={{ fontSize: '11px', letterSpacing: '1px', color: '#94a3b8' }}>TIMELINE</h6>
              
              <div className="position-relative ms-2 ps-4" style={{ borderLeft: '2px solid #f1f5f9' }}>
                <div className="position-relative mb-4">
                  <div className="position-absolute rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', left: '-29px', top: '4px' }}></div>
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Checked in at {selectedRecord.checkIn}</h6>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Office &middot; April 22, 2026</span>
                </div>
                
                <div className="position-relative mb-4">
                  <div className="position-absolute rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#3b82f6', left: '-29px', top: '4px' }}></div>
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Checked out at {selectedRecord.checkOut}</h6>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Office &middot; April 22, 2026</span>
                </div>
                
                {selectedRecord.checkInStatus === 'late' && (
                  <div className="position-relative">
                    <div className="position-absolute rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#f59e0b', left: '-29px', top: '4px' }}></div>
                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Marked as late arrival</h6>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>Expected by 09:30 AM</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4 border-top d-flex justify-content-end" style={{ borderColor: '#f1f5f9' }}>
              <button 
                className="btn btn-sm bg-white text-dark fw-semibold px-4 py-2" 
                style={{ border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '13px' }}
                onClick={() => setSelectedRecord(null)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Monthly Summary' && (
        <>
          <div className="d-flex mb-4 gap-2">
            <button 
              className={`btn fw-semibold rounded-3 ${monthlyTab === 'Team History' ? 'text-white' : 'text-muted'}`}
              style={{ backgroundColor: monthlyTab === 'Team History' ? '#2b5cff' : 'transparent', border: 'none', fontSize: '13px', padding: '8px 16px' }}
              onClick={() => setMonthlyTab('Team History')}
            >
              Team History
            </button>
            <button 
              className={`btn fw-semibold rounded-3 ${monthlyTab === 'My History' ? 'text-white' : 'text-muted'}`}
              style={{ backgroundColor: monthlyTab === 'My History' ? '#2b5cff' : 'transparent', border: 'none', fontSize: '13px', padding: '8px 16px' }}
              onClick={() => setMonthlyTab('My History')}
            >
              My History
            </button>
          </div>
          
          {monthlyTab === 'Team History' && (
            <div className="row g-4">
              <div className="col-lg-8">
              <Card className="shadow-sm border-0 rounded-4 overflow-hidden h-100">
                <div className="d-flex align-items-center justify-content-between p-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
                  <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '15px' }}>Monthly summary — April 2026</h6>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control bg-white text-dark fw-medium" 
                      value="22 - 04 - 2026" 
                      readOnly
                      style={{ fontSize: '13px', padding: '8px 36px 8px 14px', borderColor: '#e2e8f0', borderRadius: '6px', width: '140px' }}
                    />
                    <BsCalendar4 size={14} className="position-absolute text-muted" style={{ top: '12px', right: '14px' }} />
                  </div>
                </div>
                
                <div className="table-responsive">
                  <table className="table mb-0 align-middle">
                    <thead style={{ backgroundColor: '#ffffff' }}>
                      <tr>
                        <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Employee</th>
                        <th className="border-bottom-0 py-3 px-2 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Present</th>
                        <th className="border-bottom-0 py-3 px-2 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Absent</th>
                        <th className="border-bottom-0 py-3 px-2 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Late</th>
                        <th className="border-bottom-0 py-3 px-2 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>WFH</th>
                        <th className="border-bottom-0 py-3 px-2 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Overtime hrs</th>
                        <th className="border-bottom-0 py-3 px-3 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Attendance %</th>
                      </tr>
                    </thead>
                    <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
                      {monthlySummaryData.map(record => (
                        <tr key={record.id}>
                          <td className="px-3 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                            <div className="d-flex align-items-center gap-3">
                              <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                                   style={{ width: '32px', height: '32px', backgroundColor: record.bg, color: record.color, fontSize: '12px' }}>
                                {record.initials}
                              </div>
                              <div>
                                <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>{record.name}</div>
                                <div style={{ fontSize: '11px', color: '#94a3b8' }}>{record.dept}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-3 fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', color: '#16a34a' }}>
                            {record.present}
                          </td>
                          <td className="px-2 py-3 fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', color: '#dc2626' }}>
                            {record.absent}
                          </td>
                          <td className="px-2 py-3 fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', color: '#d97706' }}>
                            {record.late}
                          </td>
                          <td className="px-2 py-3 fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', color: '#2563eb' }}>
                            {record.wfh}
                          </td>
                          <td className="px-2 py-3 fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px', color: '#9333ea' }}>
                            {record.overtime}
                          </td>
                          <td className="px-3 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                            <div className="d-flex align-items-center gap-2">
                              <div className="progress flex-grow-1 bg-light rounded-pill" style={{ height: '4px' }}>
                                <div className="progress-bar rounded-pill" 
                                     role="progressbar" 
                                     style={{ width: `${record.percentage}%`, backgroundColor: record.percentage >= 90 ? '#22c55e' : '#3b82f6' }} 
                                     aria-valuenow={record.percentage} aria-valuemin="0" aria-valuemax="100">
                                </div>
                              </div>
                              <span className="fw-semibold text-dark" style={{ fontSize: '12px', minWidth: '32px' }}>{record.percentage}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <div className="col-lg-4">
              <Card className="shadow-sm border-0 rounded-4 overflow-hidden h-100 p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '15px' }}>April 2026</h6>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>Calendar view</span>
                </div>
                
                <input 
                  type="text" 
                  className="form-control mb-4" 
                  value="Ravi Kumar"
                  readOnly
                  style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#e2e8f0', borderRadius: '8px', color: '#475569' }}
                />
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px', textAlign: 'center', marginBottom: '24px' }}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, index) => (
                    <div key={`header-${index}`} style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, paddingBottom: '8px' }}>{d}</div>
                  ))}
                  {aprilDays.map((day, i) => (
                    <div key={i}>
                      {day ? <div style={getCalendarDayStyle(day)}>{day}</div> : <div></div>}
                    </div>
                  ))}
                </div>
                
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-start mt-auto" style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>
                  <div className="d-flex align-items-center gap-1">
                    <div style={{ width: '12px', height: '12px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4', borderRadius: '3px' }}></div> Present
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <div style={{ width: '12px', height: '12px', border: '1px solid #fecaca', backgroundColor: '#fef2f2', borderRadius: '3px' }}></div> Absent
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <div style={{ width: '12px', height: '12px', border: '1px solid #bfdbfe', backgroundColor: '#eff6ff', borderRadius: '3px' }}></div> WFH
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <div style={{ width: '12px', height: '12px', border: '1px solid #fde68a', backgroundColor: '#fffbeb', borderRadius: '3px' }}></div> Late
                  </div>
                </div>
              </Card>
            </div>
          </div>
          )}

          {monthlyTab === 'My History' && (
            <div>

              <div className="row g-4 mb-4">
                <div className="col-lg-5">
                  <Card className="p-4 shadow-sm border-0 h-100 rounded-4 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '8px' }}>PRESENT DAYS</div>
                        <div className="d-flex align-items-baseline gap-2">
                          <span className="fw-bold text-dark" style={{ fontSize: '36px', lineHeight: '1' }}>22</span>
                          <span className="fw-semibold text-dark" style={{ fontSize: '16px' }}>/ 24</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-end" style={{ height: '70px', marginTop: '10px', gap: '6px' }}>
                        <div style={{ width: '26px', height: '70%', background: 'linear-gradient(to bottom, #7fa3fb 0%, #ffffff 100%)', borderRadius: '6px 6px 0 0' }}></div>
                        <div style={{ width: '26px', height: '100%', background: 'linear-gradient(to bottom, #7fa3fb 0%, #ffffff 100%)', borderRadius: '6px 6px 0 0' }}></div>
                        <div style={{ width: '26px', height: '45%', background: 'linear-gradient(to bottom, #fb7185 0%, #ffffff 100%)', borderRadius: '6px 6px 0 0' }}></div>
                        <div style={{ width: '26px', height: '70%', background: 'linear-gradient(to bottom, #7fa3fb 0%, #ffffff 100%)', borderRadius: '6px 6px 0 0' }}></div>
                        <div style={{ width: '26px', height: '60%', background: '#2b5cff', borderRadius: '6px 6px 0 0' }}></div>
                      </div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#0f172a', fontWeight: 500, marginTop: '20px' }}>↑ 2 vs last month</div>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card className="p-4 shadow-sm border-0 h-100 rounded-4 d-flex flex-column justify-content-between" style={{ backgroundColor: '#F3F3F3' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '8px' }}>AVG. WORK DAY</div>
                    <div className="d-flex align-items-baseline gap-1 mt-2">
                      <span className="fw-bold text-dark" style={{ fontSize: '36px', lineHeight: '1' }}>07:32</span>
                      <span className="fw-semibold text-dark" style={{ fontSize: '20px' }}>:42</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#0f172a', fontWeight: 500, marginTop: '20px' }}>Best Day: Thur · 10hr 33min</div>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="p-4 shadow-sm border-0 h-100 rounded-4 d-flex flex-column justify-content-between align-items-center" style={{ backgroundColor: '#F3F3F3' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', width: '100%', textAlign: 'center' }}>WEEKLY CHART</div>
                    <div className="position-relative mt-2" style={{ width: '85px', height: '85px' }}>
                      <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2b5cff" strokeWidth="4" strokeDasharray="92, 100" strokeLinecap="round" />
                      </svg>
                      <div className="position-absolute top-50 start-50 translate-middle fw-bold text-dark" style={{ fontSize: '18px' }}>92%</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#0f172a', fontWeight: 500, marginTop: '16px', textAlign: 'center' }}>Best Day: Thur · 10hr 33min</div>
                  </Card>
                </div>
              </div>


              <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
                <div className="table-responsive">
                  <table className="table mb-0 align-middle">
                    <thead style={{ backgroundColor: '#f8fafc' }}>
                      <tr>
                        <th className="border-bottom-0 py-4 px-4 text-muted fw-semibold" style={{ backgroundColor: '#f8fafc', fontSize: '11px', letterSpacing: '1px' }}>DATE</th>
                        <th className="border-bottom-0 py-4 px-4 text-muted fw-semibold" style={{ backgroundColor: '#f8fafc', fontSize: '11px', letterSpacing: '1px' }}>CHECK-IN</th>
                        <th className="border-bottom-0 py-4 px-4 text-muted fw-semibold" style={{ backgroundColor: '#f8fafc', fontSize: '11px', letterSpacing: '1px' }}>CHECK-OUT</th>
                        <th className="border-bottom-0 py-4 px-4 text-muted fw-semibold" style={{ backgroundColor: '#f8fafc', fontSize: '11px', letterSpacing: '1px' }}>TOTAL HOURS</th>
                        <th className="border-bottom-0 py-4 px-4 text-muted fw-semibold" style={{ backgroundColor: '#f8fafc', fontSize: '11px', letterSpacing: '1px' }}>STATUS</th>
                        <th className="border-bottom-0 py-4 px-4 text-muted fw-semibold" style={{ backgroundColor: '#f8fafc', fontSize: '11px', letterSpacing: '1px' }}>TYPE</th>
                      </tr>
                    </thead>
                    <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
                      {myHistoryRecords.map(record => (
                        <tr key={record.id}>
                          <td className="px-4 py-3 text-dark fw-medium" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>{record.date}</td>
                          <td className="px-4 py-3 text-dark" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>{record.checkIn}</td>
                          <td className="px-4 py-3 text-dark" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>{record.checkOut}</td>
                          <td className="px-4 py-3 text-dark" style={{ borderBottom: '1px solid #f8fafc', fontSize: '13px' }}>{record.totalHrs}</td>
                          <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                            <div className="d-flex align-items-center">
                              {record.status === 'Present' && (
                                <div className="px-3 py-1 rounded-pill" style={{ border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4', color: '#16a34a', fontSize: '11px', fontWeight: 600 }}>Present</div>
                              )}
                              {(record.status === 'Late' || record.status === 'Overtime') && (
                                <div className="d-flex align-items-center rounded-pill" style={{ border: `1px solid ${record.status === 'Late' ? '#f59e0b' : '#3b82f6'}`, overflow: 'hidden' }}>
                                  <div className="px-3 py-1" style={{ color: record.status === 'Late' ? '#d97706' : '#2563eb', fontSize: '11px', fontWeight: 600, backgroundColor: 'transparent' }}>{record.status}</div>
                                  <div className="px-2 py-1 text-white" style={{ backgroundColor: record.status === 'Late' ? '#f59e0b' : '#3b82f6', fontSize: '11px', fontWeight: 600 }}>{record.badge}</div>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3" style={{ borderBottom: '1px solid #f8fafc' }}>
                            <div className="px-3 py-1 rounded-pill d-inline-block" style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '11px', fontWeight: 600 }}>{record.type}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ borderColor: '#f1f5f9', backgroundColor: '#f8fafc' }}>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Showing 1 to 5 of 24 records</span>
                  <div className="d-flex gap-1">
                    <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #e2e8f0', borderRadius: '4px', width: '32px', height: '32px', color: '#2b5cff' }}>&larr;</button>
                    <button className="btn btn-sm text-white d-flex align-items-center justify-content-center fw-semibold" style={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '4px', width: '32px', height: '32px' }}>1</button>
                    <button className="btn btn-sm bg-white d-flex align-items-center justify-content-center fw-semibold" style={{ border: '1px solid #e2e8f0', color: '#2b5cff', borderRadius: '4px', width: '32px', height: '32px' }}>2</button>
                    <button className="btn btn-sm bg-white d-flex align-items-center justify-content-center fw-semibold" style={{ border: '1px solid #e2e8f0', color: '#2b5cff', borderRadius: '4px', width: '32px', height: '32px' }}>3</button>
                    <button className="btn btn-sm btn-light bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #e2e8f0', borderRadius: '4px', width: '32px', height: '32px', color: '#2b5cff' }}>&rarr;</button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default AttendanceOverview;
