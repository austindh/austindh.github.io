import React, { useEffect, useState } from 'react';

import './Page.scss';
import { useLocation } from 'react-router';
import clsx from 'clsx';

interface PageProps {
	children: any
	fadeOut?: boolean
	onFadeOut?: () => void
	fadeIn?: boolean
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

	// useEffect(() => {
	// 	if (isFadingIn) {
	// 		setTimeout(() => {
	// 			setFadingIn(false);
	// 		}, 500)
	// 	}
	// }, [isFadingIn])

	// useEffect(() => {
	// 	if (props.fadeIn) {
	// 		setFadingIn(true);
	// 	}
	// }, [props.fadeIn])
	
	// useEffect(() => {
	// 	if (isFadingIn) {
	// 		setClasses(['page']);
	// 		setClasses(c => [...c, 'show']);
	// 	} else {

	// 	}
	// }, [isFadingIn]);

	// useEffect(() => {
	// 	if (props.fadeOut) {
	// 		setClasses(['page', 'show']);
	// 	}
	// }, [props.fadeOut]);

	return (
		<div className={clsx('page', {
			'fade-out': props.fadeOut,
			'fade': isFadingOut,
			'fade-in': props.fadeIn,
			'show': isFadingIn
		})}>
			{props.children}
		</div>
	)
}
