import { Project } from '.';

const description = `
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

socket connection
API on cloud server (weather data)

Home server (Intel NUC, SQLite):
- Philips Hue (schedules, default colors/brightness, cancellable sequences, custom groups, motion sensor, dimmer switch, rate limiting, exponential backoff)
- Amazon Dash buttons
- GroupMe
- Light control website (React)
- Home status/presence detection (phones (wifi/owntracks) and anonymous sources(Wemo, motion sensors/dimmer switches))
- Wemo
`.trim();

export const Automation: Project = { 
	name: 'Home Automation',
	summary: 'My home automation project. What started as a simple Node.js server on a Raspberry Pi has expanded to an external facing server hosted on AWS and a local server running on an Intel NUC.',
	tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'AWS', 'Nginx', 'MongoDB', 'Postgres', 'SQLite'],
	description,
	pics: [{
		imgName: 'automation',
		caption: 'Basic architecture'
	}]
}

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
