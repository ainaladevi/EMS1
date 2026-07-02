import React from 'react';
import Card from '../../../components/common/Card';
import { LuListTodo, LuClock } from 'react-icons/lu';
import { BsCheckSquare } from 'react-icons/bs';

const TaskSummary = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mb-4">
      <div className="d-flex align-items-center gap-2 mb-3">
        <LuListTodo className="text-muted" />
        <h6 className="m-0 fw-semibold">Task Summary — This Month</h6>
      </div>
      <div className="row g-3">
        <div className="col-md-4">
          <Card hoverable className="h-100 p-3 d-flex align-items-center gap-3">
            <div className="ems-icon-box bg-light text-primary">
              <LuListTodo size={24} />
            </div>
            <div>
              <div className="fs-3 fw-bold lh-1 text-dark">{data.assigned}</div>
              <div className="text-dark fw-semibold mt-1" style={{ fontSize: '13px' }}>Tasks Assigned</div>
              <div className="text-muted" style={{ fontSize: '11px' }}>Across {data.assignedAcross} members</div>
            </div>
          </Card>
        </div>

        <div className="col-md-4">
          <Card hoverable className="h-100 p-3 d-flex align-items-center gap-3">
            <div className="ems-icon-box ems-badge-soft-green">
              <BsCheckSquare size={24} />
            </div>
            <div>
              <div className="fs-3 fw-bold lh-1 text-success">{data.completed}</div>
              <div className="text-dark fw-semibold mt-1" style={{ fontSize: '13px' }}>Completed</div>
              <div className="text-success" style={{ fontSize: '11px' }}>{data.completionRate}% rate</div>
            </div>
          </Card>
        </div>

        <div className="col-md-4">
          <Card hoverable className="h-100 p-3 d-flex align-items-center gap-3">
            <div className="ems-icon-box ems-badge-soft-orange">
              <LuClock size={24} />
            </div>
            <div>
              <div className="fs-3 fw-bold lh-1 text-warning">{data.inProgress}</div>
              <div className="text-dark fw-semibold mt-1" style={{ fontSize: '13px' }}>In Progress</div>
              <div className="text-warning" style={{ fontSize: '11px' }}>{data.nearDeadline} near deadline</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
