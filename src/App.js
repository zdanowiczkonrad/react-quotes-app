import React, { Component } from 'react';
import './App.css';
import quotes from '../../../quotes.json';
import images from './images/images';

import './quotes.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quotes React App</h1>
        <div className="quote">
            <img className="avatar" src={images.Rick}/>
            <div className="content">
              <span className="author">Rick</span>
              <span className="text">If I let you make me nervous, then we can't get schwifty</span>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
