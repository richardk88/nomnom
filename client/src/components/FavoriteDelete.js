import React, { Component } from 'react';
import axios from 'axios'

class FavoriteDelete extends Component {
    _deleteRestaurant = async() => {
        const res = await axios.delete(`/api/restaurants/${this.props.favorite}`)
        // window.location.reload();   
        this.props.fetchFavorites();
        return res.data
    } 
    
    render() {
        return (
            <div>
                <button onClick={this._deleteRestaurant}>Delete</button>
            </div>
        );
    }
}

export default FavoriteDelete;