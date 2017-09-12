import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RestaurantList extends Component {
    render() {

        const restaurantList = this.props.fourSquareData.map((restaurant, i) => {
            const restaurantImg = `${restaurant.venue.featuredPhotos.items[0].prefix}712x512${restaurant.venue.featuredPhotos.items[0].suffix}`
            return (
                <div key={i}>
                    <Link to={`/restaurants/${restaurant.id}`}>
                        <img src={restaurantImg} alt={restaurant.venue.name}/>
                        <h1>{restaurant.venue.name}</h1>
                    </Link>
                </div>
            )
        });

        return (
            <div>
                {restaurantList}
            </div>
        );
    }
}

export default RestaurantList;