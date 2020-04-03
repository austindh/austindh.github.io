import React, { useEffect } from 'react';
import cosha from 'cosha';

import './AboutMe.scss';
import { Link } from 'react-router-dom';

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
        <img src="/austin.jpg" alt="" className="pic profile" />
        <div className="info">
          <a href="mailto:austindavidhughes@gmail.com">
            <img className="icon" src="/email.svg" alt="" />
            <span>austindavidhughes@gmail.com</span>
            {/* <span>mail@austinhughes.me</span> */}
          </a>
          <a href="https://github.com/austindh" rel="noreferrer noopener" target="_blank">
            <img className="icon" src="/github.png" alt="" />
            <span>austindh</span>
          </a>
          <a href="https://www.linkedin.com/in/austindh816" rel="noreferrer noopener" target="_blank">
            <img className="icon" src="/linkedin.svg" alt="" />
            <span>austindh816</span>
          </a>
		  <a href="/austin-hughes-resume.pdf"rel="noreferrer noopener" target="_blank">
			  <img className="icon" src="/doc.svg" />
			  {/* TODO update resume to include website link */}
			  <span>resume.pdf</span>
		  </a>
        </div>
      </div>
      <div className="card paragraph">
        I am a full stack web developer seeking a full-time remote position. I
        am passionate about web development, learning new technologies, and home
        automation.
      </div>
    </div>
  );
};
