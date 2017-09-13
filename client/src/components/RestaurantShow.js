import React, { Component } from 'react';
import axios from 'axios'

class RestaurantShow extends Component {
    constructor(){
        super();
        this.state = {
            fourSquareData: {
                featuredPhoto: '',
                name: '',
                phoneNumber: '',
                address: '',
                url: '',
                rating: '',
                hours: '',
                description: '',
                price: ''
            }
        }
    }

    componentWillMount(){
        this._fetchRestaurantData();
      }
    
      _fetchRestaurantData = async() => {
        const apiKeyId = process.env.REACT_APP_API_KEY_ID;
        const apiKeySecret = process.env.REACT_APP_API_KEY_SECRET;

        try {
            const res = await axios.get(`https://api.foursquare.com/v2/venues/${this.props.match.params.id}/?client_id=${apiKeyId}&client_secret=${apiKeySecret}`, { 
                transformRequest: [(data, headers) => {
                    delete headers['access-token']
                    delete headers['uid']
                    delete headers['client']
                    delete headers['expiry']
                    delete headers['token-type']
                    delete headers.common
                    return data;
                }]
            });
            await this.setState ({ fourSquareData: {
                featuredPhoto: `${res.data.response.venue.bestPhoto.prefix}720x431${res.data.response.venue.bestPhoto.suffix}`,
                name: res.data.response.venue.name,
                phoneNumber: res.data.response.venue.contact.formattedPhone,
                address: res.data.response.venue.location.formattedAddress,
                url: res.data.response.venue.url,
                rating: res.data.response.venue.rating,
                hours: res.data.response.venue.popular.isOpen,
                price: res.data.response.venue.price.currency
                // description: 
            }});
          console.log(this.state.fourSquareData)
          return res.data  
        }
        catch(err) {
          console.log(err)
        } 
      }

    render() {
        const restaurant = this.state.fourSquareData
        return (
            <div>
                <img src={restaurant.featuredPhoto} alt=''/>
                <h1>{restaurant.name}</h1> 
                <p><strong>Price: </strong>{restaurant.price}</p>
                <p>{restaurant.phoneNumber}</p>
                <p>{restaurant.address}</p>
                <p><strong>Rating: </strong>{restaurant.rating}</p>
                <p><strong>Hours: </strong>{restaurant.hours}</p>
                <p>{restaurant.description}</p>
                <a href={restaurant.url} target='blank'>More Info</a>
            </div>
        );
    }
}

export default RestaurantShow;