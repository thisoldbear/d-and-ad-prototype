import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

import './App.css';
import './ProjectCard.css';
import './Boxout.css';
import './Cta.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
