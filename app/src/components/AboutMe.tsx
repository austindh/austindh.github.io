import React, { useEffect } from 'react';
import cosha from 'cosha';

import './AboutMe.scss';

export const AboutMe = () => {

	useEffect(() => {
		cosha({
			className: 'pic',
			blur: '10px',
			brightness: 1,
			saturation: 1,
			x: 0,
			y: 0
		})
	}, []);

	return (
		<div id="about-me">
			<div className="contact card">
				<img src="/austin.jpg" alt="" className="pic profile"/>
				<div className="info">
					<div>
						<img className="icon" src="/email.svg" alt=""/>
						<span>austindavidhughes@gmail.com</span>
						{/* <span>mail@austinhughes.me</span> */}
					</div>
					<div>
						<img className="icon" src="/github.png" alt=""/>
						<span>austindh</span>
					</div>
					<div>
						<img className="icon" src="/linkedin.svg" alt=""/>
						<span>austindh816</span>	
					</div>
				</div>
			</div>
			<div className="card paragraph">
				Here is some info
			</div>
		</div>
	)
};
