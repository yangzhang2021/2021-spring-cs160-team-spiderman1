import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import Signup from './components/pages/Signup/Signup'
import Signin from './components/pages/Signin/Signin'
import PersonHome from './components/PersonHome/PersonHome'
import Edit from'./components/PersonHome/Edit'
import axios from 'axios';


axios.defaults.headers.common['Authorization'] =  'Bearer' + localStorage.getItem('token')
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

function App () {

  // state = {}
  // componentDidMount = () =>{

    // let mheaders = new Headers();
    // mheaders.append('Content-Type', 'application/json');
    // mheaders.append('Accept', 'application/json');

    // mheaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // mheaders.append('Access-Control-Allow-Credentials', 'true');

    // mheaders.append('GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    // axios.get('http://localhost:8080/api/v1/user') // user personal page
    // .then(res =>{
    //     this.setState({
    //         user:res.data
    //     })
    // }).catch(err =>{
    //     console.log(err)
    // })
  
// }
 const [search, setSearch] = useState('')
 const searchHandler = () =>{

 }

    return (
      <>
        <Router>
          <Switch>
            <Route path='/personhome/' extact component={PersonHome}/>
            <Route path='/Edit' extact component={Edit}/>
            <div>
              <Navbar />
              <Route exact path='/'
              render={(props) =>(
                <Home
                {...props}
                term = {search}
                searchKeyWord ={searchHandler}
                />
              )}/>
              <Route path='/signup' exact component={Signup}/>
              <Route path='/signin' exact component={Signin}/>
            </div>           
          </Switch>
        </Router>
      </>
     );
  
}
export default App;