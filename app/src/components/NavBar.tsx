import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from 'react-router-dom';

import "./NavBar.scss";
import clsx from "clsx";

export const NavBar = () => {
	interface Page {
		name: string;
		shortName?: string;
		route: string;
	}
	const pages: Page[] = [
		{ name: 'Home', route: '/' },
		{ name: "Work Experience", shortName: 'Work', route: "/work" },
		{ name: "Projects", route: "/projects" },
	];

	const { pathname } = useLocation();
	const currentPage = pages.find(p => p.route === pathname) || pages[0];
	useEffect(() => {
		setSelectedPage(currentPage.name);
	}, [currentPage.name]);
	
	const [selectedPage, setSelectedPage] = useState(currentPage.name);
	const [highlighterStyle, setHighlighterStyle] = useState({
		opacity: 0,
		width: 0,
		left: 0
	});
	const [windowWidth, setWindowWidth] = useState<number>(document.body.clientWidth);

	const moveHighlighter = useCallback(() => {
		const highlighter = document.getElementById("highlighter");
		const pageLink = document.getElementById(selectedPage);
		if (!pageLink || !highlighter) {
			return;
		}
	
		const pageLeft = pageLink.offsetLeft;
		const pageWidth = pageLink.clientWidth;
		
		let widthOffset = 25;
		if (windowWidth <= 800) {
			widthOffset = 15;
		}
		if (windowWidth <= 500) {
			widthOffset = 0;
		}


		const newHighlighterWidth = pageWidth - widthOffset;
	
		setHighlighterStyle(h => {
			return {
				...h,
				left: pageLeft + (pageWidth / 2) - (newHighlighterWidth / 2),
				width: newHighlighterWidth
			}
		});
	}, [selectedPage, windowWidth])

	// move highlighter to center under correct element
	useEffect(() => {
		moveHighlighter();
	}, [moveHighlighter, selectedPage]);

	// wait to show highlighter until initial positioning is done
	useEffect(() => {
		setTimeout(() => {
			setHighlighterStyle(style =>{
				return {
					...style,
					opacity: 1
				}
			})
		}, 500)
	}, []);

	// Move and resize highlighter on window resize
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const update = () => {
			setWindowWidth(document.body.clientWidth);
			clearTimeout(timeout);
			timeout = setTimeout(moveHighlighter, 500);
		};
		window.addEventListener('resize', update);
		return () => document.removeEventListener('resize', update);
	}, [moveHighlighter, selectedPage]);

	return (
		<div id="top-nav" className="shadow">
		<div className="title">Austin Hughes</div>
		<div className="pages">
			{ pages.map((p, i) => (
				<div key={i} id={p.name} className={clsx({
					active: p.name === selectedPage
				})}>
					<Link to={p.route} onClick={() => setSelectedPage(p.name)}>
						{windowWidth <= 500 && p.shortName ? p.shortName : p.name}
					</Link>
				</div>
			)) }
			<div id="highlighter" style={highlighterStyle}></div>
		</div>
		</div>
	);
};
