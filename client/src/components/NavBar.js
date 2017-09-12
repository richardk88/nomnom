import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
          user: {},
          loggedIn: false
        };
      }
    
      componentWillMount() {
        this._isLoggedIn();
      }
      componentWillReceiveProps() {
        this._isLoggedIn();
      }
    
      _isLoggedIn = async () => {
        const response = await axios.get("/auth/validate_token");
        this.setState({
          user: response.data.data,
          loggedIn: response.data.success
        });
      };
      
      _logOut = async () => {
        console.log("CLICK");
        const response = await axios.delete("/auth/sign_out");
        //Forces refresh of browser
        window.location.reload();
      };
    
        render(){
        if (this.state.loggedIn) {
            return (
                <Nav>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    <div>
                        <span>Signed In As: {this.state.user.email}</span>
                        <Link to='/new'>Add a new creature</Link>
                        <a href="#" onClick={this._logOut}> Log Out </a>
                    </div>
                </Nav>
                
            )
        }
        return (
        <Nav>
            <Link to="/">
              <h1>Home</h1>
            </Link>
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </div>
        </Nav>
        );
    }
}

export default NavBar;