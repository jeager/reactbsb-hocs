import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-subtitle">ReactBSB</span>
        <List/>
      </header>
    </div>
  );
}

export default App;
