import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
        margin: 5px;
    }
`

class RestaurantList extends Component {
   state = {
            error: ''
        }
    
    render() {
        const restaurantList = this.props.restaurants.map((restaurant, i) => {
            const restaurantImg = `${restaurant.venue.featuredPhotos.items[0].prefix}412x312${restaurant.venue.featuredPhotos.items[0].suffix}`
            return (
                <div key={i} className='mapContainer'>
                    <Link to={`/restaurants/${restaurant.venue.id}`}>
                        <img src={restaurantImg} alt={restaurant.venue.name} className='restaurantImg'/>
                        <h2 className='restaurantNameContainer'>{restaurant.venue.name}</h2>
                    </Link>
                </div>
            )
        });

        return (
            <Container>
                {restaurantList}
            </Container>
        );
    }
}

export default RestaurantList;
