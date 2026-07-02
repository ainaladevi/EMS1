import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { 
  BsClockHistory, 
  BsDownload, 
  BsPeople, 
  BsFileText, 
  BsCheckCircle, 
  BsExclamationTriangle,
  BsSearch,
  BsX,
  BsSend,
  BsArrowRepeat,
  BsHouses,
  BsCalendar2,
  BsFileEarmarkText,
  BsInfoCircle,
  BsThreeDots
} from 'react-icons/bs';

const Compliance = () => {
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [activeView, setActiveView] = useState('policies');
  const [activeTab, setActiveTab] = useState('Policies');
  const [showAckModal, setShowAckModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [showHistoryDrawer, setShowHistoryDrawer] = useState(false);

  const policyList = [
    { name: 'Code of Conduct', assigned: 142, ack: 138, pending: 4, coverage: 97, color: '#16a34a' },
    { name: 'Data Privacy & GDPR Policy', assigned: 142, ack: 121, pending: 21, coverage: 85, color: '#f59e0b' },
    { name: 'Remote Work Policy', assigned: 98, ack: 85, pending: 13, coverage: 87, color: '#f59e0b' },
    { name: 'Anti-Harassment Policy', assigned: 142, ack: 140, pending: 2, coverage: 99, color: '#16a34a' },
    { name: 'IT Security Policy', assigned: 142, ack: 110, pending: 32, coverage: 77, color: '#f59e0b' },
    { name: 'Leave & Attendance Policy', assigned: 142, ack: 136, pending: 6, coverage: 96, color: '#e2e8f0' },
    { name: 'Expense Reimbursement Policy', assigned: 87, ack: 72, pending: 15, coverage: 83, color: '#e2e8f0' },
    { name: 'Grievance Redressal Policy', assigned: 142, ack: 122, pending: 20, coverage: 86, color: '#e2e8f0' }
  ];

  const myCompliancePolicies = [
    { name: 'Social Media Policy', version: '1.0', date: '2025-12-20', status: 'Pending', ackAt: '–' },
    { name: 'Acceptable Use of Technology Policy', version: '3.0', date: '2025-11-27', status: 'Acknowledged', ackAt: '12/15/2025, 6:56:14 PM' },
    { name: 'Code of Conduct', version: '1.5', date: '2025-11-17', status: 'Acknowledged', ackAt: '12/18/2025, 5:04:26 PM' },
    { name: 'Data Protection and Privacy Policy', version: '2.0', date: '2025-12-17', status: 'Acknowledged', ackAt: '1/6/2026, 2:43:24 PM' }
  ];

  const policyCategories = [
    { name: 'Health & Safety', desc: 'Workplace health, safety regulations, and emergency procedures', count: 2 },
    { name: 'HR & Benefits', desc: 'Human resources policies, benefits, and employee programs', count: 3 },
    { name: 'IT & Technology', desc: 'IT usage policies, software guidelines, and technology standards', count: 2 },
    { name: 'Security & Privacy', desc: 'Updated: Policies related to data security, privacy, and information protection', count: 1 },
    { name: 'Workplace Conduct', desc: 'Guidelines for professional behavior and workplace ethics', count: 2 }
  ];

  const acknowledgmentLogs = [
    { policy: 'Social Media Policy', user: 'Admin User', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'John Doe', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'Jane Doe sr.', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'Srinivas Kandagatla', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'Emp Test', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'HR User', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'New User', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Acceptable Use of Technology Policy', user: 'Admin User', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Acceptable Use of Technology Policy', user: 'John Doe', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Remote Work Policy', user: 'Srinivas Kandagatla', ackAt: '1/1/1970, 5:30:00 AM', ip: '—' }
  ];

  const acknowledgmentHistory = [
    { policy: 'Code of Conduct', user: 'Srinivas Kandagatla', id: 'EMP011', status: 'Acknowledged', time: '2025-12-01 09:15', statusColor: '#10b981' },
    { policy: 'Anti-Harassment Policy', user: 'Srinivas K', id: 'EMP011', status: 'Acknowledged', time: '2025-12-01 09:18', statusColor: '#10b981' },
    { policy: 'Data Privacy & GDPR Policy', user: 'Rahul Sharma', id: 'EMP002', status: 'Acknowledged', time: '2025-12-02 14:33', statusColor: '#10b981' },
    { policy: 'IT Security Policy', user: 'Ananya Reddy', id: 'EMP007', status: 'Pending', time: '—', statusColor: '#f59e0b' },
    { policy: 'Code of Conduct', user: 'Priya Nair', id: 'EMP001', status: 'Acknowledged', time: '2025-11-28 10:00', statusColor: '#10b981' },
    { policy: 'Remote Work Policy', user: 'Rahul Sharma', id: 'EMP002', status: 'Pending', time: '—', statusColor: '#f59e0b' },
    { policy: 'Leave & Attendance Policy', user: 'Kiran Patel', id: 'EMP014', status: 'Acknowledged', time: '2025-12-05 16:20', statusColor: '#10b981' },
    { policy: 'Grievance Redressal Policy', user: 'Divya Menon', id: 'EMP019', status: 'Pending', time: '—', statusColor: '#f59e0b' },
    { policy: 'IT Security Policy', user: 'Arjun Varma', id: 'EMP023', status: 'Acknowledged', time: '2025-12-08 09:45', statusColor: '#10b981' },
    { policy: 'Expense Reimbursement Policy', user: 'Emp Test', id: 'EMP003', status: 'Acknowledged', time: '2025-12-07 10:05', statusColor: '#10b981' }
  ];

  const metrics = [
    { 
      title: 'Total Employees', 
      amount: '142', 
      subtext: 'Across all departments', 
      icon: <BsPeople size={18} />, 
      iconBg: '#eff6ff', 
      iconColor: '#3b82f6',
      alert: null
    },
    { 
      title: 'Policies Assigned', 
      amount: '8', 
      subtext: 'Active company policies', 
      icon: <BsFileText size={18} />, 
      iconBg: '#f3e8ff', 
      iconColor: '#9333ea',
      alert: null
    },
    { 
      title: 'Acknowledged', 
      amount: '1,024', 
      subtext: '86% acknowledgment rate', 
      icon: <BsCheckCircle size={18} />, 
      iconBg: '#f0fdf4', 
      iconColor: '#16a34a',
      alert: null
    },
    { 
      title: 'Pending Acknowledgment', 
      amount: '168', 
      subtext: null, 
      icon: <BsExclamationTriangle size={18} />, 
      iconBg: '#fffbeb', 
      iconColor: '#d97706',
      alert: { text: 'Needs attention', color: '#d97706', bg: '#fef3c7', border: '#fde68a' }
    }
  ];

  const employees = [
    { initials: 'SK', name: 'Srinivas Kandagatla', id: 'EMP011', dept: 'Engineering', assigned: 8, ack: 8, pending: 0, progress: 100, status: 'Compliant', color: '#16a34a', bg: '#dcfce7' },
    { initials: 'RS', name: 'Rahul Sharma', id: 'EMP002', dept: 'Engineering', assigned: 8, ack: 6, pending: 2, progress: 75, status: 'Non-Compliant', color: '#ea580c', bg: '#ffedd5' },
    { initials: 'PN', name: 'Priya Nair', id: 'EMP001', dept: 'Management', assigned: 8, ack: 8, pending: 0, progress: 100, status: 'Compliant', color: '#16a34a', bg: '#dcfce7' },
    { initials: 'AR', name: 'Ananya Reddy', id: 'EMP007', dept: 'Design', assigned: 8, ack: 5, pending: 3, progress: 63, status: 'Non-Compliant', color: '#dc2626', bg: '#fee2e2' },
    { initials: 'ET', name: 'Emp Test', id: 'EMP003', dept: 'HR', assigned: 8, ack: 8, pending: 0, progress: 100, status: 'Compliant', color: '#16a34a', bg: '#dcfce7' },
    { initials: 'KP', name: 'Kiran Patel', id: 'EMP014', dept: 'Finance', assigned: 8, ack: 7, pending: 1, progress: 88, status: 'Non-Compliant', color: '#ea580c', bg: '#ffedd5' },
    { initials: 'DM', name: 'Divya Menon', id: 'EMP019', dept: 'Marketing', assigned: 8, ack: 4, pending: 4, progress: 50, status: 'Non-Compliant', color: '#ea580c', bg: '#ffedd5' },
    { initials: 'AV', name: 'Arjun Varma', id: 'EMP023', dept: 'Engineering', assigned: 8, ack: 8, pending: 0, progress: 100, status: 'Compliant', color: '#16a34a', bg: '#dcfce7' },
  ];

  return (
    <div className="container-fluid p-4" style={{ maxWidth: '1200px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <div className="d-flex align-items-center gap-2 mb-3" style={{ fontSize: '13px' }}>
            <span style={{ color: '#64748b' }}>Dashboard</span>
            <span style={{ color: '#94a3b8' }}>›</span>
            <span style={{ color: '#0f172a', fontWeight: 500 }}>Compliance</span>
          </div>
          <h2 className="fw-bold mb-1" style={{ color: '#0f172a', fontSize: '24px' }}>Compliance & Policy Management</h2>
          <p className="mb-0" style={{ color: '#64748b', fontSize: '14px' }}>Manage organizational policies, track acknowledgements, and monitor compliance.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-sm bg-white border fw-semibold d-flex align-items-center gap-2" style={{ color: '#0f172a', padding: '8px 16px', borderRadius: '8px' }} onClick={() => setShowHistoryDrawer(true)}>
            <BsClockHistory size={14} />
            History
          </button>
          <button className="btn btn-sm fw-semibold d-flex align-items-center gap-2" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '8px 16px', borderRadius: '8px' }}>
            <BsDownload size={14} />
            Export Report
          </button>
        </div>
      </div>

      {/* Toggle */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <button className={`btn btn-sm rounded-pill fw-semibold ${activeView === 'team' ? 'shadow-sm border bg-white text-primary' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '4px 16px', fontSize: '12px' }} onClick={() => setActiveView('team')}>By Team</button>
        <button className={`btn btn-sm rounded-pill fw-semibold ${activeView === 'policies' ? 'shadow-sm border bg-white text-primary' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '4px 16px', fontSize: '12px' }} onClick={() => setActiveView('policies')}>By Policies</button>
      </div>

      {/* Metrics */}
      <div className="row g-4 mb-4">
        {metrics.map((metric, idx) => (
          <div className="col-md-3" key={idx}>
            <Card className="h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff', border: metric.alert ? '1px solid #fde68a' : 'none' }}>
              <div className="d-flex gap-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '44px', height: '44px', backgroundColor: metric.iconBg, color: metric.iconColor, borderRadius: '12px' }}>
                  {metric.icon}
                </div>
                <div className="overflow-hidden">
                  <h3 className="fw-bold m-0" style={{ fontSize: '24px', color: metric.iconColor }}>{metric.amount}</h3>
                  <p className="fw-medium mb-1 text-nowrap text-truncate" style={{ fontSize: '12px', color: '#0f172a' }}>{metric.title}</p>
                  {metric.alert ? (
                    <div className="d-flex align-items-center gap-1 mt-1 px-2 py-1 rounded-pill text-nowrap" style={{ backgroundColor: metric.alert.bg, color: metric.alert.color, border: `1px solid ${metric.alert.border}`, display: 'inline-flex', fontSize: '11px', fontWeight: 600 }}>
                      <BsExclamationTriangle size={11} />
                      {metric.alert.text}
                    </div>
                  ) : (
                    <p className="m-0 text-nowrap text-truncate" style={{ fontSize: '11px', color: '#64748b' }}>{metric.subtext}</p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="d-inline-flex align-items-center bg-white p-1 rounded-pill border shadow-sm mb-4">
        <button className={`btn btn-sm fw-semibold rounded-pill d-flex align-items-center gap-2 ${activeTab === 'Policies' ? 'bg-primary text-white' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '6px 16px', fontSize: '13px' }} onClick={() => setActiveTab('Policies')}>
          Policies
          <span className={`badge rounded-pill ${activeTab === 'Policies' ? 'bg-white text-primary' : 'bg-light text-muted'}`} style={{ fontSize: '10px' }}>4</span>
        </button>
        <button className={`btn btn-sm fw-semibold rounded-pill d-flex align-items-center gap-2 ${activeTab === 'Pending' ? 'bg-primary text-white' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '6px 16px', fontSize: '13px' }} onClick={() => setActiveTab('Pending')}>
          Pending
          <span className={`badge rounded-pill ${activeTab === 'Pending' ? 'bg-white text-primary' : 'bg-light text-muted'}`} style={{ fontSize: '10px' }}>6</span>
        </button>
        <button className={`btn btn-sm fw-semibold rounded-pill d-flex align-items-center gap-2 ${activeTab === 'My Compliance' ? 'bg-primary text-white' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '6px 16px', fontSize: '13px' }} onClick={() => setActiveTab('My Compliance')}>
          My Compliance
          <span className={`badge rounded-pill ${activeTab === 'My Compliance' ? 'bg-white text-primary' : 'bg-light text-muted'}`} style={{ fontSize: '10px' }}>4</span>
        </button>
        <button className={`btn btn-sm fw-semibold rounded-pill d-flex align-items-center gap-2 ${activeTab === 'Categories' ? 'bg-primary text-white' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '6px 16px', fontSize: '13px' }} onClick={() => setActiveTab('Categories')}>
          Categories
          <span className={`badge rounded-pill ${activeTab === 'Categories' ? 'bg-white text-primary' : 'bg-light text-muted'}`} style={{ fontSize: '10px' }}>4</span>
        </button>
        <button className={`btn btn-sm fw-semibold rounded-pill d-flex align-items-center gap-2 ${activeTab === 'Acknowledgments' ? 'bg-primary text-white' : 'border-0 bg-transparent text-secondary'}`} style={{ padding: '6px 16px', fontSize: '13px' }} onClick={() => setActiveTab('Acknowledgments')}>
          Acknowledgments
          <span className={`badge rounded-pill ${activeTab === 'Acknowledgments' ? 'bg-white text-primary' : 'bg-light text-muted'}`} style={{ fontSize: '10px' }}>4</span>
        </button>
      </div>

      {activeView === 'policies' ? (
        activeTab === 'Policies' ? (
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
            <div className="p-4 border-bottom d-flex gap-3" style={{ borderColor: '#f1f5f9' }}>
              <div className="position-relative flex-grow-1">
                <BsSearch className="position-absolute text-muted" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={14} />
                <input type="text" className="form-control bg-light border-0" placeholder="Search policy name..." style={{ paddingLeft: '40px', fontSize: '13px', borderRadius: '8px', padding: '10px 40px' }} />
              </div>
              <select className="form-select border fw-medium" style={{ width: '160px', fontSize: '13px', borderRadius: '8px', color: '#0f172a' }}>
                <option>All Status</option>
              </select>
            </div>

            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead style={{ '--bs-table-bg': '#f8fafc', backgroundColor: '#f8fafc' }}>
                  <tr>
                    <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Policy Name</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Total Assigned</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Acknowledged</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Pending</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', width: '200px' }}>Coverage</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Status</th>
                    <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {policyList.map((pol, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < policyList.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                      <td className="py-3 px-4">
                        <div className="d-flex align-items-center gap-3">
                          <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: '32px', height: '32px', backgroundColor: '#f3e8ff', color: '#9333ea' }}>
                            <BsFileEarmarkText size={14} />
                          </div>
                          <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{pol.name}</div>
                        </div>
                      </td>
                      <td className="py-3 fw-bold text-dark" style={{ fontSize: '13px' }}>{pol.assigned}</td>
                      <td className="py-3 fw-bold" style={{ fontSize: '13px', color: '#16a34a' }}>{pol.ack}</td>
                      <td className="py-3 fw-bold" style={{ fontSize: '13px', color: '#ea580c' }}>{pol.pending}</td>
                      <td className="py-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="progress flex-grow-1" style={{ height: '6px', borderRadius: '3px', backgroundColor: '#f1f5f9' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: `${pol.coverage}%`, backgroundColor: pol.color }} aria-valuenow={pol.coverage} aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span className="fw-semibold text-muted" style={{ fontSize: '12px', minWidth: '32px' }}>{pol.coverage}%</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="d-inline-flex align-items-center gap-2 rounded-pill" style={{ padding: '4px 12px', fontSize: '12px', fontWeight: 600, color: '#f97316', backgroundColor: '#ffedd5' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f97316' }}></div>
                          Partial
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <button className="btn btn-sm bg-white border fw-semibold rounded-pill" style={{ fontSize: '12px', padding: '4px 16px', color: '#0f172a' }} onClick={() => setShowPolicyModal(true)}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ) : activeTab === 'Pending' ? (
        <>
          <h5 className="fw-bold text-dark mb-4" style={{ fontSize: '16px' }}>Policies Requiring your Acknowledgement</h5>
          <div className="row g-4">
            {[1,2,3,4,5,6].map(i => (
              <div className="col-md-4" key={i}>
                <Card className="h-100 p-4 border-0 shadow-sm rounded-4 d-flex flex-column" style={{ backgroundColor: '#ffffff' }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: '40px', height: '40px', border: '1px solid #bfdbfe', color: '#2563eb', backgroundColor: '#ffffff' }}>
                      <BsHouses size={18} />
                    </div>
                    <div className="px-2 py-1 rounded-pill" style={{ backgroundColor: '#ffedd5', color: '#d97706', fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px' }}>
                      PENDING
                    </div>
                  </div>
                  <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>Remote Work Policy</h5>
                  <div className="d-flex align-items-center gap-3 mb-3 text-muted" style={{ fontSize: '11px' }}>
                    <div className="d-flex align-items-center gap-1"><BsClockHistory size={11} /> Version 2.4</div>
                    <div className="d-flex align-items-center gap-1"><BsCalendar2 size={11} /> Oct 24, 2023</div>
                  </div>
                  <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: '12px', lineHeight: '1.6' }}>
                    Guidelines for maintaining operational security and productivity while working from non-traditional locations. Includes VPN requirements.
                  </p>
                  <div className="d-flex gap-2 mt-auto">
                    <button className="btn btn-sm bg-white fw-semibold flex-grow-1" style={{ color: '#2563eb', border: '1px solid #bfdbfe', borderRadius: '6px', fontSize: '12px', padding: '8px' }}>
                      Read Full Policy
                    </button>
                    <button className="btn btn-sm btn-primary fw-semibold flex-grow-1" style={{ borderRadius: '6px', fontSize: '12px', padding: '8px' }} onClick={() => setShowAckModal(true)}>
                      Acknowledge
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </>
        ) : activeTab === 'My Compliance' ? (
          <>
            <h5 className="fw-bold text-dark mb-4" style={{ fontSize: '16px' }}>My Compliance Status</h5>
            
            <div className="row g-4 mb-5">
              <div className="col-md-3">
                <Card className="h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff' }}>
                  <div className="text-muted fw-semibold mb-2" style={{ fontSize: '12px' }}>Total Policies</div>
                  <div className="fw-bold" style={{ fontSize: '28px', color: '#2563eb' }}>4</div>
                </Card>
              </div>
              <div className="col-md-3">
                <Card className="h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff' }}>
                  <div className="text-muted fw-semibold mb-2" style={{ fontSize: '12px' }}>Acknowledged</div>
                  <div className="fw-bold" style={{ fontSize: '28px', color: '#10b981' }}>3</div>
                </Card>
              </div>
              <div className="col-md-3">
                <Card className="h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff' }}>
                  <div className="text-muted fw-semibold mb-2" style={{ fontSize: '12px' }}>Pending</div>
                  <div className="fw-bold" style={{ fontSize: '28px', color: '#ea580c' }}>1</div>
                </Card>
              </div>
              <div className="col-md-3">
                <Card className="h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff' }}>
                  <div className="text-muted fw-semibold mb-2" style={{ fontSize: '12px' }}>Compliance Rate</div>
                  <div className="fw-bold" style={{ fontSize: '28px', color: '#0d9488' }}>75%</div>
                </Card>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted fw-semibold" style={{ fontSize: '12px' }}>Overall compliance progress</span>
                <span className="fw-bold" style={{ fontSize: '12px', color: '#0d9488' }}>75%</span>
              </div>
              <div className="progress" style={{ height: '8px', borderRadius: '4px', backgroundColor: '#f1f5f9' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: '#34d399' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
              <div className="p-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
                <h6 className="fw-bold m-0" style={{ fontSize: '14px' }}>All Policies</h6>
              </div>
              <div className="table-responsive">
                <table className="table mb-0 align-middle">
                  <thead style={{ '--bs-table-bg': '#f8fafc', backgroundColor: '#f8fafc' }}>
                    <tr>
                      <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Policy</th>
                      <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Version</th>
                      <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Effective Date</th>
                      <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Status</th>
                      <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Acknowledged At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCompliancePolicies.map((pol, idx) => (
                      <tr key={idx} style={{ borderBottom: idx < myCompliancePolicies.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                        <td className="py-4 px-4 fw-bold text-dark" style={{ fontSize: '13px' }}>{pol.name}</td>
                        <td className="py-4 fw-semibold text-dark" style={{ fontSize: '13px' }}>{pol.version}</td>
                        <td className="py-4 text-muted" style={{ fontSize: '13px' }}>{pol.date}</td>
                        <td className="py-4">
                          <span className="px-3 py-1 rounded-pill fw-semibold" style={{ fontSize: '11px', backgroundColor: pol.status === 'Acknowledged' ? '#dcfce7' : '#ffedd5', color: pol.status === 'Acknowledged' ? '#16a34a' : '#ea580c' }}>
                            {pol.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-muted" style={{ fontSize: '13px' }}>{pol.ackAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        ) : activeTab === 'Categories' ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark m-0" style={{ fontSize: '16px' }}>Policy Categories</h5>
              <button className="btn btn-sm btn-primary fw-semibold rounded-pill px-3 py-2" style={{ fontSize: '12px' }}>+ Add Category</button>
            </div>
            
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
              <div className="table-responsive">
                <table className="table mb-0 align-middle">
                  <thead style={{ '--bs-table-bg': '#f8fafc', backgroundColor: '#f8fafc' }}>
                    <tr>
                      <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', width: '25%' }}>Name</th>
                      <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Description</th>
                      <th className="border-bottom-0 py-3 text-uppercase text-center" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', width: '15%' }}>Policies</th>
                      <th className="border-bottom-0 py-3 text-uppercase text-center px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', width: '15%' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policyCategories.map((cat, idx) => (
                      <tr key={idx} style={{ borderBottom: idx < policyCategories.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                        <td className="py-4 px-4 fw-bold text-dark" style={{ fontSize: '13px' }}>{cat.name}</td>
                        <td className="py-4 text-muted" style={{ fontSize: '13px' }}>{cat.desc}</td>
                        <td className="py-4 text-center">
                          <span className="badge rounded-pill" style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '6px 12px', fontSize: '11px' }}>{cat.count}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="btn btn-sm btn-light rounded-circle border" style={{ width: '32px', height: '32px', color: '#94a3b8' }}>
                            <BsThreeDots />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        ) : activeTab === 'Acknowledgments' ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-baseline gap-3">
                <h5 className="fw-bold text-dark m-0" style={{ fontSize: '16px' }}>All Acknowledgments</h5>
                <div className="text-muted" style={{ fontSize: '12px' }}>Showing 10 records</div>
              </div>
              <div className="d-flex gap-3">
                <div className="position-relative">
                  <BsSearch className="position-absolute text-muted" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={14} />
                  <input type="text" className="form-control bg-white border" placeholder="Search policy or user..." style={{ paddingLeft: '40px', fontSize: '13px', borderRadius: '8px', padding: '10px 40px', width: '250px' }} />
                </div>
                <select className="form-select border bg-white" style={{ width: '180px', fontSize: '13px', borderRadius: '8px', color: '#0f172a' }}>
                  <option>All Policies</option>
                </select>
              </div>
            </div>
            
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
              <div className="table-responsive">
                <table className="table mb-0 align-middle" style={{ '--bs-table-border-color': '#f8fafc' }}>
                  <thead style={{ '--bs-table-bg': '#f8fafc', backgroundColor: '#f8fafc' }}>
                    <tr>
                      <th className="py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', width: '30%', borderBottom: '1px solid #f1f5f9' }}>Policy</th>
                      <th className="py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', borderBottom: '1px solid #f1f5f9' }}>User</th>
                      <th className="py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', borderBottom: '1px solid #f1f5f9' }}>Acknowledged At</th>
                      <th className="py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', borderBottom: '1px solid #f1f5f9' }}>IP Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acknowledgmentLogs.map((log, idx) => (
                      <tr key={idx}>
                        <td className={`py-4 px-4 text-dark ${idx === acknowledgmentLogs.length - 1 ? 'border-bottom-0' : ''}`} style={{ fontSize: '13px' }}>{log.policy}</td>
                        <td className={`py-4 text-dark ${idx === acknowledgmentLogs.length - 1 ? 'border-bottom-0' : ''}`} style={{ fontSize: '13px' }}>{log.user}</td>
                        <td className={`py-4 text-muted ${idx === acknowledgmentLogs.length - 1 ? 'border-bottom-0' : ''}`} style={{ fontSize: '13px' }}>{log.ackAt}</td>
                        <td className={`py-4 px-4 text-muted ${idx === acknowledgmentLogs.length - 1 ? 'border-bottom-0' : ''}`} style={{ fontSize: '13px' }}>{log.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        ) : null
      ) : (
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        <div className="p-4 border-bottom d-flex gap-3" style={{ borderColor: '#f1f5f9' }}>
          <div className="position-relative flex-grow-1">
            <BsSearch className="position-absolute text-muted" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={14} />
            <input type="text" className="form-control bg-light border-0" placeholder="Search employee name or ID..." style={{ paddingLeft: '40px', fontSize: '13px', borderRadius: '8px', padding: '10px 40px' }} />
          </div>
          <select className="form-select border fw-medium" style={{ width: '180px', fontSize: '13px', borderRadius: '8px', color: '#0f172a' }}>
            <option>All Departments</option>
          </select>
          <select className="form-select border fw-medium" style={{ width: '160px', fontSize: '13px', borderRadius: '8px', color: '#0f172a' }}>
            <option>All Status</option>
          </select>
        </div>

        <div className="table-responsive">
          <table className="table table-hover mb-0 align-middle">
            <thead style={{ '--bs-table-bg': '#f8fafc', backgroundColor: '#f8fafc' }}>
              <tr>
                <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Employee</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Assigned</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Acknowledged</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Pending</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', width: '150px' }}>Progress</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Status</th>
                <th className="border-bottom-0 py-3 text-uppercase text-center px-4" style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx} style={{ borderBottom: idx < employees.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <td className="py-3 px-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center justify-content-center fw-bold" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: emp.bg, color: emp.color, fontSize: '13px' }}>
                        {emp.initials}
                      </div>
                      <div>
                        <div className="fw-semibold text-dark" style={{ fontSize: '13px', marginBottom: '2px' }}>{emp.name}</div>
                        <div className="text-muted" style={{ fontSize: '11px' }}>{emp.id} • {emp.dept}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-dark fw-bold" style={{ fontSize: '13px' }}>{emp.assigned}</td>
                  <td className="py-3 fw-bold" style={{ fontSize: '13px', color: '#16a34a' }}>{emp.ack}</td>
                  <td className="py-3 fw-bold" style={{ fontSize: '13px', color: emp.pending > 0 ? '#ea580c' : '#94a3b8' }}>{emp.pending}</td>
                  <td className="py-3">
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '4px', borderRadius: '2px', backgroundColor: '#f1f5f9' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${emp.progress}%`, backgroundColor: emp.status === 'Compliant' ? '#16a34a' : '#f59e0b' }} aria-valuenow={emp.progress} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span className="text-muted" style={{ fontSize: '11px', width: '30px' }}>{emp.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ backgroundColor: '#f0fdf4' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: emp.status === 'Compliant' ? '#10b981' : '#ef4444' }}></div>
                      <span className="fw-semibold" style={{ fontSize: '11px', color: emp.status === 'Compliant' ? '#10b981' : '#ef4444' }}>{emp.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="btn btn-sm bg-white border fw-semibold" style={{ color: '#0f172a', fontSize: '11px', padding: '6px 12px', borderRadius: '6px' }} onClick={() => setSelectedEmp(emp)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-3 border-top d-flex justify-content-between align-items-center" style={{ borderColor: '#f1f5f9', backgroundColor: '#ffffff' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Showing 1–8 of 142 employees</span>
          <div className="d-flex gap-1">
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#94a3b8' }}>‹</button>
            <button className="btn btn-sm btn-primary border-0" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 600 }}>1</button>
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#64748b' }}>2</button>
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#64748b' }}>3</button>
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#94a3b8' }}>›</button>
          </div>
        </div>
      </Card>
      )}

      {/* Employee Details Drawer */}
      {selectedEmp && (
        <div className="ems-drawer-overlay">
          <div className="ems-drawer-content" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Drawer Header */}
            <div className="d-flex justify-content-between align-items-center p-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <div>
                <h4 className="fw-bold m-0" style={{ fontSize: '16px', color: '#0f172a' }}>{selectedEmp.name}</h4>
                <p className="m-0" style={{ fontSize: '12px', color: '#94a3b8' }}>{selectedEmp.id} - Junior Developer L1</p>
              </div>
              <button className="btn btn-sm border bg-light" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }} onClick={() => setSelectedEmp(null)}>
                <BsX size={18} />
              </button>
            </div>
            
            {/* Drawer Body (Scrollable) */}
            <div className="p-4" style={{ overflowY: 'auto', flexGrow: 1 }}>
              {/* Profile Header Box */}
              <div className="p-3 mb-4 rounded-3 d-flex align-items-center gap-3" style={{ backgroundColor: '#f8fafc' }}>
                <div className="d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#2563eb', fontSize: '16px' }}>
                  {selectedEmp.initials}
                </div>
                <div>
                  <h6 className="fw-semibold m-0" style={{ fontSize: '14px', color: '#0f172a' }}>{selectedEmp.name}</h6>
                  <p className="m-0" style={{ fontSize: '12px', color: '#64748b' }}>{selectedEmp.id} • {selectedEmp.dept} • Junior Developer L1</p>
                </div>
              </div>

              {/* Status Box */}
              <div className="p-3 mb-4 rounded-4 d-flex align-items-center gap-4" style={{ backgroundColor: selectedEmp.progress === 100 ? '#f0fdf4' : '#ecfdf5', border: selectedEmp.progress === 100 ? '1px solid #bbf7d0' : '1px solid #a7f3d0' }}>
                <div style={{ width: '48px', height: '48px' }}>
                  <svg viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#dcfce7" strokeWidth="4" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={selectedEmp.progress === 100 ? '#10b981' : '#f59e0b'} strokeWidth="4" strokeDasharray={`${selectedEmp.progress}, 100`} />
                    <text x="18" y="21" className="fw-bold" style={{ fontSize: '9px' }} fill="#0f172a" textAnchor="middle">{selectedEmp.progress}%</text>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold m-0" style={{ fontSize: '14px', color: '#0f172a' }}>{selectedEmp.progress === 100 ? 'Fully Compliant' : 'Partially Compliant'}</h6>
                  <p className="m-0" style={{ fontSize: '12px', color: '#64748b' }}>{selectedEmp.ack} of {selectedEmp.assigned} policies acknowledged • {selectedEmp.pending} pending</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="d-flex gap-4 border-bottom mb-4" style={{ borderColor: '#f1f5f9' }}>
                <div className="pb-2 fw-semibold" style={{ fontSize: '13px', color: '#2563eb', borderBottom: '2px solid #2563eb', cursor: 'pointer' }}>Policies</div>
                <div className="pb-2 fw-medium" style={{ fontSize: '13px', color: '#64748b', cursor: 'pointer' }}>History</div>
              </div>

              {/* Assigned Policies */}
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>ASSIGNED POLICIES (6)</div>
              
              <div className="d-flex flex-column gap-3">
                {/* Policy 1 */}
                <div className="p-3 rounded-3 border d-flex justify-content-between align-items-center" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                  <div>
                    <div className="fw-semibold text-dark mb-1" style={{ fontSize: '13px' }}>Code of Conduct</div>
                    <div className="text-muted" style={{ fontSize: '11px', fontFamily: 'monospace' }}>Acknowledged: 2025-12-01 09:15</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', backgroundColor: '#ecfdf5', cursor: 'pointer' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                    Acknowledged
                  </div>
                </div>

                {/* Policy 2 */}
                <div className="p-3 rounded-3 border d-flex justify-content-between align-items-center" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                  <div>
                    <div className="fw-semibold text-dark mb-1" style={{ fontSize: '13px' }}>Data Privacy & GDPR Policy</div>
                    <div className="text-muted" style={{ fontSize: '11px', fontFamily: 'monospace' }}>Acknowledged: 2025-12-03 11:22</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', backgroundColor: '#ecfdf5', cursor: 'pointer' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                    Acknowledged
                  </div>
                </div>

                {/* Policy 3 (Pending) */}
                <div className="p-3 rounded-3 border d-flex align-items-center gap-3" style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}>
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '36px', height: '36px', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: '8px', border: '1px solid #fde68a' }}>
                    <BsExclamationTriangle size={14} />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold text-dark mb-1" style={{ fontSize: '13px' }}>Remote Work Policy</div>
                    <div className="text-muted" style={{ fontSize: '11px', fontFamily: 'monospace' }}>Not yet acknowledged</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ fontSize: '11px', fontWeight: 700, color: '#ea580c', backgroundColor: '#ffedd5', cursor: 'pointer' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ea580c' }}></div>
                    Pending
                  </div>
                </div>

                {/* Policy 4 */}
                <div className="p-3 rounded-3 border d-flex justify-content-between align-items-center" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                  <div>
                    <div className="fw-semibold text-dark mb-1" style={{ fontSize: '13px' }}>Anti-Harassment Policy</div>
                    <div className="text-muted" style={{ fontSize: '11px', fontFamily: 'monospace' }}>Acknowledged: 2025-12-01 09:18</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', backgroundColor: '#ecfdf5', cursor: 'pointer' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                    Acknowledged
                  </div>
                </div>
                
                {/* Policy 5 (Pending) */}
                <div className="p-3 rounded-3 border d-flex align-items-center gap-3" style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}>
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '36px', height: '36px', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: '8px', border: '1px solid #fde68a' }}>
                    <BsExclamationTriangle size={14} />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold text-dark mb-1" style={{ fontSize: '13px' }}>IT Security Policy</div>
                    <div className="text-muted" style={{ fontSize: '11px', fontFamily: 'monospace' }}>Not yet acknowledged</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ fontSize: '11px', fontWeight: 700, color: '#ea580c', backgroundColor: '#ffedd5', cursor: 'pointer' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ea580c' }}></div>
                    Pending
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-top bg-white d-flex gap-3 mt-auto" style={{ borderColor: '#f1f5f9' }}>
              <button className="btn fw-semibold flex-grow-1 d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#fffbeb', color: '#ea580c', border: '1px solid #fde68a', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setSelectedEmp(null)}>
                <BsSend size={14} />
                Send Reminder
              </button>
              <button className="btn bg-white border fw-semibold flex-grow-1 d-flex align-items-center justify-content-center gap-2" style={{ color: '#0f172a', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setSelectedEmp(null)}>
                <BsArrowRepeat size={14} />
                Reassign Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Acknowledgment Modal */}
      {showAckModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="bg-white p-5 rounded-4 shadow-lg" style={{ width: '480px', maxWidth: '90%' }}>
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: '40px', height: '40px', border: '1px solid #bfdbfe', color: '#2563eb', backgroundColor: '#ffffff' }}>
                <BsHouses size={18} />
              </div>
              <span className="fw-bold text-muted text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>Remote Work Policy</span>
            </div>
            
            <h3 className="fw-bold text-dark mb-4">Confirm Acknowledgment</h3>
            
            <p className="text-secondary mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>
              By clicking confirm, you certify that you have read and understood the <span className="fw-bold text-dark text-decoration-underline">Data Integrity & Ethical Governance Protocol</span>.
            </p>
            
            <div className="d-flex gap-3 p-3 rounded-3 mb-4" style={{ backgroundColor: '#f8fafc' }}>
              <BsInfoCircle className="flex-shrink-0 mt-1" style={{ color: '#64748b' }} size={16} />
              <p className="m-0 text-muted" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                This action will be permanently recorded in the <span className="fw-bold text-dark">Audit Trail</span> and associated with your employee record for compliance verification.
              </p>
            </div>
            
            <div className="d-flex flex-column gap-3">
              <button className="btn btn-primary fw-bold py-3 rounded-3 d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '15px', backgroundColor: '#2563eb', borderColor: '#2563eb' }} onClick={() => setShowAckModal(false)}>
                Confirm & Acknowledged <BsCheckCircle size={16} />
              </button>
              <button className="btn bg-white border fw-bold py-3 rounded-3" style={{ fontSize: '15px', color: '#334155' }} onClick={() => setShowAckModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Policy Details Modal */}
      {showPolicyModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="p-4 position-relative d-flex flex-column" style={{ width: '600px', maxWidth: '90%', maxHeight: '90vh', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: '0px 24px 48px 0px rgba(25, 28, 29, 0.06)', borderRadius: '24px' }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="fw-bold text-dark" style={{ fontSize: '14px' }}>Policy Details</span>
              <button className="btn btn-sm btn-light rounded-circle border-0 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }} onClick={() => setShowPolicyModal(false)}>
                <BsX size={20} />
              </button>
            </div>
            
            {/* Title & Metadata */}
            <div className="mb-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="fw-bold text-dark m-0" style={{ fontSize: '28px', letterSpacing: '-0.5px' }}>Social Media Policy</h2>
                <span className="badge rounded-pill fw-bold text-muted" style={{ backgroundColor: '#e2e8f0', letterSpacing: '0.5px', padding: '6px 12px', fontSize: '10px' }}>ARCHIVED</span>
              </div>
              
              <div className="row g-4">
                <div className="col-3">
                  <div className="text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Category</div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>Communications</div>
                </div>
                <div className="col-3">
                  <div className="text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Version</div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>2.4.1</div>
                </div>
                <div className="col-3">
                  <div className="text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Effective Date</div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>Jan 12, 2023</div>
                </div>
                <div className="col-3">
                  <div className="text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Created Date</div>
                  <div className="fw-semibold text-dark" style={{ fontSize: '13px' }}>Oct 05, 2022 • 14:32</div>
                </div>
              </div>
            </div>
            
            {/* Document Content */}
            <div className="bg-white rounded-4 position-relative overflow-hidden" style={{ flexGrow: 1, minHeight: '300px' }}>
              <div className="p-4 p-md-5" style={{ height: '320px', overflowY: 'auto', paddingBottom: '100px' }}>
                <h4 className="fw-bold mb-4" style={{ fontSize: '20px', color: '#0f172a' }}># Social Media Policy</h4>
                <p className="mb-4" style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                  This policy outlines the standards of conduct expected of all employees when using social media platforms, whether for professional or personal use.
                </p>
                <h5 className="fw-normal text-dark mb-4" style={{ fontSize: '16px' }}>## Guidelines</h5>
                <ul className="list-unstyled m-0" style={{ fontSize: '13px', lineHeight: '1.8', color: '#475569' }}>
                  <li className="d-flex gap-3 mb-3"><span className="fw-bold text-dark">01.</span> <span>Maintain professional integrity and transparency in all digital interactions representing the organization.</span></li>
                  <li className="d-flex gap-3 mb-3"><span className="fw-bold text-dark">02.</span> <span>Confidential information, including trade secrets and client data, must never be shared on public platforms.</span></li>
                  <li className="d-flex gap-3 mb-3"><span className="fw-bold text-dark">03.</span> <span>Personal opinions should be clearly labeled as such and not attributed to the company's official stance.</span></li>
                  <li className="d-flex gap-3 mb-3"><span className="fw-bold text-dark">04.</span> <span>Abide by all copyright laws when sharing media or documents owned by third parties.</span></li>
                  <li className="d-flex gap-3 mb-0" style={{ color: '#94a3b8' }}><span className="fw-bold text-muted">05.</span> <span>Any harassment, bullying, or discriminatory language used on social media is a violation of the code of conduct.</span></li>
                </ul>
              </div>
              
              {/* Fade out and button */}
              <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center align-items-end pb-4 pointer-events-none" style={{ height: '100px', background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,1) 100%)' }}>
                <button className="btn btn-primary fw-semibold rounded-pill px-5 py-2 shadow pointer-events-auto" style={{ fontSize: '14px', backgroundColor: '#2563eb', border: 'none' }} onClick={() => setShowPolicyModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Acknowledgment History Drawer */}
      {showHistoryDrawer && (
        <div className="position-fixed top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1050 }}>
          <div className="position-absolute top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column" style={{ width: '480px', borderLeft: '1px solid #e2e8f0', animation: 'slideInRight 0.3s ease-out' }}>
            {/* Header */}
            <div className="p-4 position-relative border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <h4 className="fw-bold mb-1" style={{ fontSize: '18px', color: '#0f172a' }}>Acknowledgment History</h4>
              <p className="mb-0" style={{ fontSize: '13px', color: '#64748b' }}>Complete audit trail of policy acknowledgments</p>
              <button className="btn btn-sm btn-light rounded-3 position-absolute border-0 d-flex align-items-center justify-content-center p-0" style={{ top: '24px', right: '24px', width: '32px', height: '32px', backgroundColor: '#f1f5f9' }} onClick={() => setShowHistoryDrawer(false)}>
                <BsX size={20} className="text-muted" />
              </button>
            </div>

            {/* Controls */}
            <div className="p-4 d-flex gap-3">
              <div className="position-relative flex-grow-1">
                <BsSearch className="position-absolute text-muted" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={14} />
                <input type="text" className="form-control border-0" placeholder="Search policy or employee..." style={{ backgroundColor: '#f8fafc', paddingLeft: '40px', fontSize: '13px', borderRadius: '8px', padding: '10px 40px' }} />
              </div>
              <select className="form-select border bg-white fw-medium" style={{ width: '130px', fontSize: '13px', borderRadius: '8px', color: '#334155' }}>
                <option>All Actions</option>
              </select>
            </div>

            {/* List */}
            <div className="flex-grow-1 overflow-auto px-4 pb-4">
              <div className="d-flex flex-column">
                {acknowledgmentHistory.map((item, idx) => (
                  <div key={idx} className="py-3 d-flex align-items-center justify-content-between" style={{ borderBottom: idx < acknowledgmentHistory.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <div className="d-flex align-items-start gap-3">
                      <div className="mt-2" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.statusColor }}></div>
                      <div>
                        <div className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>{item.policy}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                          {item.user} • {item.id} • <span className="fw-bold" style={{ color: '#475569' }}>{item.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-muted" style={{ fontSize: '11px', fontFamily: 'monospace' }}>
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compliance;
