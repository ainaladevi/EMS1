import React, { useState } from 'react';
import { 
  FiEdit, 
  FiTrash2, 
  FiCalendar, 
  FiUser, 
  FiGithub, 
  FiCheckSquare,
  FiCheck,
  FiClock,
  FiAlertCircle,
  FiX,
  FiExternalLink,
  FiGitBranch,
  FiGitPullRequest,
  FiPlus
} from 'react-icons/fi';
import './Tasks.css';

const PullRequestIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
    <line x1="6" y1="9" x2="6" y2="21"></line>
  </svg>
);

const BitbucketIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M2.271 0C.635 0 .023 1.144.17 2.455l2.84 18.062c.162 1.055 1.085 1.547 2.062 1.483h13.914c.95-.064 1.706-.725 1.838-1.666l2.97-17.842C23.953 1.135 23.328 0 21.684 0H2.271zm15.424 14.869H7.21l-.974-6.311h11.954l-1.495 6.311z"/>
  </svg>
);

const Tasks = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalState, setModalState] = useState({ isOpen: false, mode: 'create', data: null });

  const tasks = [
    {
      id: 1,
      title: 'Frontend bug',
      subtitle: 'BUG',
      date: '17/4/2026',
      assignee: 'Anil Rachuri',
      devops: {
        repoType: 'github',
        repoLink: 'github.com/pegorion/frontend-ui',
        prLink: 'pull/34: Add fix for alignment',
        branch: 'fix/header-alignment',
        commit: 'b4f7a2d',
        status: 'Passing',
      },
      status: {
        stage: 'TODO',
        priority: 'MEDIUM',
        pipelineStatus: 'Passed',
        isPipelineGreen: true
      },
      isActive: true
    },
    {
      id: 2,
      title: 'frontend Bug',
      subtitle: 'ABCD',
      date: '31/3/2026',
      assignee: 'admin company',
      devops: {
        repoType: 'bitbucket',
        repoLink: 'bitbucket.org/pegorion/backend-services',
        prLink: 'projects/PEG/repos/backend/pull-requests/21...',
        repoName: 'Bitbucket Repository',
        buildFlow: 'Build (Passed) → Staging (Depl) → Production (Pend)',
      },
      status: {
        stage: 'COMPLETED',
        priority: 'MEDIUM',
        pipelineStatus: 'FAILED',
        isPipelineGreen: false,
        repoFullName: 'bitbucket.org/pegorion/backend-services',
        branch: 'refactor/endpoint-names',
        commit: 'a7c1b2d',
      },
      isActive: false
    },
    {
      id: 3,
      title: 'frontend Bug',
      subtitle: 'ABCD',
      date: '31/3/2026',
      assignee: 'admin company',
      devops: {
        repoType: 'bitbucket',
        repoLink: 'bitbucket.org/pegorion/backend-services',
        prLink: 'projects/PEG/repos/backend/pull-requests/21...',
        repoName: 'Bitbucket Repository',
        buildFlow: 'Build (Passed) → Staging (Depl) → Production (Pend)',
      },
      status: {
        stage: 'COMPLETED',
        priority: 'MEDIUM',
        pipelineStatus: 'FAILED',
        isPipelineGreen: false,
        repoFullName: 'bitbucket.org/pegorion/backend-services',
        branch: 'refactor/endpoint-names',
        commit: 'a7c1b2d',
      },
      isActive: false
    }
  ];

  return (
    <div className="tasks-page">
      <div className="page-header-flex">
        <div>
          <div className="breadcrumb">
            <span className="breadcrumb-item">Dashboard</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item active">Tasks</span>
          </div>
          <h1 className="page-title">Task Management</h1>
        </div>
        <button className="btn-primary-custom" onClick={() => setModalState({ isOpen: true, mode: 'create', data: null })}>
          + Assign Task
        </button>
      </div>

      <div className="stat-cards-grid mt-4">
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-label uppercase-label">ACTIVE TASKS</div>
            <div className="stat-value text-xl">12</div>
            <div className="stat-meta">Assigned this sprint</div>
          </div>
          <div className="stat-icon-wrapper bg-primary-light text-primary">
            <FiCheckSquare size={16} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-label uppercase-label">COMPLETED</div>
            <div className="stat-value text-xl">5</div>
            <div className="stat-meta">41% completion rate</div>
          </div>
          <div className="stat-icon-wrapper bg-success-light text-success-custom">
            <FiCheck size={16} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-label uppercase-label">IN PROGRESS</div>
            <div className="stat-value text-xl">5</div>
            <div className="stat-meta">Due this week</div>
          </div>
          <div className="stat-icon-wrapper bg-warning-light text-warning">
            <FiClock size={16} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-label uppercase-label">OVERDUE</div>
            <div className="stat-value text-xl text-danger">2</div>
            <div className="stat-meta text-danger">Needs immediate action</div>
          </div>
          <div className="stat-icon-wrapper bg-danger-light text-danger">
            <FiAlertCircle size={16} />
          </div>
        </div>
      </div>

      <div className="filters-section mt-4">
        <div className="pill-filters">
          {['All', 'Overdue', 'In Progress', 'Done'].map(filter => (
            <button 
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active bg-primary text-white' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="task-list mt-4">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.isActive ? 'active-border' : ''}`}>

            <div className="task-col task-col-main">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-subtitle">{task.subtitle}</p>
              
              <div className="task-meta-info">
                <span className="task-meta-item"><FiCalendar className="me-1" /> {task.date}</span>
                <span className="task-meta-item"><FiUser className="me-1" /> {task.assignee}</span>
              </div>
              
              <div className="task-actions">
                <button 
                  className="btn-outline-small"
                  onClick={() => setModalState({ isOpen: true, mode: 'edit', data: task })}
                >
                  <FiEdit className="me-1"/> Edit
                </button>
                <button onClick={() => console.log("Button clicked!")} className="btn-outline-small"><FiTrash2 className="me-1"/> Delete</button>
              </div>
            </div>

            <div className="task-col task-col-devops">
              <h4 className="col-label">DEVOPS LINK</h4>
              
              <div className="devops-link-main">
                {task.devops.repoType === 'github' ? <FiGithub size={14} className="icon-black" /> : <BitbucketIcon />}
                <span className="devops-text-bold">{task.devops.repoLink}</span>
              </div>
              
              <div className="devops-link-sub">
                {task.devops.repoType === 'github' ? <PullRequestIcon /> : <FiExternalLink size={14} className="icon-gray" />}
                <span className="devops-text-bold">{task.devops.prLink}</span>
                {task.devops.repoType === 'github' && <span className="status-dot-green"></span>}
              </div>
              
              {task.devops.repoType === 'github' ? (
                <div className="devops-details">
                  <p>Git Branch: <span className="text-light-blue">{task.devops.branch}</span></p>
                  <p>Last Commit: <span className="text-light-blue">{task.devops.commit}</span></p>
                  <p>GitHub Actions Status: <span className="text-light-blue">{task.devops.status}</span></p>
                </div>
              ) : (
                <div className="devops-details">
                  <p>{task.devops.repoName}</p>
                  <p className="build-flow-text">{task.devops.buildFlow}</p>
                </div>
              )}
            </div>

            <div className="task-col task-col-status">
              <div className="status-badges">
                <span className={`task-badge badge-${task.status.stage.toLowerCase()}`}>{task.status.stage}</span>
                <span className="task-badge badge-medium">{task.status.priority}</span>
              </div>
              
              <div className="status-details">
                {task.status.repoFullName && <p>Bitbucket Repository: <span className="text-light-blue">{task.status.repoFullName}</span></p>}
                {task.status.branch && <p>Branch: <span className="text-light-blue">{task.status.branch}</span></p>}
                
                <p>Commit: <span className="text-light-blue">{task.status.commit || task.devops.commit}</span></p>
                
                {task.devops.repoType === 'github' ? (
                  <>
                    <p>GitHub Actions Status: <span className="text-light-blue">{task.devops.status}</span></p>
                    <p>Build Pipeline (GitHub): <span className={task.status.isPipelineGreen ? 'text-success-bold' : 'text-danger-bold'}>
                      {task.status.isPipelineGreen ? <FiCheck size={12} className="me-1"/> : <FiX size={12} className="me-1"/>}
                      {task.status.pipelineStatus}
                    </span></p>
                  </>
                ) : (
                  <>
                    <p>Bitbucket Pipelines Status: <span className="text-danger-bold">{task.status.pipelineStatus}</span></p>
                    <p>Build Pipeline (Bitbucket): <span className="text-danger-bold">
                      <FiX size={12} className="me-1"/> {task.status.pipelineStatus === 'FAILED' ? 'Failed' : task.status.pipelineStatus}
                    </span></p>
                  </>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {modalState.isOpen && (
        <div className="modal-overlay">
          <div className="modal-container task-modal-container">
            <div className="modal-header">
              <div className="modal-header-title-group">
                <div className="edit-icon-header bg-primary-light text-primary">
                  {modalState.mode === 'edit' ? <FiEdit size={14} /> : <FiPlus size={14} />}
                </div>
                <div>
                  <h2 className="modal-title">{modalState.mode === 'edit' ? 'Edit Task' : 'Create Task'}</h2>
                </div>
              </div>
              <button className="btn-close-modal" onClick={() => setModalState({ isOpen: false })}>
                <FiX size={16} />
              </button>
            </div>

            <div className="modal-body task-modal-body">
              <form>
                <div className="section-label mt-0">TASK DETAILS</div>
                <div className="form-group">
                  <label className="form-label">Task Title <span className="text-danger">*</span></label>
                  <input type="text" className="form-input" placeholder="Enter task title..." defaultValue="" />
                </div>

                <div className="section-label">STATUS & ASSIGNMENT</div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label">Status</label>
                    <select className="form-select bg-primary-light text-primary" style={{ borderColor: '#BFDBFE', fontWeight: 500 }} defaultValue="In Progress">
                      <option>In Progress</option>
                      <option>TODO</option>
                      <option>COMPLETED</option>
                    </select>
                  </div>
                  <div className="form-group flex-1">
                    <label className="form-label">Priority</label>
                    <div className="priority-pills">
                      <button onClick={() => console.log("Button clicked!")} type="button" className="priority-pill">Low</button>
                      <button onClick={() => console.log("Button clicked!")} type="button" className="priority-pill active-medium">Medium</button>
                      <button onClick={() => console.log("Button clicked!")} type="button" className="priority-pill">High</button>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label">Assigned To</label>
                    <input type="text" className="form-input" defaultValue="Sri Vishnu Reddy" />
                  </div>
                  <div className="form-group flex-1">
                    <label className="form-label">Category</label>
                    <select className="form-select" defaultValue="Backend">
                      <option>Backend</option>
                      <option>Frontend</option>
                      <option>Design</option>
                    </select>
                  </div>
                </div>

                <div className="section-label">TIMELINE</div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label">Due Date</label>
                    <div className="input-with-icon-right">
                      <input type="text" className="form-input" placeholder="dd - mm - yyyy" />
                      <FiCalendar className="input-icon-right" />
                    </div>
                  </div>
                  <div className="form-group flex-1">
                    <label className="form-label">Estimated Hours</label>
                    <input type="text" className="form-input" placeholder="e.g. 8" />
                  </div>
                </div>

                <div className="section-label">DEVOPS LINK</div>
                <div className="form-group">
                  <label className="form-label">Repository</label>
                  <div className="input-with-icon-left">
                    <FiGithub className="input-icon-left" />
                    <input type="text" className="form-input pl-10" placeholder="e.g., github.com/pegorion/frontend-ui" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label">Git Branch</label>
                    <div className="input-with-icon-left">
                      <FiGitBranch className="input-icon-left" />
                      <input type="text" className="form-input pl-10" placeholder="e.g., fix/header-alignment" />
                    </div>
                  </div>
                  <div className="form-group flex-1">
                    <label className="form-label">Pull Request</label>
                    <div className="input-with-icon-left">
                      <FiGitPullRequest className="input-icon-left" />
                      <input type="text" className="form-input pl-10" placeholder="e.g., pull/34" />
                    </div>
                  </div>
                </div>

                <div className="section-label">DESCRIPTION</div>
                <div className="form-group mb-0">
                  <label className="form-label">Task Description</label>
                  <textarea className="form-textarea" placeholder="Describe the task in detail..." rows="4"></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer justify-end">
              <button type="button" className="btn-cancel" onClick={() => setModalState({ isOpen: false })}>Cancel</button>
              <button type="button" className="btn-primary-custom" onClick={() => setModalState({ isOpen: false })}>
                <FiCheck className="me-2" /> {modalState.mode === 'edit' ? 'Save Changes' : 'Create Task'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
