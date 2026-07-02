import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { 
  BsSend, 
  BsCheck, 
  BsX, 
  BsCurrencyDollar,
  BsSearch,
  BsThreeDotsVertical,
  BsReceipt,
  BsClockHistory,
  BsPencil,
  BsCheckCircle,
  BsUpload,
  BsSliders,
  BsFileEarmarkText,
} from 'react-icons/bs';
import { 
  LuTent, 
  LuUserCog, 
  LuPhone, 
  LuBuilding, 
  LuPencil 
} from 'react-icons/lu';

const Expenses = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showReceiptsModal, setShowReceiptsModal] = useState(false);
  const [historyClaim, setHistoryClaim] = useState(null);
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const metrics = [
    { title: 'SUBMITTED', amount: '1', subtext: 'Awaiting review', icon: <BsSend size={16} />, iconBg: '#fffbeb', iconColor: '#d97706', topBorder: '#f59e0b', amountColor: '#d97706' },
    { title: 'APPROVED', amount: '3', subtext: 'Claims approved', icon: <BsCheck size={20} strokeWidth={1} />, iconBg: '#f0fdf4', iconColor: '#16a34a', topBorder: '#22c55e', amountColor: '#16a34a' },
    { title: 'REJECTED', amount: '1', subtext: 'Needs review', icon: <BsX size={20} strokeWidth={1} />, iconBg: '#fef2f2', iconColor: '#ef4444', topBorder: '#ef4444', amountColor: '#ef4444' },
    { title: 'REIMBURSED', amount: '2', subtext: '₹6,000.00 total', icon: <BsCurrencyDollar size={16} />, iconBg: '#eff6ff', iconColor: '#2563eb', topBorder: '#3b82f6', amountColor: '#2563eb' }
  ];

  const claims = [
    { title: 'Travel', category: 'Travel Expenses', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Approved', bc: '#bbf7d0', sc: '#16a34a', type: 'view' },
    { title: 'sdf 2', category: 'Communication', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Draft', bc: '#e2e8f0', sc: '#64748b', type: 'edit' },
    { title: 'Travel', category: 'Travel Expenses', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Approved', bc: '#bbf7d0', sc: '#16a34a', type: 'view' },
    { title: 'sdf 2', category: 'Communication', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Draft', bc: '#e2e8f0', sc: '#64748b', type: 'edit' },
    { title: 'sdf 2', category: 'Communication', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Draft', bc: '#e2e8f0', sc: '#64748b', type: 'edit' },
    { title: 'Personal Meals', category: 'Food & Meals', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Rejected', bc: '#fecaca', sc: '#ef4444', type: 'view' },
    { title: 'Hotel Stay - Pune', category: 'Hotel & Accommodation', amount: '₹1,000.00', date: '01 Jan 2026', status: 'Reimbursed', bc: '#bfdbfe', sc: '#2563eb', type: 'view' }
  ];

  const categories = [
    { title: 'Food & Meals', icon: <BsSliders size={18} style={{ transform: 'rotate(90deg)' }} />, iconBg: '#fffbeb', iconColor: '#f59e0b', budget: '₹1,000.00', category: 'Food', reqReceipts: 'Yes', reqApproval: 'Yes' },
    { title: 'Travel Expenses', icon: <LuTent size={18} strokeWidth={1.5} />, iconBg: '#eff6ff', iconColor: '#2563eb', budget: '₹5,000.00', category: 'Travel', reqReceipts: 'No', reqApproval: 'Yes' },
    { title: 'Client Entertainment', icon: <LuUserCog size={18} strokeWidth={1.5} />, iconBg: '#f3e8ff', iconColor: '#9333ea', budget: '₹2,000.00', category: 'Client Ent.', reqReceipts: 'No', reqApproval: 'Yes' },
    { title: 'Communication', icon: <LuPhone size={18} strokeWidth={1.5} />, iconBg: '#f0fdf4', iconColor: '#16a34a', budget: '₹500.00', category: 'Comms', reqReceipts: 'Yes', reqApproval: 'Yes' },
    { title: 'Hotel & Accommodation', icon: <LuBuilding size={18} strokeWidth={1.5} />, iconBg: '#fef3c7', iconColor: '#d97706', budget: '₹8,000.00', category: 'Hotel', reqReceipts: 'Yes', reqApproval: 'Yes' },
    { title: 'Office Supplies', icon: <LuPencil size={18} strokeWidth={1.5} />, iconBg: '#fce7f3', iconColor: '#db2777', budget: '₹1,500.00', category: 'Office', reqReceipts: 'Yes', reqApproval: 'Yes' },
  ];

  return (
    <div className="p-4" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div className="mb-4 d-flex justify-content-between align-items-end">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-1 text-sm">
              <li className="breadcrumb-item"><span className="text-muted">Dashboard</span></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page">Expenses</li>
            </ol>
          </nav>
          <h3 className="fw-bold mb-1 text-dark">My Expenses & Reimbursements</h3>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>Submit, track and manage your expense claims</span>
        </div>
        <button 
          className="btn btn-primary fw-semibold" 
          style={{ backgroundColor: '#2563eb', fontSize: '13px', padding: '8px 16px', borderRadius: '8px' }}
          onClick={() => setShowNewModal(true)}
        >
          + New Claim
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="d-flex gap-4 mb-4">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="ems-metric-card">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: metric.topBorder }}></div>
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-start">
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: '#94a3b8', textTransform: 'uppercase' }}>{metric.title}</div>
                <div className="ems-metric-icon mb-0" style={{ backgroundColor: metric.iconBg, color: metric.iconColor, width: '28px', height: '28px' }}>
                  {metric.icon}
                </div>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: metric.amountColor, marginTop: '12px', marginBottom: '4px' }}>{metric.amount}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{metric.subtext}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* My Claims Table */}
      <Card className="shadow-sm border-0 rounded-4 overflow-hidden mb-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="p-4 d-flex justify-content-between align-items-center border-bottom" style={{ borderColor: '#f1f5f9' }}>
          <div className="d-flex align-items-center gap-2">
            <h5 className="fw-bold m-0 text-dark" style={{ fontSize: '15px' }}>My Claims</h5>
            <span className="badge rounded-pill" style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '11px' }}>8</span>
          </div>
          <div className="d-flex gap-3">
            <div className="position-relative">
              <BsSearch className="position-absolute text-muted" size={14} style={{ top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
              <input type="text" className="form-control" placeholder="Search claims..." style={{ paddingLeft: '32px', fontSize: '13px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '200px' }} />
            </div>
            <select className="form-select" style={{ fontSize: '13px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '120px' }}>
              <option>All Status</option>
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mb-0 align-middle">
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <th className="border-bottom-0 py-3 text-uppercase px-4" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Title</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Category</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Amount</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Date</th>
                <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Status</th>
                <th className="border-bottom-0 py-3 text-uppercase text-end px-4" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim, idx) => (
                <tr key={idx} style={{ borderBottom: idx < claims.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <td className="py-4 px-4 text-dark fw-semibold" style={{ fontSize: '13px' }}>{claim.title}</td>
                  <td className="py-4 text-muted" style={{ fontSize: '13px' }}>{claim.category}</td>
                  <td className="py-4 text-dark fw-bold" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{claim.amount}</td>
                  <td className="py-4 text-muted" style={{ fontSize: '13px' }}>{claim.date}</td>
                  <td className="py-4">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white" style={{ border: `1px solid ${claim.bc}` }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: claim.sc }}></div>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: claim.sc }}>{claim.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-end">
                    {claim.type === 'view' ? (
                      <div className="d-flex justify-content-end gap-2">
                        <button onClick={() => setShowReceiptsModal(true)} className="btn btn-sm fw-semibold bg-white" style={{ border: '1px solid #bfdbfe', color: '#2563eb', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>Receipts</button>
                        <button onClick={() => setHistoryClaim(claim)} className="btn btn-sm fw-semibold bg-white" style={{ border: '1px solid #e9d5ff', color: '#9333ea', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>History</button>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-end gap-2 align-items-center">
                        <button onClick={() => setShowEditModal(true)} className="btn btn-sm fw-semibold bg-white" style={{ border: '1px solid #fde68a', color: '#d97706', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>Edit</button>
                        <button className="btn btn-sm fw-semibold border-0" style={{ backgroundColor: '#0d9488', color: '#ffffff', fontSize: '12px', padding: '4px 12px', borderRadius: '6px' }}>Submit</button>
                        <button className="btn btn-sm border bg-white d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', padding: 0, borderRadius: '6px', color: '#64748b' }} onClick={() => setHistoryClaim(claim)}>
                          <BsThreeDotsVertical size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-3 border-top d-flex justify-content-between align-items-center" style={{ borderColor: '#f1f5f9', backgroundColor: '#f8fafc' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Showing 1–7 of 8 claims</span>
          <div className="d-flex gap-1">
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#94a3b8' }}>‹</button>
            <button className="btn btn-sm btn-primary border-0" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 600 }}>1</button>
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#64748b' }}>2</button>
            <button className="btn btn-sm bg-white border" style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#94a3b8' }}>›</button>
          </div>
        </div>
      </Card>

      {/* Expense Categories */}
      <div className="d-flex align-items-center gap-2 mb-4 mt-2">
        <h5 className="fw-bold m-0 text-dark" style={{ fontSize: '15px' }}>Expense Categories</h5>
        <span className="badge rounded-pill" style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '11px' }}>6</span>
      </div>

      <div className="row g-4 mb-5">
        {categories.map((cat, idx) => (
          <div className="col-md-4" key={idx}>
            <Card className="h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff' }}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="ems-icon-box mb-0" style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}>
                  {cat.icon}
                </div>
                <h6 className="m-0 fw-bold text-dark">{cat.title}</h6>
              </div>
              
              <div className="d-flex gap-3 mb-4">
                <div className="flex-grow-1 p-3 rounded-3" style={{ backgroundColor: '#f8fafc' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '4px' }}>BUDGET LIMIT</div>
                  <div className="fw-bold text-dark" style={{ fontSize: '14px', fontFamily: 'monospace' }}>{cat.budget}</div>
                </div>
                <div className="flex-grow-1 p-3 rounded-3" style={{ backgroundColor: '#f8fafc' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '4px' }}>CATEGORY</div>
                  <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{cat.category}</div>
                </div>
              </div>

              <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>REQUIREMENTS</div>
              <div className="d-flex gap-2">
                <div className="rounded-pill px-3 py-1 border" style={{ borderColor: cat.reqReceipts === 'Yes' ? '#2563eb' : '#2563eb', color: '#2563eb', fontSize: '11px', fontWeight: 500 }}>
                  Receipts : {cat.reqReceipts}
                </div>
                <div className="rounded-pill px-3 py-1 border" style={{ borderColor: cat.reqApproval === 'Yes' ? '#16a34a' : '#16a34a', color: '#16a34a', fontSize: '11px', fontWeight: 500 }}>
                  Approval : {cat.reqApproval}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Upload Receipt Modal */}
      {showUploadModal && (
        <div className="ems-modal-overlay" style={{ zIndex: 1060 }}>
          <div className="ems-modal-content" style={{ maxWidth: '500px', padding: '24px' }}>
            <button className="btn btn-sm border position-absolute bg-white" style={{ top: '24px', right: '24px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }} onClick={() => setShowUploadModal(false)}>
              <BsX size={18} />
            </button>
            <h4 className="fw-bold mb-1" style={{ fontSize: '18px', color: '#0f172a' }}>Upload Receipt</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>Attach a file to this claim</p>

            <div 
              className="d-flex flex-column align-items-center justify-content-center p-4 mb-4" 
              style={{ border: `1.5px dashed ${hasUploadedFile ? '#3b82f6' : '#e2e8f0'}`, borderRadius: '12px', backgroundColor: hasUploadedFile ? '#f0f9ff' : '#ffffff', cursor: 'pointer', transition: 'all 0.2s' }}
              onClick={() => setHasUploadedFile(!hasUploadedFile)}
            >
              <div className="d-flex align-items-center justify-content-center mb-3" style={{ width: '40px', height: '40px', backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: '8px' }}>
                <BsUpload size={18} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Drop file here or click to browse</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: hasUploadedFile ? '16px' : '0' }}>PDF, JPG or PNG • Max 10MB</div>
              
              {hasUploadedFile && (
                <div className="d-flex align-items-center gap-2 px-3 py-2" style={{ fontSize: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <BsFileEarmarkText className="text-muted" />
                  <span className="fw-medium text-dark">receipt_sdf2_may2024.pdf</span>
                  <span className="text-muted ms-1">2.4 MB</span>
                  <BsX className="text-muted ms-2" style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); setHasUploadedFile(false); }} />
                </div>
              )}
            </div>

            <div className="mb-3">
              <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Amount (Optional)</label>
              <input type="text" className="form-control" placeholder="Receipt amount" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
            </div>

            <div className="row g-3 mb-3">
              <div className="col-6">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Receipt Date (Optional)</label>
                <div className="position-relative">
                  <input type="text" className="form-control" defaultValue="dd - mm - yyyy" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
                  <BsClockHistory className="position-absolute text-dark" size={14} style={{ top: '50%', transform: 'translateY(-50%)', right: '14px' }} />
                </div>
              </div>
              <div className="col-6">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Vendor Name</label>
                <input type="text" className="form-control" placeholder="e.g. Swiggy, MakeMyTrip" defaultValue={hasUploadedFile ? 'Swiggy' : ''} style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
            </div>

            <div className="mb-4">
              <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Receipt Number</label>
              <input type="text" className="form-control" placeholder="RCP-2024-001" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
            </div>

            <div className="d-flex justify-content-end gap-3 pt-3 border-top" style={{ borderColor: '#f1f5f9' }}>
              <button className="btn btn-sm bg-white border fw-semibold" style={{ fontSize: '13px', padding: '8px 20px', borderRadius: '8px', color: '#64748b' }} onClick={() => setShowUploadModal(false)}>Close</button>
              <button className="btn btn-sm fw-semibold" style={{ backgroundColor: hasUploadedFile ? '#2563eb' : '#3b82f6', opacity: hasUploadedFile ? 1 : 0.8, color: '#ffffff', fontSize: '13px', padding: '8px 24px', borderRadius: '8px' }} onClick={() => setShowUploadModal(false)}>Upload</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Claim Modal */}
      {showEditModal && (
        <div className="ems-modal-overlay">
          <div className="ems-modal-content" style={{ maxWidth: '500px', padding: '24px' }}>
            <button className="btn btn-sm border position-absolute bg-white" style={{ top: '24px', right: '24px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }} onClick={() => setShowEditModal(false)}>
              <BsX size={18} />
            </button>
            <h4 className="fw-bold mb-1" style={{ fontSize: '18px', color: '#0f172a' }}>Edit Claim</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>Fill in the details of your expense</p>

            <div className="row g-3 mb-3">
              <div className="col-6">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Title <span style={{ color: '#14b8a6' }}>*</span></label>
                <input type="text" className="form-control" defaultValue="Client Dinner" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
              <div className="col-6">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Category <span style={{ color: '#14b8a6' }}>*</span></label>
                <select className="form-select" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }}>
                  <option>— choose category —</option>
                </select>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-4">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Expense Date <span style={{ color: '#14b8a6' }}>*</span></label>
                <div className="position-relative">
                  <input type="text" className="form-control" defaultValue="09 - 04 - 2026" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
                  <BsClockHistory className="position-absolute text-dark" size={14} style={{ top: '50%', transform: 'translateY(-50%)', right: '14px' }} />
                </div>
              </div>
              <div className="col-4">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Amount (₹) <span style={{ color: '#14b8a6' }}>*</span></label>
                <input type="text" className="form-control" defaultValue="887.00" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
              <div className="col-4">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Notes</label>
                <input type="text" className="form-control" placeholder="Optional notes" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
            </div>

            <div className="mb-4">
              <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Receipts</label>
              <div className="p-4 border rounded-3 bg-white d-flex flex-column align-items-start" style={{ borderColor: '#e2e8f0' }}>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px' }}>No receipts attached.</p>
                <button className="btn btn-sm bg-white fw-semibold" style={{ border: '1px solid #bfdbfe', color: '#2563eb', fontSize: '12px', padding: '6px 12px', borderRadius: '6px' }} onClick={() => setShowUploadModal(true)}>Upload Receipts</button>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-3 pt-3 border-top" style={{ borderColor: '#f1f5f9' }}>
              <button className="btn btn-sm bg-white border fw-semibold" style={{ fontSize: '13px', padding: '8px 20px', borderRadius: '8px', color: '#64748b' }} onClick={() => setShowEditModal(false)}>Close</button>
              <button className="btn btn-sm fw-semibold" style={{ backgroundColor: '#2563eb', color: '#ffffff', fontSize: '13px', padding: '8px 24px', borderRadius: '8px' }} onClick={() => setShowEditModal(false)}>Update</button>
            </div>
          </div>
        </div>
      )}

      {/* New Claim Modal */}
      {showNewModal && (
        <div className="ems-modal-overlay">
          <div className="ems-modal-content" style={{ maxWidth: '500px', padding: '24px' }}>
            <button className="btn btn-sm border position-absolute bg-white" style={{ top: '24px', right: '24px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }} onClick={() => setShowNewModal(false)}>
              <BsX size={18} />
            </button>
            <h4 className="fw-bold mb-1" style={{ fontSize: '18px', color: '#0f172a' }}>New Claim</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>Fill in the details of your expense</p>

            <div className="row g-3 mb-3">
              <div className="col-6">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Title <span style={{ color: '#14b8a6' }}>*</span></label>
                <input type="text" className="form-control" placeholder="e.g. Client dinner" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
              <div className="col-6">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Category <span style={{ color: '#14b8a6' }}>*</span></label>
                <select className="form-select" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px', color: '#0f172a' }}>
                  <option>— choose category —</option>
                </select>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-4">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Expense Date <span style={{ color: '#14b8a6' }}>*</span></label>
                <div className="position-relative">
                  <input type="text" className="form-control" defaultValue="dd - mm - yyyy" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
                  <BsClockHistory className="position-absolute text-dark" size={14} style={{ top: '50%', transform: 'translateY(-50%)', right: '14px' }} />
                </div>
              </div>
              <div className="col-4">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Amount (₹) <span style={{ color: '#14b8a6' }}>*</span></label>
                <input type="text" className="form-control" placeholder="0.00" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
              <div className="col-4">
                <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Notes</label>
                <input type="text" className="form-control" placeholder="Optional notes" style={{ fontSize: '13px', padding: '10px 14px', borderRadius: '8px' }} />
              </div>
            </div>

            <div className="mb-4">
              <label style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Receipts</label>
              <div className="p-4 border rounded-3 bg-white d-flex flex-column align-items-start" style={{ borderColor: '#e2e8f0' }}>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px' }}>No receipts attached.</p>
                <button className="btn btn-sm bg-white fw-semibold" style={{ border: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '12px', padding: '6px 12px', borderRadius: '6px' }} onClick={() => setShowUploadModal(true)}>Upload Receipts</button>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-3 pt-3 border-top" style={{ borderColor: '#f1f5f9' }}>
              <button className="btn btn-sm bg-white border fw-semibold" style={{ fontSize: '13px', padding: '8px 20px', borderRadius: '8px', color: '#64748b' }} onClick={() => setShowNewModal(false)}>Close</button>
              <button className="btn btn-sm fw-semibold" style={{ backgroundColor: '#60a5fa', color: '#ffffff', fontSize: '13px', padding: '8px 24px', borderRadius: '8px' }} onClick={() => setShowNewModal(false)}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Receipts View Modal */}
      {showReceiptsModal && (
        <div className="ems-modal-overlay">
          <div className="ems-modal-content" style={{ maxWidth: '500px', padding: '24px' }}>
            <button className="btn btn-sm border position-absolute bg-white" style={{ top: '24px', right: '24px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }} onClick={() => setShowReceiptsModal(false)}>
              <BsX size={18} />
            </button>
            <h4 className="fw-bold mb-1" style={{ fontSize: '18px', color: '#0f172a' }}>Receipts</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>Client Meeting - Mumbai • ₹2,800.00</p>

            <div className="d-flex flex-column gap-3 mb-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="p-3 border rounded-3 bg-white d-flex align-items-center justify-content-between" style={{ borderColor: '#f1f5f9' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: '8px' }}>
                      <BsFileEarmarkText size={16} />
                    </div>
                    <div>
                      <div className="fw-bold text-dark" style={{ fontSize: '13px', marginBottom: '2px' }}>client-dinner.jpg</div>
                      <div className="text-muted" style={{ fontSize: '12px' }}>Taj Hotels • ₹2,800.00</div>
                    </div>
                  </div>
                  <button className="btn btn-sm bg-white d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', border: '1px solid #bfdbfe', color: '#3b82f6', borderRadius: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 11.293V1.5A.5.5 0 0 1 8 1z" />
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-end pt-3 border-top" style={{ borderColor: '#f1f5f9' }}>
              <button className="btn btn-sm bg-white border fw-semibold" style={{ fontSize: '13px', padding: '8px 24px', borderRadius: '8px', color: '#64748b' }} onClick={() => setShowReceiptsModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* History Drawer */}
      {historyClaim && (
        <div className="ems-drawer-overlay">
          <div className="ems-drawer-content">
            <div className="d-flex justify-content-between align-items-center p-4 border-bottom" style={{ borderColor: '#f1f5f9' }}>
              <h4 className="fw-bold m-0" style={{ fontSize: '16px', color: '#0f172a' }}>{historyClaim.title || 'Travel'} — History</h4>
              <button className="btn btn-sm border bg-white" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }} onClick={() => setHistoryClaim(null)}>
                <BsX size={18} />
              </button>
            </div>
            
            <div className="p-4" style={{ overflowY: 'auto', flexGrow: 1 }}>
              {/* Claim Summary */}
              <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#f4f7fb' }}>
                <h6 className="fw-semibold mb-3 text-dark" style={{ fontSize: '13px' }}>Claim Summary</h6>
                <div className="row g-3">
                  <div className="col-6">
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>AMOUNT</div>
                    <div className="fw-medium text-dark" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{historyClaim.amount}</div>
                  </div>
                  <div className="col-6">
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>CATEGORY</div>
                    <div className="fw-medium text-dark" style={{ fontSize: '13px' }}>{historyClaim.category}</div>
                  </div>
                  <div className="col-6">
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>DATE</div>
                    <div className="fw-medium text-dark" style={{ fontSize: '13px' }}>{historyClaim.date}</div>
                  </div>
                  <div className="col-6">
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>STATUS</div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: historyClaim.sc }}></div>
                      <span className="fw-medium" style={{ fontSize: '13px', color: historyClaim.sc }}>{historyClaim.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>TIMELINE</div>
              
              <div className="position-relative ms-2">
                {/* Vertical Line */}
                <div className="position-absolute" style={{ top: '8px', bottom: '24px', left: '4px', width: '1px', backgroundColor: '#e2e8f0' }}></div>

                {/* Step 1 */}
                <div className="position-relative mb-4" style={{ paddingLeft: '24px' }}>
                  <div className="position-absolute" style={{ top: '6px', left: '0', width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#94a3b8', zIndex: 1 }}></div>
                  <div className="fw-medium text-dark" style={{ fontSize: '13px', marginBottom: '2px' }}>Claim created (Draft)</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Nov 1, 2025 · 10:24 AM</div>
                </div>

                {/* Step 2 */}
                <div className="position-relative mb-4" style={{ paddingLeft: '24px' }}>
                  <div className="position-absolute" style={{ top: '6px', left: '0', width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b', zIndex: 1 }}></div>
                  <div className="fw-medium text-dark" style={{ fontSize: '13px', marginBottom: '2px' }}>Submitted for approval</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '8px' }}>Nov 2, 2025 · 9:00 AM</div>
                  <div className="p-2 rounded-3 text-muted" style={{ backgroundColor: '#f8fafc', fontSize: '12px', border: '1px solid #f1f5f9' }}>
                    Sent to Moon
                  </div>
                </div>

                {/* Step 3 */}
                <div className="position-relative" style={{ paddingLeft: '24px' }}>
                  <div className="position-absolute" style={{ top: '6px', left: '0', width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10b981', zIndex: 1 }}></div>
                  <div className="fw-medium text-dark" style={{ fontSize: '13px', marginBottom: '2px' }}>Approved by manager</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '8px' }}>Nov 3, 2025 · 11:15 AM</div>
                  <div className="p-2 rounded-3 text-muted" style={{ backgroundColor: '#f8fafc', fontSize: '12px', border: '1px solid #f1f5f9' }}>
                    Approved by Moon — looks good!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Expenses;
