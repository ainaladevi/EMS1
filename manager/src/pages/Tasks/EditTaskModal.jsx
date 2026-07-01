import React, { useState, useEffect } from 'react';
import { BsPencilSquare, BsX, BsCalendar, BsSignpostSplit } from 'react-icons/bs';
import { FaGithub, FaCodeBranch } from 'react-icons/fa';
import { LuCheck, LuGitPullRequest } from 'react-icons/lu';

const EditTaskModal = ({ show, onClose, task, mode = 'edit' }) => {
  const [formData, setFormData] = useState({
    title: '',
    status: 'In Progress',
    priority: 'Medium',
    assignee: 'Sri Vishnu Reddy',
    category: 'Backend',
    dueDate: 'dd - mm - yyyy',
    estimatedHours: '',
    repository: '',
    gitBranch: '',
    pullRequest: '',
    description: ''
  });

  useEffect(() => {
    if (show) {
      if (mode === 'edit' && task) {
        setFormData({
          title: task.title || '',
          status: 'In Progress',
          priority: 'Medium',
          assignee: task.assignee || 'Sri Vishnu Reddy',
          category: 'Backend',
          dueDate: 'dd - mm - yyyy',
          estimatedHours: '',
          repository: task.repo || '',
          gitBranch: task.branch || '',
          pullRequest: task.prLink || '',
          description: ''
        });
      } else {
        setFormData({
          title: '',
          status: 'In Progress',
          priority: 'Medium',
          assignee: 'Sri Vishnu Reddy',
          category: 'Backend',
          dueDate: 'dd - mm - yyyy',
          estimatedHours: '',
          repository: '',
          gitBranch: '',
          pullRequest: '',
          description: ''
        });
      }
    }
  }, [show, task, mode]);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 1050, backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
      <div 
        className="bg-white position-relative d-flex flex-column" 
        style={{ 
          width: '628px', 
          height: '905px', 
          maxHeight: '95vh',
          borderRadius: '14px', 
          boxShadow: '0px 24px 64px 0px rgba(15, 23, 42, 0.20)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between p-4 border-bottom" style={{ borderColor: '#E2E8F0' }}>
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
              <BsPencilSquare size={14} />
            </div>
            <h5 className="mb-0 fw-bold text-dark" style={{ fontSize: '15px' }}>{mode === 'create' ? 'Create Task' : 'Edit Task'}</h5>
          </div>
          <button onClick={onClose} className="btn btn-sm btn-light p-1 border-0 rounded-2 text-muted bg-transparent">
            <BsX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex-grow-1 overflow-auto" style={{ backgroundColor: '#fff' }}>
          {/* TASK DETAILS */}
          <div className="mb-4">
            <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>TASK DETAILS</h6>
            <div className="mb-3">
              <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>
                Task Title <span className="text-danger">*</span>
              </label>
              <input 
                type="text" 
                className="form-control text-dark" 
                placeholder="Enter task title..." 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#E2E8F0', borderRadius: '6px' }}
              />
            </div>
          </div>

          {/* STATUS & ASSIGNMENT */}
          <div className="mb-4">
            <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>STATUS & ASSIGNMENT</h6>
            
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Status</label>
                <select className="form-select text-primary bg-transparent" style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#E2E8F0', borderRadius: '6px' }}>
                  <option>In Progress</option>
                  <option>TODO</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Priority</label>
                <div className="d-flex w-100 gap-2">
                  <button className="btn flex-grow-1 bg-white" style={{ fontSize: '13px', padding: '10px 0', border: '1px solid #E2E8F0', color: '#64748b', borderRadius: '6px' }}>Low</button>
                  <button className="btn flex-grow-1 fw-semibold" style={{ fontSize: '13px', padding: '10px 0', border: '1.5px solid #f59e0b', color: '#f59e0b', backgroundColor: '#fff7ed', borderRadius: '6px' }}>Medium</button>
                  <button className="btn flex-grow-1 bg-white" style={{ fontSize: '13px', padding: '10px 0', border: '1px solid #E2E8F0', color: '#64748b', borderRadius: '6px' }}>High</button>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Assigned To</label>
                <input 
                  type="text" 
                  className="form-control text-dark" 
                  value={formData.assignee}
                  onChange={e => setFormData({...formData, assignee: e.target.value})}
                  style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#E2E8F0', borderRadius: '6px' }}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Category</label>
                <select className="form-select text-dark" style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#E2E8F0', borderRadius: '6px' }}>
                  <option>Backend</option>
                  <option>Frontend</option>
                  <option>Design</option>
                </select>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="mb-4">
            <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>TIMELINE</h6>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Due Date</label>
                <div className="position-relative">
                  <input 
                    type="text" 
                    className="form-control text-dark" 
                    value={formData.dueDate}
                    readOnly
                    style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#E2E8F0', borderRadius: '6px' }}
                  />
                  <BsCalendar size={14} className="text-muted position-absolute" style={{ top: '13px', right: '14px' }} />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Estimated Hours</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. 8"
                  value={formData.estimatedHours}
                  onChange={e => setFormData({...formData, estimatedHours: e.target.value})}
                  style={{ fontSize: '13px', padding: '10px 14px', borderColor: '#E2E8F0', borderRadius: '6px' }}
                />
              </div>
            </div>
          </div>

          {/* DEVOPS LINK */}
          <div className="mb-4">
            <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>DEVOPS LINK</h6>
            <div className="mb-3">
              <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Repository</label>
              <div className="position-relative">
                <FaGithub size={14} className="text-muted position-absolute" style={{ top: '13px', left: '14px' }} />
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g., github.com/pegorion/frontend-ui"
                  value={formData.repository}
                  onChange={e => setFormData({...formData, repository: e.target.value})}
                  style={{ fontSize: '13px', padding: '10px 14px 10px 36px', borderColor: '#E2E8F0', borderRadius: '6px' }}
                />
              </div>
            </div>
            
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Git Branch</label>
                <div className="position-relative">
                  <FaCodeBranch size={14} className="text-muted position-absolute" style={{ top: '13px', left: '14px', transform: 'rotate(90deg)' }} />
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g., fix/header-alignment"
                    value={formData.gitBranch}
                    onChange={e => setFormData({...formData, gitBranch: e.target.value})}
                    style={{ fontSize: '13px', padding: '10px 14px 10px 36px', borderColor: '#E2E8F0', borderRadius: '6px' }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Pull Request</label>
                <div className="position-relative">
                  <BsSignpostSplit size={14} className="text-muted position-absolute" style={{ top: '13px', left: '14px' }} />
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g., pull/34"
                    value={formData.pullRequest}
                    onChange={e => setFormData({...formData, pullRequest: e.target.value})}
                    style={{ fontSize: '13px', padding: '10px 14px 10px 36px', borderColor: '#E2E8F0', borderRadius: '6px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-2">
            <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>DESCRIPTION</h6>
            <div>
              <label className="form-label text-dark fw-semibold mb-2" style={{ fontSize: '13px' }}>Task Description</label>
              <textarea 
                className="form-control" 
                placeholder="Describe the task in detail..."
                rows="4"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                style={{ fontSize: '13px', padding: '14px', borderColor: '#E2E8F0', borderRadius: '6px', resize: 'none' }}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-top d-flex justify-content-end gap-3" style={{ borderColor: '#E2E8F0', backgroundColor: '#fff' }}>
          <button 
            type="button" 
            className="btn btn-light bg-transparent border-0 text-muted fw-semibold" 
            onClick={onClose}
            style={{ fontSize: '13px' }}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn text-white fw-semibold d-flex align-items-center gap-2 rounded-2" 
            onClick={onClose}
            style={{ backgroundColor: '#2b5cff', fontSize: '13px', padding: '8px 18px' }}
          >
            <LuCheck size={16} /> {mode === 'create' ? 'Create Task' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
