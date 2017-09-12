import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import HomePage from './components/HomePage'
import RestaurantList from './components/RestaurantList'


class App extends Component {

  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path='/' component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
