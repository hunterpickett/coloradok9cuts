import React, { Component } from 'react';
import './App.css';
import './index.css';
import { NavBar } from './components/navBar/navBar';

class App extends Component {
  render() {
    return (
      <>
        <div className="header-img" style={{ height: 1000 }}>
          <div className="flex container justify-end">
            <NavBar />
          </div>
        </div>
        <div className="container flex justify-center">
          <div className="text-center">
            <h1>Colorado K9 Cuts</h1>
            <h2>Professional, Experienced Mobile Dog Grooming</h2>
            <h3>Cage Free, All-inclusive service at your front door!</h3>
          </div>
        </div>
      </>
    );
  }
}

export default App;
