import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { 
  BsCurrencyDollar, 
  BsBriefcase, 
  BsGraphDown, 
  BsFileEarmarkText,
  BsClockHistory,
  BsDownload,
  BsInfoCircle,
  BsCalendar
} from 'react-icons/bs';

const Payroll = () => {
  const [activeTab, setActiveTab] = useState('Current');

  // Top metric cards
  const metrics = [
    { title: 'NET THIS MONTH', amount: '₹40,000', subtext: 'After deductions', icon: <BsCurrencyDollar size={16} />, iconBg: '#eff6ff', iconColor: '#3b82f6', amountColor: '#3b82f6', topBorder: '#3b82f6' },
    { title: 'BASIC SALARY', amount: '₹1,00,000', subtext: 'Per month CTC', icon: <BsBriefcase size={16} />, iconBg: '#f0fdf4', iconColor: '#22c55e', amountColor: '#22c55e', topBorder: '#22c55e' },
    { title: 'ACTIVE DEDUCTIONS', amount: '₹60,000', subtext: '2 active — Loan & Advance', icon: <BsGraphDown size={16} />, iconBg: '#fef2f2', iconColor: '#ef4444', amountColor: '#ef4444', topBorder: '#ef4444' },
    { title: 'TOTAL ALLOWANCES', amount: '₹1,200', subtext: 'Total Allowances for this month', icon: <BsFileEarmarkText size={16} />, iconBg: '#fff7ed', iconColor: '#f97316', amountColor: '#f97316', topBorder: '#f59e0b' }
  ];

  return (
    <div className="p-4 mx-auto" style={{ maxWidth: '1200px' }}>
      
      {/* Header */}
      <div className="mb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-1 text-sm">
            <li className="breadcrumb-item"><span className="text-muted">Dashborad</span></li>
            <li className="breadcrumb-item active fw-medium" aria-current="page">Payroll</li>
          </ol>
        </nav>
        <h3 className="fw-bold mb-1 text-dark">My Payroll</h3>
        <span style={{ fontSize: '13px', color: '#94a3b8' }}>View salary, payslips, deductions & history</span>
      </div>

      {/* 4 Metric Cards */}
      <div className="d-flex gap-4 mb-4">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="ems-metric-card">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: metric.topBorder }}></div>
            <div className="p-4">
              <div className="ems-metric-icon" style={{ backgroundColor: metric.iconBg, color: metric.iconColor }}>
                {metric.icon}
              </div>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: '#94a3b8', textTransform: 'uppercase' }}>{metric.title}</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: metric.amountColor, marginTop: '4px', marginBottom: '4px' }}>{metric.amount}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{metric.subtext}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <Card className="shadow-sm border-0 rounded-4 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        <div className="pt-4 px-4 bg-white">
          <h4 className="fw-bold fs-6 text-dark mb-1">My Payroll</h4>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>Summary & documents</div>
        </div>

        {/* Tabs */}
        <div className="px-4 border-bottom border-top" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }}>
          <div className="d-flex">
            {[
              { id: 'Current', label: 'Current', icon: <BsClockHistory size={14} className="me-2" /> },
              { id: 'Payslips', label: 'Payslips', badge: '5', icon: <BsFileEarmarkText size={14} className="me-2" /> },
              { id: 'Deductions', label: 'Deductions', badge: '2', icon: <BsGraphDown size={14} className="me-2" /> },
              { id: 'History', label: 'History', icon: <BsClockHistory size={14} className="me-2" /> },
            ].map(tab => (
              <button 
                key={tab.id}
                className="btn btn-link text-decoration-none fw-semibold border-0 position-relative py-3 px-4 d-flex align-items-center" 
                style={{ 
                  color: activeTab === tab.id ? '#2563eb' : '#94a3b8', 
                  backgroundColor: activeTab === tab.id ? '#ffffff' : 'transparent',
                  fontSize: '13px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '0px'
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
                {tab.badge && (
                  <span className="badge rounded-pill ms-2" style={{ backgroundColor: activeTab === tab.id ? '#f1f5f9' : '#ffffff', color: '#64748b', fontSize: '10px' }}>
                    {tab.badge}
                  </span>
                )}
                {activeTab === tab.id && (
                  <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', backgroundColor: '#2563eb', borderRadius: '2px' }}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {/* Current Tab Content */}
          {activeTab === 'Current' && (
          <>
            <div className="d-flex gap-4 mb-4">
              {/* Earnings Breakdown */}
              <div className="flex-grow-1 border rounded-4 overflow-hidden" style={{ borderColor: '#f1f5f9' }}>
                <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom" style={{ borderColor: '#f1f5f9' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>EARNINGS BREAKDOWN</div>
                  <div className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 600 }}>April 2026</div>
                </div>
                <div className="p-3">
                  {[
                    { label: 'Basic Salary', amount: '₹1,00,000.00' },
                    { label: 'House Rent Allowance', amount: '₹0.00' },
                    { label: 'Medical Allowance', amount: '₹0.00' },
                    { label: 'Special Allowance', amount: '₹0.00' },
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between align-items-center py-3" style={{ borderBottom: idx < 3 ? '1px dashed #f1f5f9' : 'none' }}>
                      <div className="d-flex align-items-center gap-2">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                        <span style={{ fontSize: '13px', color: '#64748b' }}>{item.label}</span>
                      </div>
                      <span className="fw-semibold text-dark" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{item.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }}>
                  <span className="fw-bold text-dark" style={{ fontSize: '13px' }}>Gross Earnings</span>
                  <span className="fw-bold" style={{ fontSize: '14px', color: '#2563eb', fontFamily: 'monospace' }}>₹1,00,000.00</span>
                </div>
              </div>

              {/* Deductions This Month */}
              <div className="flex-grow-1 border rounded-4 overflow-hidden" style={{ borderColor: '#f1f5f9' }}>
                <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom" style={{ borderColor: '#f1f5f9' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px' }}>DEDUCTIONS THIS MONTH</div>
                  <div className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#fffbeb', color: '#d97706', fontWeight: 600 }}>2 deductions</div>
                </div>
                <div className="p-3">
                  {[
                    { label: 'Provident Fund', amount: '₹0.00' },
                    { label: 'Professional Tax', amount: '₹0.00' },
                    { label: 'Income Tax (TDS)', amount: '₹0.00' },
                    { label: 'Other Deductions', amount: '₹60,000.00' },
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between align-items-center py-3" style={{ borderBottom: idx < 3 ? '1px dashed #f1f5f9' : 'none' }}>
                      <div className="d-flex align-items-center gap-2">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                        <span style={{ fontSize: '13px', color: '#64748b' }}>{item.label}</span>
                      </div>
                      <span className="fw-semibold text-dark" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{item.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center p-3 border-top" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }}>
                  <span className="fw-bold text-dark" style={{ fontSize: '13px' }}>Total Deductions</span>
                  <span className="fw-bold" style={{ fontSize: '14px', color: '#ef4444', fontFamily: 'monospace' }}>₹60,000.00</span>
                </div>
              </div>
            </div>

            {/* Bottom Net Pay Card */}
            <div className="rounded-4 p-4 d-flex justify-content-between align-items-center text-white mt-2" style={{ backgroundColor: '#2563eb' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>NET TAKE-HOME SALARY · APRIL 2026</div>
                <div className="fw-bold" style={{ fontSize: '32px', margin: '4px 0' }}>₹40,000.00</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Credited to account ending ··4230</div>
              </div>
              <div style={{ width: '250px' }}>
                <div className="d-flex justify-content-end mb-2" style={{ fontSize: '11px', opacity: 0.9 }}>Pay breakdown</div>
                <div className="w-100 rounded-pill mb-2" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  <div className="rounded-pill bg-white" style={{ width: '40%', height: '100%' }}></div>
                </div>
                <div className="d-flex justify-content-end align-items-center gap-2" style={{ fontSize: '11px', opacity: 0.9 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#ffffff' }}></div> Basic (100%)
                </div>
              </div>
            </div>
          </>
        )}

        {/* Payslips Tab Content */}
        {activeTab === 'Payslips' && (
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{ backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}>
              <BsInfoCircle size={16} />
              <span style={{ fontSize: '13px' }}>Payslips are generated by HR at the end of each pay period. Download a PDF copy for your records.</span>
            </div>

            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Slip ID</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Month</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Basic</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Deductions</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Net Pay</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Status</th>
                    <th className="border-bottom-0 py-3 text-uppercase text-end" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#16', month: '1', monthName: 'January 2026', basic: '1,00,000', ded: '10,000', net: '90,000', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' },
                    { id: '#16', month: '1', monthName: 'January 2026', basic: '1,00,000', ded: '10,000', net: '90,000', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' },
                    { id: '#9', month: '11', monthName: 'November 2025', basic: '1,00,000', ded: '10,000', net: '90,000', status: 'Paid', sbg: '#f0fdf4', sc: '#16a34a' },
                    { id: '#16', month: '1', monthName: 'January 2026', basic: '1,00,000', ded: '10,000', net: '90,000', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' },
                    { id: '#16', month: '1', monthName: 'January 2026', basic: '1,00,000', ded: '10,000', net: '90,000', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' }
                  ].map((slip, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                      <td className="py-4" style={{ fontSize: '13px', color: '#94a3b8' }}>{slip.id}</td>
                      <td className="py-4">
                        <div className="d-flex align-items-center gap-3">
                          <div className="fw-bold d-flex align-items-center justify-content-center rounded" style={{ width: '28px', height: '28px', backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '13px' }}>
                            {slip.month}
                          </div>
                          <span className="text-dark" style={{ fontSize: '13px' }}>{slip.monthName}</span>
                        </div>
                      </td>
                      <td className="py-4" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{slip.basic}</td>
                      <td className="py-4" style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace' }}>{slip.ded}</td>
                      <td className="py-4 fw-bold text-dark" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{slip.net}</td>
                      <td className="py-4">
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ backgroundColor: slip.sbg }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: slip.sc }}></div>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: slip.sc }}>{slip.status}</span>
                        </div>
                      </td>
                      <td className="py-4 text-end">
                        <button 
                          onClick={() => {
                            const element = document.createElement("a");
                            const file = new Blob([`Payslip ${slip.id} for ${slip.monthName}\n\nBasic: ${slip.basic}\nDeductions: ${slip.ded}\nNet Pay: ${slip.net}`], {type: 'text/plain'});
                            element.href = URL.createObjectURL(file);
                            element.download = `payslip_${slip.id.replace('#','')}_${slip.monthName.replace(' ', '_')}.txt`;
                            document.body.appendChild(element);
                            element.click();
                            document.body.removeChild(element);
                          }}
                          className="btn btn-sm bg-white fw-semibold d-inline-flex align-items-center gap-2 shadow-sm" 
                          style={{ border: '1px solid #e2e8f0', color: '#475569', fontSize: '12px', padding: '6px 16px', borderRadius: '6px', transition: 'all 0.2s' }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                        >
                          <BsDownload size={12} /> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Deductions Tab Content */}
        {activeTab === 'Deductions' && (
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{ backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}>
              <BsInfoCircle size={16} />
              <span style={{ fontSize: '13px' }}>These deductions are applied to your monthly salary. Contact HR to modify or close any active deduction.</span>
            </div>
            
            <div className="d-flex gap-4">
              {/* LOAN card */}
              <div className="flex-grow-1 border rounded-4 p-4" style={{ borderColor: '#f1f5f9', backgroundColor: '#fafaf9' }}>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <div className="fw-bold text-dark" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>LOAN</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'monospace' }}>Deduction ID: #3</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#16a34a' }}>Active</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>Repayment Progress</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b' }}>0% paid</span>
                  </div>
                  <div className="w-100 rounded-pill" style={{ height: '6px', backgroundColor: '#e2e8f0' }}></div>
                </div>

                <div className="d-grid gap-3 mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>TOTAL AMOUNT</div>
                    <div className="fw-bold text-dark" style={{ fontSize: '14px', fontFamily: 'monospace' }}>45,000</div>
                  </div>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>REMAINING</div>
                    <div className="fw-bold" style={{ fontSize: '14px', color: '#d97706', fontFamily: 'monospace' }}>45,000</div>
                  </div>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>MONTHLY EMI</div>
                    <div className="fw-bold text-dark" style={{ fontSize: '14px', fontFamily: 'monospace' }}>5,000</div>
                  </div>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>INSTALMENTS LEFT</div>
                    <div className="fw-bold" style={{ fontSize: '14px', color: '#d97706', fontFamily: 'monospace' }}>9</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2" style={{ fontSize: '12px', color: '#94a3b8' }}>
                  <BsCalendar size={14} /> Dec 2024 → Sep 2025
                </div>
              </div>

              {/* ADVANCE card */}
              <div className="flex-grow-1 border rounded-4 p-4" style={{ borderColor: '#f1f5f9', backgroundColor: '#fafaf9' }}>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <div className="fw-bold text-dark" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>ADVANCE</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'monospace' }}>Deduction ID: #2</div>
                  </div>
                  <div className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill" style={{ border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#16a34a' }}>Active</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>Repayment Progress</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b' }}>0% paid</span>
                  </div>
                  <div className="w-100 rounded-pill" style={{ height: '6px', backgroundColor: '#e2e8f0' }}></div>
                </div>

                <div className="d-grid gap-3 mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>TOTAL AMOUNT</div>
                    <div className="fw-bold text-dark" style={{ fontSize: '14px', fontFamily: 'monospace' }}>15,000</div>
                  </div>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>REMAINING</div>
                    <div className="fw-bold" style={{ fontSize: '14px', color: '#d97706', fontFamily: 'monospace' }}>15,000</div>
                  </div>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>MONTHLY EMI</div>
                    <div className="fw-bold text-dark" style={{ fontSize: '14px', fontFamily: 'monospace' }}>5,000</div>
                  </div>
                  <div className="p-3 bg-white border rounded-3" style={{ borderColor: '#f1f5f9' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>INSTALMENTS LEFT</div>
                    <div className="fw-bold" style={{ fontSize: '14px', color: '#d97706', fontFamily: 'monospace' }}>3</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2" style={{ fontSize: '12px', color: '#94a3b8' }}>
                  <BsCalendar size={14} /> Nov 2024 → Jan 2025
                </div>
              </div>
            </div>

            {/* Footer Summary */}
            <div className="d-flex justify-content-between align-items-center border-top pt-4 mt-2" style={{ borderColor: '#f1f5f9' }}>
              <div className="d-flex gap-5">
                <div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>TOTAL OUTSTANDING</div>
                  <div className="fw-bold" style={{ fontSize: '18px', color: '#ef4444', fontFamily: 'monospace' }}>₹60,000.00</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>MONTHLY DEDUCTION</div>
                  <div className="fw-bold" style={{ fontSize: '18px', color: '#d97706', fontFamily: 'monospace' }}>₹10,000.00</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>ACTIVE DEDUCTIONS</div>
                  <div className="fw-bold text-dark" style={{ fontSize: '18px', fontFamily: 'monospace' }}>2</div>
                </div>
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'right', maxWidth: '250px', lineHeight: '1.5' }}>
                EMIs are auto-deducted each month.<br/>Contact HR if you have any disputes.
              </div>
            </div>
          </div>
        )}

        {/* History Tab Content */}
        {activeTab === 'History' && (
          <div className="bg-white border rounded-4 overflow-hidden" style={{ borderColor: '#f1f5f9' }}>
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Month</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Basic</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Allowances</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Deductions</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Net Pay</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Change</th>
                    <th className="border-bottom-0 py-3 text-uppercase" style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { monthName: 'January 2026', monthNum: 'Month 1', basic: '₹1,05,000', allow: '₹0', ded: '₹10,000', net: '₹95,000', change: '₹10,000', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' },
                    { monthName: 'December 2025', monthNum: 'Month 12', basic: '1,00,000', allow: '0', ded: '10,000', net: '90,000', change: '--', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' },
                    { monthName: 'November 2025', monthNum: 'Month 11', basic: '1,00,000', allow: '0', ded: '10,000', net: '90,000', change: '--', status: 'Paid', sbg: '#f0fdf4', sc: '#16a34a' },
                    { monthName: 'October 2025', monthNum: 'Month 10', basic: '1,00,000', allow: '0', ded: '10,000', net: '90,000', change: '--', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' },
                    { monthName: 'September 2025', monthNum: 'Month 9', basic: '1,00,000', allow: '0', ded: '10,000', net: '90,000', change: '--', status: 'Generated', sbg: '#eff6ff', sc: '#2563eb' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < 4 ? '1px solid #f8fafc' : 'none' }}>
                      <td className="py-4">
                        <div className="d-flex flex-column">
                          <span className="text-dark fw-semibold" style={{ fontSize: '13px' }}>{row.monthName}</span>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>{row.monthNum}</span>
                        </div>
                      </td>
                      <td className="py-4 text-dark" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{row.basic}</td>
                      <td className="py-4 text-muted" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{row.allow}</td>
                      <td className="py-4 text-muted" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{row.ded}</td>
                      <td className="py-4 fw-bold" style={{ fontSize: '13px', fontFamily: 'monospace', color: '#16a34a' }}>{row.net}</td>
                      <td className="py-4 text-muted" style={{ fontSize: '13px', fontFamily: 'monospace' }}>{row.change}</td>
                      <td className="py-4">
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ backgroundColor: row.sbg }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: row.sc }}></div>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: row.sc }}>{row.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        </div>
      </Card>
    </div>
  );
};

export default Payroll;
