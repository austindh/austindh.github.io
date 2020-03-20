import React, { useState } from 'react';
import clsx from 'clsx';

import './PhotoGallery.scss';
import { ProjectPic } from '../projects';
import { Page } from './Page';

interface PhotoGalleryProps {
	pics: ProjectPic[]
}

export const PhotoGallery = (props: PhotoGalleryProps) => {

	const [isOpen, setIsOpen] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState<ProjectPic | null>(null);
	// const [lastSelectedPhoto, setLastSelectedPhoto] = useState<ProjectPic | null>(null);
	const [fullBackdropHeight, setfullBackdropHeight] = useState(false);

	const onClick = (p: ProjectPic) => {
		setSelectedPhoto(p);
		setIsOpen(true);
		setfullBackdropHeight(true);
	};

	const backdropClick = () => {
		setIsOpen(false);
		setTimeout(() => {
			setSelectedPhoto(null);
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
				visible: isOpen,
				'full-height': fullBackdropHeight
			})} onClick={backdropClick}>

				{/* <Page> */}
					<div className="shadow current-photo">
						<div className="img" style={{
							backgroundImage: `url(${selectedPhoto?.url})`
						}}>
							{/* <img className="shadow" src={selectedPhoto?.url}></img> */}
						</div>
						<div className="bottom">{selectedPhoto?.caption}</div>
					</div>
				{/* </Page> */}
			</div>
		</>
	)
};
