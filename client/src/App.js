import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import RestaurantShow from './components/RestaurantShow'
import {setAxiosDefaults} from './util'

class App extends Component {

  constructor () {
    super();
    this.state = {
      fourSquareData: [],
      city: '',
      foodType: ''
    }
  }

  componentWillMount(){
    // this._setDefaultRestaurantData();
  }

  _setDefaultRestaurantData = async(e) => {
    e.preventDefault();
    const apiKeyId = process.env.REACT_APP_API_KEY_ID;
    const apiKeySecret = process.env.REACT_APP_API_KEY_SECRET;
    
    try {
      const res = await axios.get(`https://api.foursquare.com/v2/venues/explore/?near=${this.state.city}&query=${this.state.foodType}&venuePhotos=1&client_id=${apiKeyId}&client_secret=${apiKeySecret}`);
      await this.setState ({ fourSquareData: res.data.response.groups[0].items});
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
      <Router>
        <div className="App">
          <NavBar />
          
          <Route exact path = '/'  render={routeProps => 
            <HomePage {...routeProps} restaurants= {this.state.fourSquareData} setDefaultRestaurantData={this._setDefaultRestaurantData} handleChange={this._handleChange}/>}
          />
          <Route exact path='/restaurants/:id' component={RestaurantShow} />
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/signIn' component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
