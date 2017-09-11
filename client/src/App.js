import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      yelpData: {},
      city: 'atlanta',
      foodType: 'pizza'
    }
  }

  componentWillMount(){
    this._fetchRestaurantData();
  }

  _fetchRestaurantData = async(e) => {
    // e.preventDefault();
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const config = { headers: { 'Authorization': 'Bearer v7wDk7-ci5aJ-ppPztmzTz4gtCLuVc5CaPceDQTEnf2HoxPPP6yTkDBLKANVcGLNphfvIQq_e-pc-XRSSCf-IasS0TLdCaWMscI_t2SlkJxSp2ovaVuYso0RRwq2WXYx', 'Content-Type': 'application/jsonp'} };
    try {
      const res = await axios.get(`https://api.foursquare.com/v2/venues/explore/?near=${this.state.city}&section=food&query=${this.state.foodType}&venuePhotos=1&client_id=HFGFZ2AIATCGL5KZVF5QX5Q1MNZVEFZ3YONA32U0SCEC4TC5&client_secret=QJYLDDYWIY3QBCBXOVPPCHNYCTMPHN41GFWREGJFTKA12W0D&v=20170913`);
      await this.setState ({ yelpData: res.data.response.groups[0].items });
      console.log(res.data.response.groups[0].items)
      return res.data.response.groups[0].items; 
    }
    catch(err) {
      console.log(err)
    } 
  }

  _handleChange = (e) => {
    const newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <h1>NomNom</h1>
        <form onSubmit={this._fetchRestaurantData}>
         <div>
           <label htmlFor="city">Which city are you in?</label>
           <input onChange={this._handleChange} type="text" name="city" value={this.state.city} />
           <br />
           <label htmlFor="foodType">What to eat?</label>
           <input onChange={this._handleChange} type="text" name="foodType" value={this.state.foodType} />
         </div>
         <button>Searching</button>
       </form>
      </div>
    );
  }
}

export default App;
