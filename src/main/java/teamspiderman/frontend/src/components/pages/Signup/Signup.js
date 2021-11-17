import React from 'react';
import {Link} from "react-router-dom"
import './Signup.css'
import '../../../App.css'
import axios from 'axios';


export default class Signup extends React.Component{

  handleSubmit=(e)=>{
    e.preventDefault()


    // const user={
    //   "firstName": this.fname,
    //   "lastName": this.lname,  
    //   "email": this.email,
    //   "password": this.password
    // }

    //console.log(user)
    axios.post(`http://localhost:8080/api/v1/registration`, {
      "firstName": this.fname,
      "lastName":  this.lname,
      "email": this.email,
      "password": this.password
    }) // user sign up path
      .then(res => {
        console.log(res);
        
      })
      .then(()=>{
        console.log('success');
        
        var confirm_win = window.confirm("click ok to your email to confirm!");
        if (confirm_win === true){
          window.location.href ='http://localhost:1080/';
          //window.location.href ='../../PersonHome/PersonHome.js'
        }
        else{
          alert("please confirm your registration in 15 mins to complete the registration")
        }
        //window.location.href ='../../PersonHome/PersonHome.js'
      })
      .catch(err =>{
        console.log(err)
      })
  }
  
  render(){
    return (
      <div>
      {/* <img src="bg.jpg" alt="bg" /> */}
        <div className="si">
            <div className="signUp">
              <h1 className='h1'>Create an Account</h1>
              <h2 className='h2'>Already have an account</h2>
              <form className="form-box" onSubmit={this.handleSubmit}>
                  <div className="form">
                      <label className="fname">First Name</label>
                      <input type="text" id="fname" 
                      onChange={(e)=>this.fname = e.target.value} />
                  </div>
                  <div className="form">
                      <label className="lname">Last Name</label>
                      <input type="text" id="lname" 
                      onChange={(e)=>this.lname =e.target.value} />
                  </div>
                  <div className="form">
                      <label className="address">Emaill address</label>
                      <input type="text" id="address" 
                      onChange={(e)=>this.email = e.target.value} />
                  </div>
                  <div className="form">
                      <label className="password">Password</label>
                      <input type="password" id="password" 
                      onChange={(e)=>this.password =e.target.value}/>
                  </div>
                  <div className="form">
                      <label className="check">Check Password</label>
                      <input type="password" id="check" 
                      onChange={(e)=>this.check =e.target.value}/>
                  </div>
                          <button id="btn-signup" type='submit' name='signup'>Create account</button>
                          <Link to='/signin' id="sign">Sign In</Link>
                </form>
              </div>
            </div>
          </div>
        )
    }
}