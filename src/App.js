import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='content'>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Header desc='użytkownika' />} />
          <Route path='/czatu' render={() => <Header desc='czatu' />} />
          <Route path='/uzytkownika' render={() => <Header desc='użytkownika' />} />
        </Switch>
        <Main />
      </Router>
    </div>
  );
}

export default App;
