import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Jobs } from './components/Jobs';
import { Projects } from './components/Projects';

function App() {
  return (
	<Router>
		<NavBar />
		<Switch>
			<Route exact path="/" component={Jobs}></Route>
			<Route path="/projects" component={Projects}></Route>
		</Switch>
	</Router>
  );
}

export default App;
