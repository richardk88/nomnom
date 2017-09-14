import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Nav = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5%;
    background-color: rgb(253,202,0);
    box-shadow: 0px 1px 6px black;
    a {
        text-decoration: none;
        margin: 0 5px;
        &:visited {
            color: white;
        }
    }
`

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
        const res = await axios.get("/auth/validate_token");
        this.setState({
          user: res.data.data,
          loggedIn: res.data.success
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
                        <h1>Nom Nom</h1>
                    </Link>
                    <div>
                        <a href={`/user/${this.state.user.id}`}> {this.state.user.nickname} </a>
                        <a href="" onClick={this._logOut}> Log Out </a>
                    </div>
                </Nav>
                
            )
        }
        return (
        <Nav>
            <Link to="/">
              <h1>Nom Nom</h1>
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