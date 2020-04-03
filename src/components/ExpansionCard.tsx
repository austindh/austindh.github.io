import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
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

	const expandedRef = useRef<HTMLDivElement | null>(null);
	const [expandedHeight, setExpandedHeight] = useState(0);
	useLayoutEffect(() => {
		if (!expandedHeight && expandedRef.current) {
			setExpandedHeight(expandedRef.current.clientHeight + 20);
		}
	}, [expandedHeight]);

	return (
		<div className={clsx('card', 'expansion-card', {
			expanded: props.isExpanded
		}, ...classes)}>
			<div className="contents">
				<div className="top">
					<div className={clsx('top-bar', {
						'has-content': !!props.expandContent
					})} onClick={() => props.expansionChange(!props.isExpanded)}>
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
				<>
					<div className={clsx('details', { expanded: props.isExpanded })} style={{
						maxHeight: props.isExpanded ? expandedHeight : 0
					}}>
						{ props.expandContent }
					</div>
					{/* Render second copy hidden briefly to get height for expansion */}
					{ !expandedHeight && 
						<div ref={expandedRef} className="details expanded hidden">
							{ props.expandContent }
						</div>
					}
				</>
			}
			{ props.bottomContent }
		</div>
	);
};
