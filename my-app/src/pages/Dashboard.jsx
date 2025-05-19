// pages/Dashboard.js
import React from 'react';
import withAuth from '../hoc/withAuth';
import AuthService from '../services/AuthService';

const Dashboard = () => {
  const handleLogout = () => {
    AuthService.logout();
    // Force a reload to clear the authenticated state across the app
    window.location.reload();
  };
  
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your <se></se>cure dashboard!</p>
      <p>This page is only visible to authenticated users.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// Apply the HOC to secure the Dashboard
export default withAuth(Dashboard);