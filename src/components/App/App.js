import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.js';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Header />
          {/* <Route exact path="/" component={SelectPage} />
          <Route path="/customer" component={CustomerPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/admin" component={AdminPage} /> */}
        </div>
      </Router>
    );
  }
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Feedback!</h1>
//           <h4><i>Don't forget it!</i></h4>
//         </header>
//         <br/>
//       </div>
//     );
//   }
// }

export default App;
