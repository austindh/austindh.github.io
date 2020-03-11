import React from "react";

import { Page } from './Page';

import { myProjects } from '../projects';
import clsx from "clsx";

export const Projects = () => {
	return (
		<div>
			{myProjects.map((p, i) => (
				<div key={p.name} className={clsx('card', `card-${i}`)}>
					<div className="title">{p.name}</div>
					<div className="summary">{p.summary}</div>
					{ p.tech.map((t, i) => (<div className="tech" key={i}>{t}</div>)) }
				</div>
			))}
		</div>
	);
};
