import React, { useState } from 'react';
import clsx from 'clsx';

import { ReactComponent as Caret } from '../icons/caret-down.svg';
import './ExpansionCard.scss';

interface ExpansionCardProps {
	classes?: string[]
	isExpanded: boolean
	expansionChange: (isExpanded: boolean) => void
	title: string
	topContent?: any
	expandContent?: any
	bottomContent?: any
}

export const ExpansionCard = (props: ExpansionCardProps) => {
	const classes = props.classes || [];

	return (
		<div className={clsx('card', 'expansion-card', {
			expanded: props.isExpanded
		}, ...classes)}>
			<div className="contents">
				<div className="top">
					<div className="top-bar" onClick={() => props.expansionChange(!props.isExpanded)}>
						<div className="card-title">{props.title}</div>
						<div className={clsx('expander', {
							expanded: props.isExpanded
						})}>
							<Caret />
						</div>
					</div>
				</div>
				{ props.topContent }
			</div>
			{ !!props.expandContent && 
				<div className={clsx('bottom', { expanded: props.isExpanded })}>
					{ props.expandContent }
				</div>
			}
			{ props.bottomContent }
		</div>
	);
};
