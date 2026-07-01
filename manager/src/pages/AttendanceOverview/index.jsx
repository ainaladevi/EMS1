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

  const kpis = [
    { title: 'PRESENT TODAY', value: '18', sub: 'of 24 employees', color: '#22c55e' },
    { title: 'ABSENT TODAY', value: '3', sub: '2 on approved leave', color: '#ef4444' },
    { title: 'LATE ARRIVALS', value: '2', sub: 'after 9:30 AM', color: '#f59e0b' },
    { title: 'WORK FROM HOME', value: '5', sub: 'remote today', color: '#3b82f6' },
    { title: 'OVERTIME (HRS)', value: '14', sub: 'this week', color: '#a855f7' }
  ];

  const employees = [
    {
      id: 1, name: 'Ravi Kumar', dept: 'Engineering', initials: 'RK', color: '#a855f7', bg: '#faf5ff',
      checkIn: '09:02', checkInStatus: 'on-time', checkOut: '18:15', location: 'Office', workHrs: '9h 13m', status: 'Present'
    },
    {
      id: 2, name: 'Emp Test', dept: 'Engineering', initials: 'ET', color: '#ef4444', bg: '#fef2f2',
      checkIn: '09:45', checkInStatus: 'late', checkOut: '18:30', location: 'Office', workHrs: '8h 45m', status: 'Late'
    },
    {
      id: 3, name: 'Srinivas Kandagatla', dept: 'Engineering', initials: 'SK', color: '#f59e0b', bg: '#fffbeb',
      checkIn: '08:55', checkInStatus: 'on-time', checkOut: '18:05', location: 'WFH', workHrs: '9h 10m', status: 'Wfh'
    },
    {
      id: 4, name: 'Priya Sharma', dept: 'Product', initials: 'PS', color: '#3b82f6', bg: '#eff6ff',
      checkIn: '09:00', checkInStatus: 'on-time', checkOut: '18:00', location: 'Office', workHrs: '9h 0m', status: 'Present'
    },
    {
      id: 5, name: 'Ananya Reddy', dept: 'Design', initials: 'AR', color: '#2b5cff', bg: '#eff6ff',
      checkIn: '-', checkInStatus: 'none', checkOut: '-', location: '-', workHrs: '-', status: 'Absent'
    },
    {
      id: 6, name: 'Kiran Patel', dept: 'HR', initials: 'KP', color: '#8b5cf6', bg: '#f5f3ff',
      checkIn: '09:10', checkInStatus: 'on-time', checkOut: '18:20', location: 'Office', workHrs: '9h 10m', status: 'Present'
    },
    {
      id: 7, name: 'Meera Nair', dept: 'Engineering', initials: 'MN', color: '#d946ef', bg: '#fdf4ff',
      checkIn: '09:00', checkInStatus: 'on-time', checkOut: '19:30', location: 'WFH', workHrs: '10h 30m', status: 'Wfh'
    },
    {
      id: 8, name: 'Suresh Babu', dept: 'Engineering', initials: 'SB', color: '#f97316', bg: '#fff7ed',
      checkIn: '09:03', checkInStatus: 'on-time', checkOut: '18:05', location: 'Office', workHrs: '9h 2m', status: 'Present'
    }
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
      {/* Header */}
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

      {/* KPI Cards */}
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

      {/* Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button className="btn text-white fw-semibold d-flex align-items-center gap-2 rounded-2" style={{ backgroundColor: '#2b5cff', fontSize: '13px', padding: '8px 16px' }}>
          <BsCalendar4 size={14} /> Today's Records
          <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>18</span>
        </button>
        <button className="btn bg-white fw-semibold d-flex align-items-center gap-2 rounded-2" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', padding: '8px 16px' }}>
          <BsActivity size={16} /> Overtime
          <span className="badge rounded-pill bg-light text-muted" style={{ fontWeight: 500 }}>8</span>
        </button>
        <button className="btn bg-white fw-semibold d-flex align-items-center gap-2 rounded-2" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', padding: '8px 16px' }}>
          <BsPencilSquare size={16} /> Regularization
          <span className="badge rounded-pill bg-light text-muted" style={{ fontWeight: 500 }}>5</span>
        </button>
        <button className="btn bg-white fw-semibold d-flex align-items-center gap-2 rounded-2" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', padding: '8px 16px' }}>
          <BsClockHistory size={15} /> History
        </button>
        <button className="btn bg-white fw-semibold d-flex align-items-center gap-2 rounded-2" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', padding: '8px 16px' }}>
          <BsCalendarDate size={16} /> Monthly Summary
        </button>
      </div>

      {/* Filters & Table Card */}
      <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
        {/* Filters */}
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

        {/* Table */}
        <div className="table-responsive">
          <table className="table mb-0 align-middle">
            <thead style={{ backgroundColor: '#fff' }}>
              <tr>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Employee</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Check-in</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Check-out</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Location</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Working hrs</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Status</th>
                <th className="border-bottom-0 py-3 px-4 text-muted fw-semibold text-center" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Action</th>
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
                          <button className="d-flex align-items-center gap-2 px-3 py-2 text-dark border-0 bg-transparent w-100 text-start dropdown-item hover-bg-light">
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

        {/* Pagination */}
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
    </div>
  );
};

export default AttendanceOverview;
