import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      restaurants: []
    }
  }

  componentWillMount(){
    this._fetchRestaurantData();
  }

  _fetchRestaurantData = () => {
    var config = {
      headers: { 'Accept': 'application/json', 'user-key': '93f11aa4a12b9dd15322d3ee4c5163e9'}
    };
    axios.get('https://developers.zomato.com/api/v2.1/search', config).then(res => {
    console.log(res.data)
  });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
