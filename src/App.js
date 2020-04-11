import React from 'react';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Expense from './pages/Expense';
import NotFound from './pages/NotFound';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux'
function App(){
	return (
		<Provider store = {store}>
			<Router>
				<Switch>
					<Route exact path = '/' component = {Expense} />
					<Route path ='/signup' component = {Signup} />
					<Route path = '/login' component = {Login} />
					<Route component = {NotFound} />
					
				</Switch>
			</Router>
		</Provider>	
		)
}

export default App;