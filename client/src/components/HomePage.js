import React, { Component } from 'react';
import RestaurantList from './RestaurantList'
import FaSearch from 'react-icons/lib/fa/search'

class HomePage extends Component {

    render() {
        return (
            <div>
                <img src='https://i.imgur.com/LH2ZJxG.png' className='headerImg'/>
                <form onSubmit={this.props.setDefaultRestaurantData}>
                    <div className='searchContainer'>
                        <span>
                            <label htmlFor="foodType"><span className='findClass'>Find</span></label>
                            <input onChange={this.props.handleChange} type="text" name="foodType" value={this.props.foodType} placeholder='pizza, sushi, etc..'/>
                        </span>
                        <span className='cityContainer'>
                            <label htmlFor="city">Near</label>
                            <input onChange={this.props.handleChange} type="text" name="city" value={this.props.city} placeholder='Atlanta'/>
                        </span>
                        <button className='searchBtn'><FaSearch size={20}/></button>
                    </div>
                </form>

                <RestaurantList restaurants={this.props.restaurants} />     
            </div>
        );
    }
}

export default HomePage;