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
        const res = await axios.get(`/api/users`)
        console.log(res.data)
        this.setState({
          user: res.data
        })
    }
    render() {
        const user = this.state.user
        return (
            <div>
                <h1>Profile Page</h1>
                <p><strong>Username: </strong>{user.nickname}</p>
                <p><strong>E-mail: </strong>{user.email}</p>
                <p><strong>Created: </strong>{user.created_at}</p>
                <p><strong>Last Updated: </strong>{user.updated_at}</p>

                <Link to={`/user/${user.id}/favorites`}><button>View Favorites</button></Link>

                <br />
                <br />

                <div>
                    <Link to={`/user/${user.id}/edit`}><button>Edit Profile</button></Link>
                    <Link to={`/`}><button>Back</button></Link>
                </div>
            </div>
        );
    }
}

export default Profile;