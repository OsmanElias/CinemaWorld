import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Adjusted import path
import './css/index.css'; // Adjusted import path assuming index.js is in the src directory

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/other-path" element={<OtherComponent />} /> */} 
        {/* Ensure OtherComponent is imported if used */}
        {/* More routes can be added here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);