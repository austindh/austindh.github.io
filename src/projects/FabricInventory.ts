import { Project } from '.';

const description = `
## The Problem
My wife runs an Etsy shop selling custom baby clothes. At any given time, she can have around 70 different fabrics
that customers can choose from. When customers would message her asking about fabric options, she would have to
grab all the fabric fitting their request (e.g. floral or blue), lay them out on the floor, then take a picture
and label each one with a letter. She would then send that customer so they could pick which fabric they wanted.
Many items in her shop are available with two fabrics, so often she would have to take a second picture with options
placed next to each other so the customer could visualize how it would look.

This whole process was tedious, took a lot of space, and it wasn't easy to send out multiple options.

## The Solution
I build a simple web application to run on our home server to make tracking her fabric easier.
`.trim();

export const FabricInventory: Project = { 
	name: 'Fabric Inventory',
	summary: `A web application to track my wife's inventory of fabric for her Etsy shop.`,
	description,
	tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite'],
	pics: [
		{
			imgName: 'fi-old',
			caption: 'The old way of sending fabric pictures to customers - fabric arranged on the floor with letters added for easier reference'
		},
		{ 
			imgName: 'fi',
			caption: 'Fabric overview',
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
