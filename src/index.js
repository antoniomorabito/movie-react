import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
