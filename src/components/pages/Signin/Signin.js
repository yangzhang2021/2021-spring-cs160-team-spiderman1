import React, {useState} from 'react';
import '../Signin/Signin.css'
import '../../../App.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import bg from '../../../img/bg.jpg'


export default class Signin extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    
  handleSubmit = e =>{
      e.preventDefault();
      console.log(this.state)

      axios.post(`http://localhost:8080/api/v1/signin`, {
        "email": this.state.email,
        "password": this.state.password
      }) // user signin path
        .then(res => {
          localStorage.setItem('token', res.user.token)
        })
        .catch(err =>{
          console.log(err)
        })
    }
  render(){

  const {email, password} = this.state
  return (

  <div className='body'>
    <img src={bg} alt="bg" />
    <div className="si">
        <div className="login">
            <h1 className='h1-signin'>Sign In</h1>
            <h2 className='h2-signin'>New user</h2>
            <Link to='/signup' className="register">Create an account</Link>
            <form className="form-box" onSubmit={this.handleSubmit}>
                <div className="form">
                    <label className="address" htmlFor='email'>Emaill address</label>
                    <input type="text" id="address" name='email'
                    value ={email}
                    onChange={this.handleChange} required/>
                </div>
                <div className="form">
                    <label className="password" htmlFor='password'>Password</label>
                    <input type="password" id="password" name ='password'
                    value ={password}
                    onChange={this.handleChange} required/>
                </div>
                <button className="btn" type ='submit' name='signin' >Log In</button>
            </form>
        </div>
    </div>
  </div>
    )
  }
}