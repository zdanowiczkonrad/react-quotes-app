import React, { Component } from 'react';
import images from './images/images';
import './quotes.css';

export const Quote = quote =>
  <div className="quote">
      <img className="avatar" src={images[quote.author]}/>
      <div className="content">
        <span className="author">{quote.author}</span>
        <span className="text">{quote.text}</span>
    </div>
  </div>;
