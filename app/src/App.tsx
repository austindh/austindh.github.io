import React, { useState, useEffect, useRef } from "react";
import {
	HashRouter as Router,
	useLocation
} from 'react-router-dom';

import './App.scss';

import { NavBar } from './components/NavBar';
import { Jobs } from './components/Jobs';
import { Projects } from './components/Projects';
import { Page } from './components/Page';
import { AboutMe } from './components/AboutMe';
import clsx from "clsx";

function Main() {
	const location = useLocation();
	
	interface CurrentComponent {
		className?: string
		component: JSX.Element
	}
	const [currentComponent, setCurrentComponent] = useState<CurrentComponent>();
	const [nextComponent, setNextComponent] = useState<JSX.Element[] | null>(null);

	const addNextComponent = (component: JSX.Element) => {
		setNextComponent(components => {
			if (components) {
				components.push(component);
				return components;
			} else {
				return [component];
			}
		});
	}

	const isFirstRun = useRef(true);

	const getComponent = () => {
		let newComponent = <div className="card">empty</div>;
		switch(location.pathname) {
			case '/work':
				newComponent = <Jobs />;
				break;
			case '/projects':
				newComponent = <Projects />;
				break;
			case '/':
				newComponent = <AboutMe />;
				break;
		}
		return newComponent;
	}

	const [pageWidth, setPageWidth] = useState(0);
	const [manualUpdate, setManualUpdate] = useState(false);
	// const isTransitioning = useRef(false);
	useEffect(() => {

		if (isFirstRun.current) {
			isFirstRun.current = false;
			setCurrentComponent({
				className: 'first',
				component: getComponent()
			});
			return;
		}

		const current = document.querySelector('.current');
		if (current) {
			setPageWidth(current.clientWidth);
		}
		addNextComponent(getComponent());
		const main = document.querySelector('#main');
		if (main) {
			main.classList.remove("smooth");
			main.scrollTop = 0;
		}

	}, [location.pathname, manualUpdate]);


	const transitionComplete = () => {
		if (nextComponent) {
			// Always grab latest next component to switch out (in case of fast navigation)
			setCurrentComponent({ component: nextComponent.slice(-1)[0] });
			setNextComponent(null);
		}
	}

	const [mainClass, setMainClass] = useState('');
	useEffect(() => {
		setTimeout(() => {
			setMainClass('show');
		}, 200);
	}, [])

	// const current = currentComponent?.component.props.tag;

	return (
		<div id="main" className={mainClass}>
		{currentComponent && 
			<Page
				className={clsx('current', currentComponent.className)}
				fadeOut={!!nextComponent}
				width={pageWidth}
				onFadeOut={transitionComplete}
			>
				{currentComponent.component}
			</Page>
		}
		{/* Next component will be first one added for animation to complete */}
		{nextComponent && <Page className="next" fadeIn={true}>{nextComponent[0]}</Page>}
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
