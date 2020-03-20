import React, { useState } from 'react';
import clsx from 'clsx';

import './PhotoGallery.scss';
import { ProjectPic } from '../projects';
import { Page } from './Page';

interface PhotoGalleryProps {
	pics: ProjectPic[]
}

export const PhotoGallery = (props: PhotoGalleryProps) => {

	const [selectedPhoto, setSelectedPhoto] = useState<ProjectPic | null>(null);
	const [lastSelectedPhoto, setLastSelectedPhoto] = useState<ProjectPic>();
	const [fullBackdropHeight, setfullBackdropHeight] = useState(false);

	const onClick = (p: ProjectPic) => {
		setSelectedPhoto(p);
		setLastSelectedPhoto(p);
		setfullBackdropHeight(true);
	};

	const backdropClick = () => {
		setSelectedPhoto(null);
		setTimeout(() => {
			setfullBackdropHeight(false);
		}, 300);
	}

	return (
		<>
			<div className="photo-gallery">
				{props.pics.map((pic, i) => (
					<div className="thumb"  key={i} onClick={() => onClick(pic)}>
						<img src={pic.url} alt=""/>
					</div>
				))}
			</div>
			<div className={clsx('photo-viewer-backdrop', {
				visible: selectedPhoto,
				'full-height': fullBackdropHeight
			})} onClick={backdropClick}>
				{/* <Page> */}
					<div className="card">
						<img src={selectedPhoto?.url || lastSelectedPhoto?.url}></img>
					</div>
				{/* </Page> */}
			</div>
		</>
	)
};
