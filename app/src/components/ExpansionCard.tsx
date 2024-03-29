import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

import { ReactComponent as Caret } from '../icons/caret-down.svg';
import './ExpansionCard.scss';

interface ExpansionCardProps {
	classes?: string[]
	isExpanded?: boolean
	expansionChange?: (isExpanded: boolean) => void
	title?: string
	topContent?: any
	expandContent?: any
	bottomContent?: any
	noExpand?: boolean
}

export const ExpansionCard = (props: ExpansionCardProps) => {
	const classes = props.classes || [];

	const expandedRef = useRef<HTMLDivElement | null>(null);
	const expansionCard = useRef<HTMLDivElement>(null);
	const [expandedHeight, setExpandedHeight] = useState(0);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		if (expandedRef.current) {
			setExpandedHeight(expandedRef.current.clientHeight + 20);
		}
	});

	const onClick = () => {
		// Only trigger expansion callback if there is actually expandContent
		if (!!props.expandContent && props.expansionChange) {
			// const newIsExpanded = !props.isExpanded;
			props.expansionChange(!props.isExpanded);
			
			// If expanding - make sure we're scrolled into view
			// setTimeout(() => {
			// 	if (newIsExpanded && expansionCard.current) {
			// 		const offsetTop = expansionCard.current.offsetTop;
			// 		const main = document.getElementById('main') as HTMLElement;
			// 		main.classList.add('smooth');
			// 		main.scrollTop = offsetTop - 30;
			// 	}
			// }, 500); // wait till layout is done changing with expansion
		}
	}

	return (
		<div ref={expansionCard} className={clsx('card', 'expansion-card', {
			expanded: props.isExpanded
		}, ...classes)}>
			<div className="contents">
				<div className="top">
					<div className={clsx('top-bar', {
						'has-content': !!props.expandContent && !props.noExpand
					})} onClick={onClick}>
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
					{/* Render second copy hidden to get height for expansion */}					
					<div ref={expandedRef} className="details expanded hidden">
						{ props.expandContent }
					</div>		
				</>
			}
			{ props.bottomContent }
		</div>
	);
};
