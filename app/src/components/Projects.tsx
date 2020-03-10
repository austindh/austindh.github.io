import React from "react";

import { Page } from './Page';

import { myProjects } from '../projects';
import clsx from "clsx";

export const Projects = () => {
	return (
		<div>
			{myProjects.map((p, i) => (
				<div key={p.name} className={clsx('card', `card-${i}`)}>{p.name}</div>
			))}
		</div>
	);
};
