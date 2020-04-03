import { Project } from '.';

export const FabricInventory: Project = { 
	name: 'Fabric Inventory',
	summary: `A web application to track my wife's inventory of fabric for her Etsy shop.`,
	tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite'],
	pics: [
		{ 
			imgName: 'fi',
			caption: 'Fabric overview'
		},
		{
			imgName: 'fi-edit',
			caption: 'Update fabric in stock status, and add tags and notes'
		},
		{
			imgName: 'fi-filter',
			caption: 'Filter fabric by quantity, tags, or id'
		},
		{
			imgName: 'fi-pic',
			caption: 'Generate picture to send to customers to show what fabric options are available'
		}
	]
}
