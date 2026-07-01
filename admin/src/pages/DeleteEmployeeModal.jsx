import React, { useState } from 'react';
import { FiX, FiTrash2, FiAlertTriangle } from 'react-icons/fi';
import './DeleteEmployeeModal.css';

const DeleteEmployeeModal = ({ show, onClose, employee }) => {
  const [confirmText, setConfirmText] = useState('');

  if (!show) return null;

  const empName = employee?.name || 'Emp1';

  return (
    <div className="dem-overlay" onClick={onClose}>
      <div className="dem-modal" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="dem-header">
          <div className="dem-header-left">
            <div className="dem-header-icon">
              <FiTrash2 size={16} />
            </div>
            <div>
              <h2 className="dem-title">Delete employee</h2>
              <p className="dem-subtitle">This action cannot be undone</p>
            </div>
          </div>
          <button className="dem-close-btn" onClick={onClose}>
            <FiX size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="dem-body">
          
          <div className="dem-center-icon">
            <div className="dem-circle-icon">
              <FiTrash2 size={24} />
            </div>
          </div>
          
          <h3 className="dem-main-title">Delete {empName} ?</h3>
          
          <p className="dem-description">
            This will permanently remove <strong>{empName}</strong>'s profile, attendance records, documents, payroll data, and all associated data. This cannot be recovered.
          </p>

          <div className="dem-alert-box">
            <FiAlertTriangle className="dem-alert-icon" />
            <span>Type <strong>DELETE</strong> in the field below to confirm this action.</span>
          </div>

          <input 
            type="text" 
            className="dem-input" 
            placeholder="Type DELETE to confirm"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />

        </div>

        {/* Footer */}
        <div className="dem-footer">
          <button className="dem-btn-cancel" onClick={onClose}>Cancel</button>
          <button onClick={() => console.log("Button clicked!")} 
            className="dem-btn-delete" 
            disabled={confirmText !== 'DELETE'}
          >
            Permanently delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteEmployeeModal;
