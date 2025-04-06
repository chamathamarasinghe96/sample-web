// Theme context and provider for managing application theme
import { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const useThemeProvider = () => {
  // Check if user prefers dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  
  useEffect(() => {
    // Set initial theme based on user preference or saved setting
    const savedTheme = localStorage.getItem('theme');
    const initialDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDarkMode);
    
    if (initialDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    setIsDarkMode(initialDarkMode);
  }, [prefersDarkMode]);
  
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    
    if (newDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDarkMode(newDarkMode);
  };
  
  return { isDarkMode, toggleTheme };
};
