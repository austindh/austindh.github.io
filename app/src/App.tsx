import React, { useState, useEffect, useRef } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation
} from 'react-router-dom';

import './App.scss';

import { NavBar } from './components/NavBar';
import { Jobs } from './components/Jobs';
import { Projects } from './components/Projects';
import { Page } from './components/Page';

function Main() {
	const location = useLocation();
	const [component, setComponent] = useState<JSX.Element>();
	const [nextComponent, setNextComponent] = useState<JSX.Element | null>(null);

	const isFirstRun = useRef(true);

	const getComponent = () => {
		let newComponent = () => <div>empty</div>;
		switch(location.pathname) {
			case '/':
				newComponent = Jobs;
				break;
			case '/projects':
				newComponent = Projects;
				break;
		}
		return newComponent;
	}

	const [pageWidth, setPageWidth] = useState(0);
	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			setComponent(getComponent());
			return;
		}
		const current = document.querySelector('.current');
		if (current) {
			setPageWidth(current.clientWidth);
		}
		setNextComponent(getComponent());

	}, [location.pathname]);

	useEffect(() => {
	});

	const loadNextComponent = () => {
		if (nextComponent) {
			setComponent(nextComponent);
			setNextComponent(null);
		}
	}

	const [mainClass, setMainClass] = useState('');
	useEffect(() => {
		setTimeout(() => {
			setMainClass('show');
		}, 200);
	}, [])

	return (
		<div id="main" className={mainClass}>
		<Page
			className="current"
			fadeOut={!!nextComponent}
			width={pageWidth}
			onFadeOut={loadNextComponent}
		>
			{component}
		</Page>
		{nextComponent && <Page fadeIn={true}>{nextComponent}</Page>}
		</div>
  );
}

function App() {



	return (
		<Router>
			<NavBar />
			<Main />
		</Router>
	);
}

export default App;
