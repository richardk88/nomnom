import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import FaPlusSquareO from 'react-icons/lib/fa/plus-square-o'
import {FaArrowLeft} from 'react-icons/lib/fa'

class RestaurantShow extends Component {
    constructor(){
        super();
        this.state = {
            user: {},
            fourSquareData: {
                featuredPhoto: '',
                name: '',
                phoneNumber: '',
                address: '',
                url: '',
                rating: '',
                price: '',
                menu: '',
                venue_id: ''
            },
            redirect: false
        }
    }

    componentWillMount(){
        this._fetchUser();
        this._fetchRestaurantData();
      }

      _fetchUser = async() => {
          const res = await axios.get(`/api/users`)
          console.log(res.data)
          this.setState({
              user:res.data
          })
      }
    
      _fetchRestaurantData = async() => {
        const apiKeyId = process.env.REACT_APP_API_KEY_ID;
        const apiKeySecret = process.env.REACT_APP_API_KEY_SECRET;

        try {
            const res = await axios.get(`https://api.foursquare.com/v2/venues/${this.props.match.params.id}/?client_id=${apiKeyId}&client_secret=${apiKeySecret}&v=20170913`, { 
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
            // let hours = ""
            // if (res.data.response.venue.popular.status){
            //     hours = res.data.response.venue.popular.status;
            // } else if (res.data.response.venue.hours.status){
            //     hours = res.data.response.venue.hours.status
            // } 

            await this.setState ({ fourSquareData: {
                featuredPhoto: `${res.data.response.venue.bestPhoto.prefix}410x171${res.data.response.venue.bestPhoto.suffix}`,
                name: res.data.response.venue.name,
                phoneNumber: res.data.response.venue.contact.formattedPhone,
                address: res.data.response.venue.location.formattedAddress,
                url: res.data.response.venue.url,
                rating: res.data.response.venue.rating,
                // hours: res.data.response.venue.hours.status,
                price: res.data.response.venue.attributes.groups[0].summary,
                // menu: res.data.response.venue.menu.url,
                venue_id: res.data.response.venue.id 
            }});
          return res.data  
        }
        catch(err) {
          console.log(err)
        } 
      }

      _addRestaurantToFavorites = async(e) => {
        e.preventDefault();
        const payload = {
            featuredPhoto:this.state.fourSquareData.featuredPhoto,
            venue_id: this.state.fourSquareData.venue_id,
            name: this.state.fourSquareData.name
        }
        try {
            const res = await axios.post(`/api/restaurants`, payload)
            await this.setState({redirect: true})
            return res.data
        }
        catch(err){
            console.log(err)
        }
      }

    render() {
        const restaurant = this.state.fourSquareData
        return (
            <div className='restaurantContainer'>
                <img src={restaurant.featuredPhoto} className='container' responsive/>
                <div>
                    <h1>{restaurant.name}</h1> 
                    <p><strong>Price: </strong><span className='price'>{restaurant.price}</span></p>
                    <p>{restaurant.phoneNumber}</p>
                    <p>{restaurant.address}</p>
                    <p><strong>Rating: </strong>{restaurant.rating}/10</p>
                    {/* <p><strong>Hours: </strong>{restaurant.hours}</p> */}
                    {/* <a href={restaurant.menu} target='blank'>Menu </a> */}
                    <a href={restaurant.url} target='blank'> See More..</a>
                </div>
                
                <div className='showPageLinks'>
                    <Link to={`/`}><FaArrowLeft size={36} className='back'/></Link>
                    <Link to={`/user/${this.state.user.id}/favorites`} onClick={this._addRestaurantToFavorites}><FaPlusSquareO size={36} className='addBtn'/></Link>
                </div>
            </div>
        );
    }
}

export default RestaurantShow;