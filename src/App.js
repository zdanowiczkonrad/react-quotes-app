import React, { Component } from 'react';
import './App.css';
import {quotes} from '../../../quotes.json';
import { Quote } from './quote';

class App extends Component {

  onQuoteLiked = (quote) => {
    console.log('quoteLiked', quote);
  };

  render() {
    return (
      <div className="App">
        <h1>Quotes React App</h1>
       {quotes.map(quote => <Quote
        quote={quote}
        onQuoteLiked={this.onQuoteLiked}
       />)}
      </div>
    );
  }
}


export default App;
