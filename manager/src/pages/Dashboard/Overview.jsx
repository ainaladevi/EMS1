import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import dashboardService from '../../services/dashboardService';
import AttendanceSummary from './components/AttendanceSummary';
import TaskSummary from './components/TaskSummary';
import Announcements from './components/Announcements';

const Overview = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dashboardService.getOverview();
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center text-muted mb-2 text-sm">
        Dashboard <span className="mx-2">›</span> <span className="text-dark fw-medium">Overview</span>
      </div>
      
      <h3 className="fw-bold mb-4">
        Welcome back, {user?.name}! 👋
      </h3>

      <div className="row g-4">
        <div className="col-12">
          <AttendanceSummary data={data?.attendance} />
        </div>
        <div className="col-12">
          <TaskSummary data={data?.tasks} />
        </div>
        <div className="col-12">
          <Announcements data={data?.announcements} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
