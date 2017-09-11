import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      fourSquareData: {},
      city: 'atlanta',
      foodType: 'pizza',
      imgUrl: ''
    }
  }

  componentWillMount(){
    this._fetchRestaurantData();
  }

  _fetchRestaurantData = async(e) => {
    // e.preventDefault();
    const apiKeyId = process.env.REACT_APP_API_KEY_ID;
    const apiKeySecret = process.env.REACT_APP_API_KEY_SECRET;
    
    try {
      const res = await axios.get(`https://api.foursquare.com/v2/venues/explore/?near=${this.state.city}&section=food&query=${this.state.foodType}&venuePhotos=1&client_id=${apiKeyId}&client_secret=${apiKeySecret}`);
      await this.setState ({ fourSquareData: res.data.response.groups[0].items, });
      await this.setState({ imgUrl:`${this.state.fourSquareData[0].venue.featuredPhotos.items[0].prefix}712x712${this.state.fourSquareData[0].venue.featuredPhotos.items[0].suffix}`})
      await console.log(this.state.imgUrl)
      return res.data.response.groups[0].items; 
    }
    catch(err) {
      console.log(err)
    } 
  }

  _handleChange = (e) => {
    const newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    
    return (
      <div className="App">
        <h1>NomNom</h1>
        <form onSubmit={this._fetchRestaurantData}>
          <div>
            <label htmlFor="city">Which city are you in?</label>
            <input onChange={this._handleChange} type="text" name="city" value={this.state.city} />
            <br />
            <label htmlFor="foodType">What to eat?</label>
            <input onChange={this._handleChange} type="text" name="foodType" value={this.state.foodType} />
          </div>
          <button>Searching</button>
        </form>

        <img src={this.state.imgUrl} />

      </div>
    );
  }
}

export default App;
