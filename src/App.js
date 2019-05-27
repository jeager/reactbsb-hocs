import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'
import ListCompanies from './list-companies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-subtitle">ReactBSB</span>
        <List/>
        <ListCompanies/>
      </header>
    </div>
  );
}

export default App;
