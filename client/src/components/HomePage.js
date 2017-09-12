import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import RestaurantList from './RestaurantList'

class HomePage extends Component {

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
                    <button>EAT</button>
                </form>

                <RestaurantList fourSquareData={this.state.fourSquareData}/>     
            </div>
        );
    }
}

export default HomePage;