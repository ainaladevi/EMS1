import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar.jsx';
import TopNavbar from '../components/layout/TopNavbar.jsx';

const DashboardLayout = () => {
  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1" style={{ overflow: 'hidden' }}>
        <TopNavbar />
        <main className="flex-grow-1 overflow-auto p-4" style={{ backgroundColor: 'var(--bg-main)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
