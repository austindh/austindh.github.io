import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import "./NavBar.scss";
import clsx from "clsx";

export const NavBar = () => {
	interface Page {
		name: string;
		route: string;
	}
	const pages: Page[] = [
		{ name: "Work", route: "/" },
		{ name: "Projects", route: "/projects" },
		{ name: 'Longer name here', route: '/test' }
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

	// move highlighter to center under correct element
	useEffect(() => {
		const highlighter = document.getElementById("highlighter");
		const pageLink = document.getElementById(selectedPage);
		if (!pageLink || !highlighter) {
			return;
		}

		const pageLeft = pageLink.offsetLeft;
		const pageWidth = pageLink.clientWidth;
		const newHighlighterWidth = pageWidth - 25;

		setHighlighterStyle(h => {
			return {
				...h,
				left: pageLeft + (pageWidth / 2) - (newHighlighterWidth / 2),
				width: newHighlighterWidth
			}
		});

	}, [selectedPage]);

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
	}, [])

	return (
		<div id="top-nav" className="shadow">
		<div className="title">Austin Hughes</div>
		<div className="pages">
			{ pages.map((p, i) => (
				<div key={i} id={p.name} className={clsx({
					active: p.name === selectedPage
				})}>
					<Link to={p.route} onClick={() => setSelectedPage(p.name)}>
						{p.name}
					</Link>
				</div>
			)) }
			<div id="highlighter" style={highlighterStyle}></div>
		</div>
		</div>
	);
};
