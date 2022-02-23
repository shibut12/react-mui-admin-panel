import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const SimpleTheme = createTheme();
// import SimpleTheme from './Themes/SimpleTheme';

ReactDOM.render(
  <ThemeProvider theme={SimpleTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/home" element={ <HomePage /> } />
        <Route element={ LoginPage } />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
