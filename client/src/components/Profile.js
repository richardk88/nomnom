import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount(){
        this._fetchUser();
    }

    _fetchUser = async() => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/artists/${id}`)
        this.setState({
          user: res.data.user
        })
    }
    render() {
        return (
            <div>
                <h1>Profile Page</h1>


                <div>
                    <Link to={`/user/${this.state.user_id}`}><button>Edit Profile</button></Link>
                    <Link to={`/`}><button>Back</button></Link>
                </div>
            </div>
        );
    }
}

export default Profile;