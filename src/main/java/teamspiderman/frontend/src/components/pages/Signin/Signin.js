import React, {useState} from 'react';
import '../Signin/Signin.css'
import '../../../App.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import bg from '../../../img/bg.jpg'


function Signin(){

  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError]  = useState('')


  const handleChange =(e, token)=>{
    const user ={}
    const emailRegExp = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    // get token from the form,check token in switch statement
    user[token] = e.target.value
    switch(token){
      case 'email':
        setEmail(user.email)
        !emailRegExp.test(user.email) ? setEmailError("Email is invalid!") : setEmailError('')
        break;
      case 'password':
        setPassword(user.password)
        !passwordRegExp.test(user.password) ? setPasswordError("Password is invalid") : setPasswordError('')
        break;
      default:
        break;
    }
  }
    
  const handleSubmit = e =>{
      e.preventDefault();
      
      const user={
        email: email,
        password: password
      }

      //console.log("email: "+user.email+"; pw: "+user.password)
      axios.post(`http://localhost:8080/api/v1/signin`, {
      "email": user.email,
      "password": user.password
    }) // user signin path
      .then(res => {
        
        localStorage.setItem('userInfo', JSON.stringify(res.data))
        var signinInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log(signinInfo)
        var url = '../../PersonHome/PersonHome/'     //+signinInfo['userID']
        window.location.href =url

        
      })
      .catch(err =>{
        console.log(err)
        alert("The email or password is incorrect...")
      })
    }

    return (

      <div className='body'>
        <img src={bg} alt="bg" />
        <div className="si">
            <div className="login">
                <h1 className='h1-signin'>Sign In</h1>
                <h2 className='h2-signin'>New user</h2>
                <Link to='/signup' className="register">Create an account</Link>
                <form className="form-box" onSubmit={handleSubmit}>
                    <div className="form">
                        <label className="address" htmlFor='email'>Emaill address</label>
                        <input type="text" id="address"
                              onChange={(e) => handleChange(e, 'email')} required/>
                        {emailError && <small className='err'>{emailError}</small>}
                    </div>
                    <div className="form">
                        <label className="password" htmlFor='password'>Password</label>
                        <input type="password" id="password"
                              onChange={(e) => handleChange(e, 'password')} required/>
                        {passwordError && <small className='err'>{passwordError}</small>}
                    </div>
                    <button className="btn" type ='submit' name='signin' >Log In</button>
                </form>
            </div>
        </div>
      </div>
      )
}

export default Signin