import React, { Component } from 'react';
import images from './images/images';
import './quotes.css';

export const Quote = ({quote, onQuoteLiked, likedQuotes}) => {
  const isLiked = likedQuotes.indexOf(quote) > -1;
  return  <div className="quote">
      <img className="avatar" src={images[quote.author]}/>
      <div className="content">
        <span className="author">{quote.author}
          <button
            onClick={() => onQuoteLiked(quote)}
            className={`like` + (isLiked ? ' active' : '') }>
              {isLiked && '❤️️'} Like
          </button>
        </span>
        <span className="text">{quote.text}</span>
    </div>
  </div>;
}

export class NewQuoteForm extends React.Component {
  authorInput;
  quoteInput;
  avatarInput;

  onQuoteCreate = () => {
    const newQuote = {
      author: this.authorInput.value,
      text:  this.quoteInput.value,
      avatar:  this.avatarInput.value
    }

    this.props.onQuoteAdded(newQuote);
  }

  render() {
    return <div className="new-quote"> 
        <input type="text" ref={el => this.authorInput = el} placeholder="author"/>
        <input type="text" ref={el => this.quoteInput = el} placeholder="quote" />
        <input type="text" ref={el => this.avatarInput = el} placeholder="avatar image url..."/>
        <button onClick={this.onQuoteCreate}>Add!</button>
      </div>;
      }
}