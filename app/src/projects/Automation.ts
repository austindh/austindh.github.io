import { Project } from '.';

const description = `
## Overview
This project got started in the summer of 2015, and has been running ever since.
It is constantly growing and evolving to include new functionality and it's the main
place I test out new web technologies.

Below is a brief overview of all the features:

---

## Cloud server (Amazon EC2 instance)

### Tech Stack:
Typescript, React, RxJS, Express, Postgres, MongoDB, Nginx


### Features/Integrations:
**Twilio** - Used for sending and receiving text messages.

**Trello** - Automatically create cards each month with tasks we need to do. Cards with due
dates trigger daily reminder texts until the card has been completed.

**Weather (Dark Sky)** - Gets weather information used by our home server.

**GroupMe** - Used to send updates and receive text commands.

**Budgeting website** - Built with React and Typescript, it's a simple website to track our income each month.

**Group texting proxy** - Second Twilio number set up to send out individual messages to members of a church
choir. When I text the Twilio number, then message is sent to each individual member. Members can add or
remove themselves from the text list by texting certain commands to the main number. Members' texts to the
number are forwarded to my phone, and I can respond to individually reply. 

**Owntracks** - Private MQTT server to work with Owntracks app. Geolocation data from Owntracks is used
to trigger various actions.

**Text commands** - Various commands are available to trigger different events. These can either by invoked
by texting our Twilio number or sending a message to our GroupMe chat.

**Reminders** - Set by text/GroupMe message. Can be set for a certain time (e.g. "9:30pm"), at an offset (e.g.
"2h") or to trigger the next time we arrive home. There are also recurring reminders, including weekly to take
out the trash (and if it's a recycling week) and Trello card due date reminders.

**REST API** - Used for budget website as well as home server.

**Socket&#46;io server** - Accepts socket connection from our home server. Sends commands back to home server and has logic to queue messages for later if no socket connected.

---

## Home server (Intel NUC)

### Tech Stack:
Typescript, Python, React, RxJS, Express, SQLite

### Features/Integrations:
**Philips Hue** - Schedule for all lights default brightness and color (more blue-white in the morning
and more orange at night). Custom interface for creating individual commands as well as sequences (chained
commands with built in delays that can be cancelled). Custom light groupings. Default brightness/color
overrides that can be set on a group or individual basis and affect all commands using affected lights.
Integration with Hue dimmer switch and motion sensor. Rate limiting commands sent to bridge and retry with
exponential backoff.

**Amazon Dash buttons** - Detect button presses via network activity (python script using \`scapy\`) to trigger
events.

**GroupMe** - Some logging and error messages sent to our GroupMe chat.

**Light control website** - Built with React and Typescript, provides a mobile friendly web app to control the lights
and trigger various functions.

**Home status/presence detection** - RxJS BehaviorSubject with timer constantly counting down. Several "at home" 
event sources that reset timer to max amount (15 minutes). When timer reaches zero, marks status as "not home", turns
off all lights, and sends a message. Next "at home" event received will set status to "at home" and turn the lights 
back on. "At home" event sources include Owntracks, wifi network activity (python \`scapy\` script and \`node-arp\`
library), Wemo switch presses, and Hue motion sensor/dimmer switch activity.

**Wemo** - Automated on/off and scheduling. Integration with hue light commands to treat Wemo switch as a Hue light
and integrate with all Hue commands/sequences.
`.trim();

export const Automation: Project = { 
	name: 'Home Automation',
	summary: 'My home automation project. What started as a simple Node.js server on a Raspberry Pi has expanded to an external facing server hosted on AWS and a local server running on an Intel NUC.',
	tech: ['React', 'TypeScript', 'Node.js', 'Express', 'RxJS', 'Python', 'AWS', 'Nginx', 'MongoDB', 'Postgres', 'SQLite', 'Socket.IO'],
	description,
	pics: [
		{
			imgName: 'automation',
			caption: 'Basic architecture overview'
		},
		{
			imgName: 'automation-home',
			caption: 'Home screen for local mobile friendly web app.'
		},
		{
			imgName: 'automation-nursery',
			caption: 'Buttons to trigger various light functions for each room'
		}
	]
}
