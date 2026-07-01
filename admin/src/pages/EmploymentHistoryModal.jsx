import React, { useState } from 'react';
import { FiX, FiCalendar, FiPlus } from 'react-icons/fi';
import './EmploymentHistoryModal.css';

const EmploymentHistoryModal = ({ show, onClose, employee }) => {
  const [showNewEntry, setShowNewEntry] = useState(true);

  if (!show) return null;

  const empId = employee?.empId || 'EMP003';

  return (
    <div className="ehm-overlay" onClick={onClose}>
      <div className="ehm-modal" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="ehm-header">
          <h2 className="ehm-title">Employment History for <span>{empId}</span></h2>
          <button className="ehm-close-btn" onClick={onClose}>
            <FiX size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="ehm-body">
          
          <div className="ehm-add-record-bar">
            <span>Add a previous employment record</span>
            <button className="ehm-btn-add-primary" onClick={() => setShowNewEntry(true)}>
              <FiPlus size={14} /> Add
            </button>
          </div>

          {showNewEntry && (
            <div className="ehm-new-entry-section">
              <h4 className="ehm-new-entry-title">NEW ENTRY</h4>
              
              <div className="ehm-grid-2">
                <div className="ehm-field">
                  <label>COMPANY</label>
                  <input type="text" placeholder="Company name" />
                </div>
                <div className="ehm-field">
                  <label>DESIGNATION</label>
                  <input type="text" placeholder="Your role" />
                </div>
                <div className="ehm-field ehm-field-icon">
                  <label>START DATE</label>
                  <div className="ehm-input-wrapper">
                    <input type="text" placeholder="dd - mm - yyyy" />
                    <FiCalendar className="ehm-icon-right" />
                  </div>
                </div>
              </div>

              <div className="ehm-grid-2" style={{ marginTop: '16px' }}>
                <div className="ehm-field ehm-field-icon">
                  <label>END DATE</label>
                  <div className="ehm-input-wrapper">
                    <input type="text" placeholder="dd - mm - yyyy" />
                    <FiCalendar className="ehm-icon-right" />
                  </div>
                </div>
                <div className="ehm-field" style={{ gridColumn: 'span 2' }}>
                  <label>JOB DESCRIPTION</label>
                  <input type="text" placeholder="Brief description..." />
                </div>
              </div>

              <div className="ehm-new-entry-actions">
                <button className="ehm-btn-cancel" onClick={() => setShowNewEntry(false)}>Cancel</button>
                <button onClick={() => console.log("Button clicked!")} className="ehm-btn-save">Add</button>
              </div>
            </div>
          )}

          <div className="ehm-records-list">
            
            <div className="ehm-record-item">
              <div className="ehm-record-header">
                <div className="ehm-record-info">
                  <h4 className="ehm-record-title"><strong>Digital Innovations Inc</strong> — Software Developer</h4>
                  <p className="ehm-record-date">2022-07-01 to 2024-10-31</p>
                </div>
                <div className="ehm-record-actions">
                  <button onClick={() => console.log("Button clicked!")} className="ehm-btn-outline">Edit</button>
                  <button onClick={() => console.log("Button clicked!")} className="ehm-btn-outline">Delete</button>
                </div>
              </div>
              <p className="ehm-record-desc">
                Full-stack development with Python and JavaScript. Led team of 3 developers.
              </p>
            </div>

            <div className="ehm-record-item">
              <div className="ehm-record-header">
                <div className="ehm-record-info">
                  <h4 className="ehm-record-title"><strong>Tech Solutions Pvt Ltd</strong> — Junior Developer</h4>
                  <p className="ehm-record-date">2020-06-01 to 2022-05-31</p>
                </div>
                <div className="ehm-record-actions">
                  <button onClick={() => console.log("Button clicked!")} className="ehm-btn-outline">Edit</button>
                  <button onClick={() => console.log("Button clicked!")} className="ehm-btn-outline">Delete</button>
                </div>
              </div>
              <p className="ehm-record-desc">
                Developed web applications using Django and React. Worked on e-commerce platform.
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="ehm-footer">
          <button className="ehm-btn-close-large" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
};

export default EmploymentHistoryModal;
