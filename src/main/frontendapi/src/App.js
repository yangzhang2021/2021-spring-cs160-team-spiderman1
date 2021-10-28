import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Home from './components/pages/Home'
import Signup from './components/pages/Signup/Signup'
import Signin from './components/pages/Signin/Signin'
import Discover from './components/pages/Discoverblog/Discoverblog'
import iList from './components/pages/Discoverlist/Discoverlist'
import About from './components/pages/About/About'
import PersonHome from './components/PersonHome/PersonHome'

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
const App=() => {
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
        <RouterWithNav2 path='/personHome' extact component={PersonHome}/>
      </Switch>
    </Router>
  </>
 );
}
export default App;