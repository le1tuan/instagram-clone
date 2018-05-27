import React, { Component } from 'react';
import Header from './Header';
import InstagramContent from './InstagramContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InstagramContent />
      </div>
    );
  }
}

export default App;
