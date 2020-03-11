interface Project {
	name: string
	summary?: string
	description?: string
	tech: string[]
	pics?: string[] // urls
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

/**

Home automation

// Use draw.io to create diagram

Cloud server (EC2 instance, Postgres DB, MongoDB, MQTT server):
	- Twilio
	- Trello
	- Weather (Dark Sky)
	- GroupMe
	- Budgeting website (React and Typescript)
	- Choir texting
	- Owntracks (MQTT)
	- text commands (through Twilio and GroupMe)
	- reminders (set at date/time, wifi reminders, Trello cards reminders, garbage reminders, birthday reminders)

[socket connection]
[API on cloud server (weather data)]

Home server (Intel NUC, SQLite):
	- Philips Hue (schedules, default colors/brightness, cancellable sequences, custom groups, motion sensor, dimmer switch, rate limiting, exponential backoff)
	- Amazon Dash buttons
	- GroupMe
	- Light control website (React)
	- Home status/presence detection (phones (wifi/owntracks) and anonymous sources(Wemo, motion sensors/dimmer switches))
	- Wemo

*/


export const myProjects: Project[] = [
	{ 
		name: 'IPC',
		summary: 'A web application to track worker productivity at a custom metal casting facility.',
		tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite']
	},
	{ 
		name: 'Fabric Inventory',
		summary: `A web application to track my wife's inventory of fabric for her Etsy shop`,
		tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite']
	},
	{ 
		name: 'Home Automation',
		summary: 'My home automation project. What started as a simple Node.js server on a Raspberry Pi has expanded to an external facing server hosted on AWS and a local server running on an Intel NUC.',
		tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'AWS', 'MongoDB', 'Postgres', 'SQLite']
	},
	{ 
		name: 'austinhughes.me',
		summary: 'This website',
		tech: ['React', 'TypeScript']
	},
];
