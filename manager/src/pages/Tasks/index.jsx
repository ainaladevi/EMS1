import React, { useState, useEffect } from 'react';
import Card from '../../components/common/Card';
import { 
  LuCheck, 
  LuClock, 
  LuCalendar, 
  LuUser
} from 'react-icons/lu';
import { BsArrowUpRightSquare, BsExclamationCircle, BsPencil, BsCheckSquare, BsTrash } from 'react-icons/bs';
import { FaGithub, FaBitbucket, FaCheck, FaTimes } from 'react-icons/fa';
import taskService from '../../services/taskService';
import EditTaskModal from './EditTaskModal';

const TasksPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalMode, setModalMode] = useState('edit');
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await taskService.getTaskPageData();
        setData(response.data);
      } catch (error) {
        console.error("Failed to load tasks page data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading Tasks...</div>;
  if (!data) return <div className="p-4">Error loading data.</div>;

  const filters = ['All', 'Overdue', 'In Progress', 'Done'];

  const handleEditClick = (task) => {
    setModalMode('edit');
    setTaskToEdit(task);
    setShowEditModal(true);
  };

  const handleCreateClick = () => {
    setModalMode('create');
    setTaskToEdit(null);
    setShowEditModal(true);
  };

  return (
    <div className="p-4 mx-auto" style={{ maxWidth: '1200px' }}>
      {/* Breadcrumbs & Title */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-1 text-sm">
              <li className="breadcrumb-item"><span className="text-muted">Dashboard</span></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page">Tasks</li>
            </ol>
          </nav>
          <h3 className="fw-bold mb-0 text-dark">Task Management</h3>
        </div>
        <button 
          className="btn text-white fw-semibold rounded-2" 
          style={{ backgroundColor: '#2b5cff', fontSize: '13px', padding: '8px 18px' }} 
          onClick={handleCreateClick}
        >
          Create Task
        </button>
      </div>

      {/* KPI Cards */}
      <div className="row g-3 mb-4">
        {/* Active Tasks */}
        <div className="col-md-3">
          <Card className="p-3 shadow-sm border-0 h-100 rounded-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#64748b' }}>ACTIVE TASKS</span>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                <BsCheckSquare size={16} />
              </div>
            </div>
            <h2 className="fw-bold mb-1 text-dark">{data.kpis.active.count}</h2>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{data.kpis.active.label}</span>
          </Card>
        </div>
        {/* Completed */}
        <div className="col-md-3">
          <Card className="p-3 shadow-sm border-0 h-100 rounded-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#64748b' }}>COMPLETED</span>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                <LuCheck size={16} />
              </div>
            </div>
            <h2 className="fw-bold mb-1 text-dark">{data.kpis.completed.count}</h2>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{data.kpis.completed.label}</span>
          </Card>
        </div>
        {/* In Progress */}
        <div className="col-md-3">
          <Card className="p-3 shadow-sm border-0 h-100 rounded-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#64748b' }}>IN PROGRESS</span>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#fff7ed', color: '#f97316' }}>
                <LuClock size={16} />
              </div>
            </div>
            <h2 className="fw-bold mb-1 text-dark">{data.kpis.inProgress.count}</h2>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{data.kpis.inProgress.label}</span>
          </Card>
        </div>
        {/* Overdue */}
        <div className="col-md-3">
          <Card className="p-3 shadow-sm border-0 h-100 rounded-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#64748b' }}>OVERDUE</span>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#fef2f2', color: '#ef4444' }}>
                <BsExclamationCircle size={16} />
              </div>
            </div>
            <h2 className="fw-bold mb-1 text-danger">{data.kpis.overdue.count}</h2>
            <span className="text-danger" style={{ fontSize: '12px', opacity: 0.8 }}>{data.kpis.overdue.label}</span>
          </Card>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="d-flex gap-2 mb-4">
        {filters.map(filter => (
          <button
            key={filter}
            className={`btn btn-sm rounded-pill px-3 ${activeFilter === filter ? 'btn-primary' : 'bg-white border text-dark'}`}
            onClick={() => setActiveFilter(filter)}
            style={{ fontSize: '13px', fontWeight: activeFilter === filter ? '500' : '400' }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="d-flex flex-column gap-3">
        {data.list.map((task, index) => {
          const isActive = index === 0;
          return (
            <Card 
              key={task.id} 
              className="p-4 shadow-sm position-relative rounded-4"
              style={{ 
                border: isActive ? '1px solid #2b5cff' : '1px solid #e2e8f0',
                borderLeft: isActive ? '3px solid #2b5cff' : '1px solid #e2e8f0',
              }}
            >
              <div className="row">
                {/* Column 1: Task Info */}
                <div className="col-md-4 pe-4">
                  <h5 className="fw-bold mb-1 text-dark">{task.title}</h5>
                  <span className="text-muted fw-bold d-block mb-3" style={{ fontSize: '10px', letterSpacing: '1px' }}>{task.type}</span>
                  
                  <div className="d-flex align-items-center text-muted mb-2" style={{ fontSize: '13px' }}>
                    <LuCalendar size={14} className="me-2" /> {task.date}
                  </div>
                  <div className="d-flex align-items-center text-muted mb-4" style={{ fontSize: '13px' }}>
                    <LuUser size={14} className="me-2" /> {task.assignee}
                  </div>
                  
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-sm bg-light border text-dark d-flex align-items-center gap-1 fw-semibold rounded-2" 
                      onClick={() => handleEditClick(task)}
                      style={{ fontSize: '12px', padding: '4px 12px' }}
                    >
                      <BsPencil size={12} /> Edit
                    </button>
                    <button className="btn btn-sm bg-light border text-dark d-flex align-items-center gap-1 fw-semibold rounded-2" style={{ fontSize: '12px', padding: '4px 12px' }}>
                      <BsTrash size={12} /> Delete
                    </button>
                  </div>
                </div>

                {/* Column 2: DevOps Link */}
                <div className="col-md-5 px-4" style={{ borderLeft: '1px solid #f1f5f9', borderRight: '1px solid #f1f5f9' }}>
                  <span className="text-muted fw-bold d-block mb-3" style={{ fontSize: '10px', letterSpacing: '1px' }}>DEVOPS LINK</span>
                  
                  <div className="d-flex align-items-center fw-semibold text-dark mb-3" style={{ fontSize: '13px' }}>
                    {task.sourceControl === 'github' ? <FaGithub size={16} className="me-2" /> : <FaBitbucket size={16} className="me-2" />}
                    {task.repo}
                  </div>
                  
                  <div className="d-flex align-items-center fw-semibold text-dark mb-3" style={{ fontSize: '13px' }}>
                    <BsArrowUpRightSquare size={14} className="me-2 text-muted" />
                    {task.prLink}
                    {task.prStatus === 'passing' && <span className="ms-2 rounded-circle bg-success" style={{ width: '6px', height: '6px' }}></span>}
                  </div>
                  
                  <div className="text-muted" style={{ fontSize: '11px', lineHeight: '1.6' }}>
                    {task.sourceControl === 'github' ? (
                      <>
                        Git Branch: {task.branch}<br/>
                        Last Commit: {task.commit}<br/>
                        GitHub Actions Status: {task.actionsStatus}
                      </>
                    ) : (
                      <>
                        Bitbucket Repository<br/>
                        Build (Passed) &rarr; Staging (Depl) &rarr; Production (Pend)
                      </>
                    )}
                  </div>
                </div>

                {/* Column 3: Status & Build */}
                <div className="col-md-3 ps-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex gap-2 mb-4">
                      {task.badges.map(badge => (
                        <span key={badge} className={`badge text-dark fw-bold px-2 py-1 ${badge === 'COMPLETED' ? 'bg-success bg-opacity-10 text-success' : 'bg-light border'}`} style={{ fontSize: '9px', letterSpacing: '0.5px' }}>
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-muted mb-2" style={{ fontSize: '11px', lineHeight: '1.6' }}>
                      {task.sourceControl === 'github' ? (
                        <>
                          Commit: {task.commit}<br/>
                          GitHub Actions Status: Passing
                        </>
                      ) : (
                        <>
                          Bitbucket Repository:<br/>
                          bitbucket.org/pegorion/backend-services<br/>
                          Branch: {task.branch}<br/>
                          Commit: {task.commit}<br/>
                          Bitbucket Pipelines Status: <span className="text-danger fw-bold">FAILED</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-muted" style={{ fontSize: '11px' }}>
                    Build Pipeline ({task.sourceControl === 'github' ? 'GitHub' : 'Bitbucket'}):{' '}
                    {task.buildPipeline === 'Passed' ? (
                      <span className="text-success fw-bold"><FaCheck size={10} className="me-1" /> Passed</span>
                    ) : (
                      <span className="text-danger fw-bold"><FaTimes size={10} className="me-1" /> Failed</span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Edit Task Modal */}
      <EditTaskModal 
        show={showEditModal} 
        onClose={() => setShowEditModal(false)} 
        task={taskToEdit} 
        mode={modalMode}
      />
    </div>
  );
};

export default TasksPage;
