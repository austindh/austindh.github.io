import React from "react";
import clsx from "clsx";

import { TechList } from './TechList';
import { myProjects } from '../projects';
import { PhotoGallery } from './PhotoGallery';


import './Projects.scss';

export const Projects = () => {
	return (
		<div id="projects">
			{myProjects.map((p, i) => (
				<div key={p.name} className={clsx('card', `card-${i}`)}>
					<div className="card-title">{p.name}</div>
					<div className="summary">{p.summary}</div>
					{ p.pics && <PhotoGallery  pics={p.pics}/> }
					<div className="tech">
						<TechList tech={p.tech} />
					</div>
				</div>
			))}
		</div>
	);
};
