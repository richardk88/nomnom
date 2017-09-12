import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/signUp'>Sign Up</Link>
            </div>
        );
    }
}

export default NavBar;