import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                        <Link to={`/restaurants/${favorite.venue_id}`}>                           
                            <img src={favorite.featuredPhoto} />
                            <h3>{favorite.name}</h3>
                        </Link>
                             
                            <FavoriteDelete favorite={favorite.id} fetchFavorites={this._fetchFavorites}/>
                        
                           </div>
                    )
                })}
            </div>
        );
    }
}

export default Favorites;