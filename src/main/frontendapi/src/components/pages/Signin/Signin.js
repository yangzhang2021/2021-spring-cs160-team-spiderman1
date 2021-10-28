import React, {useState, useEffect}from 'react';
import '../Signup/Signup.css'
import '../../../App.css'
import {useHistory} from 'react-router-dom'

function Signin() {
  const [email, setEmail] = useState('')

  const  [password, setPassword] = useState('')
  // const [user, setUser] = useState([])

  const history = useHistory()

  const handleClick=(e)=>{
    e.preventDefault()

    history.push("/personhome")
    const user={email, password}
    console.log(user)
    fetch("http://localhost:8080/user_authentication/add", {
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("new user added")
    })
  
}

// useEffect(()=>{
//   fetch("http://localhost:8080/user_authentication/getAll" )
//   .then(res=>res.json())
//   .then((result)=>{
//     setUser(result)
//   })
// })
  return (
    <div className='signup-container'>
        <h1>Sign in</h1>
        <form action='/' method='post' encType="multiplart/form-data">
          <div className='row'>
            <label>Email</label>
            <input id='email' type='email' placeholder='Enter email' name='Email' required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='row'>
            <label>Password</label>
            <input id ='password' type='password' placeholder='Enter password' name='Password' required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
            <button type='submit' name='signup' value="Sign up" onClick={handleClick}>Sign Up</button>
         
        </form>
    </div>
  )
}

export default Signin;