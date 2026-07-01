import React from 'react';
import { FiClock } from 'react-icons/fi';

const Placeholder = ({ title }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: '600px',
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      border: '1px solid #E2E8F0',
      padding: '40px',
      margin: '24px',
      textAlign: 'center',
      color: '#0F172A'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        backgroundColor: '#EFF6FF',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <FiClock size={32} color="#3B82F6" />
      </div>
      <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>{title}</h1>
      <p style={{ color: '#64748B', maxWidth: '400px', lineHeight: '1.6' }}>
        This module is currently under development. Please check back later for updates.
      </p>
    </div>
  );
};

export default Placeholder;
