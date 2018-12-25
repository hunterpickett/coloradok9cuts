import React, { Component } from 'react';
import './App.css';
import './index.css';
import { NavBar } from './components/navBar/navBar';

class App extends Component {
  render() {
    return (
      <div className="header-img" style={{ height: 1000 }}>
        <div className="flex container justify-end">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
