import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import FeedbackPageOne from '../FeedbackPageOne/FeedbackPageOne.js';
import FeedbackPageTwo from '../FeedbackPageTwo/FeedbackPageTwo.js';
import FeedbackPageThree from '../FeedbackPageThree/FeedbackPageThree.js';
import FeedbackPageFour from '../FeedbackPageFour/FeedbackPageFour.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />
          <Route exact path="/" component={FeedbackPageOne} />
          <Route path="/2" component={FeedbackPageTwo} />
          <Route path="/3" component={FeedbackPageThree} />
          <Route path="/4" component={FeedbackPageFour} />
        </div>
      </Router>
    );
  }
}

export default App;
