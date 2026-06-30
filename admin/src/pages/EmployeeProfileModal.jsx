import React from 'react';
import { FiX, FiCalendar, FiMail, FiFileText, FiCheck } from 'react-icons/fi';
import './EmployeeProfileModal.css';

const EmployeeProfileModal = ({ show, onClose, employee }) => {
  if (!show) return null;

  return (
    <div className="epm-overlay" onClick={onClose}>
      <div className="epm-modal" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="epm-header">
          <h2 className="epm-title">Employee Profile</h2>
          <button className="epm-close-btn" onClick={onClose}>
            <FiX size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="epm-body">
          
          {/* Section: IDENTITY */}
          <div className="epm-section">
            <h3 className="epm-section-title">IDENTITY (READ-ONLY)</h3>
            <div className="epm-grid epm-grid-2">
              <div className="epm-field">
                <label>USER ID</label>
                <input type="text" readOnly value="6" />
              </div>
              <div className="epm-field">
                <label>EMPLOYEE ID</label>
                <input type="text" readOnly value={employee?.empId || "EMP003"} />
              </div>
              <div className="epm-field">
                <label>DESIGNATION</label>
                <input type="text" readOnly value={employee?.designation || "Software Engineer"} />
              </div>
              <div className="epm-field">
                <label>DEPARTMENT</label>
                <input type="text" readOnly value={employee?.dept || "Engineering"} />
              </div>
            </div>
          </div>

          {/* Section: PERSONAL DETAILS */}
          <div className="epm-section">
            <h3 className="epm-section-title">PERSONAL DETAILS</h3>
            <div className="epm-grid epm-grid-2">
              <div className="epm-field">
                <label>FIRST NAME</label>
                <input type="text" readOnly value="Sri" />
              </div>
              <div className="epm-field">
                <label>LAST NAME</label>
                <input type="text" readOnly value="Vishnu" />
              </div>
              <div className="epm-field">
                <label>GENDER</label>
                <input type="text" readOnly value="Male" />
              </div>
              <div className="epm-field">
                <label>MARITAL STATUS</label>
                <input type="text" readOnly value="Married" />
              </div>
              <div className="epm-field">
                <label>PRIMARY PHONE</label>
                <input type="text" readOnly value="+919876543230" />
              </div>
              <div className="epm-field epm-field-icon">
                <label>DATE OF BIRTH</label>
                <div className="epm-input-wrapper">
                  <input type="text" readOnly value="12 - 10 - 1995" />
                  <FiCalendar className="epm-icon-right" />
                </div>
              </div>
            </div>
          </div>

          {/* Section: BANK DETAILS */}
          <div className="epm-section">
            <h3 className="epm-section-title">BANK DETAILS</h3>
            <div className="epm-grid epm-grid-2">
              <div className="epm-field">
                <label>Account Name Holder <span className="epm-required">*</span></label>
                <input type="text" readOnly value="EMP025" />
              </div>
              <div className="epm-field">
                <label>Bank Name <span className="epm-required">*</span></label>
                <input type="text" readOnly value="EMP025" />
              </div>
              <div className="epm-field">
                <label>Account Number <span className="epm-required">*</span></label>
                <input type="text" readOnly value="XXXX XXXX 4321" />
              </div>
              <div className="epm-field">
                <label>IFSC Code <span className="epm-required">*</span></label>
                <input type="text" readOnly value="HDFC0001234" />
              </div>
            </div>
            <div className="epm-grid epm-grid-1" style={{marginTop: '16px'}}>
              <div className="epm-field">
                <label>Branch Name</label>
                <input type="text" readOnly value="Jubilee Hills, Hyderabad" />
              </div>
            </div>
          </div>

          {/* Section: CONTACT INFORMATION */}
          <div className="epm-section">
            <h3 className="epm-section-title epm-flex-title">
              <FiMail className="epm-title-icon" /> CONTACT INFORMATION
            </h3>
            <div className="epm-grid epm-grid-2">
              <div className="epm-contact-card">
                <span className="epm-contact-label">PERSONAL EMAIL</span>
                <span className="epm-contact-value">Sri.vish231e@example.com</span>
              </div>
              <div className="epm-contact-card">
                <span className="epm-contact-label">PRIMARY PHONE</span>
                <span className="epm-contact-value">+919876543230</span>
              </div>
            </div>
            <div className="epm-grid epm-grid-1" style={{marginTop: '16px'}}>
              <div className="epm-contact-card">
                <span className="epm-contact-label">CURRENT ADDRESS</span>
                <span className="epm-contact-value">456 MG Road, Hyderabad, Telangana - 560001</span>
              </div>
            </div>
          </div>

          {/* Section: EMERGENCY CONTACT */}
          <div className="epm-section">
            <h3 className="epm-section-title">EMERGENCY CONTACT</h3>
            <div className="epm-grid epm-grid-3">
              <div className="epm-field">
                <label>NAME</label>
                <input type="text" readOnly value="Durga" />
              </div>
              <div className="epm-field">
                <label>PHONE NO.</label>
                <input type="text" readOnly value="+919876543231" />
              </div>
              <div className="epm-field">
                <label>RELATION</label>
                <input type="text" readOnly value="Mother" />
              </div>
            </div>
          </div>

          {/* Section: DOCUMENTS */}
          <div className="epm-section">
            <div className="epm-flex-between">
              <h3 className="epm-section-title epm-flex-title">
                <FiFileText className="epm-title-icon" /> DOCUMENTS
              </h3>
              <div className="epm-verified-badge">
                <FiCheck size={12} /> Verified
              </div>
            </div>
            
            <div className="epm-document-card">
              <div className="epm-doc-icon-container">
                <div className="epm-doc-icon">
                  <FiFileText size={20} />
                </div>
              </div>
              <div className="epm-doc-details">
                <h4 className="epm-doc-name">AADHAAR</h4>
                <p className="epm-doc-path">C:Folder/media/employee_documents Employee_login_pannel.pdf</p>
                <p className="epm-doc-date">Uploaded: 2025-11-11 19:52:20</p>
                <button className="epm-doc-view-btn">View</button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="epm-footer">
          <button className="epm-btn-secondary" onClick={onClose}>Close</button>
          <button className="epm-btn-primary">Update Profile</button>
        </div>

      </div>
    </div>
  );
};

export default EmployeeProfileModal;
