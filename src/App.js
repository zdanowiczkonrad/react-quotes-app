import React, { Component } from 'react';
import './App.css';
import './quotes.css';
import images from './images/images';

class App extends Component {


  render() {
    const rickQuote = {
      author: 'Rick',
      text: 'If I let you make me nervous, then we can\'t get schwifty'
    };

    return (
      <div className="App">
        <h1>Quotes React App</h1>
        {renderQuote(rickQuote)}
      </div>
    );
  }
}

const renderQuote = quote => <div className="quote">
            <img className="avatar" src={images[quote.author]}/>
            <div className="content">
              <span className="author">{quote.author}</span>
              <span className="text">{quote.text}</span>
          </div>
        </div>;

export default App;
