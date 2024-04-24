/**
 * 
 * App.js 
 * 
 *  React root component that includes other components
 * 
 * */ 


import React from 'react';
import Login from './components/Login'; 

// Import other components
/**import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainPage from './pages/MainPage';
**/



function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <MainPage />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;