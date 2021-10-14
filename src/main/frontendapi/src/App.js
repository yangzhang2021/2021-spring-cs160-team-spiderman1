import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'

function App() {
  return (
  <>
    <Router>
      <Switch>
        <div>
        <Navbar />
        <Route path='/' exact component={Home}/>
        </div>
      </Switch>
    </Router>
  </>
 );
}
export default App;