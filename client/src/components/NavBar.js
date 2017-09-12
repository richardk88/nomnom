import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/signUp'>Sign Up</Link>
                <Link to='/signIn'>Sign In</Link>
            </div>
        );
    }
}

export default NavBar;