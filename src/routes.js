import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

export default (
	<Switch>
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/signup" component={Signup} />
		<Route path="/" exact component={Login} />
	</Switch>
);
