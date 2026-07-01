import React, { useState } from 'react';
import { 
  FiSearch, 
  FiCalendar, 
  FiChevronDown, 
  FiHome, 
  FiCloud, 
  FiMoreHorizontal, 
  FiArrowLeft, 
  FiArrowRight,
  FiFileText,
  FiActivity,
  FiEdit,
  FiClock,
  FiEye,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiX
} from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Attendance.css';

const AttendanceOverview = () => {
  const [activeTab, setActiveTab] = useState("Today's Records");
  const [deptDropdownOpen, setDeptDropdownOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const departments = ["All Departments", "All Employees", "Engineer Team", "Development Team"];
  
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All status");
  const statusOptions = ["Present", "Absent", "Late", "Work From Home"];

  const [actionMenuOpen, setActionMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecordDetail, setSelectedRecordDetail] = useState(null);
  
  const records = [
    { id: 1, name: 'Ravi Kumar', initial: 'RK', color: 'purple', dept: 'Engineering', checkIn: '09:02', checkOut: '18:15', loc: 'Office', hrs: '9h 13m', status: 'Present' },
    { id: 2, name: 'Emp Test', initial: 'ET', color: 'red', dept: 'Engineering', checkIn: '09:45', checkOut: '18:30', loc: 'Office', hrs: '8h 45m', status: 'Late' },
    { id: 3, name: 'Srinivas Kandagatla', initial: 'SK', color: 'orange', dept: 'Engineering', checkIn: '08:55', checkOut: '18:05', loc: 'WFH', hrs: '9h 10m', status: 'Wfh' },
    { id: 4, name: 'Priya Sharma', initial: 'PS', color: 'blue', dept: 'Product', checkIn: '09:00', checkOut: '18:00', loc: 'Office', hrs: '9h 0m', status: 'Present' },
    { id: 5, name: 'Ananya Reddy', initial: 'AR', color: 'pink', dept: 'Design', checkIn: '-', checkOut: '-', loc: '-', hrs: '-', status: 'Absent' },
    { id: 6, name: 'Kiran Patel', initial: 'KP', color: 'green', dept: 'HR', checkIn: '09:10', checkOut: '18:20', loc: 'Office', hrs: '9h 10m', status: 'Present' },
    { id: 7, name: 'Meera Nair', initial: 'MN', color: 'purple', dept: 'Engineering', checkIn: '09:00', checkOut: '19:30', loc: 'WFH', hrs: '10h 30m', status: 'Wfh' },
    { id: 8, name: 'Suresh Babu', initial: 'SB', color: 'orange', dept: 'Engineering', checkIn: '09:03', checkOut: '18:05', loc: 'Office', hrs: '9h 2m', status: 'Present' }
  ];

  const overtimeRecords = [
    { id: 1, name: 'Meera Nair', initial: 'MN', color: 'purple', dept: 'Engineering', date: 'Apr 22', regHrs: '9h', otHrs: '1h 30m', totalHrs: '10h 30m', reason: 'Sprint deadline' },
    { id: 2, name: 'Ravi Kumar', initial: 'RK', color: 'purple', dept: 'Engineering', date: 'Apr 21', regHrs: '9h', otHrs: '2h', totalHrs: '11h', reason: 'Release preparation' },
    { id: 3, name: 'Srinivas K.', initial: 'SK', color: 'orange', dept: 'Engineering', date: 'Apr 20', regHrs: '9h', otHrs: '1h', totalHrs: '10h', reason: 'Bug fixes' },
    { id: 4, name: 'Emp Test', initial: 'ET', color: 'red', dept: 'Engineering', date: 'Apr 19', regHrs: '8h', otHrs: '3h', totalHrs: '11h', reason: 'Feature development' },
    { id: 5, name: 'Priya Sharma', initial: 'PS', color: 'blue', dept: 'Product', date: 'Apr 18', regHrs: '9h', otHrs: '1h 45m', totalHrs: '10h 45m', reason: 'Product review' },
    { id: 6, name: 'Priya Sharma', initial: 'PS', color: 'blue', dept: 'Product', date: 'Apr 18', regHrs: '9h', otHrs: '1h 45m', totalHrs: '10h 45m', reason: 'Product review' }
  ];

  const regularizationRecords = [
    { id: 1, name: 'Ananya Reddy', initial: 'AR', color: 'pink', dept: 'Design', date: 'Apr 21', missed: 'Both', reason: 'Phone died during travel', reqOn: 'Apr 21', status: 'Pending' },
    { id: 2, name: 'Emp Test', initial: 'ET', color: 'red', dept: 'Engineering', date: 'Apr 20', missed: 'Check-out', reason: 'Emergency — left suddenly', reqOn: 'Apr 21', status: 'Pending' },
    { id: 3, name: 'Suresh Babu', initial: 'SB', color: 'orange', dept: 'Engineering', date: 'Apr 19', missed: 'Check-in', reason: 'Forgot to tap in', reqOn: 'Apr 20', status: 'Approved' },
    { id: 4, name: 'Kiran Patel', initial: 'KP', color: 'purple', dept: 'HR', date: 'Apr 18', missed: 'Check-in', reason: 'System error at gate', reqOn: 'Apr 19', status: 'Approved' },
    { id: 5, name: 'Meera Nair', initial: 'MN', color: 'purple', dept: 'Engineering', date: 'Apr 17', missed: 'Check-out', reason: 'Working remotely, forgot', reqOn: 'Apr 18', status: 'Rejected' }
  ];

  const chartData = [
    { date: 'Apr 1', present: 130, absent: 5 },
    { date: 'Apr 5', present: 125, absent: 8 },
    { date: 'Apr 8', present: 130, absent: 2 },
    { date: 'Apr 10', present: 125, absent: 9 },
    { date: 'Apr 14', present: 128, absent: 7 },
    { date: 'Apr 17', present: 140, absent: 2 },
    { date: 'Apr 21', present: 125, absent: 10 },
    { date: 'Apr 22', present: 126, absent: 8 },
    { date: 'Apr 25', present: 135, absent: 2 },
    { date: 'Apr 28', present: 130, absent: 7 },
    { date: 'Apr 30', present: 128, absent: 8 },
  ];

  const calendarDays = [
    { date: 29, type: 'weekend' }, { date: 30, type: 'weekend' }, { date: 31, type: 'weekend' },
    { date: 1, type: 'normal', absent: 4, late: 2, percent: '96%' },
    { date: 2, type: 'holiday' },
    { date: 3, type: 'normal', absent: 6, late: 4, percent: '93%' },
    { date: 4, type: 'weekend' },
    { date: 5, type: 'weekend' },
    { date: 6, type: 'normal', absent: 5, late: 3, percent: '94%' },
    { date: 7, type: 'normal', absent: 7, late: 5, percent: '92%' },
    { date: 8, type: 'normal', absent: 3, late: 2, percent: '95%' },
    { date: 9, type: 'normal', absent: 2, late: 1, percent: '97%' },
    { date: 10, type: 'normal', absent: 8, late: 4, percent: '91%' },
    { date: 11, type: 'weekend' },
    { date: 12, type: 'weekend' },
    { date: 13, type: 'normal', absent: 0, late: 0, percent: '0%' },
    { date: 14, type: 'normal', absent: 6, late: 4, percent: '92%' },
    { date: 15, type: 'normal', absent: 2, late: 2, percent: '96%' },
    { date: 16, type: 'normal', absent: 1, late: 1, percent: '99%' },
    { date: 17, type: 'normal', absent: 0, late: 0, percent: '100%' },
    { date: 18, type: 'weekend' },
    { date: 19, type: 'weekend' },
    { date: 20, type: 'normal', absent: 0, late: 0, percent: '0%' },
    { date: 21, type: 'normal', absent: 9, late: 5, percent: '90%' },
    { date: 22, type: 'normal', absent: 7, late: 4, percent: '91%' },
    { date: 23, type: 'normal', absent: 5, late: 3, percent: '94%' },
    { date: 24, type: 'normal', absent: 4, late: 2, percent: '96%' },
    { date: 25, type: 'weekend' },
    { date: 26, type: 'weekend' },
    { date: 27, type: 'normal', absent: 0, late: 0, percent: '0%' },
    { date: 28, type: 'normal', absent: 6, late: 4, percent: '93%' },
    { date: 29, type: 'normal', absent: 4, late: 2, percent: '95%' },
    { date: 30, type: 'normal', absent: 7, late: 5, percent: '92%', active: true },
  ];

  const absentEmployees = [
    { name: 'Arjun Nair', dept: 'Engineering', initial: 'AN', color: 'blue' },
    { name: 'Riya Sharma', dept: 'Design', initial: 'RS', color: 'green' },
    { name: 'Sneha Patel', dept: 'HR', initial: 'SP', color: 'blue' },
    { name: 'Kiran Rao', dept: 'QA', initial: 'KR', color: 'green' },
    { name: 'Devraj Singh', dept: 'Marketing', initial: 'DS', color: 'blue' },
    { name: 'Meena Nair', dept: 'Engineering', initial: 'MN', color: 'red' },
    { name: 'Raj Kumar', dept: 'Sales', initial: 'RK', color: 'orange' },
  ];

  const lateEmployees = [
    { name: 'Preethi G', dept: 'After 9:30 AM', initial: 'PG', color: 'blue' },
  ];

  const getStatusPill = (status) => {
    let s = status.toLowerCase();
    if (s === 'work from home') s = 'wfh';
    return (
      <div className={`status-pill-dot pill-${s}`}>
        <div className="status-dot"></div>
        {status}
      </div>
    );
  };

  const getCheckInColor = (time, status) => {
    if (time === '-') return 'time-dark';
    if (status === 'Late') return 'time-orange';
    return 'time-green';
  };

  const filteredRecords = records.filter(rec => {
    // 1. Search Query Match
    const matchesSearch = rec.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Status Match
    let normalizedRecStatus = rec.status === 'Wfh' ? 'Work From Home' : rec.status;
    const matchesStatus = selectedStatus === 'All status' || normalizedRecStatus === selectedStatus;
    
    // 3. Department Match
    let matchesDept = true;
    if (selectedDept !== 'All Departments' && selectedDept !== 'All Employees') {
      const searchWord = selectedDept.split(' ')[0]; // "Engineer" or "Development"
      matchesDept = rec.dept.includes(searchWord);
    }
    
    return matchesSearch && matchesStatus && matchesDept;
  });

  return (
    <div className="attendance-page">
      <div className="page-header-flex">
        <div>
          <div className="breadcrumb">
            <span className="breadcrumb-item">Dashboard</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item active">Attendance</span>
          </div>
          <h1 className="page-title">Attendance Overview</h1>
          <p className="page-subtitle">Daily check-ins, overtime, regularization and monthly summaries</p>
        </div>
      </div>

      <div className="attendance-stat-grid">
        <div className="attendance-stat-card">
          <div className="attendance-stat-title">PRESENT TODAY</div>
          <div className="attendance-stat-value att-stat-green">18</div>
          <div className="attendance-stat-subtitle">of 24 employees</div>
        </div>
        <div className="attendance-stat-card">
          <div className="attendance-stat-title">ABSENT TODAY</div>
          <div className="attendance-stat-value att-stat-red">3</div>
          <div className="attendance-stat-subtitle">2 on approved leave</div>
        </div>
        <div className="attendance-stat-card">
          <div className="attendance-stat-title">LATE ARRIVALS</div>
          <div className="attendance-stat-value att-stat-orange">2</div>
          <div className="attendance-stat-subtitle">after 9:30 AM</div>
        </div>
        <div className="attendance-stat-card">
          <div className="attendance-stat-title">WORK FROM HOME</div>
          <div className="attendance-stat-value att-stat-blue">5</div>
          <div className="attendance-stat-subtitle">remote today</div>
        </div>
        <div className="attendance-stat-card">
          <div className="attendance-stat-title">OVERTIME (HRS)</div>
          <div className="attendance-stat-value att-stat-purple">14</div>
          <div className="attendance-stat-subtitle">this week</div>
        </div>
      </div>

      <div className="attendance-tabs">
        <button 
          className={`attendance-tab-btn ${activeTab === "Today's Records" ? 'active' : ''}`}
          onClick={() => setActiveTab("Today's Records")}
        >
          <FiFileText /> Today's Records
          <span className={activeTab === "Today's Records" ? "tab-badge" : "tab-badge-dark"}>18</span>
        </button>
        <button 
          className={`attendance-tab-btn ${activeTab === "Overtime" ? 'active' : ''}`}
          onClick={() => setActiveTab("Overtime")}
        >
          <FiActivity /> Overtime
          <span className={activeTab === "Overtime" ? "tab-badge" : "tab-badge-dark"}>8</span>
        </button>
        <button 
          className={`attendance-tab-btn ${activeTab === "Regularization" ? 'active' : ''}`}
          onClick={() => setActiveTab("Regularization")}
        >
          <FiEdit /> Regularization
          <span className={activeTab === "Regularization" ? "tab-badge" : "tab-badge-dark"}>5</span>
        </button>
        <button 
          className={`attendance-tab-btn ${activeTab === "History" ? 'active' : ''}`}
          onClick={() => setActiveTab("History")}
        >
          <FiClock /> History
        </button>
        <button 
          className={`attendance-tab-btn ${activeTab === "Monthly Summary" ? 'active' : ''}`}
          onClick={() => setActiveTab("Monthly Summary")}
        >
          <FiCalendar /> Monthly Summary
        </button>
      </div>

      {activeTab === "Today's Records" && (
        <div className="attendance-controls">
          <div className="attendance-search">
            <FiSearch className="attendance-search-icon" />
            <input 
              type="text" 
              className="attendance-search-input" 
              placeholder="Search by employee..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="attendance-filters">
            <div className="date-picker-wrap">
              <span>22 - 04 - 2026</span>
              <FiCalendar className="date-icon" />
            </div>
            <div className="custom-dropdown-wrapper">
              <button 
                className="filter-btn-outline" 
                onClick={() => {
                  setStatusDropdownOpen(!statusDropdownOpen);
                  setDeptDropdownOpen(false);
                }}
              >
                {selectedStatus === "All status" ? "All status" : selectedStatus} <FiChevronDown style={{ marginLeft: '4px' }} />
              </button>
              {statusDropdownOpen && (
                <div className="custom-dropdown-menu">
                  {statusOptions.map(opt => (
                    <button 
                      key={opt}
                      className={`custom-dropdown-item ${selectedStatus === opt ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedStatus(opt);
                        setStatusDropdownOpen(false);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="custom-dropdown-wrapper">
              <button 
                className="filter-btn-outline" 
                style={{ color: '#2563EB', borderColor: '#BFDBFE', fontWeight: 500 }}
                onClick={() => {
                  setDeptDropdownOpen(!deptDropdownOpen);
                  setStatusDropdownOpen(false);
                }}
              >
                {selectedDept} <FiChevronDown style={{ marginLeft: '4px' }} />
              </button>
              {deptDropdownOpen && (
                <div className="custom-dropdown-menu">
                  {departments.map(dept => (
                    <button 
                      key={dept}
                      className={`custom-dropdown-item ${selectedDept === dept ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedDept(dept);
                        setDeptDropdownOpen(false);
                      }}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === "Monthly Summary" && (
        <div className="monthly-summary-wrapper">
          <div className="summary-top-row">
            <div className="calendar-panel">
              <div className="calendar-header">
                <div className="calendar-month-selector">
                  <button className="nav-arrow-btn"><FiChevronLeft size={16} /></button>
                  <h3 className="calendar-month-title">April 2026</h3>
                  <button className="nav-arrow-btn"><FiChevronRight size={16} /></button>
                </div>
                <div className="calendar-hint">Click any date to view details</div>
              </div>
              
              <div className="calendar-legend">
                <div className="legend-item"><div className="status-dot" style={{backgroundColor: '#10B981'}}></div> Present</div>
                <div className="legend-item"><div className="status-dot" style={{backgroundColor: '#EF4444'}}></div> Absent</div>
                <div className="legend-item"><div className="status-dot" style={{backgroundColor: '#F59E0B'}}></div> Late</div>
                <div className="legend-item"><div className="status-dot" style={{backgroundColor: '#3B82F6'}}></div> WFH</div>
                <div className="legend-item"><div className="status-dot" style={{backgroundColor: '#2563EB'}}></div> Holiday</div>
                <div className="legend-item"><div className="status-dot" style={{backgroundColor: '#CBD5E1'}}></div> Weekend</div>
              </div>

              <div className="calendar-grid">
                <div className="calendar-day-header">SUN</div>
                <div className="calendar-day-header">MON</div>
                <div className="calendar-day-header">TUE</div>
                <div className="calendar-day-header">WED</div>
                <div className="calendar-day-header">THU</div>
                <div className="calendar-day-header">FRI</div>
                <div className="calendar-day-header">SAT</div>

                {calendarDays.map((day, i) => (
                  <div key={i} className={`calendar-cell ${day.active ? 'active-cell' : ''}`}>
                    <div className={`cell-date ${day.type === 'weekend' ? 'weekend-date' : day.type === 'holiday' ? 'holiday-date' : ''}`}>
                      {day.date}
                    </div>
                    {day.type === 'weekend' && <div className="weekend-text">Weekend</div>}
                    {day.type === 'holiday' && (
                      <>
                        <div className="cell-bottom-bar holiday-bar" style={{marginTop: 'auto'}}></div>
                        <div className="holiday-text">Holiday</div>
                      </>
                    )}
                    {day.type === 'normal' && (
                      <>
                        <div className="cell-badges">
                          {day.absent > 0 && <span className="cell-badge absent">{day.absent}</span>}
                          {day.late > 0 && <span className="cell-badge late">{day.late}</span>}
                        </div>
                        <div className="cell-bottom-bar present-bar"></div>
                        <div className="cell-percentage">{day.percent}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-panel">
              <h3 className="detail-panel-title">April 30, 2026</h3>
              
              <div className="detail-stats-grid">
                <div className="detail-stat-box box-present">
                  <h4 className="detail-stat-num">130</h4>
                  <div className="detail-stat-label">Present</div>
                </div>
                <div className="detail-stat-box box-absent">
                  <h4 className="detail-stat-num">7</h4>
                  <div className="detail-stat-label">Absent</div>
                </div>
                <div className="detail-stat-box box-late">
                  <h4 className="detail-stat-num">5</h4>
                  <div className="detail-stat-label">Late</div>
                </div>
              </div>

              <div className="detail-section-label">ABSENT EMPLOYEES</div>
              <div className="detail-emp-list">
                {absentEmployees.map((emp, i) => (
                  <div className="detail-emp-row" key={i}>
                    <div className="detail-emp-info">
                      <div className={`avatar-circle avatar-${emp.color}`}>{emp.initial}</div>
                      <div>
                        <h4 className="detail-emp-name">{emp.name}</h4>
                        <p className="detail-emp-sub">{emp.dept}</p>
                      </div>
                    </div>
                    <span className="detail-pill pill-absent">Absent</span>
                  </div>
                ))}
              </div>

              <div className="detail-section-label">LATE ARRIVALS</div>
              <div className="detail-emp-list">
                {lateEmployees.map((emp, i) => (
                  <div className="detail-emp-row" key={i}>
                    <div className="detail-emp-info">
                      <div className={`avatar-circle avatar-${emp.color}`}>{emp.initial}</div>
                      <div>
                        <h4 className="detail-emp-name">{emp.name}</h4>
                        <p className="detail-emp-sub">{emp.dept}</p>
                      </div>
                    </div>
                    <span className="detail-pill pill-late">Late</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chart-panel">
            <h3 className="chart-panel-header">Monthly Attendance Trend</h3>
            <div style={{ width: '100%', height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAbsent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" axisLine={{ stroke: '#E2E8F0' }} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} domain={[0, 150]} ticks={[0, 20, 40, 60, 80, 100, 120, 150]} dx={-10} />
                  <Tooltip />
                  <Area type="monotone" dataKey="present" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorPresent)" name="Present" dot={{ r: 3, fill: '#10B981', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#10B981', stroke: '#fff', strokeWidth: 2 }} />
                  <Area type="monotone" dataKey="absent" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorAbsent)" name="Absent" dot={{ r: 3, fill: '#EF4444', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#EF4444', stroke: '#fff', strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569'}}>
                 <div style={{width: '28px', height: '12px', border: '3px solid #10B981', borderRadius: '2px', backgroundColor: '#FFFFFF'}}></div> Present
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569'}}>
                 <div style={{width: '28px', height: '12px', border: '3px solid #EF4444', borderRadius: '2px', backgroundColor: '#FFFFFF'}}></div> Absent
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab !== "Monthly Summary" && (
        <div className="attendance-table-container">
        {activeTab === "Overtime" && (
          <div className="table-header-bar">
            <h3 className="table-header-title">Overtime records</h3>
            <span className="table-header-badge">8 employees</span>
          </div>
        )}
        {activeTab === "Regularization" && (
          <div className="table-header-bar">
            <h3 className="table-header-title">Regularization requests</h3>
            <span className="table-header-badge">5 pending</span>
          </div>
        )}
        {activeTab === "History" && (
          <div className="history-controls-wrapper">
            <div className="attendance-controls" style={{ marginBottom: 0 }}>
              <div className="attendance-search">
                <FiSearch className="attendance-search-icon" />
                <input 
                  type="text" 
                  className="attendance-search-input" 
                  style={{ backgroundColor: '#fff' }}
                  placeholder="Search by employee..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="attendance-filters">
                <div className="custom-dropdown-wrapper">
                  <button className="filter-btn-outline">
                    All employees <FiChevronDown style={{ marginLeft: '4px' }} />
                  </button>
                </div>
                <div className="date-picker-wrap">
                  <span>22 - 04 - 2026</span>
                  <FiCalendar className="date-icon" />
                </div>
              </div>
            </div>
          </div>
        )}
        <table className="attendance-table">
          <thead>
            {(activeTab === "Today's Records" || activeTab === "History") ? (
              <tr>
                <th>Employee</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Location</th>
                <th>Working hrs</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            ) : activeTab === "Overtime" ? (
              <tr>
                <th>Employee</th>
                <th>Date</th>
                <th>Regular hrs</th>
                <th>Overtime hrs</th>
                <th>Total hrs</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            ) : activeTab === "Regularization" ? (
              <tr>
                <th>Employee</th>
                <th>Date</th>
                <th>Missed</th>
                <th>Reason</th>
                <th>Requested on</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            ) : null}
          </thead>
          <tbody>
            {(activeTab === "Today's Records" || activeTab === "History") && filteredRecords.map((rec) => (
              <tr key={rec.id}>
                <td>
                  <div className="user-info-cell">
                    <div className={`avatar-circle avatar-${rec.color}`}>
                      {rec.initial}
                    </div>
                    <div>
                      <h4 className="user-name-text">{rec.name}</h4>
                      <p className="user-dept-text">{rec.dept}</p>
                    </div>
                  </div>
                </td>
                <td className={getCheckInColor(rec.checkIn, rec.status)}>
                  {rec.checkIn}
                </td>
                <td className="time-dark">
                  {rec.checkOut}
                </td>
                <td>
                  {rec.loc === 'Office' ? (
                    <div className="loc-office"><FiHome size={14}/> Office</div>
                  ) : rec.loc === 'WFH' ? (
                    <div className="loc-wfh"><FiCloud size={14}/> WFH</div>
                  ) : (
                    <span className="time-dark">—</span>
                  )}
                </td>
                <td>
                  <span style={{ fontWeight: 600 }}>{rec.hrs}</span>
                </td>
                <td>
                  {getStatusPill(rec.status)}
                </td>
                <td style={{ position: 'relative' }}>
                  <button className="btn-dot-menu" onClick={() => setActionMenuOpen(actionMenuOpen === rec.id ? null : rec.id)}>
                    <FiMoreHorizontal />
                  </button>
                  {actionMenuOpen === rec.id && (
                    <div className="action-dropdown-menu">
                      <button 
                        className="action-dropdown-item"
                        onClick={() => {
                          setSelectedRecordDetail(rec);
                          setActionMenuOpen(null);
                        }}
                      >
                        <FiEye size={14} /> View detail
                      </button>
                      <button className="action-dropdown-item text-danger">
                        <FiTrash2 size={14} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {activeTab === "Overtime" && overtimeRecords.map((rec) => (
              <tr key={rec.id}>
                <td>
                  <div className="user-info-cell">
                    <div className={`avatar-circle avatar-${rec.color}`}>
                      {rec.initial}
                    </div>
                    <div>
                      <h4 className="user-name-text">{rec.name}</h4>
                      <p className="user-dept-text">{rec.dept}</p>
                    </div>
                  </div>
                </td>
                <td className="time-dark">{rec.date}</td>
                <td className="time-dark">{rec.regHrs}</td>
                <td><span className="text-purple">{rec.otHrs}</span></td>
                <td><span className="text-bold-dark">{rec.totalHrs}</span></td>
                <td className="time-dark">{rec.reason}</td>
                <td>
                  <button className="btn-view-pill">View</button>
                </td>
              </tr>
            ))}
            {activeTab === "Regularization" && regularizationRecords.map((rec) => (
              <tr key={rec.id}>
                <td>
                  <div className="user-info-cell">
                    <div className={`avatar-circle avatar-${rec.color}`}>
                      {rec.initial}
                    </div>
                    <div>
                      <h4 className="user-name-text">{rec.name}</h4>
                      <p className="user-dept-text">{rec.dept}</p>
                    </div>
                  </div>
                </td>
                <td className="time-dark">{rec.date}</td>
                <td>{getStatusPill(rec.missed)}</td>
                <td className="time-dark">{rec.reason}</td>
                <td className="time-dark">{rec.reqOn}</td>
                <td>{getStatusPill(rec.status)}</td>
                <td>
                  {rec.status === 'Pending' ? (
                    <div className="action-buttons-flex">
                      <button className="btn-approve-outline">Approve</button>
                      <button className="btn-reject-outline">Reject</button>
                    </div>
                  ) : (
                    <button className="btn-view-pill">View</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-footer">
          <div className="pagination-text">
            {activeTab === "Overtime" ? "Showing 1-8 of 48" : activeTab === "Regularization" ? "Showing 1-8 of 48" : activeTab === "History" ? "Showing 1-8 of 48" : "Showing 1-8 of 18"}
          </div>
          <div className="pagination-controls">
            <button className="page-btn"><FiArrowLeft size={14} /></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn"><FiArrowRight size={14} /></button>
          </div>
        </div>
      </div>
      )}

      {/* Slide-out Detail Drawer */}
      {selectedRecordDetail && (
        <div className="detail-panel-overlay" onClick={() => setSelectedRecordDetail(null)}>
          <div className="detail-panel-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div>
                <h3 className="drawer-title">{selectedRecordDetail.name}</h3>
                <p className="drawer-subtitle">April 22, 2026 - {selectedRecordDetail.status.toLowerCase()}</p>
              </div>
              <button className="drawer-close-btn" onClick={() => setSelectedRecordDetail(null)}>
                <FiX size={16} />
              </button>
            </div>
            
            <div className="drawer-body">
              <h4 className="drawer-section-title">RECORD</h4>
              <div className="drawer-record-list">
                <div className="drawer-record-row">
                  <span className="drawer-record-label">Status</span>
                  <span className="drawer-record-value">{getStatusPill(selectedRecordDetail.status)}</span>
                </div>
                <div className="drawer-record-row">
                  <span className="drawer-record-label">Check-in</span>
                  <span className="drawer-record-value">{selectedRecordDetail.checkIn}</span>
                </div>
                <div className="drawer-record-row">
                  <span className="drawer-record-label">Check-out</span>
                  <span className="drawer-record-value">{selectedRecordDetail.checkOut}</span>
                </div>
                <div className="drawer-record-row">
                  <span className="drawer-record-label">Location</span>
                  <span className="drawer-record-value">{selectedRecordDetail.loc}</span>
                </div>
                <div className="drawer-record-row">
                  <span className="drawer-record-label">Working hours</span>
                  <span className="drawer-record-value drawer-val-blue">{selectedRecordDetail.hrs}</span>
                </div>
                <div className="drawer-record-row">
                  <span className="drawer-record-label">Department</span>
                  <span className="drawer-record-value">{selectedRecordDetail.dept}</span>
                </div>
              </div>

              <h4 className="drawer-section-title">TIMELINE</h4>
              <div className="drawer-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot green"></div>
                  <p className="timeline-title">Checked in at {selectedRecordDetail.checkIn}</p>
                  <p className="timeline-subtext">{selectedRecordDetail.loc} · April 22, 2026</p>
                </div>
                {selectedRecordDetail.checkOut !== '-' && (
                  <div className="timeline-item">
                    <div className="timeline-dot blue"></div>
                    <p className="timeline-title">Checked out at {selectedRecordDetail.checkOut}</p>
                    <p className="timeline-subtext">{selectedRecordDetail.loc} · April 22, 2026</p>
                  </div>
                )}
                {selectedRecordDetail.status === 'Late' && (
                  <div className="timeline-item">
                    <div className="timeline-dot orange"></div>
                    <p className="timeline-title">Marked as late arrival</p>
                    <p className="timeline-subtext">Expected by 09:30 AM</p>
                  </div>
                )}
              </div>
            </div>

            <div className="drawer-footer">
              <button className="drawer-btn-outline" onClick={() => setSelectedRecordDetail(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceOverview;
