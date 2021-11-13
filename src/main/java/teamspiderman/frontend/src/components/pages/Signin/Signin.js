import React from 'react';
import '../Signin/Signin.css'
import '../../../App.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Signin extends React.Component{

  handleSubmit = e =>{
    e.preventDefault();
    
    const user={
      email: this.email,
      password: this.password
    }

    axios.post(`http://localhost:8080/api/v1/signin`, user) // user signin path
      .then(res => {
        localStorage.setItem('token', res.user.token)
      })
      .catch(err =>{
        console.log(err)
      })
  }

render(){
  return (

    <div className='body'>
      {/* <img src="bg.jpg" alt="bg" /> */}
      <div className="si">
          <div className="login">
              <h1 className='h1'>Sign In</h1>
              <h2 className='h2'>New user</h2>
              <form className="form-box" onSubmit={this.handleSubmit}>
                  <div className="form">
                      <label className="address">Emaill address</label>
                      <input type="text" id="address"
                      onChange={(e)=>this.email = e.target.value}
                      />
                  </div>
                  <div className="form">
                      <label className="password">Password</label>
                      <input type="password" id="password"
                      onChange={(e)=> this.password = e.target.value}
                      />
                  </div>
                  <button id="btn" type ='submit' name='signin' >Log In</button>
                  <Link to='/signup' id="register">Create an account</Link>
              </form>
          </div>
      </div>
    </div>
      )
    }
} 
