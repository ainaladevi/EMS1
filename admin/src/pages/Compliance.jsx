import React, { useState } from 'react';
import { FiRefreshCw, FiPlus, FiCalendar, FiInfo, FiCheckCircle, FiSearch, FiCheck, FiDownload } from 'react-icons/fi';
import { MdOutlineHomeWork, MdOutlineHistory } from 'react-icons/md';
import './Compliance.css';

const Compliance = () => {
  const [activeTab, setActiveTab] = useState('Acknowledgments');
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

  const tabs = [
    { name: 'Policies', count: 4 },
    { name: 'Pending', count: 6 },
    { name: 'My Compliance', count: 4 },
    { name: 'Categories', count: 4 },
    { name: 'Acknowledgments', count: 4 },
    { name: 'Compliance Report', count: 4 },
  ];

  const tableData = [
    { title: 'Social Media Policy', category: 'Workplace Conduct', date: '20-12-2025', version: '1.0', status: 'Published', mandatory: '-' },
    { title: 'Social Media Policy', category: 'Workplace Conduct', date: '20-12-2025', version: '1.0', status: 'Published', mandatory: '-' },
    { title: 'Social Media Policy', category: 'Workplace Conduct', date: '20-12-2025', version: '1.0', status: 'Published', mandatory: '-' },
    { title: 'Social Media Policy', category: 'Workplace Conduct', date: '20-12-2025', version: '1.0', status: 'Published', mandatory: '-' },
    { title: 'Social Media Policy', category: 'Workplace Conduct', date: '20-12-2025', version: '1.0', status: 'Published', mandatory: '-' },
  ];

  const pendingPolicies = Array(6).fill({
    title: 'Remote Work Policy',
    version: '2.4',
    date: 'Oct 24, 2023',
    description: 'Guidelines for maintaining operational security and productivity while working from non-traditional locations. Includes VPN requirements.',
    status: 'PENDING'
  });

  const myCompliancePolicies = [
    { name: 'Social Media Policy', version: '1.0', effectiveDate: '2025-12-20', status: 'Pending', ackDate: '-' },
    { name: 'Acceptable Use of Technology Policy', version: '3.0', effectiveDate: '2025-11-27', status: 'Acknowledged', ackDate: '12/15/2025, 6:56:14 PM' },
    { name: 'Code of Conduct', version: '1.5', effectiveDate: '2025-11-17', status: 'Acknowledged', ackDate: '12/15/2025, 6:56:14 PM' },
    { name: 'Data Protection and Privacy Policy', version: '2.0', effectiveDate: '2025-12-17', status: 'Acknowledged', ackDate: '12/15/2025, 6:56:14 PM' },
  ];

  const policyCategories = [
    { name: 'Health & Safety', desc: 'Workplace health, safety regulations, and emergency procedures', count: 2 },
    { name: 'HR & Benefits', desc: 'Human resources policies, benefits, and employee programs', count: 2 },
    { name: 'IT & Technology', desc: 'IT usage policies, software guidelines, and technology standards', count: 2 },
    { name: 'Security & Privacy', desc: 'Updated: Policies related to data security, privacy, and information protection', count: 2 },
    { name: 'Workplace Conduct', desc: 'Guidelines for professional behavior and workplace ethics', count: 2 },
  ];

  const acknowledgmentsData = [
    { policy: 'Social Media Policy', user: 'Admin User', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'John Doe', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'Jane Doe sr.', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'Srinivas', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'Emp Test', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'HR User', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Social Media Policy', user: 'New User', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Acceptable Use of Technology Policy', user: 'Admin User', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Acceptable Use of Technology Policy', user: 'John Doe', date: '1/1/1970, 5:30:00 AM', ip: '—' },
    { policy: 'Remote Work Policy', user: 'Srinivas', date: '1/1/1970, 5:30:00 AM', ip: '—' },
  ];

  const complianceReportData = [
    { name: 'new user', email: 'Newuser@gmail.com', role: 'employee', total: 3, ack: 0, pending: 3, overdue: 0, compRate: 0, color: 'red' },
    { name: 'pego King', email: 'pego@gmail.com', role: 'employee', total: 3, ack: 0, pending: 3, overdue: 0, compRate: 0, color: 'red' },
    { name: 'Ganesh Frontend', email: 'ganesh@email.com', role: 'employee', total: 3, ack: 0, pending: 3, overdue: 0, compRate: 0, color: 'red' },
    { name: 'Srinivas K', email: 'employee3@example.com', role: 'employee', total: 3, ack: 0, pending: 3, overdue: 0, compRate: 0, color: 'red' },
    { name: 'Admin User', email: 'admin@example.com', role: 'admin', total: 5, ack: 2, pending: 3, overdue: 0, compRate: 40, color: 'orange' },
    { name: 'Srinivas Kandagatla', email: 'srinivas@example.com', role: 'manager', total: 5, ack: 3, pending: 2, overdue: 0, compRate: 60, color: 'blue' },
  ];

  return (
    <div className="compliance-page">
      <div className="comp-header">
        <div className="breadcrumb">Dashboard &gt; <span className="breadcrumb-active">Compliance</span></div>
        <div className="comp-header-top">
          <div>
            <h1 className="page-title">Compliance & Policy Management</h1>
            <p className="page-subtitle">Manage organizational policies, track acknowledgements, and monitor compliance.</p>
          </div>
          <div className="comp-actions">
            <button className="btn-new-policy" onClick={() => setShowCreateModal(true)}><FiPlus size={14} /> New Policy</button>
            <button onClick={() => console.log("Button clicked!")} className="btn-refresh"><FiRefreshCw size={14} /> Refresh</button>
          </div>
        </div>
      </div>

      {showSuccessBanner && (
        <div className="comp-success-banner">
          <div className="comp-success-content">
            <FiCheck className="success-icon" size={16} />
            <span className="success-text">Policy published successfully and employees have been notified.</span>
          </div>
          <button className="success-close" onClick={() => setShowSuccessBanner(false)}>×</button>
        </div>
      )}

      <div className="comp-tabs-container">
        {tabs.map((tab) => (
          <button 
            key={tab.name}
            className={`comp-tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name} <span className="comp-badge">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="comp-content">
        {activeTab === 'Policies' && (
          <>
            <h2 className="comp-section-title">Company Policies</h2>
            <div className="comp-card">
              <div className="comp-card-header">
                <h3>All Policies</h3>
              </div>
              <table className="comp-table">
                <thead>
                  <tr>
                    <th width="25%">Title</th>
                    <th width="20%">Category</th>
                    <th width="15%">Effective date</th>
                    <th width="10%">Version</th>
                    <th width="10%">Status</th>
                    <th width="10%" style={{ textAlign: 'center' }}>Mandatory</th>
                    <th width="10%" style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="text-dark">{row.title}</td>
                      <td>{row.category}</td>
                      <td>{row.date}</td>
                      <td>{row.version}</td>
                      <td><span className="status-pill status-published">{row.status}</span></td>
                      <td style={{ textAlign: 'center' }}>{row.mandatory}</td>
                      <td style={{ textAlign: 'right' }}>
                        <button onClick={() => console.log("Button clicked!")} className="btn-view">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'Pending' && (
          <>
            <h2 className="comp-section-title">Policies Requiring your Acknowledgement</h2>
            <div className="pending-grid">
              {pendingPolicies.map((policy, index) => (
                <div className="policy-card" key={index}>
                  <div className="policy-card-top">
                    <div className="policy-icon-wrapper">
                      <MdOutlineHomeWork size={20} className="policy-icon" />
                    </div>
                    <span className="status-pill status-pending">{policy.status}</span>
                  </div>
                  <h3 className="policy-title">{policy.title}</h3>
                  <div className="policy-meta">
                    <span className="meta-item"><MdOutlineHistory size={14} /> Version {policy.version}</span>
                    <span className="meta-item"><FiCalendar size={13} /> {policy.date}</span>
                  </div>
                  <p className="policy-desc">{policy.description}</p>
                  <div className="policy-actions">
                    <button className="btn-read-full" onClick={() => setShowDetailsModal(true)}>Read Full Policy</button>
                    <button className="btn-acknowledge" onClick={() => setShowModal(true)}>Acknowledge</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'My Compliance' && (
          <div className="my-compliance-tab">
            <h3 className="my-comp-section-title">My Compliance Status</h3>
            
            <div className="my-comp-kpi-grid">
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Total Policies</span>
                <span className="my-comp-kpi-value text-blue">4</span>
              </div>
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Acknowledged</span>
                <span className="my-comp-kpi-value text-green">3</span>
              </div>
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Pending</span>
                <span className="my-comp-kpi-value text-orange">1</span>
              </div>
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Compliance Rate</span>
                <span className="my-comp-kpi-value text-teal">75%</span>
              </div>
            </div>

            <div className="my-comp-progress-section">
              <div className="my-comp-progress-header">
                <span className="progress-label">Overall compliance progress</span>
                <span className="progress-percent text-green">75%</span>
              </div>
              <div className="my-comp-progress-track">
                <div className="my-comp-progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="my-comp-table-card">
              <h4 className="my-comp-table-title">All Policies</h4>
              <div className="table-responsive">
                <table className="my-comp-table">
                  <thead>
                    <tr>
                      <th>Policy</th>
                      <th>Version</th>
                      <th>Effective Date</th>
                      <th>Status</th>
                      <th>Acknowledged At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCompliancePolicies.map((policy, idx) => (
                      <tr key={idx}>
                        <td className="font-medium text-dark">{policy.name}</td>
                        <td>{policy.version}</td>
                        <td>{policy.effectiveDate}</td>
                        <td>
                          <span className={`status-pill ${policy.status === 'Pending' ? 'status-pending' : 'status-acknowledged'}`}>
                            {policy.status}
                          </span>
                        </td>
                        <td>{policy.ackDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Categories' && (
          <div className="categories-tab">
            <div className="cat-header-row">
              <h3 className="cat-section-title">Policy Categories</h3>
              <button className="btn-add-category" onClick={() => setShowAddCategoryModal(true)}>+ Add Category</button>
            </div>
            
            <div className="cat-table-card">
              <div className="table-responsive">
                <table className="cat-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>DESCRIPTION</th>
                      <th>POLICIES</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policyCategories.map((cat, idx) => (
                      <tr key={idx}>
                        <td className="cat-name-cell">{cat.name}</td>
                        <td className="cat-desc-text">{cat.desc}</td>
                        <td>
                          <span className="cat-count-pill">{cat.count}</span>
                        </td>
                        <td>
                          <button onClick={() => console.log("Button clicked!")} className="btn-cat-action">...</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Acknowledgments' && (
          <div className="acknowledgments-tab">
            <div className="ack-header-row">
              <div className="ack-header-left">
                <h3 className="ack-section-title">All Acknowledgments</h3>
                <span className="ack-subtitle">Showing {acknowledgmentsData.length} records</span>
              </div>
              <div className="ack-filters">
                <div className="ack-search-wrapper">
                  <FiSearch className="ack-search-icon" />
                  <input type="text" className="ack-search-input" placeholder="Search policy or user..." />
                </div>
                <select className="ack-select">
                  <option>All Policies</option>
                </select>
              </div>
            </div>
            
            <div className="ack-table-card">
              <div className="table-responsive">
                <table className="ack-table">
                  <thead>
                    <tr>
                      <th>POLICY</th>
                      <th>USER</th>
                      <th>ACKNOWLEDGED AT</th>
                      <th>IP ADDRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acknowledgmentsData.map((ack, idx) => (
                      <tr key={idx}>
                        <td className="ack-bold-text">{ack.policy}</td>
                        <td className="ack-bold-text">{ack.user}</td>
                        <td className="ack-muted-text">{ack.date}</td>
                        <td className="ack-muted-text">{ack.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Compliance Report' && (
          <div className="cr-tab">
            <div className="cr-header-row">
              <h3 className="cr-section-title">Organization-Wide Compliance Report</h3>
              <button onClick={() => console.log("Button clicked!")} className="btn-export"><FiDownload /> Export</button>
            </div>

            <div className="my-comp-kpi-grid">
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Total Users</span>
                <span className="my-comp-kpi-value text-blue">4</span>
              </div>
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Total Acknowledgments</span>
                <span className="my-comp-kpi-value text-green">3</span>
              </div>
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Total Pending</span>
                <span className="my-comp-kpi-value text-orange">1</span>
              </div>
              <div className="my-comp-kpi-card">
                <span className="my-comp-kpi-label">Avg Compliance Rate</span>
                <span className="my-comp-kpi-value text-teal">75%</span>
              </div>
            </div>

            <div className="cr-header-row mt-32">
              <h3 className="cr-section-title">User Compliance Details</h3>
              <div className="cr-search-wrapper">
                <FiSearch className="cr-search-icon" />
                <input type="text" className="cr-search-input" placeholder="Search user..." />
              </div>
            </div>

            <div className="cat-table-card">
              <div className="table-responsive">
                <table className="cat-table">
                  <thead>
                    <tr>
                      <th>USER</th>
                      <th>ROLE</th>
                      <th>TOTAL</th>
                      <th>ACKNOWLEDGED</th>
                      <th>PENDING</th>
                      <th>OVERDUE</th>
                      <th>COMPLIANCE %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complianceReportData.map((user, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="cr-user-col">
                            <span className="cr-user-name">{user.name}</span>
                            <span className="cr-user-email">{user.email}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`cr-role-pill role-${user.role}`}>{user.role}</span>
                        </td>
                        <td className="cr-text-dark">{user.total}</td>
                        <td>
                          <span className="cr-stat-pill stat-green">{user.ack}</span>
                        </td>
                        <td>
                          <span className="cr-stat-pill stat-yellow">{user.pending}</span>
                        </td>
                        <td>
                          <span className="cr-stat-pill stat-red">{user.overdue}</span>
                        </td>
                        <td>
                          <div className="cr-progress-wrapper">
                            <div className="cr-progress-track">
                              <div className={`cr-progress-fill bg-${user.color}`} style={{ width: `${user.compRate}%` }}></div>
                            </div>
                            <span className={`cr-progress-text text-${user.color}`}>{user.compRate}%</span>
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
      </div>

      {showModal && (
        <div className="comp-modal-overlay">
          <div className="comp-modal">
            <div className="comp-modal-header-top">
              <div className="policy-icon-wrapper modal-icon">
                <MdOutlineHomeWork size={20} className="policy-icon" />
              </div>
              <span className="modal-policy-type">REMOTE WORK POLICY</span>
            </div>
            
            <h2 className="comp-modal-title">Confirm Acknowledgment</h2>
            
            <p className="comp-modal-desc">
              By clicking confirm, you certify that you have read and understood the <span className="modal-highlight">Data Integrity & Ethical Governance Protocol</span>.
            </p>

            <div className="comp-modal-alert">
              <FiInfo size={16} className="modal-alert-icon" />
              <p>This action will be permanently recorded in the <strong>Audit Trail</strong> and associated with your employee record for compliance verification.</p>
            </div>

            <div className="comp-modal-actions">
              <button className="btn-confirm-ack" onClick={() => setShowModal(false)}>
                Confirm & Acknowledged <FiCheckCircle size={16} />
              </button>
              <button className="btn-cancel-ack" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showCreateModal && (
        <div className="cpm-overlay">
          <div className="cpm-container">
            <div className="cpm-header">
              <h2 className="cpm-title">Create New Policy</h2>
              <button className="cpm-close-btn" onClick={() => setShowCreateModal(false)}>×</button>
            </div>
            
            <div className="cpm-body">
              <div className="cpm-form-group">
                <label>Policy Title *</label>
                <input type="text" placeholder="e.g. Remote Work Policy" />
              </div>
              
              <div className="cpm-form-group">
                <label>Category *</label>
                <select>
                  <option>Select category</option>
                  <option>Health & Safety</option>
                  <option>HR & Benefits</option>
                </select>
              </div>
              
              <div className="cpm-form-group">
                <label>Description</label>
                <textarea placeholder="Brief description of this policy..." rows="3"></textarea>
              </div>
              
              <div className="cpm-form-group">
                <label>Policy Content *</label>
                <textarea placeholder="Full policy text..." rows="6"></textarea>
              </div>
              
              <div className="cpm-form-row">
                <div className="cpm-form-group">
                  <label>Effective Date</label>
                  <input type="date" />
                </div>
                <div className="cpm-form-group">
                  <label>Acknowledgment Deadline</label>
                  <input type="date" />
                </div>
              </div>
              
              <div className="cpm-form-row">
                <div className="cpm-form-group">
                  <label>Version</label>
                  <input type="text" defaultValue="1.0" />
                </div>
                <div className="cpm-form-group">
                  <label>Status</label>
                  <select>
                    <option>Draft</option>
                    <option>Active</option>
                  </select>
                </div>
              </div>
              
              <div className="cpm-form-group">
                <label>Notify Employees</label>
                <select>
                  <option>All Employees</option>
                  <option>Specific Departments</option>
                </select>
                <span className="cpm-hint">Employees will be notified when the policy is published.</span>
              </div>
            </div>
            
            <div className="cpm-footer">
              <button className="cpm-btn-cancel" onClick={() => setShowCreateModal(false)}>Cancel</button>
              <button onClick={() => console.log("Button clicked!")} className="cpm-btn-draft">Save Draft</button>
              <button className="cpm-btn-publish" onClick={() => {
                setShowCreateModal(false);
                setShowSuccessBanner(true);
              }}>Publish Policy</button>
            </div>
          </div>
        </div>
      )}

      {showAddCategoryModal && (
        <div className="cpm-overlay">
          <div className="cpm-container cpm-auto-height">
            <div className="cpm-header">
              <h2 className="cpm-title">Add Policy Category</h2>
              <button className="cpm-close-btn" onClick={() => setShowAddCategoryModal(false)}>×</button>
            </div>
            
            <div className="cpm-body">
              <div className="cpm-form-group">
                <label>Description</label>
                <textarea placeholder="Describe this category..." rows="4"></textarea>
              </div>
              
              <div className="cpm-form-group">
                <label>Category Name *</label>
                <input type="text" placeholder="e.g. Health & Safety" />
              </div>
            </div>
            
            <div className="cpm-footer">
              <button className="cpm-btn-cancel" onClick={() => setShowAddCategoryModal(false)}>Cancel</button>
              <button className="cpm-btn-publish" onClick={() => setShowAddCategoryModal(false)}>Save Category</button>
            </div>
          </div>
        </div>
      )}

      {showDetailsModal && (
        <div className="comp-modal-overlay">
          <div className="policy-details-modal">
            <div className="pdm-top-bar">
              <span className="pdm-header-title">Policy Details</span>
              <button className="pdm-close-x" onClick={() => setShowDetailsModal(false)}>✕</button>
            </div>
            
            <div className="pdm-title-row">
              <h2 className="pdm-main-title">Social Media Policy</h2>
              <span className="pdm-archived-pill">ARCHIVED</span>
            </div>

            <div className="pdm-meta-grid">
              <div className="pdm-meta-item">
                <span className="pdm-meta-label">CATEGORY</span>
                <span className="pdm-meta-value">Communications</span>
              </div>
              <div className="pdm-meta-item">
                <span className="pdm-meta-label">VERSION</span>
                <span className="pdm-meta-value">2.4.1</span>
              </div>
              <div className="pdm-meta-item">
                <span className="pdm-meta-label">EFFECTIVE DATE</span>
                <span className="pdm-meta-value">Jan 12, 2023</span>
              </div>
              <div className="pdm-meta-item">
                <span className="pdm-meta-label">CREATED DATE</span>
                <span className="pdm-meta-value">Oct 05, 2022 • 14:32</span>
              </div>
            </div>

            <div className="pdm-content-box">
              <div className="pdm-content-inner">
                <h3 className="md-h1"># Social Media Policy</h3>
                <p className="md-p">This policy outlines the standards of conduct expected of all employees when using social media platforms, whether for professional or personal use.</p>
                <h4 className="md-h2">## Guidelines</h4>
                <div className="md-list-item">
                  <span className="md-number">01.</span>
                  <span className="md-text">Maintain professional integrity and transparency in all digital interactions representing the organization.</span>
                </div>
                <div className="md-list-item">
                  <span className="md-number">02.</span>
                  <span className="md-text">Confidential information, including trade secrets and client data, must never be shared on public platforms.</span>
                </div>
                <div className="md-list-item">
                  <span className="md-number">03.</span>
                  <span className="md-text">Personal opinions should be clearly labeled as such and not attributed to the company's official stance.</span>
                </div>
                <div className="md-list-item">
                  <span className="md-number">04.</span>
                  <span className="md-text">Abide by all copyright laws when sharing media or documents owned by third parties.</span>
                </div>
                <div className="md-list-item">
                  <span className="md-number">05.</span>
                  <span className="md-text">Any harassment, bullying, or discriminatory language used on social media is a violation of the code of conduct.</span>
                </div>
              </div>
              
              <div className="pdm-content-fade">
                <button className="btn-pdm-close" onClick={() => setShowDetailsModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compliance;
