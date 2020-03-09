import React, { useEffect, useState } from 'react';

import './Page.scss';
import clsx from 'clsx';

interface PageProps {
	children: any
	fadeOut?: boolean
	onFadeOut?: () => void
	fadeIn?: boolean
	className?: string
	width?: number
}

export const Page = (props: PageProps) => {

	const [isFadingIn, setFadingIn] = useState(false);
	const [isFadingOut, setFadingOut] = useState(false);

	// Fade out component
	useEffect(() => {
		if (props.fadeOut) {
			setFadingOut(true);
		}
	}, [props.fadeOut]);

	useEffect(() => {
		if (isFadingOut) {
			setTimeout(() => {
				setFadingOut(false);
				if (props.onFadeOut) {
					props.onFadeOut();
				}
			}, 1000);
		}
	}, [isFadingOut]);

	// Fade in component
	useEffect(() => {
		if (props.fadeIn) {
			setTimeout(() => {
				setFadingIn(true);
			}, 150)
		}
	}, [props.fadeIn]);

	return (
		<div className={clsx(props.className, 'page', {
			'fade-out': props.fadeOut,
			'fade': isFadingOut,
			'fade-in': props.fadeIn,
			'show': isFadingIn
		})} style={{ width: props.fadeOut ? props.width : '' }}>
			{props.children}
		</div>
	)
}
