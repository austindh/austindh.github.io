import React, { useEffect } from 'react';
import cosha from 'cosha';

import './AboutMe.scss';

export const AboutMe = () => {

	useEffect(() => {
		console.log('hey');
		// setTimeout(() => {
			cosha({
				className: 'pic',
				blur: '10px',
				brightness: 1,
				saturation: 1,
				x: 0,
				y: 0
			})
		// }, 500)
	}, []);

	return (
		<div id="about-me" className="card">
			<img src="/austin.jpg" alt="" className="pic"/>
			<div className="pic"></div>
		</div>
	)
};
