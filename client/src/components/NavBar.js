import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FaStar from 'react-icons/lib/fa/star'

const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5%;
    background: linear-gradient(white, rgba(255,255,255,.75), rgba(0,0,0,0));
    a {
        text-decoration: none;
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
        // window.location.reload();
      };
    
        render(){
        if (this.state.loggedIn) {
            return (
                <Nav>
                    <Link to="/">
                        <div className='titleContainer'><img src='https://i.imgur.com/AAAFNhJ.png' className='navbarTitle'/></div>
                    </Link>
                    <div>
                    <span className='navRight'><Link to={`/user/${this.state.user.id}/favorites` } className='navRightHover'><FaStar />FAVORITES</Link></span>
                        <span className='navRight'><a href={`/user/${this.state.user.id}`} className='navRightHover underline'> {this.state.user.nickname.toUpperCase()} </a></span>
                        <span className='navRight'><a href="/signIn" onClick={this._logOut} className='navRightLogOut'> LOG OUT </a></span>
                    </div>
                </Nav>
                
            )
        }
        return (
        <Nav>
            <Link to="/">
                <div className='titleContainer'><img src='https://i.imgur.com/AAAFNhJ.png' className='navbarTitle'/></div>
            </Link>
            <div className='loggedOutContainer'>
                <span className='navRight'>
                    <Link to="/signup" className='navRightHover'>SIGN UP</Link>
                </span>
                <span className='navRight'>
                    <Link to="/signin" className='navRightHover'>SIGN IN</Link>
                </span>
            </div>
        </Nav>
        );
    }
}

export default NavBar;