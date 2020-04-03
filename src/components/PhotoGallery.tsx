import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import './PhotoGallery.scss';
import { ProjectPic } from '../projects';
import { Page } from './Page';
import { ReactComponent as Prev } from '../icons/prev.svg';
import { ReactComponent as Next } from '../icons/next.svg';
import { getImageUrl, getImageThumbUrl } from '../img/getImage';

interface PhotoGalleryProps {
	pics: ProjectPic[]
}

export const PhotoGallery = (props: PhotoGalleryProps) => {

	const [isOpen, setIsOpen] = useState(false);
	const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
	const [fullBackdropHeight, setfullBackdropHeight] = useState(false);

	const onKeyDown = useRef((e: KeyboardEvent) => {
		if (e.code === 'ArrowRight') {
			nextPhoto();
		} else if (e.code === 'ArrowLeft') {
			prevPhoto();
		} else if (e.code === 'Escape' || e.code === 'Enter') {
			closeGallery();
		}
	})

	const openGallery = () => {
		setSelectedPhotoIndex(0);
		setIsOpen(true);
		document.addEventListener('keydown', onKeyDown.current);
		setfullBackdropHeight(true);
	};

	const closeGallery = () => {
		setIsOpen(false);
		document.removeEventListener('keydown', onKeyDown.current);
		setTimeout(() => {
			setfullBackdropHeight(false);
		}, 300);
	}

	const nextPhoto = () => {
		setSelectedPhotoIndex(index => {
			index++;
			if (index === props.pics.length) {
				index = 0;
			}
			return index;
		});
	}

	const prevPhoto = () => {
		setSelectedPhotoIndex(index => {
			index--;
			if (index < 0) {
				index = props.pics.length - 1;
			}
			return index;
		})
	}

	const keepOpen = (e: React.MouseEvent) => {
		e.stopPropagation();
	}

	// Get pic to use as album thumbnail - either pic marked as main or first pic
	let mainPic: ProjectPic = props.pics.filter(p => p.isMain)[0];
	if (!mainPic) {
		mainPic = props.pics[0];
	}

	const selectedPhoto = props.pics[selectedPhotoIndex];
	const hasMultiple = props.pics.length > 1;

	return (
		<>
			<div className="photo-gallery">
				<div className="thumb"  onClick={openGallery}>
					<img src={getImageThumbUrl(mainPic.imgName)} alt=""/>
				</div>
			</div>
			<div className={clsx('photo-viewer-backdrop', {
				visible: isOpen,
				'full-height': fullBackdropHeight
			})} onClick={closeGallery}>
				<div className="shadow current-photo" onClick={keepOpen}>
					<div className="count">
						{selectedPhotoIndex + 1} of {props.pics.length}
					</div>
					<div className={clsx('nav', {
						'show-nav': hasMultiple
					})} onClick={prevPhoto}>
						<Prev />
					</div>
					<div className="mid">
						<div className="img-container">
							<div className="img" style={{backgroundImage: `url(${getImageUrl(selectedPhoto.imgName)})`}}></div>
						</div>
						<div className="caption">{selectedPhoto?.caption}</div>
					</div>
					<div className={clsx('nav', {
						'show-nav': hasMultiple
					})} onClick={nextPhoto}>
						<Next />
					</div>
				</div>
			</div>
		</>
	)
};
