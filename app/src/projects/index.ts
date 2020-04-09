import { Automation } from './Automation';
import { FabricInventory } from './FabricInventory';
import { WorkerProductivity } from './WorkerProductivity';

import { ImageName } from '../img';

export interface ProjectPic {
	imgName: ImageName
	caption?: string
	isMain?: boolean
}

export interface Project {
	name: string
	summary?: string
	description?: string
	tech: string[]
	pics?: ProjectPic[] // urls
}

/**
	- IPC
	- Fabric Inventory
	- Home automation
	- austinhughes.me

	future:
	- Rullo solver
	- neapolitanmakes.com
	- guitar chords
*/




export const myProjects: Project[] = [
	Automation,
	WorkerProductivity,
	FabricInventory,
	{ 
		name: 'austinhughes.me',
		summary: 'This website',
		tech: ['React', 'TypeScript']
	},
];
