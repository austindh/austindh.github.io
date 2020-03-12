import React from 'react';

import './TechList.scss';

interface TechListProps {
	tech: string[]
}

export const TechList = (props: TechListProps) => {
	return (
		<div className="tech-list">
			{props.tech.map((t, i) => (
				<div className="tech" key={i}>{t}</div>
			))}
		</div>
	)
};
