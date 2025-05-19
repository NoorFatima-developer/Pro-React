// src/services/AuthService.js

const AuthService = {
  login: async (username, password) => {
    // Simulate a successful login
    if (username === 'admin' && password === '123') {
      localStorage.setItem('token', 'fake-token');
      return true;
    } else {        
      throw new Error('Invalid credentials');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  checkAuth: () => {
    // Returns true if token exists
    return !!localStorage.getItem('token');
  },
};

export default AuthService;
