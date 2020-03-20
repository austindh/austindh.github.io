import { Automation } from './Automation';
import { FabricInventory } from './FabricInventory';

export interface ProjectPic {
	url: string
	caption?: string
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
	- neapolitanmakes.com
	- guitar chords
*/




export const myProjects: Project[] = [
	Automation,
	{ 
		name: 'IPC',
		summary: 'A web application to track worker productivity at a custom metal casting facility.',
		tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite']
	},
	FabricInventory,
	{ 
		name: 'austinhughes.me',
		summary: 'This website',
		tech: ['React', 'TypeScript']
	},
];
