import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {saveAuthTokens} from '../util'

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
       nickname: '',
       redirect: false
   }
 }

 _signUp = async (e) => {
  e.preventDefault();
  const payload = {
    nickname: this.state.nickname,
    email: this.state.email,
    password: this.state.password,
    password_confirmation: this.state.password_confirmation
  }
  const response = await axios.post('/auth', payload)
  saveAuthTokens(response.headers)
  this._createFavorite();
  this.setState({redirect: true})
}

 _signIn = (e) => {
   e.preventDefault();
   this.setState({redirect: true})
 }

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 _createFavorite = async() => {
   try{
    const res = await axios.post('/api/favorites')
    return res.data
   }
   catch(err){
     console.log(err)
   }
 }
 

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <form onSubmit={this._signUp}>
         <div>
           <label htmlFor="username">Username: </label>
           <input onChange={this._handleChange} type="text" name="nickname" value={this.state.nickname} />
         </div>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <div>
           <label htmlFor="password">Confirm Password: </label>
           <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
         </div>
         
         <button>Sign Up</button>
         <button onClick={this._signIn}>Log In</button>
       </form>
     </div>
   );
 }
}

export default SignUp;