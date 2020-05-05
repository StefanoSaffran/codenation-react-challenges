 
import React from 'react';

import { ThemeProvider } from './theme';

const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;