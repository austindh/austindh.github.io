import React, { useEffect } from 'react';
import cosha from 'cosha';

import './AboutMe.scss';
import { TechList } from './TechList';
import ReactMarkdown from 'react-markdown';
import { getImageThumbUrl, getImageUrl } from '../img/getImage';
import { ExpansionCard } from './ExpansionCard';


const skills = `
- React, TypeScript, Angular, AngularJS  
- Redux, RxJS  
- webpack, npm  
- Jasmine, Mocha, Chai, SinonJS  
- Node.js, Express  
- SQL  
- C# (.NET)  
- Python  
- Java
`.trim();



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

	const skillsGroup = [
		['React',
		'TypeScript',
		'Angular',
		'AngularJS',
		'Redux',
		'RxJS'],
		['webpack',
		'npm',
		'Jasmine',
		'Mocha',
		'Chai',
		'SinonJS'],
		['Node.js',
		'Express',
		'C# (.NET)'],
		['SQL', 'Postgres', 'SQLite'],
		['Python',
		'Java']
	];
	const flatSkills: string[] = [];
	skillsGroup.forEach(s => {
		if (typeof s === 'string') {
			flatSkills.push(s);
		} else {
			s.forEach(x => flatSkills.push(x));
		}
	});

	const aboutMeCard = <ExpansionCard
		classes={['about', 'card-1', 'intro']}
		topContent={
			<div className="text">
				<span>Hi, I'm Austin!</span>
				<br/>
				<span>
					I am a full stack web developer seeking a full-time remote position. I
					am passionate about web development, learning new technologies, and home
					automation.
				</span>
				{/* <br/>
				<span>I think if I filled this some more it might look better.</span> */}
			</div>
		}
	/>;

	const techCard = <ExpansionCard 
		title="Technology"
		classes={['about', 'card-2', 'tech-card']}
		topContent={
			// <ReactMarkdown source={skills}/>
			<TechList groupedTech={skillsGroup} techTypeOverrides={{
				'front-end': ['typescript'],
			}}/>
			// <TechList tech={flatSkills} noSort techTypeOverrides={{
			// 	'front-end': ['typescript'],
			// }} />
		}
	/>;

	const educationCard = <ExpansionCard 
		title="Education"
		classes={['about', 'card-3']}
		topContent={
			<div className="education">
				<img className="byu" src={getImageThumbUrl('byu')} alt=""/>
				<div className="text">
					<span>B.S. in Computer Science</span>
					<span>Brigham Young University, Provo, UT</span>
					<span>2016</span>
				</div>
			</div>
		}
	/>;

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
	  <div className="paragraph">
		{aboutMeCard}
		{techCard}
		{educationCard}
	  </div>
    </div>
  );
};
