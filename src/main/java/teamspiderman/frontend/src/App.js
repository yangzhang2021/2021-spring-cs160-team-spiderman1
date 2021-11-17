import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Home from './components/pages/Home'
import Signup from './components/pages/Signup/Signup'
import Signin from './components/pages/Signin/Signin'
import Discover from './components/pages/Discoverblog/Discoverblog'
import iList from './components/pages/Discoverlist/Discoverlist'
import About from './components/pages/About/About'
import PersonHome from './components/PersonHome/PersonHome'
import DashBoard from './components/PersonHome/DashBoard'
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =  'Bearer' + localStorage.getItem('token')
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

const RouterWithNav1 = ({exact, path, component:Component, ...rest}) =>{
  return <Route exact={exact} path={path} {...rest} render={(routeProps) =>{
    return <><Navbar {...routeProps}/><Component{...routeProps}/></>
  }}
  />
}

const RouterWithNav2 = ({exact, path, component:Component, ...rest}) =>{
  return <Route exact={exact} path={path} {...rest} render={(routeProps) =>{
    return <><Navbar2 {...routeProps}/><Component{...routeProps}/></>
  }}
  />
}
export default class App extends React.Component {

  state = {}
  componentDidMount = () =>{

    // let mheaders = new Headers();
    // mheaders.append('Content-Type', 'application/json');
    // mheaders.append('Accept', 'application/json');

    // mheaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // mheaders.append('Access-Control-Allow-Credentials', 'true');

    // mheaders.append('GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    axios.get('http://localhost:8080/api/v1/user') // user personal page
    .then(res =>{
        this.setState({
            user:res.data
        })
    }).catch(err =>{
        console.log(err)
    })
}
  render(){

    return (
      <>
        <Router>
          <Switch>
            <RouterWithNav1 path='/' exact component={Home}/>
            <RouterWithNav1 path='/signup' extact component={Signup}/>
            <RouterWithNav1 path='/signin' extact component={Signin}/>
            <RouterWithNav1 path='/about' extact component={About}/>
    
            <RouterWithNav2 path='/discover' exact component={Discover}/>
            <RouterWithNav2 path='/discoverlist' exact component={iList}/>
            <Route path='/personhome' extact component={PersonHome}/>
            <Route path='/dashboard' extact component={DashBoard}/>
          </Switch>
        </Router>
      </>
     );
  }
}