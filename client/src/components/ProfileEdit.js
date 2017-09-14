import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';

class ProfileEdit extends Component {
    constructor(){
        super();
        this.state = {
            profile: {},
            redirect: false
        }
    }

    componentWillMount () {
        const profileId = this.props.match.params.id;
        this._fetchProfile(profileId)
    }

    _fetchProfile = async(profileId) => {
        try {
            const res = await axios.get(`/api/favorites/${profileId}`)
            this.setState({ profile: res.data[0] })
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }

    _profileEdit = async(e) => {
        e.preventDefault();
        
    }

    _handleChange = (e) => {
        const newState = {...this.state.profile}
        newState[e.target.name] = e.target.value;
        this.setState({profile: newState})
    }

    render() {
        if(this.state.redirect){
            const id = this.props.match.params.id;
            return <Redirect to={`/profile/${id}`}/>
        }
        return (
            <div>
                <h1>Edit Profile</h1>
                <form>
                    <div>
                        <label htmlFor="name">Email: </label>
                        <input onChange={this._handleChange} type='text' name='email' value={this.state.profile.email} />
                    </div>
                    <div>
                        <label htmlFor="name">Password: </label>
                        <input onChange={this._handleChange} type='text' name='password' value={this.state.profile.password} />
                    </div>
                    <div>
                        <label htmlFor="name">Password Confirmation: </label>
                        <input onChange={this._handleChange} type='text' name='password_confirmation' value={this.state.profile.password_confirmation} />
                    </div>
                    <button onClick={this._profileEdit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ProfileEdit;