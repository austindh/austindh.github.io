import { Project } from '.';

export const FabricInventory: Project = { 
	name: 'Fabric Inventory',
	summary: `A web application to track my wife's inventory of fabric for her Etsy shop.`,
	tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite'],
	pics: [
		{ 
			url: 'fi.png',
			caption: 'Fabric overview'
		},
		{
			url: 'fi-edit.png',
			caption: 'Update fabric in stock status, and add tags and notes'
		},
		{
			url: 'fi-filter.png',
			caption: 'Filter fabric by quantity, tags, or id'
		},
		{
			url: 'fi-pic.png',
			caption: 'Generate picture to send to customers to show what fabric options are available'
		}
	]
}
