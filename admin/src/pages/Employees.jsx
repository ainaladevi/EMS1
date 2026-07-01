import React from 'react';
import { FiDownload, FiPlus, FiSearch, FiMoreVertical, FiUser, FiCheckCircle, FiCalendar, FiAlertCircle, FiChevronLeft, FiChevronRight, FiMonitor, FiList, FiTrash2, FiMinusCircle } from 'react-icons/fi';
import './HROverview.css';
import EmployeeProfileModal from './EmployeeProfileModal';
import DeleteEmployeeModal from './DeleteEmployeeModal';
import EmploymentHistoryModal from './EmploymentHistoryModal';
import CreateEmployeeModal from './CreateEmployeeModal';

const Employees = () => {
  const employees = [
    { id: 1, empId: 'EMP002', email: 'manager@example.com', name: 'Ravi Kumar', designation: 'Engineering Manager', dept: 'Engineering', deptClass: 'engineering', initial: 'RK', avatarColor: '#F5F3FF', textColor: '#7C3AED' },
    { id: 2, empId: 'EMP003', email: 'employee@example.com', name: 'Emp Test', designation: 'Software Engineer', dept: 'Engineering', deptClass: 'engineering', initial: 'ET', avatarColor: '#FEF2F2', textColor: '#EF4444' },
    { id: 3, empId: 'EMP004', email: 'kiran@example.com', name: 'Kiran Patel', designation: 'HR Specialist', dept: 'HR', deptClass: 'hr', initial: 'KP', avatarColor: '#EFF6FF', textColor: '#2563EB' },
    { id: 4, empId: 'EMP005', email: 'manager@example.com', name: 'Ravi Kumar', designation: 'Engineering Manager', dept: 'Engineering', deptClass: 'engineering', initial: 'RK', avatarColor: '#F5F3FF', textColor: '#7C3AED' },
    { id: 5, empId: 'EMP006', email: 'srinivas@gmail.com', name: 'Srinivas', designation: 'Software Engineer', dept: 'Engineering', deptClass: 'engineering', initial: 'SK', avatarColor: '#FFFBEB', textColor: '#F59E0B' },
    { id: 6, empId: 'EMP007', email: 'kiran@example.com', name: 'Kiran Patel', designation: 'HR Specialist', dept: 'HR', deptClass: 'hr', initial: 'KP', avatarColor: '#EFF6FF', textColor: '#2563EB' },
    { id: 7, empId: 'EMP008', email: 'priya@example.com', name: 'Priya Sharma', designation: 'Product Manager', dept: 'Product', deptClass: 'product', initial: 'PS', avatarColor: '#EFF6FF', textColor: '#2563EB' },
    { id: 8, empId: 'EMP009', email: 'kiran@example.com', name: 'Kiran Patel', designation: 'HR Specialist', dept: 'HR', deptClass: 'hr', initial: 'KP', avatarColor: '#EFF6FF', textColor: '#2563EB' },
  ];

  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [viewModalEmp, setViewModalEmp] = React.useState(null);
  const [deleteModalEmp, setDeleteModalEmp] = React.useState(null);
  const [historyModalEmp, setHistoryModalEmp] = React.useState(null);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [selectedEmps, setSelectedEmps] = React.useState([]);

  const toggleSelect = (id) => {
    setSelectedEmps(prev => 
      prev.includes(id) ? prev.filter(empId => empId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEmps(employees.map(emp => emp.id));
    } else {
      setSelectedEmps([]);
    }
  };

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  React.useEffect(() => {
    const closeDropdown = () => setActiveDropdown(null);
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className="hr-overview-page">
      <div className="hr-page-header">
        <div>
          <div className="hr-breadcrumb">Dashboard &gt; <span className="hr-breadcrumb-active">HR Overview</span></div>
          <h1 className="hr-page-title">HR Overview</h1>
        </div>
        <div className="hr-header-actions">
          <button onClick={() => alert("Button clicked!")} className="btn-outline-custom">
            <FiDownload /> Upload Document
          </button>
          <button onClick={() => alert("Button clicked!")} className="btn-outline-custom">
            <FiCheckCircle /> Onboard Task
          </button>
          <button className="btn-primary-custom" onClick={() => setShowCreateModal(true)}>
            <FiPlus /> Create Profile
          </button>
        </div>
      </div>

      <div className="hr-stats-row">
        <div className="hr-stat-card">
          <div className="hr-stat-header">
            <span className="hr-stat-label">TOTAL EMPLOYEES</span>
            <div className="hr-stat-icon icon-blue"><FiUser size={16} /></div>
          </div>
          <div className="hr-stat-value">24</div>
          <div className="hr-stat-sub">Total employees in the company</div>
        </div>
        <div className="hr-stat-card">
          <div className="hr-stat-header">
            <span className="hr-stat-label">ACTIVE TODAY</span>
            <div className="hr-stat-icon icon-green" style={{position: 'relative'}}>
              <FiMonitor size={18} />
              <div style={{position: 'absolute', bottom: '6px', right: '4px', background: '#ECFDF5', borderRadius: '50%', padding: '0'}}>
                <FiCheckCircle size={10} style={{fill: '#10B981', color: '#fff'}} />
              </div>
            </div>
          </div>
          <div className="hr-stat-value">5</div>
          <div className="hr-stat-sub">Active employee for today</div>
        </div>
        <div className="hr-stat-card">
          <div className="hr-stat-header">
            <span className="hr-stat-label">ON LEAVE</span>
            <div className="hr-stat-icon icon-orange"><FiCalendar size={16} /></div>
          </div>
          <div className="hr-stat-value">5</div>
          <div className="hr-stat-sub">Employees on Leave</div>
        </div>
        <div className="hr-stat-card">
          <div className="hr-stat-header">
            <span className="hr-stat-label">PENDING ONBOARD</span>
            <div className="hr-stat-icon icon-red"><FiMinusCircle size={16} /></div>
          </div>
          <div className="hr-stat-value text-red">2</div>
          <div className="hr-stat-sub text-red">Onboarding tasks in progress</div>
        </div>
      </div>

      <div className="hr-table-container">
        <div className="hr-toolbar">
          <div className="hr-search">
            <FiSearch className="hr-search-icon" />
            <input type="text" className="hr-search-input" placeholder="Search name, employee ID or email..." />
          </div>
          <select className="hr-select">
            <option>All departments</option>
          </select>
          <select className="hr-select">
            <option>Active</option>
          </select>
          <select className="hr-select">
            <option>Sort: Emp ID</option>
          </select>
          <button onClick={() => alert("Button clicked!")} className="btn-reset">Reset</button>
        </div>

        <div className="hr-sub-toolbar" style={{ justifyContent: selectedEmps.length > 0 ? 'space-between' : 'flex-end' }}>
          {selectedEmps.length > 0 ? (
            <div style={{ color: '#2563EB', fontSize: '13px', fontWeight: '600' }}>
              {selectedEmps.length} employee{selectedEmps.length > 1 ? 's' : ''} selected
            </div>
          ) : <div></div>}
          <div style={{ display: 'flex', gap: '12px' }}>
            {selectedEmps.length > 0 && (
              <>
                <button onClick={() => alert("Button clicked!")} className="btn-edit-sub">Edit</button>
                <button className="btn-delete-sub" onClick={() => setDeleteModalEmp(employees.find(e => e.id === selectedEmps[0]))}>Delete</button>
              </>
            )}
            <button className="btn-history" onClick={() => {
              if (selectedEmps.length > 0) {
                setHistoryModalEmp(employees.find(e => e.id === selectedEmps[0]));
              }
            }}>History</button>
            <button onClick={() => alert("Button clicked!")} className="btn-bulk-onboard">Bulk onboard</button>
          </div>
        </div>

        <table className="hr-table">
          <thead>
            <tr>
              <th width="5%">
                <input 
                  type="checkbox" 
                  checked={selectedEmps.length === employees.length && employees.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th width="5%">#</th>
              <th width="25%">Employee</th>
              <th width="20%">Name</th>
              <th width="20%">Designation</th>
              <th width="15%">Department</th>
              <th width="10%">Status</th>
              <th width="5%">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={emp.id} className={selectedEmps.includes(emp.id) ? 'hr-row-selected' : ''}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedEmps.includes(emp.id)}
                    onChange={() => toggleSelect(emp.id)}
                  />
                </td>
                <td>{idx + 1}</td>
                <td>
                  <div className="emp-info-cell">
                    <div className="emp-avatar" style={{background: emp.avatarColor, color: emp.textColor}}>{emp.initial}</div>
                    <div>
                      <p className="emp-id-text">{emp.empId}</p>
                      <p className="emp-email-text">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td><span className="emp-name-text">{emp.name}</span></td>
                <td>{emp.designation}</td>
                <td><span className={`dept-pill dept-${emp.deptClass}`}>{emp.dept}</span></td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="status-dot"></span>
                    <span style={{ whiteSpace: 'nowrap' }}>Active</span>
                  </div>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="btn-action-outline" onClick={() => setViewModalEmp(emp)}>View</button>
                    <button onClick={() => alert("Button clicked!")} className="btn-action-outline">Onboard</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="hr-pagination">
          <span>Showing 1-8 of 8 employees</span>
          <div className="pagination-controls">
            <button onClick={() => alert("Button clicked!")} className="page-btn"><FiChevronLeft /></button>
            <button onClick={() => alert("Button clicked!")} className="page-btn active">1</button>
            <button onClick={() => alert("Button clicked!")} className="page-btn">2</button>
            <button onClick={() => alert("Button clicked!")} className="page-btn"><FiChevronRight /></button>
          </div>
        </div>
      </div>

      <EmployeeProfileModal 
        show={!!viewModalEmp} 
        onClose={() => setViewModalEmp(null)} 
        employee={viewModalEmp} 
      />

      <DeleteEmployeeModal 
        show={!!deleteModalEmp}
        onClose={() => setDeleteModalEmp(null)}
        employee={deleteModalEmp}
      />

      <EmploymentHistoryModal
        show={!!historyModalEmp}
        onClose={() => setHistoryModalEmp(null)}
        employee={historyModalEmp}
      />

      <CreateEmployeeModal 
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default Employees;
