import React from 'react';

import './TechList.scss';
import clsx from 'clsx';

interface TechListProps {
	tech: string[]
}

type TechType = 'front-end' | 'back-end' | 'database' | 'general'
interface Tech {
	name: string
	type: TechType
}

export const TechList = (props: TechListProps) => {
	// Sort by tech type (front-end, back-end, etc.) and color code
	const sortOrder: TechType[] = ['general', 'front-end', 'back-end', 'database'];
	const frontEndTech = ['angular', 'react', 'bootstrap', 'jquery', 'handlebars', 'backbone', 'material', 'rxjs'];
	const backEndTech = ['c#', 'node', 'express', 'php', 'jersey', 'aws', 'nginx'];
	const dbTech = ['mongo', 'oracle', 'sql', 'postgres']

	const matches = (name: string, tech: string[]): boolean => {
		return tech.some(t => name.toLowerCase().includes(t));
	}

	const techList: Tech[] = props.tech.map(name => {
		let type: TechType = 'general';
		if (matches(name, frontEndTech)) {
			type = 'front-end';
		} else if (matches(name, backEndTech)) {
			type = 'back-end';
		} else if (matches(name, dbTech)) {
			type = 'database';
		}

		return { name, type };
	});

	techList.sort((a, b) => {
		return sortOrder.indexOf(a.type) - sortOrder.indexOf(b.type);
	});

	return (
		<div className="tech-list">
			{techList.map((t, i) => (
				<div className={clsx('tech', t.type)} key={i}>{t.name}</div>
			))}
		</div>
	)
};
