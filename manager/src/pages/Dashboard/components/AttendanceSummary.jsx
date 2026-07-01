import React from 'react';
import Card from '../../../components/common/Card';
import { LuClock, LuBriefcase } from 'react-icons/lu';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

const AttendanceSummary = ({ data }) => {
  if (!data) return null;

  const statCards = [
    {
      title: 'Present',
      value: data.present,
      subtext: `↑ ${data.attendanceRate}% rate`,
      icon: BsCheckCircle,
      color: '#10b981',
      bg: '#ecfdf5'
    },
    {
      title: 'Absent',
      value: data.absent,
      subtext: `${data.unexcused} unexcused`,
      icon: BsXCircle,
      color: '#ef4444',
      bg: '#fef2f2'
    },
    {
      title: 'Late Arrivals',
      value: data.lateArrivals,
      subtext: `After ${data.lateAfter}`,
      icon: LuClock,
      color: '#f59e0b',
      bg: '#fffbeb'
    },
    {
      title: 'Work From Home',
      value: data.workFromHome,
      subtext: 'Approved WFH',
      icon: LuBriefcase,
      color: '#3b82f6',
      bg: '#eff6ff'
    }
  ];

  return (
    <div className="mb-4">
      <div className="d-flex align-items-center gap-2 mb-3">
        <LuClock className="text-muted" />
        <h6 className="m-0 fw-semibold">Team Attendance — Today</h6>
      </div>
      <div className="row g-3">
        {statCards.map((stat, idx) => (
          <div key={idx} className="col-md-3">
            <Card hoverable className="h-100 p-3 d-flex align-items-center gap-3">
              <div 
                className="rounded p-2 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: stat.bg, color: stat.color, width: '48px', height: '48px' }}
              >
                <stat.icon size={24} />
              </div>
              <div>
                <div className="fs-3 fw-bold lh-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-dark fw-semibold mt-1" style={{ fontSize: '13px' }}>{stat.title}</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>{stat.subtext}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceSummary;
