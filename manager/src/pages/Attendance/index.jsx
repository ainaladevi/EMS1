import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import { 
  BsBoxArrowInRight, 
  BsBoxArrowRight, 
  BsSunFill, 
  BsCheckCircleFill, 
  BsInfoCircle,
  BsClock,
  BsHouse,
  BsPencilSquare,
  BsChevronRight,
  BsCalendarDate
} from 'react-icons/bs';

const AttendancePage = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showWfhModal, setShowWfhModal] = useState(false);
  const [showRegularizationModal, setShowRegularizationModal] = useState(false);

  return (
    <div className="p-4 mx-auto" style={{ maxWidth: '1200px' }}>

      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-1 text-sm">
              <li className="breadcrumb-item"><span className="text-muted">Dashboard</span></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page">Attendance</li>
            </ol>
          </nav>
          <h3 className="fw-bold mb-1 text-dark">Today's Attendance</h3>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>Daily check-ins, overtime, regularization and monthly summaries</span>
        </div>
        <div className="d-flex gap-2">
          <button className="btn text-white fw-semibold rounded-2" style={{ backgroundColor: '#2b5cff', fontSize: '13px', padding: '8px 18px' }}>
            Attendance
          </button>
          <Link to="/manager/attendance-overview" className="btn bg-white fw-semibold rounded-2 text-decoration-none" style={{ border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', padding: '8px 18px' }}>
            View History
          </Link>
        </div>
      </div>

      <div className="row g-4">

        <div className="col-lg-8">
          <Card className="p-4 shadow-sm border-0 h-100 rounded-4">
            

            <div className="d-flex justify-content-between align-items-center mb-5">
              {!isCheckedIn ? (
                <div className="d-flex align-items-center rounded-pill px-3 py-1" style={{ backgroundColor: '#f1f5f9' }}>
                  <div className="rounded-circle me-2" style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8' }}></div>
                  <span className="fw-semibold" style={{ fontSize: '12px', color: '#94a3b8' }}>Not checked in yet</span>
                </div>
              ) : (
                <div className="d-flex align-items-center rounded-pill px-3 py-1" style={{ backgroundColor: '#f0fdf4' }}>
                  <div className="rounded-circle me-2" style={{ width: '6px', height: '6px', backgroundColor: '#22c55e' }}></div>
                  <span className="fw-semibold" style={{ fontSize: '12px', color: '#16a34a' }}>Checked in - Active</span>
                </div>
              )}
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>01:19:25 - Mon, Apr 6</span>
            </div>
            
            <hr style={{ borderTop: '1px solid #f1f5f9', opacity: 1, margin: '0 0 2.5rem 0' }} />


            <div className="text-center mb-5">
              {!isCheckedIn ? (
                <>
                  <h1 className="display-2 fw-bold mb-2" style={{ color: '#94a3b8', letterSpacing: '2px' }}>00<span className="text-muted" style={{opacity:0.3}}>:</span>00<span className="text-muted" style={{opacity:0.3}}>:</span><span style={{ fontSize: '40px' }}>00</span></h1>
                  <p className="fw-semibold mb-4" style={{ fontSize: '13px', color: '#94a3b8', letterSpacing: '0.5px' }}>Session not <span className="fw-bold">STARTED</span></p>
                  
                  <div className="d-flex flex-column align-items-center gap-3">
                    <button 
                      className="btn text-white fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3 shadow-sm" 
                      onClick={() => setIsCheckedIn(true)}
                      style={{ backgroundColor: '#2b5cff', fontSize: '15px', padding: '12px 32px', minWidth: '180px' }}
                    >
                      <BsBoxArrowInRight size={18} /> Check In
                    </button>
                    <div className="d-flex align-items-center rounded-pill px-3 py-1" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div className="rounded-circle me-2" style={{ width: '6px', height: '6px', backgroundColor: '#f59e0b' }}></div>
                      <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>Shift starts at 9:00 AM</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="display-2 fw-bold mb-2 text-dark" style={{ letterSpacing: '2px' }}>06<span className="text-muted">:</span>10<span className="text-muted">:</span><span style={{ fontSize: '40px' }}>52</span></h1>
                  <p className="fw-semibold mb-4" style={{ fontSize: '13px', color: '#94a3b8', letterSpacing: '0.5px' }}>Session in <span className="fw-bold">PROGRESS</span></p>
                  
                  <div className="d-flex flex-column align-items-center gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center rounded-pill px-3 py-1" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', height: '42px' }}>
                        <div className="rounded-circle me-2" style={{ width: '6px', height: '6px', backgroundColor: '#f59e0b' }}></div>
                        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>Shift starts at 9:00 AM</span>
                      </div>
                      <button 
                        className="btn bg-white fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3" 
                        onClick={() => setIsCheckedIn(false)}
                        style={{ color: '#ef4444', border: '1.5px solid #ef4444', fontSize: '14px', padding: '0 24px', height: '42px' }}
                      >
                        <BsBoxArrowRight size={16} /> Check Out
                      </button>
                    </div>
                    
                    <div className="d-flex gap-3">
                      <button className="btn bg-white fw-semibold rounded-3 d-flex align-items-center gap-2" style={{ fontSize: '13px', border: '1px solid #e2e8f0', color: '#64748b', padding: '8px 20px' }}>
                        <BsClock size={14} /> Take a Break
                      </button>
                      <button className="btn bg-white fw-semibold rounded-3 d-flex align-items-center gap-2" style={{ fontSize: '13px', border: '1px solid #e2e8f0', color: '#64748b', padding: '8px 20px' }}>
                        <BsPencilSquare size={14} /> Regularise
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <hr style={{ borderColor: '#f1f5f9', margin: '2rem 0' }} />


            <div className="mb-5">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '13px' }}>Today's Goal</h6>
                <span className="fw-semibold" style={{ fontSize: '12px', color: '#94a3b8' }}>0h <span style={{opacity: 0.6}}>00m</span> / 8h</span>
              </div>
              
              <div className="position-relative" style={{ height: '24px' }}>
                <div className="w-100 position-absolute" style={{ top: '6px', height: '4px', backgroundColor: '#f1f5f9', borderRadius: '4px' }}>
                  {isCheckedIn && (
                    <div className="h-100 rounded-4" style={{ width: '75%', backgroundColor: '#2b5cff' }}></div>
                  )}
                </div>
                

                <div className="d-flex justify-content-between position-absolute w-100" style={{ top: '14px', fontSize: '10px', color: '#94a3b8', fontWeight: 500 }}>
                  <span>0h</span>
                  <span>2h</span>
                  <span>4h</span>
                  <span>6h</span>
                  <span>8h</span>
                </div>
              </div>
            </div>


            <div>
              <h6 className="fw-bold mb-4" style={{ fontSize: '11px', letterSpacing: '1px', color: '#94a3b8' }}>ACTIVITY TIMELINE</h6>
              
              {!isCheckedIn ? (
                <div className="text-center py-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '40px', height: '40px', backgroundColor: '#f8fafc' }}>
                    <BsClock size={16} className="text-muted" />
                  </div>
                  <p className="mb-1 fw-semibold text-muted" style={{ fontSize: '13px' }}>No activity yet today.</p>
                  <p className="text-muted" style={{ fontSize: '13px' }}>Check in to start your session.</p>
                </div>
              ) : (
                <div className="ps-3 position-relative" style={{ borderLeft: '2px solid #f1f5f9' }}>
                  <div className="position-relative mb-4">
                    <div className="position-absolute rounded-circle bg-white" style={{ width: '16px', height: '16px', border: '3px solid #22c55e', left: '-25px', top: '2px' }}></div>
                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Checked in</h6>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>10:00 AM</span>
                  </div>
                  
                  <div className="position-relative mb-4">
                    <div className="position-absolute rounded-circle bg-white" style={{ width: '16px', height: '16px', border: '3px solid #22c55e', left: '-25px', top: '2px' }}></div>
                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Pause for Break</h6>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>12:59 PM</span>
                  </div>
                  
                  <div className="position-relative">
                    <div className="position-absolute rounded-circle bg-white" style={{ width: '16px', height: '16px', border: '3px solid #22c55e', left: '-25px', top: '2px' }}></div>
                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Continue after Break</h6>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>01:59 PM</span>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>


        <div className="col-lg-4 d-flex flex-column gap-3">
          

          {!isCheckedIn ? (
            <div className="p-3 rounded-4 d-flex gap-3" style={{ backgroundColor: '#ffffff', border: '1px solid #fcd34d' }}>
              <BsSunFill size={20} className="mt-1" style={{ color: '#f59e0b' }} />
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#c2410c', fontSize: '13px' }}>Good morning, Sri Vishnu!</h6>
                <p className="mb-0 fw-semibold" style={{ color: '#c2410c', fontSize: '12px' }}>Your shift starts at 9:00 AM. You're on time today..</p>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-4 d-flex gap-3" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <BsCheckCircleFill size={20} className="mt-1" style={{ color: '#22c55e' }} />
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#9a3412', fontSize: '13px' }}>You're checked in! Great start.</h6>
                <p className="mb-0 fw-semibold" style={{ color: '#9a3412', fontSize: '12px' }}>Your session timer is running.</p>
              </div>
            </div>
          )}


          <Card className="p-4 shadow-sm border-0 rounded-4">
            <div className="row text-center mb-4">
              <div className="col-4 border-end">
                <h3 className="fw-bold text-dark mb-0">18</h3>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>Present</span>
              </div>
              <div className="col-4 border-end">
                <h3 className="fw-bold mb-0" style={{ color: '#f59e0b' }}>3</h3>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>Late days</span>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-danger mb-0">1</h3>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>Absent</span>
              </div>
            </div>
            
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#94a3b8' }}>MONTHLY ATTENDANCE</span>
              <span className="fw-bold" style={{ fontSize: '11px', color: '#2b5cff' }}>82%</span>
            </div>
            <div className="w-100 rounded-pill" style={{ height: '4px', backgroundColor: '#f1f5f9' }}>
              <div className="h-100 rounded-pill" style={{ width: '82%', backgroundColor: '#2b5cff' }}></div>
            </div>
          </Card>


          <Card className="p-4 shadow-sm border-0 rounded-4">
            <h6 className="fw-bold mb-4" style={{ fontSize: '11px', letterSpacing: '1px', color: '#94a3b8' }}>QUICK ACTIONS</h6>
            
            <div className="d-flex align-items-center justify-content-between mb-3 p-3 rounded-3" style={{ border: '1px solid #f1f5f9', cursor: 'pointer' }} onClick={() => setShowWfhModal(true)}>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                  <BsHouse size={16} />
                </div>
                <div>
                  <h6 className="fw-semibold text-dark mb-0" style={{ fontSize: '13px' }}>Request WFH</h6>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Submit for tomorrow</span>
                </div>
              </div>
              <BsChevronRight size={12} className="text-muted" />
            </div>
            
            <div className="d-flex align-items-center justify-content-between p-3 rounded-3" style={{ border: '1px solid #f1f5f9', cursor: 'pointer' }} onClick={() => setShowRegularizationModal(true)}>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                  <BsPencilSquare size={16} />
                </div>
                <div>
                  <h6 className="fw-semibold text-dark mb-0" style={{ fontSize: '13px' }}>Request Regularisation</h6>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Fix a past attendance entry</span>
                </div>
              </div>
              <BsChevronRight size={12} className="text-muted" />
            </div>
          </Card>


          <Card className="p-4 shadow-sm border-0 rounded-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: '11px', letterSpacing: '1px', color: '#94a3b8' }}>CURRENT LOCATION</h6>
            <div className="p-3 rounded-3 d-flex align-items-center gap-3" style={{ backgroundColor: '#f8fafc' }}>
              <div className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#22c55e' }}></div>
              <div>
                <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '12px' }}>
                  {!isCheckedIn ? 'Hi-Tech City, Hyderabad' : 'Headquarters, New York'}
                </h6>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Detected automatically</span>
              </div>
            </div>
          </Card>


          <Card className="p-4 shadow-sm border-0 rounded-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', backgroundColor: '#f1f5f9', color: '#64748b' }}>
                <BsInfoCircle size={14} />
              </div>
              <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '13px' }}>Policy Update</h6>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6', marginBottom: '12px' }}>
              The WFH request window has been extended to 24 hours in advance.
            </p>
            <a href="#" className="fw-semibold text-decoration-none" style={{ fontSize: '12px', color: '#2b5cff' }}>Read policy &rarr;</a>
          </Card>
          
          
        </div>
      </div>

      {(showWfhModal || showRegularizationModal) && (
        <div className="modal-backdrop fade show" style={{ zIndex: 1040, backgroundColor: 'rgba(15, 23, 42, 0.4)' }}></div>
      )}

      {showRegularizationModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1050 }} onClick={() => setShowRegularizationModal(false)}>
          <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content border-0 shadow-lg p-4" style={{ borderRadius: '12px', borderBottom: '6px solid #60a5fa' }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="fw-bold mb-1" style={{ fontSize: '20px', color: '#0f172a' }}>New Regularization</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Correct your attendance records by providing a valid justification for the discrepancy.</p>
                </div>
                <button type="button" className="btn-close" style={{ fontSize: '12px' }} onClick={() => setShowRegularizationModal(false)}></button>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-2" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#737373' }}>EFFECTIVE DATE</label>
                <div className="position-relative">
                  <input type="text" className="form-control border-0" placeholder="mm/dd/yyyy" style={{ fontSize: '13px', padding: '10px 14px', backgroundColor: '#f5f5f5' }} />
                  <BsCalendarDate className="position-absolute text-muted" size={14} style={{ right: '14px', top: '12px' }} />
                </div>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-2" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#737373' }}>REASON FOR REQUEST</label>
                <textarea className="form-control border-0" rows="3" placeholder="e.g. Technical glitch at entrance gate, forgot to swipe card..." style={{ fontSize: '13px', padding: '10px 14px', resize: 'none', backgroundColor: '#f5f5f5' }}></textarea>
              </div>
              <div className="d-flex align-items-start gap-2 p-3 mb-4 rounded-3" style={{ backgroundColor: '#f5f5f5' }}>
                <BsInfoCircle className="text-muted mt-1 flex-shrink-0" size={12} />
                <p className="mb-0 text-muted" style={{ fontSize: '11px', lineHeight: '1.5' }}>Please be concise. Requests are reviewed by the HR department and your direct supervisor. Attachments can be added after submission.</p>
              </div>
              <div className="d-flex gap-3">
                <button className="btn fw-semibold w-50" style={{ backgroundColor: '#e2e8f0', color: '#0f172a', fontSize: '13px', padding: '10px' }} onClick={() => setShowRegularizationModal(false)}>Cancel</button>
                <button className="btn fw-semibold w-50 text-white" style={{ backgroundColor: '#2b5cff', fontSize: '13px', padding: '10px' }} onClick={() => setShowRegularizationModal(false)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showWfhModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1050 }} onClick={() => setShowWfhModal(false)}>
          <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content border-0 shadow-lg p-4" style={{ borderRadius: '12px', borderBottom: '6px solid #60a5fa' }}>
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="fw-bold mb-1" style={{ fontSize: '20px', color: '#0f172a' }}>WFH Request</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Submit your remote work schedule for approval.</p>
                </div>
                <button type="button" className="btn-close" style={{ fontSize: '12px' }} onClick={() => setShowWfhModal(false)}></button>
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-2" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>REQUEST DATE</label>
                <div className="position-relative">
                  <input type="text" className="form-control text-dark" placeholder="mm/dd/yyyy" style={{ fontSize: '13px', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#ffffff', boxShadow: 'none' }} />
                  <BsCalendarDate className="position-absolute text-muted" size={14} style={{ right: '14px', top: '12px' }} />
                </div>
              </div>
              <div className="mb-4">
                <label className="fw-bold mb-2" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>REASON FOR REQUEST</label>
                <textarea className="form-control text-muted" rows="3" placeholder="Detail your request objectives..." style={{ fontSize: '13px', padding: '10px 14px', resize: 'none', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#ffffff', boxShadow: 'none' }}></textarea>
              </div>
              <div className="d-flex flex-column gap-2 mt-2">
                <button className="btn fw-semibold w-100 text-white" style={{ backgroundColor: '#2b5cff', fontSize: '14px', padding: '12px', borderRadius: '6px' }} onClick={() => setShowWfhModal(false)}>Submit Request</button>
                <button className="btn fw-semibold w-100 text-muted bg-transparent border-0" style={{ fontSize: '13px' }} onClick={() => setShowWfhModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AttendancePage;
