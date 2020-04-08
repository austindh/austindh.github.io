import React from 'react';

import './TechList.scss';
import clsx from 'clsx';

interface TechListProps {
	tech?: string[]
	groupedTech?: (string | string[])[]
	noSort?: boolean
	techTypeOverrides?: {
		[t in TechType]?: string[]
	}
}

type TechType = 'front-end' | 'back-end' | 'database' | 'general'
interface Tech {
	name: string
	type: TechType
}

export const TechList = (props: TechListProps) => {
	// Sort by tech type (front-end, back-end, etc.) and color code
	const sortOrder: TechType[] = ['general', 'front-end', 'back-end', 'database'];
	const frontEndTech = ['angular', 'react', 'bootstrap', 'jquery', 'handlebars', 
		'backbone', 'material', 'rxjs', 'redux'];
	const backEndTech = ['c#', 'node', 'express', 'php', 'jersey', 'aws', 'nginx'];
	const dbTech = ['mongo', 'oracle', 'sql', 'postgres']

	const matches = (name: string, tech: string[]): boolean => {
		return tech.some(t => name.toLowerCase().includes(t));
	}

	if (props.techTypeOverrides) {
		const {techTypeOverrides: overrides} = props;
		if (overrides["front-end"]) {
			overrides["front-end"].forEach(x => frontEndTech.push(x));
		}
		if (overrides["back-end"]) {
			overrides["back-end"].forEach(x => backEndTech.push(x));
		}
		if (overrides.database) {
			overrides.database.forEach(x => dbTech.push(x));
		}
	}

	const toTechType = (name: string): Tech => {
		let type: TechType = 'general';

		if (matches(name, frontEndTech)) {
			type = 'front-end';
		} else if (matches(name, backEndTech)) {
			type = 'back-end';
		} else if (matches(name, dbTech)) {
			type = 'database';
		}

		return { name, type };
	}

	let techList: Tech[] = [];
	if (props.tech) {
		techList = props.tech.map(toTechType);
	}

	if (!props.noSort) {
		techList.sort((a, b) => {
			return sortOrder.indexOf(a.type) - sortOrder.indexOf(b.type);
		});
	}

	const getTechListEl = (techList: Tech[], key=0) => (
		<div className="tech-list" key={key}>
			{techList.map((t, i) => (
				<div className={clsx('tech', t.type)} key={i}>{t.name}</div>
			))}
		</div>
	);
	
	let techLists;
	if (props.groupedTech) {
		const groups: string[][] = props.groupedTech.map(x => {
			if (typeof x === 'string') {
				return [x]
			}
			return x;
		});
		const techGroups: Tech[][] = groups.map(g => g.map(toTechType));
		techLists = techGroups.map((list, i) => getTechListEl(list, i))
	}

	if (props.tech) {
		return getTechListEl(techList);
	}

	if (techLists) {
		return (
			<div className="tech-lists">
				{techLists}
			</div>
		)
	}

	return <></>;
};
