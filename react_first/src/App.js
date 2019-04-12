import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels on the World !</h1>
        </header>
        <Travels
          destination="Welcome of Great Wall on China"
          country="China"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/280px-Great_Wall_of_China_July_2006.JPG"
          distance="From Paris to Peking it will take 10h 55 in flight"
        />
        <Travels
          destination="Welcome of the Partheon in Athens"
          country="Athens"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/260px-The_Parthenon_in_Athens.jpg"
          distance="From Paris to Athens it will take 3h 50 in flight"
        />
      </div>
    );
  }
}

export default App;
