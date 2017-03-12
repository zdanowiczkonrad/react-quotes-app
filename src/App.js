import React, { Component } from 'react';
import './App.css';
import {quotes} from '../../../quotes.json';
import { Quote } from './quote';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { quotes, likedQuotes: [] };
  }

  onQuoteLiked = quote => {
    console.log('quoteLiked', quote);
    if (this.state.likedQuotes.indexOf(quote) < 0) {
      const withQuote = this.state.likedQuotes.concat(quote);
      this.setState({ likedQuotes: withQuote });
    } else {
      const withoutQuote = this.state.likedQuotes.filter(one => one !== quote);
      this.setState({likedQuotes: withoutQuote});
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Quotes React App</h1>
       {this.state.quotes.map(quote => <Quote
        quote={quote}
        onQuoteLiked={this.onQuoteLiked}
        likedQuotes={this.state.likedQuotes}
       />)}
      </div>
    );
  }
}


export default App;
