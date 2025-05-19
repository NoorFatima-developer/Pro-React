import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon for light mode

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Home</Link>
          <Link to="/counter" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Counter</Link>
          <Link to="/todo" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Todo</Link>
          <Link to="/pagination" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Pagination</Link>
          <Link to="/login" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Login</Link>
          <Link to="/button" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Button</Link>
          <Link to="/parent" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Parent</Link>
          <Link to="/calculation" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">UseMemo</Link>
          <Link to="/usecallback" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">UseCallback</Link>
          <Link to="/dashboard" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Dashboard</Link>
          <Link to="/publicpage" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Public Page</Link>
          <Link to="/profilepage" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Profile Page</Link>
        </div>
        
        <IconButton 
          onClick={toggleTheme}
          color="inherit"
          aria-label="toggle theme"
          className="text-gray-800 dark:text-white"
        >
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </nav>
  );
}

export default Navbar;