import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className='content'>
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
