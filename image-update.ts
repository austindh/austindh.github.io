// Copy and resize image files into public/img folder
import * as fs from 'fs-extra';
import * as path from 'path';
import * as sharp from 'sharp';

const rawImageFolder = path.resolve(__dirname, './img');
const publicFolder = path.resolve(__dirname, './public');
const srcFolder = path.resolve(__dirname, './src');
const publicImgFolder = path.join(publicFolder, 'img');
const srcImgFolder = path.join(srcFolder, 'img');

const THUMB_SIZE = 300;
const FULL_SIZE = 1500;

interface Image {
	fileName: string
	name: string
}

const getImages = async (folder: string): Promise<Image[]> => {
	const fileNames = await fs.readdir(folder);
	return fileNames.map(fileName => {
		return {
			fileName,
			name: fileName.split('.')[0]
		}
	})
}

const processImage = async (img: Image) => {
	const { fileName, name } = img;
	const sourceFile = path.join(rawImageFolder, fileName);
	const destFile = path.join(publicImgFolder, `${name}.png`);
	const destFileThumb = path.join(publicImgFolder, `${name}.thumb.png`);

	await sharp(sourceFile)
		.resize(FULL_SIZE, FULL_SIZE, { fit: 'inside' })
		.toFile(destFile);
	await sharp(sourceFile)
		.resize(THUMB_SIZE, THUMB_SIZE, { fit: 'inside' })
		.toFile(destFileThumb);
};

/** Create type file for all image names to get type safety if I rename or remove images */
const createTsInterfaceFile = async (images: Image[]) => {
	const fileLines: string[] = [
		'//GENERATED FILE - DO NOT MODIFY DIRECTLY',
		'export type ImageName ='
	];
	images.forEach((img, i) => {
		let line = `\t'${img.name}'`;
		if (i !== images.length - 1) {
			line += ' |';
		} else {
			line += ';'
		}
		fileLines.push(line);
	});
	await fs.writeFile(path.join(srcImgFolder, 'index.ts'), fileLines.join('\n'));
}

const main = async () => {
	const rawImages = await getImages(rawImageFolder);

	// ATODO delete any public images that no longer exist
	const publicImages = await getImages(publicImgFolder);
	for (let p of publicImages) {
		const fileName = path.join(publicImgFolder, p.fileName);
		await fs.remove(fileName);
	}

	// console.log('publicImages', publicImages);
	await createTsInterfaceFile(rawImages);

	for (let i of rawImages) {
		await processImage(i);
	}
};
main();
