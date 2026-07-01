import React, { useState } from 'react';
import { FiX, FiUsers, FiCalendar, FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi';
import './CreateEmployeeModal.css';

const CreateEmployeeModal = ({ show, onClose }) => {
  const [step, setStep] = useState(1);

  if (!show) return null;

  return (
    <div className="cem-overlay" onClick={onClose}>
      <div className="cem-modal" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cem-header">
          <div className="cem-header-left">
            <div className="cem-header-icon">
              <FiUsers size={18} />
            </div>
            <div>
              <h2 className="cem-title">Create employee profile</h2>
              <p className="cem-subtitle">Add a new employee to the directory</p>
            </div>
          </div>
          <button className="cem-close-btn" onClick={onClose}>
            <FiX size={16} />
          </button>
        </div>

        {/* Stepper */}
        <div className="cem-stepper">
          <div className={`cem-step ${step > 1 ? 'completed' : step === 1 ? 'active' : ''}`}>
            <div className="cem-step-circle">
              {step > 1 ? <FiCheck size={14} /> : '1'}
            </div>
            <span className="cem-step-label">Personal info</span>
          </div>
          <div className="cem-step-line"></div>
          <div className={`cem-step ${step > 2 ? 'completed' : step === 2 ? 'active' : ''}`}>
            <div className="cem-step-circle">
              {step > 2 ? <FiCheck size={14} /> : '2'}
            </div>
            <span className="cem-step-label">Role & Pay</span>
          </div>
          <div className="cem-step-line"></div>
          <div className={`cem-step ${step === 3 ? 'active' : ''}`}>
            <div className="cem-step-circle">
              {step === 3 ? <FiCheck size={14} /> : '3'}
            </div>
            <span className="cem-step-label">Access</span>
          </div>
        </div>

        {/* Body */}
        <div className="cem-body">
          {step === 1 && (
            <>
              <div className="cem-grid-2">
                <div className="cem-field">
                  <label>First name <span className="cem-required">*</span></label>
                  <input type="text" placeholder="e.g. Srinivas" />
                </div>
                <div className="cem-field">
                  <label>Last name <span className="cem-required">*</span></label>
                  <input type="text" placeholder="e.g. Reddy" />
                </div>
              </div>

              <div className="cem-field">
                <label>Work email <span className="cem-required">*</span></label>
                <input type="email" placeholder="srinivas@company.com" />
              </div>

              <div className="cem-grid-2">
                <div className="cem-field">
                  <label>Phone number</label>
                  <input type="text" placeholder="+91 98765 43210" />
                </div>
                <div className="cem-field cem-field-icon">
                  <label>Date of birth</label>
                  <div className="cem-input-wrapper">
                    <input type="text" placeholder="dd - mm - yyyy" />
                    <FiCalendar className="cem-icon-right" />
                  </div>
                </div>
              </div>

              <div className="cem-field">
                <label>Address</label>
                <textarea rows="3" placeholder="Street, City, State, PIN"></textarea>
              </div>

              <div className="cem-field">
                <label>Emergency contact</label>
                <input type="text" placeholder="Name · Relationship · Phone" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="cem-grid-2">
                <div className="cem-field">
                  <label>Employee ID <span className="cem-required">*</span></label>
                  <input type="text" placeholder="EMP025" />
                </div>
                <div className="cem-field cem-field-icon">
                  <label>Join date <span className="cem-required">*</span></label>
                  <div className="cem-input-wrapper">
                    <input type="text" placeholder="dd - mm - yyyy" />
                    <FiCalendar className="cem-icon-right" />
                  </div>
                </div>
              </div>

              <div className="cem-grid-2">
                <div className="cem-field">
                  <label>Department <span className="cem-required">*</span></label>
                  <input type="text" placeholder="Engineering" />
                </div>
                <div className="cem-field">
                  <label>Designation <span className="cem-required">*</span></label>
                  <input type="text" placeholder="e.g. Software Engineer" />
                </div>
              </div>

              <div className="cem-grid-2">
                <div className="cem-field">
                  <label>Employment type</label>
                  <input type="text" placeholder="Full-time" />
                </div>
                <div className="cem-field">
                  <label>Reporting manager</label>
                  <input type="text" placeholder="Ravi Kumar" />
                </div>
              </div>

              <div className="cem-grid-2">
                <div className="cem-field">
                  <label>Annual CTC (₹)</label>
                  <input type="text" placeholder="1200000" />
                </div>
                <div className="cem-field">
                  <label>Work location</label>
                  <input type="text" placeholder="Hyderabad HQ" />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="cem-field">
                <label>System role</label>
                <div className="cem-role-group">
                  <button onClick={() => alert("Button clicked!")} className="cem-role-btn">Admin</button>
                  <button onClick={() => alert("Button clicked!")} className="cem-role-btn active">Employee</button>
                  <button onClick={() => alert("Button clicked!")} className="cem-role-btn">HR manager</button>
                  <button onClick={() => alert("Button clicked!")} className="cem-role-btn">Manager</button>
                </div>
              </div>

              <div className="cem-field">
                <label>Welcome email</label>
                <div className="cem-checkbox-group">
                  <input type="checkbox" defaultChecked id="welcome-email" />
                  <label htmlFor="welcome-email">Send onboarding email with login credentials</label>
                </div>
              </div>

              <div className="cem-field">
                <label>Notes</label>
                <textarea rows="4" placeholder="Internal admin notes (not visible to employee)..."></textarea>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="cem-footer">
          {step > 1 && (
            <button className="cem-btn-cancel" onClick={() => setStep(step - 1)} style={{ display: 'flex', alignItems: 'center' }}>
              <FiArrowLeft size={14} style={{marginRight: '6px'}} /> Back
            </button>
          )}
          <button className="cem-btn-cancel" onClick={onClose}>Cancel</button>
          <button className="cem-btn-next" onClick={() => {
            if (step < 3) setStep(step + 1);
            else {
              setStep(1);
              onClose();
            }
          }}>
            {step === 3 ? 'Create profile' : 'Next'} <FiArrowRight size={14} style={{marginLeft: '6px'}} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateEmployeeModal;
