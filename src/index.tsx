import CourseProvider from 'context/CourseContext';
import ThemeProvider from 'context/ThemeContext';
import UserProvider from 'context/UserContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CourseProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </CourseProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
