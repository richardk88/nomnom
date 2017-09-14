import React, { Component } from 'react';
import axios from 'axios'
import FavoriteDelete from './FavoriteDelete'

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
        const res = await axios.get(`/api/restaurants`)
        this.setState({
            favorites: res.data
        })  
        console.log(res.data)
        return res.data
    }

    render() {
        return (
            <div>
                <h1>Favorite List</h1>
                {this.state.favorites.map((favorite,i) => {
                    return (<div key={i}>
                            <img src={favorite.featuredPhoto} />
                            <FavoriteDelete favorite={favorite.id}/>
                           </div>
                    )
                })}
            </div>
        );
    }
}

export default Favorites;