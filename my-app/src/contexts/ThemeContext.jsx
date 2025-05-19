import React, { createContext, useContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Create context
const ThemeContext = createContext();

// Custom hook
export const useTheme = () => useContext(ThemeContext);

// Theme provider
export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [mode, setMode] = useState(savedTheme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode],
  );

  // Apply theme to HTML element when it changes
  useEffect(() => {
    localStorage.setItem('theme', mode);
    const htmlElement = document.documentElement;
    
    if (mode === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

