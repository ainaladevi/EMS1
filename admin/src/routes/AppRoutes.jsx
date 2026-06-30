import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Announcements from '../pages/Announcements.jsx';
import Tasks from '../pages/Tasks.jsx';
import Employees from '../pages/Employees.jsx';
import AttendanceOverview from '../pages/AttendanceOverview.jsx';
import LeaveManagement from '../pages/LeaveManagement.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="employees" element={<Employees />} />
        <Route path="attendance" element={<AttendanceOverview />} />
        <Route path="leave" element={<LeaveManagement />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
