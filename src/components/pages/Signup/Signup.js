import React, { useState} from 'react';
import {Link} from "react-router-dom"
import './Signup.css'
import '../../../App.css'
import axios from 'axios';
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import bg from '../../../img/bg.jpg'

function Signup (){

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')
  const [check, setCheck] = useState('')

  const [fnameError, setFnameError] = useState('')
  const [lnameError, setLnameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError]  = useState('')
  const [checkError, setCheckError] = useState('')
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleChange =(e, token)=>{
    const user ={}
    const emailRegExp = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/)
    // get token from the form,check token in switch statement
    user[token] = e.target.value
    switch(token){
      case 'fname':
        setFname(user.fname)
        user.fname.length <1 ? setFnameError("First name is required!") : setFnameError('')
        break;
      case 'lname':
        setLname(user.lname)
        user.lname.length <1 ? setLnameError("Last name is required!") : setLnameError('')
        break;
      case 'email':
        setEmail(user.email)
        !emailRegExp.test(user.email) ? setEmailError("Email is invalid!") : setEmailError('')
        break;
      case 'password':
        setPassword(user.password)
        !passwordRegExp.test(user.password) ? setPasswordError("Password is invalid!") : setPasswordError('')
        break;
      case 'check':
        setCheck(user.check)
        user.check !== password ? setCheckError("Password do not match!") : setCheckError('')
        break;
      default:
        break;
    }
    //console.log(fnameError, lnameError, emailError, passwordError, checkError)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    //console.log(fname, lname, email, password, check)
  
    if (fname && lname && email && password && check && !fnameError && !lnameError && !emailError && !passwordError && !checkError){
      console.log(fname, lname, email, password, check)
      axios.post(`http://localhost:8080/api/v1/registration`,
      {
      "firstName":fname,
      "lastName": lname,
      "email": email,
      "password": password
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
        // clear values
        e.target.reset()
      })
      .catch(err =>{
        console.log(err)
      })
    }
  }

    return (
      <div className='body'>
      <img src={bg} alt="bg" />
        <div className="si">
            <div className="signUp">
              <h1 className='h1-signup'>Create an Account</h1>
              <h2 className='h2-signup'>Already have an account</h2>
              <Link to='/signin' className="sign">Sign In</Link>
              <form className="form-box" onSubmit={handleSubmit}> 
                  <div className="form">
                      <label className="fname">First Name</label>
                      <input type="text" id="fname" name='fname'
                      onChange={(e) => handleChange(e, 'fname')} required/>
                      {fnameError && <small className='err'>{fnameError}</small>}
                  </div>
                  <div className="form">
                      <label className="lname">Last Name</label>
                      <input type="text" id="lname" name='lname'
                      onChange={(e) => handleChange(e, 'lname')} required/>
                       {lnameError && <small className='err'>{lnameError}</small>}
                  </div>
                  <div className="form">
                      <label className="email">Email address</label>
                      <input type="text" id="email" name='email'
                      onChange={(e) => handleChange(e, 'email')} required/>
                       {emailError && <small className='err'>{emailError}</small>}
                  </div>
                  <div className="form">
                      <label className="password">Password</label>
                      <input type="password" id="password" name='password'
                      onChange={(e) => handleChange(e, 'password')} required/>
                       {passwordError && <small className='err'>{passwordError}</small>}
                  </div>
                  <div className="form">
                      <label className="check">Check Password</label>
                      <input type="password" id="check" name='check'
                      onChange={(e) => handleChange(e, 'check')} required/>
                       {checkError && <small className='err'>{checkError}</small>}
                  </div>
                  <button className= 'password-info' onClick={handleClick}><AiOutlineExclamationCircle /></button>
                  <div className={click ? 'message active': 'message'}>
                    <div className='password-message'>
                      <button className='close-button' onClick={closeMobileMenu}>&times;</button>
                      <p>password should be at least 8 characters</p> 
                      <p>at least one lower case letter</p> 
                      <p>at least one upper case letter</p> 
                      <p>at least one digit</p> 
                      <p>at least one special characters ie:@$!%*?&</p> 
                    </div>
                  </div>
                  <div className='overlay'></div>
                    <button className="btn-signup" type='submit' name='signup'>Create account</button>
                </form>
              </div>
            </div>
          </div>
        )
}

export default Signup