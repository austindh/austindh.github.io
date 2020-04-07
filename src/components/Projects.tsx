import React, { useState } from "react";
import clsx from "clsx";

import { TechList } from './TechList';
import { myProjects, Project } from '../projects';
import { PhotoGallery } from './PhotoGallery';
import { ExpansionCard } from './ExpansionCard';
import ReactMarkdown from 'react-markdown';

import './Projects.scss';

export const Projects = () => {

	const [expandedProject, setExpandedProject] = useState<Project | null>(null);

	const toggleProject = (p: Project) => {
		setExpandedProject(currentExpanded => {
			return currentExpanded === p ? null : p;
		})
	}

	const getDescription = (p: Project): React.ReactNode => {
		return p.description && (
			<div className="description">
				<ReactMarkdown source={ p.description } />
			</div>
		);
	}

	return (
		<div id="projects">
			{myProjects.map((p, i) => (
				<ExpansionCard 
					key={i}
					classes={['card', `card-${i}`]}
					isExpanded={expandedProject === p}
					expansionChange={() => toggleProject(p)}
					title={p.name}
					topContent={
						<div className={clsx("summary", {
							pics: !!p.pics
						})}>
							{ p.pics && <div className="photo-thumb"><PhotoGallery  pics={p.pics}/></div> }
							<div className="summary-text">{p.summary}</div>
						</div>
					}
					expandContent={ getDescription(p) }
					bottomContent={
						<div className="tech">
							<TechList tech={p.tech} />
						</div>
					}
				/>
				// <div key={p.name} className={clsx('card', `card-${i}`)}>
				// 	<div className="card-title">{p.name}</div>
				// 	{ p.pics && <PhotoGallery  pics={p.pics}/> }
				// </div>
			))}
		</div>
	);
};
