import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import { useAuth } from '../contexts/AuthContext';

const ManagerLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
  }

  return (
    <div className="d-flex w-100" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: '0px' }}>
        <TopNavbar />
        <main className="p-4" style={{ marginLeft: 'var(--sidebar-width)', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerLayout;
