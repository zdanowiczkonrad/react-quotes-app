import React, { Component } from 'react';
import './App.css';
import {quotes} from '../../../quotes.json';
import { Quote } from './quote';

class App extends Component {

  render() {
 

    return (
      <div className="App">
        <h1>Quotes React App</h1>
       {quotes.map(Quote)}
      </div>
    );
  }
}


export default App;
