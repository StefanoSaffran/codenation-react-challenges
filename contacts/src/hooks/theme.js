import React, { createContext, useCallback, useContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import usePersistedState from './usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const ThemeContext = createContext({});

const ThemeProvider= ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };