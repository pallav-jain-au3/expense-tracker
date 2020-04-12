import React from 'react';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'


function App() {
  return (
      <Router>
          <Switch>
            <Route exact path = '/' component = {Home}  />
            <Route path = '/signup' component ={Signup}/>
           <Route path = '/signin' component = {SignIn}/>
          </Switch>
      </Router>
  );
}

export default App;
