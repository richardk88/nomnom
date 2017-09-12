import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import RestaurantShow from './components/RestaurantShow'


class App extends Component {

  
  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/restaurants/:id' component={RestaurantShow} />
        </div>
      </Router>
    );
  }
}

export default App;
