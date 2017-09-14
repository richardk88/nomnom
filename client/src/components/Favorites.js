import React, { Component } from 'react';
import axios from 'axios'

class Favorites extends Component {
    constructor(){
        super();
        this.state = {
            favorites: []
        }
    }

    componentWillMount() {
        this._fetchFavorites();
    }

    _fetchFavorites = async() => {
        const res = axios.get(`/api/favorites`)
        this.setState({
            favorites: res.data
        })
        return res.data
    }

    _deleteRestaurant = (e) => {
        e.preventDefault();
        // const id = this.
    }

    render() {
        return (
            <div>
                <h1>Favorite List</h1>

            </div>
        );
    }
}

export default Favorites;