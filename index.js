import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './src/components/Login'; // Adjusted import path
import './src/css/index.css'; // Adjusted import path assuming index.js is in the src directory

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/other-path" component={OtherComponent} /> */} 
        {/* Ensure OtherComponent is imported if used */}
        {/* More routes can be added here */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);