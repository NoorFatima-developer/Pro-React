// pages/ProfilePage.js
import React from 'react';
import withAuth from '../hoc/withAuth';

const ProfilePage = () => {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p>This is your profile page. It's also protected by the auth HOC.</p>
    </div>
  );
};

// Apply the HOC to secure the Profile page
export default withAuth(ProfilePage);