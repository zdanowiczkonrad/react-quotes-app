import React, { Component } from 'react';
import './App.css';
import './quotes.css';
import images from './images/images';

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
