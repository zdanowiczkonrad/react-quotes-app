import React, { Component } from 'react';
import images from './images/images';
import './quotes.css';

export const Quote = ({quote, onQuoteLiked, likedQuotes}) =>
  <div className="quote">
      <img className="avatar" src={images[quote.author]}/>
      <div className="content">
        <span className="author">{quote.author}
          <button
            onClick={() => onQuoteLiked(quote)}
            className={`like` + (likedQuotes.indexOf(quote) > -1 ? ' active' : '') }>
              Like ❤️️️️
          </button>
        </span>
        <span className="text">{quote.text}</span>
    </div>
  </div>;
