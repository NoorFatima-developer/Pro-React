// hoc/withAuth.js
import React, { useState, useEffect } from 'react';
import LoginPage from '../components/LoginPage';
import AuthService from '../services/AuthService';

// Higher Order Component for Authentication
const withAuth = (WrappedComponent) => {
  // Return a new component
  const WithAuth = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      // Check authentication status when component mounts
      const checkAuthentication = () => {
        const authStatus = AuthService.checkAuth();
        setIsAuthenticated(authStatus);
        setIsLoading(false);
      };
      
      checkAuthentication();
    }, []);
    
    // Show loading state while checking auth
    if (isLoading) {
      return <div className="loading">Checking authentication...</div>;
    }
    
    // If not authenticated, render the login component
    if (!isAuthenticated) {
      return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />;
    }
    
    // If authenticated, render the wrapped component with all props
    return <WrappedComponent {...props} />;
  };
  
  // Set display name for debugging
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  
  return WithAuth;
};

// Helper function to get the display name of a component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;