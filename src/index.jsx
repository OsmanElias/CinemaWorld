import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import './css/index.css'; // This path assumes index.jsx is inside the src directory

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Replace component with element and use JSX syntax */}
        {/* <Route path="/other-path" element={<OtherComponent />} /> */}
        {/* Ensure OtherComponent is imported if used */}
        {/* More routes can be added here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);