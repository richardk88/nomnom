import React, { Component } from 'react';

class RestaurantList extends Component {
    render() {

        const restaurantList = this.props.fourSquareData.map((restaurant, i) => {
            const restaurantImg = `${restaurant.venue.featuredPhotos.items[0].prefix}712x512${restaurant.venue.featuredPhotos.items[0].suffix}`
            return (
                <div key={i}>
                    <img src={restaurantImg} alt={restaurant.venue.name}/>
                    <h1>{restaurant.venue.name}</h1>
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