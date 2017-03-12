import React, { Component } from 'react';
import './App.css';
import {quotes} from '../../../quotes.json';
import { Quote, NewQuoteForm } from './quote';

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

  clearLikes = () => {
    this.setState({likedQuotes: []});
  };

  render() {
    return (
      <div className="App">
        <h1>Quotes React App</h1>
        <div className="actions">
          <button onClick={this.clearLikes}>Clear likes</button>
          <NewQuoteForm/>
        </div>
    
       {this.state.quotes.map(quote => <Quote
        key={quote.id}
        quote={quote}
        onQuoteLiked={this.onQuoteLiked}
        likedQuotes={this.state.likedQuotes}
       />)}
       
      </div>
    );
  }
}


export default App;
