import React, { useState, useEffect } from "react";

import "./NavBar.scss";

export const NavBar = () => {
	interface Page {
		name: string;
		route: string;
	}
	const pages: Page[] = [
		{ name: "Jobs", route: "/" },
		{ name: "Projects", route: "/projects" },
		{ name: 'Longer name here', route: '/test' }
	];

	const [selectedPage, setSelectedPage] = useState(pages[0].name);
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
		const newHighlighterWidth = pageWidth - 15;

		setHighlighterStyle({
			...highlighterStyle,
			left: pageLeft + (pageWidth / 2) - (newHighlighterWidth / 2),
			width: newHighlighterWidth
		});

	}, [selectedPage]);

	// wait to show highlighter until positioning is done
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
		<div id="top-nav">
		<div className="title">Title</div>
		<div className="pages">
			{ pages.map((p, i) => (
				<div key={i} id={p.name} onClick={() => setSelectedPage(p.name)}>
					{p.name}
				</div>
			)) }
			<div id="highlighter" style={highlighterStyle}></div>
		</div>
		</div>
	);
};
