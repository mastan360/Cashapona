import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/viwe/Home";
import Network from "./components/Network/view/network"


class App extends Component {
  render() {
    return (
      <div className="conatiner">
     <Home/>
     <Network/>
    
      </div>
    );
  }
}

export default App;
