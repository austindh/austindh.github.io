// copy over everything from the build folder to the root
import * as fs from 'fs-extra';
import * as path from 'path';

const rootDir = path.resolve(__dirname, '../');
const ourDir = path.basename(__dirname);
const buildDir = path.resolve(__dirname, 'build');

const keep = new Set([
	'.git',
	ourDir
]);

const getStuffToDelete = async () => {
	const items = await fs.readdir(rootDir);
	return items.filter(x => !keep.has(x));
}

const deleteItem = async (path: string) => {
	await fs.remove(path);
}

const main = async () => {
	// Delete everything but our folder from top level
	const toDelete = await getStuffToDelete();
	for (let x of toDelete) {
		await deleteItem(path.join(rootDir, x));
	}

	// Copy everything over from build dir
	await fs.copy(buildDir, rootDir);

};
main();
