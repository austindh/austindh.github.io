import { Project } from '.';

const description = `
## The Problem
A metal casting facility had data for much of their process using automated machinery,
but didn't have good insight as to how effective different workers were and how long
various parts took at each stage of production. They needed a way for
each worker to input the time spent for each part and each station
in the warehouse, and it needed to be easy to use.

## The Solution
I created a web application to help with gathering and analyzing data.

**Admin** - An admin portion of the website is used to enter in all of
the employees, stations, and parts to be used. Pictures can be added
for each, and data describing the stations and parts is also added.

**Timers** - This is the main part of the site. iPads are placed around
the warehouse near various stations, with a very simple interface to
log work. Employees "sign in" by selecting their name/picture from a
dropdown menu. Then they select which station they are at. Then they
select the part and any special options for the part/station. They
press a "play" button to start a timer, then they start their work.
When their batch is finished, they press "stop". They then enter in how
many units they completed, then press "submit", which sends the data to
the server and deletes the timer. Multiple timers can be added on each
iPad, allowing multiple workers to use each one.

**Server** - The server is written in Node.js and Express, and all data
is stored in a SQLite database. An endpoint is exposed allowing the
timer data to be imported into a Google Sheet, using the \`IMPORTDATA\`
function, where it can then be analyzed however the company wants.
`.trim();

export const WorkerProductivity: Project = { 
	name: 'Worker Productivity Tracker',
	summary: 'A web application to track worker productivity at a custom metal casting facility.',
	description,
	tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite'],
	pics: [
		{
			imgName: 'ipc',
			caption: '**Admin** - Admin portal to add employees, stations, and parts'
		},
		{
			imgName: 'ipc-employee',
			caption: '**Admin** - Add employee with name and picture'
		},
		{
			imgName: 'ipc-station',
			caption: '**Admin** - Add stations with name and pictures. Some stations have special requirements that can be set here.',
			isMain: true
		},
		{
			imgName: 'ipc-part',
			caption: '**Admin** - Add parts with name, company name, and part number. Shown is a placeholder image that will be the default if no image is added. Similar default pictures exist for employees and stations.'
		},
		{
			imgName: 'ipc-filter-part',
			caption: '**Admin** - Parts can be filtered by name, part number, or company name. Checkboxes determine if part is currently in production (will determine what shows up on timer screen). The employee checkboxes determine whether the employee is currently active (if they should be displayed on timer screen).'
		},
		{
			imgName: 'ipc-timer',
			caption: `**Timer** - iPads are located around the facility displaying the timer page. An employee will select themself from a dropdown, then what station they are working at, and what part they're working on. Then they will start the timer.`
		},
		{
			imgName: 'ipc-timer2',
			caption: '**Timer** - Multiple timers can run concurrently. Running timers are saved in localstorage to prevent data loss on page refresh.'
		},
		{
			imgName: 'ipc-timer3',
			caption: '**Timer** - When a worker is finished, they will press stop, then enter how many parts they completed. The submit button will submit the data to the server and remove the timer from the screen.'			
		},
		{
			imgName: 'ipc-sheets',
			caption: 'An endpoint allows for importing the data into Google Sheets using the `IMPORTDATA` function. The data can then analyzed to find trends on worker productivity and data for individual parts to help in future estimating.'
		}
	]
};
