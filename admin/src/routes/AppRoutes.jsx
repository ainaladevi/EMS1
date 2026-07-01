import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Announcements from '../pages/Announcements.jsx';
import Tasks from '../pages/Tasks.jsx';
import Employees from '../pages/Employees.jsx';
import AttendanceOverview from '../pages/AttendanceOverview.jsx';
import LeaveManagement from '../pages/LeaveManagement.jsx';
import Analytics from '../pages/Analytics.jsx';
import Compliance from '../pages/Compliance.jsx';
import Learning from '../pages/Learning.jsx';

import Chat from '../pages/Chat.jsx';
import Payroll from '../pages/Payroll.jsx';
import Expenses from '../pages/Expenses.jsx';
import Performance from '../pages/Performance.jsx';
import Documents from '../pages/Documents.jsx';
import Projects from '../pages/Projects.jsx';
import Plans from '../pages/Plans.jsx';
import Logs from '../pages/Logs.jsx';
import Security from '../pages/Security.jsx';

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
        <Route path="analytics" element={<Analytics />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="learning" element={<Learning />} />
        <Route path="chat" element={<Chat />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="performance" element={<Performance />} />
        <Route path="documents" element={<Documents />} />
        <Route path="projects" element={<Projects />} />
        <Route path="plans" element={<Plans />} />
        <Route path="logs" element={<Logs />} />
        <Route path="security" element={<Security />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
