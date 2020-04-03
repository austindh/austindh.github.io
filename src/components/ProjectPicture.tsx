import React, { useEffect } from 'react';
import cosha from 'cosha';

import './ProjectPicture.scss';

interface ProjectPictureProps {
	src: string
}

export const ProjectPicture = (props: ProjectPictureProps) => {

	let className = 'proj-pic';

	useEffect(() => {
		// cosha({
		// 	className,
		// 	blur: '10px',
		// 	brightness: 1,
		// 	saturation: 1,
		// 	x: 0,
		// 	y: 0
		// })
	}, []);

	return (
		<div className="project-pic">
			<img src={props.src} alt="" className={className} />
		</div>
	);
};
