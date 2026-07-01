import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManagerLayout from '../layouts/ManagerLayout';
import Overview from '../pages/Dashboard/Overview';
import AnnouncementsPage from '../pages/Announcements';
import TasksPage from '../pages/Tasks';
import AttendancePage from '../pages/Attendance';
import AttendanceOverview from '../pages/AttendanceOverview';
import LeavePage from '../pages/Leave';

const Placeholder = ({ title }) => (
  <div className="p-4 d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
    <h4 className="text-muted">{title} Page is under construction</h4>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/manager/dashboard" replace />} />
      <Route path="/manager" element={<ManagerLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Overview />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        
        <Route path="attendance" element={<AttendancePage />} />
        <Route path="attendance-overview" element={<AttendanceOverview />} />
        <Route path="leave" element={<LeavePage />} />
        
        <Route path="chat" element={<Placeholder title="Chat" />} />
        
        <Route path="hr" element={<Placeholder title="HR Overview" />} />
        <Route path="payroll" element={<Placeholder title="Payroll" />} />
        <Route path="expenses" element={<Placeholder title="Expenses" />} />
        
        <Route path="performance" element={<Placeholder title="Performance" />} />
        <Route path="learning" element={<Placeholder title="Learning" />} />
        
        <Route path="documents" element={<Placeholder title="Documents" />} />
        <Route path="analytics" element={<Placeholder title="Analytics" />} />
        <Route path="compliance" element={<Placeholder title="Compliance" />} />
        
        <Route path="projects" element={<Placeholder title="Projects" />} />
        <Route path="employees" element={<Placeholder title="Employees" />} />
        <Route path="plans" element={<Placeholder title="Plans" />} />
      </Route>
      <Route path="*" element={<Navigate to="/manager/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
