import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import RestaurantList from './RestaurantList'

class HomePage extends Component {

    constructor () {
        super();
        this.state = {
          fourSquareData: [],
          city: '',
          foodType: ''
        }
      }
    
      componentWillMount(){
        // this._fetchRestaurantData();
      }
    
      _fetchRestaurantData = async(e) => {
        e.preventDefault();
        const apiKeyId = process.env.REACT_APP_API_KEY_ID;
        const apiKeySecret = process.env.REACT_APP_API_KEY_SECRET;
        
        try {
          const res = await axios.get(`https://api.foursquare.com/v2/venues/explore/?near=${this.state.city}&query=${this.state.foodType}&venuePhotos=1&client_id=${apiKeyId}&client_secret=${apiKeySecret}`);
          await this.setState ({ fourSquareData: res.data.response.groups[0].items});
          console.log(res.data.response.groups[0].items)
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
            <div>
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

                <RestaurantList />     
            </div>
        );
    }
}

export default HomePage;