import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';

class ProfileEdit extends Component {
    constructor(){
        super();
        this.state = {
            user: {
                nickname: ''
            },
            redirect: false
        }
    }

    componentWillMount () {
        this._fetchProfileData();
    }

    _fetchProfileData = async() => {
        const res = await axios.get(`/api/users`)
        this.setState({ user: {
            nickname: res.data.nickname
        }})
        console.log(res.data)
        return res.data
    }

    _profileEdit = async(e) => {
        e.preventDefault();
        const payload = this.state.user
        try {
            const res = await axios.patch('/auth', payload)
            await this.setState({redirect: true})
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }

    _handleChange =(e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const user = {...this.state.user}
        user[attributeName]=attributeValue;
        this.setState({user});
    }

    _deleteProfile = async() => {
        try {
            const res = await axios.delete(`/auth`)
            this._logOut();
            return res.data
        }
        catch(err){
            console.log(err)
        }
    }

    _logOut = async () => {
        console.log("CLICK");
        const response = await axios.delete("/auth/sign_out");
        //Forces refresh of browser
        // window.location.reload();
      };

    render() {
        if(this.state.redirect){
            return <Redirect to={`/user/${this.state.user.id}`}/>
        }
        return (
            <div>
                <h1>Edit Profile</h1>

                <form onSubmit={this._profileEdit}>
                <div>
                  <label htmlFor="nickname">Username: </label>
                  <input onChange={this._handleChange} type="text" name="nickname" placeholder={this.state.user.nickname} />
                </div>
                
                <button>Submit</button>
              </form>
              <Link to={`/profile/${this.state.user.id}`}><button>Back</button></Link>
              <a href='/'><button onClick={this._deleteProfile}>DELETE Profile</button></a>
            </div>
        );
    }
}

export default ProfileEdit;