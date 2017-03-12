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

export const NewQuoteForm = () => {
  return <div className="new-quote"> 
    <input type="text" placeholder="author"/>
    <input type="text" placeholder="quote" />
    <input type="text" placeholder="avatar image source..."/>
    <button>Add!</button>
  </div>;
}