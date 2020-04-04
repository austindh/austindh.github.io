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
Typescript, React, Express, Postgres, MongoDB, Nginx


### Features/Integrations:
**Twilio** - Used for sending and receiving text messages.

**Trello** - Automatically creates cards each month with tasks we need to do. Cards with due
dates trigger daily reminder texts until the card has been completed.

**Weather (Dark Sky)** - Gets weather information used by our home server.

**GroupMe** - Used to send updates and receiving text commands.

**Budgeting website** - Built with React and Typescript, it's a simple website to track our income each month.

**Choir texting** - Second Twilio number set up to send out individual messages to members of a church
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

socket connection
API on cloud server (weather data)

---

## Home server (Intel NUC)

### Tech Stack:
Typescript, React, Express, SQLite

### Features/Integrations:
**Philips Hue** - (schedules, default colors/brightness, cancellable sequences, custom groups, motion sensor, dimmer switch, rate limiting, exponential backoff)

**Amazon Dash buttons** -

**GroupMe** -

**Light control website** -

**Home status/presence detection** - (phones (wifi/owntracks) and anonymous sources(Wemo, motion sensors/dimmer switches))

**Wemo** - 
`.trim();

export const Automation: Project = { 
	name: 'Home Automation',
	summary: 'My home automation project. What started as a simple Node.js server on a Raspberry Pi has expanded to an external facing server hosted on AWS and a local server running on an Intel NUC.',
	tech: ['React', 'TypeScript', 'Node.js', 'Express', 'RxJS', 'Python', 'AWS', 'Nginx', 'MongoDB', 'Postgres', 'SQLite', 'Socket.IO'],
	description,
	pics: [{
		imgName: 'automation',
		caption: 'Basic architecture'
	}]
}
