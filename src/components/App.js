import React, { Component } from 'react';
import './global/css/App.css';

// Components
import Header from './global/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
